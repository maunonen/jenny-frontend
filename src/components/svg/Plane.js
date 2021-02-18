import React from "react";

function Plane(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      enableBackground="new 0 0 32 32"
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
      {...props}
    >
      <path d="M30.8 14.2C30.1 13.4 29 13 28 13H8.5L4.8 8.4C4.6 8.1 4.3 8 4 8H1c-.3 0-.6.1-.8.4-.2.2-.2.6-.2.9l3 11c.2.4.6.7 1 .7h6.4l-3.3 6.6c-.2.3-.1.7 0 1 .2.2.6.4.9.4h4c.3 0 .6-.1.7-.3l6.9-7.7H28c1.1 0 2.1-.4 2.8-1.2C31.6 19 32 18 32 17s-.4-2.1-1.2-2.8z"></path>
      <path d="M10.4 11h8.5l-5.1-5.7c-.2-.2-.5-.3-.8-.3H9c-.3 0-.7.2-.9.5-.1.3-.1.6 0 .9l2.3 4.6z"></path>
    </svg>
  );
}

export default Plane;