var clock = document.body.appendChild(
  document.createElement('h3')
)

clock.innerText = new Date().toLocaleString().split(', ')[1]

for (var i = 0; i < 100; i++) {
  (function(arg){
    return function(){
      setTimeout(
        () => clock.innerText = new Date().toLocaleString().split(', ')[1], 
        1000 * arg
      )
    }
    })(i)()
}