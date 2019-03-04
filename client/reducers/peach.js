const initialState = require("./../utils/initialState");

const peachReducer = (state = initialState.initialState, action) => {
  switch (action.type) {
    case "WASH":
      return { ...state, dirty: false };
    case "EAT":
      return {
        ...state,
        remainingBites: Math.max(0, state.remainingBites - action.bites)
      };
    case "ROT":
      return { ...state, color: "brown", throwOut: true };
    default:
      return state;
  }
};

export default peachReducer;
