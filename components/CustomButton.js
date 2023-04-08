import React from 'react';

export default function  CustomButton  ({ children, onClick }) { (
  <button
    onClick={onClick}
    className="bg-green-900 border-3 border-green-800 rounded-full text-white px-6 py-2 text-lg font-bold uppercase hover:bg-green-800 hover:border-green-800 transition duration-200"
  >
    {children}
  </button>
);
}