const characters = [
    'img_01.jpg',
    'img_02.jpg',
    'img_03.jpg',
    'img_04.jpg',
    'img_05.jpg',
    'img_06.jpg',
    'img_07.jpg',
    'img_08.jpg',
    'img_09.jpg',
    'img_10.jpg',
    'img_11.jpg',
    'img_12.jpg',
    'img_13.jpg',
    'img_14.jpg',
    'img_15.jpg',
    'img_16.jpg',
    'img_17.jpg',
    'img_18.jpg',
    'img_19.jpg',
    'img_20.jpg',
    'img_21.jpg',
    'img_22.jpg',
    'img_23.jpg',
    'img_24.jpg',
    // ... Adicione os nomes das imagens dos 24 personagens aqui
  ];
  
  function openCharacterSelect() {
    const characterSelect = document.getElementById('characterSelect');
    characterSelect.innerHTML = '';
  
    characters.forEach((character) => {
      const characterImg = document.createElement('img');
      characterImg.src = 'img/' + character;
      characterImg.alt = character;
      characterImg.addEventListener('click', () => setCharacter(character));
      characterSelect.appendChild(characterImg);
    });
  
    characterSelect.style.display = 'block';
  }
  
  function setCharacter(selectedCharacter) {
    const character = document.querySelector('.character img');
    character.src = 'img/' + selectedCharacter;
  
    const characterSelect = document.getElementById('characterSelect');
    characterSelect.style.display = 'none';
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const charactersGrid = document.getElementById('charactersGrid');
  
    characters.forEach((character) => {
      const characterImg = document.createElement('img');
      characterImg.src = 'img/' + character;
      characterImg.alt = character;
      characterImg.classList.add('character-img');
      characterImg.addEventListener('click', () => toggleOpacity(characterImg));
      charactersGrid.appendChild(characterImg);
    });
  });
  
  function toggleOpacity(characterImg) {
    characterImg.classList.toggle('selected');
  }
  