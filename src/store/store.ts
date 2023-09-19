import { rootReducer } from "./reducers"; // Корневой редьюсер, который обрабатывает экшены
import { applyMiddleware, compose, createStore } from "redux";

import {
    useSelector as selectorHook,
    TypedUseSelectorHook, useDispatch as dispatchHook
} from 'react-redux';
import thunkMiddleware from "redux-thunk";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
//вызов расширения Redux DevTools. Проверка наличия объектов window и window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__. Если всё хорошо,
//вызовется расширение с пустым набором опций. В противном случае — вернется compose.
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware)
);
// Инициализируем хранилище с помощью корневого редьюсера
export const store = createStore(rootReducer, enhancer);
export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch>();