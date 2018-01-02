export default function(initialState, actionHandlers) {
  return (state = initialState, action) => {
    const reduceFn = actionHandlers[action.type];
    if (!reduceFn) return state;
    return { ...state, ...reduceFn(state, action) };
  };
}