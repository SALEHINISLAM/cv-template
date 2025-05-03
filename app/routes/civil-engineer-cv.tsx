import { BiPhone } from "react-icons/bi";
import type { Route } from "./+types/civil-engineer-cv";
import { MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router";
import { FaHeart, FaLink, FaStar } from "react-icons/fa";
import {
  FaCalendarDays,
  FaLocationDot,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import parse from "html-react-parser";
import "app/style/globalStyle.css";
import { TiLightbulb } from "react-icons/ti";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Civil Engineer CV" },
    { name: "description", content: "Civil Engineer CV" },
    {Image:"../../public/engineer_10899202.png"}
  ];
}

const SkillsGrid = ({ skills }: { skills: string[] }) => {
  return (
    <div>
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="text-gray-800 font-medium border-b border-gray-400 pb-1 inline-block"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const IconComponent = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  // Map of icon names to their components
  const iconMap: Record<string, React.ElementType> = {
    FaStar: FaStar,
    FaHeart: FaHeart,
    TiLightbulb: TiLightbulb,
    FaWandMagicSparkles: FaWandMagicSparkles,
    // Add more icons as needed
  };

  // Get the icon component from the map
  const Icon = iconMap[iconName];

  // If the icon exists in our map, render it, otherwise render nothing
  return Icon ? <Icon className={className} /> : null;
};
type LanguageLevel = "native" | "advanced" | "beginner"
const getFilledCircles = (level: LanguageLevel): number => {
    switch (level) {
      case "native":
        return 5
      case "advanced":
        return 3
      case "beginner":
        return 1
      default:
        return 0
    }
  }

const experienceList: {
  designation: string;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}[] = [
  {
    designation: "Senior Civil Engineer",
    company: "ABC Engineering Ltd.",
    startDate: "Jan 2018",
    endDate: "Present",
    location: "San Francisco, CA",
    description:
      "Led the design and implementation of bridge projects.<ul><li>Managed a team of 10 engineers, resulting in successful completion of 5 major bridge projects within a year.</li><li>Implemented new design standards, reducing project costs by 15%.</li><li>Conducted regular site investigations, ensuring compliance with local regulations. </li> </ul>",
  },
  {
    designation: "Civil Engineer II",
    company: "XYZ Construction Co.",
    startDate: "Jan 2015",
    endDate: "Dec 2017",
    location: "Los Angeles, CA",
    description:
      "Worked on various civil engineering projects, focusing on bridge design and construction.<ul><li>Assisted in the design of a major highway bridge, which won the 'Best Infrastructure Project' award.</li><li>Collaborated with local agencies to ensure compliance with design standards.</li><li>Utilized software tools like SAP and AutoCAD for project design and analysis.</li></ul>",
  },
  {
    designation: "Civil Engineer I",
    company: "LMN Engineering Services",
    startDate: "Jan 2012",
    endDate: "Dec 2014",
    location: "San Diego, CA",
    description:
      "Assisted in the design and analysis of various civil engineering projects.<ul><li>Worked under the supervision of senior engineers to develop design plans.</li><li>Conducted site investigations and prepared reports.</li><li>Gained proficiency in using design software like MicroStation and CTBridge.</li></ul>",
  },
];

const educationList: {
  degree: string;
  institute: string;
  startDate: string;
  endDate: string;
  location: string;
  result: string;
  description: string;
}[] = [
  {
    degree: "MSc in Civil Engineering",
    institute: "Stanford University",
    startDate: "Sep 2009",
    endDate: "Jun 2011",
    location: "Stanford, CA",
    result: "GPA: 3.8/4.0",
    description:
      "Specialized in Structural Engineering and Bridge Design. Completed a thesis on 'Innovative Materials in Bridge Construction'.",
  },
  {
    degree: "BSc in Civil Engineering",
    institute: "University of California, Berkeley",
    startDate: "Sep 2005",
    endDate: "Jun 2009",
    location: "Berkeley, CA",
    result: "GPA: 3.6/4.0",
    description:
      "Graduated with honors. Completed coursework in Structural Analysis, Materials Science, and Geotechnical Engineering.",
  },
];

const skillList: string[] = [
  "SAP",
  "CSI Bridge",
  "CTBridge",
  "AutoCAD",
  "MicroStation",
  "Caltrans Standards",
  "Project Management",
  "Bridge Analysis",
  "Site Investigation",
  "Team Leadership",
];

const strengthList: { icon: string; title: string; description: string }[] = [
  {
    icon: "FaStar",
    title: "Project Management",
    description:
      "Proven ability to manage large-scale projects from conception to completion, ensuring timely delivery and adherence to budget constraints.",
  },
  {
    icon: "FaHeart",
    title: "Technical Proficiency",
    description:
      "Deep understanding of civil engineering principles, particularly in bridge design and construction.",
  },
  {
    icon: "TiLightbulb",
    title: "Regulatory Knowledge",
    description:
      "Strong familiarity with Caltrans and local agency design standards, ensuring compliance in all projects.",
  },
];
const achievementList: { icon: string; title: string; description: string }[] =
  [
    {
      icon: "FaWandMagicSparkles",
      title: "Bridge Design Patent",
      description:
        "Developed a unique bridge design that was patented and has been adopted in multiple infrastructure projects.",
    },
    {
      icon: "FaStar",
      title: "Leadership in ABC Engineering",
      description:
        "Promoted to a leadership role within two years at ABC Engineering due to exceptional performance and project management skills.",
    },
  ];

const languageList:{name:string, level:LanguageLevel}[]=[{
    name:"English",
    level:"native"
},
{
    name:"Spanish",
    level:"advanced"
},
{
    name:"French",
    level:"beginner"
}
]

export default function CivilEngineerCV() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="overflow-auto">
        <div className="w-[2480] bg-[#c2c2c2] p-20">
          <h1 className="uppercase text-4xl text-[#113f37] font-bold">
            Tom Munez
          </h1>
          <p className="text-[#328b5f] mt-2.5 text-xl font-bold">
            Experienced Civil Engineer & Project Leader
          </p>
          {/* number, email, link */}
          <div className="flex flex-col w-full text-lg">
            <div className="grid grid-cols-3">
              {/* phone */}
              <div className="flex flex-row gap-1 items-center ">
                <BiPhone className="text-[#328b5f]" />
                <p className="text-[#42576a]  font-semibold">+1-541-754-3010</p>
              </div>
              {/* email */}
              <div className="flex flex-row gap-1 items-center">
                <MdAlternateEmail className="text-[#328b5f] " />
                <Link
                  to={"mailto:help@professionalupdate.com"}
                  className="text-[#42576a] font-semibold"
                >
                  help@professionalupdate.com
                </Link>
              </div>
              {/* linkedIn */}
              <div className="flex flex-row gap-1 items-center">
                <FaLink className="text-[#328b5f]" />
                <Link
                  to={"linkedin.com"}
                  className="text-[#42576a] font-semibold"
                >
                  linkedin.com
                </Link>
              </div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <FaLocationDot className="text-[#328b5f] " />
              <p className="text-[#42576a] font-semibold">San Francisco, CA</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-12 mt-8">
            <div className="col-span-2 space-y-6 pr-4">
              {/* summery */}
              <div className="">
                <h3 className="uppercase text-[#113f37] font-bold text-xl">
                  Summary
                </h3>
                <hr className="h-2 bg-[#113f37] mb-4" />
                <p className="text-lg text-[#55595f]">
                  With over 10 years of experience in civil engineering, I bring
                  a deep technical proficiency and a proven track record of
                  managing large-scale bridge projects. I am adept at using
                  tools like SAP, CSI Bridge, CTBridge, AutoCAD, and
                  MicroStation, and have a strong understanding of Caltrans and
                  local agency design standards. One of my biggest achievements
                  has been the successful completion of a major bridge project
                  that won the 'Best Infrastructure Project' award.
                </p>
              </div>

              {/* experience */}
              <div>
                <h3 className="uppercase text-[#113f37] font-bold text-xl">
                  Experience
                </h3>
                <hr className="h-2 bg-[#113f37]" />
                {experienceList.map((item, index) => {
                  return (
                    <div className="pt-4 space-y-1.5" key={index}>
                      <h3 className="text-[#2c5755] font-semibold text-xl">
                        {item.designation}
                      </h3>
                      <h4 className="text-[#328b5f] text-lg font-bold">
                        {item.company}
                      </h4>
                      <div className="grid grid-cols-3 gap-2 text-[#55595f] text-lg">
                        <div className="flex flex-row gap-1 items-center">
                          <FaCalendarDays />
                          <p>
                            {item.startDate} - {item.endDate}
                          </p>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                          <FaLocationDot />
                          <p>{item.location}</p>
                        </div>
                      </div>
                      <div className="prose prose-lg text-[#55595f] listMarkers">
                        {parse(item.description)}
                      </div>
                      {experienceList.length !== index + 1 && (
                        <hr className="border-t-2 border-dashed border-gray-400 w-full my-5" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* education */}
              <div>
                <h3 className="uppercase text-[#113f37] font-bold text-xl">
                  Education
                </h3>
                <hr className="h-2 bg-[#113f37]" />
                {educationList.map((item, index) => {
                  return (
                    <div className="pt-4 space-y-1.5" key={index}>
                      <h3 className="text-[#2c5755] font-semibold text-xl">
                        {item.degree}
                      </h3>
                      <h4 className="text-[#328b5f] text-lg font-bold">
                        {item.institute}
                      </h4>
                      <p className="text-[#2c5755] text-lg font-medium">
                        Result:{item.result}
                      </p>
                      <div className="grid grid-cols-3 gap-2 text-[#55595f] text-lg">
                        <div className="flex flex-row gap-1 items-center">
                          <FaCalendarDays />
                          <p>
                            {item.startDate} - {item.endDate}
                          </p>
                        </div>
                        <div className="flex flex-row gap-1 items-center">
                          <FaLocationDot />
                          <p>{item.location}</p>
                        </div>
                      </div>
                      <div className="prose text-[#55595f] listMarkers prose-lg">
                        {parse(item.description)}
                      </div>
                      {educationList.length !== index + 1 && (
                        <hr className="border-t-2 border-dashed border-gray-400 w-full my-5" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" space-y-6">
              <div className="">
                <h3 className="uppercase text-[#113f37] font-bold text-xl">
                  Skills
                </h3>
                <hr className="h-2 bg-[#113f37] mb-4" />
                <SkillsGrid skills={skillList} />
              </div>
              {/* strengths */}
              <div className="">
                <h3 className="uppercase text-[#113f37] font-bold text-xl">
                  Strengths
                </h3>
                <hr className="h-2 bg-[#113f37] mb-4" />
                <div>
                  {strengthList.map((strength, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-start gap-2">
                        <div className={`text-xl mt-1 text-[#328b5f]}`}>
                          <IconComponent
                            iconName={strength.icon}
                            className="text-[#328b5f]"
                          />
                        </div>
                        <div>
                          <h4 className="text-[#24504f] font-bold text-lg">
                            {strength.title}
                          </h4>
                          <p className="text-[#55595f] text-lg">
                            {strength.description}
                          </p>
                        </div>
                      </div>
                      {strengthList.length !== index + 1 && (
                        <hr className="border-t-2 border-dashed border-gray-400 w-full my-5" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* achievements */}
              <div className="">
                <h3 className="uppercase text-[#113f37] font-bold text-xl">
                  Achievements
                </h3>
                <hr className="h-2 bg-[#113f37] mb-4" />
                <div>
                  {achievementList.map((achievement, index) => (
                    <div key={index} className="mb-4">
                      <div className="flex items-start gap-2">
                        <div className={`text-xl mt-1 text-[#328b5f]}`}>
                          <IconComponent
                            iconName={achievement.icon}
                            className="text-[#328b5f]"
                          />
                        </div>
                        <div>
                          <h4 className="text-[#24504f] font-bold text-lg">
                            {achievement.title}
                          </h4>
                          <p className="text-[#55595f] text-lg">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                      {achievementList.length !== index + 1 && (
                        <hr className="border-t-2 border-dashed border-gray-400 w-full my-5" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* philosophy */}
              <div className="">
                <h3 className="uppercase text-[#113f37] font-bold text-xl">
                  My Life Philosophy
                </h3>
                <hr className="h-2 bg-[#113f37] mb-4" />
                <p className="text-[#328b5f] text-lg">
                  Engineers like to solve problems. If there are no problems handily available, they will create their own problems.
                </p>
              </div>

              {/* language */}
              <div className="">
                <h3 className="uppercase text-[#113f37] font-bold text-xl">
                  Languages
                </h3>
                <hr className="h-2 bg-[#113f37] mb-4" />
                <div>
      {languageList.map((language, index) => (
        <div key={index} className="mb-3 flex items-center gap-4 justify-between">
          <div className="flex flex-col ">
            <h4 className="text-[#55595f] font-bold text-lg">{language.name}</h4>
            <p className="text-[#55595f] text-lg">
              {language.level.charAt(0).toUpperCase() + language.level.slice(1)}
            </p>
          </div>
          <div className="flex gap-1 mt-1">
            {/* Render 5 circles for each language */}
            {[...Array(5)].map((_, i) => {
              // Determine if this circle should be filled based on the language level
              const isFilled = i < getFilledCircles(language.level)
              return <div key={i} className={`w-4 h-4 rounded-full ${isFilled ? "bg-[#328b5f]" : "bg-gray-300"}`}></div>
            })}
          </div>
        </div>
      ))}
    </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
