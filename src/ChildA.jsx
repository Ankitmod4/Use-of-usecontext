import React from 'react'
import ChildB from './ChildB'
import { Link } from 'react-router-dom'
import { data } from './App'
import { useContext } from 'react'
const ChildA = () => { 
  const name=useContext(data)
  return ( 
    <div>
      <h1>{ name}</h1>
    </div> 
  )
}

export default ChildA
