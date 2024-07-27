// components/UpdatePostButton.jsx

'use client'; // This marks this file as a Client Component
import { useRouter } from 'next/navigation';

export default function UpdatePostButton({ postId, title, content }) {
    const router = useRouter();

    function handleClick() {
        router.push(`/update-post/${postId}/?title=${title}&&content=${content}`);

    }

    return (
        <button onClick={handleClick}>Update Post</button>
    );
}
