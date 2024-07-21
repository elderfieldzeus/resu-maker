export default function Skills( {skillTypes} ) {
    return (
        <div id="Skills" className="w-full flex flex-col items-center mt-8">
            <h1 className="font-bold">Skills</h1>
            <hr className="w-full my-1 border-t-3 border-black" />
            {skillTypes.map((type, index) => {
                return (
                    <div key={index} className="w-full flex gap-x-1 items-center flex-wrap">
                        <h1>{type.header}:</h1>
                        {type.skills.map((skill, index) => {
                            return(
                                <div key={index} className="flex items-center text-gray-500">
                                    {index == 0 || <span className="dot-svg size-2 bg-gray-500 mr-1"></span>}
                                    <p>{skill}</p>
                                </div>
                            );
                        })} 
                    </div>
                );
            })}
        </div>
    )
}