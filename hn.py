import requests
from lxml import html

def get_user_liked_submissions(username):
    url = f"https://news.ycombinator.com/favorites?id={username}"
    print("URL:", url)
    response = requests.get(url)

    if response.status_code != 200:
        print("Failed to fetch liked submissions")
        return []

    doc = html.fromstring(response.content)
    liked_submissions = []

    for row in doc.xpath('//tr[@class="athing"]'):
        submission_id = row.get('id')

        # Extract title and link
        title_element = row.xpath('.//td[@class="title"]/span[@class="titleline"]/a/text()')
        link_element = row.xpath('.//td[@class="title"]/span[@class="titleline"]/a/@href')

        if title_element and link_element:
            title = title_element[0]
            link = link_element[0]
        else:
            print("Error: Title or Link not found for row.")
            continue

        # Extract score, author, and number of comments
        subtext_element = row.xpath('following-sibling::tr[1]/td[@class="subtext"]/span')
        if subtext_element:
            subtext = subtext_element[0].text_content()
            parts = subtext.split(' | ')

            author_part = parts[0].split(' by ')[1].split(' ')[0]
            comments_part = parts[1].split(' ')[0].strip() if len(parts) > 1 else '0'  # Strip whitespace characters

     

            author = author_part
            comments = int(comments_part.replace('comments', '').replace('&nbsp;', ''))
        else:
            print("Error: Subtext not found for row.")
            continue

        # Print the details of the submission
        print("Submission ID:", submission_id)
        print("Title:", title)
        print("Link:", link)
        print("Author:", author)
        print("Comments:", comments)

        liked_submissions.append({
            'id': submission_id,
            'title': title,
            'link': link,
            'author': author,
            'comments': comments
        })

    if liked_submissions:
        print("Found", len(liked_submissions), "liked submissions.")
    else:
        print("No liked submissions found.")

    return liked_submissions

if __name__ == '__main__':
    username = 'harscoat'
    liked_submissions = get_user_liked_submissions(username)

    for submission in liked_submissions:
        print(f"ID: {submission['id']}")
        print(f"Title: {submission['title']}")
        print(f"Link: {submission['link']}")
        print(f"Author: {submission['author']}")
        print(f"Comments: {submission['comments']}")
        print()
