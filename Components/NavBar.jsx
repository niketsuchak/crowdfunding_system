import React, { useState, useContext } from "react";
import Link from "next/link";

//INTERNAL IMPORT
import { CrowdFundingContext } from "../Context/CroudFunding";
import { Logo, Menu } from "../Components/index";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuList = [
    { name: "Create Campaign", path: "/create-campaign" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "About Team", path: "/team" }
  ];

  return (
    <div class="backgroundMain">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div class="flex items-center">
            <Link
              href="/"
              class="inline-flex items-center mr-8"
            >
              <Logo color="text-white" />
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                BlockFund
              </span>
            </Link>
            <ul class="flex items-center hidden space-x-8 lg:flex">
              {menuList.map((item, i) => (
                <li key={i + 1}>
                  <Link
                    href={item.path}
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-purple-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {!currentAccount && (
            <ul class="flex items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  onClick={() => connectWallet()}
                  class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          )}

          <div class="lg:hidden z-40">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu />
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        href="/"
                        class="inline-flex items-center"
                      >
                        <Logo color="text-black" />
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          BlockFund
                        </span>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      {menuList.map((item, i) => (
                        <li key={i + 1}>
                          <Link
                            href={item.path}
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-600"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      {!currentAccount && (
                        <li>
                          <button
                            onClick={() => connectWallet()}
                            class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                          >
                            Connect Wallet
                          </button>
                        </li>
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
