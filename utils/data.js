export const defaultData = {
  "name": "T",
  "children": [
    {
      "name": "A",
      "children": [
        { "name": "A1" },
        { "name": "A2" },
        { "name": "A3" },
        {
          "name": "C",
          "children": [
            {
              "name": "C1",
            },
            {
              "name": "D",
              "children": [
                {
                  "name": "D1"
                }, {
                  "name": "D2"
                }, {
                  "name": "D3"
                }]
            }
          ]
        }
      ]
    },
    { "name": "Z" },
    {
      "name": "B",
      "children": [
        { "name": "B1" },
        { "name": "B2" },
        { "name": "B3" },
      ]
    }
  ]
};

export const loadData = () => {
  const localStorageData = window.localStorage.getItem('data') || "";

  if (!localStorageData) return defaultData;

  try {
    return JSON.parse(localStorageData);
  } catch (e) {
    return defaultData;
  }
};

export const saveData = data =>
  window.localStorage.setItem('data', JSON.stringify(data));
