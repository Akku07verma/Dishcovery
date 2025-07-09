import React, { useState } from "react";

export default function CheckBox(props) {
  const [isCheck, setIsCheck] = useState(false);
  return (
    <div className="flex cursor-pointer mb-1">
      <input
        type="checkbox"
        onChange={() => setIsCheck(!isCheck)}
        className="check mr-2 w-[20px] cursor-pointer"
      />
      <p
        className="text-xl "
        style={{
          textDecoration: isCheck ? "line-through" : "",
          color: isCheck ? "#A5A5A5" : "black",
        }}
      >
        {props.title}
      </p>
    </div>
  );
}
