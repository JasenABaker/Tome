import styled from 'styled-components'


export const ToAdvButton = styled.div`
    height: 50px;
    width: 100px;
    background-color: #22333B;
    color:rgba(255, 255, 255, 0.8);
    font-size: .9em;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    

    :hover{
        color: rgba(255, 255, 255, 1);
        background: linear-gradient(to bottom, #ffeab5 0%, #ffba08  10%);
        box-shadow: 0 5px 15px rgba(255,186,8, .4)
    
    }
    @media screen and (min-width: 500px) {
        height: 50px;
        width: 200px;
    }

`

export  const AddButton = styled.div`
    height: 40px;
    width: 100px;
    border-radius: 10px;
    color: rgba(255, 255, 255, 0.8);
    font-size: .9em;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3F88C5;
    text-align: center;

    :hover {
        background: linear-gradient(to bottom, #83a7c4 0%,#3f88c5 80%);
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 5px 15px rgba(63,136,197, .4)
    }

`

export const EditButton = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.8);
    background-color:#FFBA08;
    font-size: .8em;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
        background: linear-gradient(to bottom, rgba(255,230,168,1) 0%,rgba(255,186,8,1) 87%);
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 5px 15px rgba(255,186,8, .4);
    }

`
export const PlayButton = EditButton.extend`
        background-color: #3F88C5;

        :hover {
            background: linear-gradient(to bottom, #83a7c4 0%,#3f88c5 80%);
            color: rgba(255, 255, 255, 1);
            box-shadow: 0 5px 15px rgba(63,136,197, .4)
        }
`

export const DeleteButton = EditButton.extend`
    background-color:#D00000;

    :hover{
        background: linear-gradient(to bottom, rgba(206,113,113,1) 0%,rgba(208,0,0,1) 87%);
        box-shadow: 0 5px 15px rgba(208,0,0, .4); 
    }

`

export const EditButtonSquare = EditButton.extend`
        width: 200px;
        border-radius: 0;
`

export const DeleteButtonSquare = DeleteButton.extend`
        width: 200px;
        border-radius: 0;
`

export const SubmitButton = EditButtonSquare.extend`
    order: 2;
@media screen and (min-width: 500px){
    order: 0;
    
}

`

export const ToolButton = styled.button`
    height: 50px;
    width: 50px;
    border-radius: 10px;
    background: radial-gradient(ellipse at center, rgba(173,219,21,1) 0%,rgba(127,184,0,1) 100%);
    color: white;
    text-align: center;
    font-size: 1.5em;
    font-weight: 900;
    outline-style:none;
    border: none;

    :hover {
        background: linear-gradient(to bottom, rgba(173,219,21,1) 0%,rgba(127,184,0,1) 87%);
        box-shadow: 0 5px 15px rgba(127,184,0, .4); 
    }
    :active {
        background: radial-gradient(ellipse at center, rgba(127,184,0,1) 0%,rgba(173,219,21,1) 100%);
    }

`



