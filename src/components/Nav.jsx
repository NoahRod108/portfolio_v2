import { navLinks } from "../constants"

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        {/* Nav Logo */}
        <a href="">
          <img src="" alt="Logo" />
        </a>

        {/* Nav Links */}
        <ul className="flex flex-1 justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-mono leading-normal text-lg text-dark-gray hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav