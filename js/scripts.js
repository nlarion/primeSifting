$(document).ready(function() {
  $("form").submit(function(event) {
    var input =$("input#primeSifting").val();
    var result = primes(2, input);
    $("#result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});

function primes(num){
  var arr = [];
  for (var i = 2; i < num+1; i++) {
    arr.push(i);
  };
  console.log(arr);
  for (var i = 0; i < arr.length; i++){
    //console.log("devisor: "+arr[i]);
    for (var j = 0; j < arr[i]; j++){
        if((arr[i]%arr[j]) === 0 && arr[i]!=arr[j]){

        console.log("i "+arr[i]+" j "+arr[j]);
        arr.splice(j,0);

        }
  
    }
  }
console.log(arr);

}



  // function primes(x, y) {

  //   //arr.push(x);
  //   //arr.concat(x);
  //   if ( x > y) {
  //     return -1
  //   }else {
  //     if x
  //     console.log(x);
  //     return primes(x+1,y);
  //   }
  // }