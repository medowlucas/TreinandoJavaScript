var texto = prompt('PESQUISE UM NOME NO TIBIA');
var link = 'https://api.tibiadata.com/v2/characters/' + texto + '.json'

fetch(link)
  .then(function (response) {
    return response.json()

  })
  .then(function (json) {
    var listinha = document.createElement('ul')
    document.body.appendChild(listinha)
    
    Object.keys(json.characters.data).forEach(function (item) {
      var itemdalistinha = document.createElement('li')
      var tagsdalista = item + ' - ' + json.characters.data[item]
      
      json.characters.data[item] == json.characters.data.last_login ? tagsdalista = item + ' - ' + json.characters.data.last_login[0].date : tagsdalista
      json.characters.data[item] == json.characters.data.guild ? tagsdalista = item + ' - ' + json.characters.data.guild.name : tagsdalista
      itemdalistinha.innerText = tagsdalista
      listinha.appendChild(itemdalistinha)

    })
    
  });

