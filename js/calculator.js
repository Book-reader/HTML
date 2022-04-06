//html required

//<div class = "calculator">
//    <input type=number id=input_id />
//    <br>
//    <label class="paylabel" for="operator">Operator:</label><select id="operator" name="operator"><option value="0">+</option><option value="1">-</option><option value="2">*</option><option value="3">/</option></select>
//    <br>
//    <input type=number id=input2_id />
//   <input type="button" onclick="calculate()" value="Calculate">
//   <script src="./js/calculator.js"></script>
//</div>

//might be usefull
//<div id="maincontent">
//    <div class="innertube">
//    </div>
//</div>


function calculate(){
    const number1 = document.getElementById("input_id").value;//first input
    const number2 = document.getElementById("input2_id").value;//second input

    var ddl = document.getElementById("operator");//detect operator
    var selectedValue = ddl.options[ddl.selectedIndex].value;//detect operator

    let result;

    if (selectedValue == "0") {
        result = +number1 + +number2;
        const operator = "+"
        alert(`${number1} ${operator} ${number2} = ${result}`);
    }
    else if (selectedValue == "1") {
        result = number1 - number2;
        const operator = "-"
        alert(`${number1} ${operator} ${number2} = ${result}`);
    }
    else if (selectedValue == "2") {
        result = number1 * number2;
        const operator = "*"
        alert(`${number1} ${operator} ${number2} = ${result}`);
    }
    else {
        result = number1 / number2;
        const operator = "/"
        alert(`${number1} ${operator} ${number2} = ${result}`);
    }


}
