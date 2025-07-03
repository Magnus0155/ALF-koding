//Oppgave 1

function hundeFakta() {

    const divOne = document.getElementById("divOne")

    let mineDyr = [
		{ navn: "Millie Vanillie",
		  fodselsAar: 2020,
		  Far: "Mad Max",
		  Mor: "Molly Folly",
          Alder: 4,
		 },

		{ navn: "RatKillah", 
		  fodselsAar: 2023,
		  Far: "El Chapo",
		  Mor: "Rattatoui",
          Alder: 1,
		 }
		]	

    let svarEn = ""

    for (let i = 0; i < mineDyr.length; i++) {
        console.log(mineDyr[i].navn)
        svarEn +=  `${mineDyr[i].navn} ble født ${mineDyr[i].fodselsAar}. <br>
        ${mineDyr[i].navn} sin far heter ${mineDyr[i].Far}
        .Moren heter ${mineDyr[i].Mor}. <br>
        ${mineDyr[i].navn} sin aldre er ${mineDyr[i].Alder}
        <br>`
    }



    divOne.innerHTML= svarEn 
}

// Oppgave 2 

function andebyKnapp() {

    const andebyere = document.getElementById("andebyDiv")

    let andebyDuck = [
        {   Forrnavn:"Donald",
            Etternavn:"Duck",
            Adresse:"Apelveien 111",
            Poststed:"Andeby",
            Telefon: {
                Privat:"21 41 24 54",
                Jobb:"22 58 54 77",
            },
            Epost: {
                Privat:"donald@duck.no",
                Jobb:"donald@andeby.no",
            },
        },
        {   Forrnavn:"Ole",
            Etternavn:"Duck",
            Adresse:"Apelveien 111",
            Poststed:"Andeby",
            Telefon: {
                Privat:`21 41 24 54`,
                Jobb:`22 58 54 77`,
            },
            Epost: {
                Privat:"ole@duck.no",
                Jobb:"ole@andeby.no",
            },
        },
        {   Forrnavn:"Dole",
            Etternavn:"Duck",
            Adresse:"Apelveien 111",
            Poststed:"Andeby",
            Telefon: {
                Privat:"21 41 24 54",
                Jobb:"22 58 54 77",
            },
            Epost: {
                Privat:"dole@duck.no",
                Jobb:"dole@andeby.no",
            },
        },
        {   Forrnavn:"Doffen",
            Etternavn:"Duck",
            Adresse:"Apelveien 111",
            Poststed:"Andeby",
            Telefon: {
                Privat:"21 41 24 54",
                Jobb:"22 58 54 77",
            },
            Epost: {
                Privat:"doffen@duck.no",
                Jobb:"doffen@andeby.no",
            },
        }
    ]

    let andebyInfo = ""

    for (let i = 0; i <andebyDuck.length; i++) {
        andebyInfo += `Familien Duck sine navn er ${andebyDuck[i].Forrnavn}<br>
        Etternavnene er ${andebyDuck[i].Etternavn}<br>
        Adressen deres er ${andebyDuck[i].Adresse} <br>
        Poststedet deres er ${andebyDuck[i].Poststed} <br>
        Telefonnummerene deres er Privat${andebyDuck[i].Telefon.Privat}
        Jobb: ${andebyDuck[i].Telefon.Jobb}<br>
        Eposten deres er Privat:${andebyDuck[i].Epost.Privat} 
        jobb: ${andebyDuck[i].Epost.Jobb}<br>
        `
    }

    andebyere.innerHTML = andebyInfo

}

// Oppgave 3

function brannBtn(posisjon) {
    const brannKeepere = document.getElementById("brannSpillereDiv")
    brannKeepere.innerHTML = ""

    const brannSpillere = {
        Keepere: [
            {
                Navn: "Mathias Dyngeland",
                Nasjonalitet: "Norge",
                Født: "7 okt 1995",
                Høyde: "184"
            }
        ],
        Forsvarsspillere: [
            { Navn: "Denzel De Roeve", Nasjonalitet: "Belgia", Født: "10 Aug 2004" },
            { Navn: "Eivind Helland", Nasjonalitet: "Norge", Født: "25 April 2005" },
            { Navn: "Japet Sery Larsen", Nasjonalitet: "Danmark", Født: "10 April 2000" },
            { Navn: "Joachim Soltvedt", Nasjonalitet: "Norge", Født: "9 September 1995" }
        ],
        Midtbanespillere: [
            { Navn: "Eggert Aron Gudmundsson", Nasjonalitet: "Island", Født: "8 Feb 2004" },
            { Navn: "Emil Kornvig", Nasjonalitet: "Danmark", Født: "28 April 2000" },
            { Navn: "Felix Horn Myhre", Nasjonalitet: "Norge", Født: "4 Mar 1999" }
        ],
        Angrepsspillere: [
            { Navn: "Mads Hansen", Nasjonalitet: "Danmark", Født: "28 Juli 2002" },
            { Navn: "Aune Heggebø", Nasjonalitet: "Norge", Født: "29 Juli 2001" },
            { Navn: "Bård Finne", Nasjonalitet: "Norge", Født: "13 Feb 1995" }
        ]
    }

    const spillerListe = brannSpillere[posisjon]
    if (!spillerListe) return

    spillerListe.forEach(spiller => {
        const card = document.createElement("div")
        card.className = "spiller-Kort"

        const navn = document.createElement("h4")
        navn.textContent = spiller.Navn

        const nasjonalitet = document.createElement("p")
        nasjonalitet.textContent = `nasjonalitet: ${spiller.Nasjonalitet}`

        const født = document.createElement("p")
        født.textContent =`Født: ${spiller.Født}`

        card.appendChild(navn)
        card.appendChild(nasjonalitet)
        card.appendChild(født)

        if (spiller.Høyde) {
            const høyde = document.createElement("p")
            høyde.textContent = `Høyde: ${spiller.Høyde} cm`
            card.appendChild(høyde)
        }
        brannKeepere.appendChild(card)
    })


}