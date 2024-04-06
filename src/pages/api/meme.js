// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const fs = require('fs');

export default function handler(req, res) {
  
    const urls = JSON.parse(fs.readFileSync('urls.json'));
    //console.log(urls);
    const randomImageUrl = urls[Math.floor(Math.random() * urls.length)];
    res.status(200).json({ message: randomImageUrl });
  }
  