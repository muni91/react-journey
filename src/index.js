import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';
function Tweet({ tweet }){
    return(
        <div className='tweet'>
            <Avatar hash={tweet.gavatar}/>
            <div className="content">
            <NameWithHandle author={tweet.author}/><Time time={tweet.timestamp}/>
            <Message text={tweet.message}/>
            <div className="buttons">
                <ReplyButton/>
                <RetweetButton count = {tweet.retweets}/>
                <LikeButton like_count={tweet.likes}/>
                <MoreOptionsButton/>
            </div>
        </div>
        </div>
    );
}
function Avatar({ hash }){
    var url =`${hash}`;
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
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
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

function getRetweetCount(count){
    if(count > 0){
        return(
            <span className="retweet-count">
                {count}
            </span>
        );
    }else{
        return null;
    }
}



const RetweetButton=( {count} )=>(
    <span className="retweetbutton">
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
    </span>
);
const LikeButton=({like_count})=>(
    <span className="likebutton">
        <i className="fa fa-heart"/>
        {
        like_count >0 && 
        <span className="like-count">
            {like_count}
        </span>
        }
    </span>
);
const MoreOptionsButton=()=>(
    <i className="fa fa-ellipsis-h more-options-buttton"/>
);

var testTweet ={
    message:"something about React.",
    gavatar:"https://www.gravatar.com/avatar/6f8f57715090da2632453988d9a1501b",
    author:{
        handle:"react_love",
        name:"React_Dev"
    },
    likes:2,
    retweets:10,
    timestamp:"2020-10-18  22:38:56"
};

ReactDOM.render(
    <Tweet tweet = {testTweet}/>,
    document.querySelector('#root')
);
function Message({text}){
    return(
        <div className='message'>
            {text}
        </div>
    );
}