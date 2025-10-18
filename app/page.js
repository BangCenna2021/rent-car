"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [activeTab, setActiveTab] = useState("cars");

  const cars = [
    {
      id: 1,
      name: "Toyota Avanza",
      price: "Rp 350.000",
      period: "/ day",
      img: "🚗",
      rating: 4.8,
      reviews: 142,
      features: ["5 Seats", "AC", "Manual"],
    },
    {
      id: 2,
      name: "Honda Civic",
      price: "Rp 500.000",
      period: "/ day",
      img: "🏎️",
      rating: 4.9,
      reviews: 256,
      features: ["5 Seats", "AC", "Automatic"],
    },
    {
      id: 3,
      name: "Mitsubishi Pajero",
      price: "Rp 750.000",
      period: "/ day",
      img: "🚙",
      rating: 5.0,
      reviews: 189,
      features: ["7 Seats", "AC", "Automatic"],
    },
  ];

  const tripPackages = [
    {
      id: 1,
      name: "Bali Adventure",
      description: "Explore the tropical paradise of Bali",
      price: "Rp 4.500.000",
      duration: "3 days",
      img: "🏝️",
      rating: 4.9,
      reviews: 328,
      includes: ["Hotel", "Guide", "Meals", "Car"],
      destinations: ["Ubud", "Kuta Beach", "Temples"],
    },
    {
      id: 2,
      name: "Borobudur Heritage",
      description: "Discover the ancient wonders of Borobudur",
      price: "Rp 2.800.000",
      duration: "2 days",
      img: "🏛️",
      rating: 4.8,
      reviews: 245,
      includes: ["Hotel", "Guide", "Breakfast", "Car"],
      destinations: ["Borobudur", "Prambanan", "Yogyakarta"],
    },
    {
      id: 3,
      name: "Mount Bromo Expedition",
      description: "Adventure to one of Indonesia's most iconic volcanoes",
      price: "Rp 3.200.000",
      duration: "2 days",
      img: "🌋",
      rating: 4.9,
      reviews: 412,
      includes: ["Hotel", "Guide", "Meals", "Car"],
      destinations: ["Mount Bromo", "Ijen Crater", "Sunrise Trekking"],
    },
    {
      id: 4,
      name: "Lombok Beach Escape",
      description: "Relax on pristine beaches and clear waters",
      price: "Rp 3.800.000",
      duration: "3 days",
      img: "🏖️",
      rating: 4.7,
      reviews: 189,
      includes: ["Resort", "Water Sports", "Meals", "Car"],
      destinations: ["Gili Islands", "Pink Beach", "Senggigi"],
    },
    {
      id: 5,
      name: "Bandung City Tour",
      description: "Modern city with cool highlands and hot springs",
      price: "Rp 2.200.000",
      duration: "2 days",
      img: "🏔️",
      rating: 4.6,
      reviews: 156,
      includes: ["Hotel", "Tour Guide", "Meals", "Car"],
      destinations: ["Tea Plantations", "Hot Springs", "Shopping"],
    },
    {
      id: 6,
      name: "Komodo National Park",
      description: "Meet the legendary Komodo dragons",
      price: "Rp 5.500.000",
      duration: "4 days",
      img: "🦎",
      rating: 4.9,
      reviews: 298,
      includes: ["Resort", "Guide", "Meals", "Car & Boat"],
      destinations: ["Komodo Island", "Rinca", "Pink Beach"],
    },
  ];

  const handleRentNow = (car) => {
    setSelectedCar(car);
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Navbar */}
      <nav className='fixed w-full top-0 z-50 bg-white shadow-lg'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-20'>
            <div className='flex items-center gap-3'>
              <span className='text-3xl'>🚗</span>
              <span
                className='text-2xl font-black'
                style={{ color: "#4773ff" }}
              >
                RentCarPro
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex gap-8 items-center'>
              <li>
                <a
                  href='#home'
                  className='font-semibold hover:text-blue-600 transition'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#cars'
                  className='font-semibold hover:text-blue-600 transition'
                >
                  Cars
                </a>
              </li>
              <li>
                <a
                  href='#contact'
                  className='font-semibold hover:text-blue-600 transition'
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  className='flex items-center gap-2 px-6 py-2 rounded-lg font-bold transition hover:scale-105'
                  style={{ backgroundColor: "#ebf02a", color: "#1a1a1a" }}
                >
                  🔐 Login
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden p-2 text-2xl'
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className='md:hidden pb-4 space-y-3'>
              <a href='#home' className='block font-semibold py-2'>
                Home
              </a>
              <a href='#cars' className='block font-semibold py-2'>
                Cars
              </a>
              <a href='#contact' className='block font-semibold py-2'>
                Contact
              </a>
              <button
                className='w-full flex items-center justify-center gap-2 px-6 py-2 rounded-lg font-bold'
                style={{ backgroundColor: "#ebf02a", color: "#1a1a1a" }}
              >
                🔐 Login
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id='home'
        className='pt-20 min-h-screen flex items-center justify-center relative overflow-hidden'
      >
        <div
          className='absolute inset-0 -z-10'
          style={{ backgroundColor: "#f8f9ff" }}
        />
        <div
          className='absolute top-10 right-10 w-96 h-96 rounded-full opacity-20 -z-10'
          style={{ backgroundColor: "#4773ff" }}
        />
        <div
          className='absolute bottom-10 left-10 w-96 h-96 rounded-full opacity-20 -z-10'
          style={{ backgroundColor: "#ebf02a" }}
        />

        <div className='max-w-5xl mx-auto px-4 text-center z-10'>
          <h2 className='text-6xl md:text-7xl font-black mb-6'>
            Find Your
            <br />
            <span style={{ color: "#4773ff" }}>Perfect Ride</span>
          </h2>
          <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto'>
            Experience luxury, comfort, and style. Drive the car of your dreams
            at unbeatable prices.
          </p>
          <a
            href='#cars'
            className='inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition hover:scale-105 text-white'
            style={{ backgroundColor: "#4773ff" }}
          >
            Explore Cars →
          </a>
        </div>
      </section>

      {/* Cars & Trips Section */}
      <section id='cars' className='py-24 px-4'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-black mb-4'>
              Our <span style={{ color: "#4773ff" }}>Amazing Fleet</span>
            </h2>
            <p className='text-gray-600 text-lg'>
              Choose from our premium collection of vehicles
            </p>
          </div>

          {/* Tab Buttons */}
          <div className='flex justify-center gap-4 mb-12 flex-wrap'>
            <button
              onClick={() => setActiveTab("cars")}
              className='px-8 py-3 rounded-xl font-bold transition'
              style={{
                backgroundColor: activeTab === "cars" ? "#4773ff" : "#f0f4ff",
                color: activeTab === "cars" ? "white" : "#4773ff",
              }}
            >
              🚗 Daily Rental
            </button>
            <button
              onClick={() => setActiveTab("trips")}
              className='px-8 py-3 rounded-xl font-bold transition'
              style={{
                backgroundColor: activeTab === "trips" ? "#4773ff" : "#f0f4ff",
                color: activeTab === "trips" ? "white" : "#4773ff",
              }}
            >
              📍 Trip Packages
            </button>
          </div>

          {/* Daily Rental Cars */}
          {activeTab === "cars" && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {cars.map((car) => (
                <div
                  key={car.id}
                  className='group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100'
                >
                  {/* Car Image */}
                  <div
                    className='h-64 flex items-center justify-center text-9xl relative overflow-hidden'
                    style={{ backgroundColor: "#f0f4ff" }}
                  >
                    <span className='group-hover:scale-125 transition-transform duration-300'>
                      {car.img}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className='p-6'>
                    <h3 className='text-2xl font-bold mb-2'>{car.name}</h3>

                    {/* Rating */}
                    <div className='flex items-center gap-2 mb-4'>
                      <span className='text-lg'>
                        {"⭐".repeat(Math.floor(car.rating))}
                      </span>
                      <span className='text-sm text-gray-600'>
                        {car.rating} ({car.reviews})
                      </span>
                    </div>

                    {/* Features */}
                    <div className='flex flex-wrap gap-2 mb-6'>
                      {car.features.map((feature, i) => (
                        <span
                          key={i}
                          className='text-xs font-semibold px-3 py-1 rounded-full'
                          style={{
                            backgroundColor: "#f0f4ff",
                            color: "#4773ff",
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className='mb-6'>
                      <span
                        className='text-3xl font-black'
                        style={{ color: "#4773ff" }}
                      >
                        {car.price}
                      </span>
                      <span className='text-gray-600'> {car.period}</span>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => handleRentNow(car)}
                      className='w-full py-3 rounded-xl font-bold text-lg transition hover:scale-105'
                      style={{ backgroundColor: "#ebf02a", color: "#1a1a1a" }}
                    >
                      Rent Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Trip Packages */}
          {activeTab === "trips" && (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {tripPackages.map((trip) => (
                <div
                  key={trip.id}
                  className='group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border border-gray-100'
                >
                  {/* Trip Image */}
                  <div
                    className='h-64 flex items-center justify-center text-9xl relative overflow-hidden'
                    style={{ backgroundColor: "#f0f4ff" }}
                  >
                    <span className='group-hover:scale-125 transition-transform duration-300'>
                      {trip.img}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className='p-6'>
                    <h3 className='text-2xl font-bold mb-2'>{trip.name}</h3>
                    <p className='text-gray-600 text-sm mb-3'>
                      {trip.description}
                    </p>

                    {/* Rating */}
                    <div className='flex items-center gap-2 mb-4'>
                      <span className='text-lg'>
                        {"⭐".repeat(Math.floor(trip.rating))}
                      </span>
                      <span className='text-sm text-gray-600'>
                        {trip.rating} ({trip.reviews})
                      </span>
                    </div>

                    {/* Duration & Destinations */}
                    <div className='mb-4'>
                      <p className='text-sm font-semibold text-gray-700 mb-2'>
                        ⏱️ {trip.duration}
                      </p>
                      <p className='text-xs text-gray-600 mb-3'>
                        📍 {trip.destinations.join(", ")}
                      </p>
                    </div>

                    {/* Includes */}
                    <div className='flex flex-wrap gap-2 mb-6'>
                      {trip.includes.map((item, i) => (
                        <span
                          key={i}
                          className='text-xs font-semibold px-3 py-1 rounded-full'
                          style={{
                            backgroundColor: "#f0f4ff",
                            color: "#4773ff",
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Price */}
                    <div className='mb-6'>
                      <span
                        className='text-3xl font-black'
                        style={{ color: "#4773ff" }}
                      >
                        {trip.price}
                      </span>
                      <span className='text-gray-600 text-sm'>
                        {" "}
                        per package
                      </span>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => handleRentNow(trip)}
                      className='w-full py-3 rounded-xl font-bold text-lg transition hover:scale-105'
                      style={{ backgroundColor: "#ebf02a", color: "#1a1a1a" }}
                    >
                      Book Package
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-24 px-4'
        style={{ backgroundColor: "#f8f9ff" }}
      >
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-black mb-4'>
              Get In <span style={{ color: "#4773ff" }}>Touch</span>
            </h2>
            <p className='text-gray-600 text-lg'>
              Available 24/7 to assist you
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              { icon: "📞", label: "Phone", value: "+62 812 3456 7890" },
              { icon: "✉️", label: "Email", value: "info@rentcarpro.com" },
              { icon: "📍", label: "Location", value: "Jakarta, Indonesia" },
            ].map((contact, i) => (
              <div
                key={i}
                className='text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition'
              >
                <div className='flex justify-center mb-4'>
                  <div
                    className='p-4 rounded-full text-3xl'
                    style={{ backgroundColor: "#f0f4ff" }}
                  >
                    {contact.icon}
                  </div>
                </div>
                <h3 className='font-bold text-lg mb-2'>{contact.label}</h3>
                <p className='text-gray-600'>{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-8 px-4' style={{ backgroundColor: "#4773ff" }}>
        <div className='max-w-7xl mx-auto text-center text-white'>
          <p className='font-semibold'>
            © {new Date().getFullYear()} RentCarPro — All rights reserved.
          </p>
        </div>
      </footer>

      {/* Rental Modal */}
      {selectedCar && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <div className='bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl'>
            <h3 className='text-2xl font-black mb-4'>Confirm Booking</h3>
            <p className='text-gray-600 mb-2'>You're about to book:</p>
            <p className='text-3xl font-black' style={{ color: "#4773ff" }}>
              {selectedCar.name}
            </p>
            <p className='text-gray-600 mt-4 mb-6'>
              at <span className='font-bold'>{selectedCar.price}</span>{" "}
              {selectedCar.period}
            </p>
            <div className='flex gap-4'>
              <button
                onClick={() => setSelectedCar(null)}
                className='flex-1 py-3 rounded-xl font-bold border-2 border-gray-300 hover:bg-gray-50'
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setSelectedCar(null);
                  alert(`🎉 ${selectedCar.name} booked successfully!`);
                }}
                className='flex-1 py-3 rounded-xl font-bold text-white'
                style={{ backgroundColor: "#4773ff" }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
