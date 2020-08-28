const baseUrl = "http://localhost:4000/api/";

const fileService = {
  uploadFile: async (formData) => {
    try {
      let response = await fetch(baseUrl + "upload", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      });

      response = await response.json();
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};

export default fileService;
