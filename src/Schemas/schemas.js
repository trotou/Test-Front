import { makeStyles } from "@material-ui/core";
import * as yup from "yup";

export const carSchema = yup.object().shape({
  modelo: yup.string("Precisa ser uma string").required("campo obrigatório"),
  ano: yup
    .number("Precisa ser um número")
    .typeError("Precisa especificar um número")
    .positive("precisa ser positivo")
    .integer("Preencha sem pontos ou traços")
    .required("campo obrigatório"),
  marca: yup.string("Precisa ser uma string").required("campo obrigatório"),
});

export const changeSchema = yup.object().shape({
  payment: yup
    .number("Precisa ser um número")
    .typeError("Precisa especificar um número")
    .positive("precisa ser positivo")
    .integer("Preencha sem pontos ou traços")
    .required("campo obrigatório"),
  price: yup
    .number("Precisa ser um número")
    .typeError("Precisa especificar um número")
    .positive("precisa ser positivo")
    .integer("Preencha sem pontos ou traços")
    .required("campo obrigatório"),
});

export const motorcicleSchema = yup.object().shape({
  modelo: yup.string("Precisa ser uma string").required("campo obrigatório"),
  ano: yup
    .number("Precisa ser um número")
    .typeError("Precisa especificar um número")
    .positive("precisa ser positivo")
    .integer("Preencha sem pontos ou traços")
    .required("campo obrigatório"),
  marca: yup.string("Precisa ser uma string").required("campo obrigatório"),
});

export const zipSchema = yup.object().shape({
  first: yup
    .string()
    .max(8, "Máximo de 8 digitos")
    .required("Campo obrigatório"),
  second: yup
    .string()
    .max(8, "Máximo de 8 digitos")
    .required("Campo obrigatório"),

  third: yup
    .string()
    .max(8, "Máximo de 8 digitos")
    .required("Campo obrigatório"),
  fourth: yup
    .string()
    .max(8, "Máximo de 8 digitos")
    .required("Campo obrigatório"),
  fifth: yup
    .string()
    .max(8, "Máximo de 8 digitos")
    .required("Campo obrigatório"),
});

export const palindromeSchema = yup.object().shape({
  limit: yup
    .number("Precisa ser um número")
    .typeError("Precisa especificar um número")
    .positive("precisa ser positivo")
    .integer("Preencha sem pontos ou traços")
    .required("campo obrigatório"),
  initial: yup
    .number("Precisa ser um número")
    .typeError("Precisa especificar um número")
    .positive("precisa ser positivo")
    .integer("Preencha sem pontos ou traços")
    .required("campo obrigatório"),
});

export const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    margin: "2%",
    paddingTop: "56.25%",
  },
});
