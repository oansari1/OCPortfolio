export default function Blog() {
    return (
    <div className="flex w-3/4 h-auto gap-4 items-center justify-center max-w-6xl mx-auto p-6">
        <div className="w-2/3 h-128 ml-18 bg-[#3A3A3A] p-12 rounded-lg overflow-y-auto">
          <h1 className="text-4xl text-[#FA9600] font-semibold mb-4">Blog</h1>
            <p className="text-lg max-w-2xl mx-auto">Building this portfolio has been an ordeal. The actual construction of the site went about as I expected, but getting it running on my own server was more complex than expected. Thankfully, and with the help of ChatGPT, I got it working by the deadline.</p>
            <p className="text-lg max-w-2xl mx-auto mt-4">I initially started working with my previous site, which made the most sense because it was live and working after all, but after having difficulties modifying the existing site structure and styles, I decided to almost start over and treat this like a fresh assignment.</p>
            <p className="text-lg max-w-2xl mx-auto mt-4">I began with building a new wireframe in Adobe Xd, then used that to guide my build using React and Tailwind. This gave me a visual point to keep working toward, so my styling had some purpose. I then learned about using React Router to set up pages and links to them from within a single page.</p>
            <p className="text-lg max-w-2xl mx-auto mt-4">I had to relearn how to set up a local server, how to use Git, and how to deploy a site to a server. Along the way, I learned much more about Visual Studio Code; it has a bit of a learning curve but I’m getting the hang of it.</p>
            <p className="text-lg max-w-2xl mx-auto mt-4">I’m happy with the way the site looks and functions, but I know there’s a lot more I can do with it. I plan on adding more features and styling to the site, and I plan on adding features to the site to allow dowloading or interaction with my projects in C, Java, and MySQL, as well as hosting the previous sites I built using Wordpress.</p>
        </div>
    </div>
    );
  }
  