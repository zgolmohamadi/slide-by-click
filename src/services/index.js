import axios from "axios";

export const retrieveCourses = async () => {
  const response = await axios.get(
    "https://app.tarazorg.ir/api/qb/v4/test_unit"
  );
  return response.data;
};

export const retrieveCoursesItems = async (courseType) => {
  // const response = await axios.get("https://app.taraz.org/api/qb/v4/unit/c205ce98-84f4-427e-9555-ccd95ae651d9/unit_tree/no_children/?parent_isnull=true");
  // return response.data;

  //mock data
  return import("../data/index.js").then((module) => {
    return module.getSampleData(courseType);
  });
};
