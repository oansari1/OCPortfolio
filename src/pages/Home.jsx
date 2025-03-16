export default function Home() {
    return (
      <div className="flex items-center justify-center max-w-6xl mx-auto p-6">
        <img src="/ProfilePic.jpg" alt="A Silly pic of Ozzie" className="w-1/3 max-w-xs mr-18 rounded-lg"/>
        <div className="w-2/3 ml-18 bg-[#3A3A3A] p-12 rounded-lg">
            <h1 className="text-4xl font-semibold text-[#FA9600]">Welcome to my portfolio</h1>
            <p className="text-2xl max-w-2xl text-center text-gray-400 mt-6">
              Thank you for visiting my site. This is a showcase of my work as a web and software developer,
              with examples from my college work and self-learning.
              Check out my bio for my resume and contact info.
            </p>
        </div>
      </div>
    );
  }
  