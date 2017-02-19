var Lean = module.exports = {}

Lean.initialize = function() {
    console.log("VM starting")
}

Lean.mk_vm_nat = function(number) {}

Lean.mk_native_closure = function() {
    console.log(arguments);
    let args = Array.from(arguments);
    let fn = args[0];
    return fn.bind.apply(fn, args.slice(1))
}

Lean.put_str = function(string) {
    console.log(Lean.to_string(string))
}

Lean.nat_succ = function(n) {
    return n + 1;
}

Lean.nat_decidable_lt = function (n, m) {
    return n < m;
}

Lean.error = function(message) {
    throw message;
}

Lean.tag = function(obj) {
    switch (typeof(obj)) {
        case 'boolean': {
            if (obj) {
                return 1;
            } else {
                return 0;
            }
        }
        case 'number' : {
            return obj;
        }
        case 'object' : {
            return obj.ctor_tag;
        }
        default: {
            console.log(typeof(obj));
            throw "NYI";
        }
    }
}

Lean.mk_vm_simple = function(num) {
    return num;
}

Lean.mk_vm_constructor = function() {
    let args = Array.from(arguments);
    let index = args[0];
    return {
        ctor_tag: index,
        fields: args.slice(1),
    };
}

Lean.invoke = function (fn, arg) {
    switch (fn.length) {
        case 0:
          throw "NYI";
          break;
        case 1:
          return fn.apply(fn, [ arg ])
        default:
          console.log(fn.length)
          throw "NYI"
    }
}

Lean.to_string = function (str) {
    let string = "";
    while (Lean.tag(str) != 0) {
        string += String.fromCharCode(str.fields[0]);
        str = str.fields[1]
    }
    return string;
}

