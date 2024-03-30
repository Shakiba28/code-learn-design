import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";


export default function PostsItem({ post }) {
    return (
        <>
            < div className="flex flex-col w-72 rounded-md p-2 m-3 bg-slate-900 text-slate-200 h-full " >
                <div className="basis-1/4">
                    <img src={post?.img} alt={post?.title} />
                    <div className="m-3 px-3">
                        <h1 className="font-bold mb-2">{post?.title}</h1>
                        <p className="text-slate-300">
                            {post?.details}
                        </p>
                        <div className="flex justify-between my-3">
                            <FaRegBookmark />
                            <FaRegHeart />

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}