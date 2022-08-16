import { useState } from "react";
import { PassThrough } from "stream";

const Signup:React.FC = () => {

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
        
        //fetch post to server
        const res = await fetch("http://localhost/signup.php", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // mode: "cors",
            body: JSON.stringify({
                user: formHandler.email,
                password: formHandler.password
            })
        });

        const data = await res.json();

        console.log(data)
    }

    return (
        <>
        <form onSubmit={submitToServer}>
            <div>
                <input type="email" value={formHandler.email} onChange={formListener} />
            </div>
            <div>
                <input type="password" value={formHandler.password} onChange={formListener} />
            </div>
            <div>
                <input type="submit" value="Sign up" />
            </div>
        </form>
        </>
    );
}

export default Signup;