const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    // 사용자 생성
    const user1 = await prisma.user.create({
        data: {
            id: '1',
            email: 'alice@alice.com',
            name: '앨리스',
            nickname: '멋진앨리스',
            hashedPassword: 'hashed_password_1',
            profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user1'
        }
    });

    const user2 = await prisma.user.create({
        data: {
            id: '2',
            email: 'bob@bob.com',
            name: '밥',
            nickname: '멋진밥',
            hashedPassword: 'hashed_password_2',
            profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user2'
        }
    });

    // 게시글 생성
    const post1 = await prisma.post.create({
        data: {
            id: '1',
            title: '첫 번째 게시글',
            content: '안녕하세요! 이것은 첫 번째 게시글입니다.',
            authorId: user1.id,
            likes: 5,
            views: 10
        }
    });

    const post2 = await prisma.post.create({
        data: {
            id: '2',
            title: '두 번째 게시글',
            content: '반갑습니다! 이것은 두 번째 게시글입니다.',
            authorId: user2.id,
            likes: 3,
            views: 7
        }
    });

    // 댓글 생성
    await prisma.comment.create({
        data: {
            id: '1',
            content: '첫 번째 댓글입니다!',
            postId: post1.id,
            authorId: user2.id,
            likes: 2
        }
    });

    await prisma.comment.create({
        data: {
            id: '2',
            content: '두 번째 댓글입니다!',
            postId: post1.id,
            authorId: user1.id,
            likes: 1
        }
    });

    console.log('Seed data created successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 