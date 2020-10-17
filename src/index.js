import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function Tweet(){
    return(
        <div className='tweet'>
            <Avatar/>
            <div className="content">
                <NameWithHandle/><Time/>
                <Message/>
            </div>
            <div className="buttons">
                <ReplayButton/>
                <RetweetButton/>
                <LikeButton/>
                <MoreOptionsButton/>
            </div>
        </div>
    );
}
ReactDOM.render(
    <Tweet/>,
    document.querySelector('#root')
);
function Message(){
    return(
        <div className='message'>
            this is message
        </div>
    );
}
function Avatar(){
    return(
        <img 
        src="https://www.gavatar.com/avatar/nothing"
        className="avatar"
        alt="avatar"/>
    );
}
function NameWithHandle(){
    return(
        <span className="name-with-handle">
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}
const Time =() =>(
    <span className="time">3h ago</span>
);
const ReplayButton =()=>(
    <i className="fa fa-replay-button"/>
);
const RetweetButton=()=>(
    <i className="fa fa-retweet retweet-button"/>
);
const LikeButton=()=>(
    <i className="fa fa-heart like-button"/>
);
const MoreOptionsButton=()=>(
    <i className="fa fa-ellipsis-h more-options-buttton"/>
);