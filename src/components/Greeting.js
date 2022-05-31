import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchGreetingApi } from "../redux/greetings"

const Greeting = () => {
  const message = useSelector(({ msgReducer }) => msgReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchGreetingApi())
  }, [])

  return (
    <div className="container">
      <p>Greeting: <b>{message}</b></p>
    </div>
  )
}

export default Greeting
