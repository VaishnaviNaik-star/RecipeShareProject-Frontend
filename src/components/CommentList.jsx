import React from "react";

export default function CommentList({ comments }) {
  return (
    <ul className="comment-list">
      {comments.map((c, idx) => (
        <li key={idx}>{c}</li>
      ))}
    </ul>
  );
}
