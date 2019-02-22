function ajaxRequest(state = [], action) {
  switch (action.type) {
    case 'FETCH_ITEMS':
      console.log(action.data);

      return state;

    default:
      return state;
  }
}

export default ajaxRequest;
