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