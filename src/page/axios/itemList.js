export default function ItemList({itemList, handlerDetail, handlerLike}) {
    return (
        <div style={{ width: '100vw', display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '50px' }}>
            {itemList.map(item => (
                <div key={item.itemIdx} style={{
                    position: 'relative', width: '338px', height: '150px',
                    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.4)', fontSize: '20px', fontWeight: 'bold', padding: '10px'
                }}
                    onClick={() => handlerDetail(item.itemIdx)}
                >
                    <div style={{ fontSize: '25px' }}>{item.name}</div>
                    <div>{item.price.toLocaleString()}원</div>
                    <div style={{ position: 'absolute', bottom: '10px', padding: '10px' }}>
                        <span onClick={(e) => { e.stopPropagation(); handlerLike(item.itemIdx); }}>👍</span> {item.good}
                    </div>
                </div>
            ))}
        </div>
    );
}