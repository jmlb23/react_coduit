import React from "react";
import "./Editor.css"


type EditorProps = {

}

export const Editor = (props: EditorProps) =>
  <div className="Editor__container">
    <fieldset className="Editor__fieldset">
      <input className="Editor__inputs Editor__inputs-size" placeholder="Aricle title" />
      <input className="Editor__inputs Editor__inputs-size" placeholder="what's this aricle about?" />
      <textarea className="Editor__inputs Editor__inputs-resize" placeholder="Aricle title" />
      <input className="Editor__inputs Editor__inputs-size" placeholder="Enter tags. ie: tag1 tag2 tag3" />
    </fieldset>
    <button className="Editor__submit" >Publish article</button>
  </div >