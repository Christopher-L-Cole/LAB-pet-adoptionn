
const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "https://static.displate.com/857x1200/displate/2023-03-15/dadeeb74dcc7ed99f2da757226d69818_5670a0e43cfe81ada198f1864a784534.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://pbs.twimg.com/media/FcZ8ad2WIAIqAYT?format=jpg&name=4096x4096",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/62/06/45/360_F_562064589_qQesV2w41iSUoMkipIcoCfzyNTV4oPwf.jpg",
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "https://ih1.redbubble.net/image.5216006087.2743/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "https://m.media-amazon.com/images/I/51oEA3kkcGL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://img.freepik.com/premium-photo/doken-fierce-dog-samurai-japanese-manga-concept-art-sketch-inspired-by-kim-jung-gi_983420-15246.jpg",
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://ih1.redbubble.net/image.4694921378.1754/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/82/62/74/360_F_582627455_yCcBej5nEAhPMXQFbpejySoex62BiflN.jpg",
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://i.ebayimg.com/images/g/C0IAAOSwmc1kXTGB/s-l1200.jpg",
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://static.displate.com/857x1200/displate/2023-03-15/c56d6ba2f2e90a3ba8dc6d9651be1bd0_0bfb43241473a48b700ba39998a16ee2.jpg",
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "https://storage.prompt-hunt.workers.dev/clf16fguw0001mi08asudaud1_1",
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://storage.googleapis.com/pai-images/f089720fa4b845568c95fed9b113a002.jpeg",
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl: "https://i.etsystatic.com/20407794/r/il/6cc55b/4617170401/il_300x300.4617170401_qkzp.jpg",
      
  }, 
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/2317626267/display_1500/stock-photo-beautiful-samurai-cat-ilustration-colorful-landscape-digital-vector-artwork-2317626267.jpg",
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Death from above",
    type: "cat",
    imageUrl:
      "https://m.media-amazon.com/images/I/61TuOZpT2dL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b6f44c9-24fa-4a57-8ebd-10d5685a440f/dfl5p7f-c4862301-5124-4e1d-bcbe-e6853112057e.png/v1/fill/w_1280,h_854,q_80,strp/somat_cute_little_dragon_by_somatart_dfl5p7f-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODU0IiwicGF0aCI6IlwvZlwvOGI2ZjQ0YzktMjRmYS00YTU3LThlYmQtMTBkNTY4NWE0NDBmXC9kZmw1cDdmLWM0ODYyMzAxLTUxMjQtNGUxZC1iY2JlLWU2ODUzMTEyMDU3ZS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LbyU52v-d07TwwN_9A6UeoGQEQwK8O97k13idRlDofU",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://pieceofmind.ai/cdn/shop/files/samurai-cat-1000-pieces-piece-of-mind-1_d89e4ddf-232b-433b-bf95-2cdc5a625348.jpg?v=1691308193",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://storage.prompt-hunt.workers.dev/clf1irw190001l3088deru2qi_1",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "https://img.freepik.com/premium-photo/kawaii-ken-unleashing-dog-samurai-warrior-japanese-manga-concept-art-masterpiece-sty_983420-15281.jpg",
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Takes two candies from every house when trick or treating, naughty Spooky",
    type: "cat",
    imageUrl: "https://img.freepik.com/premium-photo/samurai-cat-cute-cat-samurai-cat-illustration-digital-illustration_689053-329.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://static.displate.com/280x392/displate/2022-12-27/67dfaa0b05d925a7f54084618c249f47_1a631bc8a6ed1c50d1131e99ab15c341.jpg",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://static.displate.com/857x1200/displate/2023-02-24/316d5cb622ff4437c2154bf096d64916_d5bee39edbdf57417972cdd1f9c1b7d3.jpg"  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "https://storage.googleapis.com/pai-images/869f002f0c584e2ca11b5786a6a09db4.jpeg",
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl:
      "https://storage.googleapis.com/pai-images/2cc36d2a656b4ffdabb1962276e058b4.jpeg",
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "https://static.displate.com/857x1200/displate/2023-03-15/e146848f300c5a35c761cb40d918f07a_b553b8cbf771a0712b1c1824477ae138.jpg",
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://i1.sndcdn.com/avatars-wkOWpyxpeGFLv0Su-qODNeQ-t500x500.jpg",
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/05/62/88/37/1000_F_562883727_HIFdnDwvArjlxfrviZcNsScdo5ExwY3a.jpg",
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/790bbde7-8610-4fb3-b49e-1928564da343/dfwuko0-a9faa87b-8c5f-4e04-a34b-5d52f0c6fda5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc5MGJiZGU3LTg2MTAtNGZiMy1iNDllLTE5Mjg1NjRkYTM0M1wvZGZ3dWtvMC1hOWZhYTg3Yi04YzVmLTRlMDQtYTM0Yi01ZDUyZjBjNmZkYTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KlKgcgMdrzISuR8Lhr2Zu2edtVzbXLvKnFWShA1ka0I",
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "https://static.displate.com/857x1200/displate/2023-03-15/c0c79d2b1334a849bc96866137c63c71_dc0797f357cf81fea083e6511e672cc3.jpg",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "https://pbs.twimg.com/media/FdsFREZXEBQ5Pd2?format=jpg&name=4096x4096",
  },
];

