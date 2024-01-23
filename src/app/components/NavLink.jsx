import Link from "next/link";
const NavLink = ({ href, title }) => {
  {
    /* md means medium */
  }
  {
    /*  Lastly, using the property <span class="block">display: block</span>
  will put the element on its own line and fill its parent. */
  }
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
