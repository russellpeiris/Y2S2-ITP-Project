import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-white rounded-2xl m-20 grid grid-cols-2 gap-5 p-16">
      <div className="flex flex-col gap-5 p-8">
        <Link
          to="/product-management/products"
          className="p-4 bg-accent rounded-xl w-full text-white">
          Product Management
        </Link>
        <Link to="/staff-management" className="p-4 bg-accent rounded-xl w-full text-white">
          Staff Management
        </Link>
        <Link to="/stock-management" className="p-4 bg-accent rounded-xl w-full text-white">
          Stock Management
        </Link>
        <Link to="/vehicle-management" className="p-4 bg-accent rounded-xl w-full text-white">
          Vehicle Management
        </Link>
        <Link to="/sales-management" className="p-4 bg-accent rounded-xl w-full text-white">
          Sales Management
        </Link>
        <Link to="/machine-management" className="p-4 bg-accent rounded-xl w-full text-white">
          Machine Management
        </Link>
        <Link to="/crops-management" className="p-4 bg-accent rounded-xl w-full text-white">
          Crop Management
        </Link>
        <Link to="/salary-management" className="p-4 bg-accent rounded-xl w-full text-white">
          Salary Management
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <img className="h-32 pl-8 py-auto" src="../../../logo.png" alt="logo"></img>
      </div>
    </div>
  );
};

export default Home;
