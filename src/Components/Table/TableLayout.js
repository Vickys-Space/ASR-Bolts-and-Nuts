import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "productID", label: "ID", minWidth: 50, align: "center" },
  { id: "product", label: "Product", minWidth: 50, align: "center" },
  {
    id: "size",
    label: "Size\u00a0(mm)",
    minWidth: 50,
    align: "center",
  },
  {
    id: "description",
    label: "Description",
    minWidth: 50,
    align: "center",
  },
];

function createData(productID, product, size, description) {
  // const density = population / size;
  return { productID, product, size, description };
}

const rows = [
  createData("PCB10", " Collar Bolt", "10*10mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*15mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*20mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*25mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*30mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*35mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*40mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*55mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*80mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*mm", "8 Spanner Head"),
  createData("PCB10", " yk Collar Bolt", "10*mm", "8 Spanner Head"),
  createData("PCB10", " Pollution Bolt", "10*15mm", "8 Spanner Head"),
  createData("PCB10", " Door Bolt", "10*20mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Bolt", "10*30mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Case Bolt", "10*35mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Case Bolt", "10*40mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Case Bolt", "10*45mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Case Bolt", "10*50mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Case Bolt", "10*55mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Case Bolt", "10*75mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Case Bolt", "10*95mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Case Bolt", "10*105mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Case Bolt", "10*mm", "8 Spanner Head"),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <div className="table--container">
      <div className="_table">
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="customized table">
              <TableHead>
                <StyledTableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <StyledTableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <StyledTableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </StyledTableCell>
                          );
                        })}
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}
