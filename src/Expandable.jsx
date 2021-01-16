import React from "react";

const Expandable = ComposedComponent =>
    class Expandable extends React.Component {
        constructor(props) {
            super(props);
            const collapsed = (props.hidden && props.hidden === true);
            this.state = {collapsed};
            this.expandCollapse = this.expandCollapse.bind(this);

        }
        expandCollapse(e) {
            e.preventDefault();
            let collapsed = !this.state.collapsed;
            this.setState({collapsed});
        }

        render() {
            return (
                <div>
                    <ComposedComponent expandCollapse={this.expandCollapse} {...this.state} {...this.props}/>
                </div>
            );
        }
    };

Expandable.propTypes = {};

export default Expandable;
Dear Ronzin Nikita,

    You are invited to attend an interview for the following vacancy:
    Regular JS React Developer at Saint Petersburg
<https://career.luxoft.com/r/?vr=VR-55847&location=Saint+Petersburg&utm_source=luxhire&utm_medium=email&utm_term=>

The interview is scheduled on
18 Dec 2020 at 14:00, Europe/Moscow time


To join the meeting - follow the link below:


    Join online meeting <https://lct.luxoft.com/zoominterview/7728310>

Join by phone <https://lct.luxoft.com/zoominterview/7728310/cbc>

Please confirm, in advance, your participation in the interview.
    If you are not able to attend - please notify me via email.


    Please share your feedback about the process after the interview
<http://survey.usabilla.com/live/s/5f978c360921884a541b929c?reset&id=HR-7728310>



Thank you


Anastasiya Pik
Recruitment Specialist

M: +7(904)5818503
T: +7 (812) 648-10-53 ext. (850) 5004