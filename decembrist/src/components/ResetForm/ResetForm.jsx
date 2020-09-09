import React from "react";

function ResetForm() {
    return (
        <div className="reset-form">
            <h2>Oh, let me help you.</h2>
            <div className="form-info" id="form-info">
                Tell me your username or e-mail. <br/>
                I'll send you a link to get back into your account.
            </div>
            <label htmlFor="UsernameOrEmail" />
            <input type="text" name="UsernameOrEmail" id="user-key" placeholder="Username or e-mail" />
            <button className="major-button" type="button" name="Reset-password" value="Reset-password"
                    id="reset-password-button">Send
            </button>
        </div>

    )
}

export default ResetForm