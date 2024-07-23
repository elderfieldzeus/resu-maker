export default function Education({education}) {
    return (
        <>
            {education.map((ed, i) => {
                return (
                    <div key = {i} className="w-full mb-4">
                        <div className="flex justify-between w-full leading-4 items-center">
                            <h1 className="text-lg text-gray-500">{ed.school}</h1>
                            <p>{ed.location}</p>
                        </div>
                        <div className="flex justify-between w-full leading-4 items-center">
                            <h1>{ed.degree}</h1>
                            <p>{ed.start} - {ed.end}</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
}  