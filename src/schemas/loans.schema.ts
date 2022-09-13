import * as yup from "yup";
const loansSchema = yup.object().shape({
  cpf: yup.string().required(),
  uf: yup.string().required(),
  birthDate: yup.string().required(),
  loanAmount: yup.number().required(),
  installmentValue: yup.number().required(),
});

export { loansSchema };
