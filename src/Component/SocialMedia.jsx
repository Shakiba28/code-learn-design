import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function SocialMedia() {

    return (
        <>
            <div className="flex  mx-4 my-4 text-xl text-white space-x-3 ">
                <a className="hover:text-yellow-400 duration-500" href="https://instagram.com">
                    <FaInstagram />
                </a>
                <a className="hover:text-yellow-400 duration-500" href="https://instagram.com">
                    <FaTelegram />
                </a>
                <a className="hover:text-yellow-400 duration-500" href="https://instagram.com">
                    <FaLinkedin />
                </a>
                <a className="hover:text-yellow-400 duration-500" href="https://instagram.com">
                    <FaGithub />
                </a>
            </div>
        </>
    )
}