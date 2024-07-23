export default function EducationForm({ info, setInfo, education, index }) {
    function changeEducation(type) {
        return (e) => {
            if(type == 'School') {
                education.school = e.target.value;
            }
            if(type == 'Location') {
                education.location = e.target.value;
            }
            if(type == 'Degree') {
                education.degree = e.target.value;
            }
            if(type == 'Start') {
                education.start = e.target.value;
            }
            if(type == 'End') {
                education.end = e.target.value;
            }
            info.education[index] = education

            setInfo({...info, education: info.education});
        }
    }

    function deleteEducation() {
        info.education.splice(index, 1);
        setInfo({...info, education: info.education});
    }

    return (
        <div className="flex flex-col">
            {index == 0 || <hr className="border-t border-gray-300 my-2" />}
            <div className='flex justify-between'>
                <h1 className='text-lg mb-2'>School #{index + 1}:</h1>
                <button onClick={deleteEducation}><span className="delete-svg size-5 bg-red-500"></span></button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input className="rounded-md pl-2 py-1" type="text" placeholder="School Name" value={education.school} onChange={changeEducation("School")}/>
                <input className="rounded-md pl-2 py-1" type="text" placeholder="School Location" value={education.location} onChange={changeEducation("Location")}/>
            </div>
            <div className="flex w-full mb-4">
                <input className="rounded-md pl-2 py-1 w-full" type="text" placeholder="Degree" value={education.degree} onChange={changeEducation("Degree")}/>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <input className="rounded-md pl-2 py-1" type="text" placeholder="Year Started" value={education.start} onChange={changeEducation("Start")}/>
                <input className="rounded-md pl-2 py-1" type="text" placeholder="Year Ended" value={education.end} onChange={changeEducation("End")}/>
            </div>
        </div>
    )
}