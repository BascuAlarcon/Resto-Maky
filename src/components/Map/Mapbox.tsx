import React, { useLayoutEffect, useRef, useState } from 'react';
import {Map, Marker} from 'mapbox-gl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDirections } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import DB_Text from '../../assets/texts/DB_Texts.json'


const containerStyle = { 
  height: 'auto', 
}; 

const directions = ['south', 'east', 'center']  

const markersSushi = [{
    name: "Center",
    lat: -35.424202,
    lng: -71.654126
}, {
    name: "Oriente",
    lat: -35.432813,
    lng: -71.609885
}, {
    name: "Sur",
    lat: -35.446446,
    lng: -71.667376
}] 

export interface MapInterface{}

const MapboxMap: React.FC<MapInterface> = () => {

    const mapDiv = useRef<HTMLDivElement>(null);
    const map = useRef<Map | null>(null);
 
    useLayoutEffect(() => {
        if (map.current) return ;
        map.current = new Map({
            container: mapDiv.current!, // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [markersSushi[0].lng, markersSushi[0].lat], // starting position [lng, lat]
            zoom: 15, // starting zoom
        });
        setMarkers(map.current)  
    }, []) 

    const [texto, setTexto] = useState(DB_Text.Mapa.Sucursal_01)
    const [direction, setDirection] = useState(DB_Text.Mapa.Direccion_01)
    const [numero, setNumero] = useState(DB_Text.Mapa.Numero_01) 
    const [numeroWsp, setNumeroWsp] = useState(DB_Text.Mapa.NumeroWSP_01) 

    const setMarkers = (map: Map) => {
        const eastMarker = new Marker({
            color: "#CC2936"
        }).setLngLat([markersSushi[0].lng, markersSushi[0].lat]).addTo(map)
        const centerMarker = new Marker({
            color: "#CC2936"
        }).setLngLat([markersSushi[1].lng, markersSushi[1].lat]).addTo(map)

        const southMarker = new Marker({
            color: "#CC2936"
        }).setLngLat([markersSushi[2].lng, markersSushi[2].lat]).addTo(map)
    }
    
    const flyToMarker = (direction: string) => {
        // change direction
        if(direction === 'east'){
            map.current?.flyTo({
                center: [markersSushi[1].lng, markersSushi[1].lat],
                essential: true
            })
            setTexto(DB_Text.Mapa.Sucursal_03);
            setDirection(DB_Text.Mapa.Direccion_03)
            setNumero(DB_Text.Mapa.Numero_03)
            setNumeroWsp(DB_Text.Mapa.NumeroWSP_03)
        }
        if(direction === 'center'){
            map.current?.flyTo({
                center: [markersSushi[0].lng, markersSushi[0].lat],
                essential: true
            })
            setTexto(DB_Text.Mapa.Sucursal_01);
            setDirection(DB_Text.Mapa.Direccion_01)
            setNumero(DB_Text.Mapa.Numero_01)
            setNumeroWsp(DB_Text.Mapa.NumeroWSP_01)
        }
        if(direction === 'south'){
            map.current?.flyTo({
                center: [markersSushi[2].lng, markersSushi[2].lat],
                essential: true
            })
            setTexto(DB_Text.Mapa.Sucursal_02);
            setDirection(DB_Text.Mapa.Direccion_02)
            setNumero(DB_Text.Mapa.Numero_02)
            setNumeroWsp(DB_Text.Mapa.NumeroWSP_02)
        }

        // change style of drawer
        var element = document.getElementById(direction);  
        var h2Element = document.getElementById('h2-'+direction);    
        var pElement = document.getElementById('p-'+direction);    
        var p2Element = document.getElementById('p2-'+direction);  
 
        for (let index = 0; index < directions.length; index++) { 
            if(directions[index] !== direction){
                var elementToUnmark = document.getElementById(directions[index]);  
                var h2ElementToUnmark = document.getElementById('h2-'+directions[index]);    
                var pElementToUnmark = document.getElementById('p-'+directions[index]);    
                var p2ElementToUnmark = document.getElementById('p2-'+directions[index]);  
                elementToUnmark!.className = "button-sucursal-unmarked" 
                h2ElementToUnmark!.className = "title-container-unmarked"
                pElementToUnmark!.className = "p-container-unmarked"
                p2ElementToUnmark!.className = "p-container-unmarked"
            }
        }

        if(element?.className === "button-sucursal-unmarked"){
            element.className = "button-sucursal" 
            h2Element!.className = "title-container-marked"
            pElement!.className = "p-container-marked"
            p2Element!.className = "p-container-marked"
        }  
    } 

    return <> 
        <div className="sucursal-container">
            {/* <div className='col-2 div-sucursales d-flex flex-column bg-dark justify-content-center align-items-center'> */}
            <div className='button-container'>
                <div className='button-container-sucursal-lg'>
                    <a className='button-sucursal-unmarked' id='east' href='#' onClick={() => flyToMarker('east')}   >
                        <h2 id='h2-east' className='title-container-unmarked'>{DB_Text.Mapa.Sucursal_03}</h2>
                        <p id='p-east' className='p-container-unmarked'>{DB_Text.Mapa.Direccion_03}</p>
                        <p id='p2-east' className='p-container-unmarked'>{DB_Text.Mapa.Numero_03}</p>
                    </a>
                    <a className='button-sucursal' id='center' href='#' onClick={() => flyToMarker('center')} >
                        <h2 id='h2-center' className='title-container-marked'>{DB_Text.Mapa.Sucursal_01}</h2>
                        <p id='p-center' className='p-container-marked'>{DB_Text.Mapa.Direccion_01}</p>
                        <p id='p2-center' className='p-container-marked'>{DB_Text.Mapa.Numero_01}</p>
                    </a>
                    <a className='button-sucursal-unmarked' id='south' href='#' onClick={() => flyToMarker('south')}  >
                        <h2 id='h2-south' className='title-container-unmarked'>{DB_Text.Mapa.Sucursal_02}</h2>
                        <p id='p-south' className='p-container-unmarked'>{DB_Text.Mapa.Direccion_02}</p>
                        <p id='p2-south' className='p-container-unmarked'>{DB_Text.Mapa.Numero_02}</p>
                    </a>
                </div> 
                <div className="dropwdown dropwdown-cellphone"> 
                    <div>
                        <button className="btn dropdown-toggle dropdown-button-sucursal ml-4" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {texto}
                        </button>  
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" onClick={() => flyToMarker('center')} href="#" id="Marina-Arauco">Sucursal Centro</a></li>
                            <li><a className="dropdown-item" onClick={() => flyToMarker('east')} href="#" id="Paseo-Ross">Sucursal Oriente</a></li>
                            <li><a className="dropdown-item" onClick={() => flyToMarker('south')} href="#" id="Plaza-del-Sol">Sucursal Sur</a></li>
                        </ul>
                    </div> 
                </div> 
            </div> 
            <div className='map-container' ref={mapDiv} style={containerStyle}></div> 
            <a href={'https://wa.me/'+numeroWsp}><FontAwesomeIcon icon={faWhatsapp} className='btn-wsp'/></a>

            <div className='button-container'>
                <p className='text-description-sucursal'><FontAwesomeIcon icon={faDirections} style={{color: 'gray'}} className='mt-1 mr-1'/>{direction}</p>
                <a href={'https://wa.me/'+numeroWsp}><p className='text-description-sucursal'><FontAwesomeIcon icon={faWhatsapp} style={{color: 'green'}} className='mr-1 mt-1'/>{numero}</p></a>
            </div>
        </div>   
    </>
}

export default MapboxMap