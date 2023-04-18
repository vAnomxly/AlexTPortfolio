
var question = document.getElementsByClassName("question")
var form = document.getElementById('form')
var container = document.getElementById("container")
var fbutton = document.getElementById('fbutton')
var qdiv = document.getElementById("qdiv")
var final = document.createElement("div");
final.setAttribute('type', 'text');
final.innerHTML = qdiv.innerHTML;
var counter = 0;
var qts = [""];
var done = document.getElementById("done");
var yes = document.getElementsByClassName("yes");
var no = document.getElementsByClassName("no");
yes[0].style.display = "none"
no[0].style.display = "none"
var title = ""


function append(){
    if(question[counter].value==''){
        alert("Fill in the question box")
    }
    else{
        var newdiv = document.createElement("div")
        
        newdiv.innerHTML = final.innerHTML
        newdiv.setAttribute('type', 'text');
        
        qdiv.append(newdiv) 
        qts[counter] = question[counter].value
        console.log(question[counter].value);
        counter++;
    }
    
    
 
}


var yesnum = 0;
var nonum = 0;
var both = 0;
var score = [""];





function send(){
    if(question[counter].value==''){
        alert("Fill in the question box")
    }
    else{
        var qform = document.getElementById("qform")
        var quiz = document.getElementById('quiz')
        var head = document.createElement("h1")
        head.setAttribute('type', 'text');
        yes[0].style.display="inline"
        no[0].style.display="inline"
        
        
        for (var i=0;i<=counter;i++){
            
            head.innerText = question[i].value;
            
            quiz.append(head)
            quiz.append(no[i])
            quiz.append(yes[i])
            score[i] = question[i].value;
        
            qform.innerHTML= qform.innerHTML
            if (i!=counter){
                qform.append(quiz)
            }
            
        }
        done.removeAttribute("onclick")
        var arrY = []
        var arrN = []
        for (let x = 0;x<=no.length-1;x++){
            arrY[x] = [true]
            arrN[x] = [true]
            no[x].addEventListener("click", function noc(){
            if ( arrY[x] && arrN[x] ){
            nonum++;
            arrN[x]=false
            
            both = nonum+yesnum
            console.log(both)
            if (both == (counter+1) ){
                title = "Tasks Performed"
                drawChart()
            }
            
        
    }});
    
        
        yes[x].addEventListener("click", function yesc(){
        if ( arrY[x] && arrN[x] ){
            yesnum++;
            arrY[x]=false
            
            both = nonum+yesnum
            console.log(both)
        if (both == (counter+1)){
            title = "Tasks Performed"
            drawChart()
        }
        
    }});
    }
        
    
}}





    


/*function send(){
    
    qts[counter] = question[counter].value
    for (let i = 0; i<=qts.length-1; i++){
        console.log(qts[i])
    }
}
*/

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
        
        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Task', 'Task ratio'],
            ['NOT DONE', nonum],
            ['DONE', yesnum]
            ]);

        // Optional; add a title and set the width and height of the chart
        var options = {'title':title, 'width':550, 'height':400};

        // Display the chart inside the <div> element with id="piechart"
        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
        
}


