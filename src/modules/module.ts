// Initial State
// =============================

const initialState = { num: 0 };

// Action Types
// =============================

enum ActionNames {
  INC = 'ducksComponent/increment',
  DEC = 'ducksComponent/decrement'
}

// Reducer
// =============================

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionNames.INC:
      return { num: state.num + action.payload.plusAmount };
    case ActionNames.DEC:
      return { num: state.num - action.payload.minusAmount };
    default:
      return state;
  }
};

export default reducer;

// Action Creator
// =============================

export const incrementAmount = (amount: any) => ({
  type: ActionNames.INC,
  payload: {
    plusAmount: amount
  }
});

export const decrementAmount = (amount: any) => ({
  type: ActionNames.DEC,
  payload: {
    minusAmount: amount
  }
});
