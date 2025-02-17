const data = [{"imageLink": "https://i.pinimg.com/236x/cf/12/5c/cf125c06afdedf24e529b16f4407ac59.jpg", 
    "Text" : {"mainText": "귀여운 병아리", "subText": "작고 말랑말랑한 병아리"}},
    {"imageLink": "https://cdn.pixabay.com/photo/2023/09/13/07/29/ghost-8250317_640.png", 
     "Text" : {"mainText": "애교많은 유령", "subText": "사람을 좋아하는 유령"}}
    ];

    export default function App(){
        return(
          <div>
            <SendImgAndTextDiv data={data[0]} />
            <SendImgAndTextDiv data={data[1]} />
          </div>
        )
      }

      function SendImgAndTextDiv(props){
        return(
          <div style={{display: 'flex', border: '3px solid red'}}>
            <SendImgDiv imageLink={props.data.imageLink} />
            <SendTextDiv text={props.data.Text} />
          </div>
        )
      }
      
      function SendImgDiv(props){
        return(
          <div>
            <img src={props.imageLink} style={{width: '200px', height: '200px', objectFit: 'cover', borderRadius: '50%', border: '1px solid black'}} />
          </div>
        )
      }
      
      function SendTextDiv(props){
        return(
          <div>
            <h1 style={{margin: '0', padding: '0'}}>{props.text.mainText}</h1>
            <span>{props.text.subText}</span>
          </div>
        )
      }