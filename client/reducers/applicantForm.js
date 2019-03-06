export default (state = {}, action) => {
  console.log(action.type)
  switch (action.type) {
    case "INPUT_VALUE":
      return {
        ...state,
        [action.title]: { ...state[action.title], [action.name]: action.val }
      };
    default:
      return state;
  }
};
