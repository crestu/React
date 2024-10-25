import {ACTIONS} from './App'
import React, {useReducer} from "react";


export default function OperationButton({dispatch, operation}){
  return  <button onClick= {() => dispatch({type: ACTIONS.CHOOSE_OEPRATION, payload:{operation}})}> {operation} </button>
}
