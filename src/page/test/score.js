import {useState, useRef} from 'react';

export default function App(){
    const name = useRef('');
    const korean = useRef(null);
    const english = useRef(null);
    const math = useRef(null);
  
    const [scoreData, setScoreData] = useState([]);
  
    const handleAddScore = () => {
      const newScore = {
        name: name.current.value,
        korean: korean.current.value,
        english: english.current.value,
        math: math.current.value,
      };
  
      setScoreData([...scoreData, newScore]);
  
      name.current.value = '';
      korean.current.value = '';
      english.current.value = '';
      math.current.value = '';  
      };
  
    return(
      <div>
        <h3>입력</h3>
        <input type="text" placeholder='이름' ref={name} />
        <input type="number" placeholder='국어' ref={korean} />
        <input type="number" placeholder='영어' ref={english} />
        <input type="number" placeholder='수학' ref={math} />
        <button onClick={handleAddScore}>추가</button>
  
        <ScoreList scoreData={scoreData} />
      </div>
    )
  }
  
  function ScoreList(props){
    return(
      <div style={{border: '3px solid green', padding: '20px'}}>
        <h3 style={{marginBottom: '10px'}}>리스트</h3>
        <table style={{width: '100%', border: '2px solid black', borderCollapse: 'collapse'}}>
          <thead>
            <th>이름</th>
            <th>국어</th>
            <th>영어</th>
            <th>수학</th>
          </thead>
          <tbody>
          {props.scoreData.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>{item.korean}</td>
              <td>{item.english}</td>
              <td>{item.math}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }