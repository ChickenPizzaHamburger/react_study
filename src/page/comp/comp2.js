import {useState, useRef} from 'react';

function App() {

  const [input, setInput] = useState('');

  const text = useRef('');
  const [입력, set입력] = useState('');

  return (
    <div className="App"
      style={{
        border: '1px solid red'
      }}
    >
      <h1>Hello World</h1>
      <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      {input}<br />

      <input type="text" ref={text} />
      <input type="button" value="자식에게 전송" onClick={() => {
        alert('전송');
        set입력(text.current.value);
      }} />
      <div style={{
        width: '300px',
        height: '300px',
        border: '1px solid green'
      }}>
        <h1>Child</h1>
        {input}
      </div>

      <Second data={input} data2="Hello" data3={입력} />
    </div>
  );
}

function Second(props){
  return(
    <div style={{
      width: '300px',
      height: '300px',
      border: '1px solid blue'
    }}>
      <h1>Child</h1>
      {props.data}<br />
      {props.data2}<br />
      {props.data3}
    </div>
  )
}

export default App;
