// Initialize and add the map
// 41.8781° N, 87.6298° W chicago

mapboxgl.accessToken = 'pk.eyJ1IjoiY2lyaWpheWUiLCJhIjoiY2wwMzVhOG51MWFvajNqcGtoNjY1NXY3biJ9.d-81uebJHiFJDLiYUCXJng';
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-87.6298, 41.8781],
  zoom: 10.95 
});

map.on('load', () => {
  map.addSource('places', {
  // This GeoJSON contains features that include an "icon"
  // property. The value of the "icon" property corresponds
  // to an image in the Mapbox Streets style's sprite.
  'type': 'geojson',
  'data': {
  'type': 'FeatureCollection',
  'features': [
  {
  'type': 'Feature',
  'properties': {
  'image':
  '<img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/5f/ef/86/20171126-113842-largejpg.jpg?w=1100&h=-1&s=1">',
  'description':
  '<strong> Chicago Cultural Cente</strong><p><a href="" target="_blank" title="Opens in a new window"> Chicago Cultural Center</a>" The Chicago Cultural Center is the nation\'s first free municipal cultural center and one of the most visited attractions in Chicago. The stunning landmark building, opened in 1897 as the city\'s first public library, is home to two magnificent stained-glass domes, and annually presents hundreds of free cultural exhibits and performances. Admission is free. 10:00 AM - 5:00 p.m.</p>',
  'icon': 'theatre-15'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-87.6250, 41.8838]
  }
  },
  {
  'type': 'Feature',
  'properties': {
    'image':
    '<img src="">',
    'description':
    '<strong>Mad Men Season Five Finale Watch Party</strong><p>Head to Lounge 201 (201 Massachusetts Avenue NE) Sunday for a <a href="http://madmens5finale.eventbrite.com/" target="_blank" title="Opens in a new window">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>',
    'icon': 'theatre-15'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-77.003168, 38.894651]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>Big Backyard Beach Bash and Wine Fest</strong><p>EatBar (2761 Washington Boulevard Arlington VA) is throwing a <a href="http://tallulaeatbar.ticketleap.com/2012beachblanket/" target="_blank" title="Opens in a new window">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>',
  'icon': 'bar-15'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-77.090372, 38.881189]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>Ballston Arts & Crafts Market</strong><p>The <a href="http://ballstonarts-craftsmarket.blogspot.com/" target="_blank" title="Opens in a new window">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>',
  'icon': 'art-gallery-15'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-77.111561, 38.882342]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>Seersucker Bike Ride and Social</strong><p>Feeling dandy? Get fancy, grab your bike, and take part in this year\'s <a href="http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/" target="_blank" title="Opens in a new window">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>',
  'icon': 'bicycle-15'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-77.052477, 38.943951]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>Capital Pride Parade</strong><p>The annual <a href="http://www.capitalpride.org/parade" target="_blank" title="Opens in a new window">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>',
  'icon': 'rocket-15'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-77.043444, 38.909664]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>Muhsinah</strong><p>Jazz-influenced hip hop artist <a href="http://www.muhsinah.com" target="_blank" title="Opens in a new window">Muhsinah</a> plays the <a href="http://www.blackcatdc.com">Black Cat</a> (1811 14th Street NW) tonight with <a href="http://www.exitclov.com" target="_blank" title="Opens in a new window">Exit Clov</a> and <a href="http://godsilla.bandcamp.com" target="_blank" title="Opens in a new window">Gods’illa</a>. 9:00 p.m. $12.</p>',
  'icon': 'music-15'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-77.031706, 38.914581]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>A Little Night Music</strong><p>The Arlington Players\' production of Stephen Sondheim\'s  <a href="http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show" target="_blank" title="Opens in a new window"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>',
  'icon': 'music-15'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-77.020945, 38.878241]
  }
  },
  {
  'type': 'Feature',
  'properties': {
  'description':
  '<strong>Truckeroo</strong><p><a href="http://www.truckeroodc.com/www/" target="_blank">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>',
  'icon': 'music-15'
  },
  'geometry': {
  'type': 'Point',
  'coordinates': [-77.007481, 38.876516]
  }
  }
  ]
  }
  });
  // Add a layer showing the places.
  map.addLayer({
  'id': 'places',
  'type': 'symbol',
  'source': 'places',
  'layout': {
  'icon-image': '{icon}',
  'icon-allow-overlap': true
  }
  });
   
  // When a click event occurs on a feature in the places layer, open a popup at the
  // location of the feature, with description HTML from its properties.
  map.on('click', 'places', (e) => {
  // Copy coordinates array.
  const coordinates = e.features[0].geometry.coordinates.slice();
  const description = e.features[0].properties.description;
   
  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  }
   
  new mapboxgl.Popup()
  .setLngLat(coordinates)
  .setHTML(description)
  .addTo(map);
  });
   
  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'places', () => {
  map.getCanvas().style.cursor = 'pointer';
  });
   
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'places', () => {
  map.getCanvas().style.cursor = '';
  });
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

