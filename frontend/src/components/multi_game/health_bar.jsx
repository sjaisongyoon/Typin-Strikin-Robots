import React, { Component } from 'react'

class HealthBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ownHealthBar: this.props.ownHealthBar,
            enemyHealthBar: this.props.enemyHealthBar
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.ownHealthBar !== this.props.ownHealthBar) {
            this.setState({ownHealthBar: this.props.ownHealthBar})
        }
    }
    render() {
        return(
            <div>
                myhealthbar: {this.state.ownHealthBar} enemyHealthBar: {this.state.enemyHealthBar}
            </div>
        )
    }
}

export default HealthBar;