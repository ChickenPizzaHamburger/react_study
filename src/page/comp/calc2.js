import { useState, useRef } from 'react';

function App() {

  let count = 0;
  const [변수, set변수] = useState(0);

  const refCount = useRef(0);
  const inp1 = useRef(null);

  const [result, setResult] = useState('결과');

  /** 다크 모드 */
  const [dark, setDark] = useState(true);

  /** 열기/닫기 */
  const [open, setOpen] = useState(true);

  /** obj 변경 */
  const obj = {
    title: '기본',
    color: 'black'
  }

  const [title, setTitle] = useState(obj);

  const num1 = useRef(null);
  const num2 = useRef(null);
  const calc = useRef(null);

  const [resultNum, setResultNum] = useState(0);

  let Result = () => {

    let resultCalc = 0;
    switch(calc.current.value){
        case 'plus': resultCalc = Number(num1.current.value) + Number(num2.current.value); break;
        case 'minus': resultCalc = Number(num1.current.value) - Number(num2.current.value); break;
        case 'mul': resultCalc = Number(num1.current.value) * Number(num2.current.value); break;
        case 'div': resultCalc = Number(num1.current.value) / Number(num2.current.value); break;
        default: resultCalc = 0;
    }

    setResultNum(resultCalc);
    num1.value = '';
    num2.value = '';
}
        


  return (
    <div className="App">
      <input type="text" ref={inp1} id="rf" />
      <input type="button"
             value="확인"
             onClick={() => {
              console.log(document.getElementById('rf'));
              console.log(inp1.current);
             }}
             />
      <br />

      <span>{refCount.current}</span>
      <input
        type="button"
        value="ref 증가"
        onClick={
          () => {
            refCount.current = refCount.current + 1;
            console.log(refCount);
          }
        }
        />
      <br />

      <span>{count}</span>
      <input 
        type="button" 
        value="count 증가" 
        onClick={() => {
          // console.log('1');
          console.log('let: ',++count);
        }}
        /><br />

      <span>{변수}</span>
      <input 
        type="button" 
        value="useState 증가" 
        onClick={() =>  set변수(변수+1)}
        />

      <br />
      <input
        type="text"
        id="text"
        />
      <input
        type="button"
        value="버튼"
        onClick={() => {
          const text = document.getElementById('text');
          console.log("text : ", text.value);
            if(text.value == ''){
              setResult('결과')
            } else {
              setResult(text.value)
            }
        }}
        />
      <span>{result}</span>

      <br />

      <input type="button" value="다크모드" onClick={() => setDark(!dark)}/>
      <input type="button" value="열기/닫기"
      onClick={() => {
        setOpen(!open)
      }}
      />

      {/* 비교 대상 (값 => true, false) ? 'true' : 'false' */}
      <div
        style={open ? {
          width: '100%',
          height: '800px',
          border: '1px solid red',
          backgroundColor: dark ? 'white' : 'black'
        } : {}}>
      </div>

      <h1 style={{color: title.color}}>{title.title}</h1>
      <input type="button" value="빨강" onClick={
        () => {
          setTitle({...title, color: ''});
        }
      } />
      <input type="button" value="파랑" onClick={
        () => {
          setTitle({...title, color: 'lightblue'});
        }
      } />
      <input type="button" value="초록" onClick={
        () => {
          setTitle({...title, color: '#faaaff'});
        }
      } />

<h3>home 으로</h3>
    <h2>계산 결과: <span style={{color:'blue'}}>{resultNum}</span></h2>
    <input type="text" ref={num1} />
    <select ref={calc}>
        <option value="plus">+</option>
        <option value="minus">-</option>
        <option value="mul">×</option>
        <option value="div">÷</option>
    </select>
    <input type="text" ref={num2} />
    <input type="button" onClick={Result} value="결과 계산" />        

    </div>
  );
}

export default App;
