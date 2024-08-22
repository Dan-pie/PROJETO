document.getElementById('voltar').addEventListener('click', () => {
    window.location.href = 'index.html'
})
let dados = {
  acao: null,
  tipo: null,
  imovel: null,
  endereco: null,
  rm: null,
  br: null,
  preco: null,
  size: null
}
let currentButton = {
  button: null,
  buttonIdentify: null
}
let currentButtonType = {
  button: null,
  buttonIdentify: null
}
function toggleWant(identify) {
  if(currentButton.buttonIdentify != identify) {
    dados.acao = identify
    let button = document.getElementById(identify + 'b')
    currentButton.buttonIdentify = identify
    
    if (currentButton.button != null) {
      currentButton.button.classList.remove('selected')
      currentButton.button.classList.add('cadButtonbutton')
    }
    button.classList.remove('cadButtonbutton')
    button.classList.add('selected')
    
    currentButton.button = button
  }
  changeDisplay('type')
}
function toggleType(identify) {
  if (currentButtonType.buttonIdentify != identify) {
    dados.tipo = identify
    let button = document.getElementById(identify + 'b')
    currentButtonType.buttonIdentify = identify

    if (currentButtonType.button != null) {
      currentButtonType.button.classList.remove('selected')
      currentButtonType.button.classList.add('cadButtonbutton')
    }
    button.classList.remove('cadButtonbutton')
    button.classList.add('selected')

    currentButtonType.button = button
  }
  changeDisplay('slc')
  selectContainer(identify)
}
function changeDisplay(i) {
  document.getElementById(i + "Container").classList.remove('dpNo')
}
function changeDisplaydois(i) {
    document.getElementById(i + "Container").classList.add('dpNo')
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
function selectContainer(identify) {
  if (identify == 'r') {
    document.getElementById('residencial').classList.remove('dpNo')
    document.getElementById('comercial').classList.add('dpNo')
  }else{
    document.getElementById('comercial').classList.remove('dpNo')
    document.getElementById('residencial').classList.add('dpNo')
  }
}

const checkboxes = document.querySelectorAll('.property-checkbox');

checkboxes.forEach(checkbox => {checkbox.addEventListener('change', function() {
    let parentDiv = this.parentElement;
    let pElement = parentDiv.querySelector('p');
    let pText = pElement.textContent || pElement.innerText;
    if (this.checked) {
      checkboxes.forEach(cb => {
        if (cb !== this) {
          cb.checked = false;
        }
      });
    }
    getSelectedValue(pText)
  });
});
function getSelectedValue(checkboxValue) {
  const selectedCheckbox = document.querySelector('.property-checkbox:checked');

  if (selectedCheckbox) {
    dados.imovel = checkboxValue
    document.getElementById('barra').innerText = checkboxValue
  } else {
    document.getElementById('barra').innerText = 'Escolha uma opção'
    dados.imovel = null
  }
  changeDisplay('cad')
  changeDisplay('cadastrar')
}
function verify() {
    let cidade = document.getElementById('cidade');
    let estado = document.getElementById('estado');
    let rua = document.getElementById('rua');
    let numero = document.getElementById('numero');
    let complemento = document.getElementById('complemento');
  
    let endereco = {
      cidade: cidade.value,
      estado: estado.value,
      rua: rua.value,
      numero: numero.value,
      complemento: complemento.value
    };
    dados.endereco = endereco
    if (cidade.value == "") {
        let container = document.getElementById('cidade');
        setTimeout(() => {
            container.style.borderColor = '#007ea7';
          }, 1000);
          container.style.borderColor = 'red';
          return;
   }
   if (estado.value == "") {
        let container = document.getElementById('estado');
        setTimeout(() => {
            container.style.borderColor = '#007ea7';
        }, 1000);
        container.style.borderColor = 'red';
        return;
   }
   if (rua.value == "") {
    let container = document.getElementById('rua');
    setTimeout(() => {
        container.style.borderColor = '#007ea7';
    }, 1000);
    container.style.borderColor = 'red';
    return;
    }
    if (numero.value == "") {
        let container = document.getElementById('numero');
        setTimeout(() => {
            container.style.borderColor = '#007ea7';
        }, 1000);
        container.style.borderColor = 'red';
        return;
   }
   changeDisplaydois('want')
   changeDisplaydois('type')
   changeDisplaydois('slc')
   changeDisplaydois('options')
   changeDisplaydois('cad')
   changeDisplaydois('cadastrar')
   changeDisplay('sla')
}
let br = 0
let currentbr = null
function bathroomCount(value){
    let brButton = document.getElementById('br' + value)
    br = value
    dados.br = br
    if (currentbr != null) {
      currentbr.classList.remove('infoContainerbuttonclicked')
      currentbr.classList.add('infoContainerbutton')
    }
    brButton.classList.remove('infoContainerbutton')
    brButton.classList.add('infoContainerbuttonclicked')
    currentbr = brButton
    if (rm != 0 && br != 0) {
      changeDisplay('preco')
      changeDisplay('size')
    }
  }
  let rm = 0
  let currentRoom = null
  function roomsCount(value) {
    let rmButton = document.getElementById('r' + value)
    rm = value
    dados.rm = rm
    if (currentRoom != null) {
      currentRoom.classList.remove('infoContainerbuttonclicked')
      currentRoom.classList.add('infoContainerbutton')
    }
    rmButton.classList.remove('infoContainerbutton')
    rmButton.classList.add('infoContainerbuttonclicked')
    currentRoom = rmButton
    if (rm != 0 && br != 0) {
      changeDisplay('preco')
      changeDisplay('size')
    }
  }
function checkInputs() {
  const preco = document.getElementById('preco').value;
  const size = document.getElementById('size').value;
  if (preco && size) {
    let = changeDisplay('dropImage')
    dados.preco = preco
    dados.size = size
  } 
}

document.getElementById('preco').addEventListener('input', checkInputs);
document.getElementById('size').addEventListener('input', checkInputs);

let imageContainer = document.getElementById('imageContainer')
let imageView = document.getElementById('imgContainer')
let inputFile = document.getElementById('inputFile')

inputFile.addEventListener('change', () => {
  let url = URL.createObjectURL(inputFile.files[0]);
  imageView.style.backgroundImage = `url(${url})`;
  imageView.textContent = ''
  changeDisplay('anunciar')
  console.log('hsh')
});
function anunciar() {
  console.log(dados)
  window.location.href = 'index.html'
}
