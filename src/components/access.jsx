import React, { useState } from "react";
import { getStaffs } from "../UseFetch";
import { useHistory } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  input: {
    marginTop: "6%",
    backgroundColor: "#E5E5E5",
    width: "250px",
  },
  button: {
    marginTop: "4%",
    backgroundColor: "#FAD000",
    borderRadius: "30px",
    width: "150px",
  },
  p: {
    color: "#C4C4C4",
  },
  h1: {
    color: "#234C5B",
    fontSize: "50px",
    margin: "5% 0 0 0",
  },
}));

const Access = () => {
  const [user, setUser] = useState("");
  const [idUser, setIdUser] = useState("");
  const history = useHistory();

  async function searchUserinData() {
    try {
      const response = await getStaffs(user);
      setIdUser(response[0].staffid);
      history.push("/dashboard");
    } catch (error) {
      alert("Por Favor Revise sus datos y vuelta a intentar");
    }
  }

  async function searchUserinData() {
    try {
      const response = await getStaffs(user);
      const obj = new Object();
      obj.staffid = response[0].staffid;
      obj.name = response[0].firstname;
      setIdUser(obj);
      history.push("/dashboard");
    } catch (error) {
      alert("Por Favor Revise sus datos y vuelta a intentar");
    }
  }

  const classes = useStyles();

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <h1 className={classes.h1}>Task Manager</h1>
      <p className={classes.p}>4040apps</p>
      <TextField
        className={classes.input}
        type="email"
        onChange={(e) => {
          setUser(e.target.value);
        }}
        id="outlined-basic"
        label="correo"
        variant="outlined"
      />

      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={searchUserinData}
        type="submit"
      >
        Ingresar
      </Button>
    </Grid>
  );
};

export default Access;
