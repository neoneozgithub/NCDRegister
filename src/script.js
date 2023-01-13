function doGet() {
  return HtmlService.createTemplateFromFile('login')
  .evaluate()
  .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

function signup(obj){
  var ss = SpreadsheetApp.getActive().getSheets()[0]
  ss.appendRow([new Date(),obj.input1,obj.input2,obj.input3])
  return true
}

function signin(obj){
  var data = SpreadsheetApp.getActive().getSheets()[0].getDataRange().getDisplayValues()
  var output = false
  data.forEach(f=>{
    if(f[1].indexOf(obj.input1)>-1 && f[2].indexOf(obj.input2)>-1){
      var name = f[3] 
      var ss = SpreadsheetApp.getActive().getSheets()[1]
      ss.appendRow([new Date(),name])
      output = true
    }
  })
  return output
}

  function getData() {
  var ss = SpreadsheetApp.getActiveSpreadsheet()
  var sheet = ss.getSheets()[2]
  var range = sheet.getDataRange()
  var values = range.getDisplayValues()
 // Logger.log(values)
  return values
  }
