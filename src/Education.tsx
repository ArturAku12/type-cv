import React, { useState } from 'react';
import EducationControl from './components/EducationControl'; 
import uniqid from 'uniqid';


const Education = () => {
    
    const [educationKeys, setEducationKeys] = useState<string[]>([])
    
    const addKey = () => {

        if (educationKeys.length > 0) {
            setEducationKeys(educationKeys => [...educationKeys, uniqid()])
        } else {
            setEducationKeys([uniqid()])
        }
        
        
    }

    const handleDelete = (education_key: any) => {
        console.log(education_key)
        setEducationKeys(educationKeys.filter(key => key !== education_key))
    } 

    return (
        <div> 
             <hr></hr>
            <button onClick={addKey}> Add Education </button>
            {educationKeys.map((education_key) => 
                <div key={education_key}> 
                    <button onClick={() => handleDelete(education_key)}>Delete</button>
                    <EducationControl education_key = {education_key} />
                    <hr></hr>
                </div>
            )} 
        </div>
    )
}

export default Education;