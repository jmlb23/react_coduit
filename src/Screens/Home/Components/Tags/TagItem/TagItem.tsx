import React from "react";
import "./TagItem.css";

type TagItemProps = {
  tag: string
  onTagSelected: (n: string) => void
}

export const TagItem = (props: TagItemProps) =>
  <>
    <span onClick={_ => props.onTagSelected(props.tag)} className="TagItem__span">{props.tag}</span>
  </>