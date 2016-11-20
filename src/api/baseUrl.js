export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001' : '/';
}


function getQueryStringParameterByName(name, url) {
  if (!url) url = window.location.href;

  name = name.replace(/[\]]/g, "\\$&");
  //get the rest off of stack overflow
  var regex = new RegExp("[?&]" +name + "(=)")

  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
