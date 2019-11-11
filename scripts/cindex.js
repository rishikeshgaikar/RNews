const fs = require('fs');

const ComponentIndexMaker = () => {
  let array = fs.readdirSync('app/src/components').map(file => {
    return file.replace('.js', '');
  });
  array = array.filter(item => item !== 'index');
  return Array.from(new Set(array));
};

const generate = () => {
  const properties = ComponentIndexMaker()
    .map(name => {
      const key = name.replace(/\s/g, '');
      return `export * from './${key}'`;
    })
    .join(';\n');
  const componentList = `${properties}`;
  fs.writeFileSync('app/src/components/index.js', componentList, 'utf8');
};

generate();
console.log('All Components Imported!');
