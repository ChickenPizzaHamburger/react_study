export default function App(){
    return(
      <div>
        <ImgAndTextDiv />
        <ImgAndTextDiv />
      </div>
    )
  }

  function  ImgDiv(){
    return(
      <div>
        <img src="https://i.pinimg.com/236x/cf/12/5c/cf125c06afdedf24e529b16f4407ac59.jpg" />
      </div>
    )
  }
  
  function TextDiv(){
    return(
      <div>
        <h1 style={{margin: '0', padding: '0'}}>귀여운 병아리</h1>
        <span>작고 말랑말랑한 병아리</span>
      </div>
    )
  }
  
  function ImgAndTextDiv(){
    return(
      <div style={{display: 'flex', border: '3px solid red'}}>
        <ImgDiv />
        <TextDiv />
      </div>
    )
  }