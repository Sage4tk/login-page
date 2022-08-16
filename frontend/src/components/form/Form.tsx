import { useState } from "react";
interface SignupProps {
    mode: boolean
}

const Signup:React.FC<SignupProps> = ({ mode }) => {

    //form handler and listener
    const [formHandler, setFormHandler] = useState({
        email: "",
        password: ""
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

        console.log(data);
        }
    }

    return (
        <>
        <form onSubmit={submitToServer}>
            <h1>{mode ? "Login page":"SignUp Page"}</h1>
            <div>
                <input type="email" value={formHandler.email} onChange={formListener} />
            </div>
            <div>
                <input type="password" value={formHandler.password} onChange={formListener} />
            </div>
            <div>
                <input type="submit" value={mode ? "Login":"Signup"} />
            </div>
        </form>
        </>
    );
}

export default Signup;