


export const todoReducer = ( initialState = [], action ) => {

  switch ( action.type ) {
    case "ABC":
      throw new error("Action.type = ABC no esta implemenmtada");

    default:
      return initialState;
  }

}