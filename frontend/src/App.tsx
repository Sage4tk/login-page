//component
import Toaster from "./components/toaster/Toaster";

//styling
import "./index.scss";

const App:React.FC = () => {
  return (
    <>
    <Toaster backgroundColor="#7AB87A" show={true} message="Success"/>
    </>
  )
}

export default App;
