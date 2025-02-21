import { useState, useMemo } from 'react';

export default function Memo1() {

    const [math, setMath] = useState(0);

    const getMath = useMemo(() => {
        console.log('🎪 math');
        return math;
    }, [math]);

    const [english, setEnglish] = useState(0);

    const getEnglish = useMemo(() => {
        console.log('🧨 english');
        return english;
    }, [english]);

    return (
        <div>
            <h1>useMemo</h1>
            <input type="text" value={math}
                onChange={e => setMath(e.target.value)} />
            {getMath}<br />
            <input type="text" value={english}
                onChange={e => setEnglish(e.target.value)} />
            {getEnglish}

        </div>
    )
}