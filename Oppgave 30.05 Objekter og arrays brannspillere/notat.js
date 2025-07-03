function brannBtn(posisjon) {
    let brannKeepere = document.getElementById("brannSpillereDiv")

    let brannSpillere = [
        {
            Keepere: [
                {
                Navn: "Mathias Dyngeland",
                Nasjonalitet: "Norge",
                Født: "7 okt 1995",
                Høyde: "184"
            },
        ],
            Forsvarsspillere: [
                {
                    Navn: "Denzel De Roeve",
                    Nasjonalitet: "Belgia",
                    Født: "10 Aug 2004"
                },
                {
                    Navn: "Eivind Helland",
                    Nasjonalitet: "Norge",
                    Født: "25 April 2005"
                },
                {
                    Navn: "Japet Sery Larsen",
                    Nasjonalitet:"Danmark",
                    Født:"10 April 2000",
                },
                {
                    Navn: "Joachim Soltvedt",
                    Nasjonalitet: "Norge",
                    Født: "9 September 1995"
                }
            ],
            Midtbanespillere: [
                {
                    Navn: "Eggert Aron Gudmundsson",
                    Nasjonalitet: "Island",
                    Født: "8 Feb 2004"
                },
                {
                    Navn: "Emil Kornvig",
                    Nasjonalitet: "Danmark",
                    Født: "28 April 2000"
                },
                {
                    Navn: "Felix Horn Myhre",
                    Nasjonalitet: "Norge",
                    Født: "4 Mar 1999"
                }
            ],
            Angrepsspillere: [
                {
                    Navn: "Mads Hansen",
                    Nasjonalitet: "Danmark",
                    Født: "28 Juli 2002"
                },
                {
                    Navn: "Aune Heggebø",
                    Nasjonalitet: "Norge",
                    Født: "29 Juli 2001"
                },
                {
                    Navn: "Bård Finne",
                    Nasjonalitet: "Norge",
                    Født: "13 Feb 1995"
                }
            ]
        }
    ]

    let spillerListe = brannSpillere[0][posisjon]
    let brannInfo = <h3>${posisjon}</h3><ul>

    spillerListe.forEach(spiller => {
        brannInfo += <li>${spiller.Navn}
        if (spiller.Nasjonalitet) brannInfo +=  - ${spiller.Nasjonalitet}
        if (spiller.Født) brannInfo +=  - Født: ${spiller.Født}
        if (spiller.Høyde) brannInfo +=  - Høyde: ${spiller.Høyde} cm
        brannInfo += </li>
    })

    brannInfo += </ul>
    brannKeepere.innerHTML = brannInfo
} 