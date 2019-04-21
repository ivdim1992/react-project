import React from 'react';

const WelcomeMessage = ({message}) => {
    return (
        <div className="welcome">
            <h1>{message}</h1>
        </div>
    )
}

export default WelcomeMessage;