//--------------------------------------
//**************************************
// Messages to the subject - Psych blocks
//**************************************
//--------------------------------------

//--------------------------------------------
// DURING THE EXPERIMENT
//--------------------------------------------

function pre_block_msg(blockNum)
{
	var msg = 
	{
		type: "html-keyboard-response",
		stimulus: function(data)
		{
			return "<p style = 'font-size:25px; color:black'>This is experiment block - "+(blockNum)+"</p>"
				   +"<p style = 'font-size:25px; color:black'>Press any key to start the block.</p>";
		}
	};
	return msg;
}

function post_block_msg()
{
	var msg = 
	{
		type: "html-keyboard-response",
		stimulus: function(data)
		{
			return "<p style = 'font-size:20px; color:black'>You can now take a break. To begin the next block"
				  +", <strong>press any key</strong>.</p>";
		},
	};
	return msg;
}