import React from "react";
import {Button} from "react-bootstrap";

class MenuButton extends React.Component {
    componentWillReceiveProps(nextProps) {
        const collapsed = (nextProps.collapsed && nextProps.collapsed === true);
        this.setState({...collapsed});
    }

    render() {
        const {children, collapsed, txt, expandCollapse} = this.props;
        return (
            <div className="pop-button">
                <Button onClick={expandCollapse}>{txt}</Button>
                {
                    !collapsed? <div className="pop-up">
                        {children}
                    </div> :
                        ""
                }

            </div>
        );
    }
}

MenuButton.propTypes = {};

export default MenuButton;