import React from 'react';

interface AppProps {
  message?: string;
  name: string;
  description?: string;
}

const App: React.FC<AppProps> = ({message, name}) => {
  return <div>{message} by {name}</div>;
};

App.defaultProps = {
  message: 'Hello, DefaultProps.',
  description: "This is App Component",
};

export default App;
