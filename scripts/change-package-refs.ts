import { c, createLogger } from './logger';
import { loadPackageJson, savePackageJson } from './package.json';
import project from './project';

const log = createLogger('change-package-refs');

const webRefs = {
  dev: {
    'main': 'dist/bundle/index.js',
    'module': 'dist/bundle/index.js',
  },
  release: {
    'main': 'dist/bundle/index.cjs.js',
    'module': 'dist/bundle/index.js',
  }
};
const cjsRefs = {
  dev: {
    'main': 'dist/bundle/index.js',
    'module': 'dist/bundle/index.js',
  },
  release: {
    'main': 'dist/bundle/index.cjs.js',
    'module': 'dist/bundle/index.js',
  }
};

const fields = ['main', 'module'];

(async function (): Promise<void> {
  const [, , ref, type] = process.argv;

  for (const { name, folder }
    of project.packages
      .filter(
        p => !p.name.kebab.includes('_')
        && p.folder.includes('packages')
      )
  ) {
    log(`changing package.json fields to ${ref} for: ${c.magentaBright(name.npm)}`);
    const isCjsPackage = folder.includes('packages-cjs');
    const pkg = await loadPackageJson(folder, name.kebab);
    const refs = isCjsPackage ? cjsRefs : webRefs;
    for (const field of fields) {
      pkg[field] = refs[ref][field];
    }
    if (type) {
      if (type === 'none') {
        if (pkg.bin) {
          log(`saw a 'bin' field, so leaving the package.json "type" field as-is for: ${c.magentaBright(name.npm)}`);
        } else {
          log(`removing the package.json "type" field for: ${c.magentaBright(name.npm)}`);
          pkg['type'] = void 0;
        }
      } else {
        log(`changing package.json "type" to ${type} for: ${c.magentaBright(name.npm)}`);
        pkg['type'] = type;
      }
    }
    await savePackageJson(pkg, folder, name.kebab);
  }

  log('Done.');
})().catch(err => {
  log.error(err);
  process.exit(1);
});
