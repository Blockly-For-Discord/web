fetch('/branch.json')
 .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
 .then(data => {
    const branch = data;
  })
 .catch(error => {
    console.error('[Error] An error ocurred fetching branch information. Error: ' + error);
  });



let b4d = {
  version: function() {
      console.log(branch.version + " / Google's Blockly" + b4d.Blockly.VERSION);
  }
};