export default function Newsletters() {
  return (
    <>
    <div className="flex space-x-2 justify-center items-center justify-center">
    <input
        className="rounded-sm p-3 bg-zinc-800 rounded-md"
        type="email"
        placeholder="Enter your email"
      />
      <button className="bg-zinc-900 rounded-md p-3 text-yellow-400">Submit</button>
    </div>
    </>
  );
}
