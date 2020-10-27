import React, { FC, ChangeEvent, KeyboardEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

interface IAddTodoProps {
  onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const AddTodo: FC<IAddTodoProps> = ({ onChange, onKeyDown, value }) => {
  const classes = useStyles();
  return (
    <TextField
      data-cy-id="add-todo"
      className={classes.textField}
      onKeyDown={onKeyDown}
      onChange={onChange}
      value={value}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
}));
