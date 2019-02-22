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
    type: 'INCREMENT_COUNTER',
  };
}
export function incrementButton(index) {
  return {
    type: 'INCREMENT_BUTTON',
    index,
  };
}

export function decrement() {
  return {
    type: 'DECREMENT_COUNTER',
  };
}
