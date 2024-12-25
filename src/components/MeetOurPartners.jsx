import React from 'react';
import logo1 from '../assets/buisness-logo/logo1.jpg'
import logo2 from '../assets/buisness-logo/logo2.jpg'
import logo3 from '../assets/buisness-logo/logo3.jpg'
import logo4 from '../assets/buisness-logo/logo4.jpg'
const partners = [
  {
    id: 1,
    name: 'Alex',
    logo: 'https://i.ibb.co.com/k0KpWK8/logo1.jpg',
    description: 'Providing top-notch analytics services to support our mission.',
  },
  {
    id: 2,
    name: 'Henry Ortion',
    logo: 'https://i.ibb.co.com/NmTGvVZ/logo2.jpg',
    description: 'Leading the way in eco-friendly solutions for our operations.',
  },
  {
    id: 3,
    name: 'Florida',
    logo: 'https://i.ibb.co.com/4mDkbfT/logo3.jpg',
    description: 'Leading the way in eco-friendly solutions for our operations.',
  },
  {
    id: 4,
    name: 'Angilina Jolley',
    logo: 'https://i.ibb.co.com/X7KtRfx/logo4.jpgg',
    description: 'Leading the way in eco-friendly solutions for our operations.',
  },
  {
    id:5,
    name: 'Maxwell Ditach',
    logo: 'https://i.ibb.co.com/rwZM7HT/logo5.jpg',
    description: 'Leading the way in eco-friendly solutions for our operations.',
  },
  {
    id: 6,
    name: 'Hazzel Wood',
    logo: 'https://i.ibb.co.com/Wy7VMd7/logo6.jpg',
    description: 'Leading the way in eco-friendly solutions for our operations.',
  },
  // Add more partners as needed
];

const MeetOurPartners = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Partners</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="mx-auto mb-4 h-16"
              />
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurPartners;
