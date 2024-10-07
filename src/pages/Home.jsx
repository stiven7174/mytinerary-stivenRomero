import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';

function Home() {
  return (
    <div>
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://r4.wallpaperflare.com/wallpaper/658/395/660/carretera-lago-paisaje-wallpaper-52710270bd162e2b1a78c25520982982.jpg)' }}>
        <div className="flex flex-col justify-center items-center h-full bg-black bg-opacity-50">
          <h1 className="text-5xl text-white font-bold mb-4">MyTinerary</h1>
          <p className="text-2xl text-white mb-8 text-center max-w-xl">
            Find your perfect trip, designed by insiders who know and love their cities!
          </p>
          <Link to="/cities" className="bg-blue-500 text-white px-6 py-3 rounded-full text-xl hover:bg-blue-600">
            Explore Cities
          </Link>
        </div>
      </section>
      <div className=' flex justify-center items-center'>
      <Carousel />
      </div>
    </div>
  );
}

export default Home;