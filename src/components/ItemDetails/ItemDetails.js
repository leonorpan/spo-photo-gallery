import React from 'react';
import './ItemDetails.css';

const ItemDetails = ({ ImgSrc, Tags, onCommentSubmit, Comments = [] }) => {
  let input = '';
  let reversedComments = Comments.reverse();

  return (
    <div className="Item-Details">
      <div className="Item-Img">
        <img src={ImgSrc} alt={Tags} />
      </div>
      <div className="Item-Info">
        <h3>Item Info:</h3>
        {Tags.length && (
          <div className="Item-Tags">
            {Tags.split(',').map(tag => (
              <button key={tag}>{tag.trim()}</button>
            ))}
          </div>
        )}

        <div className="Item-Comment">
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }

              onCommentSubmit(input.value);
              input.value = '';
            }}>
            <input ref={node => (input = node)} />
            <button type="submit">Add Comment</button>
          </form>
        </div>

        {reversedComments.length > 0 && (
          <div className="Item-CommentsList">
            <h3>Comments:</h3>
            <ul>
              {reversedComments.map(comment => (
                <li key={comment.id}>{comment.value}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
