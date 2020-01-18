const initialState = {};

const storage = createSensitiveStorage({
  keychainService: 'myKeychain',
  sharedPreferencesName: 'mySharedPrefs'
});

const config = {
  key: 'root',
  storage
};

const middleware = [thunk];

const reducer = persistCombineReducers(config, rootReducer);

export default () => {
  let store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
  let persistor = persistStore(store);

  return { store, persistor };
};
