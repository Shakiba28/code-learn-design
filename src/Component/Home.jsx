export default function Home() {
  return (
    <>
      <div className="bg-stone-950 text-slate-200  text-center" style={{ 
      backgroundImage: `url("/src/assets/pattern.png")` 
    }}>
        <div className="container py-32 mx-auto">
          <h1 className="text-5xl font-bold my-4">
            Learning to code got simplified.
          </h1>
          <h3 className="text-xl">
            Learn the latest technology with interactive, hands-on courses. It’s free.
          </h3>
          <button className="text-yellow-400 border border-yellow-400 py-2 my-8 rounded-md   px-3   hover:border-white hover:text-white duration-500">
            Start Learning
          </button>
        </div>
      </div>
    </>
  );
}
