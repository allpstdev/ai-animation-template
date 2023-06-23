/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const HomePage = () => {
  return (
    <div className='mt-16'>
      <section className="bg-100 py-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center">Welcome to My Next.js 13 Website!</h1>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ex a metus pulvinar, et rutrum neque finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque sit amet vestibulum tortor. Ut auctor velit at velit cursus iaculis. Sed malesuada sagittis tellus, in placerat nibh tincidunt at. Morbi eleifend turpis eget elit elementum feugiat. Nulla consequat, lectus vitae pulvinar tincidunt, tellus ipsum rhoncus dolor, et fringilla lorem orci sit amet nunc. Nulla facilisi. Vestibulum nec ligula in est posuere eleifend. Nunc ac nisl in mauris varius dictum. Etiam gravida mauris eu magna vestibulum luctus.
          </p>
        </div>
      </section>

      <section className="bg-200 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Us?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <li>
              <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ex a metus pulvinar.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ex a metus pulvinar.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ex a metus pulvinar.</p>
            </li>
            <li>
              <h3 className="text-xl font-semibold mb-2">Feature 4</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ex a metus pulvinar.</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="bg-300 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
          <p className="text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere ex a metus pulvinar, et rutrum neque finibus.
          </p>
          <div className="flex justify-center mt-8">
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Get in Touch</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage