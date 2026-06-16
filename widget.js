(function(){

// ========== EQUIPOS ==========
var TEAMS = {
  "México":{en:"Mexico",code:"mx",abbr:"MEX",group:"A"},
  "Sudáfrica":{en:"South Africa",code:"za",abbr:"RSA",group:"A"},
  "Corea del Sur":{en:"South Korea",code:"kr",abbr:"KOR",group:"A"},
  "Rep. Checa":{en:"Czechia",code:"cz",abbr:"CZE",group:"A"},
  "Canadá":{en:"Canada",code:"ca",abbr:"CAN",group:"B"},
  "Bosnia":{en:"Bosnia and Herzegovina",code:"ba",abbr:"BIH",group:"B"},
  "Qatar":{en:"Qatar",code:"qa",abbr:"QAT",group:"B"},
  "Suiza":{en:"Switzerland",code:"ch",abbr:"SUI",group:"B"},
  "Brasil":{en:"Brazil",code:"br",abbr:"BRA",group:"C"},
  "Marruecos":{en:"Morocco",code:"ma",abbr:"MAR",group:"C"},
  "Haití":{en:"Haiti",code:"ht",abbr:"HAI",group:"C"},
  "Escocia":{en:"Scotland",code:"gb-sct",abbr:"SCO",group:"C"},
  "Estados Unidos":{en:"United States",code:"us",abbr:"USA",group:"D"},
  "Paraguay":{en:"Paraguay",code:"py",abbr:"PAR",group:"D"},
  "Australia":{en:"Australia",code:"au",abbr:"AUS",group:"D"},
  "Turquía":{en:"Turkey",code:"tr",abbr:"TUR",group:"D"},
  "Alemania":{en:"Germany",code:"de",abbr:"GER",group:"E"},
  "Curazao":{en:"Curacao",code:"cw",abbr:"CUW",group:"E"},
  "Costa de Marfil":{en:"Ivory Coast",code:"ci",abbr:"CIV",group:"E"},
  "Ecuador":{en:"Ecuador",code:"ec",abbr:"ECU",group:"E"},
  "Países Bajos":{en:"Netherlands",code:"nl",abbr:"NED",group:"F"},
  "Japón":{en:"Japan",code:"jp",abbr:"JPN",group:"F"},
  "Suecia":{en:"Sweden",code:"se",abbr:"SWE",group:"F"},
  "Túnez":{en:"Tunisia",code:"tn",abbr:"TUN",group:"F"},
  "España":{en:"Spain",code:"es",abbr:"ESP",group:"G"},
  "Cabo Verde":{en:"Cape Verde",code:"cv",abbr:"CPV",group:"G"},
  "Arabia Saudita":{en:"Saudi Arabia",code:"sa",abbr:"KSA",group:"G"},
  "Uruguay":{en:"Uruguay",code:"uy",abbr:"URU",group:"G"},
  "Bélgica":{en:"Belgium",code:"be",abbr:"BEL",group:"H"},
  "Egipto":{en:"Egypt",code:"eg",abbr:"EGY",group:"H"},
  "Irán":{en:"Iran",code:"ir",abbr:"IRN",group:"H"},
  "Nueva Zelanda":{en:"New Zealand",code:"nz",abbr:"NZL",group:"H"},
  "Francia":{en:"France",code:"fr",abbr:"FRA",group:"I"},
  "Senegal":{en:"Senegal",code:"sn",abbr:"SEN",group:"I"},
  "Irak":{en:"Iraq",code:"iq",abbr:"IRQ",group:"I"},
  "Noruega":{en:"Norway",code:"no",abbr:"NOR",group:"I"},
  "Argentina":{en:"Argentina",code:"ar",abbr:"ARG",group:"J"},
  "Argelia":{en:"Algeria",code:"dz",abbr:"ALG",group:"J"},
  "Austria":{en:"Austria",code:"at",abbr:"AUT",group:"J"},
  "Jordania":{en:"Jordan",code:"jo",abbr:"JOR",group:"J"},
  "Portugal":{en:"Portugal",code:"pt",abbr:"POR",group:"K"},
  "Congo":{en:"DR Congo",code:"cd",abbr:"COD",group:"K"},
  "Uzbekistán":{en:"Uzbekistan",code:"uz",abbr:"UZB",group:"K"},
  "Colombia":{en:"Colombia",code:"co",abbr:"COL",group:"K"},
  "Inglaterra":{en:"England",code:"gb-eng",abbr:"ENG",group:"L"},
  "Croacia":{en:"Croatia",code:"hr",abbr:"CRO",group:"L"},
  "Ghana":{en:"Ghana",code:"gh",abbr:"GHA",group:"L"},
  "Panamá":{en:"Panama",code:"pa",abbr:"PAN",group:"L"}
};

// ========== FIXTURE ==========
var FIXTURE = [
  {f:"11/06",dia:"JUE",hora:"16:00",nota:"",a:"México",b:"Sudáfrica",canal:"DSports / Telefe / Disney+",arg:false},
  {f:"11/06",dia:"JUE",hora:"23:00",nota:"",a:"Corea del Sur",b:"Rep. Checa",canal:"DSports / TyC",arg:false},
  {f:"12/06",dia:"VIE",hora:"16:00",nota:"",a:"Canadá",b:"Bosnia",canal:"DSports",arg:false},
  {f:"12/06",dia:"VIE",hora:"22:00",nota:"",a:"Estados Unidos",b:"Paraguay",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"13/06",dia:"SÁB",hora:"16:00",nota:"",a:"Qatar",b:"Suiza",canal:"DSports",arg:false},
  {f:"13/06",dia:"SÁB",hora:"19:00",nota:"",a:"Brasil",b:"Marruecos",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"13/06",dia:"SÁB",hora:"22:00",nota:"",a:"Haití",b:"Escocia",canal:"DSports / TyC",arg:false},
  {f:"13/06",dia:"SÁB",hora:"01:00",nota:"madrugada dom.",a:"Australia",b:"Turquía",canal:"DSports / TyC",arg:false},
  {f:"14/06",dia:"DOM",hora:"14:00",nota:"",a:"Alemania",b:"Curazao",canal:"DSports",arg:false},
  {f:"14/06",dia:"DOM",hora:"17:00",nota:"",a:"Países Bajos",b:"Japón",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"14/06",dia:"DOM",hora:"20:00",nota:"",a:"Costa de Marfil",b:"Ecuador",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"14/06",dia:"DOM",hora:"23:00",nota:"",a:"Suecia",b:"Túnez",canal:"DSports / TyC",arg:false},
  {f:"15/06",dia:"LUN",hora:"13:00",nota:"",a:"España",b:"Cabo Verde",canal:"DSports",arg:false},
  {f:"15/06",dia:"LUN",hora:"16:00",nota:"",a:"Bélgica",b:"Egipto",canal:"DSports 2 / TyC",arg:false},
  {f:"15/06",dia:"LUN",hora:"19:00",nota:"",a:"Arabia Saudita",b:"Uruguay",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"15/06",dia:"LUN",hora:"22:00",nota:"",a:"Irán",b:"Nueva Zelanda",canal:"DSports / TyC",arg:false},
  {f:"16/06",dia:"MAR",hora:"16:00",nota:"",a:"Francia",b:"Senegal",canal:"DSports",arg:false},
  {f:"16/06",dia:"MAR",hora:"19:00",nota:"",a:"Irak",b:"Noruega",canal:"DSports 2 / TyC",arg:false},
  {f:"16/06",dia:"MAR",hora:"22:00",nota:"",a:"Argentina",b:"Argelia",canal:"DSports / TyC / Disney+ / TVP / Telefe",arg:true},
  {f:"16/06",dia:"MAR",hora:"01:00",nota:"madrugada mié.",a:"Austria",b:"Jordania",canal:"DSports / TyC",arg:false},
  {f:"17/06",dia:"MIÉ",hora:"14:00",nota:"",a:"Portugal",b:"Congo",canal:"DSports",arg:false},
  {f:"17/06",dia:"MIÉ",hora:"17:00",nota:"",a:"Inglaterra",b:"Croacia",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"17/06",dia:"MIÉ",hora:"20:00",nota:"",a:"Ghana",b:"Panamá",canal:"DSports 2 / TyC",arg:false},
  {f:"17/06",dia:"MIÉ",hora:"23:00",nota:"",a:"Uzbekistán",b:"Colombia",canal:"DSports / TyC",arg:false},
  {f:"18/06",dia:"JUE",hora:"13:00",nota:"",a:"Rep. Checa",b:"Sudáfrica",canal:"DSports / TyC",arg:false},
  {f:"18/06",dia:"JUE",hora:"16:00",nota:"",a:"Suiza",b:"Bosnia",canal:"DSports / Telefe / Disney+",arg:false},
  {f:"18/06",dia:"JUE",hora:"19:00",nota:"",a:"Canadá",b:"Qatar",canal:"DSports",arg:false},
  {f:"18/06",dia:"JUE",hora:"22:00",nota:"",a:"México",b:"Corea del Sur",canal:"DSports / TyC",arg:false},
  {f:"19/06",dia:"VIE",hora:"16:00",nota:"",a:"Estados Unidos",b:"Australia",canal:"DSports / TyC",arg:false},
  {f:"19/06",dia:"VIE",hora:"19:00",nota:"",a:"Escocia",b:"Marruecos",canal:"DSports / Telefe / Disney+",arg:false},
  {f:"19/06",dia:"VIE",hora:"21:30",nota:"",a:"Brasil",b:"Haití",canal:"DSports / TyC",arg:false},
  {f:"19/06",dia:"VIE",hora:"24:00",nota:"",a:"Turquía",b:"Paraguay",canal:"DSports",arg:false},
  {f:"20/06",dia:"SÁB",hora:"14:00",nota:"",a:"Países Bajos",b:"Suecia",canal:"DSports / TyC",arg:false},
  {f:"20/06",dia:"SÁB",hora:"17:00",nota:"",a:"Alemania",b:"Costa de Marfil",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"20/06",dia:"SÁB",hora:"21:00",nota:"",a:"Ecuador",b:"Curazao",canal:"DSports",arg:false},
  {f:"20/06",dia:"SÁB",hora:"01:00",nota:"madrugada dom.",a:"Túnez",b:"Japón",canal:"DSports",arg:false},
  {f:"21/06",dia:"DOM",hora:"13:00",nota:"",a:"España",b:"Arabia Saudita",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"21/06",dia:"DOM",hora:"16:00",nota:"",a:"Bélgica",b:"Irán",canal:"DSports 2",arg:false},
  {f:"21/06",dia:"DOM",hora:"19:00",nota:"",a:"Uruguay",b:"Cabo Verde",canal:"DSports / Telefe / Disney+",arg:false},
  {f:"21/06",dia:"DOM",hora:"22:00",nota:"",a:"Nueva Zelanda",b:"Egipto",canal:"DSports / TyC",arg:false},
  {f:"22/06",dia:"LUN",hora:"14:00",nota:"",a:"Argentina",b:"Austria",canal:"DSports / TyC / TVP / Telefe / Disney+",arg:true},
  {f:"22/06",dia:"LUN",hora:"18:00",nota:"",a:"Francia",b:"Irak",canal:"DSports",arg:false},
  {f:"22/06",dia:"LUN",hora:"21:00",nota:"",a:"Noruega",b:"Senegal",canal:"DSports / TyC",arg:false},
  {f:"22/06",dia:"LUN",hora:"24:00",nota:"",a:"Jordania",b:"Argelia",canal:"DSports",arg:false},
  {f:"23/06",dia:"MAR",hora:"14:00",nota:"",a:"Portugal",b:"Uzbekistán",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"23/06",dia:"MAR",hora:"17:00",nota:"",a:"Inglaterra",b:"Ghana",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"23/06",dia:"MAR",hora:"20:00",nota:"",a:"Panamá",b:"Croacia",canal:"DSports 2 / TyC",arg:false},
  {f:"23/06",dia:"MAR",hora:"23:00",nota:"",a:"Colombia",b:"Congo",canal:"DSports",arg:false},
  {f:"24/06",dia:"MIÉ",hora:"16:00",nota:"",a:"Suiza",b:"Canadá",canal:"DSports / TyC",arg:false},
  {f:"24/06",dia:"MIÉ",hora:"16:00",nota:"",a:"Bosnia",b:"Qatar",canal:"DSports 2",arg:false},
  {f:"24/06",dia:"MIÉ",hora:"19:00",nota:"",a:"Escocia",b:"Brasil",canal:"DSports / Telefe / Disney+",arg:false},
  {f:"24/06",dia:"MIÉ",hora:"19:00",nota:"",a:"Marruecos",b:"Haití",canal:"DSports+ / TyC",arg:false},
  {f:"24/06",dia:"MIÉ",hora:"22:00",nota:"",a:"Rep. Checa",b:"México",canal:"DSports",arg:false},
  {f:"24/06",dia:"MIÉ",hora:"22:00",nota:"",a:"Sudáfrica",b:"Corea del Sur",canal:"DSports+ / TyC",arg:false},
  {f:"25/06",dia:"JUE",hora:"17:00",nota:"",a:"Ecuador",b:"Alemania",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"25/06",dia:"JUE",hora:"17:00",nota:"",a:"Curazao",b:"Costa de Marfil",canal:"DSports 2",arg:false},
  {f:"25/06",dia:"JUE",hora:"20:00",nota:"",a:"Túnez",b:"Países Bajos",canal:"DSports / TVP",arg:false},
  {f:"25/06",dia:"JUE",hora:"20:00",nota:"",a:"Japón",b:"Suecia",canal:"DSports+ / TyC",arg:false},
  {f:"25/06",dia:"JUE",hora:"23:00",nota:"",a:"Turquía",b:"Estados Unidos",canal:"DSports / TyC",arg:false},
  {f:"25/06",dia:"JUE",hora:"23:00",nota:"",a:"Paraguay",b:"Australia",canal:"DSports 2 / Telefe / Disney+",arg:false},
  {f:"26/06",dia:"VIE",hora:"16:00",nota:"",a:"Noruega",b:"Francia",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"26/06",dia:"VIE",hora:"16:00",nota:"",a:"Senegal",b:"Irak",canal:"DSports 2",arg:false},
  {f:"26/06",dia:"VIE",hora:"21:00",nota:"",a:"Uruguay",b:"España",canal:"DSports / TyC / Telefe / Disney+",arg:false},
  {f:"26/06",dia:"VIE",hora:"21:00",nota:"",a:"Cabo Verde",b:"Arabia Saudita",canal:"DSports 2",arg:false},
  {f:"26/06",dia:"VIE",hora:"24:00",nota:"",a:"Nueva Zelanda",b:"Bélgica",canal:"DSports",arg:false},
  {f:"26/06",dia:"VIE",hora:"24:00",nota:"",a:"Egipto",b:"Irán",canal:"DSports+ / TyC",arg:false},
  {f:"27/06",dia:"SÁB",hora:"18:00",nota:"",a:"Panamá",b:"Inglaterra",canal:"DSports / TyC / TVP",arg:false},
  {f:"27/06",dia:"SÁB",hora:"18:00",nota:"",a:"Croacia",b:"Ghana",canal:"DSports+ / Eventos",arg:false},
  {f:"27/06",dia:"SÁB",hora:"20:30",nota:"",a:"Colombia",b:"Portugal",canal:"DSports 2",arg:false},
  {f:"27/06",dia:"SÁB",hora:"20:30",nota:"",a:"Congo",b:"Uzbekistán",canal:"DSports+ / TyC",arg:false},
  {f:"27/06",dia:"SÁB",hora:"23:00",nota:"",a:"Jordania",b:"Argentina",canal:"DSports / TyC / TVP / Telefe / Disney+",arg:true},
  {f:"27/06",dia:"SÁB",hora:"23:00",nota:"",a:"Argelia",b:"Austria",canal:"DSports+ / Eventos",arg:false}
];

// ========== FECHAS ==========
var FECHAS_GRUPO = [];
for (var d = 11; d <= 27; d++) {
  var fecha = new Date(2026, 5, d);
  var dias = ["DOM","LUN","MAR","MIÉ","JUE","VIE","SÁB"];
  var ff = String(d).padStart(2,'0') + "/06";
  FECHAS_GRUPO.push({
    fecha: ff, num: d, dia: dias[fecha.getDay()], mes: "JUN",
    tieneArg: FIXTURE.some(function(m){return m.f===ff && m.arg}),
    tienePartidos: FIXTURE.some(function(m){return m.f===ff})
  });
}

// ========== ESTADO ==========
var selectedDate = null;
var espnEvents = [];
var currentSlide = 0;
var ESPN_URL = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';

function flagUrl(team) {
  var t = TEAMS[team];
  return t ? 'https://flagcdn.com/w80/' + t.code + '.png' : '';
}

function getGroup(a, b) {
  return (TEAMS[a] && TEAMS[a].group) || (TEAMS[b] && TEAMS[b].group) || '?';
}

// ========== DATES ==========
function renderDates() {
  var c = document.getElementById('ep-dates');
  var html = '', lastMes = '';
  for (var i = 0; i < FECHAS_GRUPO.length; i++) {
    var f = FECHAS_GRUPO[i];
    if (!f.tienePartidos) continue;
    if (f.mes !== lastMes) { html += '<div class="ep-month-sep">' + f.mes + '</div>'; lastMes = f.mes; }
    var cls = (selectedDate === f.fecha ? ' active' : '') + (f.tieneArg ? ' has-arg' : '');
    html += '<button class="ep-date-btn' + cls + '" data-fecha="' + f.fecha + '">' +
      '<span class="ep-date-day">' + f.dia + '</span><span class="ep-date-num">' + f.num + '</span></button>';
  }
  c.innerHTML = html;
  c.querySelectorAll('.ep-date-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectedDate = btn.dataset.fecha;
      currentSlide = 0;
      renderDates();
      renderMatches();
      fetchESPN(selectedDate);
      btn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    });
  });
}

