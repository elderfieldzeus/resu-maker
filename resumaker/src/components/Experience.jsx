import Role from '../components/Role'

export default function Experience( { experience } ) {
    return (
        <div className="w-full">
            {experience.map((ex, i) => {
                return (
                    <div key={i} className="w-full mb-5">
                        <div className="w-full flex justify-between items-center">
                            <h1 className="text-lg text-gray-500">{ex.company}</h1>
                            <h1>{ex.location}</h1>
                        </div>
                        <div>
                            {ex.roles.map((role, index) => {
                                return (<Role 
                                    key={index}
                                    role = {role}
                                ></Role>)
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}