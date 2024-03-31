import LogIn from "./LogIn";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <>
      <div className="bg-zinc-900  py-3">
        <div className="container flex justify-between mx-auto ">
          <Logo />
          <MenuItem />
          <LogIn />
        </div>
      </div>
    </>
  );
}
