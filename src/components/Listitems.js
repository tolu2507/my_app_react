import React, { useState } from "react";

export function Items({ item, onEdit, OnDelete }) {
  const [edit, setEdit] = useState(false);

  function handleTogle() {
    setEdit(!edit);
    console.log(edit);
  }

  function handleChan(e) {
    onEdit({ ...item, todo: e.target.value });
  }

  let items;
  if (edit) {
    items = (
      <>
        <input name="text" value={item.todo} onChange={handleChan} />
        <button onClick={handleTogle}
        >
          save
        </button>
      </>
    );
  } else {
    items = (
      <>
        {item.todo} <button onClick={handleTogle}>edit</button>
      </>
    );
  }

  return (
    <>
      {items}
      <button
        onClick={() => {
          OnDelete(item.id);
        }}
      >
        del
      </button>
    </>
  );
}
