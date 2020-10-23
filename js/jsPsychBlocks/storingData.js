//--------------------------------------------
// STORING DATA
//--------------------------------------------

/*

EXAMPLE --------


function storeData(blockNum, trialNum, cue_pos, initialAngles, changeState, changeDirection, delayDurationFixation, delayDuration, probe_pos, curr_totalTrialNum)
{
	var psychBlock_store = 
	{
		type:"html-keyboard-response", // dummy
		data:
		{
			subjectNum: subjectNum,
			blockNum: blockNum,
			trialNum: trialNum,
			WM_cue: cue_pos,
			initialAngles: initialAngles,
			delayDurationFixation: delayDurationFixation,
			delayDuration: delayDuration,
			changeState: changeState,
			changeDirection: changeDirection,
			WM_Probe: probe_pos
		},
		on_load: function(data) 
		{
  		    console.log('Storing Data...');
  		},
		stimulus: function()
		{
			return " ";
		},
		trial_duration: 15,
		on_finish: function(data)
		{
			// store data stored in global arrays or dictionaries here

			data.finalAngles = finalAngleData[curr_totalTrialNum];

			
			// always set this to 1 here so that it can be pulled out in the index.html file
			data.is_trialData = 1;

			// modify staircasing information according to your needs
			if(trialNum % 8 == 0)
			{
				data.is_staircaseData = 1;
			}

			// eye trial rejection data
			// 1 for reject trial and 0 for do not reject trial
			is_trialReject = trialRejection();
			data.is_trialReject = is_trialReject;
		}
	}
	return psychBlock_store;
}

*/
