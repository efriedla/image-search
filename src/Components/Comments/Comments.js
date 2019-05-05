import React from 'react';
import CommentDetails from './CommentDetails';
import faker from 'faker';

const Comments = () => {
    return(
        <div className="ui comments">
            <CommentDetails 
                author = {faker.name.findName()} 
                image = {faker.image.avatar()}
                comment = {faker.lorem.paragraph()} 
                day = {faker.random.number(2)}
                review = {faker.random.number(5)}
            />
            <CommentDetails 
                author = {faker.name.findName()} 
                image = {faker.image.avatar()}
                comment = {faker.lorem.sentences()} 
                day = {faker.random.number(10)}
                review = {faker.random.number(5)}
            />
            <CommentDetails 
                author = {faker.name.findName()} 
                image = {faker.image.avatar()}
                comment = {faker.lorem.lines()} 
                day = {faker.random.number(20)}
                review = {faker.random.number(5)}
            />
        </div>
    )
}
export default Comments;