import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/")
        }, 5000)
    }, [navigate])
  return (
    <div>
        <h2>Herror 404</h2>
        <p>Ud será redirigido al home page en 5 segundos</p>
    </div>
  )
}

export default NotFound