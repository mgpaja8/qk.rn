import { Dispatch } from 'redux';

export interface Action {
  type: string;
}

export interface SuccessAction<T> extends Action {
  value: T;
}
export interface ErrorAction<E> extends Action {
  error: E;
}

export interface AsyncActionType {
  start: string;
  done: string;
  fail: string;
}

export function isSuccessAction<V>(action: Action | SuccessAction<V>): action is SuccessAction<V> {
  return (<SuccessAction<V>> action).value !== undefined;
}

export function isErrorAction<E>(action: Action | ErrorAction<E>): action is ErrorAction<E> {
  return (<ErrorAction<E>> action).error !== undefined;
}

export const actionTypeGenerator = (prefix: string) => {
  return {
    async: function asynTypeGenerator(action: string): AsyncActionType {
      return {
        start: `${prefix}_${action}_START`,
        done: `${prefix}_${action}_DONE`,
        fail: `${prefix}_${action}_FAIL`
      };
    },
    value: (action: string) => `${prefix}_${action}`
  };
};

/**
 * helper to dispatch Promise values into asyncActions
 * will trigger start at beginning, done if promise resolves,
 *   or fail if promise is rejected
 *
 * @param {Promise<T>} promise - promise of expected values
 * @param {AsyncActionType} actionType - actionTypes to dispatch
 * @param {Dispatch<Action>} dispatch - redux dispatch
 */
export function asyncAction<T, E>(
  promise: Promise<T>,
  actionType: AsyncActionType,
  dispatch: Dispatch<Action>
): void {
  dispatch<Action>({ type: actionType.start });
  promise
    .then((value: T) => dispatch<SuccessAction<T>>({
      type: actionType.done,
      value
    }))
    .catch((error: E) => dispatch<ErrorAction<E>>({
      type: actionType.fail,
      error
    }));
}
