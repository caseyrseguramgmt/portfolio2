import React from 'react';

function Projects() {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold">My Projects</h1>
      <p className="mt-4 text-lg">This is the projects page.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="border p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold">Project 1</h2>
          <p className="mt-2">Description of project 1.</p>
        </div>
        <div className="border p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold">Project 2</h2>
          <p className="mt-2">Description of project 2.</p>
        </div>
        <div className="border p-4 rounded shadow-md">
          <h2 className="text-2xl font-bold">Project 3</h2>
          <p className="mt-2">Description of project 3.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
