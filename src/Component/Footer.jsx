import Newsletters from "./GeneralComponent/Newsletters";
import MenuItem from "./MenuItem";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <>
      <div className="bg-zinc-950  font-serif py-4  bottom-0 sm:space-y-2.5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12">

            <div className="col-span-12 sm:col-span-4 ">
              <SocialMedia />
            </div>

            <div className="col-span-12 sm:col-span-4  p-5">
            <MenuItem />
                
            </div>

            <div className="col-span-12 sm:col-span-4 ">
                <Newsletters/>
            </div>
            
          </div>


          <hr className="text-yellow-200" />
          <h6 className="text-center text-white my-6 text-sm">
            Any copying of the site's content and products is unauthorized and
            without our consent.{" "}
          </h6>
        </div>
      </div>
    </>
  );
}