// ========== ESPN MATCHING ==========
function findESPNMatch(teamA, teamB) {
  var abbrA = TEAMS[teamA] ? TEAMS[teamA].abbr : '';
  var abbrB = TEAMS[teamB] ? TEAMS[teamB].abbr : '';
  if (!abbrA || !abbrB) return null;

  for (var i = 0; i < espnEvents.length; i++) {
    var comp = espnEvents[i].competitions[0];
    var abbrs = comp.competitors.map(function(c){return c.team.abbreviation});
    if (abbrs.indexOf(abbrA) >= 0 && abbrs.indexOf(abbrB) >= 0) return espnEvents[i];
  }
  return null;
}

function getMatchInfo(espnEvent) {
  if (!espnEvent) return {status:'proximo'};
  var comp = espnEvent.competitions[0];
  var st = comp.status.type;
  var home = comp.competitors.find(function(c){return c.homeAway==='home'});
  var away = comp.competitors.find(function(c){return c.homeAway==='away'});
  var venue = comp.venue && comp.venue.address ? comp.venue.address.city : '';

  var result = {
    homeAbbr: home.team.abbreviation,
    awayAbbr: away.team.abbreviation,
    homeScore: home.score,
    awayScore: away.score,
    venue: venue,
    details: comp.details || []
  };

  if (st.completed) {
    result.status = 'finalizado';
    result.statusText = 'FINALIZADO';
  } else if (st.state === 'in') {
    result.status = 'envivo';
    var detail = st.detail || '';
    result.statusText = detail === 'HT' ? 'Entretiempo' : comp.status.displayClock || '';
  } else {
    result.status = 'proximo';
  }
  return result;
}

function getScoreForTeam(info, teamName) {
  var abbr = TEAMS[teamName] ? TEAMS[teamName].abbr : '';
  if (info.homeAbbr === abbr) return info.homeScore;
  if (info.awayAbbr === abbr) return info.awayScore;
  return '';
}

function getTeamIdFromESPN(espnEvent, teamName) {
  if (!espnEvent) return '';
  var abbr = TEAMS[teamName] ? TEAMS[teamName].abbr : '';
  var comp = espnEvent.competitions[0];
  var found = comp.competitors.find(function(c){return c.team.abbreviation===abbr});
  return found ? found.team.id : '';
}

function parseGoals(espnEvent, teamName) {
  if (!espnEvent) return '';
  var teamId = getTeamIdFromESPN(espnEvent, teamName);
  if (!teamId) return '';
  var comp = espnEvent.competitions[0];
  var details = comp.details || [];
  var goals = [];
  for (var i = 0; i < details.length; i++) {
    var d = details[i];
    var type = d.type ? d.type.text : '';
    if (type.indexOf('Goal') < 0 && type.indexOf('Penalty - Scored') < 0) continue;
    if (!d.team || d.team.id !== teamId) continue;
    var clock = d.clock ? d.clock.displayValue : '';
    var name = (d.athletesInvolved && d.athletesInvolved[0]) ? d.athletesInvolved[0].displayName : '';
    if (!name) continue;
    var isPenalty = type.indexOf('Penalty') >= 0;
    goals.push(name + ' ' + clock + (isPenalty ? ' (P)' : ''));
  }
  if (!goals.length) return '';
  return teamName + ': ' + goals.join(', ');
}

