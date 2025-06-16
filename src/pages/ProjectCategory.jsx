import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { projectLinks } from "../data/projectLinks";


export default function ProjectCategory() {
  const { category } = useParams(); 
  const links = projectLinks[category] || ['PROBLEM']; // Fallback to an empty array if category is not found
  
  return (
    <div className="flex flex-col items-center justify-center w-full px-2 sm:px-0">
      <div className="w-full max-w-2xl bg-[#3A3A3A] sm:p-12 p-4 rounded-lg sm:mt-4 mb-4">
        <h1
          className="font-semibold text-[#FA9600] mb-4"
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)"
          }}
        >
          Projects: {category}
        </h1>
        <p
          className="text-center text-gray-400 mb-4"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.125rem)"
          }}
        >
          Here are my {category} projects:
        </p>
        <ul className="space-y-2 text-[#8C8C8C]">
          {links.map((link, index) => (
            <li key={index} className="transition-transform duration-300 transform hover:scale-115 hover:text-[#FA9600] hover:underline">
              {link.external ? (
                <a href={link.href}>{link.label}</a>
              ) : (
                <Link to={link.href}>{link.label}</Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}