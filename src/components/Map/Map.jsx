// "use Client"
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

// const Map = () => {
//   const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };

//   const center = {
//     lat: -3.745,
//     lng: -38.523
//   };

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "YOUR_API_KEY" // Replace "YOUR_API_KEY" with your actual Google Maps API key
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       {/* Child components, such as markers, info windows, etc. */}
//     </GoogleMap>
//   ) : <></>;
// };

// export default Map;
