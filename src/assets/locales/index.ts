import flattenYamlObject from '../../lib/flattenObject';


const dictionaries: Record<string, any> = {};
const yamlFiles = import.meta.glob(['./**/*.yml', './**/*.yaml'], { eager: true });

for (const path in yamlFiles) {
    const fileData = yamlFiles[path];
    const sanitizedPath = path.replace(/^\.\/|\/$/g, '');
    const language = sanitizedPath.split('/')[0]; // Extracts 'en', 'es', 'it'

    if (!dictionaries[language]) {
        dictionaries[language] = {};
    }

    // Ensure fileData is an object (in case it's a primitive type, though unlikely with YAML)
    if (typeof fileData !== 'object' || fileData === null) {
        console.warn(`File ${path} is not a valid object, skipping.`);
        continue;
    }

    // Assign flattened data to the correct language dictionary and namespace ('translation')
    // i18next expects resources in the format { lng: { ns: { key: value } } }
    if (!dictionaries[language]['translation']) {
        dictionaries[language]['translation'] = {};
    }
    Object.assign(dictionaries[language]['translation'], flattenYamlObject(fileData));
}
export default dictionaries;