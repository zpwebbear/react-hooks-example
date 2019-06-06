const getMaxFieldOfArrayOfItems = (items, field) => {
  return Math.max(...items.map(item => item[field]), 0);
};

export { getMaxFieldOfArrayOfItems };
