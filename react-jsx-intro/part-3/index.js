
const Person = ({age, name, hobbies})=> {
    
    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{age > 18 ? 'please go vote!' : 'you must be 18'}</h3>
            <h4>{name.length > 8 ? name.substring(0,6) : name}</h4>
            <ul>
                {hobbies.map(hob => 
                    <li>{hob}</li>
                )}
            </ul>
        </div>
            

    )
}


const App = () => {
    let hobbies = ['gaming', 'gym', 'cooking']
    return (
        <div>
            <Person age={16} name = 'JIAH' hobbies={hobbies}></Person>


        </div>

            
        
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );