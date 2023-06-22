import { NextComponentType, NextPageContext } from "next";
import Link from "next/link";
import Navigation from "./Navigation";

interface ComponentProps {}
const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
];

const Header: NextComponentType<NextPageContext, {}, ComponentProps> = ({}) => (
  <header className=" mx-auto md:px-32 px-6 md:py-8 py-6 flex justify-between items-center ">
    <Link className="text-2xl font-bold" href="/">
    JSCH
    </Link>
    <nav className="md:flex hidden space-x-10">
      <ul className="flex space-x-10 items-center">
        {routes.map((item) => (
          <li key={item.name}>
            <Link
              className="text-lg hover:text-blue-600 transition-colors duration-300"
              href={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg text-lg"
        href="/contact"
      >
        Contact
      </Link>
    </nav>
    <div className="md:hidden">
      <Navigation routes={routes} />
    </div>
  </header>
);

export default Header;
