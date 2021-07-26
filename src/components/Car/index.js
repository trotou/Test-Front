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
import { carSchema, useStyles } from "../../Schemas/schemas";
import { BootstrapInput } from "../../Schemas/makestyles";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

const CarForm = () => {
  const classes = useStyles();
  const [value, setValue] = useState(2);
  const [created, setCreated] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(carSchema),
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClose = () => {
    setCreated(false);
  };

  const handleForm = (data) => {
    data["ano"] = data["ano"] + "";
    data["portas"] = value;
    API.post("/vehicle/cars", data)
      .then(reset)
      .then(() => setCreated(true))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <Card className={classes.root}>
        <form onSubmit={handleSubmit(handleForm)}>
          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/yztAg8h.png"
          />
          <CardContent>
            <TextField
              margin="normal"
              variant="filled"
              label="O ano do carro"
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
              label="O modelo do carro"
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
              label="A marca do carro"
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
                Portas
              </InputLabel>

              <NativeSelect
                id="demo-customized-select-native"
                value={value}
                onChange={handleChange}
                input={<BootstrapInput />}
              >
                <option value="Portas" />
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </NativeSelect>
            </FormControl>
            <br />
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

export default CarForm;
