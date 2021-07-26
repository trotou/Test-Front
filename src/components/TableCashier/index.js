import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { StyledTableCell, StyledTableRow } from "../../Schemas/makestyles";

const TableCashier = ({ resultList }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Valor</StyledTableCell>
              <StyledTableCell align="center">Pago</StyledTableCell>
              <StyledTableCell align="center">Min. Notas</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resultList && (
              <StyledTableRow key={resultList.data}>
                <StyledTableCell component="th" scope="row" align="center">
                  {resultList.data.price}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {resultList.data.payment}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {resultList.data.sum}
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <br />

      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">R$ 1</StyledTableCell>
              <StyledTableCell align="center">R$ 10</StyledTableCell>
              <StyledTableCell align="center">R$ 100</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {resultList && (
              <StyledTableRow key={resultList.data}>
                <StyledTableCell align="center">
                  {resultList.data.bills.one}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {resultList.data.bills.ten}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {resultList.data.bills.hundred}
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableCashier;
