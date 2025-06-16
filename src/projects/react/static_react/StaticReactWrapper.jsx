import StaticReactApp from './App';

export default function StaticReactWrapper() {
  return (
    <section className="w-full max-w-4xl p-4 rounded-lg overflow-hidden bg-[#3A3A3A] my-4 mx-auto pb-3">
        <h2
          className="font-semibold text-[#FA9600] mt-0 mb-2 sm:mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
          }}
        >Static React</h2>
        <p className="text-[#8C8C8C] my-4">A basic static page rendered using React.</p>
      <StaticReactApp />
    </section>
  );
}
