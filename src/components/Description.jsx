export default function Description( {
    info,
    setInfo,
    exIndex,
    roleIndex,
    description,
    desIndex
}) {

    function changeDescription(event) {
        info.experience[exIndex].roles[roleIndex].descriptions[desIndex] = event.target.value;
        setInfo({...info, experience: info.experience});
    }

    function deleteDescription() {
        info.experience[exIndex].roles[roleIndex].descriptions.splice(desIndex, 1);
        setInfo({...info, experience: info.experience});
    }

    return (
        <div>
            <div className="flex mt-2 gap-1">
                <textarea className="rounded-md pl-2 py-1 w-full min-h-20 leading-5" type="text" placeholder="Title" value={description} onChange={changeDescription}/>
                <button onClick={deleteDescription}><span className="delete-svg size-4 mt-1 bg-red-300 mr-2"></span></button>
            </div>
        </div>
    );
}