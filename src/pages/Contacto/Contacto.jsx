import React from 'react'
import { useForm } from '../../hooks/useForm'

export const Contacto = () => {
  const [formValues, handleInputChange, reset] = useForm({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const { nombre, email, mensaje } = formValues

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Enviando formulario...', formValues)
    reset()
  }

  return (
    <div style={{padding:'1rem'}}>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'0.5rem', maxWidth:'300px'}}>
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={nombre}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={email}
          onChange={handleInputChange}
        />
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          value={mensaje}
          onChange={handleInputChange}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}
