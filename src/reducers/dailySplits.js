function dailySplits(state = [], action) {
  switch (action.type) {
    case 'SPLITS':
      console.log('in dailySplit reducer');
      console.log(state);
      return state;
    // return {
    //   userAccessories: action.userAccessories,
    // };
    default:
      return state;
  }
}

export default dailySplits;
