function UserGreeting(){
    return <h1>Welcome User</h1>
}

function GuestGreeting(){
    return <h1>Please Login</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn)
        return <UserGreeting/>
    return <GuestGreeting/>
}

export default Greeting;