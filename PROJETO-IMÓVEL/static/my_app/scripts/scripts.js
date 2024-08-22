let estado = true
//false == comprar, true == alugar//
function toggle(type){
  if(type == 'a'){
    document.getElementById('c').classList.remove('buttonSelect')
    document.getElementById('a').classList.add('buttonSelect')
    document.getElementById('borderBottom').style.background = 'linear-gradient(to right, #ccc 50%, #7b2cbf 50%)'
    estado = true
  }
  if (type == 'c') {
    document.getElementById('a').classList.remove('buttonSelect')
    document.getElementById('c').classList.add('buttonSelect')
    document.getElementById('borderBottom').style.background = 'linear-gradient(to right, #7b2cbf 50%, #ccc 50%)'
    estado = false
  }
}
let opcoes = false
function mostrarOpcoes() {
  if (!opcoes) {
    document.getElementById('optionsContainer').style.display = 'block'
    opcoes = true
  }else{
    document.getElementById('optionsContainer').style.display = 'none'
    opcoes = false
  }
}
let br = 0
let currentbr = null
function bathroomCount(value){
  let brButton = document.getElementById('br' + value)
  if (br == value) {
    brButton.classList.remove('infoContainerbuttonclicked')
    brButton.classList.add('infoContainerbutton')
    br = 0
    currentbr = null
  }else{
    br = value
    if (currentbr != null) {
      currentbr.classList.remove('infoContainerbuttonclicked')
      currentbr.classList.add('infoContainerbutton')
    }
    brButton.classList.remove('infoContainerbutton')
    brButton.classList.add('infoContainerbuttonclicked')
    currentbr = brButton
  }
}
let rm = 0
let currentRoom = null
function roomsCount(value) {
  let rmButton = document.getElementById('r' + value)
  if (rm == value) {
  rmButton.classList.remove('infoContainerbuttonclicked')
  rmButton.classList.add('infoContainerbutton')
  rm = 0
  currentRoom = null
  }else{
  rm = value
  if (currentRoom != null) {
    currentRoom.classList.remove('infoContainerbuttonclicked')
    currentRoom.classList.add('infoContainerbutton')
  }
  rmButton.classList.remove('infoContainerbutton')
  rmButton.classList.add('infoContainerbuttonclicked')
  currentRoom = rmButton
}
}
function verify() {
  let precoMin = document.getElementById('precoMin').value
  let precoMax = document.getElementById('precoMax').value
  let inputLinePreco = document.querySelector('.inputLinePreco')
  precoMin = precoMin == "" ? 0: precoMin
  precoMax = precoMax == "" ? 0: precoMax
  
  if (precoMin > precoMax && precoMax != 0) {
    console.log('error')
    setTimeout(() => {
      inputLinePreco.style.borderColor = '#ccc'
    },1300)
    inputLinePreco.style.borderColor = 'red'
    return
  }
  let sizeMin = document.getElementById('sizeMin').value
  let sizeMax = document.getElementById('sizeMax').value
  let inputLineSize = document.querySelector('.inputLineSize')
  sizeMin = sizeMin == "" ? 0 : sizeMin
  sizeMax = sizeMax == "" ? 0 : sizeMax

  if (sizeMin > sizeMax && sizeMax != 0) {
    console.log('error')
    setTimeout(() => {
      inputLineSize.style.borderColor = '#ccc'
    }, 1300)
    inputLineSize.style.borderColor = 'red'
    return
  }
  
  let checkBoxes = document.querySelectorAll('.option input[type="checkbox"]');
  let checkedValues = [];

  checkBoxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkedValues.push(checkbox.value);
    }
  });
  
  let dados = {
    tipo: checkedValues,
    preco: [precoMin, precoMax],
    size: [sizeMin, sizeMax],
    bathRoom: br,
    rooms: rm,
  }
}
function limparCheckboxes() {
  let checkboxes = document.querySelectorAll('.option input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
      checkbox.checked = false;
  });
  checkedValues = []; 
}

let checkedValues = [];


document.getElementById('limpar').addEventListener('click', function() {
  limparBathroomRooms()
  limparCheckboxes(); 
  document.getElementById('sizeMin').value = ''; 
  document.getElementById('sizeMax').value = '';
  document.getElementById('precoMin').value = '';
  document.getElementById('precoMax').value = '';
})

function limparBathroomRooms() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById('br' + i).classList.remove('infoContainerbuttonclicked');
    document.getElementById('br' + i).classList.add('infoContainerbutton');
    document.getElementById('r' + i).classList.remove('infoContainerbuttonclicked');
    document.getElementById('r' + i).classList.add('infoContainerbutton');
  }
  br = 0;
  r = 0;
  currentbr = null;
  currentr = null;
}
document.addEventListener("DOMContentLoaded", function() {
  var checkboxes = document.querySelectorAll('#optionsContainer input[type="checkbox"]');
  var barra = document.getElementById('barra');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      var selectedItems = [];
      checkboxes.forEach(function(cb) {
        if (cb.checked) {
          var labelText = document.querySelector('label[for="' + cb.id + '"]').textContent;
          selectedItems.push(labelText.trim());
        }
      });
      if (selectedItems.length > 0) {
        barra.textContent = selectedItems.join(', ');
      } else {
        barra.textContent = 'Todos os apartamentos';
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll('#optionsContainer input[type="checkbox"]');
  const barra = document.getElementById('barra');

  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      const selectedItems = [];
      
    
      for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
          const labelText = checkboxes[i].nextElementSibling.textContent.trim();
          barra.textContent = labelText;
          return; 
        }
      }
      
      barra.textContent = 'Todos os apartamentos';
    });
  });

  // Restante do seu código aqui...
});
