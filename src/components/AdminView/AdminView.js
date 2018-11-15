import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdminView.css';
import { Link } from 'react-router-dom';


// material-ui imports
// import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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

    // handle changes in the form inputs
    handleChange = event => {
        console.log('handleChange', event.target.value)
        this.setState({
            newProject: {
                ...this.state.newProject,
                [event.target.name]: event.target.value,
            }
        });
    }

    // submit project information from form
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

    // remove project
    removeProject = (id) => {
        console.log('In delete project function', id);
        this.props.dispatch( { type: 'DELETE_PROJECT', payload: id } )
    }

    // display projects on page load
    componentDidMount() {
        // Dispatch action to request the projects from the API
        this.getProjectList();
    }

    // get projects from index
    getProjectList() {
        this.props.dispatch( { type: 'GET_PROJECTS' } )
    }

    // handle open of drop down menu
    handleOpen = () => {
        this.setState({ open: true });
      };
    
    // handle close of drop down menu
    handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
        <div id="mainDiv">
            <Button id="projectButton"><Link to="/">Projects</Link></Button>
            <div>
                <h1>Admin</h1>
            </div>
            <br></br>
            <h3>Add a new project</h3>
                <form id="formInput" onSubmit={this.onSubmit}>
                    <FormControl id="formMenu">
                    <TextField type='text' label="name" name="name" placeholder="name" margin="normal" variant="outlined"
                        value={this.state.newProject.name} onChange={this.handleChange} />
                    <TextField type='text' label="description" placeholder="description" multiline name="description" margin="normal" variant="outlined" 
                        value={this.state.newProject.description} onChange={this.handleChange} />
                    <TextField type='text' label="thumbnail" name="thumbnail" placeholder="thumbnail" margin="normal" variant="outlined"
                        value={this.state.newProject.thumbnail} onChange={this.handleChange} />
                    <TextField type='url' label="website" name="website" placeholder="website" margin="normal" variant="outlined"
                        value={this.state.newProject.website} onChange={this.handleChange} />
                    <TextField type='url' label="github" name="github" placeholder="github" margin="normal" variant="outlined" 
                        value={this.state.newProject.github} onChange={this.handleChange} />
                    <TextField id="date" label="date" type="date" placeholder="date" name="date_completed" margin="normal" variant="outlined"
                        value={this.state.newProject.date_completed} onChange={this.handleChange} 
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
                    <br></br>
                    <Select
                        variant="outlined"
                        label="technology"
                        placeholder="None"
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.newProject.tag_id}
                        onChange={this.handleChange}
                        inputProps={{ tag_id: '', }}
                        name="tag_id"
                        input={
                            <OutlinedInput
                              labelWidth={0}
                              name="technology"
                              id="tech-field"
                              label="technology"
                              placeholder="technology"
                            />
                          }
                    >
                           <MenuItem value=''>
                           <em>None</em>
                           </MenuItem>
                            <MenuItem value={1}>React</MenuItem> 
                            <MenuItem value={2}>jQuery</MenuItem> 
                            <MenuItem value={3}>Node</MenuItem> 
                            <MenuItem value={4}>SQL</MenuItem> 
                            <MenuItem value={5}>Redux</MenuItem> 
                            <MenuItem value={6}>HTML</MenuItem> 
                        </Select>
                    </FormControl>
                    <Button margin="normal" variant="outlined" type='submit'>
                        Add New Project
                    </Button>
                </form>
                        <Table id="projectTable">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.reduxState.projects.map( (projects, index) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>{projects.name}</TableCell>
                                            <TableCell><Button onClick={() => this.removeProject(projects.id) }>Delete</Button></TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
        </div>
    );
  }
}

export default connect(mapStateToProps)(Admin);
