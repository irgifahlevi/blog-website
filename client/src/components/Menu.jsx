import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Menu = ({cat}) => {

    const [posts, setPosts] = useState([]);


    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts/?cat=${cat}`);
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, [cat]);

    // const posts = [

    //     {
    //         id: 1, 
    //         title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    //         desc: "Lorem ipsum dolor sit amet, consectetur",
    //         img: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    //     },
    //     {
    //         id: 2, 
    //         title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    //         desc: "Lorem ipsum dolor sit amet, consectetur",
    //         img: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    //     },
    //     {
    //         id: 3, 
    //         title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    //         desc: "Lorem ipsum dolor sit amet, consectetur",
    //         img: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    //     },
    //     {
    //         id: 4, 
    //         title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    //         desc: "Lorem ipsum dolor sit amet, consectetur",
    //         img: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    //     },
    //     {
    //         id: 5, 
    //         title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    //         desc: "Lorem ipsum dolor sit amet, consectetur",
    //         img: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    //     },
    // ];

    return(
        <div className="menu">
            <h1>Other post you</h1>
            {posts.map(post=>(
                <div className="post" key={post.id}>
                    <img src={`../upload/${post.img}`} alt=""/>
                    <h2>{post.title}</h2>
                    <Link className="link" to={`/post/${post.id}`}>
                        <button>Readmore</button>
                    </Link> 
                </div>
            ))}
        </div>
    )
}

export default Menu;