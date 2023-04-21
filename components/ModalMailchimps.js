import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
export default function ModalMailchimps({ isOpen, onClose, onSubmit }) {
  if (!isOpen) return null;
  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Subscribe
            </Dialog.Title>
            <form onSubmit={onSubmit} className="mt-4">
              {/* First Name */}
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-sm mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {/* Last Name */}
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-green-900 border-3 border-green-800 rounded-full 
                text-white px-4 py-1 text-base font-bold uppercase 
               hover:bg-green-800 hover:border-green-800 transition
               duration-200 whitespace-normal md:text-lg md:px-6 md:py-2"
              >
                Subscribe
              </button>
            </form>
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              &times;
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
