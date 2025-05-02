import Box from './components/Box';

export default function Home() {
  const boxes = [
    { title: 'Box 1', content: 'Content for box 1' },
    { title: 'Box 2', content: 'Content for box 2' },
    { title: 'Box 3', content: 'Content for box 3' },
    { title: 'Box 4', content: 'Content for box 4' },
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Welcome to My App
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
          A modern Next.js application with beautiful UI components
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {boxes.map((box, index) => (
          <Box key={index} title={box.title} content={box.content} />
        ))}
      </div>
    </div>
  );
}
