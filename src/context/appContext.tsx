import { createContext, ReactNode, useContext } from "react";
import useContextReducer from "./useContextReducer";
import { IGlobalContext } from "../types";

interface props{
    children: ReactNode
}



const AppContext = createContext<IGlobalContext | undefined>(undefined)

export const GlobalStateWrapper = ({children}: props ) => {
    const [appState, dispatch] = useContextReducer()
    // const value : IGlobalContext = {appState, dispatch}
    

    return (
    <AppContext.Provider value={
            ({ appState, dispatch })
    } >
            {children}
        </AppContext.Provider>
    )

}

export function useGlobalContext() {
    return useContext(AppContext)
}
// import * as React from 'react'

// type Action = { type: 'increment' } | { type: 'decrement' }

// type Dispatch = (action: Action) => void

// type State = { count: number }

// type CountProviderProps = { children: React.ReactNode }

// const CountStateContext = React.createContext<

//     { state: State; dispatch: Dispatch } | undefined

// >(undefined)

// function countReducer(state: State, action: Action) {

//     switch (action.type) {

//         case 'increment': {

//             return { count: state.count + 1 }

//         }

//         default: {

//             throw new Error(`Unhandled action type: ${action.type}`)

//         }

//     }

// }

// function CountProvider({ children }: CountProviderProps) {

//     const [state, dispatch] = React.useReducer(countReducer, { count: 0 })

//     // NOTE: you *might* need to memoize this value

//     // Learn more in http://kcd.im/optimize-context

//     const value = { state, dispatch }

//     return (

//         <CountStateContext.Provider value= { value } >

//         { children }

//         < /CountStateContext.Provider>

//   )

// }

// function useCount() {

//     const context = React.useContext(CountStateContext)

//     if (context === undefined) {

//         throw new Error('useCount must be used within a CountProvider')

//     }

//     return context

// }

// export { CountProvider, useCount }
// import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

// interface AppContextInterface {
//     isCartOpen: boolean;
//     setIsCartOpen: Dispatch<SetStateAction<boolean>>;
// }

// export const cartContextDefaultValue: AppContextInterface = {
//     isCartOpen: false,
//     setIsCartOpen: () => false
// }

// export const CartContext = createContext<AppContextInterface | null >(null);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//     const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
//     const value = { isCartOpen, setIsCartOpen }

//     return <CartContext.Provider value={ value }> { children } </CartContext.Provider>;
// };