import React from "react";

function Zone(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      version="1.1"
      viewBox="0 0 20.019 10.024"
      {...props}
    >
      <g
        fill="#000"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(-170 -210.5)"
      >
        <g transform="translate(170 210.5)">
          <path d="M10 8c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2zm6.02 2c0-3.3-2.72-6-6.02-6-3.3 0-5.915 2.724-5.915 6.024l1.896-.021C5.98 7.803 7.8 6.1 10 6.1s4.058 1.703 4.058 3.903zM10 0C4.5 0 0 4.5 0 10h2c0-4.4 3.6-8 8-8s8.039 3.6 8.039 8h1.98C20.02 4.5 15.5 0 10 0z"></path>
        </g>
      </g>
    </svg>
  );
}

export default Zone;
