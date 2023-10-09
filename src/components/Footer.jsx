import React from 'react';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';

function Footer() {
  return (
    <div className=" ">
      <div className="max-w-4xl bg-cus px-4  mx-auto text-white py-10 items-center  rounded-md bottom-4 shadow-lg">
        <div className="text-center">
          <h3 className="text-3xl mb-3">Download our Linkly app</h3>
          
          <div className="flex justify-center my-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
              <FaGooglePlay className="w-7 md:w-8" />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-1 w-44 mx-2">
              <FaAppStore className="w-7 md:w-8" />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; Thomson.dev, 2023.</p>
          <div className="order-1 md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
