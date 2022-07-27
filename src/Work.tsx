import React, { useState } from 'react';
import WorkControl from './components/WorkControl'
import uniqid from 'uniqid';

const Work = () => {


    const [workKeys, setWorkKeys] = useState<string[]>([])

    const addKey = () => {
        if (workKeys.length > 0) {
            setWorkKeys(workKeys => [...workKeys, uniqid()])
        } else {
            setWorkKeys([uniqid()])
        }
    }

    const handleDelete = (work_key: string) => {
        setWorkKeys(workKeys.filter(key => key !==work_key))
    }

    const displayEntries = () => {
        return (
            <div>
                <hr></hr>
                <button onClick={addKey}> Add Work </button>
                {workKeys.map(work_key =>
                    <div key={work_key}>
                        <button onClick={() => handleDelete(work_key)}>Delete</button>
                        <WorkControl work_key={work_key} />
                    </div>)}
            </div>
        )
    }
    return (
        <div>
            {displayEntries()}
        </div>
    )
}

export default Work; 