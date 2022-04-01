import media1 from "./media-1.jpeg";
import media2 from "./media-2.jpeg";
import media3 from "./media-3.jpeg";
import media4 from "./media-4.jpeg";
import media5 from "./media-5.jpeg";

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = (index) => media[index % media.length];

export const List = [
  {
    containerOne: [media1, media2, media3]
  },
  {
    containerTwo: [media1, media2, media3, media4]
  },
  {
    containerThree: [media1, media2, media3, media4, media5]
  }
];

export const mediaArray = List.map((i) => {
  return Object.values(i)[0];
});

export const mediaArrayTitle = List.map((i) => {
  return Object.keys(i)[0];
});
