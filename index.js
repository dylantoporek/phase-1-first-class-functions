function receivesAFunction(callback){
    return callback();
  }
  
  receivesAFunction(function(){
    return ('Spy')
  });

  const returnsANamedFunction = () => receivesAFunction;

  const returnsAnAnonymousFunction = () => function(){};