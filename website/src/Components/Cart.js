import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  return (
    <TableContainer component={Paper} className="shadow-lg rounded-lg overflow-hidden">
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead className="bg-gray-800 text-white">
          <TableRow>
            <TableCell align="center" colSpan={3} className="font-bold text-2xl">
              Details
            </TableCell>
            <TableCell align="right" className="font-bold text-2xl">
              Price
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Desc</TableCell>
            <TableCell align="right" className="font-medium">Qty.</TableCell>
            <TableCell align="right" className="font-medium">Unit</TableCell>
            <TableCell align="right" className="font-medium">Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc} className="hover:bg-gray-100">
              <TableCell>{row.desc}</TableCell>
              <TableCell align="right">{row.qty}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{ccyFormat(row.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2} className="font-semibold">Subtotal</TableCell>
            <TableCell align="right" className="font-semibold">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-semibold">Tax</TableCell>
            <TableCell align="right" className="font-semibold">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right" className="font-semibold">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} className="font-semibold">Total</TableCell>
            <TableCell align="right" className="font-semibold">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
