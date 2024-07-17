import Input from './Input'

export default function Form({className, info, setInfo}) {
    const changeInfo = (type) => (event) => {
        setInfo({...info, [type]: event.target.value});
    }

    return (
        <div className = {className}>
            <Input placeholder="First Name" func = {changeInfo('firstName')}></Input>
            <Input placeholder="Last Name" func = {changeInfo('lastName')}></Input>
        </div>
    )
}