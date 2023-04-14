
import { FaceIcon, ImageIcon, SunIcon ,DiscordLogoIcon,TwitterLogoIcon,InstagramLogoIcon} from '@radix-ui/react-icons';

export default function Menu({ data }) {
  return (
    <header className="header top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="w-3/12">
        <a href="" className="text-green-500 font-bold text-lg hover:text-green-600 duration-200">
          Logo
        </a>
      </h1>

      <nav className="nav font-semibold text-lg">
        <ul className="flex items-center">
          {data.items.map((item) => (
            <li
              key={item._key}
              className={`p-4 border-b-2 border-green-500 border-opacity-0 ${
                item.active ? 'active' : ''
              } hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}
            >
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-3/12 flex justify-end">
        <DiscordLogoIcon className="mr-4" />
        <TwitterLogoIcon className="mr-4"/>
        <InstagramLogoIcon/>
      </div>
    </header>
  );
}
