import React from "react";
import NavBar from "../components/NavBar";

const Events = () => {
    return (
        <>
            <NavBar />

            <div className="list-group">
                <h3 className="fw-bold">Past and Upcoming Events</h3>
                <ul className="list-group list-group-light mb-3">
                    <li className="list-group-item">
                        <h5 className="fw-bold">May Monthly Meeting</h5>
                        <p className="text-muted mb-2 fw-bold">12 May 2024</p>
                        <p className="text-muted mb-0">
                            The meeting started  at 14:00 hrs. It was led by our able chair Vincent. All members
                            were present and they all joined in the first 10 minutes ofvthe meeting.
                            In the meeting, we discussed the agenda of the meeting. It was agreed that all
                            members should attend the meeting after they have eaten. This is to reduce the budget
                            of ordering full-course meals.
                        </p>
                    </li>
                    <li className="list-group-item">
                        <h5 className="fw-bold">June Monthly Meeting</h5>
                        <p className="text-muted mb-2 fw-bold">17 June 2024</p>
                        <p className="text-muted mb-0">
                            The meeting started  at 14:00 hrs. It was led by Patron Dennis. All members
                            were present and they all joined in the first 10 minutes of the meeting.
                            In the meeting, we discussed the agendas of the meeting. It was agreed that all
                            members should contribute 200 shillings to a trip to Kajiado. This is to facilitate
                            members to view our investment options.
                        </p>
                    </li>
                    <li className="list-group-item">
                        <h5 className="fw-bold">July Monthly Meeting</h5>
                        <p className="text-muted mb-2 fw-bold">20 July 2024</p>
                        <p className="text-muted mb-0">
                            The meeting started  at 14:00 hrs. It was led by our able chair Vincent. 5 members
                            were present. One was absent with apology. And the other was unaivalble.
                            In the meeting, we discussed the investments options we had. It was agreed that all
                            members should plan on increasing their monthly contributions so that we can secure our 
                            dreams.
                        </p>
                    </li>
                    <li className="list-group-item">
                        <h5 className="fw-bold">August Monthly Meeting</h5>
                        <p className="text-muted mb-2 fw-bold">20 August 2024</p>
                        <p className="text-muted mb-0">
                            <ul>
                                <li>Venue: Safari Park</li>
                                <li>Time: 14:00; 11th August 2024</li>
                                <li>Agenda packet will be sent to emails</li>
                            </ul>
                        </p>
                    </li>
                </ul>
                <a className="btn btn-outline-dark btn-rounded w-100" href="#" role="button" data-mdb-ripple-init data-ripple-color="dark">View all</a>
            </div>
        </>
    )
}

export default Events;