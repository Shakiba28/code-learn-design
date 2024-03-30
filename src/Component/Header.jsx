import LogIn from "./LogIn";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function Header() {

    return (
        <>
            <div className="bg-yellow-500 flex justify-between font-serif py-3 px-8">
                <Logo />
                <MenuItem />
                <LogIn />
            </div>
        </>
    )
}