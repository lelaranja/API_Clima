$("#submit").click(function () {
  let nmCity = $("#cityName").val();
  console.log(nmCity);
  $.ajax({
    url: `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${nmCity}?key=WAJVBFE8WPRUYZQ9KTFCEDE8K`,
    type: "GET",
    success: function (dado) {
      console.log(dado)
      $(".city").text(dado.resolvedAddress);
      $(".temp").text((dado.days[0].temp) + ' ºF');
      $('.precProb').text('Probabilidade de preicitação: ' + dado.days[0].precipprob + '%');
      $(".wind").text('Velocidade do vento: '+ dado.days[0].windspeed + ' km/h');

      switch(icon){
        case $(".icon").text(dado.days[0].icon) = snow:
          $(".icon").attr('src', )
      }
      
    },
    error: function (error) {
      console.log(error);
    },
  });
});
