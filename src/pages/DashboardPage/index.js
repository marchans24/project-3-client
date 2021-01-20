
function DashboardPage(props) {
    console.log(props);
    return (
        <div>
            <h1>Dashboard</h1>
            <p>{props.appData.temp}</p>

            
        </div>
    );
}

export default DashboardPage;