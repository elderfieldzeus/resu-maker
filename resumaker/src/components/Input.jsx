export default function Input( {placeholder, func} ) {
    return (
        <div>
            <input type="text" placeholder={placeholder} onChange={func}/>
        </div>
    )
}