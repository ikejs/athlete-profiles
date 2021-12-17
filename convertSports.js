// converts a list of sport strings to a format that's react-select friendly

const sportsStrings = ["American Football", "Aquatics", "Archery", "Automobile Racing", "Badminton", "Baseball", "Basketball", "Beach Volleyball", "Bobsleigh", "Body Building", "Boxing", "Cricket", "Cross Country Running", "Cross Country Skiing", "Curling", "Cycling", "Darts", "Decathlon", "Down Hill Skiing", "Equestrianism", "Fencing", "Field Hockey", "Figure Skating", "Golf", "Gymnastics", "Ice Hockey", "Martial Arts", "Mixed Martial Arts", "Modern Pentathlon", "Motorcycle Racing", "Netball", "Polo", "Racquetball", "Rowing", "Rugby", "Sailing", "Shooting", "Skateboarding", "Skeet Shooting", "Skeleton", "Snow Boarding", "Soccer (Football)", "Softball", "Squash", "Surfing", "Swimming", "Tennis", "Track and Field", "eSports"];

const sports = sportsStrings.map(sportStr => ({ value: sportStr.replace(/[{()}]/g, '').replace(' ', '-').toLowerCase(), label: sportStr }));

console.log(sports);
