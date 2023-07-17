import React, { useEffect } from "react"

const URL = 'https://jsonplaceholder.typicode.com'

/* useEffect => initial data, declared data or data accessing from API */
function Ex5(props) {

    const getPosts = async () =>
    {

    }

    // useEffect(callback function, [dependancy list])
    /* 
    React Functional component lifecycle hooks
        mount
            useEffect(() => {},[] )

        update -> state/props - dep
            useEffect(() => {},[dep])

        unmount
            useEffect(() => {
                return () => {
                    / un mount stage
                }
            },[])
        */

    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-4 text-danger">useEffect hook</h3>
            </div>
        </div>
    </div>
}

export default Ex5