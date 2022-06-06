import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import { addInvoice } from "../../../store/invoiceSlice";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import Slide from "@material-ui/core/Slide";
import { useSnackbar } from "notistack";
import { getJobs, addSalaryScale } from "../../store/salaryScaleSlice";
import { useEffect } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import Input from "@material-ui/core/Input";
import AccountTreeOutlinedIcon from "@material-ui/icons/AccountTreeOutlined";
import { FieldArray, Field, Form, Formik } from "formik";
import { Card, CardContent } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import PostAddIcon from "@material-ui/icons/PostAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
  button: {
    margin: theme.spacing(1),
    // padding: theme.spacing(4),
  },
}));

function ShippingTab(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  // const [amount, setAmount] = useState("");

  const [jobs, setJobs] = useState([]);
  // const [jobId, setJobId] = useState(0);

  // const [employeeLevel, setEmployeeLevel] = useState("");

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleCreateInvoiceMessageClick = () => {
    enqueueSnackbar(
      "Invoice created successfully",
      { variant: "success" },
      {
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      },
      { TransitionComponent: Slide }
    );
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    getJobs().then((response) => {
      console.log("jobs response in approve: ", response);
      // setJobs(response);
    });
  }, []);

  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={{
            entities: [{ jobId: 0, amount: 0, employeeLevel: " " }],
          }}
          onSubmit={async (values) => {
            console.log("values: ", values);
            return dispatch(addSalaryScale(values));
          }}
        >
          {({ values, isSubmitting }) => (
            <Form autoComplete="off">
              <Grid container>
                <Grid item>
                  <FieldArray name="entities">
                    {({ push, remove, Formik }) => (
                      <React.Fragment>
                        {values?.entities.map((_, index) => (
                          <Grid container item key={index}>
                            <Grid item>
                              <Field
                                name={`entities[${index}].jobId`}
                                id="entities.jobId"
                                component={TextField}
                                label="JobId"
                              />
                            </Grid>

                            <Grid item>
                              <Field
                                name={`entities[${index}].amount`}
                                id="entities.amount"
                                component={TextField}
                                type="number"
                                label="amount"
                              />
                            </Grid>

                            <Grid item>
                              <Field
                                name={`entities[${index}].employeeLevel`}
                                id="entities.employeeLevel"
                                component={TextField}
                                label="employeeLevel"
                              />
                            </Grid>

                            <Grid item>
                              <Button onClick={() => remove(index)}>
                                Delete
                              </Button>
                            </Grid>
                          </Grid>
                        ))}

                        <Grid item>
                          <Button
                            onClick={() =>
                              push({ jobId: 0, amount: 0, employeeLevel: "" })
                            }
                          >
                            Add
                          </Button>
                        </Grid>
                      </React.Fragment>
                    )}
                  </FieldArray>
                </Grid>
              </Grid>

              <pre>{JSON.stringify({ values }, null, 4)}</pre>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}

export default ShippingTab;