const app = document.querySelector('#app')

app.innerHTML = "welcome to pets"
//these are two options for loops. either will do fine whatever i like best which is for of
// for (let i = 0; 1 < pets.length; i++) {
//   console.log(pets[i].name);
// }



//need help understanding this// pants analogy from alex. you got cargo pants with numbers, and someone gives you a key and tells you to put it in pocket 4
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender
};

const cardsOnDom = (pets) => {
  let domString = ""
  for (const pet of pets) { 
    domString += `<div class="myAnimalCard" style="width: 18rem;">
    <h5 class="card-title">${pet.name}</h5>
    <img src="${pet.imageUrl}" 
    class="card-img-top" alt="...">
    <div class="card-body">
    <p class="card-text">Color: ${pet.color}</p>
    <p class="card-text">Special Skill: ${pet.specialSkill}</p>
    <p class="card-text">${pet.type}</p>
    <footer class="card-footer"></footer>
        <button class="btn btn-danger" id="delete--${pet.id}" class="delbtn">Delete </button>
  </div>
</div>`;
}
renderToDom("#app", domString);
};

cardsOnDom(pets);

//next i need to target the buttons on the DOM
const dogButton = document.querySelector("#Dog") //So, this line of code is finding the HTML element that has id="Dog" in your webpage and assigning it to the variable dogButton. 
const catButton = document.querySelector("#Cat")
const dinoButton = document.querySelector("#Dino")
const allButton = document.querySelector("#All")

//add click even to show all the pets on button cluck using the function we created
dogButton.addEventListener("click", () => {
  filter(pets, "dog")
  console.log("clicky"); 
});

catButton.addEventListener("click", () => {
  filter(pets, "cat")
});

dinoButton.addEventListener("click", () => {
  filter(pets, "dino")
});

allButton.addEventListener("click", () => {
  cardsOnDom(pets)
});

//function to filter pets with a specific type
const filter = (pets, animalType) => {
  let petArray = []; //intialized an empty array that will store the pets the match specified animal type.
    for (pet of pets)
      if(pet.type === animalType) { //it checks if pet.type is equal to animalType. if they match, it means the pet is the desired type.
        petArray.push(pet) // the entire array, you can use this method to dynamically add elements to an array
      }
      cardsOnDom(petArray)
}

// ****** CREATE ****** //
// 1. select/target the form on the DOM
const form = document.querySelector('form')
  
// 2. create a function that grabs all the values from the form, pushes the new object to the array, 
//then repaints the DOM with the new teammate
const newPet = (event) => {
  event.preventDefault() //// EVERY TIME YOU CREATE A FORM

  const newPetObj = {
    id: pets.length + 1, 
    name: document.querySelector("#petName").value,
    color: document.querySelector("#petColor").value,
    specialSkill: document.querySelector("#petSkill").value,
    type: document.querySelector('input[name="exampleRadios"]:checked').value,
    imageUrl: document.querySelector("#petImg").value,
   }; 

  pets.push(newPetObj);
  cardsOnDom(pets);
  form.reset();
}
// 3. Add an event listener for the form submit and pass it the function (callback)
form.addEventListener('submit', newPet)

//delete 
// Here we will be using event bubbling
// 1. Target the app div
// 2. Add an event listener to capture clicks
// 3. check e.target.id includes "delete"
// 4. add logic to remove from array
// 5. Repaint the DOM with the updated array
// 6. Organize code so that everything is in a function except selectors


app.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex((object) => object.id === Number(id));

    pets.splice(index, 1);
    cardsOnDom(pets);
  }
});

const startApp = () => {
  cardsOnDom(pets);
  e();
}


startApp();
