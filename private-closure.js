// 使用闭包实现私有成员

var person = (function() {
    var age = 25; //私有成员
    return {
        name: "Nicholas",
        getAge: function () {
            return age;
        },
        growOlder: function () {
            age++;
        }
    }; 
}());

console.log(person.age);
console.log(person.getAge())

function find2(firstName, lastName)
{　
    var result = [];　　
    for (var i = 0; i < this.names.length; i++)
    {　　　　
        if (this.names[i] === (firstName + " " + lastName))
        {　　　　　　
            result.push(this.names[i]);　　　　
        }　　
    }　　
    return result;
}

function addMethod(f) {
    if (f.length === 2) {
        console.log("yes");
    }
    else {
        console.log("no");
        
    }
}

var people = {　　
    names: ["Dean Edwards", "Alex Russell", "Dean Tom"]
};
people["find here"] = function () {
    console.log("find it");
}
var old = people["find here"]

function test (a,b,c) {
    return a+b+c
}
console.log();




