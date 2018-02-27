import React from 'react'
import {Link} from 'react-router-dom'
import {AdvShowPage, ButtonContainer2} from './styled components/Containers'
import {AddButton, EditButtonSquare, DeleteButtonSquare} from './styled components/Buttons'




export const AdventureShow = (props) =>{
    const adventure = props.adventure
    return(
        <div>
        <AdvShowPage>
        <h1>{adventure.title}</h1>
        <p>{adventure.synopsis}</p>
        <Link to={`/adventures/${adventure.id}`} style={{ textDecoration: 'none', color: 'inherit' }}> 
            <AddButton>
            Play
            </AddButton>
        </Link>
        </AdvShowPage>
        <ButtonContainer2>
            <EditButtonSquare>Edit</EditButtonSquare>
            <DeleteButtonSquare onClick={()=>props.handleDelete(adventure.id)}>Delete</DeleteButtonSquare>
        </ButtonContainer2>
        </div>
    )
}


export default AdventureShow