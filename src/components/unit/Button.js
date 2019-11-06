import styled from 'styled-components';

const Button = styled.button`
    border: 1px solid var(--mainYellow);
    background-color: ${props => props.primary ? "var(--mainYellow)" : "transparent"};
    border-radius:999px;
    padding: 8px 20px;
    color: ${props => props.primary ? "var(--mainWhite)" : "var(--mainYellow)"};
    font-weight: 600;
    transition: all 0.5s;
    &:hover {
        background-color:${props => props.primary ? "transparent" : "var(--mainYellow)"};
        color: ${props => props.primary ? "var(--mainYellow)" : "var(--mainWhite)"};
    }
`
export default Button;
