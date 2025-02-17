import {useState} from 'react';

export default function App(){
    const [dark, setDark] = useState(true);
  
    return(
      <div>
        <input type="button" value="다크모드 변경" onClick={() => setDark(!dark)} />
        <DarkMode dark={dark} />
      </div>
    )
  }

  function DarkMode(props){
    return(
      <div style={{width: '100%', height: '600px', border: '1px solid red', backgroundColor: props.dark ? 'white' : 'black', color: props.dark ? 'black' : 'white'}}>
        <h1>Hello World</h1>
      </div>
    )
  }