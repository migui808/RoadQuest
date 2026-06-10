const STORAGE_KEY = "ruta-rival-state-v3";
const LANG_KEY = "ruta-rival-lang";
const DEFAULT_CENTER = [40.4168, -3.7038];
const START_RADIUS_M = 45;
const FINISH_RADIUS_M = 45;
const OFF_ROUTE_LIMIT_M = 58;
const RECORD_MIN_STEP_M = 10;

const I18N = {
  es: {
    "status.searching": "Buscando ubicacion...",
    "status.vector": "Cargando mapa vectorial...",
    "status.gpsUnavailable": "GPS no disponible",
    "status.requesting": "Solicitando ubicacion...",
    "status.denied": "Ubicacion denegada",
    "status.failed": "No se pudo obtener ubicacion",
    "status.active": "GPS activo",
    "status.accuracy": "GPS activo +/- {meters} m",
    "status.interrupted": "GPS interrumpido",
    "permission.title": "Activa tu ubicacion",
    "permission.body": "La app necesita GPS para grabar recorridos y cronometrar intentos automaticamente.",
    "permission.button": "Permitir ubicacion",
    "profile.button": "Perfil",
    "profile.title": "Tu perfil",
    "profile.nickname": "Nickname",
    "profile.car": "Modelo de coche",
    "profile.save": "Guardar perfil",
    "profile.duplicate": "Ese nickname ya existe en este dispositivo.",
    "record.start": "Iniciar recorrido",
    "record.stop": "Finalizar recorrido",
    "record.needGps": "Activa el GPS para iniciar un recorrido.",
    "record.recording": "Grabando recorrido",
    "record.savingGps": "La trayectoria se esta guardando con GPS.",
    "record.tooShort": "Recorrido demasiado corto para publicarlo.",
    "timer.waiting": "Esperando salida",
    "timer.approachStart": "Acercate al punto inicial del recorrido.",
    "route.defaultName": "Ruta de {name}",
    "route.sprintPrefix": "Sprint",
    "route.routePrefix": "Ruta",
    "route.saved": "Ruta guardada.",
    "route.discarded": "Ruta descartada.",
    "route.attempts": "intentos",
    "route.record": "Record",
    "route.noReviews": "sin resenas",
    "route.guide": "Guiarme al inicio",
    "route.challenge": "Intentar batir",
    "route.distance": "Distancia",
    "route.fastest": "Tiempo mas rapido",
    "route.driver": "Piloto",
    "route.car": "Coche",
    "routeSave.title": "Guardar recorrido",
    "routeSave.preparing": "Preparando nombre sugerido...",
    "routeSave.nameLabel": "Nombre de la ruta",
    "routeSave.hint": "Puedes guardar el nombre sugerido o cambiarlo.",
    "routeSave.defaultReady": "Nombre por defecto listo.",
    "routeSave.placeReady": "Nombre sugerido por la zona detectada.",
    "routeSave.discard": "Descartar",
    "routeSave.save": "Guardar ruta",
    "routes.nearby": "Recorridos cercanos",
    "nav.backMap": "Volver al mapa",
    "nav.backList": "Volver a la lista",
    "guide.title": "Guia al inicio",
    "guide.needGps": "Activa el GPS para guiarte al inicio.",
    "guide.distanceStart": "{meters} m hasta la salida",
    "attempt.needGps": "Activa el GPS para iniciar el intento.",
    "attempt.armed": "Intento armado",
    "attempt.autoStart": "El cronometro arrancara automaticamente en la salida.",
    "attempt.startDetected": "Salida detectada.",
    "attempt.active": "Cronometro activo",
    "attempt.cancelled": "Intento cancelado: te has salido del recorrido.",
    "attempt.margin": "{margin} m de margen / {progress} m avanzados",
    "attempt.newRecord": "Nuevo record",
    "attempt.completed": "Intento completado",
    "attempt.won": "Has pasado a ser el mas rapido de este recorrido.",
    "attempt.currentRecord": "Record actual: {time}",
    "attempt.cancelledTitle": "Cancelado",
    "reviews.title": "Resenas",
    "reviews.placeholder": "Escribe una resena corta",
    "reviews.publish": "Publicar resena",
    "reviews.empty": "Aun no hay resenas."
  },
  en: {
    "status.searching": "Finding location...",
    "status.vector": "Loading vector map...",
    "status.gpsUnavailable": "GPS unavailable",
    "status.requesting": "Requesting location...",
    "status.denied": "Location denied",
    "status.failed": "Could not get location",
    "status.active": "GPS active",
    "status.accuracy": "GPS active +/- {meters} m",
    "status.interrupted": "GPS interrupted",
    "permission.title": "Enable location",
    "permission.body": "The app needs GPS to record routes and time attempts automatically.",
    "permission.button": "Allow location",
    "profile.button": "Profile",
    "profile.title": "Your profile",
    "profile.nickname": "Nickname",
    "profile.car": "Car model",
    "profile.save": "Save profile",
    "profile.duplicate": "That nickname already exists on this device.",
    "record.start": "Start route",
    "record.stop": "Finish route",
    "record.needGps": "Enable GPS to start a route.",
    "record.recording": "Recording route",
    "record.savingGps": "The path is being saved with GPS.",
    "record.tooShort": "Route too short to publish.",
    "timer.waiting": "Waiting for start",
    "timer.approachStart": "Move near the route start point.",
    "route.defaultName": "Route by {name}",
    "route.sprintPrefix": "Sprint",
    "route.routePrefix": "Route",
    "route.saved": "Route saved.",
    "route.discarded": "Route discarded.",
    "route.attempts": "attempts",
    "route.record": "Record",
    "route.noReviews": "no reviews",
    "route.guide": "Guide me to start",
    "route.challenge": "Try to beat",
    "route.distance": "Distance",
    "route.fastest": "Fastest time",
    "route.driver": "Driver",
    "route.car": "Car",
    "routeSave.title": "Save route",
    "routeSave.preparing": "Preparing suggested name...",
    "routeSave.nameLabel": "Route name",
    "routeSave.hint": "Keep the suggested name or change it.",
    "routeSave.defaultReady": "Default name ready.",
    "routeSave.placeReady": "Suggested name based on detected area.",
    "routeSave.discard": "Discard",
    "routeSave.save": "Save route",
    "routes.nearby": "Nearby routes",
    "nav.backMap": "Back to map",
    "nav.backList": "Back to list",
    "guide.title": "Guide to start",
    "guide.needGps": "Enable GPS to guide you to the start.",
    "guide.distanceStart": "{meters} m to start",
    "attempt.needGps": "Enable GPS to start the attempt.",
    "attempt.armed": "Attempt armed",
    "attempt.autoStart": "The timer will start automatically at the start point.",
    "attempt.startDetected": "Start detected.",
    "attempt.active": "Timer active",
    "attempt.cancelled": "Attempt cancelled: you left the route.",
    "attempt.margin": "{margin} m margin / {progress} m progressed",
    "attempt.newRecord": "New record",
    "attempt.completed": "Attempt completed",
    "attempt.won": "You are now the fastest on this route.",
    "attempt.currentRecord": "Current record: {time}",
    "attempt.cancelledTitle": "Cancelled",
    "reviews.title": "Reviews",
    "reviews.placeholder": "Write a short review",
    "reviews.publish": "Publish review",
    "reviews.empty": "No reviews yet."
  },
  fr: {
    "status.searching": "Recherche de position...",
    "status.vector": "Chargement de la carte...",
    "status.gpsUnavailable": "GPS indisponible",
    "status.requesting": "Demande de position...",
    "status.denied": "Position refusee",
    "status.failed": "Position introuvable",
    "status.active": "GPS actif",
    "status.accuracy": "GPS actif +/- {meters} m",
    "status.interrupted": "GPS interrompu",
    "permission.title": "Active la position",
    "permission.body": "L'app a besoin du GPS pour enregistrer les routes et chronometrer les essais automatiquement.",
    "permission.button": "Autoriser position",
    "profile.button": "Profil",
    "profile.title": "Ton profil",
    "profile.nickname": "Pseudo",
    "profile.car": "Modele de voiture",
    "profile.save": "Sauver profil",
    "profile.duplicate": "Ce pseudo existe deja sur cet appareil.",
    "record.start": "Demarrer route",
    "record.stop": "Terminer route",
    "record.needGps": "Active le GPS pour demarrer une route.",
    "record.recording": "Route en cours",
    "record.savingGps": "La trajectoire est enregistree avec le GPS.",
    "record.tooShort": "Route trop courte pour etre publiee.",
    "timer.waiting": "En attente du depart",
    "timer.approachStart": "Approche-toi du point de depart.",
    "route.defaultName": "Route de {name}",
    "route.sprintPrefix": "Sprint",
    "route.routePrefix": "Route",
    "route.saved": "Route enregistree.",
    "route.discarded": "Route supprimee.",
    "route.attempts": "essais",
    "route.record": "Record",
    "route.noReviews": "aucun avis",
    "route.guide": "Guider au depart",
    "route.challenge": "Tenter le record",
    "route.distance": "Distance",
    "route.fastest": "Meilleur temps",
    "route.driver": "Pilote",
    "route.car": "Voiture",
    "routeSave.title": "Sauver route",
    "routeSave.preparing": "Preparation du nom suggere...",
    "routeSave.nameLabel": "Nom de la route",
    "routeSave.hint": "Garde le nom suggere ou modifie-le.",
    "routeSave.defaultReady": "Nom par defaut pret.",
    "routeSave.placeReady": "Nom suggere selon la zone detectee.",
    "routeSave.discard": "Supprimer",
    "routeSave.save": "Sauver route",
    "routes.nearby": "Routes proches",
    "nav.backMap": "Retour carte",
    "nav.backList": "Retour liste",
    "guide.title": "Guide au depart",
    "guide.needGps": "Active le GPS pour etre guide au depart.",
    "guide.distanceStart": "{meters} m jusqu'au depart",
    "attempt.needGps": "Active le GPS pour lancer l'essai.",
    "attempt.armed": "Essai arme",
    "attempt.autoStart": "Le chrono demarrera automatiquement au depart.",
    "attempt.startDetected": "Depart detecte.",
    "attempt.active": "Chrono actif",
    "attempt.cancelled": "Essai annule: tu as quitte la route.",
    "attempt.margin": "{margin} m de marge / {progress} m parcourus",
    "attempt.newRecord": "Nouveau record",
    "attempt.completed": "Essai termine",
    "attempt.won": "Tu es maintenant le plus rapide sur cette route.",
    "attempt.currentRecord": "Record actuel: {time}",
    "attempt.cancelledTitle": "Annule",
    "reviews.title": "Avis",
    "reviews.placeholder": "Ecris un avis court",
    "reviews.publish": "Publier avis",
    "reviews.empty": "Aucun avis pour l'instant."
  },
  de: {
    "status.searching": "Suche Standort...",
    "status.vector": "Vektorkarte wird geladen...",
    "status.gpsUnavailable": "GPS nicht verfuegbar",
    "status.requesting": "Standort wird angefragt...",
    "status.denied": "Standort abgelehnt",
    "status.failed": "Standort nicht gefunden",
    "status.active": "GPS aktiv",
    "status.accuracy": "GPS aktiv +/- {meters} m",
    "status.interrupted": "GPS unterbrochen",
    "permission.title": "Standort aktivieren",
    "permission.body": "Die App braucht GPS, um Routen aufzuzeichnen und Versuche automatisch zu messen.",
    "permission.button": "Standort erlauben",
    "profile.button": "Profil",
    "profile.title": "Dein Profil",
    "profile.nickname": "Nickname",
    "profile.car": "Automodell",
    "profile.save": "Profil speichern",
    "profile.duplicate": "Dieser Nickname existiert bereits auf diesem Geraet.",
    "record.start": "Route starten",
    "record.stop": "Route beenden",
    "record.needGps": "Aktiviere GPS, um eine Route zu starten.",
    "record.recording": "Route wird aufgezeichnet",
    "record.savingGps": "Die Strecke wird per GPS gespeichert.",
    "record.tooShort": "Route zu kurz zum Veroeffentlichen.",
    "timer.waiting": "Warte auf Start",
    "timer.approachStart": "Fahre nahe an den Startpunkt.",
    "route.defaultName": "Route von {name}",
    "route.sprintPrefix": "Sprint",
    "route.routePrefix": "Route",
    "route.saved": "Route gespeichert.",
    "route.discarded": "Route verworfen.",
    "route.attempts": "Versuche",
    "route.record": "Rekord",
    "route.noReviews": "keine Bewertungen",
    "route.guide": "Zum Start fuehren",
    "route.challenge": "Rekord versuchen",
    "route.distance": "Distanz",
    "route.fastest": "Schnellste Zeit",
    "route.driver": "Fahrer",
    "route.car": "Auto",
    "routeSave.title": "Route speichern",
    "routeSave.preparing": "Namensvorschlag wird vorbereitet...",
    "routeSave.nameLabel": "Routenname",
    "routeSave.hint": "Behalte den Vorschlag oder aendere ihn.",
    "routeSave.defaultReady": "Standardname bereit.",
    "routeSave.placeReady": "Name nach erkannter Zone vorgeschlagen.",
    "routeSave.discard": "Verwerfen",
    "routeSave.save": "Route speichern",
    "routes.nearby": "Routen in der Naehe",
    "nav.backMap": "Zur Karte",
    "nav.backList": "Zur Liste",
    "guide.title": "Zum Start",
    "guide.needGps": "Aktiviere GPS, um zum Start gefuehrt zu werden.",
    "guide.distanceStart": "{meters} m bis zum Start",
    "attempt.needGps": "Aktiviere GPS, um den Versuch zu starten.",
    "attempt.armed": "Versuch bereit",
    "attempt.autoStart": "Der Timer startet automatisch am Startpunkt.",
    "attempt.startDetected": "Start erkannt.",
    "attempt.active": "Timer aktiv",
    "attempt.cancelled": "Versuch abgebrochen: du hast die Route verlassen.",
    "attempt.margin": "{margin} m Abstand / {progress} m Fortschritt",
    "attempt.newRecord": "Neuer Rekord",
    "attempt.completed": "Versuch beendet",
    "attempt.won": "Du bist jetzt der Schnellste auf dieser Route.",
    "attempt.currentRecord": "Aktueller Rekord: {time}",
    "attempt.cancelledTitle": "Abgebrochen",
    "reviews.title": "Bewertungen",
    "reviews.placeholder": "Kurze Bewertung schreiben",
    "reviews.publish": "Bewertung senden",
    "reviews.empty": "Noch keine Bewertungen."
  }
};

