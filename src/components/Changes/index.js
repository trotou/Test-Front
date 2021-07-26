import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import API from "../../services";
import { changeSchema, useStyles } from "../../Schemas/schemas";
import TableCashier from "../TableCashier";

const ChangesForm = () => {
  const classes = useStyles();
  const [result, setResult] = useState();
  const [hideForm, setHideForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changeSchema),
  });

  const handleForm = (data) => {
    API.post("/change", data)
      .then((response) => setResult(response.data))
      .then(() => setHideForm(true))
      .catch((e) => console.log(e));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {hideForm ? (
        <>
          <TableCashier resultList={result} />
          <br />
          <Button variant="contained" onClick={() => setHideForm(false)}>
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
                label="Escolha o valor do produto"
                type="number"
                name="price"
                size="small"
                color="primary"
                inputProps={register("price")}
                error={!!errors.price}
                helperText={errors.price?.message}
              />
              <TextField
                margin="normal"
                variant="filled"
                label="Escolha o preço a ser pago"
                type="number"
                name="payment"
                size="small"
                color="primary"
                inputProps={register("payment")}
                error={!!errors.payment}
                helperText={errors.payment?.message}
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
    </div>
  );
};

export default ChangesForm;
