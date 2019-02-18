import { Reducer } from 'redux';

// Initial State
// =============================

export interface MainState {
  readonly num: number;
}

const initialState = { num: 0 };

// Action Types
// =============================

enum ActionTypes {
  INC = 'INC',
  DEC = 'DEC'
}

// Reducer
// =============================

export type MainActions =
  | ReturnType<typeof incrementAmount>
  | ReturnType<typeof decrementAmount>;

const reducer: Reducer<MainState, MainActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.INC:
      return { ...state, num: state.num + action.payload.amount };
    case ActionTypes.DEC:
      return { ...state, num: state.num - action.payload.amount };
    default:
      const _: never = action;
      return state;
  }
};

export default reducer;

// Action Creator
// =============================

export const incrementAmount = (amount: number) => ({
  type: ActionTypes.INC as ActionTypes.INC,
  payload: {
    amount
  }
});

export const decrementAmount = (amount: number) => ({
  type: ActionTypes.DEC as ActionTypes.DEC,
  payload: {
    amount
  }
});
