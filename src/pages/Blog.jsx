export default function Blog() {
    return (
    <div className="flex w-3/4 h-auto gap-4 items-center justify-center max-w-6xl mx-auto p-6">
        <div className="w-2/3 h-128 ml-18 bg-[#3A3A3A] p-12 rounded-lg overflow-y-auto">
          <h1 className="text-4xl text-[#FA9600] font-semibold mb-4">Blog</h1>
            <p className="text-lg max-w-2xl mx-auto">Working on my site this quarter was less of an ordeal than the previous one, and more of an iterative process. I had a site design that I liked and was already deployed on a virtual server, I just needed to get it fully functioning and give it a little more refinement.</p>
            <p className="text-lg max-w-2xl mx-auto mt-4">My first obstacle was getting the react apps to function as intended – after reading documentation and some troubleshooting with AI assistance, I got the apps to function within the overall site instead of having standalone apps, but the overall site styles were interfering with most of the apps, so I decided to apply my knowledge of Tailwind CSS to them instead of using a main .css file.</p>
            <p className="text-lg max-w-2xl mx-auto mt-4">This worked for all the apps aside from Chef Claude, which also presented its own unique challenges because it was integrated with an AI LLM. I had to learn how to use API keys to send and receive data from another service that was outside of my control; even though initially the app used Claude, this particular service annoyed me with their account policies, so I’m actually using Mistral, which works well but is noticeably slower. To keep the API key private, I learned how to set up a basic NodeJS backend so that data requests sent to HuggingFace weren’t accessible to clients. As of writing this, I’m still having trouble styling the incoming responses from the API – they are useable, but not as visually appealing as I would like.</p>
            <p className="text-lg max-w-2xl mx-auto mt-4">I had to relearn how to set up a local server, how to use Git, and how to deploy a site to a server. Along the way, I learned much more about Visual Studio Code; it has a bit of a learning curve but I’m getting the hang of it.</p>
            <p className="text-lg max-w-2xl mx-auto mt-4">My next steps are to get the site working with mobile devices using a responsive design I developed in Adobe Xd, and then obtaining a security certificate so the site will be accessed with a secure HTTPS prefix.</p>
        </div>
    </div>
    );
  }
  