import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";

import { Todo as ITodo } from "../codegen/todos_pb";

interface ITodoProps {
  onDelete: (uuid: string) => void;
  onComplete: ({ uuid, description, done }: ITodo.AsObject) => void;
  description: string;
  uuid: string;
  done: boolean;
}

export const Todo: FC<ITodoProps> = ({
  onDelete,
  onComplete,
  uuid,
  description,
  done,
}) => {
  const classes = useStyles();

  const handleDelete = () => {
    onDelete(uuid);
  };

  const handleComplete = () => {
    onComplete({ uuid, done: !done, description }); // hacky toggle :P
  };

  return (
    <Grid item className={classes.gridItem}>
      <TextField
        variant="outlined"
        InputProps={{
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                data-cy-id="complete-todo"
                aria-label="checkbox"
                onClick={handleComplete}
              >
                {done ? (
                  <CheckBoxOutlinedIcon fontSize="small" />
                ) : (
                  <CheckBoxOutlineBlankOutlinedIcon fontSize="small" />
                )}
              </IconButton>
              <IconButton
                data-cy-id="delete-todo"
                aria-label="delete"
                onClick={handleDelete}
              >
                <DeleteOutlinedIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        className={classes.textField}
        value={description}
      />
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  gridItem: {
    width: "100%",
    marginTop: theme.spacing(4),
  },
  textField: {
    width: "100%",
  },
}));
