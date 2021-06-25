        function compute() {
        
            var principal = document.getElementById("principal").value;

                if (principal <=0 ) {
                alert("Enter a positive number");
                }

            var rate = document.getElementById("rate").value;
            var years = document.getElementById("years").value;
            var interest = principal * years * rate /100;
            var year = new Date().getFullYear()+parseInt(years);

            

            document.getElementById("result").innerHTML="\<br\>\<br\><b>If</b> you deposit " + principal + ",\<br\> <b>at</b> an interest rate of " + rate + "%.\<br\> <b>You</b> will receive an amount of " + interest + ",\<br\> <b>in</b> the year "+year + "\<br\>";
         }

        function updateRate() {
        
            var rateval = document.getElementById("rate").value;
            document.getElementById("rate_val").innerText=rateval;
        }   
        
