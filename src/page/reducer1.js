import { useState, useReducer } from 'react';

export default function Reducer() {

    const [point, setPoint] = useState(0);
    // const [사용변수명, 저장시 호출되는 함수명]
    // = uesReducer(호출되면 처리하는 함수명, 뭘 저장할 것인지 초기값);
    const [count, dispatch1] = useReducer(sendReducer, 0);

    // reducer 받아서 처리하는 부분 (호출되면 처리하는 부분)
    // (이전의 데이터 보관, reducer에게 하는 명령)
    // action = text -> json
    // action의 type을 어떤 형태로 변형할 것인가?
    // 임의 값[미지수] (type에 따라서 어떻게 state에 적용할 것인가?)
    // {type: 'input', val: 0}
    function sendReducer(state, action) {
        if (action === 'up') { // action이 up을 주면
            return state + 1; // 이전 값은 0 (리턴값이 Reducer에 저장)
        }
        else if (action === 'down') {
            return state - 1;
        }
        else if (action === 'reset') {
            return 0;
        }
        else if (action.type === 'input') {
            return action.value;
        }
    }

    return (
        <div>
            <h1>Reducer</h1>
            {count}
            <input type="button" value="증가"
                onClick={() => {
                    // setPoint(point + 1); // 기존
                    dispatch1('up');
                }} />

            <input type="button" value="감소"
                onClick={() => {
                    // setPoint(point + 1); // 기존
                    dispatch1('down');
                }} />

            <input type="button" value="리셋"
                onClick={() => {
                    // setPoint(point + 1); // 기존
                    dispatch1('reset');
                }} />
            <br />

            <input type="text" value={point}
                onChange={e => { setPoint(e.target.value) }} />
            <input type="button" value="전송"
                onClick={() => {
                    const num = point;
                    const action = {
                        type: 'input',
                        value: num
                    }
                    dispatch1(action);
                }}
            />
        </div>
    )
}