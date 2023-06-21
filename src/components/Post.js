import React from 'react'
import "./post.css"

async function PostData() {
    const res = await fetch("https://fakestoreapi.com/products/")
    const data = await res.json()
    return data
}

const Post = async() => {
    const posts = await PostData()
  return (
    <>
    <h1>OUR PRODUCTS</h1>
    <div className='container'>
        {posts.map((post) => (
            <div className='item'>
            <img src={post.image} />
            <div className='product_info'>
            <div className='title'>
            <h4 key={post.id}>{post.title}</h4>
            </div>
            <div className='des'><p>{post.description.substring(0, 150)}</p></div>
            <div className='price'>
                <h4> Category: {post.category}</h4>
                <h4>Price: {post.price}</h4>
            </div>
            </div>
            </div>
        ))}
    </div>
    </>
  );
}


export default Post