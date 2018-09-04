import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "reducers/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const configureStore = (initialState) => {
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const storeEnhancers = [middlewareEnhancer];
    
    const composedEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        initialState,
        composedEnhancer
    );

    return store;
};

export default configureStore;