import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { rootReducer } from './rootReducer.js';
import config from '../config/config.js';
// import { setUser, selectIsUserInitialized } from '../features/user/index.js';
import get_my_info from '../service/api/get/get_account_my_info.js';
import { userSlice } from '../entities/user/index.js';
import { sessionSlice } from '../entities/session/index.js';

//TODO
const monkUser = {
  email: 'd',
  password: '',
  nickname: '',
  realName: '',
  phoneNum: '',
  address: '',
  gender: '',
  role: 'GUEST',
};

// 커스텀 로깅 미들웨어
const logger = (store) => (next) => (action) => {
  if (!config.isProduction) {
    console.log('dispatching', action);
  }
  let result = next(action);
  if (!config.isProduction) {
    console.log('next state', store.getState());
  }
  return result;
};

//persist/REHYDRATE 액션이 발생했을 때 사용자 정보를 가져오는 로직
const rehydrateMiddleware = (store) => (next) => async (action) => {
  const state = store.getState();
  //if(action.type === REHYDRATE && state.session.isInitialized)
  if (action.type === REHYDRATE) {
    if (state.user?.isInitialized) return next(action);
    console.log('❌', state.user?.isInitialized);
    try {
      let getMyInfo = await get_my_info().then((res) => {
        return res.response;
      });
      store.dispatch(userSlice.actions.setUser(getMyInfo)); // 사용자 정보를 가져오는 액션을 디스패치
    } catch {
      console.log('❌ Token is expired or not valid');
      store.dispatch(userSlice.actions.clearUser());
      store.dispatch(sessionSlice.actions.logout());
    }
  }
  return next(action);
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['session'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger, rehydrateMiddleware),
  devTools: !config.isProduction,
});

export const persistor = persistStore(store);

// TypeScript 타입 정의를 주석으로 남깁니다.
// 이는 향후 TypeScript로 마이그레이션할 때 참고할 수 있습니다.
/**
 * @typedef {ReturnType<typeof store.getState>} RootState
 */

/**
 * @typedef {typeof store.dispatch} AppDispatch
 */

export default store;
