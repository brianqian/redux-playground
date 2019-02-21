export function changeAccessories(userAccessories = { test: 'hello' }) {
  return {
    type: 'CHANGE_ACCESSORIES',
    userAccessories,
  };
}

export function makeSplits() {
  return {
    type: 'SPLITS',
  };
}

export function increment() {
  return {
    type: 'INCREMENT',
  };
}

export function decrement() {
  return {
    type: 'DECREMENT',
  };
}
