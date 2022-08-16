import { useState } from "react";

//component
import Signup from "./components/signup/Signup";
import Toaster from "./components/toaster/Toaster";

//styling
import "./index.scss";

const App:React.FC = () => {

  //display login form or signup form
  const [formDisplay, setFormDisplay] = useState<boolean>(false);
  
  return (
    <>
    <Signup />
    <Toaster backgroundColor="#7AB87A" show={false} message="Success"/>
    </>
  )
}

export default App;
