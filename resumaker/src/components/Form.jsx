import { useState } from 'react';
import SkillInput from '../components/SkillInput'
import ExperienceForm from '../components/ExperienceForm'

export default function Form({info, setInfo}) {
    const [type, setType] = useState(info.skillTypes);
    const [ex, setEx] = useState(info.experience);

    const changeInfo = (type) => (event) => {
        setInfo({...info, [type]: event.target.value});
    }

    function addSkillType() {
        type.push({
            header: "Type",
            skills: ["Skill"]
        })
        setType(type);
        setInfo({...info, skillTypes: type})
    }

    function addCompany() {
        ex.push({
            company: "Company",
            location: "Location",
            roles: [{
                title: "Title",
                descriptions: ["Description"],
                start: "Start",
                end: "End"
            }]
        })
        setEx(ex);
        setInfo({...info, experience: ex});
    }

    return (
        <div className="py-3 w-full md:w-[32rem] h-[11in] overflow-y-scroll px-5 leading-none">
            <h1 className="mb-3 text-xl">Personal Information</h1>
            <div id="PersonalInfo" className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <input className="rounded-md pl-2 py-1" type="text" placeholder="First Name" value={info.firstName} onChange={changeInfo("firstName")}/>
                    <input className="rounded-md pl-2 py-1" type="text" placeholder="Last Name" value={info.lastName} onChange={changeInfo("lastName")}/>
                </div>
                <div className="grid gap-4">
                    <input className="rounded-md pl-2 py-1 " type="text" placeholder="Role" value={info.role} onChange={changeInfo("role")}/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input className="rounded-md pl-2 py-1" type="text" placeholder="Phone Number" value={info.phoneNum} onChange={changeInfo("phoneNum")}/>
                    <input className="rounded-md pl-2 py-1" type="text" placeholder="Email" value={info.email} onChange={changeInfo("email")}/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <input className="rounded-md pl-2 py-1" type="text" placeholder="Linkedin" value={info.linkedIn} onChange={changeInfo("linkedIn")}/>
                    <input className="rounded-md pl-2 py-1" type="text" placeholder="Address" value={info.address} onChange={changeInfo("address")}/>
                </div>
            </div>

            <h1 className="mt-5 mb-3 text-xl">Summary</h1>
            <div id="SummaryInfo" className="flex flex-col gap-4">
                <textarea name="summary" id="summary" placeholder="Short Summary" value={info.summary} className="px-2 py-2 leading-5 rounded-md min-h-48" onChange={changeInfo("summary")}></textarea>
            </div>

            <div className="flex gap-2 items-center">
                <h1 className="mt-5 mb-3 text-xl">Skill Types</h1>
                <button onClick={addSkillType} className="rounded-full bg-blue-500 size-5 mt-1 flex items-center justify-center"><span className="add-svg size-4 bg-white"></span></button>
            </div>
            <div id="SkillsInfo" className="flex flex-col gap-4">
                {info.skillTypes.map((type, index) => {
                    return (
                        <SkillInput 
                            key={index}
                            info={info} 
                            setInfo = {setInfo} 
                            index={index} 
                            skillType = {type} 
                        ></SkillInput>
                    );
                })}
            </div>

            <div className="flex gap-2 items-center">
                <h1 className="mt-5 mb-3 text-xl">Experience</h1>
                <button onClick={addCompany} className="rounded-full bg-blue-500 size-5 mt-1 flex items-center justify-center"><span className="add-svg size-4 mt-[0.125rem] bg-white"></span></button>
            </div>
            <div id="SummaryInfo" className="flex flex-col gap-4">
                {info.experience.map((experience, index) => {
                    return (
                        <ExperienceForm
                            key = {index}
                            info = {info}
                            setInfo = {setInfo}
                            experience = {experience}
                            index = {index}
                        ></ExperienceForm>
                    );
                })}
            </div>
        </div>
    )
}