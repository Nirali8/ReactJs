const redux = require("redux");
const createStore = redux.createStore;
const { combineReducer } = require("redux");
const { applyMiddleware } = require("redux");
const reduxLogger = require("redux-logger")
const logger = reduxLogger.createLogger()

/*constant */

const BUY_CHOCOLATE = "BUY_CHOCOLATE";
const BUY_CAKE = "BUY_CAKE";
const BUY_PASTRY = "BUY_PASTRY";

/*Redux Action */

function buy_chocolate() {
  return {
    type: "BUY_CHOCOLATE",
    info: "first redux action",
  };
}
function buy_cake() {
  return {
    type: "BUY_CAKE",
    info: "first redux action",
  };
}
function buy_pastry() {
  return {
    type: "BUY_PASTRY",
    info: "first redux action",
  };
}

/* intialstate for redux */

const initialState = {
  NumOfChocolate: 20,
  NumOfCake: 30,
  NumOfPastry: 50,
};

/*Redux Reducer */

const ChocoReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      return {
        ...state,
        NumOfChocolate: state.NumOfChocolate - 1,
      };
    default:
      return state;
  }
};
const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        NumOfChocolate: state.NumOfChocolate - 1,
      };
    default:
      return state;
  }
};
const PastryReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PASTRY:
      return {
        ...state,
        NumOfChocolate: state.NumOfChocolate - 1,
      };
    default:
      return state;
  }
};

/*redux store */

const rootReducer = redux.combineReducers({
  ChocoReducer,
  CakeReducer,
  PastryReducer,
});

const store = createStore(rootReducer,applyMiddleware(logger));
console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(buy_chocolate());
store.dispatch(buy_cake());
store.dispatch(buy_chocolate());
store.dispatch(buy_pastry());

unsubscribe();
