import React from 'react';

const render = {
  counter1: 0,
  counter2: 0,
};

export default React.memo(function Counter({ id, value }) {
  console.log(`Count ${id} showes: ${++render[`counter${id}`]}`);
  return (
    <>
      <h1>{value}</h1>
    </>
  );
});
