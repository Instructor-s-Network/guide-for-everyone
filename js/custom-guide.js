var ctx = document.getElementsByClassName('canvas')[0].getContext("2d");
ctx.width = 640;
ctx.height = 480;
ctx.strokeRect(15, 15, 266, 266);
ctx.strokeRect(18, 18, 260, 260);
ctx.fillRect(20, 20, 256, 256);
for (i = 0; i < 8; i += 2)
    for (j = 0; j < 8; j += 2) {
        ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
        ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
    }

ctx.onclick = function() {
  console.log('clicked');
  var dataURL = ctx.toDataURL("image/png");
  var link = document.createElement("a");
  document.body.appendChild(link); // Firefox requires the link to be in the body :(
  link.href = dataURL;
  link.download = "my-image-name.png";
  link.click();
  document.body.removeChild(link);
};
