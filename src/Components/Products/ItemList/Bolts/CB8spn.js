import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableLayout from "../../../Table/TableLayout";
import "../../ItemList/Table.css";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(productID, product, size, description) {
  return { productID, product, size, description };
}

const rows = [
  // createData("PCB10"," Collar Bolt", "10*10mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*15mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*20mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*25mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*30mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*35mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*40mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*55mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*80mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*mm", "8 Spanner Head"),
  // createData("PCB10"," yk Collar Bolt", "10*mm", "8 Spanner Head"),
  // createData("PCB10"," Pollution Bolt", "10*15mm", "8 Spanner Head"),
  // createData("PCB10"," Door Bolt", "10*20mm", "8 Spanner Head"),
  // createData("PCB10"," Magnet Bolt", "10*30mm", "8 Spanner Head"),
  // createData("PCB10"," Magnet Case Bolt", "10*35mm", "8 Spanner Head"),
  // createData("PCB10"," Magnet Case Bolt", "10*40mm", "8 Spanner Head"),
  // createData("PCB10"," Magnet Case Bolt", "10*45mm", "8 Spanner Head"),
  // createData("PCB10"," Magnet Case Bolt", "10*50mm", "8 Spanner Head"),
  // createData("PCB10"," Magnet Case Bolt", "10*55mm", "8 Spanner Head"),
  // createData("PCB10"," Magnet Case Bolt", "10*75mm", "8 Spanner Head"),
  // createData("PCB10"," Magnet Case Bolt", "10*95mm", "8 Spanner Head"),
  // createData("PCB10"," Magnet Case Bolt", "10*105mm", "8 Spanner Head"),
  // createData("PCB10"," Magnet Case Bolt", "10*mm", "8 Spanner Head"),
  createData("PCB10", " Magnet Case Bolt", "10*mm", "8 Spanner Head"),
];

  
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


const data = [
  {
    productID: "PCB10",
    product: "Magnet Case Bolt",
    size: "10mm",
    description: "8 spanner heads",
  },
];

function CB8spn() {
  const classes = useStyles();

  return (
    // <div className="table--container">
    //   <div className="_table">
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="customized table">
              <TableHead>
                <StyledTableRow>
                  {data.map((column) => (
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
              
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            // rowsPerPage={rowsPerPage}
          />
        </Paper>
    //   </div>
    // </div>
  );
}

export default CB8spn;
