//import styles
import "./ToasterStyle.scss";

//import icons
import close from "./close.svg";

interface ToasterProps {
    message: string,
    backgroundColor: string,
}

const Toaster:React.FC<ToasterProps> = ({ message, backgroundColor }) => {

    const toasterStyling = {
        backgroundColor,
        color: "#fff"
    }

    return (
        <>
        <div style={toasterStyling} className="toaster">
            <span>

            </span>
            <p>{message}</p>
            <button>
                <img src={close} alt="close img"/>
            </button>
        </div>
        </>
    )
}

export default Toaster;