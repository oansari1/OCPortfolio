export default function About() {
    return (
    <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto sm:p-6 items-center md:items-start justify-center">
        <img
            src="/assets/ProfilePic.jpg"
            alt="A Silly pic of Ozzie"
            className="w-2/3 max-w-[180px] md:w-1/3 md:max-w-xs md:mr-8 lg:mr-24 rounded-lg mb-6 md:mb-0"
        />
        <div className="flex-1 max-w-2xl md:ml-8 lg:ml-24 bg-[#3A3A3A] p-4 md:p-12 rounded-lg overflow-y-auto">
          <h1
            className="font-semibold text-[#FA9600] mb-4"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)"
            }}
          >
            About Me
          </h1>
          <p
            className="max-w-2xl text-center md:text-left text-gray-400"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)"
            }}
          >
            I'm a web developer passionate about building responsive and accessible applications. My skills include both frontend and backend development utilizing popular frameworks and languages such as Tailwind, React, Java, Javascript, and C, and I'm learning more every day.
          </p>
          <p
            className="max-w-2xl text-center md:text-left text-gray-400 mt-4"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)"
            }}
          >
            I was born in Texas in 1985, but spent most of my life in Virginia. I’ve worked in the automotive parts industry and as a welder/fabricator, and moved to Washington in 2019. The following year, the COVID pandemic hit and my son was born, so I decided to switch careers so that I could spend more time with him.
          </p>
          <p
            className="max-w-2xl text-center md:text-left text-gray-400 mt-4"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.125rem)"
            }}
          >
            I’ve been a student at Olympic College since April of 2021, studying to get degrees in web and software development. As part of the curriculum, I’m learning about photo and video manipulation, and so I’ve set up this blog as a portfolio of the work I’ve done. I’m currently using WordPress templates for this blog, but I plan on building a website from scratch for my portfolio since I’m learning the skills necessary for it.
          </p>
        </div>
    </div>
    );
  }
