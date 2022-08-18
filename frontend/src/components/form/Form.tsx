import React, { useState } from "react";

//import css
import "./formStyle.scss";

//import images/icons
import user from "../../img/person.svg";


interface SignupProps {
    mode: boolean,
    setToaster: React.Dispatch<React.SetStateAction<any>>
}

const Signup:React.FC<SignupProps> = ({ mode, setToaster }) => {

    //form handler and listener
    const [formHandler, setFormHandler] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const formListener = (e:any) => {
        setFormHandler({
            ...formHandler,
            [e.target.type]: e.target.value
        });
    }

    //submit to server
    const submitToServer = async (e:any) => {
        e.preventDefault();

        //validate input then post
        if (!/^\s*$/.test(formHandler.email) && !/^\s*$/.test(formHandler.password) ) {
            //fetch post to server
            const res = await fetch(mode ? "http://localhost/auth.php":"http://localhost/signup.php", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: formHandler.email,
                password: formHandler.password
            })
        });
        
        const data = await res.json();

        //set toaster to display data
        setToaster(data);
        }
    }

    return (
        <>
        <form onSubmit={submitToServer} className="form-login">
            <div className="icon">
                <img src={user} />
            </div>
            <h1>Login</h1>
            <div className="form-ctrl">
                <input type="email" value={formHandler.email} onChange={formListener} placeholder="Email" />
            </div>
            <div className="form-ctrl">
                <input type="password" value={formHandler.password} onChange={formListener} placeholder="Password" />
            </div>
            <div className="btn" >
                <input type="submit" value={mode ? "Login":"Signup"} />
                <p>Need an account? Sign up here.</p>
            </div>
        </form>
        </>
    );
}

export default Signup;