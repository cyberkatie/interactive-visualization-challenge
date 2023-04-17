//create variable for url
var samples_url =  "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";
var dataProm = d3.json(samples_url);

//initializes
function init(){
dataProm.then((data) => {

    var names = data.names;
    names.forEach((sample) => {
        d3.select("#selDataset")
          .append("option")
          .text(sample)
          .property("value", sample);
      });

      /*
    let names = Object.values(data.names);
    d3.select("#selDataset")
        .selectAll('options')
        .data(names)
        .enter()
        .append("option")
        .text(function(d) { return d;
        });
*/

    //initial plots
    let FirstSample = names[0];
    charts(FirstSample);
    show(FirstSample);

});
};

//initializes
init();

function charts(sample){
    dataProm.then((data) => {
    //variable to hold the first sample in the array
    let FirstSample = data.samples.filter(sampleID => sampleID.id == sample)[0];

    //variables for otu_ids, otu_labels, and sample_values
    let otuID = FirstSample.otu_ids;
    let otuLabel = FirstSample.otu_labels;
    let sampleValues = FirstSample.sample_values;

    //creating y data, labels, and values
    var y = (
        otuID
        .slice(0, 10)
        .map(val => `OTU ${val}`)
        .reverse()
        );

    labels = (
        otuLabel
        .slice(0, 10)
        .map(val => val)
        .reverse());

    values = (
      sampleValues
      .slice(0, 10)
      .map(val => val)
      .reverse());

      //bar chart
      var barChart = [{
        x: values, 
        y: y,
        text: labels, 
        type: 'bar',
        orientation: 'h'
      }];

      //layout
      var barLayout = {
        hovermode: 'closest',
        title: '<b>Top 10 Bacteria Cultures Found</b>'
      };

      // Use Plotly to plot the data with the layout. 
    Plotly.newPlot('bar', barChart, barLayout);

    //bubble chart
    var bubbleChart = [{
        x: otuID, 
        y: sampleValues, 
        text: otuLabel,
        mode: 'markers',
        marker: { 
          size: sampleValues,
          color: otuID,
          colorscale: 'Picnic' }
      }];
      // Create layout for bubble chart.
      var bubbleLayout = {
        hovermode: 'closest',
        title: '<b>Bacteria Cultures per Sample</b>',
        xaxis: { title: 'OTU ID' }
      };
      // Use Plotly to plot the data with the layout.
      Plotly.newPlot('bubble', bubbleChart, bubbleLayout);
    })
}

function show(sample) {
    dataProm.then((data) => {
      var metadata = data.metadata;
      var results = metadata.filter(sampleID => sampleID.id == sample);
      var result = results[0];
      var panel = d3.select("#sample-metadata");
  
      panel.html("");
    
      Object.entries(result).forEach(([id, val]) => {
        panel.append("h6").text(id.toUpperCase() + ': ' + val);
      });
    });
  }

  function updates(sampleID) {
    show(sampleID);
    charts(sampleID);
  }
  
 /*
//charts initialization
function init(namesID) {
    metaDataPanel(namesID)
    dataProm.then(function(data) {

        let testing = Object.values(data.samples[0]);
        console.log(testing);

        let sample_val = testing[2].slice(0,10).reverse();

        let otu_id = testing[1].slice(0,10).map(otu_id => "OTU" + otu_id).reverse();

        let otu_labels = testing[3].slice(0,10).reverse();

        let combinedData = testing.map((testing, index) => {return {testing : testing, sample_val : sample_val[index]}})

        let sortedData = combinedData.sort()


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

        panel.html(""); 

        Object.entries(selection).forEach(([key, value]) => {
            sampleMDPanel.append("h6").text(`${key} : ${value}`);

        });

    });
}

// function to update data
//function updateData(namesID) {
function updateData(testingID) {
    console.log(testingID);
    init(testingID);
}

/*
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

function newchoice(namesID) {
    makedata(namesID);
    makechart(namesID);
  }
  */