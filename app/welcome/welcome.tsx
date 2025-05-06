import { Link } from "react-router";

const CVList:{img:string,title:string,url:string}[]=[{
  img:"https://raw.githubusercontent.com/SALEHINISLAM/cv-template/main/public/engineer_10899202.png",
  title:"Civil Engineer CV",
  url:"/civil-engineer-cv"
},{
  img:"https://raw.githubusercontent.com/SALEHINISLAM/cv-template/main/public/ArchitecturalProjectManager.png",
  title:"Architectural Project Manager CV",
  url:"/architectural-project-manager-cv"
}]

export function Welcome() {
  return (
    <main className="container mx-auto pt-16 pb-4">
      <ol className="list-decimal w-full max-w-2xl p-4">
        <li className="flex items-center gap-2 ">
          <img className="w-16 h-16" src="https://raw.githubusercontent.com/SALEHINISLAM/cv-template/main/public/engineer_10899202.png" alt="" />
          <b>Civil Engineer CV:</b>
          <Link to={"/civil-engineer-cv"} className="underline">Click Here</Link>
        </li>

      </ol>
    </main>
  );
}
