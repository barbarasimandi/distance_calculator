import React from 'react';

let Address = props => {

    return(
        <div>
            <div className="row">
                <div className="col-lg-5">
                    {
                        props.city && props.country &&
                        <div>
                            <h4 className={"text-warning"}>Address</h4>
                            <p> {props.city}, {props.country}</p>
                        </div>
                    }
                </div>
            </div>
            <div className={"row"}>
                <div className="col-lg-5">
                    {props.name_of_thoroughfare && props.number_of_thoroughfare && <p> {props.name_of_thoroughfare} {props.number_of_thoroughfare} </p>}
                </div>
            </div>
            <div className="row">
                <div className={"col-lg-5"}>
                    {props.post_code &&  <p> {props.post_code} </p>}
                </div>
            </div>
        </div>

    )
};

export default Address;
