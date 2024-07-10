const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const pokemonImage = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
const buttonCarta = document.querySelector('.btn-carta');
const button_fechar_card = document.querySelector('.fechar_card');


const carta_pokemon_img = document.querySelector('.card-img-top');
const carta_pokemon_nome = document.querySelector('.card-title');
const carta_pokemon_habilidade = document.querySelector('.list-group-item');
const carta_pokemon_peso = document.querySelector('#peso_pokemon');
const carta_pokemon_altura = document.querySelector('#altura_pokemon');
const lista_habili = document.querySelector('#habilidades-pokemon');
const tipo = document.querySelector('#tipo-pokemon');

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  console.log(pokemon);

  const data = await fetchPokemon(pokemon);


  if (data) {

    pokemonImage.style.display = 'block';
    carta_pokemon_img.style.display = 'block';
    pokemonName.innerHTML =  data.name;
    carta_pokemon_nome.innerHTML = data.name;
    carta_pokemon_peso.innerHTML = "Peso: " + data.weight;
    carta_pokemon_altura.innerHTML =" Altura: " + data.height;
    pokemonNumber.innerHTML = data.id;

    data.abilities.forEach((element, index) => {

      let habili = document.createElement('li');
      habili.innerText = element.ability.name;
      lista_habili.append(habili)

    });

    data.types.forEach((element, index) => {

      let tipos = document.createElement('li');
      tipos.innerText = element.type.name;
      tipo.append(tipos)

    });

    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    carta_pokemon_img.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;
    console.log(data);


  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Não encontrado :c';
    pokemonNumber.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
  document.getElementById('habilidades-pokemon').textContent = '';
  document.getElementById('tipo-pokemon').textContent = '';
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
    document.getElementById('main').style.right = '';
  document.getElementById('main_carta').style.display = '';
  document.getElementById('habilidades-pokemon').textContent = '';
  document.getElementById('tipo-pokemon').textContent = '';
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
  document.getElementById('main').style.right = '';
  document.getElementById('habilidades-pokemon').textContent = '';
  document.getElementById('tipo-pokemon').textContent = '';
  
});

renderPokemon(searchPokemon);

buttonCarta.addEventListener('click', () => {
  
  document.getElementById('main').style.transform = "translateX(-50%)";
  document.getElementById('card').style.transform = "translateY(-20%)";
  document.getElementById('main_carta').style.display = 'block';
  fetchPokemon();
});

button_fechar_card.addEventListener('click', () => {
  
  document.getElementById('main').style.transform = "translateX(0%)";
  document.getElementById('main_carta').style.display = 'none';
});
