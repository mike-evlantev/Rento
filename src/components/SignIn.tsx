import * as React from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Translator } from "../Translator";
import { AppContextType } from "../types/AppContextType";

export const SignIn = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();
    const {authorize} = React.useContext(AppContext) as AppContextType;

    
    const handleClick = () => {
                
        if (email === process.env.REACT_APP_ADMIN_EMAIL &&
            password === process.env.REACT_APP_ADMIN_PASSWORD) {
            authorize(true);
            navigate("/payment");
            return;
        }

        authorize(false);
        navigate("/error");
        return;
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return(
        <div>
            <label>email</label>
            <input type="text" value={email} onChange={handleEmailChange} />
            <br />
            <label>password</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
            <br />
            <button onClick={handleClick}>{Translator.signIn.eng}</button>
        </div>        
    );
}