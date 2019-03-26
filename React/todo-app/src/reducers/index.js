const rootReducer = (state = {
    header: 'Hello Redux',
    counter: 0
}, action) => {
    switch (action.type) {
      case 'TOGGLE_HEADER':
        debugger
        return {
          ...state,
          counter: state.counter + 1,
          header: `${action.header} ${state.counter + 1}`
        }
     
      default:
        return state;
    }
  }
  
  export default rootReducer;