let map;
let currentLang = I18N[localStorage.getItem(LANG_KEY)] ? localStorage.getItem(LANG_KEY) : "es";
let mapReady = false;
let userMarker = null;
let watchId = null;
let currentPoint = null;
let profile = null;
let state = loadState();
let selectedCluster = null;
let activeRoute = null;
let selectedRating = 5;
let recording = null;
let challenge = null;
let timerTick = null;
let flagMarkers = [];
let checkpointMarkers = [];
let pendingRouteDraft = null;

const els = {
  statusLine: document.querySelector("#statusLine"),
  permissionCard: document.querySelector("#permissionCard"),
  enableLocationButton: document.querySelector("#enableLocationButton"),
  startRecordButton: document.querySelector("#startRecordButton"),
  stopRecordButton: document.querySelector("#stopRecordButton"),
  centerButton: document.querySelector("#centerButton"),
  backButton: document.querySelector("#backButton"),
  profileButton: document.querySelector("#profileButton"),
  languageSelect: document.querySelector("#languageSelect"),
  sheet: document.querySelector("#sheet"),
  sheetContent: document.querySelector("#sheetContent"),
  timerPanel: document.querySelector("#timerPanel"),
  timerMode: document.querySelector("#timerMode"),
  timerValue: document.querySelector("#timerValue"),
  timerHint: document.querySelector("#timerHint"),
  profileDialog: document.querySelector("#profileDialog"),
  profileForm: document.querySelector("#profileForm"),
  nicknameInput: document.querySelector("#nicknameInput"),
  carInput: document.querySelector("#carInput"),
  profileError: document.querySelector("#profileError"),
  routeDialog: document.querySelector("#routeDialog"),
  routeForm: document.querySelector("#routeForm"),
  routeNameInput: document.querySelector("#routeNameInput"),
  routeNameHint: document.querySelector("#routeNameHint"),
  routeDistancePreview: document.querySelector("#routeDistancePreview"),
  routeTimePreview: document.querySelector("#routeTimePreview"),
  discardRouteButton: document.querySelector("#discardRouteButton"),
  routeListTemplate: document.querySelector("#routeListTemplate"),
  routeDetailTemplate: document.querySelector("#routeDetailTemplate")
};

