'use client';

import UnityGame from '../../components/WebGLGame';

const GamePage: React.FC = () => {
  return (
    <div className="flex overflow-x-hidden mt-8">
      <main className="w-full">
        <h1>Game Page</h1>
        <UnityGame />
      </main>
    </div>
  );
};

export default GamePage;
