
let results;

var index = elasticlunr(function () {
  this.addField('full_text');
  this.setRef('id_str');
});

const searchInput = document.getElementById('search-input');

function processData(data) {
  document.getElementById('loading').hidden = true;
  document.getElementById('search').hidden = false;
  for (doc of data) {
    index.addDoc(doc);
  }
}

processData(searchDocuments);

function sortResults(criterion) {
  if (criterion === 'newest-first') {
    results = results.sort(function(a,b){
      return new Date(b.doc.created_at) - new Date(a.doc.created_at);
    });
    renderResults();
  }
  if (criterion === 'oldest-first') {
    results = results.sort(function(a,b){
      return new Date(a.doc.created_at) - new Date(b.doc.created_at);
    });
    renderResults();
  }
  if (criterion === 'most-relevant') {
    results = results.sort(function(a,b){
      return b.score - a.score;
    });
    renderResults();
  }
  if (criterion === 'most-popular') {
    results = results.sort(function(a,b){
      return (+b.doc.favorite_count + +b.doc.retweet_count) - (+a.doc.favorite_count + +a.doc.retweet_count);
    });
    renderResults();
  }
}

function renderResults() {
  const output = results.map(item => `<p class="search_item"><div class="search_link"><a href="iamsubhrajyoti/status/${item.doc.id_str}">link</a></div> <div class="search_text">${item.doc.full_text}</div><div class="search_time">${new Date(item.doc.created_at).toLocaleString()}</div><hr class="search_divider" /></p>`.replace(/\.\.\/\.\.\/tweets_media\//g,'iamsubhrajyoti/tweets_media/'));
  document.getElementById('output').innerHTML = output.join('');
}

function onSearchChange(e) {
  results = index.search(e.target.value);
  renderResults();
}
searchInput.addEventListener('input', onSearchChange);