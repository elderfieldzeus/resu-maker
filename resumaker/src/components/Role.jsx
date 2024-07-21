export default function Role( { role }) {
    return (
        <>
            <div className="flex w-full justify-between">
                <h1 className="font-semibold">{role.title}</h1>
                <h1>{role.start} - {role.end}</h1>
            </div>
            <ul>
                {role.descriptions.map((des, index) => {
                    return (
                    <div key={index} className="flex items-center gap-1 pl-2">
                        <span className="ml-2 dot-svg size-2 bg-black"></span>
                        <li > {des} </li>
                    </div>
                    );
                })}
            </ul>
        </>
    );
}