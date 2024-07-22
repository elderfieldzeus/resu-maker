import RoleForm from '../components/RoleForm'

export default function ExperienceForm({ info, setInfo, experience, index }) {
    const changeCompany = (event) => {
        info.experience[index].company = event.target.value;
        setInfo({...info, experience: info.experience})
    }

    const changeLocation = (event) => {
        info.experience[index].location = event.target.value;
        setInfo({...info, experience: info.experience})
    }

    function addRole(event) {
        info.experience[index].roles.push({
            title: "Title",
            descriptions: ["Description"],
            start: "Start",
            end: "End"
        });
        setInfo({...info, experience: info.experience})
    }

    function deleteCompany() {
        info.experience.splice(index, 1);
        setInfo({...info, experience: info.experience});
    }

    return (
        <div>
            {index == 0 || <hr className="border-t border-gray-300 my-2" />}
            <div className='flex justify-between'>
                <h1 className='text-lg mb-2'>Company #{index + 1}:</h1>
                <button onClick={deleteCompany}><span className="delete-svg size-5 bg-red-500"></span></button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <input className="rounded-md pl-2 py-1" type="text" placeholder="Company Name" value={experience.company} onChange={changeCompany}/>
                <input className="rounded-md pl-2 py-1" type="text" placeholder="Company Location" value={experience.location} onChange={changeLocation}/>
            </div>
            <div>
                <div className='mt-5 mb-2 flex items-center gap-[0.125rem]'>
                    <h1 className='text-lg'>Roles:</h1>
                    <button onClick={addRole}><span className='add-svg size-5 bg-blue-500 mt-1'></span></button>
                </div>
                {experience.roles.map((role, i) => {
                    return (
                        <RoleForm
                            key = {i}
                            info = {info}
                            setInfo = {setInfo}
                            exIndex = {index}
                            role = {role}
                            index = {i}
                        ></RoleForm>
                    );
                })}
            </div>
        </div>
    );
}