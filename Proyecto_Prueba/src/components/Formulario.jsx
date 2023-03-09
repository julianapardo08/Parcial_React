import React, { useState } from 'react'
import Tarjeta from './Tarjeta'

const Formulario = () => {

    const [data,setData] = useState({
        nameAnimal: '',
        typeAnimal: ''
    })
    const [show,setShow] = useState(false)
    const [err,setErr] = useState(false)
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const regex= !/^\s/.test(data.nameAnimal)
        if(regex && data.nameAnimal.length>=3 && data.typeAnimal.length>=6){
            setShow(true)
            setErr(false)
        }else{
            setShow(false)
            setErr(true)
        }
    }
  return (
    <div class="card-form">       
        <h1>Formulario de mascotas</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={data.nameAnimal} onChange={(e) => setData({...data,nameAnimal:e.target.value})} placeholder='Ingresa el nombre de tu mascota'/>
            <input type="text" value={data.typeAnimal} onChange={(e) => setData({...data,typeAnimal:e.target.value})} placeholder='Ingresa el tipo de tu mascota'/>
            <button>Enviar</button>
        </form>
        <h5>{err && "Por favor chequea que la información sea correcta."}</h5>
        <h4>{show && <Tarjeta name={data.nameAnimal} animal={data.typeAnimal}/>}</h4>
    </div>
  )
}

export default Formulario