const fs = require('fs');

const fontFileNames = () => {
  const array = fs.readdirSync('app/res/fonts').map(file => {
    return file.replace('.ttf', '').replace('.otf', '');
  });
  return Array.from(new Set(array));
};

const generate = () => {
  const properties = fontFileNames()
    .map(name => {
      var fname = name.replace('-', '_');
      const key = fname.replace(/\s/g, '');
      return `\t${key}: '${name}'`;
    })
    .join(',\n');

  const string = `const fonts = {\n${properties}\n}\nexport default fonts`;
  fs.writeFileSync('app/res/fonts.js', string, 'utf8');
};
generate();
console.log('All fonts imported successfully.');
