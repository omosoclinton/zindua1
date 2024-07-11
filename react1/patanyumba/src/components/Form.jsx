import React from "react";

const Form = () => {
    return(
        <>
            <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Size</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Price</label>
                        <input type="number" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Add house</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default Form