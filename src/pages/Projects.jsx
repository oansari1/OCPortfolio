import { Link } from "react-router-dom";
// import HorizontalAccordion from "../components/HorizontalAccordion";

// const tailwindLinks = [
//   { label: 'Typography', href: 'TailwindProjects/typography.html' },
//   { label: 'Layout', href: 'TailwindProjects/layouts.html' },
//   { label: 'Spacing', href: 'TailwindProjects/spacing.html' },
//   { label: 'Flex', href: 'TailwindProjects/flex.html' },
//   { label: 'Grid', href: 'TailwindProjects/grids.html' },
//   { label: 'Borders', href: 'TailwindProjects/borders.html' },
//   { label: 'Effects', href: 'TailwindProjects/effects.html' },
// ];

// const reactLinks = [
//   { label: 'Static Pages', href: './React/static_react/index.html' },
//   { label: 'Data Driven', href: './React/travel/index.html' },
//   { label: 'React State', href: './React/chef_claude/index.html' },
//   { label: 'Side Effects', href: './React/meme_generator/index.html' },
//   { label: 'Tenzies', href: './React/tenzies/index.html' },
//   { label: 'Assembly Endgame', href: './React/assembly_endgame/index.html' },
// ];

export default function Projects() {
  return (
    <div className="text-[#FA9600] bg-[#3A3A3A] rounded-lg flex flex-col min-w-1/3 p-8">
      <h1 className="text-4xl font-semibold mb-4">Projects</h1>
      <ul className="space-y-2 text-[#8C8C8C]">
        <li className="transition-transform duration-300 transform hover:scale-115 hover:text-[#FA9600] hover:underline">
          <Link to="/projects/React">React Projects</Link>
        </li>
        <li className="transition-transform duration-300 transform hover:scale-115 hover:text-[#FA9600] hover:underline">
          <Link to="/projects/Tailwind">Tailwind Projects</Link>
        </li>
      </ul>
      {/* <div>
        <h3 className="text-2xl font-semibold my-8">This accordion is a work in progress</h3>
        <HorizontalAccordion
          sections={[
            { title: 'C', links: [], logo: '/assets/c-plain.svg' },
            { title: 'Tailwind CSS', links: tailwindLinks, logo: '/assets/tailwindcss-original.svg' },
            { title: 'React', links: reactLinks, logo: '/assets/react-original.svg' },
            { title: 'Java', links: [], logo: '/assets/java-plain.svg' },
            { title: 'Web Basics', links: [], logo: '/assets/web-basics.svg' }, // HTML, CSS, JS combined
            { title: 'WordPress', links: [], logo: '/assets/wordpress-plain-wordmark.svg' },
            { title: 'Adobe XD', links: [], logo: '/assets/xd-plain.svg' },
          ]}
        />
      </div> */}
    </div>
  );
}
