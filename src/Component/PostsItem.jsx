import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function PostsItem({ post }) {
  return (
    <>
      <div className="col-span-12  md:col-span-6 lg:col-span-4 xl:col-span-3">
        <div className="flex flex-col rounded-md p-2 m-3 bg-zinc-950 text-slate-200 h-full ">
          <div className="basis-1/4">
            <a href="">
              <img className="rounded-md" src={post?.img} alt={post?.title} />
            </a>
            <div className="m-3 px-3">
              <h1 className="font-bold mb-2">
                <a className="hover:text-yellow-300 duration-500" href="#">{post?.title}</a>
              </h1>
              <hr className="py-2" />
              <p className="text-slate-300">{post?.details}</p>
              <div className="flex justify-between my-3">
                <button>
                  <FaRegBookmark className="hover:text-yellow-300 duration-500" />
                </button>
                <button>
                <FaRegHeart className="hover:text-red-700 duration-500" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
