import Image from "next/image";
import Link from "next/link";
import { logEvent } from "../lib/gtm";
import React, { useState } from "react";
import ModalMailchimps from "./ModalMailchimps";
import * as Toast from "@radix-ui/react-toast";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
import { Cross2Icon } from '@radix-ui/react-icons';
export default function HeroComp({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaLink,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastContent, setToastContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    };

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setModalOpen(false);
        logEvent(
          "Subscription",
          "Successful",
          `Title: ${title}, Subtitle: ${subtitle}`
        );
        setToastContent("Subscription successful!");
        setToastOpen(true);
      } else {
        setToastContent("Subscription failed. Please try again.");
        setToastOpen(true);
      }
    } catch (error) {
      setToastContent("An error occurred. Please try again.");
      setToastOpen(true);
    }
  };

  return (
    <section>
      <Toast.Provider >
        <Toast.Root
          className="ToastRoot"
          open={toastOpen}
          onOpenChange={setToastOpen}
        >
          <Toast.Title className="ToastTitle">Notification</Toast.Title>
          <Toast.Description asChild>
            <p className="ToastDescription">{toastContent}</p>
          </Toast.Description>
          <Toast.Action className="ToastAction" asChild altText="Close">
            <button
              className="IconButton" aria-label="Close"
              onClick={() => setToastOpen(false)}
            >
                 <Cross2Icon />
            </button>
          </Toast.Action>
        </Toast.Root>
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
      <div className="relative heroComp ">
        <div className="relative w-full h-[500px]">
          <img
            src={backgroundImage}
            className="absolute w-full h-full object-cover object-center"
            alt={title}
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-6 space-y-2 md:space-y-4">
            <h2 className="text-white text-lg font-bold md:text-xl">
              My Webclass
            </h2>
            <h3 className="text-white text-2xl font-bold max-w-xl md:text-3xl lg:text-4xl">
              {title}
            </h3>
            {subtitle && (
              <p className="text-white text-lg mt-2 max-w-md md:text-xl lg:text-2xl">
                {subtitle}
              </p>
            )}
            {ctaText && (
              <button
                onClick={() => setModalOpen(true)}
                className="bg-green-900 border-3 border-green-800 rounded-full 
                          text-white px-4 py-1 text-base font-bold uppercase 
                         hover:bg-green-800 hover:border-green-800 transition
                         duration-200 whitespace-normal md:text-lg md:px-6 md:py-2"
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
  );
}
