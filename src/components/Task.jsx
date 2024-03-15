import styled from "styled-components"

const Div= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    background-color: #f3f4f6;
    border-radius: 20px;
    & h3 {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: bold;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

`

export default function Task({ task, index,deleteTask }) {
    
    return (
        <Div >
            <h3>{task}</h3>
            <button onClick={() => deleteTask(index)}>Delete</button>
        </Div>

    )
}