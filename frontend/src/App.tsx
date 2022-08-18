import { useState } from "react";

//component
import Form from "./components/form/Form";
import Toaster from "./components/toaster/Toaster";

//styling
import "./index.scss";

//imgs
import bg from "./img/bg1.svg";

const App:React.FC = () => {

  //display login form or signup form "if true should be in login mode and vise versa"
  const [formMode, setFormMode] = useState<boolean>(true);

  //toaster infomation
  const [toaster, setToaster] = useState<any>(null);
  
  return (
    <>
    <div className="wrapper">
      <Form setToaster={setToaster} />
      {toaster && <Toaster message={toaster?.Message} backgroundColor={toaster?.Status} setToaster={setToaster} />}
      <img src={bg} className="bg tr" />
      <img src={bg} className="bg bl" />
    </div>
    </>
  )
}

export default App;
