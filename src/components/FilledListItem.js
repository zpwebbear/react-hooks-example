import React from "react";

const FilledListItem = ({
  label,
  order,
  onMoveUp,
  onMoveDown,
  onRemove,
  onAddSublist,
  onRemoveSublist,
  hasSublist,
  isSublist,
  isLastItem
}) => {
  return (
    <div className="item__row">
      <span className="item__label">{label}</span>
      {order !== 1 && <button onClick={onMoveUp}>&uarr;</button>}
      {!isLastItem && <button onClick={onMoveDown}>&darr;</button>}
      {!isSublist && (
        <>
          {hasSublist ? (
            <button onClick={onRemoveSublist}>Remove sublist</button>
          ) : (
            <button onClick={onAddSublist}>Add sublist</button>
          )}
        </>
      )}
      <button onClick={onRemove}>x</button>
    </div>
  );
};

export default FilledListItem;
