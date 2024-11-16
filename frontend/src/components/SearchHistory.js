import React from 'react';

const SearchHistory = ({ histories, onSelect, onDelete }) => {
  return (
    <div className="w-full px-6">
      <h2 className="mb-2 text-lg font-semibold text-gray-900">Search Histories:</h2>
      <ul className="max-w-md divide-y divide-gray-200">
        {histories.length > 0 ?
          histories.map((item) => (
            <li key={item.id} className="pb-2">
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <div className="flex-1 min-w-0 text-blue-500 cursor-pointer" onClick={() => onSelect(item.id)}>{item.query}</div>
                <button className="inline-flex items-center text-base font-semibold text-red-500" onClick={() => onDelete(item.id)}>Delete</button>
              </div>
            </li>
          )) :
          <li>No history</li>
        }
      </ul>
    </div>
  );
};

export default SearchHistory;
