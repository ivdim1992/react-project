import React, {Component} from 'react';
import {Link} from "react-router-dom";


class AdminNav extends Component{
    constructor(props){
        super(props)
    }
    record
    render() {

        return(
            <nav className= "adminNav">
                <ul>
                    <li><Link to="/admin/create">Create pizza</Link></li>

                    <li><Link to="/admin/delete/user">Delete user</Link></li>
                </ul>
            </nav>
        )
    }

}
export default AdminNav;