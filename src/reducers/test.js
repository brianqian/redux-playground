function test(state = [], action) {
  switch (action.type) {
    case 'INCREMENT':
      console.log('incrementing');
      return state + 1;
    case 'DECREMENT':
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
