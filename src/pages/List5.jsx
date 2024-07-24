import React from 'react'

const List5 = () => {
  const participants = [
    { name: 'Bibi Zoya Mirab', country: 'Photography' },
    { name: 'Khushboo Khilnaney', country: 'Journalism' },
    { name: 'Rashmi Verma', country: 'Photography' },
    { name: 'Gautam Karnani', country: 'Photography' },
    { name: 'Alia Shaikh', country: 'Journalism' },
    { name: 'Kevin Shah', country: 'Journalism' },
  ];

  return (
    <div className='flex gap-6 flex-wrap justify-center'>
      <div>
        <h1 className='text-xl lg:text-3xl font-bold lg:font-extrabold mt-10 text-center mb-10'>
        International Press (IP)
        </h1>
        {participants.map((participant, index) => (
          <div key={index} className='flex justify-center my-5'>
            <div className='flex flex-col gap-3 items-center px-2'>
              <div
                style={{width:'450px'}}
                className='flex justify-between p-2 border-solid border-white border-2 rounded-lg'
              >
                <p className='font-bold text-lg'>{participant.name}</p>
                <p>{participant.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List5
