function test(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      console.log('incrementing');
      return state + 1;
    case 'DECREMENT_COUNTER':
      console.log('decrementing');
      return state - 1;

    // return {
    //   userAccessories: action.userAccessories,
    // };
    default:
      return state;
  }
}

export default test;
