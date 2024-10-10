const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

//load json as require
const itens = require('./itens.json');

app.use(cors());

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

function generateRandomBuild() {

    // Pick a Weapon Category on the JSON
    const weaponCategories = Object.keys(itens.itens.weapons);
    const randomWeaponCategory = getRandomItem(weaponCategories);

    // Pick a Weapon in the Category
    const randomWeapon = getRandomItem(itens.itens.weapons[randomWeaponCategory]);

    //log depuration
    console.log('Weapon Category.: ', randomWeaponCategory);
    console.log('Weapon.: ', randomWeapon);

    return {
        weapon: randomWeapon,
    }
}

// Endpoint para gerar uma build aleatória
app.get('/random-build', (req, res) => {
    const randomBuild = generateRandomBuild();
    res.json(randomBuild);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
