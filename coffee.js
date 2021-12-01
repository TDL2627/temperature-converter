function F2C(ans) {
    ans = parseFloat(ans);
    document.getElementById("outputCelcius").innerHTML=((ans-32)/1.8).toFixed(2);
  }

function C2F(x){
    x = parseFloat(x);
    document.getElementById("outputFahrenheit").innerHTML=((x*1.8)+32).toFixed(2);
}

function clearing(){
  inputs=document.getElementsByClassName('inputs')
  for(input of inputs){
    input.value=' ' ///this emptys the inputs
  }
}
