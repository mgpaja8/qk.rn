import { OperaionStore } from '../store';
import { mapReducersArray } from '../lib/redux/reducers';

const INITIAL_STATE: OperaionStore = {
  id: undefined
};

export default mapReducersArray<OperaionStore>([], INITIAL_STATE);
