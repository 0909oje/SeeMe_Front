// 리듀서가 두개 이상이면 합쳐야함.
// 여기서는 리듀서가 COVID_MAIN에 대한 것 하나밖에 없으므로
// 사실상 combine을 하지 않아도 되지만
// 통념상 여러 개의 리듀서를 합치는 작업을 하므로
// 하나의 리듀서를 root 리듀서로 씀을 적어둠.

import {combineReducers} from 'redux';
import user from './user_reducer';

const rootReducer = combineReducers({
    user
})

export default rootReducer;