import { useState } from 'react'

export const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState)

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setFormValues({...formValues, [name]: value})
  }

  const reset = () => {
    setFormValues(initialState)
  }

  return [formValues, handleInputChange, reset]
}
