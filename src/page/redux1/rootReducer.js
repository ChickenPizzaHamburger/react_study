import { combineReducers } from 'redux';

// state 초기값 설정
const initState = {
    num: 0,
    text: 'text'
}

function dataReducer(state = initState, action) { // 초기값(가져다가 쓴다), 액션
    if (action.type == 'numberUp') {
        return { ...state, num: action.num }
    } else {
        return initState;
    }
}

const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;