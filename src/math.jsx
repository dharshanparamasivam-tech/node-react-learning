import React from 'react';
import User from './User.jsx';

function Props() {
    let userObj = {
        name: "Amit",
        age: 23,
        email: "abc@gmail.com"
    };

    return (
        <div>
            <h1>Props in React</h1>
            <User user={userObj} />
        </div>
    );
}

export default Props;
