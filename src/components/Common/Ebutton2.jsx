import React from 'react';

function Ebutton2({ children, bgColor }) {
  return (
    <div>
      <button className={`px-8 py-3 mt-2 font-semibold border ${bgColor ? bgColor : 'bg-black text-primary'}  border-black text-black hover:bg-primary hover:text-black transition-all duration-300`}>
        {children}
      </button>
    </div>
  );
}

export default Ebutton2;