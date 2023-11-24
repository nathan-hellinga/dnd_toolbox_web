import { createStore, applyMiddleware, compose, Store, Middleware } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer, RootState } from "./reducers";

// Define the persist config with the appropriate type
const persistConfig: PersistConfig<RootState> = {
  key: "root",
  storage,
};

// Redux DevTools Extension
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Create a persisted reducer
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

// Define the type for the store explicitly
let store: Store<RootState> = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware<Middleware>())
);

// Define the persistor
let persistor = persistStore(store);

export { store, persistor };
