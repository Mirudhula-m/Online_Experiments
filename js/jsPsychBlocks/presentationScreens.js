//--------------------------------------
//**************************************
// PRESENTATION SCREENS
//**************************************
//--------------------------------------


/*

 EXAMPLE ----


//--------------------------------------
// FIXATION DOT
//--------------------------------------

function screen1(duration, curr_totalTrialNum)
{

	var psychBlock_NR =
	{
		type:"html-keyboard-response",
		trial_duration: duration,
		choices: jsPsych.NO_KEYS,
		stimulus: function()
		{
			fixationDot();
			stim_str = s.toString();
			s.clear();
			return stim_str;
			
		},
		on_load: function() 
		{
			console.log("---------------------------------------------------");
			console.log("START OF NEW TRIAL "+curr_totalTrialNum+" ---------");
			console.log("---------------------------------------------------");
//  		    console.log('s1 just finished loading.');
  		},
	}
	return psychBlock_NR;
}

*/