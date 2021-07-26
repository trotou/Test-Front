import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import API from "../../services";
import { palindromeSchema, useStyles } from "../../Schemas/schemas";
import { OutsideDiv, ResultDiv } from "./styles";

const PalindromesForm = () => {
  const classes = useStyles();
  const [result, setResult] = useState();
  const [hideForm, setHideForm] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(palindromeSchema),
  });

  const handleForm = (data) => {
    API.post("/palindromes", data)
      .then((response) => setResult(response.data))
      .then(reset)
      .then(() => setHideForm(true))
      .catch((e) => console.log(e));
  };

  return (
    <OutsideDiv>
      {hideForm ? (
        <>
          <ResultDiv>
            {result &&
              result.data.map((item, i) => (
                <Card style={{ margin: "0.5%", padding: "0.3%" }} key={i}>
                  {item}
                </Card>
              ))}
          </ResultDiv>

          <Button
            variant="contained"
            onClick={() => setHideForm(false)}
            style={{ margin: "2%" }}
          >
            Gerar novamente
          </Button>
        </>
      ) : (
        <Card className={classes.root}>
          <form onSubmit={handleSubmit(handleForm)}>
            <CardContent>
              <TextField
                margin="normal"
                variant="filled"
                label="Escolha um número inicial"
                type="number"
                name="initial"
                size="small"
                color="primary"
                inputProps={register("initial")}
                error={!!errors.initial}
                helperText={errors.initial?.message}
              />
              <TextField
                margin="normal"
                variant="filled"
                label="Escolha o número final"
                type="number"
                name="limit"
                size="small"
                color="primary"
                inputProps={register("limit")}
                error={!!errors.limit}
                helperText={errors.limit?.message}
              />
            </CardContent>

            <CardActions
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Button size="small" color="primary" type="submit">
                Gerar
              </Button>
            </CardActions>
          </form>
        </Card>
      )}
    </OutsideDiv>
  );
};

export default PalindromesForm;
