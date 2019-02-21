import React from "react";

class Form extends React.Component {
    render() {
        return(
            <div className={"col-lg-12"}>
                <form role={"form"} onSubmit={this.props.getDistance}>
                    <div className="row">
                        <div className="col-lg-5">
                            <div className={"form-group row"}>
                                <input className={"form-control"} type={"text"} name={"city"} placeholder={"city"} required={true}></input>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={"form-group row"}>
                                <input className={"form-control"} type={"text"} name={"country"} placeholder={"country"}></input>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className={"form-group row"}>
                                <input className={"form-control"} type={"text"} name={"post_code"} placeholder={"post_code"}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className={"form-group row"}>
                                <input className={"form-control"} type={"text"} name={"name_of_thoroughfare"} placeholder={"name_of_thoroughfare"}></input>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className={"form-group row"}>
                                <input className={"form-control"} type={"text"} name={"number_of_thoroughfare"} placeholder={"number_of_thoroughfare"}></input>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <button className={"btn btn-warning btn-outline btn-lg"}>Calculate distance</button>
                    </div>
                </form>
                <br/>
            </div>
        )
    }
}

export default Form;