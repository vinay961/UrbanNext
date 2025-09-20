import React from 'react';

function Form({ onSubmit, children }) {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md p-6 rounded-lg shadow-md bg-white space-y-4"
      >
        {children}
      </form>
    </div>
  );
}

export default Form;
