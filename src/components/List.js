import React, { useReducer } from "react";
import ListItem from "./ListItem";
import { initialState, listReducer } from "../reducers/list";
import classNames from "classnames";
import { getMaxFieldOfArrayOfItems } from "../utils/array";

const List = props => {
  const [items, dispatch] = useReducer(listReducer, initialState);
  const className = classNames("list", props.className || "");

  const lastElementOrder = getMaxFieldOfArrayOfItems(items, "order");

  return (
    <ul className={className}>
      {items.length !== 0 &&
        items.map(item => (
          <ListItem
            key={item.id}
            {...item}
            isLastItem={lastElementOrder === item.order}
            onMoveUp={() => dispatch({ type: "MOVE_ITEM_UP", payload: item })}
            onMoveDown={() =>
              dispatch({ type: "MOVE_ITEM_DOWN", payload: item })
            }
            onRemove={() => dispatch({ type: "REMOVE_ITEM", payload: item })}
            onAddSublist={() =>
              dispatch({ type: "ADD_SUBLIST", payload: item })
            }
            onRemoveSublist={() =>
              dispatch({ type: "REMOVE_SUBLIST", payload: item })
            }
          />
        ))}
      <ListItem
        onAdd={newItem => dispatch({ type: "ADD_ITEM", payload: newItem })}
      />
    </ul>
  );
};

export default List;
