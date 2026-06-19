/**
 * Clinical Reference Suite — Service Worker
 * ==========================================
 * HOW TO UPDATE:
 *   1. Change DISPLAY_VERSION to the new build number (e.g. BUILD #31)
 *   2. Change CACHE_VERSION to match (e.g. crs-v3.7-build31)
 *   3. Commit and push both changes to GitHub
 *   That's it — the app will update automatically next time the iPad is on WiFi.
 */

// ── CHANGE THESE TWO LINES EVERY TIME YOU PUSH A CLINICAL UPDATE ─────────────
const DISPLAY_VERSION = 'BUILD #50';           // shown everywhere in the app
const CACHE_VERSION   = 'crs-v6.5-build50';   // must be unique per release
// ─────────────────────────────────────────────────────────────────────────────

const CACHE_NAME = `clinical-ref-${CACHE_VERSION}`;
const BASE_PATH = '/Clinical-Reference-Suite';

const PRECACHE_URLS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`,
  `${BASE_PATH}/sw.js`,

  // Core References
  `${BASE_PATH}/im_guide.html`,
  `${BASE_PATH}/drug_reference_guide.html`,
  `${BASE_PATH}/id_guide.html`,
  `${BASE_PATH}/dx_framework.html`,
  `${BASE_PATH}/lab_values.html`,
  `${BASE_PATH}/drug_interactions.html`,
  `${BASE_PATH}/procedures_guide.html`,
  `${BASE_PATH}/renal_dosing_reference.html`,
  `${BASE_PATH}/antimicrobial_stewardship_guide.html`,
  `${BASE_PATH}/id_consult.html`,
  `${BASE_PATH}/cardiology_consult.html`,
  `${BASE_PATH}/nephrology_consult.html`,
  `${BASE_PATH}/rheumatology_consult.html`,
  `${BASE_PATH}/endo_consult.html`,
  `${BASE_PATH}/neuro_consult.html`,
  `${BASE_PATH}/inpatient_note.html`,
  `${BASE_PATH}/op_note.html`,
  `${BASE_PATH}/abx-companion.html`,
  `${BASE_PATH}/abx-manifest.json`,
  `${BASE_PATH}/body-atlas.html`,
  `${BASE_PATH}/audio-companion.html`,
  `${BASE_PATH}/pathogen-index.html`,

  // ABIM Study Guides module
  `${BASE_PATH}/ABIM%20Study%20Guides/index.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/study_guides_index.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/allergy_immunology_study_guide.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/board_pearls.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/board_pearls_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/cardio_study_guide_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/dermatology_study_guide.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/endocrinology_study_guide_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/general_im_study_guide.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/geriatrics_study_guide.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/gi_study_guide_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/heme_onc_study_guide_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/high_value_care.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/high_value_care_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/id_study_guide_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/nephrology_study_guide.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/nephrology_study_guide_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/neurology_study_guide_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/palliative_care_study_guide.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/perioperative_study_guide.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/psychiatry_study_guide.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/pulmonology_study_guide_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/rheumatology_study_guide_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/womens_health_study_guide.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/albuminuria_ckd_audio.html`,
  `${BASE_PATH}/ABIM%20Study%20Guides/audio-companion%20(abx).html`,
];

// ── INSTALL ──────────────────────────────────────────────────────────────────
self.addEventListener('install', event => {
  console.log(`[SW] Installing: ${CACHE_NAME}`);
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.all(
        PRECACHE_URLS.map(url =>
          cache.add(url).catch(err => console.warn(`[SW] Failed to cache: ${url}`, err))
        )
      );
    }).then(() => {
      console.log(`[SW] Pre-cache complete: ${CACHE_NAME}`);
    })
  );
});

// ── ACTIVATE: delete old caches ──────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k.startsWith('clinical-ref-') && k !== CACHE_NAME)
          .map(k => { console.log(`[SW] Deleting old cache: ${k}`); return caches.delete(k); })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: stale-while-revalidate ────────────────────────────────────────────
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(event.request).then(cached => {
        const network = fetch(event.request).then(res => {
          if (res && res.status === 200) cache.put(event.request, res.clone());
          return res;
        }).catch(() => null);
        return cached || network;
      })
    )
  );
});

// ── MESSAGES ─────────────────────────────────────────────────────────────────
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data?.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: DISPLAY_VERSION });
  }
});
