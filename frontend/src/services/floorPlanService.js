import axios from 'axios';

const baseUrl = '/api/floor-plans';

const getFloorPlans = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createFloorPlan = async (floorPlanData) => {
  const response = await axios.post(baseUrl, floorPlanData);
  return response.data;
};

export default { getFloorPlans, createFloorPlan };