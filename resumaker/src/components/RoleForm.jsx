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

    return (
        <div>
            <h1>Role #{index}:</h1>
            <div className="grid mt-2">
                <input className="rounded-md pl-2 py-1" type="text" placeholder="Title" value={role.title} onChange={changeTitle}/>
            </div>
            <div className="grid grid-cols-2 my-4 gap-4">
                <input className="rounded-md pl-2 py-1" type="text" placeholder="Year Started" value={role.start} onChange={changeStart}/>
                <input className="rounded-md pl-2 py-1" type="text" placeholder="Year Ended" value={role.end} onChange={changeEnd}/>
            </div>
        </div>
    );
}