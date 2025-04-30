import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

const tailwindLinks = [
  { label: 'Typography', href: '/projects/tailwind/typography.html' },
  { label: 'Layout', href: '/projects/tailwind/layouts.html' },
  { label: 'Spacing', href: '/projects/tailwind/spacing.html' },
  { label: 'Flex', href: '/projects/tailwind/flex.html' },
  { label: 'Grid', href: '/projects/tailwind/grids.html' },
  { label: 'Borders', href: '/projects/tailwind/borders.html' },
  { label: 'Effects', href: '/projects/tailwind/effects.html' },
];

const reactLinks = [
  { label: 'Static Pages', href: '/projects/static_react/' },
  { label: 'Data Driven', href: '/projects/travel/' },
  { label: 'React State', href: '/projects/chef_claude/' },
  { label: 'Side Effects', href: '/projects/meme_generator/' },
  { label: 'Tenzies', href: '/projects/tenzies/' },
  { label: 'Assembly Endgame', href: '/projects/assembly_endgame/' },
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