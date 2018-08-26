import { ActionReducer } from '../lib/redux/reducers';
import operationReducer from './operationReducer';

import { OperaionStore } from '../store';

export interface QKReducers {
  operation: ActionReducer<OperaionStore>;
}

// TODO: Fix type of reducers (Should be QKReducers)
const reducers: any = {
  operation: operationReducer
};

export default reducers;
