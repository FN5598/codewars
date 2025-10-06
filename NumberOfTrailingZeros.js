function zeros(n) {
   let res = 0;
   let i = 1;
   while ( n >= (5 ** i)) {
      res += Math.floor(n / (5 ** i));
      i++;
   }
   console.log(i);
   return res;
}

n = 30000000000000000000;

console.log(zeros(n));