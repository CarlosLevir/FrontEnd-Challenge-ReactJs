import { getComments } from '../services/api';

const getDataComments = async (id) => {
  try {
    const response = await getComments(id);
    return response;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default getDataComments;
