import React from 'react';

const ReloadButton = ({setLoading, setReloadButton}) => {
    
    const handleOnClick = () => {
        setReloadButton(false);
        setLoading(true);
    }
    
    return(
        <div>
            <button onClick={handleOnClick}>Soy el reloadButton</button>
        </div>
    );
}

export default ReloadButton;