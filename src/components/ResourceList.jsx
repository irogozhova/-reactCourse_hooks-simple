import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  useEffect(
    () => { // runs every time when component renders to the screen or updates, i.e. after render
      (async resource => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);

        setResources(response.data);
      })(resource)
    }, 
    [resource] // if empty array is passed here, it's like componentDidMount (function is invoked only when component is first rendered)
    // and if nothing is passed - it will run the 'effect' function on every render
  )

  return <ul>{resources.map(record => <li key={record.id}>{record.title}</li>)}</ul>
}

export default ResourceList;