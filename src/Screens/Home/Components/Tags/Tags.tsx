import React from "react";
import { TagList } from "./TagList/TagList";
import "./Tags.css";


type TagsProps = {
  tags: string[]
}

export const Tags = (props: TagsProps) => <div className="Home__div" >
  <p className="Home__p">Popular Tags</p>
  <TagList tags={props.tags.filter(x => x !== "")} />
</div> 