const MenuItem = ({ href, label }) => (
    <li className="mb-4">
      <a
        href={href}
        className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-blue-100 text-blue-800 font-bold hover:bg-blue-200 transition-colors duration-200"
      >
        {label}
      </a>
    </li>
  );

  export default MenuItem;
