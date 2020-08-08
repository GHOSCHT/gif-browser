const darkModeReducer = (state = true, action) => {
  switch (action.type) {
    case "TOGGLEDARKMODE":
      return !state;
    default:
      return state;
  }
};

export default darkModeReducer;
