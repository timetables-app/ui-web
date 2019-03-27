import React, {Component, useState} from 'react';
import Layout from './app/Layout';
import {Map, Marker, TileLayer} from 'react-leaflet';
import {Card, CardHeader, CardActions, Button} from '@material-ui/core';

function App() {
    const [toggle, setToggle] = useState(false);
    return (
        <Layout>
            {toggle && (<div style={{
                position: 'absolute',
                zIndex: 9999,
                top: '80px',
                paddingLeft: '24px',
            }}>
                <Card>
                    <CardHeader title="Czarnowiejska"/>
                    <CardActions>
                        <Button size='small' color='primary' variant='outlined'>
                            Start
                        </Button>
                        <Button size='small' color='secondary' variant='outlined'>
                            Koniec
                        </Button>
                    </CardActions>
                </Card>
            </div>)}
            <Map center={[50.062037, 19.937735]} zoom={14}>
                <Marker position={[50.062037, 19.937735]}/>
                <Marker position={[50.062037, 19.927735]} onClick={() => setToggle(!toggle)}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
                />
            </Map>
        </Layout>
    );
}

export default App;
