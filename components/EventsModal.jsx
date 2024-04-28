"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const AdvertisementModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if the modal has already been shown during this session
    const isModalShown = localStorage.getItem("advertisementModalShown");

    // If the modal hasn't been shown during this session, display it
    if (!isModalShown) {
      setShowModal(true);
      // Set a flag in localStorage to indicate that the modal has been shown
      localStorage.setItem("advertisementModalShown", true);
    }
  }, []); // Empty array as the second argument makes the effect run only once after the initial render

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="block flex min-h-screen items-center justify-center px-4 pb-20 pt-4 text-center">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-gray-500 opacity-85"
                onClick={() => setShowModal(false)}
              ></div>
            </div>
            <span className="hidden sm:inline-block sm:h-screen sm:align-middle"></span>
            &#8203;
            <div className="z-20 inline-block overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:align-middle">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-16 shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:size-12">
                    {/* Icon */}
                    <svg
                      className="size-6 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4H18a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3
                      className="text-lg font-medium leading-6 text-gray-900"
                      id="modal-title"
                    >
                      Events Registrations Open!
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {/* Advertisement content goes here */}
                        Register yourself for the upcoming events right now!
                      </p>
                    </div>
                    <div>
                      <Image
                        src="/assets/ad-modal/ad.svg"
                        width={200}
                        height={200}
                        alt="Advertisement"
                        className="my-5 size-[400px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisementModal;
