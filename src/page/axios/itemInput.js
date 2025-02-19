import {useState} from 'react';

export default function ItemInput(props){

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [categoryId, setCategoryId] = useState(1);

    const obj = {
        name: name,
        price: price,
        categoryId: categoryId
    }

    return(
        <div>
            <input type="text" placeholder="이름" style={props.textCss} onChange={e => {setName(e.target.value)}} / >
            <input type="number" placeholder="가격" style={props.textCss} onChange={e => {setPrice(e.target.value)}} / >
            <select style={props.textCss} onChange={e => {setCategoryId(e.target.value)}}>
                <option value="1">도서</option>
                 <option value="2">전자</option>
                 <option value="3">생활</option>
            </select>
            <input type="button" value="추가" style={{...props.textCss, width: '100px'}} onClick={() => props.handlerInput(obj)} />
        </div>
    )
}