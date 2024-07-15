import React, { useState } from 'react';

const HeaderComponent = () => {
    let [num, setNumber] = useState(1000);

    const halfHandler = () => {
        setNumber(num / 2);
    };

    return (
        <>
            <p>{num}</p>
            <button onClick={halfHandler}>Halve the number</button>
        </>
    );
};

export default HeaderComponent;
