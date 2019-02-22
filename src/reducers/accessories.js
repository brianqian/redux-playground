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
      console.log(state, action, action.index);
      const { arms } = state;
      let i = parseInt(action.index);
      const changeObject = Object.assign({}, arms.find(day => day.day === i + 1));
      changeObject.day = changeObject.day + 1;
      console.log(changeObject, i + 1);
      let newArray = [...arms];
      newArray[i] = changeObject;
      console.log(newArray);
      const newState = Object.assign({}, state, { arms: newArray });
      console.log('newstate', newState);
      return newState;

    default:
      return state;
  }
}

export default accessories;
