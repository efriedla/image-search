import React from 'react';
import CommentDetails from './CommentDetails';
import faker from 'faker';

const Comments = () => {
    var rating;
    var createNumberRange = (max,min) =>{
        return rating = Math.floor((Math.random() * max) + min);
    }
    return(
        <div className="ui comments">
            
            <CommentDetails 
                author = {faker.name.findName()} 
                image = {faker.image.avatar()}
                comment = {faker.lorem.paragraph()} 
                day = {createNumberRange(2,1)}
                review = {createNumberRange(1,4)}
            />
            
            <CommentDetails 
                author = {faker.name.findName()} 
                image = {faker.image.avatar()}
                comment = {faker.lorem.sentences()} 
                day = {createNumberRange(10,5)}
                review = {createNumberRange(2,4)}
            />
            
            <CommentDetails 
                author = {faker.name.findName()} 
                image = {faker.image.avatar()}
                comment = {faker.lorem.lines()} 
                day = {createNumberRange(20,5)}
                review = {createNumberRange(2,3)}
            />
        </div>
    )
}
export default Comments;