const fs = require('fs');
const showdown  = require('showdown'),
    converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);
    let data = html;
   console.log(html)
   fs.writeFile('app.html', data, (err) => {
      
    // In case of a error throw err.
    if (err) throw err;
})
