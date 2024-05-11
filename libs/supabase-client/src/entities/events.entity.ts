type ILocation = {
  origin: string;
  destination: string;
};

type IEvent = {
  id: string;
  date: string;
  location: ILocation;
};
