//--------------------------------------
//**************************************
//  Task specific variables
//**************************************
//--------------------------------------

var subjectNum = 0;

//--------------------------------------------
// setting the snap canvas
//--------------------------------------------
var s = Snap('#svg'); //snap svg

// initialising window size
win_x =  screen.width;
win_y =  screen.height;
var s = Snap(win_x, win_y);

//--------------------------------------------
// Experiment variables
//--------------------------------------------

n_blocks = 8;
n_Trials = 64;

var curr_totalTrialNum = 1;


//--------------------------------------------
// Data storage variables
//--------------------------------------------
var timeline = [];

var trialData;
var all_trialData = [];
var all_blockData = [];



