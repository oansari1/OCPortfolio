import TravelApp from './App';

export default function TravelWrapper() {
  return (
    <section className="w-full max-w-4xl p-4 rounded-lg overflow-hidden bg-[#3A3A3A] my-4 mx-auto pb-3">
        <h2
          className="font-semibold text-[#FA9600] mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
          }}
        >Data-driven React</h2>
        <p className="text-[#8C8C8C] mb-4">A data-driven React app that fetches and displays travel destinations.</p>
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        <TravelApp />
      </div>
    </section>
  );
}