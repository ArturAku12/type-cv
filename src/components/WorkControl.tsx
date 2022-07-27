import React, { useState } from 'react';

const WorkControl = (props:any) => {
    const { work_key } = props;
    
    interface WorkComponent {
        place: string;
        position: string;
        months_of_experience: string | number;
        tasks: string;
    }

    const [work, setWork] = useState<WorkComponent>({
        place: "",
        position: "",
        months_of_experience: "",
        tasks: "",
    })

    const [editState, setEditState] = useState(true)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (work.place !== "" && work.position !== "" && work.months_of_experience !== "" && work.tasks !== ""){
            setEditState(!editState)
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWork({
            ...work,
            [event.target.name]: event.target.value,
        })    
    }


    return (
        <div>
            {editState ?
                <div>
                    <form onSubmit={(event) => {handleSubmit(event)}}>
                        <input type="text" name="place" placeholder="Place" defaultValue={work.place}  onChange={(event) => {handleChange(event)}}></input><br/>
                        <input type="text" name="position" placeholder="Position" defaultValue={work.position} onChange={(event) => {handleChange(event)}} ></input><br/>
                        <input type="text" name="months_of_experience" defaultValue= {work.months_of_experience} placeholder="MonthsOfExperience" onChange = {(event) => {handleChange(event)}}></input><br/>
                        <input type="text" name="tasks" defaultValue= {work.tasks} placeholder="Tasks" onChange = {(event) => {handleChange(event)}}></input><br/>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
                :
                <div>
                    <button onClick={() => setEditState(!editState)}>Edit</button>
                    <h1>{work.place}</h1>
                    <h1>{work.position}</h1>
                    <h1>{work.months_of_experience}</h1>
                    <h1>{work.tasks}</h1>
                </div>
            }
        </div>
    )
}

export default WorkControl; 

