import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ProjectCategory() {
  const { category } = useParams(); 

  return (
    <div className="text-[#FA9600] text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Projects: {category}</h1>
      <p className="text-lg">Here are my projects related to {category}.</p>
    </div>
  );
}
