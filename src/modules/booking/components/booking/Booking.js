import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import './Booking.scss';

class Booking extends React.Component {
    useStyles = () => makeStyles(theme => ({
        root: {
            width: '100%',
            marginTop: theme.spacing(3),
            overflowX: 'auto',
            backgroundColor: 'red'
        },
        table: {
            minWidth: 650,
            backgroundColor: 'red'
        },
    }));

    render() {
        const {bookingService} = this.props;
        const classes = this.useStyles();

        return (
            <div className="table-wrap">
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>doctor</TableCell>
                            <TableCell>hospital</TableCell>
                            <TableCell>date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookingService.items.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell>{item.doctor.name}</TableCell>
                                <TableCell>{item.hospital.name}</TableCell>
                                <TableCell>{item.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

export default Booking