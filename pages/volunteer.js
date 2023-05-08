// about.js
import { indexQuery, heroQuery } from '../lib/queries'
import { getClient, overlayDrafts } from '../lib/sanity.server'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy, useState } from 'react'
import { pageBySlugQuery, contentBySlugQuery } from '../lib/queries'
import Layout from '../components/layout'
import Page from '../components/page'

import Image from 'next/image'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { clsx } from 'clsx'

import { useMediaQuery } from '../hooks/use-media-query'
import { logEvent } from '../lib/gtm'

import ModalMailchimps from '../components/ModalMailchimps'
import * as Toast from '@radix-ui/react-toast'

import { urlForImage } from '../lib/sanity'
import useGtag from '../hooks/useGtag'
const LandingPreview = lazy(() => import('../components/landing-preview'))

export default function VolunteerPage({ Hero, allPosts, pageData, preview, privacy }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [toastOpen, setToastOpen] = useState(false)
  const [toastContent, setToastContent] = useState('')
  const isMd = useMediaQuery('(min-width: 768px)')
  const logGtagEvent = useGtag()
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
          event_category: 'Successful',
          event_label: `Title:volunteer page`,
        })
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
  const metaData = pageData.seo
  const footer = pageData.footer
  const menu = pageData.menu
  if (preview) {
    return (
      <PreviewSuspense fallback="Loading...">
        <LandingPreview allPosts={allPosts} />
      </PreviewSuspense>
    )
  }
  // TODO need to define about component, about component doesn't exist yet
  return (
    <Layout menuData={menu} metaData={metaData} footerData={footer} privacy={privacy}>
      <ToastPrimitive.Provider duration={150000} swipeDirection={isMd ? 'right' : 'down'}>
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
                <ToastPrimitive.Description
                  id="toastDescription"
                  className="mt-1 text-sm text-gray-700 dark:text-gray-400"
                >
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
      <Page pageData={pageData} Hero={Hero} />

      <div className="flex justify-center items-center py-8">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-green-900 border-3 border-green-800 rounded-full 
                      text-white px-4 py-1 text-base font-bold uppercase 
                     hover:bg-green-800 hover:border-green-800 transition
                     duration-200 whitespace-normal md:text-lg md:px-6 md:py-2"
          aria-label="volunteer to work on my web class"
        >
         Sign Up to Volunteer!!
        </button>
      </div>

      <ModalMailchimps
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(await getClient(preview).fetch(indexQuery))
  const Hero = overlayDrafts(await getClient(preview).fetch(heroQuery))
  const slug = 'volunteer'
  const pageData = await getClient(preview).fetch(pageBySlugQuery, { slug })
  const privacy = await getClient(preview).fetch(contentBySlugQuery, {
    slug: 'privacy-content',
  })
  return {
    props: { allPosts, Hero, pageData, privacy, preview },
    // If webhooks isn't setup then attempt to re-generate in 1-minute intervals
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? undefined : 60,
  }
}
