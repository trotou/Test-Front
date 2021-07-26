import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import API from "../../services";
import { useStyles, zipSchema } from "../../Schemas/schemas";
import { useState } from "react";
import TableZip from "../TableZip";

const ZipForm = () => {
  const classes = useStyles();
  const [result, setResult] = useState();
  const [hideForm, setHideForm] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(zipSchema),
  });

  const handleForm = (data) => {
    API.post("/zipcode", data)
      .then((res) => setResult(res.data.resultList))
      .then(() => setHideForm(true))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {hideForm ? (
        <>
          <TableZip resultList={result} />
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
                label="Primeiro CEP"
                type="text"
                name="first"
                size="small"
                color="primary"
                inputProps={register("first")}
                error={!!errors.first}
                helperText={errors.first?.message}
              />
              <TextField
                margin="normal"
                variant="filled"
                label="Segundo CEP"
                type="text"
                name="second"
                size="small"
                color="primary"
                inputProps={register("second")}
                error={!!errors.second}
                helperText={errors.second?.message}
              />
              <TextField
                margin="normal"
                variant="filled"
                label="Terceiro CEP"
                type="text"
                name="third"
                size="small"
                color="primary"
                inputProps={register("third")}
                error={!!errors.third}
                helperText={errors.third?.message}
              />
              <TextField
                margin="normal"
                variant="filled"
                label="Quarto CEP"
                type="text"
                name="fourth"
                size="small"
                color="primary"
                inputProps={register("fourth")}
                error={!!errors.fourth}
                helperText={errors.fourth?.message}
              />
              <TextField
                margin="normal"
                variant="filled"
                label="Quinto CEP"
                type="text"
                name="fifth"
                size="small"
                color="primary"
                inputProps={register("fifth")}
                error={!!errors.fifth}
                helperText={errors.fifth?.message}
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

export default ZipForm;
