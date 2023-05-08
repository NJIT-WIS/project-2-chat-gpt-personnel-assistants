import Image from 'next/image'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { clsx } from 'clsx'

import { useMediaQuery } from '../hooks/use-media-query'
import { logEvent } from '../lib/gtm'
import React, { useState } from 'react'
import ModalMailchimps from './ModalMailchimps'
import * as Toast from '@radix-ui/react-toast'
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import { Cross2Icon } from '@radix-ui/react-icons'
import { urlForImage } from '../lib/sanity'
import useGtag from '../hooks/useGtag';
export default function HeroComp({ title, subtitle, backgroundImage, ctaText, ctaLink }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const [toastContent, setToastContent] = useState('')
  const isMd = useMediaQuery('(min-width: 768px)')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setModalOpen(false)
        logGtagEvent('Subscription', {
          'event_category': 'Successful',
          'event_label': `Title: ${title}, Subtitle: ${subtitle}`
        });
        setToastContent('Subscription successful!')
        setToastOpen(true)
      } else {
        setToastContent('Subscription failed. Please try again.')
        setToastOpen(true)
      }
    } catch (error) {
      setToastContent('An error occurred. Please try again.')
      setToastOpen(true)
    }
  }

  return (
    <section>
      <ToastPrimitive.Provider   duration={150000} swipeDirection={isMd ? 'right' : 'down'}>
        <ToastPrimitive.Root
          className={clsx(
            'z-50 fixed bottom-4 inset-x-4 w-auto md:top-4 md:right-4 md:left-auto md:bottom-auto md:w-full md:max-w-sm shadow-lg rounded-lg',
            'bg-white dark:bg-gray-800',
            'radix-state-open:animate-toast-slide-in-bottom md:radix-state-open:animate-toast-slide-in-right',
            'radix-state-closed:animate-toast-hide',
            'radix-swipe-direction-right:radix-swipe-end:animate-toast-swipe-out-x',
            'radix-swipe-direction-right:translate-x-radix-toast-swipe-move-x',
            'radix-swipe-direction-down:radix-swipe-end:animate-toast-swipe-out-y',
            'radix-swipe-direction-down:translate-y-radix-toast-swipe-move-y',
            'radix-swipe-cancel:translate-x-0 radix-swipe-cancel:duration-200 radix-swipe-cancel:ease-[ease]',
            'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75',
          )}
          open={toastOpen}
          onOpenChange={setToastOpen}
          id="toastMailchimps"
        >
          <div className="flex">
            <div className="w-0 flex-1 flex items-center pl-5 py-4">
              <div className="w-full radix">
                <ToastPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Notification
                </ToastPrimitive.Title>
                <ToastPrimitive.Description className="mt-1 text-sm text-gray-700 dark:text-gray-400">
                  {toastContent}
                </ToastPrimitive.Description>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col px-3 py-2 space-y-1">
                <div className="h-0 flex-1 flex">
                  <ToastPrimitive.Close className="w-full border border-transparent rounded-lg px-3 py-2 flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-10 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    Dismiss
                  </ToastPrimitive.Close>
                </div>
              </div>
            </div>
          </div>
        </ToastPrimitive.Root>

        <ToastPrimitive.Viewport />
      </ToastPrimitive.Provider>
      <div className="relative heroComp ">
        <div className="relative w-full h-[500px]">
          <Image
            className="absolute w-full h-full object-cover object-center"
            width={2000}
            height={1000}
            alt={`Cover Image for ${title}`}
            src={urlForImage(backgroundImage).height(1000).width(2000).url()}
            sizes="100vw"
            priority={true}
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-6 space-y-2 md:space-y-4">
            <h2 className="text-white text-lg font-bold md:text-xl">My Webclass</h2>
            <h3 className="text-white text-2xl font-bold max-w-xl md:text-3xl lg:text-4xl">
              {title}
            </h3>
            {subtitle && (
              <p className="text-white text-lg mt-2 max-w-md md:text-xl lg:text-2xl">{subtitle}</p>
            )}
            {ctaText && (
              <button
                onClick={() => setModalOpen(true)}
                className="bg-green-900 border-3 border-green-800 rounded-full 
                          text-white px-4 py-1 text-base font-bold uppercase 
                         hover:bg-green-800 hover:border-green-800 transition
                         duration-200 whitespace-normal md:text-lg md:px-6 md:py-2"
                aria-label="volunteer to work on my web class"
              >
                volunteer
              </button>
            )}
          </div>
        </div>

        <ModalMailchimps
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onSubmit={handleSubmit}
        />
      </div>
    </section>
  )
}
