import { createContext, useContext, useState, memo, useCallback } from 'react'

const Context = createContext()

const ContadorProvider = ({ children }) => {
    const [contador, setCont] = useState(0)

    const inc = useCallback(() => setCont((contador) => contador + 1), [])
    const dec = useCallback(() => setCont((contador) => contador - 1), [])
    return (
        <Context.Provider value={{ contador, inc, dec }}>
            {children}
        </Context.Provider>
    )
}
const Inc = memo(() => {
    console.log('increm')
    const { inc } = useContext(Context)
    return <button onClick={inc}>inc</button>
})
const Dec = memo(() => {
    console.log('decrem')
    const { dec } = useContext(Context)
    return <button onClick={dec}>dec</button>
})
const Label = () => {
    console.log('label')
    const { contador } = useContext(Context)
    return <h1>{contador}</h1>
}

const App = () => {
    return (
        <ContadorProvider>
            <Label />
            <Inc />
            <Dec />
        </ContadorProvider>
    )
}
export default App
