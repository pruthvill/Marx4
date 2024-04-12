import * as cheerio from 'cheerio';

export interface Submission {
  id: string;
  title: string;
  link: string;
  score: number;
  author: string;
  comments: number;
}

const likedSubmissions: Submission[] = [];

export const fetchLikedSubmissions = async (logData: boolean = false) => {
  try {
    const username = 'tantricwizard';
    const url = `https://news.ycombinator.com/favorites?id=${username}`;
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    $('tr.athing').each((index, element) => {
      const $row = $(element);
      const $titleLink = $row.find('.titleline a');
      const title = $titleLink.text();
      const link = `https://news.ycombinator.com/${$titleLink.attr('href')}`;

      const $subtext = $row.next().find('.subtext');
      const scoreText = $subtext.find('span').first().text();
      const score = parseInt(scoreText.split(' ')[0].replace('points', '')) || 0;
      const author = scoreText.split(' by ')[1].split(' ')[0];
      const commentsText = $subtext.find('a').last().text();
      const comments = parseInt(commentsText.replace(/[^0-9]/g, '')) || 0;

      const submission: Submission = {
        id: $row.attr('id') || '',
        title,
        link,
        score,
        author,
        comments,
      };

      likedSubmissions.push(submission);

      // Log each submission if logData is true
      if (logData) {
        console.log('Fetched Submission:', submission);
      }
    });

    // Log all submissions if logData is true
    if (logData) {
      console.log('All Liked Submissions:', likedSubmissions);
    }

    return likedSubmissions;
  } catch (error) {
    console.error('Error fetching liked submissions:', error);
    return [];
  }
};
