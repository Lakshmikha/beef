import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EpiComponent = () => {
    const [episodes, setEpisodes] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchEpisodes = async () => {
            
                const response = await axios.get('http://localhost:3000/api/episodes');
                setEpisodes(response.data);
                
            } 

        fetchEpisodes();
    }, []);

    const handleEpisodeClick = (episodeId) => {
        navigate(`/episode/${episodeId}`); 
    };


    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-4">Episodes</h1>


            <div className="relative inline-block text-left">
                <button
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                    {dropdownOpen ? "Close Episodes List" : "Open Episodes List"}
                    <svg
                        className={`-mr-1 ml-2 h-5 w-5 transition-transform transform ${
                            dropdownOpen ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {dropdownOpen && (
                    <ul className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                        {episodes.length > 0 ? (
                            episodes.map((episode) => (
                                <li
                                    key={episode._id}
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleEpisodeClick(episode._id)}
                                >
                                    <span className="font-bold">{episode.episodeNumber}</span> - {episode.title}
                                </li>
                            ))
                        ) : (
                            <li className="px-4 py-2 text-sm text-gray-500">No episodes available</li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default EpiComponent;
