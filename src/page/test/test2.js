export default function App(){
    return(
      <div className="App">
        <FirstDiv />
        <div style={{display: 'flex'}}>
        <SecondDiv />
        <ThirdDiv />
        </div>
      </div>
    )
  }

  function FirstDiv(){
    return(
      <div style={{width: '100%', height: '100px', backgroundColor: 'red', color: 'white'}}>
        <h1 style={{margin: '0', padding: '0', textAlign: 'left'}}>FirstDiv</h1>
      </div>
    )
  }
  
  function SecondDiv(){
    return(
      <div style={{width: '100%', height: '100px', backgroundColor: 'blue', color: 'white'}}>
        <h1 style={{margin: '0', padding: '0', textAlign: 'left'}}>SecondDiv</h1>
      </div>
    )
  }
  
  function ThirdDiv(){
    return(
      <div style={{width: '100%', height: '100px', backgroundColor: 'green', color: 'white'}}>
        <h1 style={{margin: '0', padding: '0', textAlign: 'left'}}>ThirdDiv</h1>
      </div>
    )
  }