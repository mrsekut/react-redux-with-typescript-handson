// Initial State
// =============================

const initialState = { num: 0 };

// Action Types
// =============================

enum ActionTypes {
  INC = 'INC',
  DEC = 'DEC'
}

// Reducer
// =============================

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.INC:
      return { ...state, num: state.num + action.payload.amount };
    case ActionTypes.DEC:
      return { ...state, num: state.num - action.payload.amount };
    default:
      return state;
  }
};

export default reducer;

// Action Creator
// =============================

export const incrementAmount = (amount: any) => ({
  type: ActionTypes.INC,
  payload: {
    amount
  }
});

export const decrementAmount = (amount: any) => ({
  type: ActionTypes.DEC,
  payload: {
    amount
  }
});
