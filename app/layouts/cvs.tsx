import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import type { Route } from "./+types/cvs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV Template" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const CVs = () => {
  const [printJS, setPrintJS] = useState<any>(null);

  // Load print-js only in the browser
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("print-js").then((module) => {
        setPrintJS(() => module.default);
      }).catch((error: Error) => {
        console.error("Failed to load print-js:", error);
      });
    }
  }, []);

  const handleDownloadPDF = () => {
    if (!printJS) {
      console.error("print-js is not loaded yet");
      return;
    }

    const input = document.getElementById("cv-content");
    if (!input) {
      console.error("Element with id 'cv-content' not found");
      return;
    }

    console.log("Starting PDF generation with print-js...");
    printJS({
      printable: "cv-content",
      type: "html",
      style: `
        @page {
          size: A4;
          margin: 10mm;
        }
        body {
          margin: 0;
          -webkit-print-color-adjust: exact; /* Chrome, Safari */
          print-color-adjust: exact; /* Firefox */
        }
        #cv-content {
          width: 794px;
          padding: 72px;
          -webkit-print-color-adjust: exact; /* Ensure colors are printed */
          print-color-adjust: exact;
        }
        * {
          -webkit-print-color-adjust: exact; /* Apply to all elements */
          print-color-adjust: exact;
        }
        .bg-[#328b5f] { background-color: #328b5f !important; }
        .bg-[#c2c2c2] { background-color: #c2c2c2 !important; }
        .text-[#328b5f] { color: #328b5f !important; }
        .text-[#113f37] { color: #113f37 !important; }
        .text-[#42576a] { color: #42576a !important; }
        .text-[#2c5755] { color: #2c5755 !important; }
        .text-[#24504f] { color: #24504f !important; }
        .text-[#55595f] { color: #55595f !important; }
        .bg-gray-300 { background-color: #d1d5db !important; }
        .text-gray-800 { color: #333333 !important; }
        .border-gray-400 { border-color: #9ca3af !important; }
        .bg-white { background-color: #ffffff !important; }
        .text-black { color: #000000 !important; }
      `,
      documentTitle: "Tom_Munez_CV",
      scanStyles: true, // Ensure styles are scanned from the DOM
      targetStyles: ["*"], // Apply styles to all elements
    });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="overflow-auto items-center justify-center flex flex-col">
        <button
          onClick={handleDownloadPDF}
          className="mb-6 bg-[#328b5f] text-white px-4 py-2 rounded hover:bg-[#24504f] transition-colors"
        >
          Download CV as PDF
        </button>
        <Outlet/>
        {/* <CivilEngineerCV /> */}
      </div>
    </div>
  );
};

export default CVs;