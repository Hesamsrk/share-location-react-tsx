import styles from "./map.module.css"
import React, {useEffect, useState} from "react";
// @ts-ignore
const leaf = L


interface Record {
    id: string | number;
    name: string;
    type: string;
    coordinate: number[];
}


let records: Record[] = [
    {
        id: 1,
        name: 'location1',
        type: 'house',
        coordinate: [51.509, -0.08],
    },
    {
        id: 2,
        name: 'location2',
        type: 'work',
        coordinate: [51.503, -0.06],
    },
    {
        id: 3,
        name: 'location3',
        type: 'work',
        coordinate: [51.51, -0.047],
    }
]

let Map: React.FC<{setPin:any}> = ({setPin}) => {


    useEffect(() => {
        try {
            // configure map
            const myMap = leaf.map('mapID').setView([51.505, -0.09], 13);
            leaf.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'pk.eyJ1IjoiaGVzYW1zcmsiLCJhIjoiY2tzNmNhNjI4MHBnbTJvczMyM3lwa2xhYyJ9.uMNJJGOWC6w9RCItvf1y6A'
            }).addTo(myMap);
            // configure saved points
            records.forEach((record: Record) => {
                let marker = leaf.marker(record.coordinate).addTo(myMap);
                marker.bindPopup(`
                    <div style="font-size: 16px;font-weight: bold;text-align: start">
                           ${record.type}
                    </div>
                    <div style="font-size: 12px;text-align: start">
                           ${record.name}
                    </div>
                    <div style="display: flex;justify-content: end;align-items: center">
                           <button style="background-color: #0dd4ad;color: white;padding: 2px 5px;margin: 2px;border-radius: 5px;border-width: 0;cursor: pointer" >Delete</button>
                           <button style="background-color: #9800d7;color: white;padding: 2px 5px;margin: 2px;border-radius: 5px;border-width: 0;cursor: pointer">Edit</button>
                    </div>
                `).openPopup();
            })


            // configure click pin
            const mark = leaf.popup();
            const onMapClick = (e: any) => {
                mark.setLatLng(e.latlng).setContent('selected!').openOn(myMap);
                setPin([e.latlng.lat, e.latlng.lng])

            }
            myMap.on('click', onMapClick);
        } catch (e) {
            // This section of code throws exceptions only during the development
        }


    }, [])
    return (
        <>
            <div className={styles.hint}>
                Select a location on the map:
            </div>
            <div id="mapID" className={styles.map}/>
        </>
    );
};

export default Map;