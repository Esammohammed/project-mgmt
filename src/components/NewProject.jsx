import styled from "styled-components";

const Section = styled.section`
    background-color: #f3f4f6;
    padding: 1rem;
    width: 100%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    justify-content: center;
    border-radius: 20px;
    /* 
    add shadow border  
    */
    
    h3 {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: bold;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    button {
        background-color: #2a2a2a;
        color: white;
        padding: 0.5rem;
        margin-bottom: 1rem;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
        border-radius: 5px;
        font-size: 1rem;
    }
`;

export default function NewProject({ project }) {
    return (
        <Section>
            <h3>Project Name</h3>
            <input type="text" />
            <h3>Project Description</h3>
            <textarea></textarea>
            <h3>Project Date</h3>
            <input type="date" />
            <button>Save Project</button>
        </Section>
    );
}
