import React, { useState }from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');
  // resource - current value of this piece of state - could be given any name; smth like this.state.currentValue
  // setResource - a setter function to call when we want to update our state (and rerender); like this.setState()
  // 'posts' - starting value for this piece of state

  // const [currentCount, setCount] = useState(0);

  return (
    <div>
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <UserList />
      <ResourceList resource={resource}/>
      {/* <div>
        <button onClick={() => setCount(currentCount + 1)}>Increment</button>
        {currentCount}
      </div> */}
    </div>
  )
}

export default App;
