import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = 'pk.eyJ1IjoicGx1dG9kcml2ZSIsImEiOiJjbGcwb3R2Y24wOGk1M3BtZ3FqcmcwNWI3In0.ms-qERQPJNffa-XBdxyx2g';


const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 400,
      })
    }
  }, [pickupCoordinates, dropoffCoordinates])

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }

  return <div className={style.wrapper} id='map' />
}

export default Map
