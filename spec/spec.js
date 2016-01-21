describe('primes',function(){
  it("Will return first primtes from 2 to user input interger",function(){
    expect(primes(100)).to.equal("2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 71 73 79 83 89 97");
  });
  //   it("Will return -1 if number is < 1",function(){
  //   expect(primes(1)).to.equal(-1);
  // });
});