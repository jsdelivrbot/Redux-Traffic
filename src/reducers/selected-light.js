// state here is just the piece of the application state that is
// concerned with this reducer
export default (state = "RED", action) => {
  switch (action.type) {
    case 'SELECTED_LIGHT':
      return action.payload
      break;
    default:
      return state;
  }
}
