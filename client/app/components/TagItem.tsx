"use client";

interface TagItemProp {
  tag: string;
  index: number;
}

export default function TagItem(props: TagItemProp) {
  return (
    <>
      <li
        className="info inline-block mx-1 px-1 py-0.5 border border-gray-500 rounded"
        key={props.index}
      >
        {props.tag}
      </li>
    </>
  );
}
