import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { StyledTableCell, StyledTableRow } from "../../Schemas/makestyles";

const TableZip = ({ resultList }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">CEP</StyledTableCell>
              <StyledTableCell align="center">Logradouro</StyledTableCell>
              <StyledTableCell align="center">Localidade</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resultList &&
              resultList.map((item, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row" align="center">
                    {item.cep || "erro na busca"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.logradouro || "null"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.localidade || "null"}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableZip;
