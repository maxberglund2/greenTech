function convert() {
    event.preventDefault(); // Refresha inte sidan
    let temp = document.getElementById('temp').value;
    let hr = document.getElementById('time').value;
    let power = (temp * 1.16194) / 1000;
    let x = hr * 3.760;
    let cost = power * x; 
    if(temp > - 1 && hr > - 1 && time != "" && hr != "")
    {
        document.getElementsByName('power')[0].value = power + " kWh";
        document.getElementById('result').innerText = cost + " kr";
        document.getElementById('hide1').style.display = "block";
        document.getElementById('result').style.display = "block";
        document.getElementById('margin').style.marginBottom = "20px";
    } else
    {
        alert("Invalid Input!");
    }
}