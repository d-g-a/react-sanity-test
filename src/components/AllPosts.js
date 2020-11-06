import React, { useState, useEffect} from 'react'
import sanityClient from "../client"
import {Link} from "react-router-dom"
import styled from "styled-components"

const AllPostsStyled = styled.div`

background-color: black;
color: white;
width: 100vw;
height: 100vh;
margin: 0;
padding: 80px;

.all-cards{
    display: flex;
    flex-direction: row;
}

.card{
    border: 1px solid white;
    margin: 20px 40px 0 0;
    text-align: center;
}

.card-image{
    width: 200px;
}

.card-title{
    text-transform: uppercase;
    
}

.image-container{
    width: 100px;
}

.card-image{
    width: 250px;
    height: 250px;
    object-fit: cover;
}

a{
    color: white;
    text-decoration: none
}
`

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
        <AllPostsStyled>
            <h2>STEROELAB</h2>
            <div className="all-cards">
                {allPostData &&
                allPostData.map((post,index)=> (
                    <div className="card">
                         <Link to={'/'+post.slug.current} key={post.slug.current}>
                        <span key={index} className="image-container">
                           <img src={post.mainImage.asset.url} alt="mainimage" className="card-image"/> 
                        </span>
                        <p className="card-title">{post.title}</p>
                        </Link>
                    </div>
                ))}
            </div>

        </AllPostsStyled>
    )
}

export default AllPosts
