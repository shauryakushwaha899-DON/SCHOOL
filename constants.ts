import { Notice, GalleryItem } from './types';

export const APP_NAME = "Arya Higher Secondary School";
export const WELCOME_AUDIO_TEXT = "Arya higher secondary school ki official website me apka swagat hai";

export const IMAGES = {
  logo: "https://drive.google.com/thumbnail?id=1vTddld0hfA0Wshdn-B0O2hNSKKrE62CI&sz=s800",
  principal: "https://drive.google.com/thumbnail?id=1S7WRVaT1ir0BSjDuZDGq5Km9ePyXunjN&sz=s800",
  manager: "https://drive.google.com/thumbnail?id=1BJYpgIbhFHTviomwQuQZA_3_VFlsRN0f&sz=s800",
  hero: [
    "https://drive.google.com/thumbnail?id=11jEd-HXURnR1ZrM2ovd54H5X63GP0IbL&sz=s800",
    "https://drive.google.com/thumbnail?id=1670VHBQDwATttblOrKVljZl-hcmMjuG-&sz=s800",
    "https://drive.google.com/thumbnail?id=1IvurFCTNCwM2Lr9DEzGMBd78NyAlrgL3&sz=s800",
    "https://drive.google.com/thumbnail?id=1YHzxcfEo5VRz8pOs-0afCtDi-otGfIMS&sz=s800",
    "https://drive.google.com/thumbnail?id=1mXgW1MDoA-osQ0-_VCyXeJCQMMoxMSmU&sz=s800"
  ]
};

export const NOTICES: Notice[] = [
  { id: 1, title: "Admission Closed For session 2025-26", date: "2024-05-20", isNew: true },
  { id: 2, title: "Half Yearly Exams Schedule Released", date: "2024-09-15", isNew: false },
  { id: 3, title: "Winter Vacation starts from 25th Dec", date: "2024-12-01", isNew: false }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, url: "https://drive.google.com/thumbnail?id=14VdO6co5NiAX4OuYrwq-baPDelbJFd2C&sz=s800", title: "Classroom", category: "memories", size: "landscape" },
  { id: 2, url: "https://drive.google.com/thumbnail?id=16x927snUcZcuKkpLauYgnkW67j2slkAf&sz=s800", title: "Sports Day", category: "events", size: "portrait" },
  { id: 3, url: "https://drive.google.com/thumbnail?id=1mXgW1MDoA-osQ0-_VCyXeJCQMMoxMSmU&sz=s800", title: "Assembly", category: "memories", size: "landscape" },
  { id: 4, url: "https://drive.google.com/thumbnail?id=1VTq5oX50NdPy4YNiqTBpyzwXOkbGTRys&sz=s800", title: "Science Lab", category: "memories", size: "landscape" },
  { id: 5, url: "https://drive.google.com/thumbnail?id=1BGxxHhAvZ46A3JhKyqk7giEnNd3uNFUT&sz=s800", title: "Art Class", category: "memories", size: "square" },
  { id: 6, url: "https://drive.google.com/thumbnail?id=1-1IRHbUOiBOlNOyP42k7XmZGfwZFd-Bz&sz=s800", title: "Green Campus", category: "plants", size: "portrait" },
];