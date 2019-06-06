import React, { useState } from "react";

const isValid = string => Boolean(string.trim());

const EmptyListItem = ({ onAdd }) => {
  const [label, setLabel] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

    if (!isValid(label)) {
      return;
    }

    onAdd({ label });
    setLabel("");
  };

  const handleChange = event => {
    setLabel(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="item__input"
        type="text"
        name="label"
        value={label}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default EmptyListItem;
