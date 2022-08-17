import { useState } from "react";

//component
import Form from "./components/form/Form";
import Toaster from "./components/toaster/Toaster";

//styling
import "./index.scss";

const App:React.FC = () => {

  //display login form or signup form "if true should be in login mode and vise versa"
  const [formMode, setFormMode] = useState<boolean>(true);

  //toaster infomation
  const [toaster, setToaster] = useState<any>(null);
  
  return (
    <>
    <Form mode={formMode} setToaster={setToaster} />
    {toaster && <Toaster message={toaster?.Message} backgroundColor={toaster?.Status} setToaster={setToaster} />}
    </>
  )
}

export default App;
