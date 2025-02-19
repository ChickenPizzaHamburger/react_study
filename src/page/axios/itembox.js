import {useState, useEffect} from 'react';
import ItemInput from './itemInput';
import ItemSearch from './itemSearch';
import ItemDetail from './itemDetail';
import axios from 'axios';

export default function Itembox(){

    // CSS 영역
    const textCss = {
        width: '10vw', 
        height: '3vh',
        borderRadius: '5px', 
        border: '1px solid rgb(204, 204, 204)', 
        padding: '5px', 
        marginRight: '10px'
    }

    const flexBox = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px'
    }

    const [itemList, setItemList] = useState([]);
    const [datailId, setDatailId] = useState(null);

    const handlerInput = obj => {
        console.log("obj", obj);
        axios.post('http://192.168.0.123:8080/api/item/regist',
            JSON.stringify(obj), {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(res => {
            if(res.data.code == 200){
                alert('아이템이 추가되었습니다.')
            } else{
                alert('아이템이 추가되지 않았습니다.')
                console.log(res.msg);
            }
        })
    }

    const handlerSearch = search => {
        const name = search;
        axios.get('http://192.168.0.123:8080/api/item/findByName',
            {params: {
                name: name
            }}
        )
            .then(res => {
                setItemList(res.data.data);
            })
    }

    const handlerLike = itemIdx => {
        console.log("id : ", itemIdx)
        axios.get('http://192.168.0.123:8080/api/item/good',
            {params:{
                itemIdx: itemIdx
            }}
        )
        .then(res => {
            if(res.data.code == 200){
                alert('해당 상품의 좋아요 되었습니다.')
                getList();
            } else{
                alert('좋아요 중에 오류가 발생했습니다.')
                console.log(res.msg);
            }
        })
    }

    const handlerDetail = itemIdx => {
        console.log("작동");
        setDatailId(itemIdx);
    }

    function getList() {
        axios.get('http://192.168.0.123:8080/api/item/list')
            .then(res => {
                setItemList(res.data.data);
            }
        );
    }

    // Load 역할
    useEffect(() => {
        getList();
    }, [])

    return(
        <div>
            <h1>아이템박스</h1>
            <div style={flexBox}><ItemInput textCss={textCss} handlerInput={handlerInput} /></div>
            <div style={{...flexBox, width: '100%', marginBottom: undefined}}><ItemSearch textCss={textCss} handlerSearch={handlerSearch} /></div>
            
            <div style={{width: '100vw', display:'flex', flexWrap: 'wrap', gap: '20px', padding: '50px'}}>
            {itemList.map(item => (
                    <div key={item.itemIdx} style={{
                        position: 'relative', width: '338px', height:'150px', 
                        boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.4)', fontSize: '20px', fontWeight:'bold', padding: '10px'}}
                        onClick={() => handlerDetail(item.itemIdx)}>
                        <div style={{fontSize: '25px'}}>{item.name}</div>
                        <div>{item.price.toLocaleString()}원</div>
                        <div style={{position: 'absolute', bottom: '10px', padding: '10px'}}><span onClick={() => handlerLike(item.itemIdx)}>👍</span> {item.good}</div>
                    </div>
                ))}

            </div>

            {/* Detail을 상태 기반으로 렌더링 */}
            {datailId != null && (
                <ItemDetail itemIdx={datailId} handlerReset={() => setDatailId(null)} />
            )}
        </div>
    )
}