import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import { ContactMail, PermIdentity, RecentActors } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    height: 500,
    width: 400,
  },
  title: {
    color: (props) => props.primaryColor,
    fontWeight: "bold",
    fontSize: "24px",
  },
  subTitle: {
    color: (props) => props.primaryColor,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
  svgContainer: {
    paddingTop: 10,
  },
  svgItem: {
    border: "1px solid lightgrey",
    borderRadius: 5,
    padding: 5,
  },
  svg: {
    display: "flex",
    justifyContent: "center",
  },
});

export default function PhotoCard(props) {
  const classes = useStyles(props);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Upload a photo ID
        </Typography>
        <Typography style={{ color: props.secondaryColor }} gutterBottom>
          We require a photo of a government ID to verify your identity.
        </Typography>
        <Typography className={classes.subTitle} gutterBottom>
          Choose 1 of the following options
        </Typography>
        <Grid
          container
          spacing={4}
          justify="center"
          className={classes.svgContainer}
        >
          <Grid item>
            <div className={classes.svgItem}>
              <div className={classes.svg}>
                <ContactMail fontSize="large" color="primary" />
              </div>
            </div>
            <Typography
              style={{ color: props.secondaryColor }}
              gutterBottom
              component="p"
            >
              Driver License
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.svgItem}>
              <div className={classes.svg}>
                <PermIdentity fontSize="large" color="primary" />
              </div>
            </div>
            <Typography
              style={{ color: props.secondaryColor }}
              gutterBottom
              component="p"
            >
              National ID
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.svgItem}>
              <div className={classes.svg}>
                <RecentActors fontSize="large" color="primary" />
              </div>
            </div>
            <Typography
              style={{ color: props.secondaryColor }}
              gutterBottom
              component="p"
            >
              Passport
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
