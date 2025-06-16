export default function Blog() {
    return (
    <div className="flex flex-col items-center justify-center w-full px-4 sm:px-2">
        <div className="w-full max-w-2xl bg-[#3A3A3A] sm:p-12 p-4 rounded-lg sm:overflow-y-auto mt-6 mb-4">
          <h1
            className="font-semibold text-[#FA9600] mb-4"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.25rem)"
            }}
          >Blog</h1>
            <p
              className="text-center sm:text-left text-gray-400"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)"
              }}
            >
              Working on my site this quarter was less of an ordeal than the previous one, and more of an iterative process. I had a site design that I liked and was already deployed on a virtual server, I just needed to get it fully functioning and give it a little more refinement.
            </p>
            <p
              className="text-center sm:text-left text-gray-400 mt-4"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)"
              }}
            >
              My first obstacle was getting the react apps to function as intended – after reading documentation and some troubleshooting with AI assistance, I got the apps to function within the overall site instead of having standalone apps, but the overall site styles were interfering with most of the apps, so I decided to apply my knowledge of Tailwind CSS to them instead of using a main .css file.
            </p>
            <p
              className="text-center sm:text-left text-gray-400 mt-4"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)"
              }}
            >
              This worked for all the apps aside from Chef Claude, which also presented its own unique challenges because it was integrated with an AI LLM. I had to learn how to use API keys to send and receive data from another service that was outside of my control; even though initially the app used Claude, this particular service annoyed me with their account policies, so I ended up using Mistral, which works well but is noticeably slower. To keep the API key private, I learned how to set up a basic NodeJS backend so that data requests sent to HuggingFace weren’t accessible to clients. There are occasional problems with styling the data that is returned, apparently the ReactMarkdown component doesn’t work 100% of the time. Adding another ingredient and regenerating the recipe usually fixes it.
              </p>
            <p
              className="text-center sm:text-left text-gray-400 mt-4"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)"
              }}
            >
              I had developed a responsive design in Adobe Xd based off a template, but ultimately I kept the design I had started with and styled it to work responsively. In the process, I discovered that Tailwind uses a mobile-first design, meaning that the coded styles apply to all screen sizes, and each breakpoint applies styles to widths GREATER than the breakpoint. This made my work a little more complicated because my initial design was for desktop screens. Lots of fine tuning later, I had it working for mobile devices.            </p>
            <p
              className="text-center sm:text-left text-gray-400 mt-4"
              style={{
                fontSize: "clamp(1rem, 2.5vw, 1.125rem)"
              }}
            >
              My last step was obtaining an SSL security certificate. I had some difficulty with this because I am using a VPS to host my site instead of a full-service host (I needed a VPS to run React apps). I eventually found a free utility called Certbot, and after some configuration difficulties, documentation reading, and AI assistance, I now have a secure website that works on multiple platforms!            </p>
        </div>
    </div>
    );
  }
