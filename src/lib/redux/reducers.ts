import {
  Action,
  AsyncActionType,
  ErrorAction,
  isErrorAction,
  isSuccessAction,
  SuccessAction
} from './actions';

export type ActionReducer<T> = (store: T, action: any) => T;

export interface APIResult<T, E> {
  loading: boolean;
  error?: E;
  value?: T;
}

export function clearErrorResult<T, E>(value: APIResult<T, E>): APIResult<T, E> {
  return { ...value, error: undefined };
}
export function emptyAPIResult<T, E>(): APIResult<T, E> {
  return {
    loading: false,
    error: undefined,
    value: undefined
  };
}
export function errorAPIResult<T, E>(error: E): APIResult<T, E> {
  return {
    loading: false,
    error,
    value: undefined
  };
}
export function loadingAPIResult<T, E>(): APIResult<T, E> {
  return {
    loading: true,
    error: undefined,
    value: undefined
  };
}
export function successAPIResult<T, E>(value: T): APIResult<T, E> {
  return {
    loading: false,
    error: undefined,
    value
  };
}

export function loadingReducer<T, K extends keyof T>(key: K):
(store: T, action: Action) => T {
  return (store, _action) => {
    const storeReturn = {
      ...store as any, // TypeScript does not support spread operators for generics
      [key]: loadingAPIResult()
    };
    return storeReturn as T;
  };
}

export function successReducer<T, K extends keyof T, V>(key: K):
(store: T, action: Action | SuccessAction<V>) => T {
  return (store, action) => {
    if (isSuccessAction(action)) {
      const storeReturn = {
        ...store as any, // TypeScript does not support spread operators for generics
        [key]: successAPIResult(action.value)
      };
      return storeReturn as T;
    }
    return store;
  };
}

export function errorReducer<T, K extends keyof T, E>(key: K):
(store: T, action: Action | ErrorAction<E>) => T {
  return (store, action) => {
    if (isErrorAction(action)) {
      const storeReturn = {
        ...store as any, // TypeScript does not support spread operators for generics
        [key]: errorAPIResult(action.error)
      };
      return storeReturn as T;
    }
    return store;
  };
}

export function valueReducer<T, K extends keyof T>(key: K):
(store: T, action: SuccessAction<T>) => T {
  return (store, action) => {
    const storeReturn = {
      ...store as any, // TypeScript does not support spread operators for generics
      [key]: action.value
    };
    return storeReturn as T;
  };

}

export function mapReducers<T>(
  reducerMap: Map<string, ActionReducer<T>>,
  initialState: T
) : ActionReducer<T> {
  return (store: T = initialState, action: Action) => {
    if (reducerMap.has(action.type)) {
      const reducer = reducerMap.get(action.type);
      if (reducer) {
        return reducer(store, action);
      }
    }
    return store;
  };
}

export type ReducerResult<T> = [string, ActionReducer<T>];
export type AsyncReducerResult<T> = ReducerResult<T>[];
export function asyncReducer<T, K extends keyof T>(actionType: AsyncActionType, key: K):
AsyncReducerResult<T> {
  return [
    [actionType.start, loadingReducer(key)],
    [actionType.done, successReducer(key)],
    [actionType.fail, errorReducer(key)]
  ];
}
export type ReducerArrayType<T> = ReducerResult<T> | AsyncReducerResult<T>;
export function mapReducersArray<T>(
  reducerArray: ReducerArrayType<T>[],
  initialState: T
) : ActionReducer<T> {
  const reducerMap = (reducerArray || []).reduce(
    (acc: Map<string, ActionReducer<T>>, result: ReducerArrayType<T>) => {
      if (Array.isArray(result[0])) {
        (<AsyncReducerResult<T>> result).forEach(asyncResult => {
          acc.set(asyncResult[0], asyncResult[1]);
        });
      } else {
        acc.set((<ReducerResult<T>> result)[0], (<ReducerResult<T>> result)[1]);
      }
      return acc;
    }, new Map<string, ActionReducer<T>>());
  return mapReducers(reducerMap, initialState);
}
