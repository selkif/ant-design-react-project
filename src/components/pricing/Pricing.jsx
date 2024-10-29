import React from "react";

const data = [
  {
    title: "Basic",
    content: [
      {
        price: "£29.99",
        space: "1 GB of space",
        user: "1 user",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
  {
    title: "Premium",
    content: [
      {
        price: "£59.99",
        space: "5 GB of space",
        user: "5 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
  {
    title: "Enterprise",
    content: [
      {
        price: "£99.99",
        space: "Unlimited space",
        user: "15 users",
        support: "24/7 support",
        backup: "Safe, reliable backup",
        access: "Access from anywhere",
      },
    ],
  },
];

function Pricing() {
  return (
    <div id="price" className="block bg-gray-200 py-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold">Prices</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                index === 1 ? "shadow-lg transform scale-110 z-10" : ""
              }`}
            >
              <h3 className="text-xl font-bold uppercase mb-4">{item.title}</h3>
              <p className="text-4xl font-bold mb-4">{item.content[0].price}</p>
              <p>{item.content[0].space}</p>
              <p>{item.content[0].user}</p>
              <p>{item.content[0].support}</p>
              <p>{item.content[0].backup}</p>
              <p>{item.content[0].access}</p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex items-center">
                <i className="fas fa-paper-plane mr-2"></i>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
