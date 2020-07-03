const initialState = "Pepe";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SETSEARCH":
      return payload;

    default:
      return state;
  }
};
