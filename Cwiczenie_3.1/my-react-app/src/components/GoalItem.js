function GoalItem (props) {
    return (
        <li>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
        </li>
    );
}

export default GoalItem
