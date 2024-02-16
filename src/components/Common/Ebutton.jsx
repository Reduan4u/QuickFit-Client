function Ebutton({ children }) {
  return (
    <div>
      <button className="px-8 py-3 mt-2 font-medium text-primary bg-black hover: transition-all duration-300 relative hover:scale-105">
        {children}
        <p className="absolute w-full h-full left-0 opacity-0 -bottom-2 text-black bg-primary hover:opacity-100 hover:bottom-0 transition-all duration-300 flex justify-center items-center">
          {children}
        </p>
      </button>
    </div>
  );
}

export default Ebutton;
