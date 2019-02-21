import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Address from './components/Address';
import Distance from './components/Distance';
import ErrorBoundary from './components/ErrorBoundary';
import API_KEY from './keys/API_KEY'

const base_url = `https://api.opencagedata.com/geocode/v1/json`;

class App extends Component {
    state = {
        city: undefined,
        country: undefined,
        post_code: undefined,
        name_of_thoroughfare: undefined,
        number_of_thoroughfare: undefined,
        current_coordinates: undefined
    };

    getDistance = async (e) => {
        e.preventDefault();
        e.persist();

        const city = e.target.elements.city.value;
        const post_code = e.target.elements.post_code.value;
        const name_of_thoroughfare = e.target.elements.name_of_thoroughfare.value;
        const number_of_thoroughfare = e.target.elements.number_of_thoroughfare.value;

        const api_call = await fetch(`${base_url}?q=${city}%2C%20${name_of_thoroughfare}%20${number_of_thoroughfare}&key=${API_KEY}&language=en&pretty=1`);
        const data = await api_call.json();

        const country = e.target.elements.country.value ? e.target.elements.country.value : data.results[0].components.country;

        const current_coordinates = {
            latitude: parseFloat(data.results[0].geometry.lat).toFixed(6),
            longitude: parseFloat(data.results[0].geometry.lng).toFixed(6)
        };

        if (data.status.code === 200) {

            console.log(data);

            this.setState({
                city: city,
                country: country,
                post_code: post_code,
                name_of_thoroughfare: name_of_thoroughfare,
                number_of_thoroughfare: number_of_thoroughfare,
                current_coordinates: current_coordinates
            })
        } else {
            this.setState({
                city: undefined,
                country: undefined,
                post_code: undefined,
                name_of_thoroughfare: undefined,
                number_of_thoroughfare: undefined,
                current_coordinates: undefined
            })
        }
    };

    render() {
        return (
         <div className={"wrapper wrapper-content"}>
             <div className={"container"}>
                 <div className="col-lg-12">
                     <div className="ibox ">
                         <div className="ibox-title">
                             <Title/>
                         </div>
                         <div className="ibox-content">
                            <Form
                                getDistance={this.getDistance}
                            />
                            <div className={"row"}>
                                 <div className={"col-lg-6"}>
                                    <Address
                                        city={this.state.city}
                                        country={this.state.country}
                                        post_code={this.state.post_code}
                                        name_of_thoroughfare={this.state.name_of_thoroughfare}
                                        number_of_thoroughfare={this.state.number_of_thoroughfare}
                                        current_coordinates={this.state.current_coordinates}
                                    />
                                 </div>
                                 <div className={"col-lg-6"}>
                                    <ErrorBoundary>
                                        <Distance
                                            current_coordinates={this.state.current_coordinates}
                                        />
                                     </ErrorBoundary>
                                 </div>
                            </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        );
  }
}

export default App;
