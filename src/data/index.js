import arabi from "./sample/arabi.json";
import chemistry from "./sample/chemistry.json";
import dinozendegi from "./sample/dinozendegi.json";
import english from "./sample/english.json";
import farsi from "./sample/farsi.json";
import hendese from "./sample/hendese.json";
import joghrafia from "./sample/joghrafia.json";
import math from "./sample/math.json";
import physic from "./sample/physic.json";

export const getSampleData = (type) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      switch (type) {
        case "arabi":
          resolve(arabi);
          break;
        case "dinozendegi":
          resolve(dinozendegi);
          break;

        case "chemistry":
          resolve(chemistry);
          break;

        case "english":
          resolve(english);
          break;

        case "farsi":
          resolve(farsi);
          break;

        case "hendese":
          resolve(hendese);
          break;

        case "joghrafia":
          resolve(joghrafia);
          break;

        case "math":
          resolve(math);
          break;
        case "physic":
          resolve(physic);
          break;
          
        default:
          resolve("no sample");
      }
    }, 1000);
  });
};

export const TYPE_MAP_ID = {
  "0e27fbb1-6cd0-47d3-9c12-9c08c41b93e9": "english",
  "c3eb3018-b321-4a55-a5cf-512304d74ca0": "hendese",
  "4355f58c-8229-425d-bc35-b7e288e95e4b": "hendese",
  "993f7581-4d49-4fbc-9515-cd9c57959576": "hendese",
  "16d52c15-33bc-4c69-bfe1-9e68cb527ac6": "farsi",
  "e0911078-e47b-4592-97b0-52b55b944b25": "chemistry",
  "a78d9e2b-3e5c-43f6-b339-c5be5d4a8ada": "dinozendegi",
  "397a501c-a039-41b0-8558-ea8e3499c0c4": "arabi",
  "c9f16ce8-787a-4965-ac40-acff23200c51": "math",
  "dba95c37-731c-4649-8022-35fe746b1996": "physic",
};
