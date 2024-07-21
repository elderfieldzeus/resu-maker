import { useState } from 'react'
import Subskill from '../components/Subskill';

export default function SkillInput({info, setInfo, index, skillType}) {
    function changeHeader(event) {
        info.skillTypes[index].header = event.target.value;
        setInfo({...info, skillTypes: info.skillTypes});
    }

    function deleteType() {
        info.skillTypes.splice(index, 1);
        setInfo({...info, skillTypes: info.skillTypes});
    }

    function addSkill() {
        info.skillTypes[index].skills.push("Skill");
        setInfo({...info, skillTypes: info.skillTypes});
    }

    return (
        <div>
            {index == 0 || <hr className="border-t border-gray-300 my-2" />}
            <div className='flex items-center justify-between'>
                <h1 className='mb-2'>Skill Type #{index + 1}: </h1>
                <button onClick={deleteType}><span className='delete-svg size-5 bg-red-500 mb-1 mr-2'></span></button>
            </div>

            <div className="grid gap-4">
                <input className="rounded-md pl-2 py-1" type="text" placeholder='Header' value={skillType.header} onChange={changeHeader} />

                <div>
                    <div className='flex items-center gap-[0.125rem]'>
                        <h1 className="mb-2">Skills:</h1>
                        <button onClick={addSkill}><span className='add-svg size-5 bg-blue-500 mb-2'></span></button>
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-full">
                        {skillType.skills.map((skill, i) => {
                            return (
                                <Subskill key={i} info={info} setInfo={setInfo} typeIndex = {index} skill={skill} skillIndex = {i}></Subskill>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}