(function(){

// ========== EQUIPOS ==========
var TEAMS = {
  "México":{en:"Mexico",code:"mx",abbr:"MEX"},
  "Sudáfrica":{en:"South Africa",code:"za",abbr:"RSA"},
  "Corea del Sur":{en:"South Korea",code:"kr",abbr:"KOR"},
  "Rep. Checa":{en:"Czechia",code:"cz",abbr:"CZE"},
  "Canadá":{en:"Canada",code:"ca",abbr:"CAN"},
  "Bosnia":{en:"Bosnia and Herzegovina",code:"ba",abbr:"BIH"},
  "Qatar":{en:"Qatar",code:"qa",abbr:"QAT"},
  "Suiza":{en:"Switzerland",code:"ch",abbr:"SUI"},
  "Brasil":{en:"Brazil",code:"br",abbr:"BRA"},
  "Marruecos":{en:"Morocco",code:"ma",abbr:"MAR"},
  "Haití":{en:"Haiti",code:"ht",abbr:"HAI"},
  "Escocia":{en:"Scotland",code:"gb-sct",abbr:"SCO"},
  "Estados Unidos":{en:"United States",code:"us",abbr:"USA"},
  "Paraguay":{en:"Paraguay",code:"py",abbr:"PAR"},
  "Australia":{en:"Australia",code:"au",abbr:"AUS"},
  "Turquía":{en:"Turkey",code:"tr",abbr:"TUR"},
  "Alemania":{en:"Germany",code:"de",abbr:"GER"},
  "Curazao":{en:"Curacao",code:"cw",abbr:"CUW"},
  "Costa de Marfil":{en:"Ivory Coast",code:"ci",abbr:"CIV"},
  "Ecuador":{en:"Ecuador",code:"ec",abbr:"ECU"},
  "Países Bajos":{en:"Netherlands",code:"nl",abbr:"NED"},
  "Japón":{en:"Japan",code:"jp",abbr:"JPN"},
  "Suecia":{en:"Sweden",code:"se",abbr:"SWE"},
  "Túnez":{en:"Tunisia",code:"tn",abbr:"TUN"},
  "España":{en:"Spain",code:"es",abbr:"ESP"},
  "Cabo Verde":{en:"Cape Verde",code:"cv",abbr:"CPV"},
  "Arabia Saudita":{en:"Saudi Arabia",code:"sa",abbr:"KSA"},
  "Uruguay":{en:"Uruguay",code:"uy",abbr:"URU"},
  "Bélgica":{en:"Belgium",code:"be",abbr:"BEL"},
  "Egipto":{en:"Egypt",code:"eg",abbr:"EGY"},
  "Irán":{en:"Iran",code:"ir",abbr:"IRN"},
  "Nueva Zelanda":{en:"New Zealand",code:"nz",abbr:"NZL"},
  "Francia":{en:"France",code:"fr",abbr:"FRA"},
  "Senegal":{en:"Senegal",code:"sn",abbr:"SEN"},
  "Irak":{en:"Iraq",code:"iq",abbr:"IRQ"},
  "Noruega":{en:"Norway",code:"no",abbr:"NOR"},
  "Argentina":{en:"Argentina",code:"ar",abbr:"ARG"},
  "Argelia":{en:"Algeria",code:"dz",abbr:"ALG"},
  "Austria":{en:"Austria",code:"at",abbr:"AUT"},
  "Jordania":{en:"Jordan",code:"jo",abbr:"JOR"},
  "Portugal":{en:"Portugal",code:"pt",abbr:"POR"},
  "Congo":{en:"DR Congo",code:"cd",abbr:"COD"},
  "Uzbekistán":{en:"Uzbekistan",code:"uz",abbr:"UZB"},
  "Colombia":{en:"Colombia",code:"co",abbr:"COL"},
  "Inglaterra":{en:"England",code:"gb-eng",abbr:"ENG"},
  "Croacia":{en:"Croatia",code:"hr",abbr:"CRO"},
  "Ghana":{en:"Ghana",code:"gh",abbr:"GHA"},
  "Panamá":{en:"Panama",code:"pa",abbr:"PAN"}
};

// Diccionario inverso: displayName ESPN → nombre español
var ESPN_TO_ES = {};
var ABBR_TO_ES = {};
Object.keys(TEAMS).forEach(function(es){
  ESPN_TO_ES[TEAMS[es].en] = es;
  ABBR_TO_ES[TEAMS[es].abbr] = es;
});

// ========== FECHAS ELIMINATORIAS ==========
var FECHAS = [
  {fecha:"28/06",num:28,dia:"DOM",mes:"JUN"},
  {fecha:"29/06",num:29,dia:"LUN",mes:"JUN"},
  {fecha:"30/06",num:30,dia:"MAR",mes:"JUN"},
  {fecha:"01/07",num:1,dia:"MIÉ",mes:"JUL"},
  {fecha:"02/07",num:2,dia:"JUE",mes:"JUL"},
  {fecha:"03/07",num:3,dia:"VIE",mes:"JUL"},
  {fecha:"04/07",num:4,dia:"SÁB",mes:"JUL"},
  {fecha:"05/07",num:5,dia:"DOM",mes:"JUL"},
  {fecha:"06/07",num:6,dia:"LUN",mes:"JUL"},
  {fecha:"07/07",num:7,dia:"MAR",mes:"JUL"},
  {fecha:"09/07",num:9,dia:"JUE",mes:"JUL"},
  {fecha:"10/07",num:10,dia:"VIE",mes:"JUL"},
  {fecha:"11/07",num:11,dia:"SÁB",mes:"JUL"},
  {fecha:"14/07",num:14,dia:"MAR",mes:"JUL"},
  {fecha:"15/07",num:15,dia:"MIÉ",mes:"JUL"},
  {fecha:"18/07",num:18,dia:"SÁB",mes:"JUL"},
  {fecha:"19/07",num:19,dia:"DOM",mes:"JUL"}
];
var fechasConArg = {};

// ========== FIXTURE DIECISEISAVOS ==========
var FIXTURE = [
  {f:"28/06",hora:"16:00",a:"Sudáfrica",b:"Canadá",fase:"Dieciseisavos"},
  {f:"29/06",hora:"14:00",a:"Brasil",b:"Japón",fase:"Dieciseisavos"},
  {f:"29/06",hora:"17:30",a:"Alemania",b:"Paraguay",fase:"Dieciseisavos"},
  {f:"29/06",hora:"22:00",a:"Países Bajos",b:"Marruecos",fase:"Dieciseisavos"},
  {f:"30/06",hora:"14:00",a:"Costa de Marfil",b:"Noruega",fase:"Dieciseisavos"},
  {f:"30/06",hora:"18:00",a:"Francia",b:"Suecia",fase:"Dieciseisavos"},
  {f:"30/06",hora:"22:00",a:"México",b:"Ecuador",fase:"Dieciseisavos"},
  {f:"01/07",hora:"13:00",a:"Inglaterra",b:"Congo",fase:"Dieciseisavos"},
  {f:"01/07",hora:"17:00",a:"Bélgica",b:"Senegal",fase:"Dieciseisavos"},
  {f:"01/07",hora:"21:00",a:"Estados Unidos",b:"Bosnia",fase:"Dieciseisavos"},
  {f:"02/07",hora:"16:00",a:"España",b:"2J",fase:"Dieciseisavos"},
  {f:"02/07",hora:"20:00",a:"Portugal",b:"Croacia",fase:"Dieciseisavos"},
  {f:"03/07",hora:"00:00",a:"Suiza",b:"3EFGIJ",fase:"Dieciseisavos"},
  {f:"03/07",hora:"15:00",a:"Australia",b:"Egipto",fase:"Dieciseisavos"},
  {f:"03/07",hora:"19:00",a:"Argentina",b:"Cabo Verde",fase:"Dieciseisavos"},
  {f:"03/07",hora:"22:30",a:"Colombia",b:"Ghana",fase:"Dieciseisavos"}
];

// ========== ESTADO ==========
var selectedDate = null;
var espnEvents = [];
var canalesCSV = {};
var currentSlide = 0;
var ESPN_URL = 'https://site.api.espn.com/apis/site/v2/sports/soccer/fifa.world/scoreboard';
var CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQrkxNc96pjS1qmFJ0PQ1esEExZ_t6T5B12_Nsd_zIkkms9xHGc75SjVyaTO1Uwq-O0UPiQPSsIMcZv/pub?gid=218177988&single=true&output=csv';

var SEDES = {
  "East Rutherford": "Nueva Jersey",
  "Inglewood": "Los Ángeles",
  "Foxborough": "Boston",
  "Santa Clara": "Bahía de San Francisco",
  "Houston": "Houston",
  "Dallas": "Dallas",
  "Atlanta": "Atlanta",
  "Seattle": "Seattle",
  "Miami": "Miami",
  "Philadelphia": "Filadelfia",
  "Kansas City": "Kansas City",
  "Monterrey": "Monterrey",
  "Mexico City": "Ciudad de México",
  "Toronto": "Toronto",
  "Vancouver": "Vancouver"
};

// ========== UTILIDADES ==========
function translateTeam(displayName) {
  return ESPN_TO_ES[displayName] || displayName;
}

function flagUrl(teamES) {
  var t = TEAMS[teamES];
  return t ? 'https://flagcdn.com/w80/' + t.code + '.png' : '';
}

function flagUrlFromAbbr(abbr) {
  var es = ABBR_TO_ES[abbr];
  return es ? flagUrl(es) : '';
}

function findESPNMatch(teamA_ES, teamB_ES) {
  var abbrA = TEAMS[teamA_ES] ? TEAMS[teamA_ES].abbr : '';
  var abbrB = TEAMS[teamB_ES] ? TEAMS[teamB_ES].abbr : '';
  if (!abbrA || !abbrB) return null;
  for (var i = 0; i < espnEvents.length; i++) {
    var comp = espnEvents[i].competitions[0];
    var abbrs = comp.competitors.map(function(c){return c.team.abbreviation});
    if (abbrs.indexOf(abbrA) >= 0 && abbrs.indexOf(abbrB) >= 0) return espnEvents[i];
  }
  return null;
}

function getTeamIdESPN(comp, teamES) {
  var abbr = TEAMS[teamES] ? TEAMS[teamES].abbr : '';
  var found = comp.competitors.find(function(c){return c.team.abbreviation === abbr});
  return found ? found.team.id : '';
}

// ========== CSV CANALES ==========
function parseCSV(text) {
  var lines = text.split('\n');
  canalesCSV = {};
  for (var i = 1; i < lines.length; i++) {
    var cols = lines[i].split(',');
    if (cols.length < 7) continue;
    var fecha = cols[0].trim();
    var hora = cols[2].trim();
    var canal = cols[6].trim();
    if (fecha && hora && canal) {
      canalesCSV[fecha + '-' + hora] = canal;
    }
  }
}

function fetchCanales() {
  fetch(CSV_URL)
    .then(function(r){ return r.text(); })
    .then(function(text){ parseCSV(text); renderMatches(); })
    .catch(function(e){ console.log('CSV canales no disponible'); });
}

// ========== DATES ==========
function renderDates() {
  var c = document.getElementById('ep-dates');
  var html = '', lastMes = '';
  for (var i = 0; i < FECHAS.length; i++) {
    var f = FECHAS[i];
    if (f.mes !== lastMes) { html += '<div class="ep-month-sep">' + f.mes + '</div>'; lastMes = f.mes; }
    var cls = (selectedDate === f.fecha ? ' active' : '') + (fechasConArg[f.fecha] ? ' has-arg' : '');
    html += '<button class="ep-date-btn' + cls + '" data-fecha="' + f.fecha + '">' +
      '<span class="ep-date-day">' + f.dia + '</span><span class="ep-date-num">' + f.num + '</span></button>';
  }
  c.innerHTML = html;
  c.querySelectorAll('.ep-date-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectedDate = btn.dataset.fecha;
      currentSlide = 0;
      espnEvents = [];
      renderDates();
      renderMatches();
      fetchESPN(selectedDate);
      btn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    });
  });
}

// ========== ESPN ==========
function dateToESPN(dateStr) {
  var parts = dateStr.split('/');
  return '2026' + parts[1] + parts[0];
}

function fetchESPN(dateStr) {
  var cacheKey = 'ep-mundial-espn-' + dateStr;
  var url = ESPN_URL + '?dates=' + dateToESPN(dateStr);
  fetch(url)
    .then(function(res){ return res.json(); })
    .then(function(data) {
      if (data.events && Array.isArray(data.events)) {
        espnEvents = data.events;
        try { localStorage.setItem(cacheKey, JSON.stringify(data.events)); } catch(e) {}
        renderMatches();
      }
    })
    .catch(function(e){ console.log('ESPN no disponible'); });
}

// ========== RENDER MATCHES ==========
function getFase(altGameNote) {
  if (!altGameNote) return '';
  var note = altGameNote.toLowerCase();
  if (note.indexOf('round of 32') >= 0) return 'Dieciseisavos';
  if (note.indexOf('round of 16') >= 0) return 'Octavos';
  if (note.indexOf('quarterfinal') >= 0) return 'Cuartos';
  if (note.indexOf('semifinal') >= 0) return 'Semifinal';
  if (note.indexOf('third') >= 0) return '3er puesto';
  if (note.indexOf('final') >= 0) return 'Final';
  return altGameNote;
}

