import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import "./RegistrationWizard.css";

function RegistrationWizard(){
    const [step, setStep] = useState(1);
    const totalSteps = 3;
    const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    dob:"",    
    email:"",
    password:"",
    confirmPassword:""
});
const [submitted, setSubmitted] = useState(false);
const nextStep = () => setStep(prev => prev + 1);
const prevStep = () => setStep(prev => prev - 1);
const handleSubmit = () => {
   if(!formData.firstName || !formData.lastName || !formData.email || !formData.password){
    return;
   }
   
   setSubmitted(true);
};
if(submitted){
    return (
        <div className="success">
    <h2>Form Submitted Successfully</h2>
    <p>Thanks for registering</p>
    </div>
)}

   return(
    <div className="container">
        <h2>Registration Wizard</h2>
        <p className="step-text">Step {step} of {totalSteps}</p>
        {step === 1 && (
            <StepOne
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}            
                />
        )}
        {step === 2 && (
            <StepTwo
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
            />
        )}
        {step === 3 && (
            <StepThree
            formData={formData}
            prevStep={prevStep}
            handleSubmit={handleSubmit}
            />
        )}
       
         </div>
);}
  export default RegistrationWizard;  