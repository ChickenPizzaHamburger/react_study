function App() { // 기본적인 출력을 App으로 한다. (export default App;) -> 위로 올려도 된다. (export default function App() {~})
  return (
    <div className="App">
      {/* 안에 5px의 padding을 줘서 공간을 만들어서 자식 컴포넌트 간의 차이를 만든다. */}
      <div style={{border: '3px solid red', padding: '5px'}}>
        <h1>부모 Component입니다.</h1>

        <연습 />
        {/* 데이터를 줄 때 태그 속성에 이름을 써서 준다. (태그 속성 이름은 아무거나 써도 된다.) */}
        <연습2 msg="Hello World" /> 

      </div>
    </div>
  );
}

function 연습(){
  return(
    <div style={{border: '3px solid green', padding: '5px'}}>
      <h1>부모에 속한 영역 입니다.</h1>
    </div>
  )
}

// 부모가 자식에게 데이터를 건네주고 싶을 때는 매개 변수를 쓴다. (이름은 아무거나 해도 된다. 일반적으로 props를 쓴다.)
function 연습2(param){ 
  return(
    <div>
      <h1>두 번째 영역입니다.</h1>
        <div style={{border: '3px solid black', padding: '5px'}}>
          123
          {param.msg}
        </div>
    </div>
  )
}

export default App;