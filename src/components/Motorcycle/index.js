import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import {
  FormControl,
  IconButton,
  InputLabel,
  NativeSelect,
  Snackbar,
  TextField,
  CardMedia,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import API from "../../services";
import { motorcicleSchema, useStyles } from "../../Schemas/schemas";
import { BootstrapInput } from "../../Schemas/makestyles";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const MotorcicleForm = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const [created, setCreated] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(motorcicleSchema),
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    setCreated(false);
  };

  const handleForm = (data) => {
    data["ano"] = data["ano"] + "";
    data["passageiros"] = value;
    API.post("/vehicle/moto", data)
      .then(reset)
      .then(() => setCreated(true))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Card className={classes.root}>
        <form onSubmit={handleSubmit(handleForm)}>
          <CardContent>
            <CardMedia
              className={classes.media}
              image="https://cdn3.colorir.com/desenhos/pintar/motocicleta-vespa_2.png"
            />
            <TextField
              margin="normal"
              variant="filled"
              label="O ano da moto"
              type="number"
              name="ano"
              size="small"
              color="primary"
              inputProps={register("ano")}
              error={!!errors.ano}
              helperText={errors.ano?.message}
            />
            <TextField
              margin="normal"
              variant="filled"
              label="O modelo da moto"
              type="text"
              name="modelo"
              size="small"
              color="primary"
              inputProps={register("modelo")}
              error={!!errors.modelo}
              helperText={errors.modelo?.message}
            />
            <TextField
              margin="normal"
              variant="filled"
              label="A marca da moto"
              type="text"
              name="marca"
              size="small"
              color="primary"
              inputProps={register("marca")}
              error={!!errors.marca}
              helperText={errors.marca?.message}
            />

            <br />

            <FormControl>
              <InputLabel htmlFor="demo-customized-select-native">
                Passageiros
              </InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                value={value}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option value="Passageiros" />
                <option value={1}>1</option>
                <option value={2}>2</option>
              </NativeSelect>
            </FormControl>
          </CardContent>

          <CardActions
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Button size="small" color="primary" type="submit">
              Registrar
            </Button>
          </CardActions>
        </form>
      </Card>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={created}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Criado com sucesso"
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
};

export default MotorcicleForm;
