const fs = require('node:fs');
const path = require('node:path');

const sourcePath = path.join(process.cwd(), 'src', 'data', 'trimindsData.ts');
const source = fs.readFileSync(sourcePath, 'utf8');
const start = source.indexOf('export const TRANSLATIONS');
if (start < 0) throw new Error('TRANSLATIONS registry was not found.');
const content = source.slice(start);

function section(language, nextLanguage) {
  const from = content.indexOf(`${language}: {`);
  const to = nextLanguage
    ? content.indexOf(`${nextLanguage}: {`, from + 1)
    : content.indexOf('\n};', from + 1);
  if (from < 0 || to < 0) throw new Error(`Missing translation section: ${language}`);
  return content.slice(from, to);
}

function parseKeys(block) {
  const values = {};
  const pattern = /^\s*"([^"]+)"\s*:\s*"((?:[^"\\]|\\.)*)"\s*,?\s*$/gm;
  for (const match of block.matchAll(pattern)) values[match[1]] = match[2];
  return values;
}

const translations = {
  pt: parseKeys(section('pt', 'en')),
  en: parseKeys(section('en', 'es')),
  es: parseKeys(section('es', null)),
};
const languages = Object.keys(translations);
const referenceKeys = new Set(Object.keys(translations.en));
const errors = [];

for (const language of languages) {
  const keys = new Set(Object.keys(translations[language]));
  for (const key of referenceKeys) if (!keys.has(key)) errors.push(`${language} is missing ${key}`);
  for (const key of keys) if (!referenceKeys.has(key)) errors.push(`${language} has unexpected key ${key}`);
}

const distinctAcrossLanguages = [
  'nav.dashboard',
  'projectModal.adrLabel',
  'projectModal.testSuiteLabel',
  'nav.toggleMenu',
  'common.closeModal',
];
for (const key of distinctAcrossLanguages) {
  const values = languages.map((language) => translations[language][key]);
  if (values.some((value) => !value || !value.trim())) {
    errors.push(`${key} is missing a localized value`);
  } else if (new Set(values).size !== languages.length) {
    errors.push(`${key} must have distinct PT/EN/ES wording; got ${JSON.stringify(values)}`);
  }
}

if (errors.length) {
  console.error('i18n validation failed:');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`i18n validation passed: ${referenceKeys.size} keys across PT/EN/ES; localized dashboard, modal, and accessibility labels verified.`);
