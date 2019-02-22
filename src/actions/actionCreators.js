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

export const ajaxRequest = data => {
  return {
    type: 'FETCH_ITEMS',
    data,
  };
};

export const getItems = () => async (dispatch, getState) => {
  const results = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
  return dispatch(ajaxRequest(results));
};

// const fetchPosts = subreddit => dispatch => {
//   dispatch(requestPosts(subreddit));
//   return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(subreddit, json)));
// };

// export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
//   if (shouldFetchPosts(getState(), subreddit)) {
//     return dispatch(fetchPosts(subreddit))
//   }
// }
