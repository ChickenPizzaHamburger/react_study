import {useState} from 'react';

function App() {

  const [view, SetView] = useState(1);

  return (
    <div className="App">
      {/* 화면 보이기, 안 보이기 display, 삼항 연산자 이용했었다. */}
      {/* 지금 쓰는 것은 컴포넌트 관리 */}
      <input type="button" value="1" onClick={() => SetView('1')} />
      <input type="button" value="2" onClick={() => SetView('2')} />

      {view === '1' && <View1 />}
      {view === '2' && <View2 />}
      
    </div>
  );
}

function View1(){
  return(
    <div style={{
      height: '300px',
      backgroundColor: 'red'
    }}></div>
  )
}

function View2(){
  return(
    <div style={{
      height: '300px',
      backgroundColor: 'blue'
    }}></div>
  )
}

export default App;
