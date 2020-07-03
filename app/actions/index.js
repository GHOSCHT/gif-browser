//ACTIONS
export const toggleDarkMode = () => {
  return { type: "TOGGLEDARKMODE" };
};

export const setSearch = (payload) => {
  return {
    type: "SETSEARCH",
    payload,
  };
};
