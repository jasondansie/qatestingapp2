// Simulating api
 const api = {
    createItem: (url, newItem) => {
      return Promise.resolve(newItem);
    }
  };

  export default api;