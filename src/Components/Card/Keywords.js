import React from "react";
const Keywords = keywords => {
  return (
    <div className="card-row">
      <div>
        <svg
          aria-labelledby="keywords"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <title id="keywords" lang="en">
            Keywords
          </title>
          <path d="M35.27 11.69C34.54 10.67 33.35 10 32 10l-22 .02c-2.21 0-4 1.77-4 3.98v20c0 2.21 1.79 3.98 4 3.98L32 38c1.35 0 2.54-.67 3.27-1.69L44 24l-8.73-12.31zM32 34H10V14h22l7.09 10L32 34z" />
        </svg>
      </div>
      <div>
        <h4>Keywords:</h4>

        <ul className="keyword-tags">
          {keywords.data
            ? keywords.data.map(keyword => <li key={keyword}>{keyword}</li>)
            : "Clinical Study"}
        </ul>
      </div>
    </div>
  );
};
export default Keywords;