document.addEventListener("DOMContentLoaded", init);

function init() {
  document.documentElement.lang = currentLang;
  els.languageSelect.value = currentLang;
  applyTranslations();
  map = new maplibregl.Map({
    container: "map",
    style: "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
    center: [DEFAULT_CENTER[1], DEFAULT_CENTER[0]],
    zoom: 11,
    minZoom: 4,
    maxZoom: 19,
    attributionControl: false,
    pitchWithRotate: false,
    dragRotate: false,
    touchPitch: false
  });

  map.on("load", () => {
    mapReady = true;
    addRouteSources();
    renderFlags();
  });
  map.on("click", () => {
    if (!els.sheet.classList.contains("hidden")) minimizeSheet();
  });
  map.on("error", () => {
    els.statusLine.textContent = t("status.vector");
  });

  bindEvents();
  profile = state.currentProfile || null;
  renderProfileState();
  requestLocation(true);

  if (!profile) {
    setTimeout(() => openProfileDialog(), 350);
  }
}

function bindEvents() {
  els.enableLocationButton.addEventListener("click", () => requestLocation(true));
  els.centerButton.addEventListener("click", centerOnUser);
  els.startRecordButton.addEventListener("click", startRecording);
  els.stopRecordButton.addEventListener("click", stopRecording);
  els.backButton.addEventListener("click", goBack);
  els.profileButton.addEventListener("click", openProfileDialog);
  els.languageSelect.addEventListener("change", changeLanguage);
  els.profileForm.addEventListener("submit", saveProfile);
  els.routeForm.addEventListener("submit", savePendingRoute);
  els.discardRouteButton.addEventListener("click", discardPendingRoute);
  els.sheet.addEventListener("click", handleSheetClick);
}

function t(key, values = {}) {
  const template = I18N[currentLang]?.[key] || I18N.es[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function changeLanguage() {
  currentLang = els.languageSelect.value;
  localStorage.setItem(LANG_KEY, currentLang);
  document.documentElement.lang = currentLang;
  applyTranslations();
  renderProfileState();
  if (activeRoute) renderRouteDetail(activeRoute);
  else if (selectedCluster) showCluster(selectedCluster);
}

function applyTranslations(root = document) {
  root.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  root.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
}

function addRouteSources() {
  addLineLayer("selectedRoute", "#62f7ff", "#ff3df2", 7);
  addLineLayer("navRoute", "#ffcf4d", "#ffcf4d", 5, "9,10");
  addLineLayer("recordingRoute", "#b9ff35", "#62f7ff", 6);
  addLineLayer("attemptRoute", "#b9ff35", "#62f7ff", 5);
}

function addLineLayer(id, color, haloColor, width, dash) {
  if (map.getSource(id)) return;
  map.addSource(id, emptyLineSource());
  map.addLayer({
    id: `${id}Halo`,
    type: "line",
    source: id,
    paint: {
      "line-color": haloColor,
      "line-width": width + 8,
      "line-opacity": 0.2,
      "line-blur": 2
    },
    layout: { "line-cap": "round", "line-join": "round" }
  });
  map.addLayer({
    id,
    type: "line",
    source: id,
    paint: {
      "line-color": color,
      "line-width": width,
      "line-opacity": 0.96
    },
    layout: { "line-cap": "round", "line-join": "round" }
  });
  if (dash) {
    map.setPaintProperty(id, "line-dasharray", dash.split(",").map(Number));
  }
}

function emptyLineSource() {
  return {
    type: "geojson",
    data: { type: "Feature", geometry: { type: "LineString", coordinates: [] }, properties: {} }
  };
}

function setLine(id, points) {
  if (!mapReady || !map.getSource(id)) return;
  map.getSource(id).setData({
    type: "Feature",
    geometry: { type: "LineString", coordinates: points.map(toLngLat) },
    properties: {}
  });
}

function clearLines() {
  ["selectedRoute", "navRoute", "recordingRoute", "attemptRoute"].forEach((id) => setLine(id, []));
  clearCheckpoints();
}

function seedRoutes() {
  const routes = [
    {
      id: "seed-montjuic",
      title: "Montjuic Mirador",
      creator: "BCNGrip",
      points: [[41.36879, 2.15101], [41.36728, 2.15736], [41.36982, 2.16288], [41.37324, 2.16079], [41.37181, 2.15404], [41.36879, 2.15101]],
      best: { nickname: "BCNGrip", car: "Honda Civic Type R", timeMs: 446000 },
      reviews: [{ nickname: "Litoral", rating: 4, text: "Bonito y tecnico, con buen desnivel." }],
      attempts: 12
    }
  ];

  return routes.map((route) => ({
    id: route.id,
    title: route.title,
    creator: route.creator,
    createdAt: Date.now() - 86400000,
    encodedPath: encodePolyline(route.points),
    distanceM: totalDistance(route.points),
    best: route.best,
    attempts: route.attempts,
    reviews: route.reviews
  }));
}

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && Array.isArray(stored.routes)) return sanitizeState(stored);
  } catch (error) {
    console.warn(error);
  }
  const initial = { routes: seedRoutes(), profiles: [], currentProfile: null };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  return initial;
}

function sanitizeState(nextState) {
  const removedDemoIds = new Set(["seed-retiro-loop", "seed-casa-campo"]);
  const cleaned = {
    ...nextState,
    routes: nextState.routes.filter((route) => !removedDemoIds.has(route.id)),
    profiles: Array.isArray(nextState.profiles) ? nextState.profiles : [],
    currentProfile: nextState.currentProfile || null
  };
  if (cleaned.routes.length !== nextState.routes.length) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cleaned));
  }
  return cleaned;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function requestLocation(centerMap) {
  if (!("geolocation" in navigator)) {
    els.statusLine.textContent = t("status.gpsUnavailable");
    return;
  }
  els.statusLine.textContent = t("status.requesting");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      updatePosition(pos, centerMap);
      startWatchingLocation();
      els.permissionCard.classList.add("hidden");
    },
    (error) => {
      els.statusLine.textContent = error.code === 1 ? t("status.denied") : t("status.failed");
      els.permissionCard.classList.remove("hidden");
    },
    { enableHighAccuracy: true, timeout: 12000, maximumAge: 2500 }
  );
}

function startWatchingLocation() {
  if (watchId !== null || !("geolocation" in navigator)) return;
  watchId = navigator.geolocation.watchPosition(
    (pos) => updatePosition(pos, false),
    () => {
      els.statusLine.textContent = t("status.interrupted");
    },
    { enableHighAccuracy: true, maximumAge: 1000, timeout: 15000 }
  );
}

