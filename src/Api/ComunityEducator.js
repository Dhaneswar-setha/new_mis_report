import Api from "../envirment/Api";

export const getAllCommunityEducatiorFilter = async () =>
  await Api.get(`getManagerIdsWidPasscode`);

// useEffect(() => {
//   Api.get(`getManagerIdsWidPasscode`).then((response) => {
//     setManagerArr(response.data.resData);
//   });
// }, []);