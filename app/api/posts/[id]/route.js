import prisma from '@/lib/prisma';

export async function GET(request) {
    const { pathname } = new URL(request.url);
    const id = pathname.split('/').pop(); // Extract the ID from the URL

    if (!id || isNaN(id)) {
        return new Response(JSON.stringify({ error: 'Invalid post ID' }), { status: 400 });
    }

    try {
        const post = await prisma.post.findUnique({
            where: { id: parseInt(id, 10) },
        });
        if (!post) {
            return new Response(JSON.stringify({ error: 'Post not found' }), { status: 404 });
        }
        return new Response(JSON.stringify(post), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch post' }), { status: 500 });
    }
}

export async function PATCH(request) {
    const { pathname } = new URL(request.url);
    const id = pathname.split('/').pop(); // Extract the ID from the URL

    if (!id || isNaN(id)) {
        return new Response(JSON.stringify({ error: 'Invalid post ID' }), { status: 400 });
    }

    try {
        const { title, content } = await request.json();
        const post = await prisma.post.update({
            where: { id: parseInt(id, 10) },
            data: { title, content },
        });
        return new Response(JSON.stringify(post), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to update post' }), { status: 500 });
    }
}
