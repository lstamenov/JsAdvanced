function create(words) {
   let arrayOfDivs = [];
   for (let i = 0; i < words.length; i++) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.innerHTML = words[i];
      p.style.display = 'none';
      div.appendChild(p);
      arrayOfDivs.push(div);
   }

   let contentElement = document.getElementById('content');
   for (let i = 0; i < arrayOfDivs.length; i++) {
      contentElement.appendChild(arrayOfDivs[i]);
   }

   contentElement.addEventListener('click', function (e) {

      let div = e.target;
      let p = div.firstChild;
      if (p.style.display === 'none'){
         p.style.display = 'block';
      }else {
         p.style.display = 'none';
      }
   })
}