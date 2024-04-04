"use client";

import TagItem from "./TagItem";

interface DataProp {
  item_title: string;
  item_body: string;
  item_tags: string[];
  item_reactions: number;
  index: number;
}

export default function ListItemComponent(props: DataProp) {
  return (
    <>
      <div className="card mt-2" key={props.index}>
        <h4>{props.item_title}</h4>
        <p className="info text-left">{props.item_body}</p>
        <p className="info mt-4">Liked: {props.item_reactions}</p>
        <ul className="post-tags list-none mt-2">
          {props.item_tags?.map((tag: string, tagIndex: number) => {
            return <TagItem tag={tag} index={tagIndex} />;
          })}
        </ul>
      </div>
    </>
  );
}
