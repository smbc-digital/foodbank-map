const foodbanksPopup = (feature, layer) => {
  const content = `<div class="item"><i class="fa fa-image"></i><p class="title">Foodbank or Pantry</p>
    <p></p>
    <p class="info">${feature.properties.provider}</p>
    <p class="info">${feature.properties.name}, ${feature.properties.address}, ${feature.properties.postcode}</p>
    <p class="info">Opening Times:</p>
    <p class="info">${feature.properties.times}</p>
    </div>`
  layer.bindPopup(content)
}

export {
  foodbanksPopup
}