function updatePosition(pos, centerMap) {
  currentPoint = [pos.coords.latitude, pos.coords.longitude];
  const accuracy = Math.round(pos.coords.accuracy || 0);
  els.statusLine.textContent = accuracy ? t("status.accuracy", { meters: accuracy }) : t("status.active");

  if (!userMarker) {
    const dot = document.createElement("div");
    dot.className = "userDot mapMarker";
    userMarker = new maplibregl.Marker({ element: dot, anchor: "center" }).setLngLat(toLngLat(currentPoint)).addTo(map);
  } else {
    userMarker.setLngLat(toLngLat(currentPoint));
  }

  if (centerMap) {
    map.easeTo({ center: toLngLat(currentPoint), zoom: Math.max(map.getZoom(), 13), duration: 700 });
  }

  if (recording) captureRecordingPoint(currentPoint);
  if (challenge) updateChallenge(currentPoint);
}

function centerOnUser() {
  if (currentPoint) {
    map.easeTo({ center: toLngLat(currentPoint), zoom: 14, duration: 700 });
  } else {
    requestLocation(true);
  }
}

function renderProfileState() {
  els.profileButton.textContent = profile ? profile.nickname : t("profile.button");
  if (profile) {
    els.nicknameInput.value = profile.nickname;
    els.carInput.value = profile.car;
  }
}

function openProfileDialog() {
  els.profileError.textContent = "";
  renderProfileState();
  els.profileDialog.showModal();
}

function saveProfile(event) {
  event.preventDefault();
  const nickname = els.nicknameInput.value.trim();
  const car = els.carInput.value.trim();
  if (!nickname || !car) return;

  const sameNick = state.profiles.find((item) => item.nickname.toLowerCase() === nickname.toLowerCase());
  if (sameNick && (!profile || sameNick.nickname !== profile.nickname)) {
    els.profileError.textContent = t("profile.duplicate");
    return;
  }

  profile = { nickname, car };
  const index = state.profiles.findIndex((item) => item.nickname.toLowerCase() === nickname.toLowerCase());
  if (index >= 0) state.profiles[index] = profile;
  else state.profiles.push(profile);
  state.currentProfile = profile;
  saveState();
  renderProfileState();
  els.profileDialog.close();
}

function requireProfile() {
  if (profile) return true;
  openProfileDialog();
  return false;
}

function startRecording() {
  if (!requireProfile()) return;
  if (!currentPoint) {
    requestLocation(true);
    toast(t("record.needGps"));
    return;
  }

  clearChallenge();
  clearSelection();
  recording = { startedAt: performance.now(), points: [currentPoint] };
  setLine("recordingRoute", recording.points);
  els.startRecordButton.classList.add("hidden");
  els.stopRecordButton.classList.remove("hidden");
  els.timerPanel.classList.remove("hidden");
  els.timerMode.textContent = t("record.recording");
  els.timerHint.textContent = t("record.savingGps");
  startTimer(() => performance.now() - recording.startedAt);
  beep();
}

function captureRecordingPoint(point) {
  const last = recording.points[recording.points.length - 1];
  if (distance(last, point) < RECORD_MIN_STEP_M) return;
  recording.points.push(point);
  setLine("recordingRoute", recording.points);
}

async function stopRecording() {
  if (!recording) return;
  const elapsedMs = performance.now() - recording.startedAt;
  const simplified = simplifyPath(recording.points, 8);
  if (simplified.length < 2 || totalDistance(simplified) < 120) {
    toast(t("record.tooShort"));
    clearRecording();
    return;
  }

  pendingRouteDraft = {
    points: simplified,
    elapsedMs: Math.round(elapsedMs),
    distanceM: totalDistance(simplified)
  };
  clearRecording();
  clearLines();
  setLine("selectedRoute", simplified);
  addCheckpoint(simplified[0], "start");
  addCheckpoint(simplified[simplified.length - 1], "finish");
  fitPoints(simplified, 15);
  await openRouteDialog(pendingRouteDraft);
  beep();
}

function clearRecording() {
  recording = null;
  setLine("recordingRoute", []);
  stopTimer();
  els.startRecordButton.classList.remove("hidden");
  els.stopRecordButton.classList.add("hidden");
  els.timerPanel.classList.add("hidden");
}

async function openRouteDialog(draft) {
  const fallbackName = t("route.defaultName", { name: profile.nickname });
  els.routeNameInput.value = fallbackName;
  els.routeNameHint.textContent = t("routeSave.hint");
  els.routeDistancePreview.textContent = formatDistance(draft.distanceM);
  els.routeTimePreview.textContent = formatTime(draft.elapsedMs);
  els.routeDialog.showModal();

  const suggested = await suggestRouteName(draft.points, fallbackName);
  if (pendingRouteDraft === draft && els.routeNameInput.value === fallbackName) {
    els.routeNameInput.value = suggested;
    els.routeNameHint.textContent = suggested === fallbackName ? t("routeSave.defaultReady") : t("routeSave.placeReady");
  }
}

