import React, { useContext, useState } from 'react'
export const RestContext = React.createContext(null)

export const RestProvider = props => {
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [id, setId] = useState('')
  return (
    <RestContext.Provider value={{ image, setImage, name, setName, id, setId }}>
      {props.children}
    </RestContext.Provider>
  )
}
export const useRestaurantContext = () => {
  const context = useContext(RestContext)
  if (!context) {
    throw new Error('useRestaurantContext must be used within a RestProvider')
  }
  return context
}
