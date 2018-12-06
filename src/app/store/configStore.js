import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../redusers/rootReducer'

export const configureStore = (preloadedState) => {
    const middlewares = []
    const middlewaresEnhancer = applyMiddleware(...middlewares)

    const storeEnhancers = [middlewaresEnhancer]

    const composedEnhancer = composeWithDevTools(...storeEnhancers)

    const store = createStore(
        rootReducer,
        preloadedState,
        composedEnhancer
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('../redusers/rootReducer.js', () => {
                const newRootReducer = require('../redusers/rootReducer').default
                store.replaceReducer(newRootReducer)
            })
        }
    }

    return store
}