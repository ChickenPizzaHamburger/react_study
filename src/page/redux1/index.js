import { Provider, useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';
import store from './store';

export default function Index() {
    return (
        <div>
            <h1>Redux</h1><hr />
            <Provider store={store}>
                <Input />
                <Output />
            </Provider>
        </div>
    )
}

function Input() {

    const dispatch = useDispatch();
    var number = useRef(0);

    return (
        <div>
            <h1>Input Area</h1>
            <input type="text"
                onChange={e => {
                    number.current = e.target.value
                }} />
            <input type="button" value="전송"
                onClick={() => {
                    dispatch({
                        type: 'numberUp',
                        num: number.current
                    })
                }} />
        </div>
    )
}

function Output() {

    const number = useSelector(state => state.data.num);

    return (
        <div>
            <h1>Output Area</h1>
            <p>Number: {number}</p>
        </div>
    )
}
