import {useState, useRef} from 'react';

function App() {

  // 데이터 변경 (함수가 종료되어야 갱신된다.)
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [op, setOp] = useState('+');

  // 데이터 관리
  const Input1Ref = useRef(0);
  const Input2Ref = useRef(0);
  const opRef = useRef('+');

  const [res, setRes] = useState(0); // 계산 결과
  const [history, setHistory] = useState([]); // 계산 기록

  const handlerResult = e => {
    // e.preventDefault(); // HTML 기본기능 작동 중지

    let result = 0; // 계산결과

    switch (opRef.current) {
      case '+':
        result = Number(Input1Ref.current) + Number(Input2Ref.current);
        break;
      case '-':
        result = Number(Input1Ref.current) - Number(Input2Ref.current);
        break;  
      case '*':
        result = Number(Input1Ref.current) * Number(Input2Ref.current);
        break;
      case '/':
        result = Number(Input1Ref.current) / Number(Input2Ref.current);
        break;
      default:
        result = 0;
    }

    setRes(result);
    const his = {num1: Input1Ref.current, num2: Input2Ref.current, op: opRef.current, result: result};
    setHistory([his, ...history]);
  }

  return (
    <div className="App">
      <span>계산결과: </span>
      <span>{res}</span>
      <br />

      {/* <input type="text" onChange={e => setInput1(e.target.value)} />
      <select onChange={e=>setOp(e.target.value)}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>×</option>
        <option value='/'>÷</option>
      </select>
      <input type="text" onChange={e => setInput2(e.target.value)} />
      <input type="button" value="계산 결과" onClick={handlerResult} /> */}

      <InputComponent handlerInput={
        /**
         * 
         * @param {*} obj
         * num1 : 처음 전달받는 값
         * num2 : 두번째 전달받는 값
         * op : 사칙연산 기호 
         */
        (obj) => {
          // console.log(obj);
          // 인스턴스 변수처럼 저장한다.
          // 화면에 표시되지 않는다.
          Input1Ref.current = obj.num1;
          Input2Ref.current = obj.num2;
          // setInput1(obj.num1);
          // setInput2(obj.num2);
          // setOp(obj.op);
          handlerResult();
        }} />

      {/* 계산결과 영역 */}
      <div style={{
        border: '3px solid red'
      }}>
        <h1>History</h1>
        <div>
          {/* 초기 형태 */}
          {/* 5 + 4 = 9 */}
          {history.map((item, index) => 
          <div key={index}>
            {/* {item.num1} {item.op} {item.num2} = {item.result} */}
            <Component data={item} />
          </div>
          )}
        </div>

        <ParentsCall handlerChild={
          val => {
            alert('자식이 부모 호출');
            alert(val);
          }
        } />
      </div>
    </div>
  );
}

function Component(props) {
  return(
    <div>
      {props.data.num1} {props.data.op} {props.data.num2} = {props.data.result}
    </div>
  )
}

function ParentsCall(props){
  return(
    <div>
      <input type="button" value="부모호출" onClick={() => {
        alert('부모호출');
        props.handlerChild('HI');
      }} />
    </div>
  )
}

/** 입력 Component */
function InputComponent(props){

  const [childInput1, setChildInput1] = useState(0);
  const [childInput2, setChildInput2] = useState(0);
  const [childOp, setChildOp] = useState('+');

  function handlerSend(){
    const obj = {num1: childInput1, num2: childInput2, op: childOp};
    // 부모 호출
    props.handlerInput(obj);
  }

  return(
    <div>
      <input type="text" onChange={e => setChildInput1(e.target.value)} />
      <select onChange={e=>setChildOp(e.target.value)}>
        <option value='+'>+</option>
        <option value='-'>-</option>
        <option value='*'>×</option>
        <option value='/'>÷</option>
      </select>
      <input type="text" onChange={e => setChildInput2(e.target.value)} />
      <input type="button" value="계산 결과" onClick={handlerSend} />
    </div>
  )
}

export default App;
