function App() {
 
  return (
    <div>
    <h3>home 으로</h3>
        <h2>계산 결과: <span id="resultNum" style={{
    fontSize: '30px',
    color: 'blue'
  }}> 0</span></h2>
        <input type="text" id="num1" />
        <select id="calc">
            <option value="plus">+</option>
            <option value="minus">-</option>
            <option value="mul">×</option>
            <option value="div">÷</option>
        </select>
        <input type="text" id="num2" />
        <input className="btn" type="button" onClick={() => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');

    const calc = document.getElementById('calc').value;
    let resultNum = 0;
    
    switch(calc){
        case 'plus': resultNum = Number(num1.value) + Number(num2.value); break;
        case 'minus': resultNum = Number(num1.value) - Number(num2.value); break;
        case 'mul': resultNum = Number(num1.value) * Number(num2.value); break;
        case 'div': resultNum = Number(num1.value) / Number(num2.value); break;
        default: resultNum = 0;
    }

    document.getElementById('resultNum').innerHTML = resultNum;
    num1.value = '';
    num2.value = '';
}} value="결과 계산"></input>
    </div>
  );
}

export default App;
