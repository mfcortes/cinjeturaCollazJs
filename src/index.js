
const ejeX=[]
const ejeY=[]
// Handler Function

const geoneraCollatz = () => {
    let numero = document.getElementById('numeroInput').value
    const botonGenera = document.getElementById('botonGenera')

    const grafica = document.getElementById('myChart').getContext('2d')

    

    console.log(`Serie para el numero ${numero}`)

    let cont=0

    do {
        ejeX[cont]=cont
        ejeY[cont]=numero
        if (numero % 2 == 0){
            numero = numero / 2
        }
        else
        {
            numero = numero * 3 + 1
        }
        console.log(numero)
        cont++;
    } while ( numero != 1)

    const myChart = new Chart(grafica,{
        type:'line',
        data:{
            labels: ejeX,
            datasets: [{
                label: 'Valores',
                data:ejeY,
                backgroundColor: "#FF3333"
            }]
        }
    })
    /*
    const myChart = new Chart(grafica,{
        type:'line',
        data
    })
*/

    console.log(`Se generaron ${cont} numeros`)
    console.log(ejeX)
}

botonGenera.addEventListener('click',geoneraCollatz)
