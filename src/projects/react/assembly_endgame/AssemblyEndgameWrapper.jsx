import AssemblyEndgameApp from './App';

export default function AssemblyEndgameWrapper() {
  return (
<section className="w-full max-w-4xl p-4 rounded-lg overflow-hidden bg-[#3A3A3A] my-4 mx-auto pb-3">
        <h2
          className="font-semibold text-[#FA9600] mt-0 mb-2 sm:mb-4"
          style={{
            fontSize: "clamp(2rem, 4vw, 2.75rem)",
          }}
        >Assembly Endgame</h2>
        <p className="text-[#8C8C8C] my-4">Like Hangman, for programming languages</p>
        <AssemblyEndgameApp />
      </section>
  );
}
