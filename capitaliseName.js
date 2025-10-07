export function capitaliseName(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}
console.log(capitaliseName(['jo', 'nelson', 'jurie']));

