import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

function greetMessage() {
    return (
        <div>
            Press <FontAwesomeIcon icon={faAngleRight}/> to open sidebar and choose task.
            Or press the <FontAwesomeIcon icon={faArrowLeft}/> or <FontAwesomeIcon icon={faArrowRight}/> keys.
        </div>
    )
}

export default greetMessage();
