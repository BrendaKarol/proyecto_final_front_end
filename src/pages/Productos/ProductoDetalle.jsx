import React from 'react'
import { useParams } from 'react-router-dom'

const productosMock = [
  {id:1, nombre:'Portal Gun', precio:100, descripcion:'Herramienta para viajar entre dimensiones.'},
  {id:2, nombre:'Mega Seeds', precio:50, descripcion:'Semillas con propiedades especiales.'},
  {id:3, nombre:'Plumbus', precio:25, descripcion:'Objeto multiuso en todas las casas.'},
]

export const ProductoDetalle = () => {
  const { id } = useParams()
  const product = productosMock.find(p => p.id === Number(id))

  if(!product) return <p>Producto no encontrado.</p>

  return (
    <div style={{padding:'1rem'}}>
      <h2>{product.nombre}</h2>
      <p>Precio: ${product.precio}</p>
      <p>Descripción: {product.descripcion}</p>
    </div>
  )
}
