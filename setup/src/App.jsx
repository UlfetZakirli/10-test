import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName]=useState('');
  const [list,setList]=useState([])
  const [isEditing,setIsEditing]=useState(false)
  const [editID,setEditID]=useState(null)
  const [alert,setAlert]=useState({show:false,msg:'',type:''})

 
const handleSubmit=(a)=>{
  a.preventDefault()
  if(!name){
    ////it will show this alert-enter value 
    // setAlert({show:true,msg:'',type:""});
    showAlert(true,'pls enter value','danger')
  }else if(name && isEditing){
    //we will work on editing
  }else{
    //we will add a new fruit and alert'll show success
    const newItem={id: new Date().getTime().toString(), title:name}
    setList([...list, newItem])
    setName('')
  }
}

const showAlert=(show=false,msg="",type='')=>{
  setAlert({show,msg,type})

}
  return (
  
  <>
  <section className="section-center">
    <form className='grocery-form' onSubmit={handleSubmit}>
     {isEditing && <Alert {...alert} removeAlert={showAlert}/>}
     <h3>my fruits</h3>
     <div className="form-control">
       <input type="text" className='grocery' value={name} placeholder="e.g. orange" onChange={(a)=>setName(a.target.value)} />
       <button className='submit-btn' type='submit'>
         {isEditing? 'edit':'submit'}
       </button>
     </div>
    </form>
    {list.length>0 &&(
    <div className="grocery-container">
    <List items={list}/>
    <button className='clear-btn'>clear item</button>
    </div>
    )}

  </section>
  </>
    )
}

export default App
