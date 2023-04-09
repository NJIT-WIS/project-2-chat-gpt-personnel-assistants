






    import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';
import ModalMailchimps from './ModalMailchimps';
import * as Toast from '@radix-ui/react-toast';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
export default function HeroComp({ title, subtitle, backgroundImage, ctaText, ctaLink }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastContent, setToastContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    };

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setModalOpen(false);
        setToastContent('Subscription successful!');
        setToastOpen(true);
      } else {
        setToastContent('Subscription failed. Please try again.');
        setToastOpen(true);
      }
    } catch (error) {
      setToastContent('An error occurred. Please try again.');
      setToastOpen(true);
    }
  };

  return (
    
    <section className="relative heroComp">
         <Toast.Provider>
        <Toast.Root className="ToastRoot" open={toastOpen} onOpenChange={setToastOpen}>
          <Toast.Title className="ToastTitle">Notification</Toast.Title>
          <Toast.Description asChild>
            <p className="ToastDescription">{toastContent}</p>
          </Toast.Description>
          <Toast.Action className="ToastAction" asChild altText="Close">
            <button className="Button small green" onClick={() => setToastOpen(false)}>
              Close
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
        <div className="relative w-full h-[500px]">
            <Image
              src={backgroundImage}
              fill
              objectFit="cover"
              objectPosition="center"
              alt={title}
            />
            
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start pt-6 pl-6">
            <h2 className="text-white text-xl font-bold">My Webclass</h2>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end items-start pb-10 pl-10">
            <h1 className="text-white text-4xl font-bold max-w-xl">{title}</h1>
            {subtitle && <p className="text-white text-2xl mt-4 max-w-md">{subtitle}</p>}
            {ctaText && (
              <button
                onClick={() => setModalOpen(true)}
                className="bg-green-900 border-3 border-green-800 rounded-full text-white px-6 py-2 text-lg font-bold uppercase hover:bg-green-800 hover:border-green-800 transition duration-200 whitespace-normal"
              >
              volunteer
              </button>
            )}
          </div>

      <ModalMailchimps
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />

    </section>
  );
}