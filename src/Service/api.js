import axios from "axios";
const url1 = "http://localhost:3002/bloodbanks";
const url2 = "http://localhost:3002/donor";
const url3 = "http://localhost:3002/camps";
const url4 = "http://localhost:3002/foodDonor";
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
export const addBloodOrg = async (orgDonorValue) => {
  return await axios.post(url1, orgDonorValue);
};
export const addBloodDonor = async (donorValue) => {
  return await axios.post(url2, donorValue);
};
export const addBloodCamp = async (campDonorValue) => {
  return await axios.post(url3, campDonorValue);
};
