var url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url, function(data) {
    //console.log(data);
    console.log(data.samples[0])

    //create an empty array
    let myArray = [];

    //uses a for loop to push just the names (participant's ID) to the array
    for (let i = 0; i < data.names.length; i++) {
        myArray.push(data.names[i]);
    };

    //getting dropdown element from DOM
    var select = document.getElementById("selDataset");

    //loops through myArray and creates a new DOM node for each name
for (let i = 0; i < myArray.length; i++) {
    let option = myArray[i];
    let element =  document.createElement("option");
    element.textContent = option;
    element.value = option;
    select.add(element);
}

// creates new arrays where metadata and samples are pushed to using a for loop
let myMetaData = [];
let mySamples = [];
for (let j = 0; j < data.metadata.length; j++) {
    myMetaData.push(data.metadata[j]);
    mySamples.push(data.samples[j])
};

//configuring a bar chart
const config = {
    type : 'bar',
    data : data.samples
}

}
);