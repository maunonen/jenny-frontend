import React, { useEffect} from 'react'
import { useDispatch } from 'react-redux'
import {logoutSuccess} from '../action/userAction'




const LogOut = (props) => {
 
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(logoutSuccess())
  }, [])
  
  return (
    <>
    </>
  )
}

export default LogOut