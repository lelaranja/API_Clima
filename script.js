$("#submit").click(function () {
  let nmCity = $("#cityName").val();
  console.log(nmCity);
  $.ajax({
    url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${nmCity}?key=WAJVBFE8WPRUYZQ9KTFCEDE8K`,
    type: "GET",
    success: function (dado) {
      console.log(dado);
      $(".descriptionClimate").text(dado.description);
      $(".city").text(dado.address);
      $(".temp").text(dado.days[0].temp);
      $(".wind").text(dado.days[0].windspeed);
    },
    error: function (error) {
      console.log(error);
    },
  });
});
