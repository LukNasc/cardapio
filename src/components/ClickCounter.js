import React from 'react';
class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalClicks: 0,
            isChecked: false
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState(state => ({
            isChecked: !state.isChecked,
            totalClicks: state.totalClicks + 1
        }))
    }

    render() {
        const { state } = this;
        return (
            <div>
                <input type="checkbox" checked={state.isChecked} onChange={this.onChange} />
                <div id="check-status">
                    {state.isChecked ? 'On' : "Off"}
                </div>
                <div>
                    <strong>Clicks: {state.totalClicks}</strong>
                </div>
            </div>
        )
    }
}
export default ClickCounter;