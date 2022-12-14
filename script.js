gsap.from("h1", {x:-300, delay: .2, duration:3, opacity:0, ease:"power4.out"});
gsap.from(".question", {x:300, delay: .2, duration:3, opacity:0, ease:"power4.out"});
gsap.from("#btn", {y:-50, delay: 2, duration:3, opacity:0, ease:"bounce.out"});


const btn = document.querySelector('#btn');
btn.addEventListener('click', result);

const par = document.querySelector('#show');

function result(e) {
    e.preventDefault();

    if(document.querySelector('input[name="question1"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question2"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question3"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question4"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question5"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question6"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question7"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question8"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question9"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question10"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question11"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }
    if(document.querySelector('input[name="question12"]:checked') == null) {
        window.alert("Elige todas las respuestas");
        return false;
    }

    let points = 0;

    if (document.querySelector('#answer1').checked) {
        points++;
        document.querySelector('#show1').textContent = '??Correcto! ??Empiezas bien el juego! Los aut??nticos hist??ricos del campeonato son el FC Barcelona, el Real Madrid y el Athletic de Bilbao. Son los ??nicos que han jugado siempre en primera divisi??n desde la aparici??n del torneo en 1928.';
        show1.style.color = '#00C897';
    }

    else {
        document.querySelector('#show1').textContent = '??Uy...! Al menos has acertado dos de tres. Los aut??nticos hist??ricos del campeonato son el FC Barcelona, el Real Madrid y el Athletic de Bilbao. Son los ??nicos que han jugado siempre en primera divisi??n desde la aparici??n del torneo en 1928.';
        show1.style.color = '#F37878';
    }

    if(document.querySelector('#answer2').checked) {
        points++;
        document.querySelector('#show2').textContent = '??Eso es! Los dos colosos del f??tbol en Espa??a tienen la misma cantidad de t??tulos en propiedad: 5. ??Sabes que puedes ver los trofeos del Real Madrid en el Tour por el estadio Santiago Bernab??u? Por su parte, en el Museo del FC Barcelona ver??s sus 5 copas en propiedad.';
        show2.style.color = '#00C897';
    }
    else {
        document.querySelector('#show2').textContent = '??Has fallado! Los dos colosos del f??tbol en Espa??a tienen la misma cantidad de t??tulos en propiedad: 5. ??Sabes que puedes ver los trofeos del Real Madrid en el Tour por el estadio Santiago Bernab??u? Por su parte, en el Museo del FC Barcelona ver??s sus 5 copas en propiedad.';
        show2.style.color = '#F37878';
    }

    if(document.querySelector('#answer3').checked) {
        points++;
        document.querySelector('#show3').textContent = '??Genial, es correcto! Lleg?? al FC Barcelona en 1982 y al Sevilla en 1992.';
        show3.style.color = '#00C897';
    }
    else {
        document.querySelector('#show3').textContent = 'Has fallado. El jugador argentino lleg?? al FC Barcelona en 1982 y al Sevilla en 1992.';
        show3.style.color = '#F37878';
    }

    if(document.querySelector('#answer4').checked) {
        points++;
        document.querySelector('#show4').textContent = '??Gooool... acierto! Iniesta consigui?? marcar en la pr??rroga de la final del Mundial 2010 frente a Holanda el tanto que le dio a Espa??a su primera Copa del Mundo. Sin embargo, Fernando Torres hizo lo propio en la final de la Eurocopa 2008 frente a Alemania mientras que David Villa es el m??ximo goleador hist??rico de la selecci??n con 59 goles en 97 partidos.';
        show4.style.color = '#00C897';
    }
    else {
        document.querySelector('#show4').textContent = '??Vaya... has fallado! Iniesta consigui?? marcar en la pr??rroga de la final del Mundial 2010 frente a Holanda el tanto que le dio a Espa??a su primera Copa del Mundo. Sin embargo, Fernando Torres hizo lo propio en la final de la Eurocopa 2008 frente a Alemania mientras que David Villa es el m??ximo goleador hist??rico de la selecci??n con 59 goles en 97 partidos.';
        show4.style.color = '#F37878';
    }

    if(document.querySelector('#answer5').checked) {
        points++;
        document.querySelector('#show5').textContent = '??Enhorabuena! El sobrenombre de Torneo del K.O. se debe a que la competici??n suele tener importantes sorpresas en sus primeras fases, en las que equipos inferiores eliminan con frecuencia a equipos de la primera divisi??n. Hasta hace unos a??os, estas fases se jugaban siempre a un solo partido en casa del equipo d??bil y las sorpresas eran m??s frecuentes.';
        show5.style.color = '#00C897';
    }
    else {
        document.querySelector('#show5').textContent = 'Lo sentimos. La respuesta correcta es la n??mero 3. El sobrenombre de Torneo del K.O. se debe a que la competici??n suele tener importantes sorpresas en sus primeras fases, en las que equipos inferiores eliminan con frecuencia a equipos de la primera divisi??n. Hasta hace unos a??os, estas fases se jugaban a un solo partido en casa del equipo d??bil y las sorpresas eran m??s frecuentes.';
        show5.style.color = '#F37878';
    }

    if(document.querySelector('#answer6').checked) {
        points++;
        document.querySelector('#show6').textContent = '??Efectivamente! ??sta era f??cil, la paella est?? muy rica y tienes que probarla, por ejemplo en la Comunidad Valenciana. Sin embargo, no es sobrenombre de ning??n equipo. Los ???periquitos??? apoyan al Espanyol y los ???leones??? es el sobrenombre de los del Athletic de Bilbao. Otros apodos muy extendidos son ???cul??s???, para los del FC Barcelona; ???merengues??? o ???vikingos???, para los del Real Madrid; ???indios??? o "colchoneros" para referirse a los aficionados del Atl??tico de Madrid; ???boquerones???, los del M??laga; ???armeros???, los del Eibar o ???ch??s??? para los del Valencia.';
        show6.style.color = '#00C897';
    }
    else {
        document.querySelector('#show6').textContent = '??Has fallado! Seguro que porque eres fan de la paella. Te recomendamos disfrutarla sobre todo en la Comunidad Valenciana. Los ???periquitos??? apoyan al Espanyol y los ???leones??? es el sobrenombre de los del Athletic de Bilbao. Otros apodos muy extendidos son ???cul??s???, para los del FC Barcelona; ???merengues??? o ???vikingos???, para los del Real Madrid; ???indios??? o "colchoneros" para referirse a los aficionados del Atl??tico de Madrid; ???boquerones???, los del M??laga; ???armeros???, los del Eibar o ???ch??s??? para los del Valencia.';
        show6.style.color = '#F37878';
    }

    if(document.querySelector('#answer7').checked) {
        points++;
        document.querySelector('#show7').textContent = '??Correcto! El astro argentino ya ha pulverizado todos los registros en Espa??a. Messi ha marcado m??s de 400 goles en la Liga. Cristiano Ronaldo es el segundo goleador hist??rico con m??s de 300 goles. Por su parte, Zarra es el jugador que m??s veces ha ganado el trofeo ???Pichichi???, cinco y marc?? 251 goles. Ra??l abandon?? la Liga espa??ola siendo el autor de 228 goles. Maradona s??lo jug?? tres temporadas aqu?? y marc?? 27 goles. ??Qui??n es Pichichi? Se trata de Rafael Moreno Aranzadi, un ??dolo en el Athletic de Bilbao hace m??s de un siglo pero que anot?? muchos menos goles.';
        show7.style.color = '#00C897';
    }
    else {
        document.querySelector('#show7').textContent = '??Has fallado! Messi super?? a Zarra en la temporada 2014-15. Messi ha marcado m??s de 400 goles en la Liga. Cristiano Ronaldo es el segundo goleador hist??rico con m??s de 300 goles. Por su parte, Zarra es el jugador que m??s veces ha ganado el trofeo ???Pichichi???, cinco y marc?? 251 goles. Ra??l abandon?? la Liga espa??ola siendo el autor de 228 goles. Maradona s??lo jug?? tres temporadas aqu?? y marc?? 27 goles. ??Qui??n es Pichichi? Se trata de Rafael Moreno Aranzadi, un ??dolo en el Athletic de Bilbao hace m??s de un siglo pero que anot?? muchos menos goles.';
        show7.style.color = '#F37878';
    }

    if(document.querySelector('#answer8').checked) {
        points++;
        document.querySelector('#show8').textContent = '??Has acertado! El Camp Nou tiene aforo para aproximadamente 100.000 personas. El Santiago Bernab??u para unas 80.000. San Mam??s tiene una capacidad aproximada de 55.000 aficionados.';
        show8.style.color = '#00C897';
    }
    else {
        document.querySelector('#show8').textContent = '??Vaya... has fallado! El Camp Nou tiene aforo para aproximadamente 100.000 personas. El Santiago Bernab??u para unas 80.000. San Mam??s tiene una capacidad aproximada de 55.000 aficionados.';
        show8.style.color = '#F37878';
    }

    if(document.querySelector('#answer9').checked) {
        points++;
        document.querySelector('#show9').textContent = '??Bien hecho! Y no solo una vez. En la final de la Champions League 2013-14, Real Madrid y Atl??tico disputaron la primera final entre equipos de una misma ciudad. Dos temporadas despu??s, repitieron enfrentamiento y en ambos casos la victoria fue para el Real Madrid.';
        show9.style.color = '#00C897';
    }
    else {
        document.querySelector('#show9').textContent = '??Error! Y no solo una vez. En la final de la Champions League 2013-14, Real Madrid y Atl??tico disputaron la primera final entre equipos de una misma ciudad. Dos temporadas despu??s, repitieron enfrentamiento y en ambos casos la victoria fue para el Real Madrid.';
        show9.style.color = '#F37878';
    }

    if(document.querySelector('#answer10').checked) {
        points++;
        document.querySelector('#show10').textContent = '??As?? es! ??Has acertado! A pesar de que la Liga empez?? en el a??o 1929 solo Real Madrid, FC Barcelona, Atl??tico de Madrid, Athletic Club, Valencia, Real Sociedad, Deportivo de La Coru??a, Sevilla y Real Betis se han alzado con la victoria en el campeonato.';
        show10.style.color = '#00C897';
    }
    else {
        document.querySelector('#show10').textContent = '??Incorrecto! A pesar de que la Liga empez?? en el a??o 1929 solo Real Madrid, FC Barcelona, Atl??tico de Madrid, Athletic Club, Valencia, Real Sociedad, Deportivo de La Coru??a, Sevilla y Real Betis se han alzado con la victoria en el campeonato.';
        show10.style.color = '#F37878';
    }

    if(document.querySelector('#answer11').checked) {
        points++;
        document.querySelector('#show11').textContent = '??Has acertado! ??20 es la respuesta correcta! Aunque durante los primeros a??os solo participaron 10 equipos en la Liga, el n??mero fue aumentando de forma progresiva hasta llegar a los 20 actuales con la excepci??n de las temporadas 1995-96 y 96-97 en las que hubo 22 equipos.';
        show11.style.color = '#00C897';
    }
    else {
        document.querySelector('#show11').textContent = '??Vaya... has fallado!??20 es la respuesta correcta! Aunque durante los primeros a??os solo participaron 10 equipos en la Liga, el n??mero fue aumentando de forma progresiva hasta llegar a los 20 actuales con la excepci??n de las temporadas 1995-96 y 96-97 en las que hubo 22 equipos.';
        show11.style.color = '#F37878';
    }

    if(document.querySelector('#answer12').checked) {
        points++;
        document.querySelector('#show12').textContent = '??As?? es! ??Has acertado! Tanto Real Madrid como FC Barcelona han conseguido llegar a la hist??rica cifra de 100 puntos en una sola Liga. Los ???blancos??? lo consiguieron en la temporada 2011-12 y los ???blaugranas??? replicaron la misma puntuaci??n la temporada siguiente.';
        show12.style.color = '#00C897';
    }
    else {
        document.querySelector('#show12').textContent = '??Incorrecto! Tanto Real Madrid como FC Barcelona han conseguido llegar a la hist??rica cifra de 100 puntos en una sola Liga. Los ???blancos??? lo consiguieron en la temporada 2011-12 y los ???blaugranas??? replicaron la misma puntuaci??n la temporada siguiente.';
        show12.style.color = '#F37878';
    }


    par.textContent = 'Has acertado: ' + points + ' de 12.';

}
