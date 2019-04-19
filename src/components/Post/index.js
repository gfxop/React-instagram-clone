import React, { Component } from "react";

    import "./Post.css";

    class Post extends Component {
        constructor(props){
            super(props);
        }
      render() {
        const nickname = this.props.nickname;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;

        return (
          <article className="Post" ref="Post">

                <div className="Post-user">
                    <img className="Post-user-avatar" src={avatar} alt={nickname} />
                    <span className="Post-user-nickname">{nickname}</span>
                </div>

                <div className="Post-image-bg">
                    <img className="Post-image-bg" alt={caption} src={image} />
                    <p className="Post-caption"><strong>{nickname}</strong>{caption}</p>
                </div>

          </article>
        );
      }
    }
    export default Post;