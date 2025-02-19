import {useState} from 'react';

export default function ItemSearch(props){

    const [search, setSearch] = useState('');

    return(
        <div>
            <input type="search" placeholder="검색어를 입력하세요" style={{...props.textCss, 
                    width:'20vw', 
                    padding: '5px 5px 5px 10px',
                    marginRight: '20px',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }} onChange={e => {setSearch(e.target.value)}} />
            <input type="button" value="검색" style={{...props.textCss,
                    width: '10vw',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginRight: undefined
                }}
                onClick={() => props.handlerSearch(search)} />
        </div>
    )
}