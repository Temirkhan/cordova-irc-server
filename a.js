var msgs = [];
	function addMessagesWithLimit(message, limit)
	{
		msgs.push(message)
		while(msgs.length>limit)
		{
			msgs.shift();
		}
	}
	for(var i=0;i<20;i++) {
	var testMessage={
		login:"Login"+i,
		message:"Message"+i
	};
	addMessagesWithLimit(testMessage, 10);
	}
	console.log(msgs);