import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSkeleton from "./LoadingSkeleton";

interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  owner: {
    login: string;
  };
}

const DisplayGithub: React.FC = () => {
  const [starredRepos, setStarredRepos] = useState<Repository[]>([]);
  const [username, setUsername] = useState<string>("pruthvill"); // Default username
  const [isLoading, setIsLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    const fetchStarredRepos = async () => {
      try {
        let page = 1;
        let allStarredRepos: Repository[] = [];

        while (true) {
          const response = await axios.get<Repository[]>(
            `https://api.github.com/users/${username}/starred?page=${page}&per_page=100`
          );

          if (response.data.length === 0) {
            break; // No more repositories to fetch
          }

          allStarredRepos = [...allStarredRepos, ...response.data];
          page++;
        }

        setStarredRepos(allStarredRepos);
        setIsLoading(false); // Set loading state to false after fetching data
      } catch (error) {
        console.error("Failed to fetch starred repositories:", error);
        setIsLoading(false); // Set loading state to false in case of error
      }
    };

    fetchStarredRepos();
  }, [username]);

  const handleRepoClick = (repoUrl: string) => {
    window.open(repoUrl, "_blank");
  };

  return (
    <div>
      {isLoading ? (
        <div>
          {Array.from({ length: 14 }, (_, i) => (
            <LoadingSkeleton key={i} />
          ))}
        </div>
      ) : starredRepos.length === 0 ? (
        <p>No starred repositories found.</p>
      ) : (
        <div>
          {starredRepos.map((repo) => (
            <div
              key={repo.id}
              className="border border-gray-400 rounded-[4px] overflow-hidden cursor-pointer p-4 mb-4 max-w-xl min-w-xl hover:shadow-md"
              onClick={() => handleRepoClick(repo.html_url)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-semibold mb-1 text-blue-600">
                    {repo.owner.login}/{repo.name}
                  </h2>
                  <p className="text-gray-600 mb-2">{repo.description}</p>
                  <div className="flex items-center">
                    <span
                      className="w-3 h-3 rounded-full mr-2"
                      style={{
                        backgroundColor: getLanguageColor(repo.language),
                      }}
                    ></span>
                    <span className="text-sm text-gray-600 mr-4">
                      {repo.language}
                    </span>
                    <span className="text-sm text-gray-600 mr-2">
                      <StarIcon className="inline-block mr-1" />
                      {repo.stargazers_count}
                    </span>
                    <span className="text-sm text-gray-600">
                      <ForkIcon className="inline-block mr-1" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const getLanguageColor = (language: string) => {
  // Map of language colors based on GitHub's style
  const languageColors: { [key: string]: string } = {
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Ruby: "#701516",
    "C#": "#178600",
    PHP: "#4F5D95",
    CSS: "#563d7c",
    HTML: "#e34c26",
    TypeScript: "#2b7489",
    // Add more languages as needed
  };

  return languageColors[language] || "#000000"; // Default color if language is not found
};

const StarIcon = ({ className }: { className: string }) => (
  <svg
    aria-label="stars"
    role="img"
    height="16"
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    data-view-component="true"
    className={`octicon octicon-star ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
      fill="#6F6F6F"
    ></path>
  </svg>
);

const ForkIcon = ({ className }: { className: string }) => (
  <svg
    aria-label="forks"
    role="img"
    height="16"
    viewBox="0 0 16 16"
    version="1.1"
    width="16"
    data-view-component="true"
    className={`octicon octicon-repo-forked ${className}`}
  >
    <path
      fillRule="evenodd"
      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
      fill="#6F6F6F"
    ></path>
  </svg>
);

export default DisplayGithub;
