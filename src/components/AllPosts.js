import React, { useState, useEffect} from 'react'
import sanityClient from "../client"
import {Link} from "react-router-dom"

function AllPosts() {
    const [allPostData, setAllPostData] = useState(null)

    useEffect(()=>{
        sanityClient.fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    }
                }
            }`
        )
        .then((data)=> setAllPostData(data))
        .catch(console.error)
    },[])

    return (
        <div>
            <h2>Blog Posts</h2>
            <h3>Welcome to my blog page</h3>
            <div>
                {allPostData &&
                allPostData.map((post,index)=> (
                    <Link to={'/'+post.slug.current} key={post.slug.current}>
                        <span key={index}>
                           <img src={post.mainImage.asset.url} alt="mainimage"/> 
                        </span>
                    </Link>
                ))}
            </div>

        </div>
    )
}

export default AllPosts
