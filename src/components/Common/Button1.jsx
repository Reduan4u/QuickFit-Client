
const Button1 = ({ title }) => {
  return (
    <div>
      <button className="relative inline-block text-base group">
        <span className={`relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-three rounded-lg group-hover:text-black`}>
          <span className="absolute inset-0 w-full h-full px-7 py-3 rounded-lg bg-gray-50"></span>
          <span className={`absolute left-0 w-48 h-48 -ml-2 transition-all duration-500 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-three group-hover:-rotate-180 ease`}></span>
          <span className="relative">{title}</span>
        </span>
        <span
          className={`absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-400 ease-linear bg-three rounded-lg group-hover:mb-0 group-hover:mr-0`}
          data-rounded="rounded-lg"
        ></span>
      </button>
    </div>
  );
};

export default Button1;