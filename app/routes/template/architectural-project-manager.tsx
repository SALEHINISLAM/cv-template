import { BiPhone } from 'react-icons/bi';
import type { Route } from './+types/architectural-project-manager';
import { MdAlternateEmail } from 'react-icons/md';
import { Link } from 'react-router';
import { FaLink } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Architectural Project Manager CV" },
    { name: "description", content: "Civil Engineer CV" }
  ];
}

export default function ArchitecturalProjectManager() {
  return (
    <div id='cv-content' className='w-[794px] bg-[#C3C3C3]'>
        <div className="grid grid-cols-3">
            <div className="col-span-2 pl-[60px] pt-[72px] pb-[72px] pr-[10px]">
{/* name */}
<h1 className="uppercase text-3xl text-[#2E3639] font-bold">Carter Andrade</h1>
            {/* title/ designation */}
      <p className="text-[#1A92C3] mt-2.5 text-xl font-bold">
      Architectural Project Manager
      </p>
      {/* number, email, link */}
      <div className="flex flex-col w-full text-sm">
        <div className="flex flex-wrap justify-between">
          {/* phone */}
          <div className="flex flex-row gap-1 items-center ">
            <BiPhone className="text-[#9B9B9B]" />
            <p className="text-[#373F6F] font-semibold">+1-541-754-3010</p>
          </div>
          {/* email */}
          <div className="flex flex-row gap-1 items-center">
            <MdAlternateEmail className="text-[#9B9B9B] " />
            <Link
              to={"mailto:help@professionalupdate.com"}
              className="text-[#373F6F] font-semibold"
            >
              help@professionalupdate.com
            </Link>
          </div>
          {/* linkedIn */}
          <div className="flex flex-row gap-1 items-center">
            <FaLink className="text-[#9B9B9B]" />
            <Link to={"linkedin.com"} className="text-[#373F6F] font-semibold">
              linkedin.com
            </Link>
          </div>
          {/* location */}
          <div className="flex flex-row gap-1 items-center">
            <FaLocationDot className="text-[#9B9B9B] " />
            <p className="text-[#373F6F] font-semibold">San Francisco, CA</p>
          </div>
        </div>
      </div>
            </div>
            <div className="bg-[#1D3449] pr-[72px] pt-[72px] pb-[72px]">

            </div>
        </div>
    </div>
  )
}
