
//Uvod
const start_text = document.getElementById("welcome_text");
start_text.textContent = 'Postup: vezmi přirozené číslo, pokud je sudé, vyděl jej dvěma, pokud je liché, vynásob jej třemi a přičti jedničku, postup opakuju dokud nedostaneš číslo jedna.';  
      
    let myChart; // Globální proměnná pro instanci grafu

    // Získání reference na tlačítko
    const vypocetBtn = document.getElementById("vypocet");
    const hra_vypis = document.getElementById("vysledek");

    // Přidání event listeneru pro kliknutí na tlačítko
    vypocetBtn.addEventListener("click", function() {
        let inputValue = parseInt(document.getElementById("vstup").value); 
        let data = [inputValue];
        hra_vypis.textContent = "";

        while (inputValue !== 1 ) {
             hra_vypis.textContent =  hra_vypis.textContent + inputValue + " ";
            if ((inputValue % 2) === 0) {
                inputValue = inputValue / 2;
            }
            else {
                inputValue = 3 * inputValue + 1;
            }
            data.push(inputValue);
        }
              
         // Získání reference na canvas element
        const ctx = document.getElementById('myChart').getContext('2d');
        

        //Smazání starého grafu
        if(myChart instanceof Chart) {
            myChart.destroy();
        }
              
        myChart = new Chart(ctx, {
        type: 'line',
        data: {
           labels: Array.from(Array(data.length).keys()), // Labels budou 0, 1, 2, ..., data.length-1
           datasets: [{
               label: 'Collatzova posloupnost',
               data: data,
               borderColor: 'rgb(75, 192, 192)',
               borderWidth: 1
           }]
       },
            options: {
                scales: {
                     y: {
                         beginAtZero: true
               }
           }
       }
        });

    });

   
