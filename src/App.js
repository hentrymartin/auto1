import React from 'react';

type Props = {
  name: string,
};

const App = (props: Props) => {
  return <div>{props.name}</div>;
};

export default App;
