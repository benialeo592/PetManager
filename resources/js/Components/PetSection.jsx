import PetCard from '@/Components/PetCard';

const PetSection = (pets) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">My Pets</h2>
                {/* Add pet button */}
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Add Pet
                </button>
            </div>
            {pets.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pets.map((pet, index) => (
                        <PetCard key={index} {...pet} />
                    ))}
                </div>
            ) : (
                <p>No pets found. Add some pets to see them here!</p>
            )}
        </div>
    );
};

export default PetSection;
