function ajaxRequest(state = [], action) {
  switch (action.type) {
    case 'FETCH_ITEMS':
      console.log(state);

      return state;

    default:
      return state;
  }
}

export default ajaxRequest;
