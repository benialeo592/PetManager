const PetCard = ({ name, type, imageUrl }) => (

    <div className="bg-white rounded-lg shadow-md p-4 m-2">
      <img src={imageUrl || "/api/placeholder/200/200"} alt={name} className="w-full h-48 object-cover rounded-md mb-2" />
      <h3 className="font-bold">{name}</h3>
      <p className="text-gray-600">{type}</p>
    </div>
  );

export default PetCard;
