const StepThree = ({ formData, prevStep, handleSubmit }) => {
    return(
        <div>
            <h3>Step 3: Review</h3>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>

            <button type="button" onClick={prevStep}>Back</button>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );};
     export default StepThree;