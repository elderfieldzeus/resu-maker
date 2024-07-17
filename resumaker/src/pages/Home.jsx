import { useState } from 'react'
import Form from '../components/Form'
import Docs from '../components/Docs'

export default function Home({className}) {
    const resumeInfo = {
        firstName: "",
        lastName: ""
    }

    const [info, setInfo] = useState(resumeInfo);
    return (
        <div className = {className}>
            <Form className="w-1/2 h-screen" info = {info} setInfo = {setInfo}></Form>
            <Docs className="w-[45rem] h-[55rem] text-sm bg-white" info = {info}></Docs>
        </div>
    );
}