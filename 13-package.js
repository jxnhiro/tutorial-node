/**
 * npm - global command, comes with node
 * npm --version
 */

/**
 * Local Dependency - Use it only in this particular project.
 * npm i <packageName>
 */

/**
 * Global Dependency - Use it in any project.
 * npm install -g <packageName>
 * sudo npm install -g <packageName> (mac)
 */

/**
 *  Package.json - manifest file (stores important info abotu project/package)
 *  1. Manual Approach (Create package.json in the root, create properties etc)
 *  2. 'npm init' (step by step, press enter to skip)
 *  3. 'npm init -y' (everything default)
 */

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

/**
 * To run someone's repo with dependencies,
 * we use npm install first.
 * NPM checks for dependencies in the package.json
 * and automatically setup the node_modules folder.
 */

/**
 * Dev Dependencies
 * npm i <packageName> -D 
 */

// To uninstall, use npm uninstall <packageName>