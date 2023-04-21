import {
  FaceIcon,
  ImageIcon,
  SunIcon,
  DiscordLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  HamburgerMenuIcon 
} from "@radix-ui/react-icons";
import Link from "next/link";

import Logo from "./logo";
export default function Menu({ data }) {
  console.log(data);
  return (
    <header className="header top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="w-3/12">
       <Logo picture={data.logo}/>
      </h1>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          {data.items.map((item) => (
            <li
              key={item._key}
              className={`p-4 border-b-2 border-green-500 border-opacity-0 ${
                item.active ? "active" : ""
              } hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}
            >
              <Link  key={item._key} href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-3/12 flex justify-end hidden sm:flex">
        <DiscordLogoIcon className="mr-4" />
        <TwitterLogoIcon className="mr-4" />
        <InstagramLogoIcon />
     
      </div>
    </header>
  );
}
