// Initialize and add the map
// 41.8781° N, 87.6298° W chicago

mapboxgl.accessToken = 'pk.eyJ1IjoiY2lyaWpheWUiLCJhIjoiY2wwMzVhOG51MWFvajNqcGtoNjY1NXY3biJ9.d-81uebJHiFJDLiYUCXJng';
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-87.6298, 41.878],
  zoom: 11.15 
});

map.on('load', ()=>{
    render(data)
})

onpointClick = (e)=> {
//mangle data
render(data)
}

let el = document.getElementById('id')
el.addEventListener('click')


// 1. function render()
// clears the map.
// list of five points (objects dexrtions)

