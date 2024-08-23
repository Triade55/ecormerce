import { cn } from "@/lib/utils";
import { Eye, Heart } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Image from "next/image";

export default function CardProduct() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center ">
        <div className="container p-0">
          <div className="w-full bg-gray-900 shadow-lg rounded-xl p-6">
            <div className="flex flex-col ">
              <div className="">
                <div className="relative h-62 w-full mb-3">
                  <div className="absolute flex flex-col top-0 right-0 p-3">
                    <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                      <Heart />
                    </button>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
                    alt="Just a flower"
                    className=" w-full object-fill rounded-2xl"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-auto justify-evenly">
                  <div className="flex flex-wrap ">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-red-500 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-gray-400 whitespace-nowrap mr-3">
                        4.60
                      </span>
                      <span className="mr-2 text-gray-400">India</span>
                    </div>
                    <div className="flex items-center w-full justify-between min-w-0 ">
                      <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic
                      </h2>
                      <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                        INSTOCK
                      </div>
                    </div>
                  </div>
                  <div className="text-xl text-white font-semibold mt-1">
                    10.000.000 FCFA
                  </div>
                  <div className="lg:flex py-4 text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center mb-3">
                      {/* <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <ul className="flex flex-row justify-center items-center space-x-2">
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                              <a
                                href="#blue"
                                className="block w-3 h-3 bg-blue-600 rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                              <a
                                href="#yellow"
                                className="block w-3 h-3 bg-yellow-400 rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                              <a
                                href="#red"
                                className="block w-3 h-3 bg-red-500 rounded-full"
                              ></a>
                            </span>
                          </li>
                          <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                              <a
                                href="#green"
                                className="block w-3 h-3 bg-green-500 rounded-full"
                              ></a>
                            </span>
                          </li>
                        </ul>
                      </div> */}
                    </div>
                  </div>
                  <div className="flex space-x-2 text-sm font-medium justify-start">
                    
                    <Button variant="default" size="lg" className="rounded-full">
                      <span>Add Cart</span>
                    </Button>
                    <Link
                      href="/product/12"
                      className={cn(
                        buttonVariants({ variant: "secondary", size: "icon" }),
                        "rounded-full"
                      )}
                    >
                      <Eye />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
