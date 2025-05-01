import Box from './components/Box';

export default function Home() {
  const boxes = [
    { title: 'Box 1', content: 'Content for box 1' },
    { title: 'Box 2', content: 'Content for box 2' },
    { title: 'Box 3', content: 'Content for box 3' },
    { title: 'Box 4', content: 'Content for box 4' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {boxes.map((box, index) => (
        <Box key={index} title={box.title} content={box.content} />
      ))}
    </div>
  );
}
