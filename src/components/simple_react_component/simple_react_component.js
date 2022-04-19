'use strict';

import React, { useState, useEffect } from 'react';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchExternalDataFromAPI = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // const [user] = data.results;
    // setData(user);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchExternalDataFromAPI();
  }, []);

  return { data, loading };
};


const SimpleReactComponent = function(props) {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts')

  // We don't have data yet, so we'll render a placeholder
  if (loading) {
    return (
      <div>
          <div>Loading data from API...</div>
      </div>
    );
  }

  // We hava data, lets display it
  return (
    <ul>
      { data.map((data_item) =>
        <li key={data_item.id}>
          POST #{data_item.id}: {data_item.title}
        </li>
      )}
    </ul>
  );

}

export default SimpleReactComponent
