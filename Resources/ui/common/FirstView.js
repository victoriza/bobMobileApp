//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	self.backgroundColor = '#3d9eff';
	var button = Ti.UI.createButton({
		backgroundColor:'#000000',
		color:'#ffffff',
    	title: 'Start',
    	width: 200,
    	height: 50
	});
	self.add(button);
	var image = Ti.UI.createImageView({
		image:'bob.png',
		width: 100,
		height:100,
		bottom:'20%'
	});
	self.add(image);
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var label = Ti.UI.createLabel({
		color:'#000000',
		font: { fontSize:10 },
		text:String.format(L('welcome'),'Titanium'),
		height:'25%',
		width:'90%',
		top:'15%'
	});
	self.add(label);
	
	//Add behavior for UI
	button.addEventListener('click', function(e) {
		self.fireEvent('startProcessing', {
			
		});
	});
	
	self.setDescription = function(text){
		label.text = text;
	};
	
	return self;
}

module.exports = FirstView;
