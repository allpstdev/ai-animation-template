/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <>

      <section className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black/40 sm:bg-black/40 sm:from-black/40 sm:to-black/40 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l" />

        <div className="relative mx-20 max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your

              <strong className="block font-extrabold text-teal-600">
                Forever Home.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
              tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a href="#" className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto">
                Get Started
              </a>

              <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/40 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              Latest Homes
            </h2>

            <p className="mx-auto max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
              officia corporis quasi doloribus iure architecto quae voluptatum beatae
              excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <a href="#" className="inline-block rounded-full bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-white mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image width={400} height={400} alt="Party" src={"https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"} className="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-teal-500">Grow your audience</h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                veniam tempora deserunt? Molestiae eius quidem quam repellat.
              </p>

              <a href="#" className="mt-8 inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
              <Image width={400} height={400} alt="Party" src={"https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"} className="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-teal-500">Grow your audience</h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                veniam tempora deserunt? Molestiae eius quidem quam repellat.
              </p>

              <a href="#" className="mt-8 inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image width={400} height={400} alt="Party" src={"https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"} className="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl text-teal-500">Grow your audience</h2>

              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
                atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
                veniam tempora deserunt? Molestiae eius quidem quam repellat.
              </p>

              <a href="#" className="mt-8 inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring focus:ring-yellow-400">
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage