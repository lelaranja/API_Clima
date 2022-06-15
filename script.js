$("#submit").click(function () {
  let nmCity = $("#cityName").val();
  console.log(nmCity);
  $.ajax({
    url: `http://api.weatherapi.com/v1/current.json?key=de5f8b0f21f64fdd8b2205228221406&q=${nmCity}`,
    type: "GET",
    success: function (dado) {
      console.log(dado);
      $(".city").text(dado.location.name + ", " + dado.location.region);
      $(".icon").attr("src", dado.current.condition.icon);
      $(".icon").css({
        display: "inline",
      });
      $(".temp").text(dado.current.temp_c + " ºC");
      $(".precProb").text(
        "Precipitação prevista: " + dado.current.precip_mm + " mm"
      );
      $(".wind").text(
        "Velocidade do vento: " + dado.current.wind_kph + " km/h"
      );
    },
    error: function (error) {
      console.log(error);
    },
  });
});
