import { Action } from 'redux';

// Initial State
// =============================
export interface CounterState {
  num: number;
}

const initialState: CounterState = { num: 0 };

// Action Types
// =============================

enum ActionNames {
  INC = 'ducksComponent/increment',
  DEC = 'ducksComponent/decrement'
}

// Reducer
// =============================

export type CounterActions = IncrementAction | DecrementAction;

const reducer = (
  state: CounterState = initialState,
  action: CounterActions
): CounterState => {
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

interface IncrementAction extends Action {
  type: ActionNames.INC;
  payload: {
    plusAmount: number;
  };
}

export const incrementAmount = (amount: number): IncrementAction => ({
  type: ActionNames.INC,
  payload: {
    plusAmount: amount
  }
});

interface DecrementAction extends Action {
  type: ActionNames.DEC;
  payload: {
    minusAmount: number;
  };
}

export const decrementAmount = (amount: number): DecrementAction => ({
  type: ActionNames.DEC,
  payload: {
    minusAmount: amount
  }
});
