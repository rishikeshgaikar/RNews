const fs = require('fs');

const ScenesIndexMaker = () => {
  var array = fs.readdirSync('app/src/scenes').map(file => {
    return file.replace('.js', '');
  });
  console.log(array);
  array = array.filter(item => item !== 'index');
  return Array.from(new Set(array));
};

const generate = () => {
  const properties = ScenesIndexMaker()
    .map(name => {
      const key = name.replace(/\s/g, '');
      return `import ${key} from './${key}';`;
    })
    .join('\n');

  const testproperties = ScenesIndexMaker().map(name => {
    const testkey = name.replace(/\s/g, '');
    return `${testkey}`;
  });

  const scenes = `${properties}\nexport {${testproperties}};`;
  fs.writeFileSync('app/src/scenes/index.js', scenes, 'utf8');
};

generate();
console.log('All scenes Imported!');
