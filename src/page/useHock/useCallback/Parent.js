import Child from './Child';
import {useState, useCallback} from 'react';

export default function Parent(){

    const [count, setCount] = useState(0);

    const handlerRandom = useCallback(() => {
        console.log('함수 실행');
    }, []);

    return(
        <div>
            <h1>부모 Component</h1>

            <input type="button" value="값 증가"
            onClick={() => setCount(count+1)} />{count}

            <Child onHandlerEvent={handlerRandom} />
        </div>
    )
}