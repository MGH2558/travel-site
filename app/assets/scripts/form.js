const capitalize = word => word.slice(0,1).toUpperCase() + word.substr(1);
const message = name => console.log(`Hello, dear ${capitalize(name)} the sky is blue`);


export { message };