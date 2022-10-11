import React, {useState} from "react";
import Button from "./button";
const Feedback = () => {
    const [goodFeedBack, setFeedBack] = useState(0);
    const [badFeedBack, setBadFeedBack] = useState(0);
    const goodReview = ()=>{
        setFeedBack(goodFeedBack + 1);
    }
    const badReview = ()=>{
        setBadFeedBack(badFeedBack + 1)
    }

    return (
        <div>
            <h2>Give FeedBack</h2>
            <Button clicks={goodReview} text="Good Feedback">
            </Button>
            <Button clicks={badReview} text="Bad Feedback">
            </Button>

            <p>
                Unicafe company has {goodFeedBack} Goodfeedback
            </p>

            <p>
                Unicafe company has {badFeedBack} Badfeedback
            </p>
            <p>
               The total feedback is {goodFeedBack + badFeedBack}
            </p>
        </div>
    )
}
export default Feedback;