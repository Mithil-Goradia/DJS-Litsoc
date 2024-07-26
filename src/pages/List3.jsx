import React from 'react'

const List3 = () => {
  const participants = [
    { name: 'Vinit Harish Gaikwad', country: 'Narendra Modi' },
    { name: 'Aakash Viswanath', country: 'Amit Shah' },
    { name: 'Vraj', country: 'Rajnath Singh' },
    { name: 'Kushal Jain', country: 'Kiren Rijju' },
    { name: 'Vraj Gaglani', country: 'Shivraj Singh Chauhan' },
    { name: 'Sarvik Mall', country: 'Nitin Gadkari' },
    { name: 'Ved Sanap', country: 'Dharmendra Pradhan' },
    { name: 'Aditya Raj', country: 'Jual Oram' },
    { name: 'Riya Kandhari', country: 'Kangana Ranaut' },
    { name: 'Aadi Somaiya', country: 'Tejasvi Surya' },
    { name: 'Shubham Madane', country: 'Shrikant Shinde' },
    { name: 'Yash Tola', country: 'Kinjarapu Rammohan Naidu' },
    { name: 'Anurag Kaushik', country: 'Rahul Gandhi' },
    { name: 'Mohammed Ammar Khan', country: 'Shashi Tharoor' },
    { name: 'Aaryaveer Diinesh Mishra', country: 'Gaurav Gogoi' },
    { name: 'Tanvi Shinde', country: 'Varsha Gaikwad' },
    { name: 'Mahika Marathe', country: 'Dimple Yadav' },
    { name: 'Ziyan Khan', country: 'Asaduddin Owaisi' },
    { name: 'Seher Sharik', country: 'Supriya Sule' },
    { name: 'Arham Shaikh', country: 'Akhilesh Yadav' },
    { name: 'Jainam Dedhia', country: 'Abhishek Banerjee' },
  ];

  return (
    <div className='flex gap-6 flex-wrap justify-center'>
      <div>
        <h1 className='text-xl lg:text-3xl font-bold lg:font-extrabold mt-10 text-center mb-10'>
        LOK SABHA: Reservation: A Baggage carried too far
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

export default List3
