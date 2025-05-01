interface BoxProps {
    title: string;
    content: string;
}

export default function Box({ title, content }: BoxProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-48">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{content}</p>
        </div>
    );
} 