async function suggestRouteName(points, fallbackName) {
  const mid = points[Math.floor(points.length / 2)];
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${mid[0]}&lon=${mid[1]}&zoom=16&addressdetails=1`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("reverse geocode failed");
    const data = await response.json();
    const address = data.address || {};
    const place = address.road || address.park || address.neighbourhood || address.suburb || address.city_district || address.town || address.city;
    if (!place) return fallbackName;
    const prefix = totalDistance(points) < 1800 ? t("route.sprintPrefix") : t("route.routePrefix");
    return `${prefix} ${place}`.slice(0, 48);
  } catch (error) {
    return fallbackName;
  }
}

function savePendingRoute(event) {
  event.preventDefault();
  if (!pendingRouteDraft || !profile) return;

  const route = {
    id: `route-${Date.now()}`,
    title: (els.routeNameInput.value.trim() || t("route.defaultName", { name: profile.nickname })).slice(0, 48),
    creator: profile.nickname,
    createdAt: Date.now(),
    encodedPath: encodePolyline(pendingRouteDraft.points),
    distanceM: pendingRouteDraft.distanceM,
    best: { nickname: profile.nickname, car: profile.car, timeMs: pendingRouteDraft.elapsedMs },
    attempts: 1,
    reviews: []
  };

  state.routes.push(route);
  saveState();
  pendingRouteDraft = null;
  els.routeDialog.close();
  renderFlags();
  selectRoute(route);
  toast(t("route.saved"));
}

function discardPendingRoute() {
  pendingRouteDraft = null;
  els.routeDialog.close();
  clearLines();
  toast(t("route.discarded"));
}

function renderFlags() {
  clearFlags();
  if (!mapReady) return;
  buildClusters(state.routes).forEach((cluster) => {
    const el = document.createElement("button");
    el.className = "flagBubble mapMarker";
    el.type = "button";
    el.setAttribute("aria-label", `${cluster.routes.length} recorridos`);
    el.innerHTML = `<i class="flagMarker"></i><span>${cluster.routes.length}</span>`;
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      showCluster(cluster);
    });
    const marker = new maplibregl.Marker({ element: el, anchor: "center" }).setLngLat(toLngLat(cluster.center)).addTo(map);
    flagMarkers.push(marker);
  });
}

function clearFlags() {
  flagMarkers.forEach((marker) => marker.remove());
  flagMarkers = [];
}

function buildClusters(routes) {
  const cells = new Map();
  routes.forEach((route) => {
    const points = decodePolyline(route.encodedPath);
    const mid = points[Math.floor(points.length / 2)];
    const key = `${Math.floor(mid[0] / 0.035)}:${Math.floor(mid[1] / 0.035)}`;
    if (!cells.has(key)) cells.set(key, []);
    cells.get(key).push(route);
  });

  return [...cells.values()].map((routesInCell) => {
    const centers = routesInCell.map((route) => {
      const points = decodePolyline(route.encodedPath);
      return points[Math.floor(points.length / 2)];
    });
    return {
      center: [
        centers.reduce((sum, p) => sum + p[0], 0) / centers.length,
        centers.reduce((sum, p) => sum + p[1], 0) / centers.length
      ],
      routes: routesInCell.sort((a, b) => relevance(b) - relevance(a))
    };
  });
}

function relevance(route) {
  return route.attempts + averageRating(route) * 4 + route.reviews.length * 2;
}

function showCluster(cluster) {
  selectedCluster = cluster;
  clearChallenge();
  clearLines();
  activeRoute = null;
  els.backButton.classList.remove("hidden");
  const node = els.routeListTemplate.content.cloneNode(true);
  applyTranslations(node);
  const list = node.querySelector(".routeList");
  cluster.routes.forEach((route) => {
    const button = document.createElement("button");
    button.className = "routeCard";
    button.type = "button";
    button.dataset.action = "select-route";
    button.dataset.routeId = route.id;
    button.innerHTML = `
      <span>
        <strong>${escapeHtml(route.title)}</strong>
        <small>${formatDistance(route.distanceM)} / ${route.attempts} ${t("route.attempts")} / ${formatRating(route)}</small>
        <small>${t("route.record")}: ${formatTime(route.best.timeMs)} / ${escapeHtml(route.best.car)}</small>
      </span>
      <span class="routeBadge">${formatTime(route.best.timeMs)}</span>
    `;
    list.appendChild(button);
  });
  els.sheetContent.replaceChildren(node);
  els.sheet.classList.remove("hidden");
  fitPoints(cluster.routes.flatMap((route) => decodePolyline(route.encodedPath)), 14);
}

function selectRoute(route) {
  activeRoute = route;
  clearChallenge();
  clearLines();
  const points = decodePolyline(route.encodedPath);
  setLine("selectedRoute", points);
  addCheckpoint(points[0], "start");
  addCheckpoint(points[points.length - 1], "finish");
  fitPoints(points, 15);
  renderRouteDetail(route);
}

function addCheckpoint(point, type) {
  const el = document.createElement("div");
  el.className = `checkpoint ${type} mapMarker`;
  const marker = new maplibregl.Marker({ element: el, anchor: "center" }).setLngLat(toLngLat(point)).addTo(map);
  checkpointMarkers.push(marker);
}

function clearCheckpoints() {
  checkpointMarkers.forEach((marker) => marker.remove());
  checkpointMarkers = [];
}

function renderRouteDetail(route) {
  els.backButton.classList.remove("hidden");
  const node = els.routeDetailTemplate.content.cloneNode(true);
  applyTranslations(node);
  node.querySelector("h2").textContent = route.title;
  node.querySelector(".routeStats").innerHTML = `
    <div class="stat"><small>${t("route.distance")}</small><strong>${formatDistance(route.distanceM)}</strong></div>
    <div class="stat"><small>${t("route.fastest")}</small><strong>${formatTime(route.best.timeMs)}</strong></div>
    <div class="stat"><small>${t("route.driver")}</small><strong>${escapeHtml(route.best.nickname)}</strong></div>
    <div class="stat"><small>${t("route.car")}</small><strong>${escapeHtml(route.best.car)}</strong></div>
  `;

  const reviews = node.querySelector(".reviews");
  reviews.innerHTML = `
    <strong>${t("reviews.title")}</strong>
    <div class="stars">
      ${[1, 2, 3, 4, 5].map((n) => `<button class="starButton" data-action="set-rating" data-rating="${n}" type="button">${n}</button>`).join("")}
    </div>
    <div class="reviewBox">
      <textarea maxlength="180" placeholder="${t("reviews.placeholder")}"></textarea>
      <button class="primaryButton" data-action="save-review" type="button">${t("reviews.publish")}</button>
    </div>
    <div class="reviewItems">
      ${route.reviews.length ? route.reviews.map((review) => `
        <div class="reviewItem">
          <small>${escapeHtml(review.nickname)} / ${"*".repeat(review.rating)}${"-".repeat(5 - review.rating)}</small>
          <div>${escapeHtml(review.text || "Sin comentario")}</div>
        </div>
      `).join("") : `<div class="reviewItem"><small>${t("reviews.empty")}</small></div>`}
    </div>
  `;

  els.sheetContent.replaceChildren(node);
  els.sheet.classList.remove("hidden");
}

function handleSheetClick(event) {
  if (event.target.closest(".sheetGrip")) {
    minimizeSheet();
    return;
  }
  const actionEl = event.target.closest("[data-action]");
  if (!actionEl) return;
  const action = actionEl.dataset.action;
  if (action === "close-sheet") closeSheet();
  if (action === "back-to-list") selectedCluster ? showCluster(selectedCluster) : closeSheet();
  if (action === "select-route") {
    const route = state.routes.find((item) => item.id === actionEl.dataset.routeId);
    if (route) selectRoute(route);
  }
  if (action === "navigate-start") navigateToStart();
  if (action === "arm-attempt") armAttempt();
  if (action === "set-rating") {
    selectedRating = Number(actionEl.dataset.rating);
    [...els.sheet.querySelectorAll(".starButton")].forEach((btn) => {
      btn.style.background = Number(btn.dataset.rating) <= selectedRating ? "rgba(255, 207, 77, 0.28)" : "rgba(255, 207, 77, 0.12)";
    });
  }
  if (action === "save-review") saveReview();
}

function goBack() {
  if (activeRoute && selectedCluster) {
    showCluster(selectedCluster);
    return;
  }
  closeSheet();
}

function closeSheet() {
  els.sheet.classList.add("hidden");
  els.backButton.classList.add("hidden");
  selectedCluster = null;
  activeRoute = null;
  clearChallenge();
  clearLines();
}

function minimizeSheet() {
  els.sheet.classList.add("hidden");
}

function clearSelection() {
  els.sheet.classList.add("hidden");
  els.backButton.classList.add("hidden");
  activeRoute = null;
  selectedCluster = null;
  clearLines();
}

async function navigateToStart() {
  if (!activeRoute) return;
  if (!currentPoint) {
    requestLocation(true);
    toast(t("guide.needGps"));
    return;
  }
  const start = decodePolyline(activeRoute.encodedPath)[0];
  els.timerPanel.classList.remove("hidden");
  els.timerMode.textContent = t("guide.title");
  els.timerHint.textContent = t("guide.distanceStart", { meters: Math.round(distance(currentPoint, start)) });
  els.timerValue.textContent = "--";
  minimizeSheet();

  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${currentPoint[1]},${currentPoint[0]};${start[1]},${start[0]}?overview=full&geometries=geojson`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("routing failed");
    const data = await response.json();
    const coords = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
    setLine("navRoute", coords);
    fitPoints([currentPoint, ...coords, start], 14);
  } catch (error) {
    setLine("navRoute", [currentPoint, start]);
    fitPoints([currentPoint, start], 14);
  }
}

function armAttempt() {
  if (!requireProfile()) return;
  if (!activeRoute) return;
  if (!currentPoint) {
    requestLocation(true);
    toast(t("attempt.needGps"));
    return;
  }

  const points = decodePolyline(activeRoute.encodedPath);
  challenge = { route: activeRoute, points, startedAt: null, maxProgressM: 0, attemptPoints: [] };
  setLine("attemptRoute", []);
  els.timerPanel.classList.remove("hidden");
  els.timerMode.textContent = t("attempt.armed");
  els.timerValue.textContent = "00:00.0";
  els.timerHint.textContent = t("attempt.autoStart");
  updateChallenge(currentPoint);
}

function updateChallenge(point) {
  const start = challenge.points[0];
  const finish = challenge.points[challenge.points.length - 1];
  const nearStart = distance(point, start) <= START_RADIUS_M;
  const nearFinish = distance(point, finish) <= FINISH_RADIUS_M;
  const closest = closestOnPath(point, challenge.points);

  if (!challenge.startedAt) {
    els.timerHint.textContent = nearStart ? t("attempt.startDetected") : t("guide.distanceStart", { meters: Math.round(distance(point, start)) });
    if (nearStart) {
      challenge.startedAt = performance.now();
      challenge.maxProgressM = 0;
      challenge.attemptPoints = [point];
      setLine("attemptRoute", challenge.attemptPoints);
      els.timerMode.textContent = t("attempt.active");
      startTimer(() => performance.now() - challenge.startedAt);
      beep();
    }
    return;
  }

  if (closest.distanceM > OFF_ROUTE_LIMIT_M) {
    cancelAttempt(t("attempt.cancelled"));
    return;
  }

  challenge.maxProgressM = Math.max(challenge.maxProgressM, closest.alongM);
  const last = challenge.attemptPoints[challenge.attemptPoints.length - 1];
  if (!last || distance(last, point) > 8) {
    challenge.attemptPoints.push(point);
    setLine("attemptRoute", challenge.attemptPoints);
  }

  const requiredProgress = activeRoute.distanceM * 0.78;
  els.timerHint.textContent = t("attempt.margin", { margin: Math.round(closest.distanceM), progress: Math.round(challenge.maxProgressM) });
  if (nearFinish && challenge.maxProgressM >= requiredProgress) {
    finishAttempt(performance.now() - challenge.startedAt);
  }
}

function finishAttempt(timeMs) {
  const route = challenge.route;
  route.attempts += 1;
  const won = timeMs < route.best.timeMs;
  if (won) {
    route.best = { nickname: profile.nickname, car: profile.car, timeMs: Math.round(timeMs) };
  }
  saveState();
  beep();
  stopTimer();
  els.timerMode.textContent = won ? t("attempt.newRecord") : t("attempt.completed");
  els.timerValue.textContent = formatTime(timeMs);
  els.timerHint.textContent = won ? t("attempt.won") : t("attempt.currentRecord", { time: formatTime(route.best.timeMs) });
  clearChallenge(false);
  renderFlags();
  renderRouteDetail(route);
}

function cancelAttempt(message) {
  stopTimer();
  beep(180, 0.08, "sawtooth");
  els.timerMode.textContent = t("attempt.cancelledTitle");
  els.timerHint.textContent = message;
  clearChallenge(false);
}

