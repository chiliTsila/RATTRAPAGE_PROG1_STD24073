export function capitalizeNames(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}
console.log(capitalizeNames(['jo', 'nelson', 'jurie']));

console.log(capitalizeNames(['KARLY', 'DANIEL', 'KELSEY']));