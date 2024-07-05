//Use the inquirer npm package to get user input
import inquirer from 'inquirer';
import qr from "qr-image";
import fs, { writeFile } from "fs";

inquirer
  .prompt([
    {
        message:"Type in your url:",
        name:"URL",

    }
    
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    
    writeFile("URL.txt",url,(err) => {
        if (err) throw err;
        console.log("The file is saved!");
    })
})
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
//Use the qr-image npm package to turn the user entered URL into a QR code image
//Create a txt file to save the user input using native fs node module

