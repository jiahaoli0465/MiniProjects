const FirstComponent = () => (
    <h1>My very first component</h1>
)

const NamedComponent = ({name}) => {
    return (
        <p>My name is {name}</p>
    )
}


const App = () => {
    return (
        <div>
            <FirstComponent></FirstComponent>
            <NamedComponent name = 'pee pee'></NamedComponent>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );