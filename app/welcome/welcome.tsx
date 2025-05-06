import { Link } from "react-router";

const CVList: { img: string; title: string; url: string }[] = [
  {
    img: "https://raw.githubusercontent.com/SALEHINISLAM/cv-template/main/public/engineer_10899202.png",
    title: "Civil Engineer CV",
    url: "/civil-engineer-cv",
  },
  {
    img: "https://raw.githubusercontent.com/SALEHINISLAM/cv-template/main/public/ArchitecturalProjectManager.png",
    title: "Architectural Project Manager CV",
    url: "/architectural-project-manager-cv",
  },
];

export function Welcome() {
  return (
    <main className="container mx-auto pt-16 pb-4">
      <ol className="list-decimal w-full max-w-2xl p-4 min-h-screen">
        {CVList.map((cv, index) => (
          <li key={index} className="flex items-center gap-2 ">
            <img className="w-16 h-16" src={cv.img} alt="" />
            <b>{cv.title}:</b>
            <Link to={cv.url} className="underline">
              Click Here
            </Link>
          </li>
        ))}
      </ol>
      {/* footer */}
      <div className="mb-16 text-center">Github Repository:<Link to={'https://github.com/SALEHINISLAM/cv-template'}>https://github.com/SALEHINISLAM/cv-template</Link></div>
    </main>
  );
}
