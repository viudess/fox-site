import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //useEffect(() => {
    //const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //setIsDarkMode(localStorage.getItem('darkMode') === '' || prefersDarkMode);
  //}, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full focus:outline-none"
    >
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 dark:text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707-.707m11.314 0l-.707.707M6.343 6.343l-.707.707" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800 dark:text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10 10 10 0 0 1-10-10A10 10 0 0 1 12 2zm0 16.93a6.93 6.93 0 0 0 6.93-6.93A6.93 6.93 0 0 0 12 5.07 6.93 6.93 0 0 0 5.07 12 6.93 6.93 0 0 0 12 18.93z" />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
