import React from 'react'

const List2 = () => {
    const participants = [
        { name: 'Tanay Pandit', country: 'Republic of Armenia' },
        { name: '', country: 'Republic of Azerbaijan' },
        { name: 'Siddharth', country: 'Russian Federation' },
        { name: 'Vedant', country: 'Republic of Turkey' },
        { name: 'Sarthak Mane', country: 'Islamic Republic of Iran' },
        { name: 'Vedant Jadhavar', country: 'United States of America' },
        { name: 'Arash', country: 'People`s Republic of China' },
        { name: 'Rishabh Ramji', country: 'United Kingdom' },
        { name: 'Yug Rokadia', country: 'French Republic' },
        { name: 'Soor Parmar', country: 'Federal Republic of Germany' },
        { name: 'Chinmay', country: 'Georgia' },
        { name: 'Saisha Dandekar', country: 'Ukraine' },
        { name: 'Prathamesh Singh', country: 'Republic of Finland' },
        { name: 'Priyal Pimplapure', country: 'Republic of Belarus' },
        { name: 'Sarthak Kale', country: 'State of Israel' },
        { name: 'Aditya Jadhav', country: 'Republic of India' },
        { name: 'Sakshi Sharma', country: 'Islamic Republic of Pakistan' },
        { name: 'Raaj Shah', country: 'Kingdom of Saudi Arabia' },
        { name: 'Afeefa Mujawar', country: 'Republic of Korea' },
        { name: 'Agastya Prakash', country: 'Democratic People`s Republic of Korea' },
        { name: 'Karansingh Bist', country: 'Republic of Poland' },
        { name: 'Krishil Parikh', country: 'Canada' },
        { name: 'Daksh Jain', country: 'Japan' },
      ];
    
      return (
        <div className='flex gap-6 flex-wrap justify-center'>
          <div>
            <h1 className='text-xl lg:text-3xl font-bold lg:font-extrabold mt-10 text-center mb-10'>
            UNSC: The Nagorno-Karabakh Conflict
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

export default List2
