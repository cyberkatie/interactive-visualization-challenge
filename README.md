# interactive-visualization-challenge
Penn Bootcamp Module 14 Challenge

Used the D3 library to read in samples.json from the URL https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.

* Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  * Used sample_values as the values for the bar chart.
  * Use otu_ids as the labels for the bar chart.
  * Use otu_labels as the hovertext for the chart.

* Created a bubble chart that displays each sample.
  * Use otu_ids for the x values.
  * Use sample_values for the y values.
  * Use sample_values for the marker size.
  * Use otu_ids for the marker colors.
  * Use otu_labels for the text values.

* Displayed the sample metadata, i.e., an individual's demographic information.
* Displayed each key-value pair from the metadata JSON object on the page.
* Updated all the plots when a new sample is selected.

Website deployed at http://cyberkatie.github.io
