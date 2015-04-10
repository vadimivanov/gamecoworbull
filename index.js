(function () {
    function generateNumbers() {
        var randomNum = '';
        while(randomNum.length<4){
            var mathNum = Math.floor(Math.random()*10);
            if(randomNum.indexOf(mathNum)<0){
                randomNum += mathNum;
            }
        }
        console.log(randomNum);
        return randomNum;
    }
    var count = 0;

    function check(val1,val2) {
        var cow = 0,bull = 0;
        for (var i = 0; i < val1.length; i++) {
            for (var j = 0; j < val2.length; j++) {
                if(val1[i] == val2[j]){
                    if(i == j){
                        bull += 1;

                    }else{
                        cow += 1;
                    }
                }
            }
        }
        if(val1.length < 4){
            return ['fail','fail'];
        }else{
            return [bull,cow];
        }
    }

    function paintColumns() {
        var fieldNumbers = document.getElementsByClassName('field-number')[0];
        console.log('fieldNumbers',fieldNumbers.value,'=',this.randomNumber);
        var number = document.getElementsByClassName('numbers')[0],
            cow = document.getElementsByClassName('cow')[0],
            bull = document.getElementsByClassName('bull')[0];
            count += 1;

        if(this.randomNumber != fieldNumbers.value){
            if(count < 10){
                console.log('count',count);
                var result = check(fieldNumbers.value,this.randomNumber);
                number.innerHTML += fieldNumbers.value + '<br>';
                bull.innerHTML += result[0] + '<br>';
                cow.innerHTML += result[1] + '<br>';
            }
            if(count == 10){
                document.getElementsByClassName('block-msg')[0].style.display = 'block';
                document.getElementsByClassName('msg')[0].innerHTML = 'you failed!';
            }
        }else{
            document.getElementsByClassName('block-msg')[0].style.display = 'block';
            document.getElementsByClassName('msg')[0].innerHTML = 'you won!';
        }
        fieldNumbers.value = '';
    }
    function clearFields() {
        document.getElementsByClassName('numbers')[0].innerHTML = '';
        document.getElementsByClassName('cow')[0].innerHTML = '';
        document.getElementsByClassName('bull')[0].innerHTML = '';
        document.getElementsByClassName('msg')[0].innerHTML = '';
    }
    function close() {
        document.getElementsByClassName('block-msg')[0].style.display = 'none';
        clearFields();
        start();
    }

    function start() {
        generateNumbers();
        this.randomNumber = generateNumbers();
    }
    window.start = start;
    window.close = close;
    window.paintColumns = paintColumns;
})();
    window.start();

    var fieldNumbers = document.getElementsByClassName('field-number')[0];
    fieldNumbers.onkeypress = function press(event) {
        console.log(event.keyCode);
        if(event.keyCode< 48 || event.keyCode > 57){
            return false;
        }
        if(fieldNumbers.value.length >= 4){
            return false;
        }
        if(fieldNumbers.value.indexOf(String.fromCharCode(event.keyCode)) >= 0){
            return false;
        }

    };