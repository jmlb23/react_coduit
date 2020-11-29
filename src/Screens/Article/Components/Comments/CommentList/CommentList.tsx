import React from "react";
import { Comment } from "../../../../../data/CommentDTOS";
import { CommentItem } from "../CommentItem/CommentItem";


type CommentListProps = {
  comments: Comment[]
}

export const CommentList = (props: CommentListProps) =>
  <>
    {props.comments.map(x => <CommentItem content={x.body} date={x.createdAt} image={x.author.image} username={x.author.username} key={x.id} />)}
  </>