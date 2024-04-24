import React from 'react'
import { useState } from 'react'
import "./form.css"

const Myform = () => {
 
    const [formData , setFormData] = useState({

            firstName : "" ,

            lastName : "" ,



    })

    const [fullName, setFullName] = useState('');
    
  


    const handleSubmit = (e) =>{

        e.preventDefault()

        let newFullName = `${formData.firstName} ${formData.lastName}`;
        setFullName(newFullName)
        
    }

     const handleChange = (e)=>{

          setFormData({...formData,[e.target.name]:e.target.value})

     }
     
     const handleNextClick = () => {
        console.log('Next button clicked!');
        // Add any logic for handling the next step here
      };


  return (
    <div>
        <div className="form-display">
                 
                 <h1>Full Name Display</h1>

            <form  onSubmit={handleSubmit}> 
                
                <label htmlFor="firstName"> 
                First Name: </label>
                <input type="text" name="firstName"  id="firstName"  value={formData.firstName} onChange={handleChange} required/>
                
                <br/>

                
                <label htmlFor="lastName">
                    Last Name: </label>
                <input type="text" name="lastName"   id="lastName" value={formData.lastName} onChange={handleChange} required/>
               
            <br/>
                
                <button type="submit"> Submit </button>
                <button type="button" id="next" onClick={handleNextClick}>Next</button>

            </form>

          Full Name : {fullName}
        </div>
    </div>
  )
}

export default Myform 