function renderMatches() {
  var carousel = document.getElementById('ep-carousel');
  var fixtureMatches = FIXTURE.filter(function(m){return m.f === selectedDate});
  var hasFixture = fixtureMatches.length > 0;

  // Si no hay FIXTURE ni ESPN, mostrar cargando
  if (!hasFixture && !espnEvents.length) {
    carousel.innerHTML = '<div class="ep-empty">Cargando partidos...</div>';
    document.getElementById('ep-dots').innerHTML = '';
    return;
  }

  var html = '';
  var cardCount = 0;

  if (hasFixture) {
    // Render desde FIXTURE hardcodeado + ESPN para scores
    for (var i = 0; i < fixtureMatches.length; i++) {
      var m = fixtureMatches[i];
      var isArg = m.a === 'Argentina' || m.b === 'Argentina';
      if (isArg) fechasConArg[selectedDate] = true;

      // Buscar match en ESPN por abreviaturas
      var espn = findESPNMatch(m.a, m.b);
      var canal = canalesCSV[m.f + '-' + m.hora] || '';

      var cardClass = 'ep-card';
      if (isArg) cardClass += ' argentina';

      var estadoHtml = '';
      var centerHtml = '';
      var golesHtml = '';
      var venue = '';

      if (espn) {
        var comp = espn.competitions[0];
        var st = comp.status.type;
        var home = comp.competitors.find(function(c){return c.homeAway==='home'});
        var away = comp.competitors.find(function(c){return c.homeAway==='away'});
        var rawCity = comp.venue && comp.venue.address ? comp.venue.address.city.split(',')[0] : '';
        venue = SEDES[rawCity] || rawCity;

        if (st.state === 'in') {
          cardClass += ' en-vivo';
          var detail = st.detail || '';
          var statusText = detail === 'HT' ? 'Entretiempo' : comp.status.displayClock || '';
          estadoHtml = '<span class="ep-card-estado en-vivo">&#9679; EN VIVO - ' + statusText + '</span>';
          centerHtml = '<span class="ep-score">' + home.score + ' - ' + away.score + '</span>';
        } else if (st.completed) {
          cardClass += ' finalizado';
          estadoHtml = '<span class="ep-card-estado">FINALIZADO</span>';
          centerHtml = '<span class="ep-score">' + home.score + ' - ' + away.score + '</span>';
        } else {
          centerHtml = '<span class="ep-hora">' + m.hora + '</span>';
        }

        if (st.state !== 'pre' && comp.details && comp.details.length) {
          var gA = parseGoalsESPN(comp.details, getTeamIdESPN(comp, m.a), m.a);
          var gB = parseGoalsESPN(comp.details, getTeamIdESPN(comp, m.b), m.b);
          var parts = [];
          if (gA) parts.push(gA);
          if (gB) parts.push(gB);
          if (parts.length) golesHtml = '<div class="ep-card-goles">' + parts.join(' | ') + '</div>';
        }
      } else {
        centerHtml = '<span class="ep-hora">' + m.hora + '</span>';
      }

      if (venue) centerHtml += '<span class="ep-sede">' + venue + '</span>';
      var canalHtml = canal ? '<span class="ep-card-canal">' + canal + '</span>' : '';

      html += '<div class="' + cardClass + '">' +
        '<div class="ep-card-top">' +
          '<span class="ep-card-grupo">' + m.fase + '</span>' +
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
          canalHtml +
          golesHtml +
        '</div>' +
      '</div>';
      cardCount++;
    }
  } else {
    // Fechas sin FIXTURE (octavos en adelante): render desde ESPN
    for (var i = 0; i < espnEvents.length; i++) {
      var ev = espnEvents[i];
      var comp = ev.competitions[0];
      var st = comp.status.type;
      var home = comp.competitors.find(function(c){return c.homeAway==='home'});
      var away = comp.competitors.find(function(c){return c.homeAway==='away'});
      var homeES = translateTeam(home.team.displayName);
      var awayES = translateTeam(away.team.displayName);
      var rawCity = comp.venue && comp.venue.address ? comp.venue.address.city.split(',')[0] : '';
      var venue = SEDES[rawCity] || rawCity;
      var fase = getFase(comp.altGameNote || '');
      var isArg = home.team.abbreviation === 'ARG' || away.team.abbreviation === 'ARG';
      if (isArg) fechasConArg[selectedDate] = true;

      var eventDate = new Date(comp.date);
      var argHours = eventDate.getUTCHours() - 3;
      if (argHours < 0) argHours += 24;
      var argMins = eventDate.getUTCMinutes();
      var horaARG = String(argHours).padStart(2,'0') + ':' + String(argMins).padStart(2,'0');
      var canal = canalesCSV[selectedDate + '-' + horaARG] || '';

      var cardClass = 'ep-card';
      if (isArg) cardClass += ' argentina';
      if (st.state === 'in') cardClass += ' en-vivo';
      if (st.completed) cardClass += ' finalizado';

      var estadoHtml = '';
      if (st.state === 'in') {
        var detail = st.detail || '';
        var statusText = detail === 'HT' ? 'Entretiempo' : comp.status.displayClock || '';
        estadoHtml = '<span class="ep-card-estado en-vivo">&#9679; EN VIVO - ' + statusText + '</span>';
      } else if (st.completed) {
        estadoHtml = '<span class="ep-card-estado">FINALIZADO</span>';
      }

      var centerHtml = '';
      if (st.state === 'pre') {
        centerHtml = '<span class="ep-hora">' + horaARG + '</span>';
      } else {
        centerHtml = '<span class="ep-score">' + home.score + ' - ' + away.score + '</span>';
      }
      if (venue) centerHtml += '<span class="ep-sede">' + venue + '</span>';

      var golesHtml = '';
      if (st.state !== 'pre' && comp.details && comp.details.length) {
        var golesHome = parseGoalsESPN(comp.details, home.team.id, homeES);
        var golesAway = parseGoalsESPN(comp.details, away.team.id, awayES);
        var parts = [];
        if (golesHome) parts.push(golesHome);
        if (golesAway) parts.push(golesAway);
        if (parts.length) golesHtml = '<div class="ep-card-goles">' + parts.join(' | ') + '</div>';
      }

      var canalHtml = canal ? '<span class="ep-card-canal">' + canal + '</span>' : '';

      html += '<div class="' + cardClass + '">' +
        '<div class="ep-card-top">' +
          '<span class="ep-card-grupo">' + fase + '</span>' +
          estadoHtml +
        '</div>' +
        '<div class="ep-card-body">' +
          '<div class="ep-team">' +
            '<img class="ep-team-flag" src="' + (flagUrl(homeES) || flagUrlFromAbbr(home.team.abbreviation)) + '" alt="' + homeES + '" onerror="this.style.display=\'none\'">' +
            '<span class="ep-team-name">' + homeES + '</span>' +
          '</div>' +
          '<div class="ep-score-box">' + centerHtml + '</div>' +
          '<div class="ep-team">' +
            '<img class="ep-team-flag" src="' + (flagUrl(awayES) || flagUrlFromAbbr(away.team.abbreviation)) + '" alt="' + awayES + '" onerror="this.style.display=\'none\'">' +
            '<span class="ep-team-name">' + awayES + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="ep-card-bottom">' +
          canalHtml +
          golesHtml +
        '</div>' +
      '</div>';
      cardCount++;
    }
  }

  carousel.innerHTML = html;
  renderDots(cardCount);
  scrollToSlide(0, false);
  setupCarouselObserver();
  var btns = document.querySelectorAll('.ep-date-btn');
  btns.forEach(function(btn){
    if (fechasConArg[btn.dataset.fecha]) btn.classList.add('has-arg');
  });
}

