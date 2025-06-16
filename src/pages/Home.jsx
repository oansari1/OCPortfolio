export default function Home() {
    return (
      <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto sm:p-6">
        <img
          src="/assets/ProfilePic.jpg"
          alt="A Silly pic of Ozzie"
          className="w-2/3 max-w-[180px] md:w-1/3 md:max-w-xs md:mr-8 lg:mr-24 rounded-lg mb-6 md:mb-0"
        />
        <div className="flex-1 max-w-2xl md:ml-8 lg:ml-24 bg-[#3A3A3A] p-4 md:p-12 rounded-lg">
          <h1
            className="font-semibold text-[#FA9600]"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)" // scales from 1.5rem up to 2.25rem (text-4xl)
            }}
          >
            Welcome to my portfolio
          </h1>
          <p
            className="max-w-2xl text-center text-gray-400 sm:mt-6"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.5rem)" // scales from 1rem up to 1.5rem (text-2xl)
            }}
          >
            Thank you for visiting my site. This is a showcase of my work as a web and software developer,
            with examples from my college work and self-learning.
            Check out my bio for my resume and contact info.
          </p>
        </div>
      </div>
    );
  }
