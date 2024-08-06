export default function schemaFormat(data) {
  // date format = November 1, 2022, 11:59 am
  console.log(data);
  const arrived_office = {
    stage: 1,
    title: `GSE is in possession of item`,
    location: data.office_loc,
    date: data.office1_date,
  };
  const left_office = {
    stage: 2,
    title: `Departed post office`,
    location: data.office_loc,
    date: data.office2_date,
  };
  const first_location = {
    stage: 3,
    title: `Arrived at ${data.loc1_name}`,
    location: data.loc1_location,
    date: data.loc1_date,
  };
  const second_location = {
    stage: 4,
    title: `Arrived at ${data.loc2_name}`,
    location: data.loc2_location,
    date: data.loc2_date,
  };
  return [arrived_office, left_office, first_location, second_location].sort((a, b) => b.stage - a.stage);
}
