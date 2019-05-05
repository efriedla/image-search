import React from 'react';
import faker from 'faker';

const CommentDetails = (props) => {
    
    return(
        <div className="comment">
                <a className="avatar" herf="/">
                <img src={props.image} alt="avatar"/>
                </a>
                <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                    <div className="date">2 days ago</div>
                    <div className="rating">
                    <i className="star icon"></i>
                    5 Faves.
                    </div>
                </div>
                <div className="text">
                    Hey guys, I hope this example comment is helping you read this documentation.
                </div>
                </div>
            </div>
    )
}

export default CommentDetails;