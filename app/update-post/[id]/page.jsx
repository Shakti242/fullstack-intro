// 'use client';
// import styles from '@/app/page.module.css';
// import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { useRouter, useParams } from 'next/navigation';

// export default function UpdatePostPage() {
//     const [title, setTitle] = useState('');
//     const [content, setContent] = useState('');
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const router = useRouter();
//     const { id } = useParams();


//         if (id) {
//             fetch(`/api/posts/${id}`) // Ensure this matches the route
//                 .then(response => {
//                     if (!response.ok) {
//                         throw new Error('Failed to fetch post data');
//                     }
//                     return response.json();
//                 })
//                 .then(data => {
//                     setTitle(data.title || '');
//                     setContent(data.content || '');
//                     setLoading(false);
//                 })
//                 .catch(err => {
//                     console.error('Error fetching post data:', err);
//                     setError('Failed to load post data');
//                     setLoading(false);
//                 });
//         } else {
//             setError('Invalid post ID');
//             setLoading(false);
//         }
//      [id];

// const handleTitleChange = (event) => {
//     setTitle(event.target.value);
// };

//     const handleContentChange = (event) => {
//         setContent(event.target.value);
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);

//         try {
//             const response = await fetch(`/api/posts/${id}`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ title, content }),
//             });



//             if (!response.ok) {
//                 throw new Error('Failed to update post');
//             }

//             router.refresh();
//         } catch (error) {
//             console.error('Error updating post:', error);
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <main className={styles.main}>
//             <Link href={'/'} className={styles.link}>View Feed</Link>
//             <h1 className={styles.heading}>Update Post</h1>
//             {loading ? (
//                 <div className={styles.loading}>Loading...</div>
//             ) : (
//                 <form onSubmit={handleSubmit} className={styles.form}>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="title" className={styles.label}>Title:</label>
//                         <input
//                             type="text"
//                             id="title"
//                             value={title}
//                             onChange={handleTitleChange}
//                             required
//                             className={styles.input}
//                         />
//                     </div>
//                     <div className={styles.formGroup}>
//                         <label htmlFor="content" className={styles.label}>Content:</label>
//                         <textarea
//                             id="content"
//                             value={content}
//                             onChange={handleContentChange}
//                             required
//                             className={styles.textarea}
//                         />
//                     </div>
//                     <button type="submit" disabled={loading} className={styles.button}>
//                         {loading ? 'Updating...' : 'Update Post'}
//                     </button>
//                 </form>
//             )}
//         </main>
//     );
// }
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/page.module.css';
// get value of title from url and  store it in variable apple
const query = new URLSearchParams(window.location.search);
const id = query.get('id');
let apple = query.get('title');
let content = query.get('content');
const saveData = () => {
  console.log("hello")
}


function Update() {
  return (
    <div>
      <form onSubmit={saveData} >
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>Title:</label>
          <input
            type="text"
            id="title"
            // value={title}
            value={apple}
            // onChange={handleTitleChange}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content" className={styles.label}>Content:</label>
          <textarea
            id="content"
            // value={content}
            value={content}
            // onChange={handleContentChange}
            required
            className={styles.textarea}
          />
        </div>
        <button type="submit">Save</button>

      </form>
    </div>

  )
}


export default Update