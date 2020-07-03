const initialState = "Rick Astley";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SETSEARCH":
      return payload;

    default:
      return state;
  }
};
