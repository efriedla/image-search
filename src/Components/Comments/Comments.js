import React from 'react';
import faker from 'faker';

const Comments = () => {
    return(
        <div className="ui comments">
            <div className="comment">
                <a className="avatar" herf="/">
                <img src={faker.image.avatar()} alt="avatar"/>
                </a>
                <div className="content">
                <a className="author">Stevie Feliciano</a>
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
        </div>
    )
}
export default Comments;