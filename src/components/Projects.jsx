import React from 'react';
import { FaGithub } from 'react-icons/fa';
import ecosortImg from '../assets/media/ecosort.jpeg';
import portfolioWebImg from '../assets/media/portfolio-web.png';
import iampoorImg from '../assets/media/iampoor.jpeg';
import iamrichImg from '../assets/media/iamrich.jpeg';
import videoPlayerAppImg from '../assets/media/video_player_app.jpg';
import githubFinderVideo from '../assets/media/githubfinder.jpeg';
import evotingImg from '../assets/media/evoting.jpg';
import urduTranscriptionImg from '../assets/media/urdu_transcription.jpg';
import nextWordPredictionImg from '../assets/media/next_word_prediction.webp';
import hotelImg from '../assets/media/hotel.jpg';

const projects = [
  { 
    title: 'AI Waste Classifier', 
    description: 'An image is captured in app, model classifies waste in image.', 
    link: ecosortImg, 
    github: 'https://github.com/zahidprvz/waste_classificatio_enhanced' 
  },
  { 
    title: 'Portfolio Website', 
    description: 'Portfolio website made with html, css and javascript.', 
    link: portfolioWebImg, 
    github: 'https://github.com/zahidprvz/zahid' 
  },
  { 
    title: 'I am poor', 
    description: 'Opposite of famous app saying i am rich UI.', 
    link: iampoorImg, 
    github: 'https://github.com/zahidprvz/i_am_poor' 
  },
  { 
    title: 'I am rich', 
    description: 'Famous app saying i am rich UI.', 
    link: iamrichImg, 
    github: 'https://github.com/zahidprvz/i_am_rich' 
  },
  { 
    title: 'video_player_app', 
    description: 'Simple video player app built with flutter.', 
    link: videoPlayerAppImg, 
    github: 'https://github.com/zahidprvz/simple_video_player' 
  },
  { 
    title: 'github finder app', 
    description: 'App built with github api in flutter to search & all the users in a specific area.', 
    link: githubFinderVideo, 
    github: 'https://github.com/zahidprvz/github_finder' 
  },
  { 
    title: 'E-Voting app', 
    description: 'App built in .NET with C#, using MVC architecture for online voting.', 
    link: evotingImg, 
    github: 'https://github.com/zahidprvz/E-Voting-Application-Final' 
  },
  { 
    title: 'Urdu_Transcription', 
    description: 'Program written in python language to transcribe urdu audio to urdu text hearing the audio files.', 
    link: urduTranscriptionImg, 
    github: 'https://github.com/zahidprvz/urdu-audio-transcription' 
  },
  { 
    title: 'Next Word Prediction', 
    description: 'AI model trained for predicting next word with web interface.', 
    link: nextWordPredictionImg, 
    github: 'https://github.com/zahidprvz/Next_Word_Prediction' 
  },
  { 
    title: 'Hotel Management System', 
    description: 'Hotel management written in Assembly Language.', 
    link: hotelImg, 
    github: 'https://github.com/zahidprvz/hotel-project-in-assembly' 
  }
];

const ProjectCard = ({ title, description, link, github }) => (
  <div className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
    <img src={link} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h4 className="text-xl font-semibold mb-2 text-gray-200">{title}</h4>
      <p className="text-gray-300 mb-4">{description}</p>
      <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-gray-200">
        <FaGithub className="mr-2" /> View Source Code
      </a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-200">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
