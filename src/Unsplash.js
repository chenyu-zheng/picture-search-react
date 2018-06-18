const Unsplash = (() => {
  const url = 'https://api.unsplash.com/search/photos';
  const key =
    'Client-ID ae9d67a84ee98c747018307e700e0c3d3682e81511af6f1a179bc451a9d2cf35';

  return {
    requestData(options) {
      console.log(options);
      let { query, page, perPage, orientation } = options;
      const orientQS = orientation ? `orientation=${orientation}` : '';
      perPage = perPage ? perPage : 10;
      page = page ? page : 1;

      console.log(`${url}?query=${query}&page=${page}&per_page=${perPage}&${orientQS}`)
      return fetch(
        `${url}?query=${query}&page=${page}&per_page=${perPage}&${orientQS}`,
        {
          headers: {
            Authorization: key
          }
        }
      ).then(response => response.json());
    }
  };
})();

export default Unsplash;
