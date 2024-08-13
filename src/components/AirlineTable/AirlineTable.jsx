import { useSelector } from "react-redux";

function AirlineTable() {
    const airlineList = useSelector(store => store.airlineList)
    console.log(airlineList);

    return (
        <div>
            <h2>Airlines At This Airport</h2>
            <table>
                <thead>
                    <tr>
                        <th>Airline Name</th>
                        <th>Airplane Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {airlineList.map(airline => {
                        return (
                            <tr>
                                <td>{airline.name}</td>
                                <td>{airline.airplaneTotal} planes</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AirlineTable;