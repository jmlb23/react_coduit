import React from "react";
import "./Favorite.css"

type FavoriteProps = {
  favCount?: number
}

export const Favorite = (props: FavoriteProps) => <button className="Favorite__favorite"><span>&hearts;</span> favorite article ({props?.favCount})</button>
