import React from "react"

const Card = ({ post } : {post:any}) => {

    return(

        <div>
            <h1>{post.attributes.title}</h1>
            <p>{post.attributes.content}</p>
        </div>

    )
}

export default Card;