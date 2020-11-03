import React from "react";
import "./TagItem.css";

type TagItemProps = {
  tag: string
}

export const TagItem = (props: TagItemProps) =>
  <>
    <a className="TagItem__a">{props.tag}</a>
  </>