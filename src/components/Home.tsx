import * as React from "react";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/signin");
    }

    return(
        <h1 onClick={handleClick}>Rento</h1>
    );
}