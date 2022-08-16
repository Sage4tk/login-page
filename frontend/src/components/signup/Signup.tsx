import { useState } from "react";

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
        try {
            const res = await fetch("http://localhost/auth.php", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "GET",
                mode: "cors",
                body: JSON.stringify(formHandler)
            });

            const data = await res.json();

            console.log(data.status)
            
        } catch(error) {
            console.log(error)
        }
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