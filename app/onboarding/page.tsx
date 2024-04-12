"use client"
import React, { useState } from 'react';

interface AuthWindowOptions {
  width: number;
  height: number;
}

const Onboarding = () => {
  const [authWindow, setAuthWindow] = useState<Window | null>(null);

  const handleAuthentication = (appName: string) => {
    const authWindowOptions: AuthWindowOptions = {
      width: 800,
      height: 600,
    };

    const authWindowFeatures = `width=${authWindowOptions.width},height=${authWindowOptions.height}`;

    // Open a new window for authentication
    const newAuthWindow = window.open(
      `/api/auth/${appName}`,
      'Authentication',
      authWindowFeatures
    );

    setAuthWindow(newAuthWindow);

    // Listen for the authentication response
    window.addEventListener('message', (event) => {
      if (event.data.token) {
        // Handle the authentication token
        console.log(`${appName} token:`, event.data.token);
        // Perform any additional actions with the token
      }
    });
  };

  const handleAuthWindowClose = () => {
    if (authWindow) {
      authWindow.close();
      setAuthWindow(null);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-blue-900">
      <div className="max-w-lg w-full bg-white rounded-xl p-10 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Connect with Your Apps
        </h2>
        <p className="text-center mb-10 text-gray-600 text-lg">
          Explore the possibilities by connecting with your favorite apps.
        </p>
        <div className="grid grid-cols-3 gap-6">
          <AppButton
            color="#FF0000"
            iconClass="fab fa-youtube fa-2x"
            onClick={() => handleAuthentication('youtube')}
            appName="YouTube"
          />
          <AppButton
            color="#BD081C"
            iconClass="fab fa-pinterest fa-2x"
            onClick={() => handleAuthentication('pinterest')}
            appName="Pinterest"
          />
          <AppButton
            color="#1DA1F2"
            iconClass="fab fa-twitter fa-2x"
            onClick={() => handleAuthentication('twitter')}
            appName="Twitter"
          />
          <AppButton
            color="#FF5700"
            iconClass="fab fa-reddit fa-2x"
            onClick={() => handleAuthentication('reddit')}
            appName="Reddit"
          />
          <AppButton
            color="#53B778"
            iconClass="fas fa-book fa-2x"
            onClick={() => handleAuthentication('goodreads')}
            appName="Goodreads"
          />
          <AppButton
            color="#333333"
            iconClass="fab fa-github fa-2x"
            onClick={() => handleAuthentication('github')}
            appName="GitHub"
          />
          <AppButton
            color="#FF6600"
            iconClass="fas fa-code fa-2x"
            onClick={() => handleAuthentication('hackernews')}
            appName="Hacker News"
          />
          <AppButton
            color="#4169E1"
            iconClass="fab fa-amazon fa-2x"
            onClick={() => handleAuthentication('kindle')}
            appName="Kindle"
          />
          <AppButton
            color="#E7027F"
            iconClass="fas fa-th-large fa-2x"
            onClick={() => handleAuthentication('notion')}
            appName="Notion"
          />
        </div>
      </div>
      {authWindow && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleAuthWindowClose}
        >
          <div className="bg-white rounded-xl p-8 max-w-md shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Authentication Required
            </h3>
            <p className="text-gray-600 mb-6">
              Please complete the authentication process in the new window to proceed.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
              onClick={handleAuthWindowClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const AppButton = ({
  color,
  iconClass,
  onClick,
  appName,
}: {
  color: string;
  iconClass: string;
  onClick: () => void;
  appName: string;
}) => (
  <button
    className={`bg-${color} hover:bg-${color}-dark text-white font-bold py-4 px-6 rounded-xl flex flex-col items-center justify-center transition-colors duration-300`}
    onClick={onClick}
  >
    <i className={iconClass}></i>
    <span className="mt-2">{appName}</span>
  </button>
);

export default Onboarding;
