import React from 'react';


function Pidgeon(props) {
    const {nickname, imgUrl, removePidgeon, index} = props
    console.log(imgUrl)
    return(
        <div>
            <h3>{nickname}</h3>
            <img src={imgUrl} alt='Sorry no pic'/>
            <button onClick={()=>removePidgeon(index)}>X</button>
        </div>
    )
}

export default Pidgeon;