import React from 'react';
import CommentDetails from './CommentDetails';
import faker from 'faker';

const Comments = () => {
    return(
        <div className="ui comments">
            <CommentDetails author = "Stevie Feliciano" image = {faker.image.avatar()} />
            <CommentDetails author = "Kevin Fano" image = {faker.image.avatar()}/>
        </div>
    )
}
export default Comments;