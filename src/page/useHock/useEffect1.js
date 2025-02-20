import {useState, useEffect} from 'react';

export default function UseEffect1(){

    // 1. Component가 마운트될 때 실행된다. (최초 실행)
    // useEffect(() => {
    //     // 의존성 배열이 [](빈 배열)이면 처음 마운트 될 때만 실행된다. (처음 페이지 로드될 때만 실행)
    //     // onLoad의 역할을 하는 형태
    // }, [])
    // 뒤에 있는 배열은 누구를 감시할 것인지 파악
    // 아무 것도 없으면 가상DOM이 처음으로 활성화되는 그 부분만을 감지한다.

    // 2. 특정 값이 변경될 때 실행 (데코레이션 코드)
    const [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log(count);
    // }, [count]);
    // 밑에 있는 부분이 감지 대상, 감지 대상이 가상DOM에서 변경되면,
    // 위에 console.log가 실행되서 확인한다.
    // 변화를 감지해서 중복 검사 및 유효성 검사에 사용된다.
    // 무한 루프 발생 가능성이 있기 때문에 조심해서 사용해야한다.
    // 아무 것도 없으면 감지 대상이 무한이다. (일단 의존성 배열을 넣고 쓰는 것을 추천한다.)

    useEffect(() => {
        console.log('마운트');

        console.log('action, 실행 부분');
        return () => { // 감지가 끝나면(렌더링(값 변경 후 가상DOM을 감지해서 뷰에 뿌려주는 동작) 후에
        // 새로고침(언마운트)되면) 반환을 실행시킨다.
            console.log('언 마운트');
        }
    }, [count])

    return(
        <div>
            <h1>UseEffect 테스트</h1>
            <input type="button" value="증가"
            onClick={() => setCount(count+1)} />
        </div>
    )
}