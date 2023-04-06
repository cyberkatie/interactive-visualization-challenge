const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

d3.json('../../samples.json', function(data) {
    //console.log(data);
    let myArray = [];
    for (let i = 0; i < data.length; i++) {
        myArray.push(data.names);
        console.log(myArray)
    };
    //let names = Object.values(data.names);
    //let labels = Object.keys(data.names);
});

d3.selectAll("selDataset").on("change", updatePlotly);
// This function is called when a dropdown menu item is selected
function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select("selDataset");
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property("value");
  
}

function init() {
    let data = [{
        values : names,
        labels : labels,
        type : "bar"
    }];

    Plotly.newPlot("bar", data)
}
