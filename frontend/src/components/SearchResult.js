import React from 'react';

const SearchResult = ({ results, clearResults }) => {
  return (
    <div className="w-full px-6">
      <div className="w-full flex justify-between">
        <h2 className="mb-2 text-lg font-semibold text-gray-900">Search Results:</h2>
        <button className="inline-flex items-center text-base font-semibold text-blue-500" onClick={() => clearResults()}>Clear</button>
      </div>
      <dl className="text-gray-900 divide-y divide-gray-200">
        {results.length > 0 ?
          results.map((result, index) => (
            <div key={index} className="flex flex-col pb-3">
              <dt className="mb-1 text-gray-500 md:text-lg dark:text-gray-400">{result.title}</dt>
              <div className="inline">
                <dd className="inline" dangerouslySetInnerHTML={{ __html: `${result.snippet}...` }} />
                <a href={`https://en.wikipedia.org/wiki/${result.title}`} target="_blank" className="text-blue-500 ml-4">Read more</a>
              </div>
            </div>
          )) :
          <div>No result</div>
        }
      </dl>
    </div>
  );
};

export default SearchResult;
