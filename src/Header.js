const Header = ({length, count, setCount}) => {
    function func() {
        const percentage = (count/length) * 100;
        if(percentage===0)
        {
            return 'Try to do at least one! 🙏';
        }else if(percentage===100)
        {
            return 'Nice job for today! 🏝';
        }else
        {
            return 'Keep it going 💪🏻';
        }
    }

    return(
        <div className="header">
            <div className="h-up">{count}/{length} Complete</div>
            <div className="h-down">
                <h2>{func()}</h2>
            </div>
        </div>
    )
}

export default Header;