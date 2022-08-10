import React from 'react';

var render = 0;

export default React.memo(
  function IsSeven({ value }) {
    console.log(`IsSeven was render: ${render++}`);

    const handleCalculation = React.useMemo(() => {
      // function + залежність
      let i = 0;
      while (i < 700000000) i++; // first task
      return value === 7 // second task
        ? 'This counter is seven :D'
        : 'This counter is not seven!';
    }, [value]);

    return <div>{handleCalculation}</div>;
  },
  (prevProps, nextProps) => {
    // console.log(prevProps, nextProps);
    if (nextProps.value === 7) {
      return false;
    } else {
      return true;
    }
  },
);

// useMemo дозволяє виконувати важкі функції тільки тоді коли це реально необхідно
// React.memo за допомогою нього ми наказуємо реакту коли пропс змінився то тільки тоді потрібно робити ререндер
