import React from "react";
import { Comment } from "../../../../data/CommentDTOS";
import { CommentList } from "./CommentList/CommentList";
import "./Comments.css"

type CommentProps = {
  comments: Comment[]
}

export const Comments = (props: CommentProps) =>
  <div className="Comments">
    {
      props.comments.length === 0 ?
        <div>
          <p>empty </p>
        </div>
        : <CommentList comments={props.comments} />
    }
  </div>