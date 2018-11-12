This is my portfolio of projects that I've worked on.

To use this code setup the database as instructed in the projects.sql file.

###
How to setup
```

 `npm install`
 `npm run server`
 `npm run client`

```

## Notes
This will continue to be updated and modified.
Material-ui was used for the form and some styling of this project.


### Technologies Used
Javascript
React
Redux
Sagas
Material-Ui
CSS
SQL
Node
Express

### Project Page

- Displays projects that are stored in the database
- Projects will conditionally render a name, description, thumbnail, website, date completed and a tag
- Projects are linked to GitHub and open in a new window
- Sagas are used for API requests to the server

### Admin Page

- Allows the ability to add a new project to the portfolio
- Includes a drop down menu with a list of relevant tags
- Data is sent to the server and notifies the user of success or failure
- Projects are listed by name with the option to delete the project
- Includes a button that navigates to the project page
