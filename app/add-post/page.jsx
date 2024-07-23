'use client'
import styles from '@/app/page.module.css'
import React, { useState } from 'react';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Title:', title);
    console.log('Content:', content);
    try{
        fetch('/api/add-post', {method: 'POST', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, content}) } )
    } catch (error){
        console.error(error)
    }
    // Reset the form fields
    setTitle('');
    setContent('');
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
    </main>
  );
}
