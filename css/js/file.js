var calcBtn = document.querySelector("#calc");
var FuncIntegral = document.querySelector('input[name="function"]');
var firstInterval = document.querySelector('input[name="firstInterval"]');
var secondInterval = document.querySelector('input[name="secondInterval"]');
var iteration = document.querySelector('input[name="iteration"]');
calcBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var a = parseInt(firstInterval.value), b = parseInt(secondInterval.value), n = parseInt(iteration.value);
    var N = 2 * n;
    var h = (b - a) / N;
    var x = new Array(n);
    var sum = 0;
    function f(x) {
        return (Math.sin(3 * x / 2) + 1 / 2);
    }
    sum += f(a) + f(b);
    var H = document.createElement("p");
    H.innerHTML = `h = <span>${h}</span>`;
    document.querySelector(".h").appendChild(H);
    for (var i = 0; i <= N; i++) {
        x[i] = a + i * h;
        if (i != 0 && i != N && i % 2 == 0) {
            sum += 2 * f(x[i]);
        }
        else if (i != 0 && i != N && i % 2 != 0) {
            sum += 4 * f(x[i]);
        }
        var stroka = document.createElement("tr");
        stroka.innerHTML = `<th>${i}</th>`;
        stroka.innerHTML += `<td>${x[i]}</td>`;
        stroka.innerHTML += `<td>${f(x[i])}</td>`;
        document.querySelector("tbody").appendChild(stroka);
    }
    integral = sum * h / 3;
    console.log(integral);
    var integralStr = document.createElement("tr");

    integralStr.innerHTML += `<td>${integral}</td>`;
    document.querySelector("tbody").appendChild(integralStr);
});
$(document).ready(function () {
    $("#logoSimpson").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});

