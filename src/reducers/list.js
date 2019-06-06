import { compare } from "../utils/sort";
import { getMaxFieldOfArrayOfItems } from "../utils/array";

const getLastOrder = items => {
  return getMaxFieldOfArrayOfItems(items, "order");
};

const getLastId = items => {
  return getMaxFieldOfArrayOfItems(items, "id");
};

const getNewListItem = (state, item) => {
  return {
    id: getLastId(state) + 1,
    order: getLastOrder(state) + 1,
    label: item.label,
    hasSublist: false,
    isSublist: false
  };
};

const initialState = [];

const listReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, getNewListItem(state, action.payload)].sort(compare);
    case "REMOVE_ITEM":
      return state.filter(item => item.id !== action.payload.id).sort(compare);
    case "MOVE_ITEM_UP":
      if (action.payload.order === 1) {
        return state.sort(compare);
      }

      return state
        .map(item => {
          switch (true) {
            case item.order + 1 === action.payload.order:
              return { ...item, order: item.order + 1 };
            case item.order === action.payload.order:
              return { ...item, order: item.order - 1 };
            default:
              return item;
          }
        })
        .sort(compare);
    case "MOVE_ITEM_DOWN":
      let lastOrder = getLastOrder(state);

      if (action.payload.order === lastOrder) {
        return state.sort(compare);
      }

      return state
        .map(item => {
          switch (true) {
            case item.order - 1 === action.payload.order:
              return { ...item, order: item.order - 1 };
            case item.order === action.payload.order:
              return { ...item, order: item.order + 1 };
            default:
              return item;
          }
        })
        .sort(compare);
    case "ADD_SUBLIST":
      return state
        .map(item => {
          if (item.id === action.payload.id) {
            return { ...item, hasSublist: true };
          }
          return item;
        })
        .sort(compare);
    case "REMOVE_SUBLIST":
      return state
        .map(item => {
          if (item.id === action.payload.id) {
            return { ...item, hasSublist: false };
          }
          return item;
        })
        .sort(compare);
    default:
      return state;
  }
};

export { initialState, listReducer };
