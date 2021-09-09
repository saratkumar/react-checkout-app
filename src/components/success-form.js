import '../App.css';
function SuccessForm(props) {
    return (
        <div className="form-card">
            <h2 className="fs-title text-center">Success !</h2>
            <div className="row justify-content-center">
                <div className="col-3"> <img src="/success.png" className="fit-image" /> </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-7 text-center">
                    <h5>You Have Successfully Signed Up</h5>
                </div>
            </div>

            <pre>
                <code>
                    {props.postJSON}

                </code>
            </pre>
        </div>
    );
}

export default SuccessForm;
