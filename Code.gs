function highlightSubstring(){

  const openDoc = DocumentApp.getActiveDocument();
  const body = openDoc.getBody();

  var highlightStyle = {};
  highlightStyle[DocumentApp.Attribute.BACKGROUND_COLOR] = '#ff9900';

  var textToFind = ["{rep name}","{date}","{Topic1}","{Topic2}","{Topic3}","{trainer name}","{rep pos}","{trainer pos}","{Comments}" ];

  for (var k=0; k<textToFind.length; k++){
    //loop through all the substrings in the array, searching for each of them

    var find = textToFind[k];
    var element = body.findText(find);

    while(element != null){
      //while the search for the string is successful, do this

      var start = element.getStartOffset();
      var end = element.getEndOffsetInclusive();
      element.getElement().setAttributes(start, end, highlightStyle);

      element = body.findText(find, element);
      //find the next occurrence of the string, starting where you left off after the last occurrence
    }
  }

}
