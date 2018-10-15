---
layout: none
---
$.getJSON({{ site.baseurl }}/js/lunr-index.json, function(index_json) {
  window.index = new elasticlunr.Index;
  window.store = index_json;
  index.saveDocument(false);
  index.setRef('lunr_id');
  index.addField('pid');
index.addField('grant_year_type');
index.addField('institution_name');
index.addField('collection_name');
index.addField('description');
index.addField('title');
  // add docs
  for (i in store){
    index.addDoc(store[i]);
  }
  $('input#search').on('keyup', function() {
    var results_div = $('#results');
    var query = $(this).val();
    var results = index.search(query, { boolean: 'AND', expand: true });
    results_div.empty();
    if (results.length > 10) {
      results_div.prepend("<p><small>Displaying 10 of " + results.length + " results.</small></p>");
    }
    for (var r in results.slice(0, 9)) {
      var ref = results[r].ref;
      var item = store[ref];
      var pid = item.pid;
var grant_year_type = item.grant_year_type;
var institution_name = item.institution_name;
var collection_name = item.collection_name;
var description = item.description;
var title = item.title;
      var result = '<div class="result"><b><a href="' + item.link + '">' + title + '</a></b></p></div>';
      results_div.append(result);
    }
  });
});
