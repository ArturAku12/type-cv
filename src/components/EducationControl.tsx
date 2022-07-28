import React, { useState } from 'react';


const EducationControl = (props: any) => {
    
    const { education_key, handleDelete } = props; 

    interface EducationComponent {
        school: string;
        years: string;
        subject: string;
    }
    
    const [education, setEducation] = useState<EducationComponent>({
        school: "UBC",
        years: "2017-2019",
        subject: "Engineering"
    })
    
    const [editState, setEditState] = useState(true)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (education.school !== "" && education.years !== "" && education.subject !== ""){
            setEditState(!editState)
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEducation({
            ...education,
            [event.target.name]: event.target.value,
        })    
    }

    return (
        <div>
            <button onClick={() => handleDelete(education_key)}>Delete</button>
            {editState ? 
            <div>
                <form onSubmit={(event) => {handleSubmit(event)}}>
                    <input type="text" name="school" defaultValue= {education.school} placeholder="School" onChange = {(event) => {handleChange(event)}}></input><br/>
                    <input type="text" name="years" defaultValue= {education.years} placeholder="Years" onChange = {(event) => {handleChange(event)}}></input><br/>
                    <input type="text" name="subject" defaultValue= {education.subject} placeholder="Subject" onChange = {(event) => {handleChange(event)}}></input><br/>
                    <input type="submit" value="Submit"></input>
                </form>
            </div> 
            : 
            <div>
                <button onClick={() => setEditState(!editState)}>Edit</button>
                <h2>{education.school}</h2>
                <h2>{education.years}</h2>
                <h2>{education.subject}</h2>
            </div>}
        </div>
    )
}

export default EducationControl; 