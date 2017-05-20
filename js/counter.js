    svar biryear = 1997;
	var birmonth = 05;
	var birday = 21;
	var year = new Date();
	var getyear = year.getYear();
	TMonth = new Array('Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec');
	nowMonth = birmonth - 1;
	bmonth = TMonth[nowMonth];
	var timerid;
	var timerRunning = false;
	var today = new Date();
	var startday = new Date();
	var enday = new Date();
	var minPerDay = 0;
	var secsLeft = 0;
	var secsRound = 0;
	var secsRemain = 0;
	var minLeft = 0;
	var minRound = 0;
	var minRemain = 0;
	var timeRemain = 0;
	function showtime() 
	{
		startday = new Date(""+bmonth+" "+birday+", "+biryear+" 0:00 EDT");
		startday.setYear(""+biryear+"");
		today = new Date();
		secsPerDay = 1000 ;
		minPerDay = 60 * 1000 ;
		hoursPerDay = 60 * 60 * 1000;
		PerDay = 24 * 60 * 60 * 1000;
		secsLeft = (today.getTime() - startday.getTime()) / minPerDay;
		secsRound = Math.round(secsLeft);
		secsRemain = secsLeft - secsRound;
		secsRemain = (secsRemain < 0) ? secsRemain = 60 - ((secsRound - secsLeft) * 60) : secsRemain = (secsLeft - secsRound) * 60;
		secsRemain = Math.round(secsRemain);
		minLeft = ((today.getTime() - startday.getTime()) / hoursPerDay);
		minRound = Math.round(minLeft);
		minRemain = minLeft - minRound;
		minRemain = (minRemain < 0) ? minRemain = 60 - ((minRound - minLeft) * 60) : minRemain = ((minLeft - minRound) * 60);
		minRemain = Math.round(minRemain - 0.495);
		hoursLeft = ((today.getTime() - startday.getTime()) / PerDay);
		hoursRound = Math.round(hoursLeft);
		hoursRemain = hoursLeft - hoursRound;
		hoursRemain = (hoursRemain < 0) ? hoursRemain = 24 - ((hoursRound - hoursLeft) * 24)  : hoursRemain = ((hoursLeft - hoursRound) * 24);
		hoursRemain = Math.round(hoursRemain - 0.5);
		daysLeft = ((today.getTime() - startday.getTime()) / PerDay);
		daysLeft = (daysLeft - 0.5);
		daysRound = Math.round(daysLeft);
		daysRemain = daysRound;
		day_rem = " 天 "
		hour_rem = " 小时 "
		min_rem = " 分 "
		sec_rem = " 秒"
        
		timeRemain = daysRemain + day_rem + hoursRemain + hour_rem + minRemain + min_rem + secsRemain + sec_rem;
		document.getElementById("changer").innerHTML = timeRemain;
		timerid = setTimeout("showtime()",1000);
		timerRunning = true;
	}