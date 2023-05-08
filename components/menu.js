import React from 'react'
import {
  DiscordLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon,
  HamburgerMenuIcon,
} from '@radix-ui/react-icons'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from './logo'

export default function Menu({ data }) {
  const router = useRouter()
  const currentPath = router.pathname

  return (
    <header className="header top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="w-3/12">
        <Logo picture={data.logo} />
      </h1>

      <div className="text-2xl md:hidden">
        <DropdownMenuPrimitive.Root>
          <DropdownMenuPrimitive.Trigger asChild>
            <button onClick={() => {}} aria-label="Toggle menu">
              <HamburgerMenuIcon />
            </button>
          </DropdownMenuPrimitive.Trigger>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className="w-48 rounded-lg px-1.5 py-1 shadow-md bg-white dark:bg-gray-800 z-50"
          >
            {data.items.map((item) => {
              const isActive = item.link === currentPath
              return (
                <DropdownMenuPrimitive.Item
                  key={item._key}
                
                  className={`flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none ${
                    isActive ? 'active text-green-500 bg-gray-50' : 'text-gray-400'
                  } hover:bg-gray-50 hover:text-green-500 duration-200`}
                >
                  <Link key={item._key} href={item.link}>
                    {item.title}
                  </Link>
                </DropdownMenuPrimitive.Item>
              )
            })}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Root>
      </div>

      <nav className="hidden md:block font-semibold text-md">
        <ul className="flex flex-col md:flex-row items-center">
          {data.items.map((item) => {
            const isActive = item.link === currentPath
            return (
              <li
                key={item._key}
                className={`p-4 border-b-2 border-green-500 border-opacity-0 ${
                  isActive ? 'active border-opacity-100 text-green-500' : ''
                } hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer`}
              >
                <Link key={item._key} href={item.link}>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <div className="w-3/12 flex justify-end hidden sm:flex">
        <DiscordLogoIcon className="mr-4" />
        <TwitterLogoIcon className="mr-4" />
        <InstagramLogoIcon />
      </div>
    </header>
  )
}
