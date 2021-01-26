

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
    <div className="Button">
      <button onClick={() => props.team('Chiefs')}> Kansas City</button>
      &nbsp;&nbsp;
      <button onClick={() => props.team('Buccaneers')}> Tampa Bay</button>
    </div>

    <h2>Confirm Your Pick</h2>
    <div className="Button">
      <button onClick={()=>{ alert('You are confirmed CHIEFS'); }}>KC Chiefs</button>
      &nbsp;&nbsp;
      <button onClick={()=>{ alert('You are confirmed BUCS'); }}>TB Bucs</button>
    </div>
        </div>
    
        
  );
   
}

export default DashboardPage;