// /app/components/Post.jsx

import DeletePostButton from "./DeletePostButton.jsx";
import UpdatePostButton from "./UpdatePostButton.jsx";

export default function Post({ id, title, content, authorName }) {
    console.log(id); console.log(title); console.log(content);
    return (
        <div style={{ border: '1px solid white', padding: '15px', margin: '10px 0px' }}>
            <h3>{authorName}</h3>
            <h4>{title}</h4>
            <p>{content}</p>
            <DeletePostButton postId={id} />
            <UpdatePostButton postId={id} title={title} content={content} />
        </div>
    );
}
