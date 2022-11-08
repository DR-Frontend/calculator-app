let   keys = document.querySelectorAll('.key'),
      input = document.querySelector('.screen')

keys.forEach( key => {
   key.addEventListener('click', function(){
      let keyValue = this.textContent
      input.textContent += `${keyValue}`
   })
});