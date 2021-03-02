const foodbanksPopup = (feature, layer) => {
  const content = `<div class="smbc-map__item">
  <div class="smbc-map__item__header__block">
    <i class="fa fa-image smbc-map__item__header__block__icon" aria-hidden="true"></i>
    <span class="smbc-map__item__header__block__title">Foodbank or Pantry</span>
  </div>
  <div class="smbc-map__item__body">
    <p>${feature.properties.provider}</p>
    <p>${feature.properties.name}, ${feature.properties.address}, ${feature.properties.postcode}</p>
    <p>Opening Times:</p>
    <p>${feature.properties.times}</p>
  </div>
</div>`

  layer.bindPopup(content)
}

export {
  foodbanksPopup
}