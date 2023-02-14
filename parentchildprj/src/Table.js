import React from 'react'
export default class Table extends React.Component{

    constructor(props){
        super(props);
        

    }
   
    render(){
        return (<div>
            <h1> you Selected {JSON.stringify(this.props.row)}</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <td >
                            ID
                        </td>
                        <td>
                            UserID
                        </td>
                        <td>
                            Title
                        </td>
                        <td>
                            ComponentID
                        </td>
                    </tr>

                </thead>
                <tbody>
                   
                        {this.props.data.map(row=>(<tr onClick={()=>this.props.handleRowClick(row)}> <td>{row.id}</td><td>{row.userId}</td><td>{row.title}</td><td>{row.completed?"true":"false"}</td> </tr>))}
                   
                    
                </tbody>
            </table>
        </div>)
    }
}