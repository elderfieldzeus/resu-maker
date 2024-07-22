import { useState } from 'react'

export default function Subskill({ info, setInfo, typeIndex, skill, skillIndex }) {
    function changeSkill(event) {
        info.skillTypes[typeIndex].skills[skillIndex] = event.target.value;
        setInfo({...info, skillType: info.skillType});
    }

    function deleteSkill() {
        info.skillTypes[typeIndex].skills.splice(skillIndex, 1);
        setInfo({...info, skillType: info.skillType});
    }
    
    return (
        <div className="flex gap-1">
            <input type="text" className="rounded-md pl-2 py-1 w-full" value={skill} placeholder="Skill" onChange={changeSkill}/>
            <button onClick={deleteSkill}><span className="delete-svg size-4 bg-red-300"></span></button>
        </div>
    )
}