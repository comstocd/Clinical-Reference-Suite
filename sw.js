/**
 * Clinical Reference Suite — Service Worker
 * ==========================================
 * Handles offline caching and background updates.
 *
 * HOW TO TRIGGER AN UPDATE:
 *   Bump CACHE_VERSION below, then push to GitHub.
 *   The next time the iPad has internet, it will silently
 *   download the new version. The update goes live on next open.
 *
 * CACHE STRATEGY: Cache-first for all assets (fast offline),
 *   with network revalidation in background (stale-while-revalidate).
 */

// ─── BUMP THIS STRING WHENEVER YOU PUSH CLINICAL CONTENT CHANGES ───────────
const CACHE_VERSION = 'crs-v3.7-build29';
// ────────────────────────────────────────────────────────────────────────────

const CACHE_NAME = `clinical-ref-${CACHE_VERSION}`;
const BASE_PATH = '/Clinical-Reference-Suite';

// All files to pre-cache on install (the full offline bundle)
const PRECACHE_URLS = [
  `${BASE_PATH}/`,
  `${BASE_PATH}/index.html`,
  `${BASE_PATH}/manifest.json`,

  // ── Core References ──────────────────────────────────────────────────────
  `${BASE_PATH}/im_guide.html`,
  `${BASE_PATH}/drug_reference_guide.html`,
  `${BASE_PATH}/Drug_Reference_Guide.html`,
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

  // ── Study Guides ─────────────────────────────────────────────────────────
  `${BASE_PATH}/study_guides_index.html`,
  `${BASE_PATH}/cardio_study_guide.html`,
  `${BASE_PATH}/pulmonology_study_guide.html`,
  `${BASE_PATH}/gi_study_guide.html`,
  `${BASE_PATH}/nephrology_study_guide1.html`,
  `${BASE_PATH}/id_study_guide.html`,
  `${BASE_PATH}/endocrinology_study_guide.html`,
  `${BASE_PATH}/heme_onc_study_guide.html`,
  `${BASE_PATH}/neurology_study_guide.html`,
  `${BASE_PATH}/rheumatology_study_guide.html`,
  `${BASE_PATH}/rheumatology_study_guide4.html`,
  `${BASE_PATH}/allergy_immunology_study_guide.html`,
  `${BASE_PATH}/geriatrics_study_guide.html`,
  `${BASE_PATH}/psychiatry_study_guide.html`,
  `${BASE_PATH}/general_im_study_guide.html`,
  `${BASE_PATH}/board_pearls.html`,
];

// ─── INSTALL: Pre-cache everything ──────────────────────────────────────────
self.addEventListener('install', event => {
  console.log(`[SW] Installing cache: ${CACHE_NAME}`);
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Cache files individually so one 404 doesn't block the rest
        const cachePromises = PRECACHE_URLS.map(url =>
          cache.add(url).catch(err => {
            console.warn(`[SW] Failed to cache: ${url}`, err);
          })
        );
        return Promise.all(cachePromises);
      })
      .then(() => {
        console.log(`[SW] Pre-cache complete for ${CACHE_NAME}`);
        // Activate immediately — don't wait for old tabs to close
        return self.skipWaiting();
      })
  );
});

// ─── ACTIVATE: Clean up old caches ──────────────────────────────────────────
self.addEventListener('activate', event => {
  console.log(`[SW] Activating: ${CACHE_NAME}`);
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames
            .filter(name => name.startsWith('clinical-ref-') && name !== CACHE_NAME)
            .map(name => {
              console.log(`[SW] Deleting old cache: ${name}`);
              return caches.delete(name);
            })
        );
      })
      .then(() => {
        console.log('[SW] Old caches cleaned. Claiming clients.');
        return self.clients.claim();
      })
  );
});

// ─── FETCH: Stale-while-revalidate ──────────────────────────────────────────
// Serves from cache immediately (fast, works offline),
// then fetches network version in background and updates cache.
self.addEventListener('fetch', event => {
  // Only handle GET requests for our own origin
  if (event.request.method !== 'GET') return;
  if (!event.request.url.includes(BASE_PATH) && 
      !event.request.url.includes('github.io')) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        // Fetch from network in background regardless
        const networkFetch = fetch(event.request)
          .then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => null); // Network failure — silent, we have cache

        // Return cached version immediately if available, else wait for network
        return cachedResponse || networkFetch;
      });
    })
  );
});

// ─── MESSAGE: Force update check from the UI ────────────────────────────────
// The update banner in index.html can trigger this
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_VERSION });
  }
});
