import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { setSearch } from "../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    marginTop: "80px",
    marginLeft: "20px",
    marginRight: "20px",
    display: "flex",
    alignItems: "center",
    width: "700px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: "10px",
  },
  divider: {
    height: "28px",
    margin: "4px",
  },
}));

const searchSchema = Yup.object().shape({
  search: Yup.string()
    .required()
    .trim(),
});

export default function SearchBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Formik
        onSubmit={(data) => dispatch(setSearch(data.search))}
        initialValues={{ search: "" }}
        validationSchema={searchSchema}
      >
        {({ values }) => (
          <Form>
            <Paper className={classes.root}>
              <Field
                className={classes.input}
                placeholder="Search Tenor"
                name="search"
                value={values.search}
                as={InputBase}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Form>
        )}
      </Formik>
    </div>
  );
}
