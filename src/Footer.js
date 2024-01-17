import React from 'react';

export default function App() {
  const footerStyle = {
    backgroundColor: '#666',
  };

  return (
    <footer style={footerStyle} className="text-center dark:bg-neutral-700 lg:text-left py-4">
      <div className="flex flex-col items-center justify-center lg:justify-start items-center p-4 text-neutral-700 dark:text-neutral-200">
        <span>© 2023 Copyright</span>
        <a
          className="text-neutral-800 dark:text-neutral-400 ml-2"
          href="https://instagram.com/ooymal?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
        >
          Visit my Social Account
        </a>
      </div>
    </footer>
  );
}
