import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import backgroundImage from './images/OIP.jpg';

const Aboutme = () => {
  return (
    <div
      className="relative min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <header className="">
        <Navbar />
      </header>
      <div className="flex-1 sm:w-full">
        <div className="px-4 py-5 sm:px-6 pt-32 text-black" style={{ fontSize: '1rem' }}>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h2>
        </div>
      </div>
      <div className="flex-1">
        <div className="border-t border-gray-200 bg-opacity-40 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-gray-900">
          <dl className="space-y-4">
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-base leading-7 text-indigo-600" style={{ fontSize: '0.8rem' }}>Name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" style={{ fontSize: '1rem' }}>
                Ikmal Maulana
              </dd>
            </div>
            <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-base leading-7 text-indigo-600" style={{ fontSize: '0.8rem' }}>
                Email address
              </dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2" style={{ fontSize: '1rem' }}>
                ikmalmaulana654@gmail.com
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <footer className='App-footer' class='h-0 block pt-32 pb-0' style={{ marginTop: '60px' }}>
        <Footer />
      </footer>
    </div>
  );
};

export default Aboutme;
