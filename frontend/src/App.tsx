import { useState } from "react";

//component
import Signup from "./components/signup/Signup";
import Toaster from "./components/toaster/Toaster";

//styling
import "./index.scss";

const App:React.FC = () => {

  //display login form or signup form
  const [formMode, setFormMode] = useState<boolean>(false);

  //toaster infomation
  const [toaster, setToaster] = useState<any>(null);
  
  return (
    <>
    <Signup />
    {toaster && <Toaster message={toaster?.message} backgroundColor={"#7AB87A"} />}
    </>
  )
}

export default App;
