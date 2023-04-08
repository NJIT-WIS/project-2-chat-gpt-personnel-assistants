
import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';
import React, { useState } from 'react';
import ModalMailchimps from './ModalMailchimps';
export default function HeroComp({ title, subtitle, backgroundImage, ctaText, ctaLink }) {
    const [modalOpen, setModalOpen] = useState(false);
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
          } else {
            // Handle error (e.g., show error message)
          }
        } catch (error) {
          // Handle fetch error (e.g., show error message)
        }
      };
      return (
        <section className="relative">
          <div className="relative w-full h-[500px]">
            <Image
              src={backgroundImage}
              layout="fill"
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
                {ctaText}
              </button>
            )}
          </div>
          < ModalMailchimps isOpen={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleSubmit} />
        </section>
      );
    }