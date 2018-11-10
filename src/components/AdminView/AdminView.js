import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AdminView.css';

// material-ui imports
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
// import DeleteIcon from '@material-ui/icons/Delete';
// import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
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

    removeProject = (id) => {
        console.log('In delete project function', id);
        this.props.dispatch( { type: 'DELETE_PROJECT', payload: id } )
    }

    componentDidMount() {
        // Dispatch action to request the projects from the API
        this.getProjectList();
    }

    getProjectList() {
        this.props.dispatch( { type: 'GET_PROJECTS' } )
    }


    menuClick = event => {
        console.log('in menu click', event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOpen = () => {
        this.setState({ open: true });
      };

    handleClose = () => {
    this.setState({ open: false });
  };


    

  render() {
    return (
        <div>
                <form onSubmit={this.onSubmit}>
                    {/* <input type='text' name="name" placeholder="name" value={this.state.newProject.name} onChange={this.handleChange} />
                    <input type='text' name="description" placeholder="description" value={this.state.newProject.description} onChange={this.handleChange} />
                    <input type='text' name="thumbnail" placeholder="thumbnail" value={this.state.newProject.thumbnail} onChange={this.handleChange} />
                    <input type='text' name="website" placeholder="website" value={this.state.newProject.website} onChange={this.handleChange} />
                    <input type='text' name="github" placeholder="github" value={this.state.newProject.github} onChange={this.handleChange} />
                    <input type='text' name="date_completed" placeholder="date_completed" value={this.state.newProject.date_completed} onChange={this.handleChange} /> */}
                    {/* <Button type='text' name="tag_id" placeholder="tag_id" 
                        onChange={this.menuClick}>
                    Select a Tag
                    </Button> */}
                    <FormControl id="formMenu">
                    <TextField type='text' name="name" placeholder="name" value={this.state.newProject.name} onChange={this.handleChange} />
                    <TextField type='text' name="name" placeholder="description" value={this.state.newProject.description} onChange={this.handleChange} />
                    <TextField type='text' name="name" placeholder="thumbnail" value={this.state.newProject.thumbnail} onChange={this.handleChange} />
                    <TextField type='text' name="name" placeholder="website" value={this.state.newProject.website} onChange={this.handleChange} />
                    <TextField type='text' name="name" placeholder="github" value={this.state.newProject.github} onChange={this.handleChange} />
                    <TextField id="date" label="date" type="date" placeholder="date" name="date_completed" 
                        value={this.state.newProject.date_completed} onChange={this.handleChange} 
                        InputLabelProps={{
                            shrink: true,
                          }}    
                    />
                    <Select
                        open={this.state.open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={this.state.newProject.tag_id}
                        onChange={this.handleChange}
                        inputProps={{
                            tag_id: '',
                        }}
                        name="tag_id"
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
                    <Button type='submit' value='Add New Project'>
                        Add New Project
                    </Button>
                </form>
                        <Table>
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

                                // <p>{projects.description}</p>
                                // <p>{projects.thumbnail}</p>
                                // <p>{projects.website}</p>
                                // <p>{projects.github}</p>
                                // <p>{projects.date_completed}</p>
                                // <p>{projects.tag_id}</p>

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