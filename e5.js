  fs = require('fs');
  fs.readdir(process.argv[2], function(err, list){
    if (err) throw err;
      list.forEach(function(elemento){
        if (elemento.indexOf('.'+process.argv[3]) != -1){
	  console.log(elemento);
	}
      });
  });
