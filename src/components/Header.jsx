import React from 'react';

function Header ({ title }) {
  return (
     <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6 text-center">
       {title}
     </h1>
   );
}
  


export default Header;