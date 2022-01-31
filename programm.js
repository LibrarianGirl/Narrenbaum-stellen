<body>
 // <script> //um den Button zu aktivieren und deaktivieren
	//function enable(){    
		//document.getElementById("btn").disabled = true;}

	//function disable(){    
	//	document.getElementById("btn").disabled = false;}
//	</script>

  <img id="img" src="Narrenbaum.png" />
  <button onClick="rotateImg()" id="btn" >Rotate Image</button>

  <script>
    let rotation = 0;
    function rotateImg() {
    
      rotation += 10; // add 90 degrees, you can change this as you want
      if (rotation === 90) { 
        // 90 means rotate back to 0
        rotation = 0;
      }
      document.querySelector("#img").style.transform = `rotate(${rotation}deg)`;
     document.getElementById("btn").disabled = true;
    	setTimeout(function(){ document.getElementById("btn").disabled = false
		}, 5000);
    }
  </script>
</body>
