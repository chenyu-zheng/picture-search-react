const Unsplash = (() => {
  const _api = 'https://api.unsplash.com';
  const _pathSearch = '/search/photos';
  const _pathRandom = '/photos/random';
  const _headers = {
    Authorization:
      'Client-ID ae9d67a84ee98c747018307e700e0c3d3682e81511af6f1a179bc451a9d2cf35'
  };

  const _camelToSnake = function(str) {
    if (str.match(/[_-]|^[A-Z]|[A-Z]{2}/)) {
      console.warn(
        `'${str}' is not camel case or contains continuous capital letters, this may cause unexpected errors!`
      );
    }

    return str
      .replace(/(^[A-Z])/, first => first.toLowerCase())
      .replace(/([A-Z])/g, letter => `_${letter.toLowerCase()}`);
  };

  const _getQueryString = function(queries) {
    if (!queries) {
      return '';
    }

    let queryStrs = [];
    Object.entries(queries).forEach(([key, value]) => {
      if (value) {
        queryStrs.push(`${_camelToSnake(key)}=${value}`);
      }
    });
    return '?' + queryStrs.join('&');
  };

  const _request = function(path, queries, method) {
    // console.log(_api + path + _getQueryString(queries));
    return fetch(_api + path + _getQueryString(queries), {
      method: method || 'GET',
      headers: _headers
    }).then(response => response.json());
  };

  const requestPhotos = function(queries) {
    return _request(_pathSearch, queries);
  };

  const requestRandom = function(queries) {
    return _request(_pathRandom, queries);
  };

  return {
    requestPhotos,
    requestRandom
  };
})();

export default Unsplash;
