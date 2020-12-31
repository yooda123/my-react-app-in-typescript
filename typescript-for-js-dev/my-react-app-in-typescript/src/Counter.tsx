import React, { useState, useRef, useEffect } from 'react';

// type Dispatch = (value: number | ((prevState: number) => number)) => void;

const array: Array<number> = [1, 2, 3];
const readOnlyArray: ReadonlyArray<number> = [1, 2, 3];
// array[0] = 2;
// readOnlyArray[0] = 2;
// console.log(array);

const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue);
  
  const renderTimes = useRef<number>(0);
  useEffect(() => {
    // console.log('render was done.');
    renderTimes.current = renderTimes.current + 1;
  });

  const inputEl = useRef<HTMLInputElement>(null!); // non-null assertion operator!!
  const onButtonClick = () => {
    // const current = inputEl.current;
    // if (current !== null) {
    //   current.focus();
    // }

    // inputEl.current?.focus();
    inputEl.current.focus();
  };

  return (
    <>
      <p>You clicked {value} times</p>
      <button onClick={() => setValue((value) => value + 1)}>
        +1
      </button>
      <button onClick={() => setValue((value) => value - 1)}>
        -1
      </button>
      <div>This component was re-renderd {renderTimes.current} times.</div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
};

export default Counter;