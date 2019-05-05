import React from 'react';

const CommentDetails = (props) => {
    // console.log(props.review)
    return(
        <div className="comment">
                <a className="avatar" herf="/">
                <img src={props.image} alt="avatar"/>
                </a>
                <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                    <div className="date">{props.day} days ago</div>
                    <div className="rating">
                    <i className="star icon"></i>
                    {props.review} Stars.
                    </div>
                </div>
                <div className="text">
                    {props.comment}
                </div>
                </div>
            </div>
    )
}

export default CommentDetails;