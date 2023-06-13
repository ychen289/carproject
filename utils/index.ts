export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "b14f81e29dmsha75c6636af05199p1ad625jsnc142f566b7c4",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
