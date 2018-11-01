import React, { Component } from "react";
import "./weather.css";
import icons from './icons';

const WeatherColumn = ({ timestamp, icon, temp, description }) => {
  const dayNameAbbr = new Date(timestamp * 1000).toString().split(' ').shift();
  return (
    <div className="col-sm-3">
      {/* <p>{dayNameAbbr}</p> */}
      <img src={icons[icon]} alt={description} title={parseInt(temp) +"° on " + dayNameAbbr + " w/ " + description} id="weatherIcon"/>
    </div>
  );
}

class Weather extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      zip: 94403
    };
  }

  componentDidMount() {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zip},us&units=imperial&appid=1074c88f231350293c937f07686ff85a`)
      .then(res => res.json())
      .then(data => {
        const { city, list } = data

        const now = new Date()
        const todayStr = `${now.getFullYear()}-${(now.getMonth()+1)}-${now.getDate()}`;
        const dataToday = list.filter(item => item.dt_txt.startsWith(todayStr)).slice(0, 1);
        const dataAtNoonNonToday = list.filter(item => !item.dt_txt.startsWith(todayStr) && item.dt_txt.endsWith('12:00:00'));

        this.setState({
          isLoading: false,
          data: dataToday.concat(dataAtNoonNonToday).slice(0, 4),
          city
        });
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          data: [],
          city: { name: 'Error' },
          err
        });
      });
  }

  render() {
    return this.state.isLoading ? this.renderLoading() : this.renderLoaded();

  }

  renderLoading() {
    return (
      <div id="weather">
        Loading...
      </div>
    );
  }



  renderLoaded() {
    const firstDay = new Date(this.state.data[0].dt * 1000).toString().split(' ').shift();
    const lastDay = new Date(this.state.data[3].dt * 1000).toString().split(' ').shift();

    return (
      <div id="weather">
        <h6>{this.state.city.name + " (" + firstDay + " - " + lastDay + ")"}</h6>
        <div className="row">
        
          {this.state.data.map(data => <WeatherColumn key={data.dt} timestamp={data.dt} temp={data.main.temp} icon={data.weather[0].icon} description={data.weather[0].description} />)}
        </div>
      </div>
    );
  }
}


export default Weather;
