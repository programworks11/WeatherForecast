import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component
{
    renderWeather(cityData)
    {
        //console.log("cityData");
        if(cityData)
        {
            const temps = cityData.list.map(weather => weather.main.temp);
            const pressure = cityData.list.map(weather => weather.main.pressure);
            const humidities = cityData.list.map(weather => weather.main.humidity);
            const {lon, lat} = cityData.city.coord;
            console.log("lon", "lat", lon, lat);
            return (<tr key={cityData.city.name}>
                      <td>
                          <GoogleMap lon={lon} lat={lat} />
                      </td>
                      <td>
                          <Chart data={temps} color="orange" />
                      </td>
                      <td>
                          <Chart data={pressure} color="red" />
                      </td>
                      <td>
                          <Chart data={humidities} color="blue" />
                      </td>
                    </tr>);
        }
    }
    render()
    {
        //console.log("weather list",this.props.weather);
        return (
          <table className="table table-hover">
            <thead>
              <tr>
                <th>City</th>
                <th>Temperature (K)</th>
                <th>Pressure (hPa)</th>
                <th>Humidity (%)</th>
              </tr>
            </thead>
            <tbody>
              {this.props.weather.map(this.renderWeather)}
            </tbody>
          </table>
        );
    }
}
function mapStateToProps({weather})
{
    //console.log("weather",weather);
    return {weather};
}
export default connect(mapStateToProps)(WeatherList);
