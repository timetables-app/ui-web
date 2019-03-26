import React, {Component} from 'react';
import Layout from './app/Layout';
import {Map, TileLayer} from 'react-leaflet';

class App extends Component {
    render() {
        return (
            <Layout>
                <Map center={[50.062037, 19.937735]} zoom={14}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                        url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
                    />
                </Map>
            </Layout>
        );
    }
}

export default App;
