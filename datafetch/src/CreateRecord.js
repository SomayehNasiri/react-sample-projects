
import React from 'react'

export default class CreateRecord extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] }
    }
    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(res => this.setState({ data: res }))
    }

    captureId = (e) => {
        this.setState({ ...this.state, id: e.target.value })

    }
    captureTitle = (e) => {
        this.setState({ ...this.state, title: e.target.value })

    }
    captureBody = (e) => {
        this.setState({ ...this.state, body: e.target.value })

    }
    handleClick = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: this.state.title,
                body: this.state.body,
                userId: parseInt(this.state.id),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => this.setState({ ...this.state, data: json }));
    }

    render() {
        return (<div>
            <label>id<input onChange={this.captureId} /></label>
            <br />
            <label>title<input onChange={this.captureTitle} /></label>
            <br />
            <label>body<input onChange={this.captureBody} /></label>
            <br />
            <button onClick={this.handleClick}> Click here</button>
            <br />
            <h4>{JSON.stringify(this.state.data)}</h4>



        </div>)
    }


}