export const safeApiCall = async (apiFunction) => {
  try {
    const res = await apiFunction();
    return [null, res.data];
  } catch (error) {
    console.error("API Error:", error?.response?.data || error.message);
    return [error, null];
  }
};
