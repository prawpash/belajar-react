function ListItem(props){
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>
}

function NumberList(props){
    const numbers = props.numbers;
    const listItem = numbers.map((number, index) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={number.id} value={number.value}/>
    );

    return <ul>{listItem}</ul>
}

export default NumberList;