function Tick(){
    let jam = new Date().toLocaleTimeString();
    return(
        <h2>{jam}</h2>
    );
}

export default Tick;