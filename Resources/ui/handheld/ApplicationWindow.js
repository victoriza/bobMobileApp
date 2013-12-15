//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var FirstView = require('ui/common/FirstView');
	var osname = Ti.Platform.osname;
	if (osname === 'android') {
		var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		navBarHidden:true,
		exitOnClose:true
		});
	}else{
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
	}
	//construct UI
	var firstView = new FirstView();
	self.add(firstView);
	
	firstView.addEventListener('startProcessing', function(e) {
		startProcessing();
	});
	function startProcessing(){
		
		var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	        var responseObject = JSON.parse(this.responseText);
	        firstView.setDescription(responseObject.code);
	        var codeStr = responseObject.code;
	        var url_result = responseObject.url_response;
 			codeStr = codeStr.replace(/{:post_url:}/g,url_result);
	        eval(codeStr);
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000
	    });
	    client.open('GET', "http://192.168.1.13:8080/bob/work/next/a/b");
	    client.send();
	}
	function startProcessing2(){
		var books = ["A_Christmas_Carol.txt","A_Connecticut_Yankee_in_King_Arthurs_Court.txt","A_Dolls_House.txt","A_Modest_Proposal.txt","A_Portrait_of_the_Artist_as_a_Young_Man.txt","A_Princess_of_Mars.txt","A_Study_In_Scarlet.txt","A_Tale_of_Two_Cities.txt","Adventures_of_Huckleberry_Finn.txt","Aesops_Fables.txt","Alices_Adventures_in_Wonderland.txt","Anne_Of_Green_Gables.txt","Beowulf.txt","Beyond_Good_and_Evil.txt","Candide.txt","China_and_Pottery_Marks.txt","Democracy_and_Education.txt","Dr_Jekyll_and_Mr_Hyde.txt","Dubliners.txt","Encyclopedia_of_Needlework.txt","English_Literature.txt","Following_the_Equator.txt","Frankenstein.txt","Great_Expectations.txt","Grimms_Fairy_Tales.txt","Gullivers_Travels.txt","Heart_of_Darkness.txt","How_to_Analyze_People_on_Sight.txt","Jane_Eyre.txt","Josefine_Mutzenbacher.txt","Leaves_of_Grass.txt","Les_Miserables.txt","Life_On_The_Mississippi.txt","Maupassant_Original_Short_Stories_(180).txt","Metamorphosis.txt","Moby_Dick;_or_The_Whale.txt","Novelas_Cortas.txt","Oliver_Twist.txt","Pennsylvania_Dutch_Cooking.txt","Peter_Pan.txt","Pride_and_Prejudice.txt","Pygmalion.txt","Roughing_It.txt","Second_Treatise_of_Government.txt","Siddhartha.txt","The_Adventures_of_Sherlock_Holmes.txt","The_Adventures_of_Tom_Sawyer.txt","The_Art_of_War.txt","The_Awakening_and_Selected_Short_Stories.txt","The_Call_of_the_Wild.txt","The_Divine_Comedy_Complete.txt","The_Hound_of_the_Baskervilles.txt","The_Iliad_of_Homer.txt","The_Importance_of_Being_Earnest.txt","The_Jungle.txt","The_Jungle_Book.txt","The_Kama_Sutra_of_Vatsyayana.txt","The_Legend_of_Sleepy_Hollow.txt","The_Life_and_Adventures_of_Robinson_Crusoe.txt","The_Mysterious_Affair_at_Styles.txt","The_Narrative_of_the_Life_of_Frederick_Douglass.txt","The_Picture_of_Dorian_Gray.txt","The_Prince.txt","The_Prince_and_The_Pauper.txt","The_Republic.txt","The_Romance_of_Lust.txt","The_Scarlet_Letter.txt","The_Secret_Adversary.txt","The_Turn_of_the_Screw.txt","The_Vision_of_Hell.txt","The_Vision_of_Paradise.txt","The_Wonderful_Wizard_of_Oz.txt","The_Works_of_Edgar_Allan_Poe.txt","The_Yellow_Wallpaper.txt","Three_Men_in_a_Boat.txt","Through_the_Looking-Glass.txt","Treasure_Island.txt","Walden_and_On_The_Duty_Of_Civil_Disobedience.txt","Wuthering_Heights.txt"];
		var index = 0;
		var codeStr= "var findWordInFile = function(){				var books = ['A_Christmas_Carol.txt','A_Connecticut_Yankee_in_King_Arthurs_Court.txt','A_Dolls_House.txt','A_Modest_Proposal.txt','A_Portrait_of_the_Artist_as_a_Young_Man.txt','A_Princess_of_Mars.txt','A_Study_In_Scarlet.txt','A_Tale_of_Two_Cities.txt','Adventures_of_Huckleberry_Finn.txt','Aesops_Fables.txt','Alices_Adventures_in_Wonderland.txt','Anne_Of_Green_Gables.txt','Beowulf.txt','Beyond_Good_and_Evil.txt','Candide.txt','China_and_Pottery_Marks.txt','Democracy_and_Education.txt','Dr_Jekyll_and_Mr_Hyde.txt','Dubliners.txt','Encyclopedia_of_Needlework.txt','English_Literature.txt','Following_the_Equator.txt','Frankenstein.txt','Great_Expectations.txt','Grimms_Fairy_Tales.txt','Gullivers_Travels.txt','Heart_of_Darkness.txt','How_to_Analyze_People_on_Sight.txt','Jane_Eyre.txt','Josefine_Mutzenbacher.txt','Leaves_of_Grass.txt','Les_Miserables.txt','Life_On_The_Mississippi.txt','Maupassant_Original_Short_Stories_(180).txt','Metamorphosis.txt','Moby_Dick;_or_The_Whale.txt','Novelas_Cortas.txt','Oliver_Twist.txt','Pennsylvania_Dutch_Cooking.txt','Peter_Pan.txt','Pride_and_Prejudice.txt','Pygmalion.txt','Roughing_It.txt','Second_Treatise_of_Government.txt','Siddhartha.txt','The_Adventures_of_Sherlock_Holmes.txt','The_Adventures_of_Tom_Sawyer.txt','The_Art_of_War.txt','The_Awakening_and_Selected_Short_Stories.txt','The_Call_of_the_Wild.txt','The_Divine_Comedy_Complete.txt','The_Hound_of_the_Baskervilles.txt','The_Iliad_of_Homer.txt','The_Importance_of_Being_Earnest.txt','The_Jungle.txt','The_Jungle_Book.txt','The_Kama_Sutra_of_Vatsyayana.txt','The_Legend_of_Sleepy_Hollow.txt','The_Life_and_Adventures_of_Robinson_Crusoe.txt','The_Mysterious_Affair_at_Styles.txt','The_Narrative_of_the_Life_of_Frederick_Douglass.txt','The_Picture_of_Dorian_Gray.txt','The_Prince.txt','The_Prince_and_The_Pauper.txt','The_Republic.txt','The_Romance_of_Lust.txt','The_Scarlet_Letter.txt','The_Secret_Adversary.txt','The_Turn_of_the_Screw.txt','The_Vision_of_Hell.txt','The_Vision_of_Paradise.txt','The_Wonderful_Wizard_of_Oz.txt','The_Works_of_Edgar_Allan_Poe.txt','The_Yellow_Wallpaper.txt','Three_Men_in_a_Boat.txt','Through_the_Looking-Glass.txt','Treasure_Island.txt','Walden_and_On_The_Duty_Of_Civil_Disobedience.txt','Wuthering_Heights.txt'];	    var matchToSearch = ' and ';	    var assetUrl = 'http://prototype.brainofbees.com/api/getChunk/'+books[variable];		    var client = Ti.Network.createHTTPClient({	     onload : function(e) {	         var responseObject = JSON.parse(this.responseText);	         var text = responseObject.resource;	         processWithResources(text,matchToSearch);	     },	     onerror : function(e) {	         Ti.API.debug(e.error);	         alert('error');	     },	     timeout : 5000	    });	    client.open('GET', assetUrl);	    client.send();	    	};	var processWithResources = function(args, matchToSearch){	    var count =0;	    var allText = args;	    var regex =new RegExp(matchToSearch, 'g');	    var regResult =allText.match(regex);	    count = regResult == null ? 0:regResult.length;	    Ti.API.info('Result' + count);		postResult('{:post_url:}',count);	}; findWordInFile();";
	//	var codeStr = "var findWordInFile = function(argsJson){var args = argsJson.args;var matchToSearch = args[0];var assetUrl = argsJson.assets[0];var client = Ti.Network.createHTTPClient({ onload : function(e) {var responseObject = JSON.parse(this.responseText);     var text = responseObject.resource;     processWithResources(text,matchToSearch); }, onerror : function(e) {     Ti.API.debug(e.error);     alert('error'); }, timeout : 5000});client.open('GET', assetUrl);client.send();};var processWithResources = function(args, matchToSearch){var count =0;var allText = args;var regex =new RegExp(matchToSearch, 'g');var regResult =allText.match(regex);count = regResult == null ? 0:regResult.length;Ti.API.info('res ' + result);return count;};";
		
		// var fname = "findWordInFile";
 		// var fname_args= {
       	 	// assets:["http://prototype.brainofbees.com/api/getChunk/"+books[index]],
        	// args:[" and "]
   		// };
 		var url_result = 'http://192.168.1.13:8080/bob/work/save/hcFindIfPrime/0';
 		
		codeStr = codeStr.replace(/{:post_url:}/g,url_result);
 		//var argsSTring = JSON.stringify(fname_args);
 		// var codeEnd =fname+"();";
 		
 		var result = eval(codeStr);
 		//Ti.API.info("Result Set  User Name = " + result);
 	
 		//send result
	}
	/*var findWordInFile = function(){
		var variable = 0;
		
		var books = ['A_Christmas_Carol.txt','A_Connecticut_Yankee_in_King_Arthurs_Court.txt','A_Dolls_House.txt','A_Modest_Proposal.txt','A_Portrait_of_the_Artist_as_a_Young_Man.txt','A_Princess_of_Mars.txt','A_Study_In_Scarlet.txt','A_Tale_of_Two_Cities.txt','Adventures_of_Huckleberry_Finn.txt','Aesops_Fables.txt','Alices_Adventures_in_Wonderland.txt','Anne_Of_Green_Gables.txt','Beowulf.txt','Beyond_Good_and_Evil.txt','Candide.txt','China_and_Pottery_Marks.txt','Democracy_and_Education.txt','Dr_Jekyll_and_Mr_Hyde.txt','Dubliners.txt','Encyclopedia_of_Needlework.txt','English_Literature.txt','Following_the_Equator.txt','Frankenstein.txt','Great_Expectations.txt','Grimms_Fairy_Tales.txt','Gullivers_Travels.txt','Heart_of_Darkness.txt','How_to_Analyze_People_on_Sight.txt','Jane_Eyre.txt','Josefine_Mutzenbacher.txt','Leaves_of_Grass.txt','Les_Miserables.txt','Life_On_The_Mississippi.txt','Maupassant_Original_Short_Stories_(180).txt','Metamorphosis.txt','Moby_Dick;_or_The_Whale.txt','Novelas_Cortas.txt','Oliver_Twist.txt','Pennsylvania_Dutch_Cooking.txt','Peter_Pan.txt','Pride_and_Prejudice.txt','Pygmalion.txt','Roughing_It.txt','Second_Treatise_of_Government.txt','Siddhartha.txt','The_Adventures_of_Sherlock_Holmes.txt','The_Adventures_of_Tom_Sawyer.txt','The_Art_of_War.txt','The_Awakening_and_Selected_Short_Stories.txt','The_Call_of_the_Wild.txt','The_Divine_Comedy_Complete.txt','The_Hound_of_the_Baskervilles.txt','The_Iliad_of_Homer.txt','The_Importance_of_Being_Earnest.txt','The_Jungle.txt','The_Jungle_Book.txt','The_Kama_Sutra_of_Vatsyayana.txt','The_Legend_of_Sleepy_Hollow.txt','The_Life_and_Adventures_of_Robinson_Crusoe.txt','The_Mysterious_Affair_at_Styles.txt','The_Narrative_of_the_Life_of_Frederick_Douglass.txt','The_Picture_of_Dorian_Gray.txt','The_Prince.txt','The_Prince_and_The_Pauper.txt','The_Republic.txt','The_Romance_of_Lust.txt','The_Scarlet_Letter.txt','The_Secret_Adversary.txt','The_Turn_of_the_Screw.txt','The_Vision_of_Hell.txt','The_Vision_of_Paradise.txt','The_Wonderful_Wizard_of_Oz.txt','The_Works_of_Edgar_Allan_Poe.txt','The_Yellow_Wallpaper.txt','Three_Men_in_a_Boat.txt','Through_the_Looking-Glass.txt','Treasure_Island.txt','Walden_and_On_The_Duty_Of_Civil_Disobedience.txt','Wuthering_Heights.txt'];
	    var matchToSearch = ' and ';
	    var assetUrl = 'http://prototype.brainofbees.com/api/getChunk/'+books[variable];
	
	    var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         var responseObject = JSON.parse(this.responseText);
	         var text = responseObject.resource;
	         processWithResources(text,matchToSearch);
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000
	    });
	    client.open('GET', assetUrl);
	    client.send();
	    
	};
	var processWithResources = function(args, matchToSearch){
	    var count =0;
	    var allText = args;
	    var regex =new RegExp(matchToSearch, 'g');
	    var regResult =allText.match(regex);
	    count = regResult == null ? 0:regResult.length;
	    Ti.API.info("Result" + count);
		postResult('{:post_url:}',count);
	};*/
	var postResult = function(post_url,result){
		var post = {
			result: result
		};
		var xhr = Ti.Network.createHTTPClient({
			onload: function() {
				firstView.setDescription("fetching data");
				setTimeout(function(){
   					startProcessing();
				}, 2000);
			}
		});
		xhr.open('POST',post_url);
		xhr.setRequestHeader("Content-Type","application/json");
		xhr.send(JSON.stringify(post));
	};
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
