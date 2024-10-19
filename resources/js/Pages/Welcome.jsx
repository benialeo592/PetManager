import UserIcon from '@/Components/UserIcon';
import React from 'react';

const PetCard = ({ name, type, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-4 m-2">
    <img src={imageUrl || "/api/placeholder/200/200"} alt={name} className="w-full h-48 object-cover rounded-md mb-2" />
    <h3 className="font-bold">{name}</h3>
    <p className="text-gray-600">{type}</p>
  </div>
);

const Welcome = ({ user, pets = [] }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pet App</h1>
          <div>
            <UserIcon user={user}/>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Navigation */}
        <nav className="bg-gray-100 w-64 p-4">
          <ul>
            <li className="mb-2"><a href="#" className="text-blue-600">Home</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600">My Pets</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600">Add Pet</a></li>
            <li className="mb-2"><a href="#" className="text-blue-600">Settings</a></li>
          </ul>
        </nav>

        {/* Pet list */}
        <main className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4">My Pets</h2>
          {pets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pets.map((pet, index) => (
                <PetCard key={index} {...pet} />
              ))}
            </div>
          ) : (
            <p>No pets found. Add some pets to see them here!</p>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Welcome;
