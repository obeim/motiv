const testConfigs = [
  {
    name: "SearchIconRight", // you can also use '1' (ID of the experiment) to hide the name
    percentage: 100,
    includedTargets: [
      { attribute: "url", inverted: "0", type: "any", value: "" },
    ],
    excludedTargets: [],
    startDateTime: "2023/10/22 00:00:00 UTC",
    endDateTime: "2023/10/23 23:59:59 UTC",
    variations: [
      {
        name: "original",
        activate: function (event: any) {
          // usually nothing needs to be done here
        },
      },
      {
        name: "RightSearchIcon", // you can also use '1' (ID of the variation) to hide the name
        activate: function (event: any) {
          // eg $('#btn').attr('style', 'color: ' + this.name + ';');
        },
      },
      {
        name: "HideSearchIcon", // you can also use '2' (ID of the variation) to hide the name
        activate: function (event: any) {
          // eg $('#btn').attr('style', 'color: ' + this.name + ';');
        },
      },
    ],
    trigger: function () {
      return true; // here you can further customize which of your visitors will participate in this experiment
    },
  },
];
export default testConfigs;
