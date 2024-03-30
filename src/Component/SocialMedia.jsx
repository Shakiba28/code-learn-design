import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function SocialMedia() {

    return (
        <>
            <div className="flex justify-between mx-4 my-4">
                <a className="text-xl px-1 m-1 flex" href="https://instagram.com">
                    <FaInstagram />
                </a>
                <a className="text-xl px-1 m-1 flex" href="https://instagram.com">
                    <FaTelegram />
                </a>
                <a className="text-xl px-1 m-1 flex" href="https://instagram.com">
                    <FaLinkedin />
                </a>
                <a className="text-xl px-1 m-1 flex" href="https://instagram.com">
                    <FaGithub />
                </a>
            </div>
        </>
    )
}