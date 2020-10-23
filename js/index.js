//--------------------------------------
//**************************************
// Timeline of the experiment
//**************************************
//--------------------------------------

function createTimeline()
{
	var exp_timeline = [];
	jsPsych.data.addProperties({subjectNum: subjectNum});

	exp_timeline.push(full_screen, welcome_msg, inputs, instructions, example, calibration_msg, calibration);

	for(curr_blockNum = 0; curr_blockNum < n_blocks; curr_blockNum++)
	{
		exp_timeline.push(pre_block_msg(curr_blockNum+1, curr_totalTrialNum));

		for(curr_trialNum = 0; curr_trialNum < n_Trials; curr_trialNum++)
		{	
			// do forced click recalibration
			// change the number of trials as required
			if(curr_trialNum%16 == 0)
			{
				exp_timeline.push(loop_forced_clickRecal);
			}

			// pre-trial eye-tracking validation
			exp_timeline.push(loop_fixation);

			// get counterbalanced data
			// data will be stored as array of dictionaries
			// store data in variables for the current particular trial, as required
			// ...
	



			// push jsPsych trials
			// ...



			curr_totalTrialNum++;
		}

		exp_timeline.push(post_block_msg());

		// validation of calibration
		// change the trial number according to your convenience
		exp_timeline.push(loop_validation);
	}
	return exp_timeline;
}