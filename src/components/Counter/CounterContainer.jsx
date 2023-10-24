import { useState } from "react"
import CounterPresentation from "./CounterPresentation"

const CounterContainer = (/* {stock} */) => {

    const  [ contador, setContador] = useState(0)

    const stock = 5

    const sumar = ()=>{
        if (contador < stock){
            setContador(contador + 1);
        }else{
            alert("cantidad Maxima")
        }
    }

    const restar = ()=>{
        if(contador > 1){
            setContador(contador - 1);
        }
    };

  return <CounterPresentation sumar={sumar} restar={restar} contador={contador}/>
}

export default CounterContainer