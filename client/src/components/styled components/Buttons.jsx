import styled from 'styled-components'


export const ToAdvButton = styled.div`
    height: 100px;
    width: 100px;
    background-color: rgb(0,0,0);
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
`