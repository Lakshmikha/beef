import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const EpisodeDetails = () => {
    const query = new URLSearchParams(useLocation().search);
    const episodeId  = query.get('episodeId');
    const [episode, setEpisode] = useState(null);

    useEffect(() => {
        const fetchEpisodeDetails = async () => {
            
                const response = await axios.get(`http://localhost:3000/api/episodes/${episodeId}`);
                setEpisode(response.data);
                
        };

        fetchEpisodeDetails();
    }, [episodeId]);

    return (
        <div className="flex flex-col items-center">
            {episode && (
                <>
                    <h1 className="text-3xl font-bold mb-4">{episode.title}</h1>
                    <p className="text-lg mb-2">Episode Number: {episode.episodeNumber}</p>
                    <p className="text-lg mb-2">Air Date: {new Date(episode.airDate).toLocaleDateString()}</p>
                    <p className="text-lg mb-2">Description: {episode.description}</p>
                </>
            )}
        </div>
    );
};

export default EpisodeDetails;
