const Tweet = ({username, name, date, message}) => {
    return (
        <div className = 'tweet' >

            <p>{username}</p>
            <p>{name}</p>
            <p>{date}</p>

            <h3>{message}</h3>
        </div>
    )
}


const App = () => {
    return (
        <div>
            <Tweet username = 'jLi' name = 'jiahao' date = '1/4/2024' message='i love everyone!'></Tweet> 
            <Tweet username = 'jLi' name = 'jiahao' date = '1/4/2024' message='i love everyone!'></Tweet> 

            <Tweet username = 'jLi' name = 'jiahao' date = '1/4/2024' message='i love everyone!'></Tweet> 
            <Tweet username = 'jLi' name = 'jiahao' date = '1/4/2024' message='i love everyone!'></Tweet> 

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );