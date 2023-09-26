import React,{useState} from 'react'
import { Prompt } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
const DummyForm = () => {
    const history=useHistory()
    const [dataEntering,setDataEntering]=useState(false)

  const submitFormHandler=(e)=>{
    e.preventDefault()
    
    history.push('/store')
    console.log("form submitted")

  }

   const focusHandler=()=>{
    console.log('ddd')
    setDataEntering(true)
   }

   const finishEntering=()=>{
    console.log(dataEntering)
    setDataEntering(false)
   }

  return (
    <div>

    <Prompt 
    when={dataEntering}
    message={(location)=>
        'entered data will be lost'
    }/>


    <form onFocus={focusHandler}  onSubmit={submitFormHandler}>
        <h1>title</h1>
        <input></input>
        <button onClick={finishEntering}>Submit Data</button>
    </form >
    </div>
  )
}

export default DummyForm
