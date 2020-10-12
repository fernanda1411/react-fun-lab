import React from 'react';

class ComponentTest extends React.Component {
    constructor(props) {
        console.log('ComponentTest - constructor')
        super(props);
        this.state = {count: 1}
        this.updateCount = this.updateCount.bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('ComponentTest - getDerivedStateFromProps')
        return prevState;
    }

    shouldComponentUpdate() {
        console.log('ComponentTest - shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log('ComponentTest - getSnapshotBeforeUpdate')
        return null;
    }

    componentDidMount() {
        console.log('ComponentTest - componentDidMount')
    }
    
    componentDidUpdate() {
        console.log('ComponentTest - componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('ComponentTest - componentWillUnmount')
    }

    updateCount() {
        console.log('ComponentTest - updateCount')
        this.setState((state) => ({count: state.count + 1}))
      }
    
    render() {
        console.log('ComponentTest - render')
        return (
            <div>
                <h1>ComponentTest</h1>
                <button onClick={this.updateCount}>{this.state.count}</button>
            </div>
        )
    }
}

export default ComponentTest;