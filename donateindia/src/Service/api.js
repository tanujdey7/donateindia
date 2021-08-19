import axios from "axios";
const url1 = "http://localhost:9000/bloodbanks";
const url3 = "http://localhost:9000/camps";
const url4 = "http://localhost:9000/foodDonor";

const url2 = "http://localhost:9000/donor";
export const addBloodDonor = async (donorValue) => {
  return await axios.post(`${url2}/donor`, donorValue);
};

export const getBanks = async () => {
  return await axios.get(url1);
};
export const getDonor = async () => {
  return await axios.get(url2);
};
export const getCamps = async () => {
  return await axios.get(url3);
};
export const getFoodDonor = async () => {
  return await axios.get(url4);
};
// export const addBloodBanks = async (bankDonorValue) => {
//   return await axios.post(`${url1}/findblooddonor`, bankDonorValue);
// };
// export const addBloodCamp = async (campDonorValue) => {
//   return await axios.post(url3, campDonorValue);
// };
