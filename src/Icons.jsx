import React from "react";

export function GitHubIcon({ dest }) {
  return (
    <a className="github-link" href={dest} target="_blank" rel="noopener noreferrer">
      <svg className="github-icon" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
        <title>GitHub Project</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        />
      </svg>
    </a>
  );
}

export function LinkedInIcon() {
  return (
    <a
      className="linkedIn-link"
      href="https://www.linkedin.com/in/colston-streit/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg className="linkedIn-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>LinkedIn</title>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    </a>
  );
}

export function SeeLiveIcon({ dest }) {
  return (
    <a className="see-live-link" href={dest} target="_blank" rel="noopener noreferrer">
      <svg className="see-live-icon" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>See Live</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="icon" fill="#000000" transform="translate(85.333333, 64.000000)">
            <path
              d="M128,63.999444 L128,106.666444 L42.6666667,106.666667 L42.6666667,320 L256,320 L256,234.666444 L298.666,234.666444 L298.666667,362.666667 L4.26325641e-14,362.666667 L4.26325641e-14,64 L128,63.999444 Z M362.666667,1.42108547e-14 L362.666667,170.666667 L320,170.666667 L320,72.835 L143.084945,249.751611 L112.915055,219.581722 L289.83,42.666 L192,42.6666667 L192,1.42108547e-14 L362.666667,1.42108547e-14 Z"
              id="Combined-Shape"
            ></path>
          </g>
        </g>
      </svg>
    </a>
  );
}
