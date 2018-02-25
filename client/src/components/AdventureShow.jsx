import React from 'react'




export const AdventureShow = (props) =>{
    const adventure = props.adventure
    return(
        <div>{adventure.title}</div>
    )
}


export default AdventureShow