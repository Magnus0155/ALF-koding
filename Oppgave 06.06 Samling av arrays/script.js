//Oppgave1

function printOut(type) {
    let people = [
        {
        id: 1,
        name: "Alice",
        age: 30,
        occupation: "Engineer",
        contact: {
            email: "alice@example.com",
            phone: "123-456-7890"
        },
        address: {
            city: "New York",
            country: "USA"
        }
        },
        {
        id: 2,
        name: "Bob",
        age: 25,
        occupation: "Designer",
        contact: {
            email: "bob@example.com",
            phone: "987-654-3210"
        },
        address: {
            city: "Los Angeles",
            country: "USA"
        }
        },
        {
        id: 3,
        name: "Charlie",
        age: 35,
        occupation: "Teacher",
        contact: {
            email: "charlie@example.com",
            phone: "555-555-5555"
        },
        address: {
            city: "Chicago",
            country: "USA"
        }
        },
        {
        id: 4,
        name: "Diana",
        age: 28,
        occupation: "Doctor",
        contact: {
            email: "diana@example.com",
            phone: "222-333-4444"
        },
        address: {
            city: "Houston",
            country: "USA"
        }
        }
    ];
    
    
    let cars = [
        {
        id: 1,
        make: "Toyota",
        model: "Corolla",
        year: 2020,
        owner: {
            name: "Alice",
            id: 1
        },
        specs: {
            color: "Blue",
            engine: "1.8L",
            transmission: "Automatic"
        }
        },
        {
        id: 2,
        make: "Honda",
        model: "Civic",
        year: 2018,
        owner: {
            name: "Bob",
            id: 2
        },
        specs: {
            color: "Red",
            engine: "2.0L",
            transmission: "Manual"
        }
        },
        {
        id: 3,
        make: "Ford",
        model: "Focus",
        year: 2021,
        owner: {
            name: "Charlie",
            id: 3
        },
        specs: {
            color: "White",
            engine: "1.5L",
            transmission: "Automatic"
        }
        },
        {
        id: 4,
        make: "Tesla",
        model: "Model 3",
        year: 2022,
        owner: {
            name: "Diana",
            id: 4
        },
        specs: {
            color: "Black",
            engine: "Electric",
            transmission: "Automatic"
        }
        }
    ];


    const container = document.getElementById("output")
    container.innerHTML="" 

    if (type === "people") {
        const cards = people.map(person => { 
            const card = document.createElement("div")
            card.className ="mennesker"

            const name = document.createElement("h1")
             name.textContent = `Name: ${person.name}`

            const age = document.createElement("h1")
            age.textContent = `Age: ${person.age}`

            const email = document.createElement("h2");
            email.textContent = `Email: ${person.contact.email}`;

            const phone = document.createElement("h2");
            phone.textContent = `Phone: ${person.contact.phone}`;

            const address = document.createElement("h2");
            address.textContent = `Address: ${person.address.city},
             ${person.address.country}`

            card.appendChild(name)
            card.appendChild(age)
            card.appendChild(email)
            card.appendChild(phone)
            card.appendChild(address)

            return card //må brukes med .map
    
        })
    cards.forEach(card => container.appendChild(card))
  }

  if (type === "cars") {
    const cards = cars.map(car =>{
        const card = document.createElement("div")
        card.className = "biler"

        const id = document.createElement("h1")
        id.textContent = `Id: ${car.id}`

        const make = document.createElement("h1")
        make.textContent =`Maker: ${car.make}`

        const model = document.createElement("h1")
        model.textContent =`Model: ${car.model}`

        const year = document.createElement("h1")
        year.textContent =`Year: ${car.year}`

        const owner = document.createElement("h2")
        owner.textContent =`Owner: ${car.owner.name},
         ${car.owner.id}`

        const specs = document.createElement("h2")
        specs.textContent =`Specs: ${car.specs.color},
         ${car.specs.engine}, ${car.specs.transmission}`

        card.appendChild(id)
        card.appendChild(make)
        card.appendChild(model)
        card.appendChild(year)
        card.appendChild(owner)
        card.appendChild(specs)

        return card
    })
    cards.forEach(card => container.appendChild(card))
  }

  if (type === "teachers") {

    const teachers = people.filter(person => person.occupation === "Teacher")

    const cards = teachers.map(teacher => {
        const card = document.createElement("div")
        card.className = "lærere"

        const name = document.createElement("h1")
        name.textContent = `Name: ${teacher.name}`

        const age = document.createElement("h1")
        age.textContent = `Age: ${teacher.age}`

        const email = document.createElement("h2")  
        email.textContent = `Email: ${teacher.contact.email}`

        const phone = document.createElement("h2")
        phone.textContent = `Phone: ${teacher.contact.phone}`

        const address = document.createElement("h2")
        address.textContent = `Address: ${teacher.address.city}, 
        ${teacher.address.country}`

        card.appendChild(name)
        card.appendChild(age)
        card.appendChild(email)
        card.appendChild(phone)
        card.appendChild(address)

        return card
    })

    cards.forEach(card => container.appendChild(card))

}
}