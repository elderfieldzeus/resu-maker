import Description from '../components/Description'

export default function RoleForm( {info, setInfo, exIndex, role, index} ) {
    function changeTitle(event) {
        info.experience[exIndex].roles[index].title = event.target.value;
        setInfo({...info, experience: info.experience});
    }

    function changeStart(event) {
        info.experience[exIndex].roles[index].start = event.target.value;
        setInfo({...info, experience: info.experience});
    }

    function changeEnd(event) {
        info.experience[exIndex].roles[index].end = event.target.value;
        setInfo({...info, experience: info.experience});
    }

    function addDescription() {
        role.descriptions.push("Description");
        info.experience[exIndex].roles[index] = role;
        setInfo({...info, experience: info.experience});
    }

    function deleteRole() {
        info.experience[exIndex].roles.splice(index, 1);
        setInfo({...info, experience: info.experience});
    }

    return (
        <div>
            <hr className="border-t border-gray-300 my-2" />
            <div className="flex justify-between">
                <h1>Role #{index + 1}:</h1>
                <button onClick={deleteRole}><span className="delete-svg size-4 bg-red-300 mr-2"></span></button>
            </div>
            <div className="grid mt-2">
                <input className="rounded-md pl-2 py-1" type="text" placeholder="Title" value={role.title} onChange={changeTitle}/>
            </div>
            <div className="grid grid-cols-2 my-4 gap-4">
                <input className="rounded-md pl-2 py-1" type="text" placeholder="Year Started" value={role.start} onChange={changeStart}/>
                <input className="rounded-md pl-2 py-1" type="text" placeholder="Year Ended" value={role.end} onChange={changeEnd}/>
            </div>
            <div>
                <div className="flex items-center">
                    <h1>Descriptions:</h1>
                    <button onClick={addDescription}><span className="add-svg size-4 mt-1 bg-blue-500 mr-2"></span></button>
                </div>
                {role.descriptions.map((des, i) => {
                    return (
                        <Description
                            key = {i}
                            info = {info}
                            setInfo = {setInfo}
                            exIndex = {exIndex}
                            roleIndex = {index}
                            description = {des}
                            desIndex = {i}
                        ></Description>
                    )
                })}
            </div>
        </div>
    );
}