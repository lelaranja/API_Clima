$("#submit").click(function () {
  let nmCity = $("#cityName").val();
  console.log(nmCity);
  $.ajax({
    url: `http://api.weatherapi.com/v1/current.json?key=de5f8b0f21f64fdd8b2205228221406&q=${nmCity}`,
    type: "GET",
    success: function (dado) {
      console.log(dado)
      $(".city").text(dado.name + ',' + dado.region);
      $(".temp").text(dado.current[0].temp_c+ ' ºC');
      $(".icon").attr(dado.icon)
      $('.precProb').text('Precipitação prevista: ' + dado.precip_mm + 'mm');
      $(".wind").text('Velocidade do vento: '+ dado.wind_kph + ' km/h');
    },
    error: function (error) {
      console.log(error);
    },
  });
});
