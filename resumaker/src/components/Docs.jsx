export default function Docs({className, info}) {
    console.log(info);
    return (
        <div className = {className}>
            <h1>{info.firstName} {info.lastName}</h1>
        </div>
    )
}