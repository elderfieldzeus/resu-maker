import { useState } from 'react'
import Form from '../components/Form'
import Docs from '../components/Docs'

export default function Home() {
    const resumeInfo = {
        firstName: "Juan",
        lastName: "Dela Cruz",
        role: "Senior Software Engineer",
        phoneNum: "09123456790",
        email: "jdelacruz@gmail.com",
        linkedIn: "linkedin.com/jdelacruz",
        address: "Philippines, Cebu",
        summary: "Experienced Senior Software Engineer with over 10 years of expertise in developing high-quality software solutions, specializing in full-stack development and agile methodologies. Strong background in designing and implementing scalable and efficient software systems, with a proven track record of leading successful projects from conception to deployment.",
        skillTypes: [{
            header: "Technical",
            skills: ["C", "Python", "Javascript"]
        }, {
            header: "Business",
            skills: ["Communication", "Teamwork"]
        }
        ],
        experience: [{
            company: "Apple",
            location: "New York, NY",
            roles: [{
                title: "Software Engineer",
                descriptions: [
                    "Led the development and optimization of the microchip for the latest iPhone models, improving performance and energy efficiency."
                ],
                start: "2019",
                end: "Ongoing"
            },
            {
                title: "IT Engineer",
                descriptions: [
                    "Implemented advanced security measures to protect company data and prevent cyber threats, ensuring compliance with industry standards."
                ],
                start: "2019",
                end: "Ongoing"
            }]
        },
        {
            company: "Microsoft",
            location: "Dallas, TX",
            roles: [{
                title: "Data Engineer",
                descriptions: [
                    "Developed and maintained data pipelines, improving data processing speed and accuracy, leading to better business insights and decision-making."
                ],
                start: "2013",
                end: "2019"
            }]
        }],
        education: [{
            school: "University of San Carlos",
            location: "Cebu, PH",
            degree: "BS Computer Science",
            start: "2023",
            end: "2026"
        }]
    }

    const [info, setInfo] = useState(resumeInfo);
    return (
        <div className="bg-gray-200 min-h-screen py-4 flex flex-wrap justify-center items-center">
            <Docs info = {info}></Docs>
            <Form info = {info} setInfo = {setInfo}></Form>
        </div>
    );
}