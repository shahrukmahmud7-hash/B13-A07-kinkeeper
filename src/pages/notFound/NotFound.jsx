import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col 
    items-center justify-center bg-base-200 text-center px-4">
      
      <FaExclamationTriangle className=
      "text-error text-6xl mb-4" />
      <h1 className="text-6xl font-bold text-primary"
      >404</h1>
     <h2 className="text-2xl font-semibold mt-2">
        Page Not Found
      </h2>
      
      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for doesn’t exist.
      </p>

      <div className="mt-6 flex gap-3">
        <button
          onClick={() => window.history.back()}
          className="btn btn-outline"
        >
          ⬅️ Go Back
        </button>
        <Link to="/" className="btn btn-primary">
          🏠 Home
        </Link>
      </div>

    </div>
  );
}  