import Skills from '../components/Skills'
import Experience from '../components/Experience'

export default function Docs({info}) {
    console.log(info);
    return (
        <div className="h-full px-5">
            <div className="w-[8.5in] h-[11in] text-base bg-white pt-[0.5in] pl-[0.6in] pr-[0.5in] pb-[0.67in] overflow-hidden font-sans">

                <div id="Personal_Info" className="flex flex-col items-center">
                    <h1 className="text-lg font-bold font-['Times_New_Roman']">{info.firstName.toUpperCase()} {info.lastName.toUpperCase()}</h1>
                    <h1 className='leading-3 text-gray-500'>{info.role}</h1>
                    <div className="flex w-full gap-2 justify-center leading-6 items-center text-gray-500">
                        <h1>{info.phoneNum}</h1>
                        <span className="diamond-svg bg-black size-2"></span>
                        <h1>{info.email}</h1>
                        <span className="diamond-svg bg-black size-2"></span>
                        <h1>{info.linkedIn}</h1>
                        <span className="diamond-svg bg-black size-2"></span>
                        <h1>{info.address}</h1>
                    </div>
                </div>

                <div id="Summary" className="w-full flex flex-col items-center mt-4">
                    <h1 className="font-bold">Summary</h1>
                    <hr className="w-full my-1 border-t-3 border-black" />
                    <p className="w-full text-justify leading-5">{info.summary}</p>
                </div>

                <Skills skillTypes = {info.skillTypes}></Skills>

                <div id="Experience" className="w-full flex flex-col items-center mt-4">
                    <h1 className="font-bold">Experience</h1>
                    <hr className="w-full my-1 border-t-3 border-black" />
                    <Experience experience = {info.experience}></Experience>
                </div>
            </div>
        </div>
    )
}