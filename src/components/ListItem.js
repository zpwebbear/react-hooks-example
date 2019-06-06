import React from "react";
import List from "./List";
import FilledListItem from "./FilledListItem";
import EmptyListItem from "./EmptyListItem";

const ListItem = props => {
  return (
    <li className="list__item item">
      {props.id ? <FilledListItem {...props} /> : <EmptyListItem {...props} />}
      {props.hasSublist && <List className="list--sublist" />}
    </li>
  );
};

export default ListItem;
