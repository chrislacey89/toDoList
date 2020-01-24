import React from 'react';
import Grid from '@material-ui/core/Grid';

function About() {
  return (
    <React.Fragment>
      <h1 align='center'>About</h1>

      <Grid container justify='center' spacing={0}>
        <Grid item xs={10}>
          <subtitle1>
            This is a full stack Todo List app. It is powered by MongoDB and
            Node JS on the back end and React and Material UI on the front end.
            It includes a basic feature set of user authentication along with
            CRUD functionality to persist user generated data. This is still a
            working project and it may receive additional updates.
          </subtitle1>
        </Grid>
      </Grid>
      <div></div>
    </React.Fragment>
  );
}

export default About;
