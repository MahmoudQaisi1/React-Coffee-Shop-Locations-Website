import logo1 from './images/logo1.png'
import logo2 from './images/logo2.png'
import logo3 from './images/logo3.png'

const locations = [
  {
    name: "Coffee House",
    img: logo1,
    branches: [
      {
        branch: "Main Street",
        address: "123 Main Street, Downtown",
        lat:  40.817960, 
        lng: -73.953417,
        phone: "555-123-4567",
        schedule: "Mon-Fri: 7:00 AM - 8:00 PM,Sat-Sun: 8:00 AM - 7:00 PM",
      },
      {
        branch: "Elm Street",
        address: "456 Elm Street, Downtown",
        lat: 40.745137, 
        lng: -73.981746,
        phone: "555-987-6543",
        schedule: "Mon-Fri: 6:30 AM - 9:00 PM,Sat-Sun: 7:00 AM - 8:00 PM",
      },
      {
        branch: "Maple Avenue",
        address: "789 Maple Avenue, Downtown",
        lat: 40.7128,
        lng: -74.0057, // Adjusted longitude
        phone: "555-555-5555",
        schedule: "Mon-Fri: 6:00 AM - 7:30 PM,Sat-Sun: 7:30 AM - 6:30 PM",
      },
    ],
  },
  {
    name: "Internet Cafe",
    img: logo2,
    branches: [
      {
        branch: "Pine Street",
        address: "101 Pine Street, Uptown",
        lat: 40.751607, 
        lng: -74.002474,
        phone: "555-999-1234",
        schedule: "Mon-Fri: 7:00 AM - 8:00 PM,Sat-Sun: 8:00 AM - 6:00 PM",
      },
      {
        branch: "Oak Avenue",
        address: "222 Oak Avenue, Uptown",
        lat: 40.793004, 
        lng: -73.975299,
        phone: "555-777-8888",
        schedule: "Mon-Fri: 6:30 AM - 9:30 PM,Sat-Sun: 7:00 AM - 7:00 PM",
      },
      {
        branch: "Elm Street",
        address: "333 Elm Street, Uptown",
        lat: 40.729423, 
        lng: -73.958691,
        phone: "555-123-9876",
        schedule: "Mon-Fri: 6:00 AM - 8:00 PM,Sat-Sun: 8:00 AM - 6:30 PM",
      },
    ],
  },
  {
    name: "Tea Garden",
    img: logo3,
    branches: [
      {
        branch: "Willow Lane",
        address: "222 Willow Lane, Suburbia",
        lat: 40.6848,
        lng: -74.0017,
        phone: "555-888-7777",
        schedule: "Mon-Fri: 6:30 AM - 9:30 PM,Sat-Sun: 7:00 AM - 7:00 PM",
      },
    ],
  },
];

export default locations;