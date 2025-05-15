import React from "react";
import { InstagramIcon, TwitterIcon, FacebookIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="py-12 bg-gray-950/50 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              NOZE<span className="text-gray-600">EXPORTS</span>
            </h3>
            <p className="text-gray-400">
              Luxury fragrances for the discerning individual
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">FOLLOW US</h4>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Twitter"
              >
                <TwitterIcon size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <FacebookIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© 2025 NozeExports. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
