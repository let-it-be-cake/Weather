function query(theUrl) {
    xhr.open('GET', theUrl);
    xhr.send();
    xhr.addEventListener('readystatechange', function() {
      if (xhr.readyState != xhr.DONE) {
        return;
      }
      if (xhr.status != 200) {
        console.log('Error? Error!');
      } else {
        weather = JSON.parse(xhr.responseText);
        console.log(weather);
        Other.style.display = 'block';
        requestAccepted(weather);
        return weather;
      }
  });
}