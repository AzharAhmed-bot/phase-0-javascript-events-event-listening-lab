const input= document.getElementById('button').innerHTML = 'Button is Clicked!';

function addingEvenyByListener() {
    
  alert('I was clicked!');
}

input.addEventListener('click',addingEvenyByListener);