//create variable for url
var samples_url =  "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
var dataProm = d3.json(samples_url);

//initializes
dataProm.then(function(data) {

    let names = Object.values(data.names);
    d3.select("#selDataset")
        .selectAll('options')
        .data(names)
        .enter()
        .append("option")
        .text(function(d) {console.log(d); return d;
        });
});

//metadata panel inclusion
function metaDataPanel(namesID){
    let testingID = parseInt(namesID);
    dataProm.then((data) => {

        let metaData = data.metadata;
        console.log(metaData)
        let selected = metaData.filter(namesID => namesID.id === testingID);
        console.log(selected);
        let selection = selected[0];
        console.log(selection)
        let sampleMDPanel = d3.select("#sample-metadata");

        Object.entries(selection).forEach(([key, value]) => {
            sampleMDPanel.append("h6").text(`${key} : ${value}`);
        });

    });
}

// function to update data
function updateData(namesID) {
    console.log(namesID);
    init(namesID);
}

//charts initialization
function init(namesID) {
    metaDataPanel(namesID)
    dataProm.then(function(data) {

        let testing = Object.values(data.samples[0]);

        let sample_val = testing[2].slice(0,10).reverse();

        let otu_id = testing[1].slice(0,10).map(otu_id => "OTU" + otu_id).reverse();

        let otu_labels = testing[3].slice(0,10).reverse();

        let combinedData = testing.map((testing, index) => {return {testing : testing, sample_val : sample_val[index]}})

        let sortedData = combinedData.sort()


        let names = ['Adam', 'Reed', 'Katie', 'Phil']
        let ages = [27, 67, 25, 40]
        console.log(names)
        console.log(ages)
        // sort ages
        ages.sort()
        console.log(names)
        console.log(ages)

        names = ['Adam', 'Reed', 'Katie', 'Phil']
        ages = [27, 67, 25, 40]
        people = names.map((name, index)=>{ return {name:name, age: ages[index] } })
        //people.sort(...)
        console.log(people)


        // people_list = [{name:'Adam', age:27}, {name:'Reed', age:67}, {name:'katie' age:25}, {name:'Phil', age:40}]

        let barChart = [{
            x : sample_val,
            y : otu_id,
            text : otu_labels,
            type : 'bar',
            orientation : 'h'
        }];

        Plotly.newPlot('bar', barChart);

//bubble chart thing
        let bubbleChart = [{
            x : otu_id, 
            y : sample_val,
            mode : 'markers',
            marker : {
                size : sample_val
            }
        }];

        Plotly.newPlot('bubble', bubbleChart);
    });
};