import React, { useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import * as Accordion from '@radix-ui/react-accordion'
import classNames from 'classnames'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import AccordionDemo from './accordion'
import PortableTextComponent from './PortableText'
export default function ModalPrivacy({ privacy }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const userResponse = localStorage.getItem('gdprResponse')
    if (!userResponse) {
      setIsOpen(true)
    }
  }, [])

  function onClose() {
    localStorage.setItem('gdprResponse', 'accepted')
    setIsOpen(false)
  }

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
         id="gdprModal"
        open={isOpen}
        onClose={() => {
          onClose()
        }}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
            <h2 className="text-2xl font-semibold leading-6 text-gray-900">
              We value your privacy
            </h2>
            <p className="mt-4 text-gray-600">
              In accordance with the EU General Data Protection Regulation (GDPR), we need your
              consent to store and use cookies and other tracking technologies. These technologies
              help us enhance your browsing experience, display personalized content and ads,
              analyze website traffic, and better understand our visitors. By clicking "Okay," you
              give your consent for us to use these technologies. To learn more or update your
              preferences, please read our privacy policy below.
              <AccordionDemo title={'Privacy Policy'} content={privacy} />
            </p>
         
            <div className="mt-4 flex gap-4 justify-end items-center">
              <button
                className="bg-green-900 border-3 border-green-800 rounded-full 
                text-white px-4 py-1 text-base font-bold uppercase 
               hover:bg-green-800 hover:border-green-800 transition
               duration-200 whitespace-normal md:text-lg md:px-6 md:py-2"
                onClick={onClose}
              >
                Okay
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
