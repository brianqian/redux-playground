function accessories(state = [], action) {
  switch (action.type) {
    case 'CHANGE_ACCESSORIES':
      console.log('in accessory reducer');
      console.log('state', state);
      return state;
    // return {
    //   userAccessories: action.userAccessories,
    // };
    default:
      return state;
  }
}

export default accessories;
