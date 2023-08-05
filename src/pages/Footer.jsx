import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-2 p-4">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">Shopzy</h2>
            <p className="text-sm md:text-base text-gray-400">
              Explore Our Wide Selection Today!
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold">Quick Links</h2>
            <ul className="text-sm md:text-base text-gray-400">
              <li className="mb-2">
                <a href="/">Home</a>
              </li>
              <li className="mb-2">
                <a href="/">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/">Services</a>
              </li>
              <li className="mb-2">
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Contact Us</h2>
            <p className="text-sm md:text-base text-gray-400 mb-2">
              Address: 123 Main Street, City, Country
            </p>
            <p className="text-sm md:text-base text-gray-400 mb-2">Email: amansingh6574@gmail.com</p>
            <p className="text-sm md:text-base text-gray-400">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-sm md:text-base text-gray-400">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
