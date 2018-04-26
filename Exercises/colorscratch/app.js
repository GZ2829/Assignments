function password(n) {
    var pass = "";
    var poss= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%^$#@/";
  
    for (var i = 0; i < n; i++)
      pass += poss.charAt(Math.random() * poss.length);
  
    return pass;
  }
  
  console.log(password(10))