// ========== RENDER MATCHES ==========
function renderMatches() {
  var carousel = document.getElementById('ep-carousel');
  var matches = FIXTURE.filter(function(m){return m.f === selectedDate});

  if (!matches.length) {
    carousel.innerHTML = '<div class="ep-empty">No hay partidos en esta fecha</div>';
    document.getElementById('ep-dots').innerHTML = '';
    return;
  }

  var html = '';
  for (var i = 0; i < matches.length; i++) {
    var m = matches[i];
    var grupo = getGroup(m.a, m.b);
    var espn = findESPNMatch(m.a, m.b);
    var info = getMatchInfo(espn);

    var cardClass = 'ep-card';
    if (m.arg) cardClass += ' argentina';
    if (info.status === 'envivo') cardClass += ' en-vivo';
    if (info.status === 'finalizado') cardClass += ' finalizado';

    var estadoHtml = '';
    if (info.status === 'envivo') {
      var extra = info.statusText ? ' - ' + info.statusText : '';
      estadoHtml = '<span class="ep-card-estado en-vivo">&#9679; EN VIVO' + extra + '</span>';
    } else if (info.status === 'finalizado') {
      estadoHtml = '<span class="ep-card-estado">' + info.statusText + '</span>';
    }

    var centerHtml = '';
    if (info.status === 'proximo') {
      centerHtml = '<span class="ep-hora">' + m.hora + '</span>';
      if (m.nota) centerHtml += '<span class="ep-hora-nota">' + m.nota + '</span>';
    } else {
      var sA = getScoreForTeam(info, m.a);
      var sB = getScoreForTeam(info, m.b);
      centerHtml = '<span class="ep-score">' + sA + ' - ' + sB + '</span>';
    }

    if (info.venue) {
      centerHtml += '<span class="ep-sede">' + info.venue + '</span>';
    }

    var golesHtml = '';
    if (info.status !== 'proximo' && espn) {
      var gA = parseGoals(espn, m.a);
      var gB = parseGoals(espn, m.b);
      var parts = [];
      if (gA) parts.push(gA);
      if (gB) parts.push(gB);
      if (parts.length) golesHtml = '<div class="ep-card-goles">' + parts.join(' | ') + '</div>';
    }

    html += '<div class="' + cardClass + '">' +
      '<div class="ep-card-top">' +
        '<span class="ep-card-grupo">Grupo ' + grupo + '</span>' +
        estadoHtml +
      '</div>' +
      '<div class="ep-card-body">' +
        '<div class="ep-team">' +
          '<img class="ep-team-flag" src="' + flagUrl(m.a) + '" alt="' + m.a + '" onerror="this.style.display=\'none\'">' +
          '<span class="ep-team-name">' + m.a + '</span>' +
        '</div>' +
        '<div class="ep-score-box">' + centerHtml + '</div>' +
        '<div class="ep-team">' +
          '<img class="ep-team-flag" src="' + flagUrl(m.b) + '" alt="' + m.b + '" onerror="this.style.display=\'none\'">' +
          '<span class="ep-team-name">' + m.b + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="ep-card-bottom">' +
        '<span class="ep-card-canal">' + m.canal + '</span>' +
        golesHtml +
      '</div>' +
    '</div>';
  }
  carousel.innerHTML = html;
  renderDots(matches.length);
  scrollToSlide(0, false);
  setupCarouselObserver();
}

