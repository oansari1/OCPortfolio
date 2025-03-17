import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const tailwindLinks = [
  { label: 'Typography', href: '/public/TailwindProjects/typography.html' },
  { label: 'Layout', href: '/public/TailwindProjects/layouts.html' },
  { label: 'Spacing', href: '/public/TailwindProjects/spacing.html' },
  { label: 'Flex', href: '/public/TailwindProjects/flex.html' },
  { label: 'Grid', href: '/public/TailwindProjects/grids.html' },
  { label: 'Borders', href: '/public/TailwindProjects/borders.html' },
  { label: 'Effects', href: '/public/TailwindProjects/effects.html' },
];

const reactLinks = [
  { label: 'Static Pages', href: '/src/pages/projects/ReactProjects/static_react/index.html' },
  { label: 'Data Driven', href: '/src/pages/projects/ReactProjects/travel/index.html' },
  { label: 'React State', href: '/src/pages/projects/ReactProjects/chef_claude/index.html' },
  { label: 'Side Effects', href: '/src/pages/projects/ReactProjects/meme_generator/index.html' },
  { label: 'Tenzies', href: '/src/pages/projects/ReactProjects/tenzies/index.html' },
  { label: 'Assembly Endgame', href: '/src/pages/projects/ReactProjects/assembly_endgame/index.html' },
];

export default function ProjectCategory() {
  const { category } = useParams(); 

  const links = category === 'tailwind' ? tailwindLinks : reactLinks;

  return (
    <div className="text-[#FA9600] text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Projects: {category}</h1>
      <p className="text-lg">Here are my {category} projects:</p>
      <ul className="space-y-2 text-[#8C8C8C]">
        {links.map((link, index) => (
          <li key={index} className="transition-transform duration-300 transform hover:scale-115 hover:text-[#FA9600] hover:underline">
            <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}