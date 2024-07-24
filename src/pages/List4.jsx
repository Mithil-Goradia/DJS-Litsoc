import React from 'react'

const List4 = () => {
    const participants = [
        { name: 'Dr. Dhruva Nair', country: 'Kingdom of Saudi Arabia' },
        { name: 'Dhoon Pandya', country: 'United Arab Emirates' },
        { name: 'Poorva', country: 'State of Kuwait' },
        { name: '', country: 'State of Qatar' },
        { name: 'Dhruthi Vijayanand', country: 'Kingdom of Bahrain' },
        { name: 'Ayesha Bhatti', country: 'Sultanate of Oman' },
        { name: 'Prisha Gogri', country: 'Kingdom Of Morocco' },
        { name: 'Krisha Shah', country: 'Lebanese Republic' },
        { name: 'Moksha Jain', country: 'Syrian Arab Republic' },
        { name: 'Devanshi Kambli', country: 'Republic of Iraq' },
        { name: 'Kruti Gujarathi', country: 'Islamic Republic of Iran' },
        { name: 'Koyna Karmakar', country: 'Arab Republic of Egypt' },
        { name: 'Kamakshi Bahuguna', country: 'Sate of Libya' },
        { name: 'Sakshi Mehta', country: 'Republic of Yemen' },
        { name: '', country: 'State of Palestine' },
        { name: 'Sahil Singh', country: 'New Zealand' },
        { name: 'Chhavi Talele', country: 'Republic of Finland' },
        { name: 'Paridhi Raut', country: 'Republic of  India' },
        { name: 'Hetvi Desai', country: 'Republic of Rawanda' },
        { name: 'Bhoomika Pal', country: 'Republic of Namibia' },
        { name: 'Kabir Kapoor', country: ' People`s Democratic Republic of Algeria' },
        { name: '', country: 'Republic of South Africa' },
      ];
    
      return (
        <div className='flex gap-6 flex-wrap justify-center'>
          <div>
            <h1 className='text-xl lg:text-3xl font-bold lg:font-extrabold mt-10 text-center mb-10'>
            UNCSW: Where are the Women Leaders
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

export default List4
