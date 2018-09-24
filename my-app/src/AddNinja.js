import React, {Component} from 'react';
class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {

    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleChange}/><br/>
                    <label htmlFor="age">Age</label>
                    <input type="text" id="age" onChange={this.handleChange}/><br/>
                    <label htmlFor="belt">Belt</label>
                    <input type="text" id="belt" onChange={this.handleChange}/><br/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja