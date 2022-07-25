let a = [
  {
    keys : ['яблоко', 'фрукт'],
    header : 'Apple'
  },
  {
    keys : ['банан', 'фрукт'],
    header : 'Banana'
  }
]

let container = document.getElementsByClassName('main')[0]

let btn = document.getElementsByClassName('btn-search')[0]
btn.style.color = '#ffffff'
btn.style.padding = '24px'
btn.style.backgroundColor = '#0000ff'

btn.onclick = function() {
  console.log('clicked');

  let n = document.getElementsByClassName('search')[0].value
  clean()
  for (let i = 0; i < a.length; i++) {
    for (let l = 0; l < a[i].keys.length; l++) {
      if (a[i].keys[l] == n) {
        info = document.createElement('div');
        info.classList.add('information');
        container.appendChild(info);

        header = document.createElement('p')
        header.classList.add('h1');
        header.textContent = a[i].header;
        info.appendChild(header);
      }
    }
  }
}

function clean() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}
