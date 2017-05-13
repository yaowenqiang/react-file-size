import { rm, exec } from "shelljs";
const version = process.env.npm_package_version;
rm("-rf", `public/${ $version }`);
exec(`pug --obj data.json src/index.pug --out public/${ version }/`);
exec(`node-sass src/index.scss | postcss -c .postsrc.json | cssmin > public/${ version }/index.min.js `);
exec(`mustache data.json src/index.mustache.js | uglifyjs > public/${ version }/index.min.js`);