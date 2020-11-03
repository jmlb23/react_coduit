import React from "react";
import { TagItem } from "../TagItem/TagItem";
import "./TagList.css"

type TagListProperties = {
  tags: string[]
}

export const TagList = (props: TagListProperties) =>
  <div className="TagList__div">
    {props.tags.map(x => <TagItem tag={x} key={x} />)}
  </div>