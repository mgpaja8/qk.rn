import { Action, combineReducers, Reducer, ReducersMapObject } from 'redux';

export type GenericAction = Action;

export default function setupReducers<S, A extends Action>(
  reducers: ReducersMapObject<S, A>
): Reducer<S, A> {
  return combineReducers<S, A>({
    ...reducers as any // spread types may only be created from object types
  });
}
