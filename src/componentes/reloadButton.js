import React from 'react';

const ReloadButton = ({setLoading, setReloadButton}) => {
    
    const handleOnClick = () => {
        setReloadButton(false);
        setLoading(true);
    }
    
    return(
        <div>
            <button onClick={handleOnClick}>Reload</button>
        </div>
    );
}

export default ReloadButton;