import React from "react";
import { Loader } from "../../../../../Common/Loader/Loader";
import { TagItem } from "../TagItem/TagItem";
import "./TagList.css"

type TagListProperties = {
  tags: string[];
  onTagSelected: (n: string) => void
}

export const TagList = (props: TagListProperties) =>
  <>
    {
      props.tags.length === 0 ?
        <Loader height={100} width={100} /> :
        <div className="TagList__div">
          {props.tags.map(x => <TagItem tag={x} key={x} onTagSelected={props.onTagSelected} />)}
        </div>
    }
  </>
