import { useState } from "react";

const StepOne = ({formData, setFormData, nextStep}) =>  {
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
    let newErrors = { ...errors };
    if (name === "firstName" && value.trim() === ""){
        newErrors.firstName = "First Name required"
    }else if(name === "firstName"){
        delete newErrors.firstName;
    }
  
    if (name === "lastName" && value.trim() === ""){
        newErrors.lastName = "Last Name required"
    }else if(name === "lastName"){
        delete newErrors.lastName;
    }
    setErrors(newErrors);
    };
    return(
        <div>
            <h1>Step 1 : Personal Info</h1>
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
            {errors.firstName && (<p style={{color:"red"}}>{errors.firstName}</p>)}

            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
            {errors.lastName && (<p style={{color:"red"}}>{errors.lastName}</p>)}                 

            <input type="date" name="dob" value={formData.dob} onChange={handleChange}/>

            <button type="button" onClick={nextStep} disabled={
                !formData.firstName || !formData.lastName || !formData.dob || Object.keys(errors).length>0}>
                Next
            </button>           
        </div>
    );};
    export default StepOne;