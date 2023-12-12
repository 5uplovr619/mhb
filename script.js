// event listener
document.getElementById("btn").addEventListener("click", gradecalc);
//function
function gradecalc() {
  //input
  let css1 = +document.getElementById("css1").value;
  let sp1 = +document.getElementById("sp1").value;
  let sp2 = +document.getElementById("sp2").value;
  let css2 = +document.getElementById("css2").value;
  let proj = +document.getElementById("proj").value;

  //process
  let finalgrade = (css1 + css2 + sp1 + sp2 + proj) / 5;

  //testing
  console.log(finalgrade);
  //output
  document.getElementById("endgrade").innerHTML = finalgrade;
}
