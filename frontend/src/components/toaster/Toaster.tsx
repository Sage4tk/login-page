//import styles
import "./ToasterStyle.scss";

//import icons
import close from "./close.svg";

interface ToasterProps {
    message: string,
    backgroundColor: string,
    show: boolean
}

const Toaster:React.FC<ToasterProps> = ({ message, backgroundColor, show }) => {

    const toasterStyling = {
        backgroundColor,
        color: "#fff"
    }

    if (!show) return (null);

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