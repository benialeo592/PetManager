

const UserIcon = ({user}) => {


    return (
        <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center">
          {user ? (
            <div className="font-bold text-sm">
              {user.name}
            </div>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      );
    };
export default UserIcon;
