import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
const DashBoard = () => {
  return (
    <div className="text-center">
      <h1 className="my-4">Admin</h1>
      <div className="ml-[280px]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=kxZN82xEupU"
          width="640px"
          height="360px"
          playing={true}
          controls={false}
        />
      </div>
    </div>
  );
};
export default DashBoard;
