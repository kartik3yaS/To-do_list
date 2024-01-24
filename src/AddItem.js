const AddItem = ({newItems, setNewItems, handleSubmit}) => {
    return(
        <form className="addForm" onSubmit={handleSubmit}>
            <button>+</button>
            <input
                autoFocus
                id="addItem" 
                type="text"
                placeholder="Your next task..."
                required
                value={newItems}
                onChange={(e) => setNewItems(e.target.value)}
            />
        </form>
    )
}

export default AddItem;