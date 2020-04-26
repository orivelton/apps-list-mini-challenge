import { formatData } from "../ultils/helpers";


describe('ultils/helpers', () => {

  const mockData = [
    {
      "id": "9b565b11-7311-5b5e-a699-97873dffb361",
      "name": "Voice Report",
      "description": "Calls reporting and analytics of your calls.",
      "categories": [
        "Voice Analytics",
        "Reporting",
        "Optimization"
      ],
      "subscriptions": [
        {
          "name": [{toLowerCase: () =>{}}],
          "price": 0
        },
        {
          "name": "Professional",
          "price": 3500
        }
      ]
    }
  ];

  test('should test formatData', () => {
    expect(formatData(mockData).flat().length).toEqual(1);
    expect(formatData([]).flat().length).toEqual(0);
  });
});
