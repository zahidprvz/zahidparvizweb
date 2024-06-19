import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
      const projectsData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setProjects(projectsData);
    });

    return () => unsubscribe(); // Unsubscribe from snapshot listener on component unmount
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 text-gray-200">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold mb-2 text-gray-200">{project.title}</h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-gray-200">
                <FaGithub className="mr-2" /> View Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