function parseGoalsESPN(details, teamId, teamName) {
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

// ========== INIT ==========
function selectInitialDate() {
  var hoy = new Date();
  var dd = String(hoy.getDate()).padStart(2,'0');
  var mm = String(hoy.getMonth()+1).padStart(2,'0');
  var fechaHoy = dd + '/' + mm;
  var sel = FECHAS.find(function(f){return f.fecha===fechaHoy});
  if (!sel) {
    // Buscar próxima fecha con partidos
    var hoyNum = parseInt(mm) * 100 + parseInt(dd);
    sel = FECHAS.find(function(f){
      var parts = f.fecha.split('/');
      var fNum = parseInt(parts[1]) * 100 + parseInt(parts[0]);
      return fNum >= hoyNum;
    });
  }
  if (!sel) sel = FECHAS[FECHAS.length - 1];
  selectedDate = sel.fecha;
}

function init() {
  selectInitialDate();
  try {
    var cached = localStorage.getItem('ep-mundial-espn-' + selectedDate);
    if (cached) { espnEvents = JSON.parse(cached); }
  } catch(e) {}
  renderDates();
  renderMatches();
  setTimeout(function() {
    var ab = document.querySelector('.ep-date-btn.active');
    if (ab) ab.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  }, 100);
  fetchCanales();
  fetchESPN(selectedDate);
  setInterval(function(){ fetchESPN(selectedDate); }, 60000);
}

init();

})();
