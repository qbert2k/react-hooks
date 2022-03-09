import React, {useEffect, useMemo, useState} from 'react';
import axios from 'axios';

const MemoTutorial = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                setData(response.data);
            });
    }, []);

    const findLongestName = (comments) => {
        if (!comments) return null;

        let longestName = '';
        for (let i = 0; i < comments.length; i++) {
            let currentName = comments[i].name;
            if (currentName.length > longestName.length) {
                longestName = currentName;
            }
        }

        console.log('This was computed');

        return longestName;
    };

    const getLongestName = useMemo(() => findLongestName(data), [toggle]);

    return (
        <div>
            <h3>useMemo</h3>
            <div>{getLongestName}</div>
            <button onClick={() => {
                setToggle(!toggle);
            }}>
                Toggle
            </button>
            {toggle && <h1>toggle</h1>}
            <hr/>
        </div>
    );
};

export default MemoTutorial;