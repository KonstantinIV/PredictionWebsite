
export default function PostCreator(props) {
    return <div className="post-container-postUser d-flex flex-row">
                            {props.username} 
                            <div className="post-container-postDate">
                            &nbsp;&nbsp; {props.created_at}
                            </div>
                        </div>
  }
