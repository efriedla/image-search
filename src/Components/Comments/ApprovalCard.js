import React from 'react';


const ApprovalCard = (props) => {
 console.log(props.children)
    return(
        <div>
            <div class="ui cards">
                <div class="card">
                    <div className="content">
                        {props.children}
                    </div>
                </div>
                <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui basic green button">Approve</div>
                    <div class="ui basic red button">Decline</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCard;