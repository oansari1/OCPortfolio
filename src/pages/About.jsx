export default function About() {
    return (
    <div className="flex w-3/4 h-auto gap-4 items-center justify-center max-w-6xl mx-auto p-6">
        <img src="/assets/ProfilePic.jpg" alt="A Silly pic of Ozzie" className="w-1/3 max-w-xs mr-18 rounded-lg"/>
        <div className="w-2/3 h-128 ml-18 bg-[#3A3A3A] p-12 rounded-lg overflow-y-auto">
          <h1 className="text-4xl text-[#FA9600] font-semibold mb-4">About Me</h1>
          <p className="text-lg max-w-2xl mx-auto">
          I'm a web developer passionate about building responsive and accessible applications. My skills include both frontend and backend development utilizing popular frameworks and languages such as Tailwind, React, Java, Javascript, and C, and I'm learning more every day.</p>
          <p className="text-lg max-w-2xl mx-auto mt-4">
          I was born in Texas in 1985, but spent most of my life in Virginia. I’ve worked in the automotive parts industry and as a welder/fabricator, and moved to Washington in 2019. The following year, the COVID pandemic hit and my son was born, so I decided to switch careers so that I could spend more time with him.</p>
          <p className="text-lg max-w-2xl mx-auto mt-4">
          I’ve been a student at Olympic College since April of 2021, studying to get degrees in web and software development. As part of the curriculum, I’m learning about photo and video manipulation, and so I’ve set up this blog as a portfolio of the work I’ve done. I’m currently using WordPress templates for this blog, but I plan on building a website from scratch for my portfolio since I’m learning the skills necessary for it.</p>
        </div>
    </div>
    );
  }
  