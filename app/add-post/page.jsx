'use client'
import styles from '@/app/page.module.css';
import React, { useState } from 'react';


export default function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Make the API request
    const response = await fetch('app/api/addPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      const data = await response.json();
      setMessage(data.message);
      // Reset the form fields
      setTitle('');
      setContent('');
    } else {
      setMessage('Failed to add post');
    }
  };

  return (
    <main className={styles.main}>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </main>
  );
}
