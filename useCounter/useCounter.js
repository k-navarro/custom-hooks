import { useState } from "react"

export const useCounter = (initValue = 10) =>{

    const [counter, setCounter] = useState(initValue)

    const increment = (value = 1) =>{
        setCounter(counter + value)
    }

    const decrement = () =>{
        setCounter(counter -1)
    }
    const reset = () =>{
        setCounter(initValue)
    }
    return{
        counter,
        increment,
        decrement,
        reset
    }
}