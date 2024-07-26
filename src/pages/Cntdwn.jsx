import React, { useEffect, useRef, useState } from 'react';

const Cntdwn = () => {
  const [time, setTime] = useState(0);
  const id = useRef();

  useEffect(() => {
    return () => clearInterval(id.current);
  }, []);

  useEffect(() => {
    console.log(time);
  }, [time]);

  const handleTime = () => {
    if (!id.current) {
      id.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    clearInterval(id.current);
    id.current = null;
  };

  const handleReset = () => {
    clearInterval(id.current);
    id.current = null;
    setTime(0);
  };

  return (
    <div className="flex flex-col items-center mt-36 min-h-screen text-white">
      <h1 className="text-8xl mb-16">{time}</h1>
      <div className="flex space-x-4">
        <button
          onClick={handleTime}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-full"
        >
          Start
        </button>
        <button
          onClick={handlePause}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-4 rounded-full px-4"
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Cntdwn;
