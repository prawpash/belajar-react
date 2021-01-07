function MailBox(props){
    const unreadMessage = props.unreadMessage;
    return(
        <div>
            <h1>Hellow</h1>
            {unreadMessage.length > 0 && 
                <h2>
                    You have {unreadMessage.length} unread
                </h2>
            }
        </div>
    );
}

export default MailBox;