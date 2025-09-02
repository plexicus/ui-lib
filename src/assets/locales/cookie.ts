/* eslint-disable @typescript-eslint/no-explicit-any */
const dictionaries: Record<string, string|any> = {};
const yamlFiles = import.meta.glob(['./**/cookie.yml', './**/cookie.yaml'], { eager: true });
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

    // Assign flattened data to the correct language dictionary and namespace ('cookie')
    // i18next expects resources in the format { lng: { ns: { key: value } } }
    if (!dictionaries[language]['cookie']) {
        dictionaries[language]['cookie'] = {};
    }
    Object.assign(dictionaries[language], fileData);
}

export default dictionaries;