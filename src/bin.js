import postNpmInstall from "./index.js";

const checkoutArgs = (process.env.HUSKY_GIT_PARAMS || "").split(" ");
const setToCi = process.argv.length > 2 && process.argv[2] === "ci";

postNpmInstall(checkoutArgs, setToCi);
