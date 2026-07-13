import { useState } from "react";

const StepTwo = ({formData, setFormData, nextStep, prevStep}) => {
    const[errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prev => ({
     ...prev,
     [name]: value
    }));
    let newErrors = {...errors};
    if (name === "email"){
       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!emailRegex.test(value)){
        newErrors.email = "Invalid email";
       }else{
        delete newErrors.email;
       }
    } 
    if(name === "password"){
        if(value.length < 6){
            newErrors.password = "Password must be atleast 6 characters";
        }else{
            delete newErrors.password;
        }
        if(formData.confirmPassword && value !== formData.confirmPassword){
            newErrors.confirmPassword= "Password do not match";
        }else{
            delete newErrors.confirmPassword;
        }
    }
    if(name === "confirmPassword"){
        if(value !== formData.password){
          newErrors.confirmPassword = "Passwords don not match"
        }else{
            delete newErrors.confirmPassword;
        }
    }
    setErrors(newErrors);
    };
    return(
        <div>
            <h3>Step 2: Account Details</h3>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

            <input type={showPassword ? "text": "password"}
             name="password" placeholder="Password" value={formData.password} onChange={handleChange} 
            />
            <button type="button" onClick={() => setShowPassword(prev => !prev)}>👁 Toggle</button>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} 
            />
            {errors.confirmPassword && <p style={{color:"red"}}>{errors.confirmPassword}</p>}
            <button onClick={prevStep}>Back</button>
            <button type="button" onClick={nextStep} disabled={
                !formData.email || !formData.password || !formData.confirmPassword || Object.keys(errors).length>0}>Next</button>
        </div>
    );};
    export default StepTwo;