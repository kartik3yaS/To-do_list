import {FaTrashAlt} from "react-icons/fa";

const Content = ({items, handleDelete, handleCheck}) => {
    return(
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked} 
                            />
                            <label
                                onDoubleClick={() => handleCheck(item.id)}
                            >{item.item}</label>
                            <FaTrashAlt
                                onClick={() => handleDelete(item.id)}
                                role="button"
                                tabIndex="0" 
                            />
                        </li>
                    ))}
                </ul>
            ): (
                <p style={{ marginTop: '2rem', color: "#eee" }}>your to-do list is empty</p>
            )}
        </main>
    )
}

export default Content;