import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const limits = [
  {
    value: 5,
    label: "5",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 50,
    label: "50",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 500,
    label: "500",
  },
  {
    value: 1000,
    label: "1000",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields(props) {
  const classes = useStyles();
  const [limit, setLimit] = useState(10);
  const [base, setBase] = useState("");
  // const [value, setValue] = useState({
  //   basePair: "",
  //   limit: 10
  // })

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  const validate = () => {
    props.onClick(base, limit);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(event) => event.preventDefault()}
    >
      <div>
        <TextField
          id="outlined-helperText"
          label="Base Pair"
          // defaultValue="BTCUSDT"
          value={base}
          onChange={(event) => setBase(event.target.value)}
          helperText="Some important text"
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="limit"
          value={limit}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="outlined"
        >
          {limits.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          data-type="submit"
          type="submit"
          value="Submit"
          variant="contained"
          color="primary"
          onClick={() => validate()}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
