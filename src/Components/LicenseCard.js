import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid, Button } from "@material-ui/core";
import { PhotoSizeSelectActual, PhotoCameraOutlined } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    height: 500,
    width: 400,
  },
  title: {
    color: "black",
    fontWeight: "bold",
    fontSize: "24px",
  },
  imageContainer: {
    height: 150,
  },
});

export default function PhotoCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Driver License
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Take a clear photo of the back of your license
        </Typography>
        <Grid
          container
          justify="center"
          className={classes.imageContainer}
          alignItems="center"
        >
          <PhotoSizeSelectActual fontSize="large" />
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" size="large" fullWidth>
              <PhotoCameraOutlined />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" color="primary" size="large" fullWidth>
              Upload a photo
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
