'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UpdatePostForm({ postId }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (postId) {
            fetch(`/api/posts/${postId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Error ${response.status}: ${response.statusText}`);
                    }
                    return response.json();
                })
                .then(data => {
                    setTitle(data.title || '');
                    setContent(data.content || '');
                    setLoading(false);
                })
                .catch(err => {
                    console.error('Error fetching post data:', err);
                    setError(`I am Failed to load : ${err.message}`);
                    setLoading(false);
                });
        } else {
            setError('Invalid post ID');
            setLoading(false);
        }
    }, [postId]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch(`/api/posts/${postId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }

            router.refresh();
        } catch (error) {
            console.error('Error updating post:', error);
            setError(`Error updating post: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <h1>Update Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Updating...' : 'Update Post'}
                </button>
                {error && <div className="error">{error}</div>}
            </form>
        </main>
    );
}
