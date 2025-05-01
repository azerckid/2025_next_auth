import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Box 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-48">
          <h2 className="text-xl font-semibold mb-4">Box 1</h2>
          <p className="text-gray-600 dark:text-gray-300">Content for box 1</p>
        </div>

        {/* Box 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-48">
          <h2 className="text-xl font-semibold mb-4">Box 2</h2>
          <p className="text-gray-600 dark:text-gray-300">Content for box 2</p>
        </div>

        {/* Box 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-48">
          <h2 className="text-xl font-semibold mb-4">Box 3</h2>
          <p className="text-gray-600 dark:text-gray-300">Content for box 3</p>
        </div>

        {/* Box 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-48">
          <h2 className="text-xl font-semibold mb-4">Box 4</h2>
          <p className="text-gray-600 dark:text-gray-300">Content for box 4</p>
        </div>
      </div>
    </div>
  );
}
