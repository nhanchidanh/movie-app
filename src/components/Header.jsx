import React, { useState } from "react";

const Header = ({ onSearch }) => {
  const [textSearch, setTextSearch] = useState("");
  return (
    <div className="bg-black p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="font-bold text-red-700 text-[30px]">MOVIE</h1>
        <nav className="space-x-4">
          <a className="text-white" href="#">
            Home
          </a>
          <a className="text-white" href="#">
            About
          </a>
          <a className="text-white" href="#">
            Contact
          </a>
        </nav>
      </div>
      <div className="space-x-4">
        <input
          type="text"
          onChange={(e) => setTextSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch(textSearch);
            }
          }}
          placeholder="Search"
          className="p-3 outline-none"
        />
        <button
          onClick={() => onSearch(textSearch)}
          className="bg-red-600 text-white p-2 rounded-md"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
