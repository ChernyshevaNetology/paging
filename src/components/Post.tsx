import React from "react";

interface IPostProps {
  id: number;
  title: string;
  body: string;
}

const Post = ({ id, title, body }: IPostProps) => {
  return (
    <div className={"post"} key={id}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export { Post };