// ========== CAROUSEL ==========
function renderDots(count) {
  var c = document.getElementById('ep-dots');
  if (count <= 1) { c.innerHTML = ''; return; }
  var html = '';
  for (var i = 0; i < count; i++) {
    html += '<span class="ep-dot' + (i===currentSlide?' active':'') + '"></span>';
  }
  c.innerHTML = html;
}

function scrollToSlide(index, smooth) {
  var carousel = document.getElementById('ep-carousel');
  var cards = carousel.querySelectorAll('.ep-card');
  if (!cards[index]) return;
  currentSlide = index;
  cards[index].scrollIntoView({behavior: smooth?'smooth':'auto', block:'nearest', inline:'center'});
  updateDots();
}

function updateDots() {
  document.querySelectorAll('.ep-dot').forEach(function(dot, i) {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function setupCarouselObserver() {
  var carousel = document.getElementById('ep-carousel');
  var cards = carousel.querySelectorAll('.ep-card');
  if (!cards.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
        var idx = Array.from(cards).indexOf(entry.target);
        if (idx >= 0) { currentSlide = idx; updateDots(); }
      }
    });
  }, {root: carousel, threshold: 0.6});
  cards.forEach(function(card) { observer.observe(card); });
}

document.getElementById('ep-arrow-left').addEventListener('click', function() {
  if (currentSlide > 0) scrollToSlide(currentSlide - 1, true);
});
document.getElementById('ep-arrow-right').addEventListener('click', function() {
  var cards = document.querySelectorAll('#ep-carousel .ep-card');
  if (currentSlide < cards.length - 1) scrollToSlide(currentSlide + 1, true);
});

