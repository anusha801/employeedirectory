var env = 'LOCAL';
var props = {
    LOCAL: {
        app: {
            port: process.env.PORT
        }
    }
};
var setEnv = function (newEnv) {
    if (props[newEnv]) {
        env = newEnv;
    }
};
var getprops = function () {
    return props[env];
}
module.exports = {
    props: getprops,
    setEnv: setEnv
};
