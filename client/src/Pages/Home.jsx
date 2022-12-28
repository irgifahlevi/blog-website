import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [posts, setPosts] = useState([]);

    const cat = useLocation().search;


    useEffect(()=>{
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
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

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent
    }

    return (
        <div className="home">

            <div className="posts">
                {posts.map(post => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={`../upload/${post.img}`} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link> 
                            <p>{getText(post.desc)}</p>
                            
                            <Link className="link" to={`/post/${post.id}`}>
                                <button>Readmore</button>
                            </Link> 
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Home;