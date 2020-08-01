import React from 'views/Stock/components/node_modules/react';
import TableRow from 'views/Stock/components/node_modules/@material-ui/core/TableRow';
import TableCell from 'views/Stock/components/node_modules/@material-ui/core/TableCell';
// import CustomerDelete from './CustomerDelete'


class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
                {/* <TableCell><CustomerDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell> */}
            </TableRow>

        )
    }
}


export default Customer;