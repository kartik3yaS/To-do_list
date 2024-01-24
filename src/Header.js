import { FaThumbsUp } from "react-icons/fa";

const Header = ({length}) => {
    return(
        <div className="header">
            <div className="h-up">{length} {length==1 ? "task": "tasks"} remaining</div>
            <div className="h-down">{length==0 ? "Nice job for today!": "Keep it going"} <FaThumbsUp /></div>
        </div>
    )
}

export default Header;