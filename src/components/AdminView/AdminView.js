import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdminView.css';

// material-ui imports
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Admin extends Component {

    state = {
        newProject: {
            id: 4,
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: '',
            tag_id: ''
        }
    }

    handleChange = event => {
        console.log('handleChange', event.target.value)
        this.setState({
            newProject: {
                ...this.state.newProject,
                [event.target.name]: event.target.value,
            }
        });
    }

    onSubmit = event => {
        console.log('onSubmit event: ', this.state);
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PROJECTS', payload: this.state.newProject })
        this.setState({
            newProject: {
                id: this.state.newProject.id + 1,
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: ''
            }
        });
    }

    componentDidMount() {
        // Dispatch action to request the projects from the API
        this.getProjectList();
    }

    getProjectList() {
        this.props.dispatch( { type: 'GET_PROJECTS' } )
    }

    

  render() {
    return (
        <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name="name" placeholder="name" value={this.state.newProject.name} onChange={this.handleChange} />
                    <input type='text' name="description" placeholder="description" value={this.state.newProject.description} onChange={this.handleChange} />
                    <input type='text' name="thumbnail" placeholder="thumbnail" value={this.state.newProject.thumbnail} onChange={this.handleChange} />
                    <input type='text' name="website" placeholder="website" value={this.state.newProject.website} onChange={this.handleChange} />
                    <input type='text' name="github" placeholder="github" value={this.state.newProject.github} onChange={this.handleChange} />
                    <input type='text' name="date_completed" placeholder="date_completed" value={this.state.newProject.date_completed} onChange={this.handleChange} />
                    <input type='text' name="tag_id" placeholder="tag_id" value={this.state.newProject.tag_id} onChange={this.handleChange} />
                    <input type='submit' value='Add New Project' />
                </form>
                {this.props.reduxState.projects.map( (projects, index) => {
                    return (
                        <div id="projectDiv" key={index}>
                            <div id="innerDiv" key={index}>
                                <p>{projects.name}</p>
                                <p>{projects.description}</p>
                                <p>{projects.thumbnail}</p>
                                <p>{projects.website}</p>
                                <p>{projects.github}</p>
                                <p>{projects.date_completed}</p>
                                <p>{projects.tag_id}</p>
                            </div>
                        </div>
                    )
                })}
        </div>
    );
  }
}

export default connect(mapStateToProps)(Admin);

// <form onSubmit={this.onSubmit} noValidate autoComplete="off">
        // <TextField
        //   id="outlined-name"
        //   label="Name"
        //   value={this.state.name}
        //   onChange={this.handleChange('name')}
        //   margin="normal"
        //   variant="outlined"
        // />
        // <TextField
        //   id="outlined-uncontrolled"
        //   label="Uncontrolled"
        //   defaultValue="foo"
        //   margin="normal"
        //   variant="outlined"
        // />
        // </form>

        // <div className="App">
        // {/* <p>{JSON.stringify(this.props.reduxState.projects)}</p> */}