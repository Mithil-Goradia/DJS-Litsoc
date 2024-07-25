import React from 'react';

const List1 = () => {
  const participants = [
    { name: 'Aryan Singhvi', country: 'Republic of Botswana' },
    { name: 'Sathvika Devi V', country: 'Republic of Cameroon' },
    { name: 'Manaav Rajput', country: 'Democratic Republic of the Congo' },
    { name: 'Aditya Kiran', country: 'Republic of Djibouti' },
    { name: 'Nishika Ranjit', country: 'Arab Republic of Egypt' },
    { name: 'Shanay Shukla', country: 'Republic of Equitorial Guinea' },
    { name: 'Gunit', country: 'Republic of the Gambia' },
    { name: 'Ayuj Menda', country: 'Kingdom of Morocco' },
    { name: 'Aviv Parekh', country: 'Republic of Namibia' },
    { name: 'Manan Rustagi', country: 'Federal Republic of Nigeria' },
    { name: 'Reeya Rangari', country: 'United Republic of Tanzania' },
    { name: 'Shlok Shah', country: 'Republic of Uganda' },
    { name: 'Crizane', country: 'Republic of Angola' },
  ];

  return (
    <div className='flex gap-6 flex-wrap justify-center'>
      <div>
        <h1 className='text-xl lg:text-3xl font-bold lg:font-extrabold mt-10 text-center mb-10'>
          AFRICAN UNION PEACE AND SECURITY COUNCIL
        </h1>
        {participants.map((participant, index) => (
          <div key={index} className='flex justify-center my-5'>
            <div className='flex flex-col gap-3 items-center w-full px-2'>
              <div
                className='flex justify-between p-2 border-solid border-white border-2 rounded-lg w-full'
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

export default List1;
