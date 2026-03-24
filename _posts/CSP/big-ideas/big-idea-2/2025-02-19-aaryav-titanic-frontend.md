---
layout: tailwindPost
title: Titanic Survival Predictor - Aaryav
description: Tailwind frontend for the Titanic notebook predictor.
courses: { csp: {week: 25} }
permalink: /titanic/predictor-aaryav
show_reading_time: true
---

<div class="relative isolate overflow-hidden bg-slate-950 text-slate-100">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.16),_transparent_28%),linear-gradient(180deg,_#020617_0%,_#0f172a_48%,_#111827_100%)]"></div>
  <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent"></div>

  <div class="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <section class="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(15,23,42,0.45)] backdrop-blur">
        <div class="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div class="space-y-6">
            <div class="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-cyan-100">
              Voyage Control
            </div>

            <div class="space-y-4">
              <p class="text-sm uppercase tracking-[0.38em] text-cyan-200" style="font-family: 'Space Grotesk', sans-serif;">
                Rebuilt Tailwind Interface
              </p>
              <h1 class="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl" style="font-family: 'Playfair Display', serif;">
                A cleaner control deck for the Titanic survival notebook.
              </h1>
              <p class="max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
                This version reorganizes the predictor into a guided boarding flow, a live voyage summary, and a separate model readout while keeping the same passenger payload and API contract.
              </p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-3xl border border-white/10 bg-slate-950/50 p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-cyan-200">Prediction Route</p>
                <p class="mt-3 text-lg font-semibold text-white">POST <code>/api/titanic/predict</code></p>
                <p class="mt-2 text-sm leading-6 text-slate-400">Returns <code>die</code> and <code>survive</code> probabilities from the notebook-trained model.</p>
              </div>
              <div class="rounded-3xl border border-white/10 bg-slate-950/50 p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-amber-200">Notebook Logic</p>
                <p class="mt-3 text-lg font-semibold text-white">Binary + one-hot preprocessing</p>
                <p class="mt-2 text-sm leading-6 text-slate-400">Sex and solo travel become numeric values; embarked becomes encoded feature columns.</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-3">
              <a
                href="{{ site.baseurl }}/ml/titanic"
                class="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
              >
                Open Notebook
              </a>
              <a
                href="#prediction-console"
                class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Launch Predictor
              </a>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <div class="overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/60">
              <img
                src="{{ site.baseurl }}/images/javaml/titanic.jpg"
                alt="Titanic at sea"
                class="h-56 w-full object-cover opacity-80"
              >
            </div>

            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div class="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p class="text-xs uppercase tracking-[0.24em] text-cyan-100">Inputs Passed Through</p>
                <p class="mt-3 text-2xl font-semibold text-white">9 fields</p>
                <p class="mt-2 text-sm leading-6 text-slate-300">Name, fare, family counts, embarkation, class, sex, age, and a derived <code>alone</code> flag.</p>
              </div>
              <div class="rounded-[28px] border border-white/10 bg-gradient-to-br from-cyan-400/20 to-amber-300/10 p-5">
                <p class="text-xs uppercase tracking-[0.24em] text-amber-100">Layout Direction</p>
                <p class="mt-3 text-2xl font-semibold text-white">Guided flow</p>
                <p class="mt-2 text-sm leading-6 text-slate-200">Build the passenger first, inspect the live summary second, then read the model signal separately.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <div class="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
          <p class="text-xs uppercase tracking-[0.28em] text-cyan-100">Step 1</p>
          <h2 class="mt-3 text-xl font-semibold text-white">Boarding profile</h2>
          <p class="mt-2 text-sm leading-6 text-slate-300">Set the class, sex, age, fare, and departure details that feed the model.</p>
        </div>
        <div class="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
          <p class="text-xs uppercase tracking-[0.28em] text-cyan-100">Step 2</p>
          <h2 class="mt-3 text-xl font-semibold text-white">Manifest preview</h2>
          <p class="mt-2 text-sm leading-6 text-slate-300">Watch the page derive the travel mode, party size, and passenger summary before sending anything.</p>
        </div>
        <div class="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
          <p class="text-xs uppercase tracking-[0.28em] text-cyan-100">Step 3</p>
          <h2 class="mt-3 text-xl font-semibold text-white">Model outcome</h2>
          <p class="mt-2 text-sm leading-6 text-slate-300">Compare survival and death probabilities, then inspect optional feature weight output from the backend.</p>
        </div>
      </div>
    </section>

    <section id="prediction-console" class="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      <section class="rounded-[32px] border border-white/10 bg-white p-6 text-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.28)] sm:p-8">
        <div class="flex flex-col gap-4 border-b border-slate-200 pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700">Passenger Builder</p>
            <h2 class="mt-2 text-3xl font-semibold text-slate-950" style="font-family: 'Playfair Display', serif;">
              Build a boarding record
            </h2>
          </div>
          <p class="max-w-md text-sm leading-6 text-slate-500">
            The form is grouped by passenger identity, voyage details, and family footprint so the notebook payload is easier to review.
          </p>
        </div>

        <form id="titanic-form" class="mt-8 space-y-8">
          <fieldset class="space-y-5 rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <legend class="px-2 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Section 01</legend>
            <div class="flex flex-col gap-2">
              <h3 class="text-2xl font-semibold text-slate-950">Identity and cabin</h3>
              <p class="text-sm leading-6 text-slate-500">Start with the passenger label and the core demographics used by the model.</p>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <label class="block space-y-2">
                <span class="text-sm font-medium text-slate-700">Passenger name</span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value="Avery Dawson"
                  class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                >
              </label>

              <label class="block space-y-2">
                <span class="text-sm font-medium text-slate-700">Passenger class</span>
                <select
                  id="pclass"
                  name="pclass"
                  class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                >
                  <option value="1">1st Class</option>
                  <option value="2" selected>2nd Class</option>
                  <option value="3">3rd Class</option>
                </select>
              </label>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <label class="block space-y-2">
                <span class="text-sm font-medium text-slate-700">Sex</span>
                <select
                  id="sex"
                  name="sex"
                  class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>

              <label class="block space-y-2">
                <span class="text-sm font-medium text-slate-700">Age</span>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="0"
                  max="100"
                  value="30"
                  class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                >
              </label>
            </div>
          </fieldset>

          <fieldset class="space-y-5 rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <legend class="px-2 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Section 02</legend>
            <div class="flex flex-col gap-2">
              <h3 class="text-2xl font-semibold text-slate-950">Voyage details</h3>
              <p class="text-sm leading-6 text-slate-500">These values affect the economic and departure signals passed into the logistic model.</p>
            </div>

            <div class="grid gap-4 md:grid-cols-3">
              <label class="block space-y-2">
                <span class="text-sm font-medium text-slate-700">Fare</span>
                <input
                  id="fare"
                  name="fare"
                  type="number"
                  min="0"
                  max="600"
                  step="0.01"
                  value="16.00"
                  class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                >
              </label>

              <label class="block space-y-2">
                <span class="text-sm font-medium text-slate-700">Embarked</span>
                <select
                  id="embarked"
                  name="embarked"
                  class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                >
                  <option value="S" selected>Southampton</option>
                  <option value="C">Cherbourg</option>
                  <option value="Q">Queenstown</option>
                </select>
              </label>

              <div class="rounded-2xl border border-dashed border-slate-300 bg-white/80 p-4">
                <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Encoded later</p>
                <p class="mt-2 text-sm leading-6 text-slate-600">The selected port is transformed into notebook-style one-hot columns when the request is prepared.</p>
              </div>
            </div>
          </fieldset>

          <fieldset class="space-y-5 rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <legend class="px-2 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">Section 03</legend>
            <div class="flex flex-col gap-2">
              <h3 class="text-2xl font-semibold text-slate-950">Family footprint</h3>
              <p class="text-sm leading-6 text-slate-500">The page derives the solo-travel signal automatically from these counts.</p>
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <label class="block space-y-2">
                <span class="text-sm font-medium text-slate-700">Siblings / spouses</span>
                <input
                  id="sibsp"
                  name="sibsp"
                  type="number"
                  min="0"
                  max="10"
                  value="0"
                  class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                >
              </label>

              <label class="block space-y-2">
                <span class="text-sm font-medium text-slate-700">Parents / children</span>
                <input
                  id="parch"
                  name="parch"
                  type="number"
                  min="0"
                  max="10"
                  value="0"
                  class="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200"
                >
              </label>
            </div>
          </fieldset>

          <section class="overflow-hidden rounded-[28px] bg-slate-950 text-white">
            <div class="border-b border-white/10 px-5 py-5 sm:px-6">
              <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Quick Loadouts</p>
                  <h3 class="mt-2 text-2xl font-semibold">Try a starting passenger</h3>
                </div>
                <p class="max-w-md text-sm leading-6 text-slate-300">These presets fill the form without changing the notebook API shape, so you can test the page faster.</p>
              </div>
            </div>

            <div class="grid gap-3 p-5 sm:p-6 md:grid-cols-3">
              <button
                type="button"
                data-preset="atlantic_suite"
                class="preset-btn rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <span class="block text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Atlantic Suite</span>
                <span class="mt-3 block text-sm leading-6 text-slate-300">Higher-fare first-class traveler with family aboard and a Cherbourg departure.</span>
              </button>

              <button
                type="button"
                data-preset="engine_room"
                class="preset-btn rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <span class="block text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Engine Room</span>
                <span class="mt-3 block text-sm leading-6 text-slate-300">A lower-fare third-class passenger traveling alone out of Southampton.</span>
              </button>

              <button
                type="button"
                data-preset="family_crossing"
                class="preset-btn rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
              >
                <span class="block text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100">Family Crossing</span>
                <span class="mt-3 block text-sm leading-6 text-slate-300">Second-class child profile with parents and a midrange family ticket.</span>
              </button>
            </div>
          </section>

          <div class="flex flex-col gap-3 border-t border-slate-200 pt-2 sm:flex-row">
            <button
              id="predict-btn"
              type="submit"
              class="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Run Notebook Prediction
            </button>
            <button
              id="reset-btn"
              type="button"
              class="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              Reset Fields
            </button>
          </div>

          <p id="error-msg" class="hidden rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"></p>
        </form>
      </section>

      <div class="space-y-6 lg:sticky lg:top-24 lg:self-start">
        <section class="overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/90 shadow-[0_24px_80px_rgba(15,23,42,0.32)] backdrop-blur">
          <div class="border-b border-white/10 px-6 py-5">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Live Manifest</p>
                <h2 class="mt-2 text-3xl font-semibold text-white" style="font-family: 'Playfair Display', serif;">
                  Passenger summary
                </h2>
              </div>
              <span id="travel-mode-badge" class="inline-flex w-fit rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">
                Solo Traveler
              </span>
            </div>
          </div>

          <div class="space-y-6 px-6 py-6">
            <div class="rounded-[28px] border border-white/10 bg-white/5 p-5">
              <p class="text-xs uppercase tracking-[0.24em] text-cyan-100">Manifest readout</p>
              <p id="manifest-summary" class="mt-3 text-base leading-7 text-slate-200">
                Avery Dawson boards from Southampton with a second-class ticket and a solo travel profile.
              </p>
            </div>

            <div class="grid gap-3 sm:grid-cols-2">
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-xs uppercase tracking-[0.22em] text-cyan-100">Cabin tier</p>
                <p id="manifest-class" class="mt-2 text-xl font-semibold text-white">2nd Class</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-xs uppercase tracking-[0.22em] text-cyan-100">Party size</p>
                <p id="manifest-party" class="mt-2 text-xl font-semibold text-white">1 passenger</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-xs uppercase tracking-[0.22em] text-cyan-100">Departure port</p>
                <p id="manifest-port" class="mt-2 text-xl font-semibold text-white">Southampton</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p class="text-xs uppercase tracking-[0.22em] text-cyan-100">Fare signal</p>
                <p id="manifest-fare" class="mt-2 text-xl font-semibold text-white">$16.00</p>
              </div>
            </div>

            <div class="rounded-[28px] border border-white/10 bg-slate-950/60 p-5">
              <label for="api-url" class="text-sm font-medium text-slate-200">Prediction endpoint</label>
              <input
                id="api-url"
                type="text"
                class="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              >
              <p class="mt-3 text-xs leading-5 text-slate-400">
                Defaults to the local Flask service on <code>localhost:8587</code> and falls back to the deployed Flask host elsewhere.
              </p>
            </div>
          </div>
        </section>

        <section id="results-card" class="hidden overflow-hidden rounded-[32px] border border-emerald-200 bg-emerald-50 text-slate-900 shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
          <div class="border-b border-emerald-200 px-6 py-5">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">Prediction Output</p>
                <h2 id="result-title" class="mt-2 text-3xl font-semibold text-slate-950" style="font-family: 'Playfair Display', serif;">
                  Awaiting result
                </h2>
              </div>
              <span id="result-badge" class="inline-flex w-fit rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                Not Run
              </span>
            </div>
          </div>

          <div class="space-y-6 px-6 py-6">
            <p id="result-copy" class="text-base leading-7 text-slate-700">
              Run the predictor to see the model output.
            </p>

            <div class="grid gap-4 xl:grid-cols-[0.82fr_1.18fr]">
              <div class="rounded-[28px] bg-white p-6 shadow-sm">
                <div id="survival-ring" class="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-slate-200">
                  <div class="flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white text-center">
                    <span class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Survive</span>
                    <span id="survive-prob" class="mt-2 text-3xl font-semibold text-slate-950">0.0%</span>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="rounded-3xl bg-white p-5 shadow-sm">
                    <p class="text-xs uppercase tracking-[0.22em] text-emerald-700">Survival chance</p>
                    <p id="survive-prob-detail" class="mt-3 text-3xl font-semibold text-slate-950">0.0%</p>
                  </div>
                  <div class="rounded-3xl bg-white p-5 shadow-sm">
                    <p class="text-xs uppercase tracking-[0.22em] text-rose-700">Death chance</p>
                    <p id="die-prob" class="mt-3 text-3xl font-semibold text-slate-950">0.0%</p>
                  </div>
                </div>

                <div class="rounded-3xl bg-white p-5 shadow-sm">
                  <div class="flex items-center justify-between text-sm text-slate-500">
                    <span>Outcome meter</span>
                    <span id="meter-label">50 / 50 split</span>
                  </div>
                  <div class="mt-4 h-4 overflow-hidden rounded-full bg-rose-200">
                    <div id="survive-bar" class="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-700" style="width: 0%"></div>
                  </div>
                </div>
              </div>
            </div>

            <div id="weights-section" class="hidden rounded-[28px] border border-slate-200 bg-white p-5">
              <div class="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 class="text-xl font-semibold text-slate-950">Global feature weights</h3>
                  <p class="mt-1 text-sm text-slate-500">
                    Rendered only if the backend sends <code>weights</code>. These are model-level importances, not passenger-specific explanations.
                  </p>
                </div>
                <span class="inline-flex w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                  Decision Tree View
                </span>
              </div>

              <div id="weights-list" class="mt-5 space-y-3"></div>
            </div>
          </div>
        </section>

        <section class="rounded-[32px] border border-white/10 bg-white/5 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.24)] backdrop-blur sm:p-7">
          <div class="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Notebook Pipeline</p>
              <h2 class="mt-2 text-3xl font-semibold text-white" style="font-family: 'Playfair Display', serif;">
                What this page is hosting
              </h2>
            </div>
            <a
              href="{{ site.baseurl }}/ml/titanic"
              class="inline-flex w-fit items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Read Notebook
            </a>
          </div>

          <div class="mt-6 space-y-4">
            <div class="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <p class="text-xs uppercase tracking-[0.22em] text-cyan-100">1. Load data</p>
              <p class="mt-3 text-lg font-semibold text-white">Seaborn Titanic dataset</p>
              <p class="mt-2 text-sm leading-6 text-slate-300">The notebook starts from the standard Titanic dataset and narrows the columns used for training.</p>
            </div>
            <div class="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <p class="text-xs uppercase tracking-[0.22em] text-cyan-100">2. Clean inputs</p>
              <p class="mt-3 text-lg font-semibold text-white">Binary + one-hot preprocessing</p>
              <p class="mt-2 text-sm leading-6 text-slate-300">Sex and alone become numeric fields, while embarked is encoded across dedicated feature columns.</p>
            </div>
            <div class="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
              <p class="text-xs uppercase tracking-[0.22em] text-cyan-100">3. Predict</p>
              <p class="mt-3 text-lg font-semibold text-white">Logistic regression via Flask</p>
              <p class="mt-2 text-sm leading-6 text-slate-300">The page sends the same notebook-shaped payload to <code>/api/titanic/predict</code> and renders the returned probabilities.</p>
            </div>
          </div>

          <div class="mt-6 rounded-[28px] border border-white/10 bg-slate-950/60 p-5 text-sm leading-7 text-slate-200">
            <p><span class="font-semibold text-white">Notebook source:</span> <code>_notebooks/CSP/big-ideas/big-idea-2/2025-02-19-pandas-ml_titanic.ipynb</code></p>
            <p class="mt-3"><span class="font-semibold text-white">Payload sent:</span> <code>name</code>, <code>pclass</code>, <code>sex</code>, <code>age</code>, <code>sibsp</code>, <code>parch</code>, <code>fare</code>, <code>embarked</code>, and the derived <code>alone</code> value.</p>
          </div>
        </section>
      </div>
    </section>
  </div>
</div>

<script type="module" src="{{ site.baseurl }}/assets/js/titanic-predictor.js"></script>
