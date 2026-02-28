import React from 'react';

function User(props) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h2>User Details</h2>
            <p><strong>Name:</strong> {props.user.name}</p>
            <p><strong>Age:</strong> {props.user.age}</p>
            <p><strong>Email:</strong> {props.user.email}</p>
        </div>
    );
}

export default User;
