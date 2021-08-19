import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { addBloodDonor } from "../../../Service/api";
import axios from "axios";

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "&>*": {
      marginTop: 20,
      marginBottom: 20,
    },
  },
});

const AddDonor = (e) => {
  const [donor, setBloodDonor] = useState({
    address: "",
    state: "",
    city: "",
    dob: "",
    gender: "",
    emergency: "",
    bloodgroup: "",
  });

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setBloodDonor({ ...donor, [name]: value });
    console.log(donor);
  };

  const classes = useStyles();

  const addDonorDetails = () => {
    const { address, state, city, bloodgroup, emergency, dob, gender } = donor;
    if (address && state && city && bloodgroup && emergency && dob && gender) {
      axios.post("http://localhost/bloodDonor", donor).then((res) => {});
    }
    addBloodDonor(donor);
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Register as Blood Donor</Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Blood Group
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={donor.bloodgroup}
          onChange={(e) => onValueChange(e)}
          name="bloodgroup"
          label="Blood Group"
        >
          <MenuItem value={"A+"}>A+</MenuItem>
          <MenuItem value={"A-"}>A-</MenuItem>
          <MenuItem value={"B+"}>B+</MenuItem>
          <MenuItem value={"B-"}>B-</MenuItem>
          <MenuItem value={"AB+"}>AB+</MenuItem>
          <MenuItem value={"AB-"}>AB-</MenuItem>
          <MenuItem value={"O+"}>O+</MenuItem>
          <MenuItem value={"O+"}>O-</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="address"
          value={donor.address}
        />
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={donor.state}
          onChange={(e) => onValueChange(e)}
          name="state"
          label="State"
        >
          <MenuItem value={"Andaman and Nicobar Islands"}>
            Andaman and Nicobar Islands
          </MenuItem>
          <MenuItem value={"Andhra Pradesh"}>Andhra Pradesh</MenuItem>
          <MenuItem value={"Assam"}>Assam</MenuItem>
          <MenuItem value={"Bihar"}>Bihar</MenuItem>
          <MenuItem value={"Delhi"}>Delhi</MenuItem>
          <MenuItem value={"Chattisgarh"}>Chattisgarh</MenuItem>
          <MenuItem value={"Gujarat"}>Gujarat</MenuItem>
          <MenuItem value={"Goa"}>Goa</MenuItem>
          <MenuItem value={"Maharastra"}>Maharastra</MenuItem>
          <MenuItem value={"Punjab"}>Punjab</MenuItem>
          <MenuItem value={"Karnataka"}>Karnataka</MenuItem>
          <MenuItem value={"Tamil Nadu"}>Tamil Nadu</MenuItem>
          <MenuItem value={"Telengana"}>Telengana</MenuItem>
          <MenuItem value={"Tripura"}>Tripura</MenuItem>
          <MenuItem value={"Uttar Pradesh"}>Uttar Pradesh</MenuItem>
          <MenuItem value={"West Bengal"}>West Bengal</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel>City</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="city"
          value={donor.city}
        />
      </FormControl>
      <FormControl></FormControl>
      <FormControl>
        <TextField
          name="dob"
          label="Birth Date"
          InputLabelProps={{ shrink: true, required: true }}
          value={donor.dob}
          type="date"
        />
      </FormControl>
      <FormLabel>Gender</FormLabel>
      <FormControl>
        <RadioGroup
          name="gender"
          value={donor.gender}
          onChange={(e) => onValueChange(e)}
        >
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
      <FormLabel>Are you available during Emergency?</FormLabel>
      <FormControl>
        <RadioGroup
          name="emergency"
          value={donor.emergency}
          onChange={(e) => onValueChange(e)}
        >
          <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
          <FormControlLabel value="Maybe" control={<Radio />} label="Maybe" />
        </RadioGroup>
      </FormControl>

      <Button
        variant="contained"
        onClick={() => addDonorDetails()}
        color="primary"
      >
        Register as Donor
      </Button>
    </FormGroup>
  );
};
export default AddDonor;
