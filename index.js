const { AsyncDeviceDiscovery } = require('sonos')

// event on all found...
// DeviceDiscovery((device) => {
//   console.log('found device at ' + device.host)

// mute every device...
// device.setMuted(true)
//   .then(d => console.log(`${JSON.stringify(device)} now muted`))
// })

// find one device
// DeviceDiscovery().once('DeviceAvailable', (device) => {
//   console.log('found device at ' + device.host)

//   // get all groups
//   const sonos = new Sonos(device.host)
//   sonos.getAllGroups().then(groups => {
//     groups.forEach(group => {
//       console.log('group name', group.Name);
//     })
//   })
// })



const spotifyTrackTd = 'spotify:track:5AdoS3gS47x40nBNlNmPQ8' // Slayer ftw

const discovery = new AsyncDeviceDiscovery()
discovery.discover().then(async sonos => {
  await sonos.setVolume(10)
  sonos.queue(spotifyTrackTd).then(result => {
    console.log('Added spotify track to queue %j', result)
  }).catch(err => {
    console.log('Error adding %j', err.message)
  })
})

const car = 'spotify:track:06ypiqmILMdVeaiErMFA91'
const discovery = new AsyncDeviceDiscovery()
discovery.discover().then(async sonos => {
  console.log(await sonos.play(car))
}).catch(err => {
  console.error("error", err)
  process.exit(0)
})
