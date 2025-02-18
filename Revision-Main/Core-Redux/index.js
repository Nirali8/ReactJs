const redux = require("redux")

//redux creation
const createStore = redux.createStore;

//redux action
const buy_item = () => {
  return {
    type: "BUY_ITEM",
    info: "first redux action",
  };
};

//intialization

let initialState = 12;

//redux reducer

const ItemReducer = (state=initialState,action) => {
    switch (action.type) {
      case "BUY_ITEM":
        return state - 1;
      default:
        return state;
    }
}

//redux store
const store = createStore(ItemReducer);

console.log("store", store);

console.log("inititalState", store.getState());

store.subscribe(() => console.log("updated state", store.getState()));

store.dispatch(buy_item());

store.dispatch(buy_item());
store.dispatch(buy_item());
store.dispatch(buy_item());
store.dispatch(buy_item());
