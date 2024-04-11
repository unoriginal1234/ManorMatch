import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="w-full bg-mmblue text-white flex items-center justify-between px-20 py-2">
      <div className="font-serif text-4xl">
        M | M
      </div>
      <div className="flex w-1/4 justify-between">
        <div>
          About Us
        </div>
        <p>
          Press
        </p>
        <div className="flex items-center tracking-wider gap-2">
          Contact Us
          <FaLongArrowAltRight />
        </div>
      </div>
    </footer>
  )
}

export default Footer;