

String.prototype.multiply = function (num) {
    let s = "";

    for (let i = 0; i < num; i++) {
        s += this;
    }

    return s;
}

export default String.prototype.multiply;