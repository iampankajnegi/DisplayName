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

    const handleChange = (e) => {
        // Use a regular expression to allow only letters and spaces for the first and last names
        const regex = /^[a-zA-Z\s]*$/;
        const { name, value } = e.target;
        if (regex.test(value) || value === '') { // Allow empty value
          setFormData({ ...formData, [name]: value });
        }
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
             

            </form>

          Full Name : {fullName}
        </div>
    </div>
  )
}

export default Myform 