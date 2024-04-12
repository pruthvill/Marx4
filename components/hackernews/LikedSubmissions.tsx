import React, { useState, useEffect } from 'react';
import { Submission, fetchLikedSubmissions } from '../app/api/liked-submissions';

const LikedSubmissions: React.FC = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLikedSubmissions();
      setSubmissions(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <ul>
        {submissions.map((submission: Submission) => (
          <li key={submission.id} className="mb-4 border border-gray-300 rounded-md p-4">
            <a
              href={submission.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              {submission.title}
            </a>
            <p className="text-gray-600">Score: {submission.score}</p>
            <p className="text-gray-600">Author: {submission.author}</p>
            <p className="text-gray-600">Comments: {submission.comments}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LikedSubmissions;
