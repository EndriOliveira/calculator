const result = document.getElementById('result');

function addNumber(number) {
  const lastCharacter = result.value.slice(-1);
  if (number == '.') {
    addDot(result.value);
    return;
  }
  if (number == '%') {
    if (result.value.includes('+') || result.value.includes('-') || result.value.includes('*') || result.value.includes('/')) {
      percent(result.value);
      return;
    } else {
      result.value = Number(result.value) / 100;
      return;
    }
  }
  if (number == 'AC') {
    result.value = '';
    return;
  }
  if (number == 'BK') {
    result.value = result.value.slice(0, -1);
    return;
  }
  if (number == '=') {
    if (result.value == '') {
      return;
    } else {
      makeResult(result.value);
      return;
    }
  }
  if (number == '+' || number == '-' || number == '*' || number == '/') {
    if (result.value == '' && number != '-') {
      return;
    }
    if (result.value.includes('+') || result.value.includes('-') || result.value.includes('*') || result.value.includes('/')) {
      if (result.value.charAt(0) == '-') {
        if (lastCharacter == '+' || lastCharacter == '-' || lastCharacter == '*' || lastCharacter == '/'){
          return;
        }else {
          result.value = result.value + number;
          return;
        }
      } else {
        makeResult(result.value);
        return;
      }
    } else {
      result.value = result.value + number;
      return;
    }
  }
  result.value = result.value + number;
}

function makeResult(number) {
  result.value = `${eval(number).toFixed(2)}`;
}

function percent(number) {
  number.includes('+') ? result.value = `${number.split('+')[0]}+${Number(number.split('+')[1]) / 100}` : null;
  number.includes('*') ? result.value = `${number.split('*')[0]}*${Number(number.split('*')[1]) / 100}` : null;
  number.includes('/') ? result.value = `${number.split('/')[0]}/${Number(number.split('/')[1]) / 100}` : null;
  number.includes('-') ? result.value = `${number.split('-')[0]}-${Number(number.split('-')[1]) / 100}` : null;
}

var root = document.querySelector(':root');

function light() {
  root.style.setProperty('--bg', '#e74c3c');
  root.style.setProperty('--text-color', '#FFF');
  root.style.setProperty('--result-color', '#000');
  root.style.setProperty('--background', '#3a4764');
  root.style.setProperty('--background-dark', '#232c43');
  root.style.setProperty('--background-very-dark', '#182034');

  root.style.setProperty('--key-color-top', '#ffffff');
  root.style.setProperty('--key-color-bottom', '#3a4764');
  root.style.setProperty('--key-background', '#eae3dc');
  root.style.setProperty('--key-background-dark', '#dfd9d2');
  root.style.setProperty('--key-shadow', '#b4a597');

  root.style.setProperty('--key-blue-background', '#637097');
  root.style.setProperty('--key-blue-shadow', '#404e72');

  root.style.setProperty('--key-red-background', '#d03f2f');
  root.style.setProperty('--key-red-shadow', '#93261a');
}

function dark() {
  root.style.setProperty('--bg', '#F5DEB3');
  root.style.setProperty('--text-color', '#000');
  root.style.setProperty('--result-color', '#FFF');
  root.style.setProperty('--background', '#17062a');
  root.style.setProperty('--background-dark', '#1e0836');
  root.style.setProperty('--background-very-dark', '#1e0836');

  root.style.setProperty('--key-color-top', '#f7de43');
  root.style.setProperty('--key-color-bottom', '#f7de43');
  root.style.setProperty('--key-background', '#331b4d');
  root.style.setProperty('--key-shadow', '#851c9c');

  root.style.setProperty('--key-blue-background', '#56077c');
  root.style.setProperty('--key-blue-shadow', '#851c9c');

  root.style.setProperty('--key-red-background', '#00decf');
  root.style.setProperty('--key-red-shadow', '#00decf');
}

function darkMode() {
  const input = document.getElementById('dn');
  if(input.getAttribute('checked')){
    input.removeAttribute('checked');
    light();
  }else{
    input.setAttribute('checked', true);
    dark();
  }
}

function addDot(number) {
  if (number.includes('+')) {
    if (number.split('+')[1].includes('.')) {
      return;
    } else {
      result.value = `${number.split('+')[0]}+${number.split('+')[1]}.`;
      return;
    }
  }
  if (number.includes('-')) {
    if (number.split('-')[1].includes('.')) {
      return;
    } else {
      result.value = `${number.split('-')[0]}-${number.split('-')[1]}.`;
      return;
    }
  }
  if (number.includes('*')) {
    if (number.split('*')[1].includes('.')) {
      return;
    } else {
      result.value = `${number.split('*')[0]}*${number.split('*')[1]}.`;
      return;
    }
  }
  if (number.includes('/')) {
    if (number.split('/')[1].includes('.')) {
      return;
    } else {
      result.value = `${number.split('/')[0]}/${number.split('/')[1]}.`;
      return;
    }
  }
  if (number.includes('.')) {
    return;
  } else {
    result.value = number+'.';
  }
}