export default (state = "Rick Astley", { type, payload }) => {
  switch (type) {
    case "SETSEARCH":
      return payload;

    default:
      return state;
  }
};
