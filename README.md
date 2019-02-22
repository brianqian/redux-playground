# Redux Notes

- Connect components to store via connect() instead of passing down through React.cloneElement.
  - mapStateToProps needs to be called to pass data from store to that component

```Javascript
const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
}
 //used to connect actionCreators to component
```

- createStore(rootReducer, defaultState, applyMiddleware())
- When using defaultState, they key names must match the keys as defined in rootReducer. Specifically inside the combineReducers function.
  - This way, each reducer function has its own defaultState depending on its name.
- Thunk allows you to dispatch functions that don't necessarily return an object.
- These functions are useful for dispatching an action while async occurs, waiting, and then dispatching another action on success/fail

## Data flow

- Store is established either as a defaultStore and passed to createStore or exists as the default value as the first argument in your reducer
- Reducer functions are what actually manipulate your state, but true to React, not directly. State is copied from the default, manipulated, and then returned
- Reducers take in two arguments, state and an action. The action is an object usually with at least one key, ‘type’. Reducers are comprised of a switch case that takes in object.type and executes the code that manipulates state
- Reducers can be contained in a single rootReducer file or combined via combineReducers. After the reducers are written, they are passed as the first argument to createStore.
- Actions functions must return an object and can take in arguments. These arguments pass data to the reducer if needed to manipulate state and are accessed in the reducer via key.
- A caveat to actions returning objects is when you’re using redux-thunk middleware. This allows you to dispatch functions as well which can have async code in them and then dispatch actions themselves. These functions are stored with all the other functions.
  - These functions take arguments like a non-thunk function and return another function that takes in two arguments, dispatch and getState. Dispatch can be used to dispatch actions. getState returns the current store. This can be used to execute another function which takes state as an argument and executes some code depending on the status of the state.
- Actions are then either exported in their entirety as an actionCreator and bound to a component via connect & mapDispatchToProps & bindActionCreators (which make them directly accessible by that component) or they can be imported as named imports individually to each component
- Some key objects
  - defaultState = {name1: ‘test’, key2: 3}
  - rootReducer = combineReducers{name1, key2}
- if no default state is used in createStore, then reducer names can be anything - createStore(rootReducer, defaultState, applyMiddleware)
  - You must surround your app with a Provider component that is imported from ‘redux’. Provider takes a prop called store and it’s passed the imported store (ie createStore)
  - Children to provider can now access the entire store by using connect(mapStateToProps)(ComponentName)
  - mapStateToProps is a function that the user writes that selects what from state is needed for that component. This is also where you would also bind your action creators using connect(mapStateToProps, mapDispatchToProps)(ComponentName)
  - store is accessed in the component via props. Components can also now dispatch actions since the connect function also passes down the dispatch function implicitly.
