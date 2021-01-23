

function DashboardPage(props) {
    
    return (
        <div>
            <h1>Forecast</h1>
            <p>{props.appData.temp}&deg;</p>
            <p>{props.appData.description}</p>
            <p>{props.appData.wind} mph wind;</p>
            <p>{props.appData.icon && 
      <img
        src={`https://openweathermap.org/img/w/${props.appData.icon}.png`}
        alt='Current Conditions'
      />
    }</p>
    <h2>Pick Your Team</h2>
    <button onClick={() => props.team('Chiefs')}> Kansas City -3</button>
    <button onClick={() => props.team('Packers')}> Green Bay +3</button>
    
        </div>
    
    );
    
}

export default DashboardPage;