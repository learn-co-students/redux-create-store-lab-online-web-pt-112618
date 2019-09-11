function candyReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CANDY':
      return [...state, action.candy];
    case 'REMOVE_CANDY':
      state.pop
      return state
    default:
      return state;
  }
}

export default candyReducer;
