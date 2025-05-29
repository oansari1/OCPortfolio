import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { projectLinks } from "../data/projectLinks";


export default function ProjectCategory() {
  const { category } = useParams(); 
  const links = projectLinks[category] || ['PROBLEM']; // Fallback to an empty array if category is not found
  
  return (
    <div className="text-[#FA9600] text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Projects: {category}</h1>
      <p className="text-lg">Here are my {category} projects:</p>
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
  );
}