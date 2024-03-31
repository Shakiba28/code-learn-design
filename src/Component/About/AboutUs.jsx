import AboutReactGi from "./AboutReactGif";

export default function AboutUs() {
  return (
    <>
      <div className="bg-zinc-800 p-5">
        <div className="container mx-auto border rounded-md bg-zinc-900 border-none shadow">
          <div className="grid grid-cols-12">
            <div className="col-span-12 sm:col-span-8  p-3">
              <div className="flex h-full items-center ">
                <div className="">
                  <h1 className="text-zinc-50 text-3xl font-bold mb-3">
                    About Us
                  </h1>
                  <hr />
                  <p className="text-lg text-zinc-300 text-justify">
                    consectetur adipisicing elit. Exercitationem consectetur
                    soluta rerum? Atque nostrum, delectus, quo a placeat
                    veritatis eligendi veniam, libero sed tempora deleniti eos
                    consectetur dolores architecto doloremque! Lorem ipsum dolor
                    sit, amet consectetur adipisicing elit. Cum voluptate nemo
                    facere earum fugiat. Temporibus voluptas itaque soluta
                    laudantium nemo similique omnis sint delectus! Ex dicta quas
                    vel quam hic.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4 p-3 rounded">
                <div className="flex items-center justify-center">
              <AboutReactGi />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
