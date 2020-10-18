import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
function Tweet({ tweet }){
    return(
        <div className='tweet'>
            <Avatar hash={tweet.gavatar}/>
            <div className="content">
            <NameWithHandle author={Tweet.author}/><Time time={tweet.timestamp}/>
            <Message/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton/>
                <LikeButton/>
                <MoreOptionsButton/>
            </div>
        </div>
        </div>
    );
}
function Avatar({ hsah }){
    var url =`https://www.gavatar.com/avatar/${hash}`;
    return(
        <img 
        src={url}
        className="avatar"
        alt="avatar"/>
    );
}
function NameWithHandle({author}){
    const {name, handle} = author;
    return(
        <span className="name-with-handle">
            <span className="name">Your Name</span>
            <span className="handle">@yourhandle</span>
        </span>
    );
}
const Time =({time}) =>{
    const timeString = moment(time).fromNow();
    return( 
    <span className="time">{timeString}</span>
    );
};
const ReplyButton =()=>(
    <i className="fa fa-reply reply-button"/>
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

var testTweet ={
    message:"something about React.",
    gavatar:"xyz",
    author:{
        handle:"react_love",
        name:"React_Dev"
    },
    likes:2,
    retweets:10,
    timestamp:"2020-10-18  22:38:56"
};

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