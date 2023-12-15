import React from 'react';

const Usp = () => {
    return (
        <section className='usp-section'>
            <div className='usp-one'>
                <h2 >What's different about Manage?</h2>
                <p className='text sub-text'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams. </p>
            </div>
            <div className='usp-two'>
                <div className='usp-two_containers'>
                    <div className='advantage1 advantage'>
                        <div>
                            <span className='circle'>01</span>
                        </div>
                        <h4>Track company-wide progress</h4>
                    </div>
                    <p className='text usp-text'>
                        See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.
                    </p>
                </div>

                <div className='usp-two_containers'>
                    <div className='advantage1 advantage'>
                        <div>
                            <span className='circle'>02</span>
                        </div>
                        <h4>Advanced built-in reports</h4>
                    </div>
                    <p className='text usp-text'>
                    Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.
                    </p>
                </div>

                <div className='usp-two_containers'>
                    <div className='advantage1 advantage'>
                        <div>
                            <span className='circle'>03</span>
                        </div>
                        <h4>Everything you need in one place</h4>
                    </div>
                    <p className='text usp-text'>
                    Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.
                    </p>
                </div>


            </div>
        </section>
    )
}

export default Usp;