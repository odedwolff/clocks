
var DIRECTION_NEXT = 1;
var DIRECTION_PREV = 2;
var activePanel;

var panels = [
		{
			name:"panel1",
			onHide : function(){},
			onShow : function(){}
		},
		{
			name:"panel2",
			onHide : function(){},
			onShow : function(){}
		},
		{
			name:"panel3",
			interval : -1, 
			onHide : function(){
				clearInterval(interval);
			},
			onShow : function(){
				interval = startTickingFCst1CheckClock(11, "svg3");
			}
		},
		{
			name:"panel4",
			onHide : function(){},
			onShow : function(){}
		},
	
	];
	
function switchPanel(direction){
		var followingPanel;
		switch (direction){
			case DIRECTION_NEXT:
				followingPanel = activePanel.nextPanel;
				if(followingPanel == null){
					return;
				}
				break;
			case DIRECTION_PREV:
				followingPanel = activePanel.prevPanel;
				if(followingPanel == null){
					return;
				}
				break;
		}
		
		activePanel.onHide();
		$("#" + activePanel.name).hide();
		$("#" + followingPanel.name).show().find("*").show();
		followingPanel.onShow();
		
		activePanel = followingPanel;
}
	
//links elements of the panels array to their proper navigation previous and next elements 
function linkPannels(){
	for(i = 0 ; i < panels.length - 1 ; i++){
		panels[i].nextPanel = panels[i + 1];
		panels[i + 1].prevPanel = panels[i];
	}
	panels[0].prev = null;
	panels[panels.length - 1];
		
}


//export functions through quasi namesapce 	
var nav = {
	
	initPanels: function (){
		$("#svgCont *").hide();
		$("#panel1").show().find("*").show();
		linkPannels();
		activePanel = panels[0];
	},
	

	pageUp : function(){
		switchPanel (DIRECTION_NEXT);
	},
	
	pageDown : function(){
		switchPanel (DIRECTION_PREV);
	}

}

