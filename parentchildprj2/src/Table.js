


export default function Table(props){
return(<div>
     <h1> you Selected {JSON.stringify(props.row)}</h1>
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
                   
                        {props.data.map(row=>(<tr onClick={()=>props.handleRowClick(row)}> <td>{row.id}</td><td>{row.userId}</td><td>{row.title}</td><td>{row.completed?"true":"false"}</td> </tr>))}
                   
                    
                </tbody>
            </table>
</div>)

}