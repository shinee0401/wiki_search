import React from 'react';

const SearchHistory = ({ histories, onSelect, onDelete }) => {
  return (
    <div className="w-full px-6">
      <h2 className="text-lg font-semibold text-gray-900">Search Histories:</h2>
      <ul className="max-w-md divide-y divide-gray-200">
        {histories.length > 0 ?
          histories.map((item) => (
            <li key={item.id} className="pt-2">
              <div className="flex items-center space-x-4 rtl:space-x-reverse group">
                <div className="flex-1 min-w-0 text-lg font-normal text-blue-500 cursor-pointer group-hover:text-blue-700 group-hover:font-semibold" onClick={() => onSelect(item.id)}>{item.query}</div>
                <button className="inline-flex items-center text-sm font-medium text-red-500 hover:text-red-700 hover:font-semibold" onClick={() => onDelete(item.id)}>Delete</button>
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
