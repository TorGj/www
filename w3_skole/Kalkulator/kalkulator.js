
//function for displaying values
function dis(val)
{
document.getElementById("edu").value+=val
 }


function solve()
{
let x = document.getElementById("edu").value
let y = eval(x)
document.getElementById("edu").value = y
}


function clr()
{
document.getElementById("edu").value = ""
}


function sin(val)
{
let x = document.getElementById("edu").value
x = x * Math.PI / 180
let y = Math.sin(x)
document.getElementById("edu").value = y
}


function cos(val)
{
let x = document.getElementById("edu").value
x = x * Math.PI / 180
let y = Math.cos(x)
document.getElementById("edu").value = y
}


function tan(val)
{
let x = document.getElementById("edu").value
x = x * Math.PI / 180
let y = Math.tan(x)
document.getElementById("edu").value = y
}


function ln(val)
{
let x = document.getElementById("edu").value
let y = Math.log(x)
document.getElementById("edu").value = y
}


function lg(val)
{
let x = document.getElementById("edu").value
let y = Math.log10(x)
document.getElementById("edu").value = y
}


function rot(val)
{
let x = document.getElementById("edu").value
let y = Math.sqrt(x)
document.getElementById("edu").value = y
}


function xfac(val)
{
  let x = document.getElementById("edu").value
  if (x < 0)
      document.getElementById("edu").value = NaN
  else if (x == 0)
      document.getElementById("edu").value = 1
  else {
      for (let i = x - 1; i >= 1; i--) { x *= i }
      document.getElementById("edu").value = x
}}

// Konvertering til Binær, Hex, base64, sannsynlighetsregning,


var input = document.querySelector('input')
var title = document.querySelector('title')

input.addEventListener('change', function(){
  title.style.setProperty('--tittelfarge', input.value)
})
