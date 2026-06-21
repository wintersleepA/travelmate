function recommendPlace() {

    const weather = document.getElementById("weather").value;
    const companion = document.getElementById("companion").value;

    let recommendation = "";

    if(weather === "sunny") {

        if(companion === "alone")
            recommendation = "☀️ 공원 산책";
        else if(companion === "friend")
            recommendation = "☀️ 놀이공원";
        else if(companion === "couple")
            recommendation = "☀️ 한강 피크닉";
        else
            recommendation = "☀️ 동물원 나들이";

    }

    else if(weather === "cloudy") {

        if(companion === "alone")
            recommendation = "☁️ 북카페";
        else if(companion === "friend")
            recommendation = "☁️ 보드게임 카페";
        else if(companion === "couple")
            recommendation = "☁️ 미술관";
        else
            recommendation = "☁️ 대형 쇼핑몰";

    }

    else {

        if(companion === "alone")
            recommendation = "🌧️ 영화관";
        else if(companion === "friend")
            recommendation = "🌧️ 방탈출 카페";
        else if(companion === "couple")
            recommendation = "🌧️ 실내 전시회";
        else
            recommendation = "🌧️ 아쿠아리움";

    }

    document.getElementById("result").innerHTML =
        `추천 장소: ${recommendation}`;

}
