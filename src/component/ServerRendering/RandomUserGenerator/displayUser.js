import React from "react";
const DisplayUser = (props)=>{
    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <div
                        className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={props.userPhoto} alt="" />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.userPhoneNum}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.userEmail}</p>
                            <p>
                                {props.userFirstName}
                            </p>
                            <p>
                                {props.userLastName}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default DisplayUser;