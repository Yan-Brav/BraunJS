const u1 = { name: "Cynthia"};
const u2 = { name: "Jackson" };
const u3 = { name: "Olive" };
const u4 = { name: "James" };

const userRoles = new Map();
userRoles.set(u1, 'User')
        .set(u2, 'User')
        .set(u3, 'Admin');

const userRoles1 = new Map([
        [u1, 'User']
        ,[u2, 'Admin']
        ,[u3, 'User']
]);
console.log(userRoles1.get(u2));
console.log(userRoles.get(u2));
console.log(userRoles.has(u2));
console.log(userRoles.has(u4));
console.log(userRoles.size);
console.log(userRoles.keys());
console.log(userRoles.values());
console.log(userRoles.entries());
console.log("------------------");
for (let u of userRoles.keys())
    console.log(u.name);
console.log("------------------");
for (let r of userRoles.values()) {
    console.log(r);
}
console.log("------------------");
for (let ur of userRoles) {
    console.log(ur);
}
console.log("------------------");
console.log("------------------");
for (let [u, r] of userRoles) {
    console.log(`${u.name}: ${r}`);
}
console.log("------------------");
console.log([...userRoles.values()]);
console.log("------------------");
userRoles1.clear();
console.log(userRoles1.size);
console.log("------------------");



