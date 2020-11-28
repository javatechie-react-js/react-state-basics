import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



export default class StudentComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            "header": "Student Information...",
            "firstStudent": {
                "id": 101,
                "name": 'Basant',
                "score": 75,
                "division": "first"
            },
            "students": [
                {
                    "id": 102,
                    "name": 'santosh',
                    "score": 72,
                    "division": "first"
                },
                {
                    "id": 101,
                    "name": 'Jogn',
                    "score": 58,
                    "division": "Second"
                }
            ]
        }
    }
    changeState = () => {
        this.setState({
            header: "state value changed..."
        });
    }

    render() {
        //const classes = useStyles();

        return (
            // <TableContainer component={Paper}>
            //     <Table aria-label="simple table">
            //         <TableHead>
            //             <TableRow>
            //                 <TableCell align="right">Id</TableCell>
            //                 <TableCell align="right">Name</TableCell>
            //                 <TableCell align="right">Score</TableCell>
            //                 <TableCell align="right">Division</TableCell>
            //             </TableRow>
            //         </TableHead>
            //         <TableBody>
            //             {this.state.students.map((row) => (
            //                 <TableRow key={row.id}>
            //                     <TableCell align="right">{row.id}</TableCell>
            //                     <TableCell align="right">{row.name}</TableCell>
            //                     <TableCell align="right">{row.score}</TableCell>
            //                     <TableCell align="right">{row.division}</TableCell>
            //                 </TableRow>
            //             ))}
            //         </TableBody>
            //     </Table>
            // </TableContainer>

            <div>
                <button onClick={this.changeState}>click me</button>
                <p>
                    <label>{this.state.header}</label>
                </p>
            </div>

        );
    }




}