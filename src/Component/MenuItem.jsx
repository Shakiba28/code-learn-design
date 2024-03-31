
export default function MenuItem() {

    return (

        <>
            <div className=" text-zinc-200 space-x-2 ">
                <ul className="h-full flex justify-between items-center space-x-8 justify-items-center">
                    <li className="text-yellow-300"><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>
        </>
    )
}