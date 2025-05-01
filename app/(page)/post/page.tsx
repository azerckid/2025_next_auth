import Box from '@/app/components/Box';
import { prisma } from '@/app/lib/prisma';

const boxes = [
    { title: 'Box 1', content: 'Content for box 1' },
    { title: 'Box 2', content: 'Content for box 2' },
    { title: 'Box 3', content: 'Content for box 3' },
    { title: 'Box 4', content: 'Content for box 4' },
];

export default async function PostsPage() {
    const posts = await prisma.post.findMany({
        include: {
            User: true,
            Comment: {
                include: {
                    User: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {boxes.map((box, index) => (
                    <Box key={index} title={box.title} content={box.content} />
                ))}
            </div>
            <h1 className="text-3xl font-bold mb-8">게시글 목록</h1>
            <div className="grid gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                        <div className="flex items-center mb-4">
                            <img
                                src={post.User.profilePicture || '/default-avatar.png'}
                                alt={post.User.name || '사용자'}
                                className="w-10 h-10 rounded-full mr-4"
                            />
                            <div>
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {post.User.name} · {new Date(post.createdAt).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>
                        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <span className="mr-4">👁️ {post.views} 조회</span>
                            <span className="mr-4">❤️ {post.likes} 좋아요</span>
                            <span>💬 {post.Comment.length} 댓글</span>
                        </div>
                        {post.Comment.length > 0 && (
                            <div className="mt-4 border-t pt-4">
                                <h3 className="font-semibold mb-2">최근 댓글</h3>
                                {post.Comment.slice(0, 2).map((comment) => (
                                    <div key={comment.id} className="bg-gray-50 dark:bg-gray-700 rounded p-3 mb-2">
                                        <div className="flex items-center mb-1">
                                            <img
                                                src={comment.User.profilePicture || '/default-avatar.png'}
                                                alt={comment.User.name || '사용자'}
                                                className="w-6 h-6 rounded-full mr-2"
                                            />
                                            <span className="font-medium">{comment.User.name}</span>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
