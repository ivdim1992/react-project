import React from 'react';

const WelcomeMessage = ({message,children}) => {
    return (
        <div className="welcome">
            <h1>{message}</h1>
            {children}
        </div>
    )
}

export default WelcomeMessage;