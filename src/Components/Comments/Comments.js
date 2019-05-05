import React from 'react';
import CommentDetails from './CommentDetails';
import faker from 'faker';

const Comments = () => {
    var rating;
    var createReview = (max,min) =>{
        return rating = Math.floor((Math.random() * max) + min);
    }
    return(
        <div className="ui comments">
            
            <CommentDetails 
                author = {faker.name.findName()} 
                image = {faker.image.avatar()}
                comment = {faker.lorem.paragraph()} 
                day = {createReview(2,1)}
                review = {createReview(4,1)}
            />
            
            <CommentDetails 
                author = {faker.name.findName()} 
                image = {faker.image.avatar()}
                comment = {faker.lorem.sentences()} 
                day = {createReview(10,5)}
                review = {createReview(3,1)}
            />
            
            <CommentDetails 
                author = {faker.name.findName()} 
                image = {faker.image.avatar()}
                comment = {faker.lorem.lines()} 
                day = {createReview(20,5)}
                review = {createReview(5,0)}
            />
        </div>
    )
}
export default Comments;