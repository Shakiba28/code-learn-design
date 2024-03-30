import MenuItem from "./MenuItem";
import SocialMedia from "./SocialMedia";

export default function Footer() {

    return (
        <>
            <div className="bg-yellow-500  font-serif px-8 py-4  bottom-0 w-full">
                <div className="flex justify-between my-4 ">

                    <SocialMedia />
                    <MenuItem />

                    <div className="my-4 mx-4 ">
                        <input className="rounded-sm h-8 w-72 p-3 border-none bg-slate-900" type="text" placeholder="Enter your email" />
                    </div>
                </div>
                <hr className="border-slate-900" />
                <h6 className="text-center text-slate-900 my-2 text-sm">Any copying of the site's content and products is unauthorized and without our consent. </h6>
            </div >
        </>
    )
}