// ========== ESPN FETCH ==========
function dateToESPN(dateStr) {
  var parts = dateStr.split('/');
  return '2026' + parts[1] + parts[0];
}

function fetchESPN(dateStr) {
  var url = ESPN_URL + '?dates=' + dateToESPN(dateStr);
  fetch(url)
    .then(function(res){ return res.json(); })
    .then(function(data) {
      if (data.events && Array.isArray(data.events)) {
        espnEvents = data.events;
        try { localStorage.setItem('ep-mundial-espn-' + dateStr, JSON.stringify(data.events)); } catch(e) {}
        renderMatches();
      }
    })
    .catch(function(e){ console.log('ESPN no disponible'); });
}

// ========== INIT ==========
function selectInitialDate() {
  var hoy = new Date();
  var dd = String(hoy.getDate()).padStart(2,'0');
  var mm = String(hoy.getMonth()+1).padStart(2,'0');
  var fechaHoy = dd + '/' + mm;
  var conPartidos = FECHAS_GRUPO.filter(function(f){return f.tienePartidos});
  var sel = conPartidos.find(function(f){return f.fecha===fechaHoy});
  if (!sel) sel = conPartidos.find(function(f){return parseInt(f.fecha)>=parseInt(dd)});
  if (!sel && conPartidos.length) sel = conPartidos[0];
  selectedDate = sel ? sel.fecha : (conPartidos[0] ? conPartidos[0].fecha : '11/06');
}

function init() {
  selectInitialDate();
  try {
    var cached = localStorage.getItem('ep-mundial-espn-' + selectedDate);
    if (cached) espnEvents = JSON.parse(cached);
  } catch(e) {}
  renderDates();
  renderMatches();
  setTimeout(function() {
    var ab = document.querySelector('.ep-date-btn.active');
    if (ab) ab.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  }, 100);
  fetchESPN(selectedDate);
  setInterval(function(){ fetchESPN(selectedDate); }, 60000);
}

init();

})();
