import React from "react"

function Comment(props) {
    return(
        <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="card mt-2 mb-2">
                <div className="card-header">
                    <h5 className="text-center"> { props.id } { props.name }</h5>
                </div>
                <div className="card-body">
                    <p className="text-secondary style={{ height:3000px }} text-justify"> { props.body } </p>
                </div>
                <div className="card-footer">
                    <p className="text-success float-end"> Post id = { props.postId }</p>
                </div>
            </div>
        </div>
    )
}

export default Comment