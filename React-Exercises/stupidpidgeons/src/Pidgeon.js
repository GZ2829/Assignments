import React from 'react';


function Pidgeon(props) {
    const {nickname, imgUrl} = props
    console.log(imgUrl)
    return(
        <div>
            <h3>{nickname}</h3>
            <img src={imgUrl} alt='Sorry no pic'/>
        </div>
    )
}

export default Pidgeon;