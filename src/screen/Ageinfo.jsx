import React, { memo } from "react";


const Ageinfo = memo((props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <h4 className="text-primary">Ageinfo</h4>
                <h5 className="text-success"> { props.info.result }</h5>
            </div>
        </div>
    )
})

export default Ageinfo