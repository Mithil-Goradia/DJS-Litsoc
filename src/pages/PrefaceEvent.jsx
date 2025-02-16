import React from "react";
import { Link } from "react-router-dom";

const PrefaceEvent = () => {
  return (
    <div className="min-h-screen text-red-950 flex flex-col items-center p-6 bg-transparent">
      {/* Header Section */}
      <div className="text-center py-10 animate-fade-in">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-red-900 to-orange-500 bg-clip-text text-transparent">
          THE PREFACE: VENUE UPDATE!
        </h1>
        <p className="text-lg mt-4">Join us for an exciting literary gathering!</p>
      </div>

      {/* Event Details */}
      <div className="backdrop-blur-lg bg-white/20 text-red-950 p-8 rounded-xl shadow-lg w-full max-w-3xl text-center border border-white/30">
        <h2 className="text-3xl font-bold">📍 Venue Update</h2>
        <p className="text-lg mt-2">We're now meeting at the <strong>First Floor Conference Room!</strong></p>
      </div>

      <div className="backdrop-blur-lg bg-white/20 p-6 rounded-xl shadow-md w-full max-w-3xl mt-6 text-center border border-white/30">
        <h2 className="text-3xl font-bold">🌟 What’s in Store?</h2>
        <ul className="text-lg mt-4 space-y-3">
          <li>🎤 Interactive Book Club Launch</li>
          <li>🧠 Literary Quizzes & Games</li>
          <li>💬 Discussions, Recommendations & More!</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="mt-8 text-center">
        <h3 className="text-2xl font-semibold">📅 Date: 17th Feb</h3>
        <p className="text-xl">📍 First Floor Conference Room</p>
      </div>

      <a
        href="https://chat.whatsapp.com/G4CRgTQhm1yE9gz2Br4Tp1"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-gradient-to-r from-red-900 to-red-700 text-white font-bold text-lg rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
        Join Us 🚀
        </a>

    </div>
  );
};

export default PrefaceEvent;
