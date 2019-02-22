function accessories(state = [], action) {
  switch (action.type) {
    case 'CHANGE_ACCESSORIES':
      console.log('in accessory reducer');
      console.log('state', state);
      return state;
    // return {
    //   userAccessories: action.userAccessories,
    // };
    case 'INCREMENT_BUTTON':
      const i = parseInt(action.index);
      const objectCopy = Object.assign({}, state);
      objectCopy.arms[i].day++;
      return objectCopy;

    default:
      return state;
  }
}

export default accessories;
