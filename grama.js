let boton = document.getElementById("boton")
boton.addEventListener('click', heterograma)

function heterograma(){

  let text  = document.getElementById("texto").value.trim().toLowerCase().replace(/\s+/g, "")
  const resultado = document.getElementById("resultado")
  let repetidos = [];
  const tempArray = [...text].sort();
 
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i+1] === tempArray[i]) {
    repetidos.push(tempArray[i]);
    }
  }
  if (repetidos.length>= 1){
    resultado.innerText = "El texto introducido no es un heterograma, puesto que tiene alguna letra repetida"
  } else{
    resultado.innerText = textOrigin + "El texto introducido es un heterograma, ya que se no repite ninguna letra"
  }
}

let boton2 = document.getElementById("boton2")
boton2.addEventListener('click', isograma)

function isograma() {

  const comparacion = document.getElementById("resultado")
  let texto  = document.getElementById("texto").value.toLowerCase().replace(/\s+/g, "").split('')
  const contador = {}

  for (let i =0; i<texto.length; i++){
    const elemento = texto[i]
    if(contador[elemento]){
      contador[elemento] +=1
    }else{
      contador[elemento] =1
    }
  }
  resultado = Object.values(contador)
  const comprobacion = resultado.every(i => resultado[0]=== i)

  if (comprobacion){
    comparacion.innerText = "El texto instroducido es un isograma"
  } else{
    comparacion.innerText = "El texto instroducido NO es un isograma"
  }
}

let boton3 = document.getElementById("boton3")
boton3.addEventListener('click', pangrama)

function pangrama(){

  const comparacion = document.getElementById("resultado")
  const textoDado  = document.getElementById("texto").value.toLowerCase().replace(/\s+/g, "").split('')
  const texto = [...new Set(textoDado)]
  const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','ñ','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  if (alfabeto.every(letra => texto.includes(letra))){
    comparacion.innerText = "El texto introducido es un pangrama, ya que utiliza todas las letras del abecedario"
  }else {
    comparacion.innerText = "El texto introducido NO es un pangrama, ya que NO utiliza todas las letras del abecedario"
  }
}