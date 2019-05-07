var inquirer = require("inquirer");
var mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "bamazon"
});

// function (ready) {
//   inquirer
//     .prompt([
//       {
//         name: "ready",
//         message: "You ready to buy the things?"
//       }
//     ])
//     .then(answer => {
//       [{
//         name: "ready",
//       type: "confirm"
//       }];
//     })
// };
function displaytable() {
  con.query(
    "SELECT item_id, product_name, price FROM products",
    (err, response) => {
      if (err) throw err;
      console.log("\n~*~*~*~**~*~*~*~*~*~*~*~**~*~*~\n");
      console.table(response);
    }
  );
}
displaytable();

function getit() {
  inquirer
    .prompt([
      {
        name: "what",
        message: "What is the ID of the item you want?"
      },
      {
        name: "quantity",
        message: "How many do you want?"
      }
    ])
    .then(answers => {
      let item = answers.what;
      let quantity = answers.quantity;
      console.log(item + quantity);
    });
}
getit();
