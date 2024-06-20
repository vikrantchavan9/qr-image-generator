import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      message: "Enter your URL : ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var svg = qr.image(url);
    svg.pipe(fs.createWriteStream("qr-img.png"));

    fs.writeFile("URL.txt", url, (err) =>{
    if(err) throw err;
      console.log("Your File has been saved as qr_img.png");
      });
    })
    
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });