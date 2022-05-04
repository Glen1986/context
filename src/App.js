import { Component, createContext } from 'react'

const Context1 = createContext('mi-valor')
const Context2 = createContext('mi-valor2')

const Provider = ({ children }) => {
    return (
        <Context1.Provider value="valor-1">
            <Context2.Provider value="valor-2">{children}</Context2.Provider>
        </Context1.Provider>
    )
}
class Componente extends Component {
    // static contextType = Context
    render() {
        console.log(this.context)
        return (
            <Context1.Consumer>
                {(valor1) => (
                    <Context2.Consumer>
                        {(valor2) => <div>{`${valor1} ${valor2}`}</div>}
                    </Context2.Consumer>
                )}
            </Context1.Consumer>
        )
    }
}

const App = () => {
    return (
        <Provider>
            <Componente />
        </Provider>
    )
}
export default App
