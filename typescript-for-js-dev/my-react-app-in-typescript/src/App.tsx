import React from 'react';
// import Counter from './Counter';
import CounterWithReducer from './CounterWithReducer';

interface AppProps {
  message?: string;
  name: string;
  description?: string;
}

const App: React.FC<AppProps> = ({message, name}) => {
  // return <div>{message} by {name}</div>;
  return <div><CounterWithReducer /></div>;
};

App.defaultProps = {
  message: 'Hello, DefaultProps.',
  description: "This is App Component",
};

export default App;