function clearChallenge(hideTimer = true) {
  challenge = null;
  setLine("attemptRoute", []);
  stopTimer();
  if (hideTimer && !recording) els.timerPanel.classList.add("hidden");
}

function saveReview() {
  if (!requireProfile() || !activeRoute) return;
  const textarea = els.sheet.querySelector("textarea");
  activeRoute.reviews.unshift({ nickname: profile.nickname, rating: selectedRating, text: textarea.value.trim() });
  saveState();
  renderFlags();
  renderRouteDetail(activeRoute);
}

function fitPoints(points, maxZoom) {
  if (!points.length) return;
  const lngs = points.map((p) => p[1]);
  const lats = points.map((p) => p[0]);
  const bounds = [[Math.min(...lngs), Math.min(...lats)], [Math.max(...lngs), Math.max(...lats)]];
  map.fitBounds(bounds, { padding: 72, maxZoom, duration: 700 });
}

function startTimer(getElapsed) {
  stopTimer();
  const render = () => {
    els.timerValue.textContent = formatTime(getElapsed());
  };
  render();
  timerTick = setInterval(render, 100);
}

function stopTimer() {
  if (timerTick) clearInterval(timerTick);
  timerTick = null;
}

function toast(message) {
  els.statusLine.textContent = message;
}

function beep(freq = 880, seconds = 0.12, type = "square") {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = 0.05;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + seconds);
  } catch (error) {
    console.warn(error);
  }
}

function toLngLat(point) {
  return [point[1], point[0]];
}

function formatTime(ms) {
  const totalSeconds = Math.max(0, ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  const tenths = Math.floor((totalSeconds % 1) * 10);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${tenths}`;
}

function formatDistance(meters) {
  return meters >= 1000 ? `${(meters / 1000).toFixed(2)} km` : `${Math.round(meters)} m`;
}

function averageRating(route) {
  if (!route.reviews.length) return 0;
  return route.reviews.reduce((sum, item) => sum + item.rating, 0) / route.reviews.length;
}

function formatRating(route) {
  const avg = averageRating(route);
  return avg ? `${avg.toFixed(1)}/5` : t("route.noReviews");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function totalDistance(points) {
  return points.slice(1).reduce((sum, point, index) => sum + distance(points[index], point), 0);
}

function distance(a, b) {
  const radius = 6371000;
  const dLat = toRad(b[0] - a[0]);
  const dLng = toRad(b[1] - a[1]);
  const lat1 = toRad(a[0]);
  const lat2 = toRad(b[0]);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(h));
}

function toRad(value) {
  return value * Math.PI / 180;
}

function closestOnPath(point, path) {
  let best = { distanceM: Infinity, alongM: 0 };
  let cumulative = 0;
  for (let i = 0; i < path.length - 1; i += 1) {
    const projected = projectOnSegment(point, path[i], path[i + 1]);
    const segmentLength = distance(path[i], path[i + 1]);
    const candidate = { distanceM: distance(point, projected.point), alongM: cumulative + projected.t * segmentLength };
    if (candidate.distanceM < best.distanceM) best = candidate;
    cumulative += segmentLength;
  }
  return best;
}

function projectOnSegment(point, a, b) {
  const latScale = 111320;
  const lngScale = Math.cos(toRad((a[0] + b[0]) / 2)) * 111320;
  const px = (point[1] - a[1]) * lngScale;
  const py = (point[0] - a[0]) * latScale;
  const bx = (b[1] - a[1]) * lngScale;
  const by = (b[0] - a[0]) * latScale;
  const lenSq = bx * bx + by * by || 1;
  const t = Math.max(0, Math.min(1, (px * bx + py * by) / lenSq));
  return { t, point: [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t] };
}

function simplifyPath(points, toleranceM) {
  if (points.length <= 2) return points;
  let maxDistance = 0;
  let index = 0;
  for (let i = 1; i < points.length - 1; i += 1) {
    const projected = projectOnSegment(points[i], points[0], points[points.length - 1]);
    const d = distance(points[i], projected.point);
    if (d > maxDistance) {
      index = i;
      maxDistance = d;
    }
  }
  if (maxDistance > toleranceM) {
    const left = simplifyPath(points.slice(0, index + 1), toleranceM);
    const right = simplifyPath(points.slice(index), toleranceM);
    return left.slice(0, -1).concat(right);
  }
  return [points[0], points[points.length - 1]];
}

function encodePolyline(points) {
  let lastLat = 0;
  let lastLng = 0;
  return points.map(([lat, lng]) => {
    const latE5 = Math.round(lat * 1e5);
    const lngE5 = Math.round(lng * 1e5);
    const part = encodeSigned(latE5 - lastLat) + encodeSigned(lngE5 - lastLng);
    lastLat = latE5;
    lastLng = lngE5;
    return part;
  }).join("");
}

function encodeSigned(num) {
  let value = num < 0 ? ~(num << 1) : num << 1;
  let output = "";
  while (value >= 0x20) {
    output += String.fromCharCode((0x20 | (value & 0x1f)) + 63);
    value >>= 5;
  }
  return output + String.fromCharCode(value + 63);
}

function decodePolyline(str) {
  let index = 0;
  let lat = 0;
  let lng = 0;
  const points = [];
  while (index < str.length) {
    const latResult = decodeValue(str, index);
    index = latResult.index;
    const lngResult = decodeValue(str, index);
    index = lngResult.index;
    lat += latResult.value;
    lng += lngResult.value;
    points.push([lat / 1e5, lng / 1e5]);
  }
  return points;
}

function decodeValue(str, index) {
  let result = 0;
  let shift = 0;
  let byte = null;
  do {
    byte = str.charCodeAt(index++) - 63;
    result |= (byte & 0x1f) << shift;
    shift += 5;
  } while (byte >= 0x20);
  return { value: result & 1 ? ~(result >> 1) : result >> 1, index };
}
