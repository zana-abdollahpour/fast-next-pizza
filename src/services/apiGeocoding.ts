interface GetAddressParams {
  latitude: number;
  longitude: number;
}

// gets latitude and longitude and returns human readable location data
export async function getAddress({ latitude, longitude }: GetAddressParams) {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
