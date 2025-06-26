//Oppgave1

fetch('land.json')
.then(response => {
    if (!response.ok){
        throw new Error('Kunne ikke hente land.json')
    }
    return response.json()
})


.then(data =>{
    const outputDiv = document.getElementById('output')
    const countries = data.countries || []

    if (countries.length === 0) {
        outputDiv.textContent = 'Ingen land funnet.'
        return
    }

    const html = countries.map(country => `
        <div class="country">
          <h2>${country.name}</h2>
          <img src="${country.flag}" alt="Flagg for ${country.name}">
          <p><strong>Hovedstad:</strong> ${country.capital}</p>
          <p><strong>Innbyggere:</strong> ${country.inhabitants.toLocaleString('no-NO')}</p>
        </div>
      `).join('')
  
      outputDiv.innerHTML = html
})
.catch(error => {
    console.error('Det oppstod en feil:', error)
    document.getElementById('output').textContent = 'Feil ved henting av data.'
})



async function fetchFile() {
    try {
        const response = await fetch('land.json')
    
        if (!response.ok) {
          throw new Error('Kunne ikke hente land.json')
        }
    
    const data = await response.json()
    const countries = data.countries || []

    const outputDiv = document.getElementById('output')

    if (countries.length === 0) {
        outputDiv.textContent = 'Ingen land funnet.'
        return
      }

      const html = countries.map(country => `
        <div class="country">
          <h2>${country.name}</h2>
          <img src="${country.flag}" alt="Flagg for ${country.name}">
          <p><strong>Hovedstad:</strong> ${country.capital}</p>
          <p><strong>Innbyggere:</strong> ${country.inhabitants.toLocaleString('no-NO')}</p>
        </div>
      `).join('')
  
      outputDiv.innerHTML = html
  
    } catch (error) {
      console.error('Det oppstod en feil:', error)
      document.getElementById('output').textContent = 'Feil ved henting av data.'
    }
}