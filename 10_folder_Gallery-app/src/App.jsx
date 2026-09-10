import axios from 'axios';
import { useEffect, useState } from 'react';

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const res = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=20`
    );
    if (!res.data) {
      return <h1>Some Internal Server Error Occurs</h1>;
    }
    setUserData(res.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
      Loading....
    </h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map((elem, idx) => (
      <div
        key={idx}
        className="h-64 w-56 bg-amber-950 rounded-lg overflow-hidden shadow-lg"
      >
        <img
          src={elem.download_url}
          alt={`user-${idx}`}
          className="h-full w-full object-cover"
        />
      </div>
    ));
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-2xl font-bold">Image Gallery - Page {index}</h1>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {printUserData}
      </div>

      <div className="flex items-center gap-4">
        <button
          className="bg-amber-600 hover:bg-amber-700 active:scale-95 transition-all duration-200 h-12 w-24 rounded-lg font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={index === 1}
          onClick={() => {
            if (index > 1) {
              setUserData([]);
              setIndex(index - 1);
            }
          }}
        >
          Prev
        </button>

        <h2 className="text-lg font-medium">Page {index}</h2>

        <button
          className="bg-amber-600 hover:bg-amber-700 active:scale-95 transition-all duration-200 h-12 w-24 rounded-lg font-semibold shadow-md"
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;