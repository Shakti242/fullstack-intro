// pages/api/addPost.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { title, content } = req.body;
      // Handle the form submission
      console.log('Title:', title);
      console.log('Content:', content);
      // You can add your logic to save the data to a database here
      
      res.status(200).json({ message: 'Post added successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  