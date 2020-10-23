// Get task input data from csv file in gist github

var trialData_url = //"gist github content in .txt";
// In the url, the content is stored as a txt file with trial details along a row (separated by comma)
var request = new XMLHttpRequest();  
request.open("GET", trialData_url, false);   
request.send(null);  

var trialData = [];

var jsonObject = request.responseText.split(/\r?\n|\r/);
for (i = 0; i < jsonObject.length; i++) 
{
	/* EXAMPLE --

	trialwiseData_obj = {};
	trialwiseData_arr = jsonObject[i].split(',');
	trialwiseData_obj.WM_cue = parseInt(trialwiseData_arr[0]);
	
	trialData.push(trialwiseData_obj);
	*/
}