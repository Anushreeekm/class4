import React, { useCallback, useEffect, useState } from 'react'
import Comment from '../screen/Comment'
import ReactPaginate from 'react-paginate'

//API
const URL = "https://jsonplaceholder.typicode.com"

// const Ex9 = (props) => {}
// const Ex9 = function(props)

//useCallback will return a memorized version of callback(function) that only changes if one of the inputs (state/props) has changed.
// state => state input can change through handler functions (within components)
// props => props input can change only when the component is rendered

function Ex9(props) {
    const [comment,setComments] = useState([])

    // offset data
    const [offData,setOffData] = useState([])
    const [start,setStart] = useState(0) // starting offset
    const end =  start + props.itemPerPage; // ending offset
    const pCount = Math.ceil(Comment.length / props.itemPerPage ) /* total page count */

    // api call in callback hook
    const getComments = useCallback(() => {
        // async method
        const readComments = async () => {
            fetch(`${URL}/comments`)
            .then(out => out.json())
            .then(res => {
                console.log('comments =', res)
                setComments(res)
            }).catch(err => console.log(err.message))
        }

        readComments() // async method call
    },[])

    useEffect(() => {
        getComments() // callback ref method call
    },[])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="display-3 text-success">useCallback</h3>
                </div>
            </div>
            <div className="row">
                {
                    comment && comment.map((item,index) => {
                        return (
                            <Comment key={index} {...item} />
                        )
                    })
                }
            </div>
            <div className="row">
                <div className="col-md-12"></div>
            </div>
        </div>
    )
}

export default Ex9