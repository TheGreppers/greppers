---
layout: tailwindPost
title: Titanic Survival Predictor
description: Tailwind frontend for the Titanic notebook predictor.
courses: { csp: {week: 25} }
permalink: /titanic/predictor-aditya
show_reading_time: false
---

<div class="mx-auto max-w-7xl space-y-8 px-4 py-6 text-slate-900">
  <section class="relative overflow-hidden rounded-[32px] border border-slate-800 bg-slate-950 text-white shadow-2xl">
    <img
      src="{{ site.baseurl }}/images/javaml/titanic.jpg"
      alt="Titanic at sea"
      class="absolute inset-0 h-full w-full object-cover opacity-25"
    >
    <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-cyan-950/65"></div>

    <div class="relative grid gap-8 px-6 py-8 lg:grid-cols-[1.35fr_0.85fr] lg:px-10 lg:py-10">
      <div class="space-y-6">
        <div class="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
          Notebook Frontend
        </div>

        <div class="space-y-4">
          <p class="text-sm uppercase tracking-[0.35em] text-cyan-200" style="font-family: 'Rajdhani', sans-serif;">
            Passenger Manifest
          </p>
          <h2 class="max-w-3xl text-4xl font-semibold leading-tight md:text-5xl" style="font-family: 'Merriweather', serif;">
            Send a passenger record into <code class="rounded bg-white/10 px-2 py-1 text-cyan-100">pandas-ml_titanic.ipynb</code> and read the survival signal back out.
          </h2>
          <p class="max-w-2xl text-base leading-7 text-slate-200 md:text-lg">
            This page keeps the same API shape as the notebook demo, but restructures the experience into a live manifest, a prediction deck, and a notebook reference panel.
          </p>
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
            class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Jump to Predictor
          </a>
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <div class="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
          <p class="text-xs uppercase tracking-[0.25em] text-cyan-100">Notebook Route</p>
          <p class="mt-3 text-lg font-semibold text-white">POST <code>/api/titanic/predict</code></p>
          <p class="mt-2 text-sm text-slate-200">Accepts passenger JSON and returns <code>die</code> and <code>survive</code> probabilities.</p>
        </div>
        <div class="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
          <p class="text-xs uppercase tracking-[0.25em] text-cyan-100">Model Inputs</p>
          <p class="mt-3 text-lg font-semibold text-white">Class, age, fare, group size</p>
          <p class="mt-2 text-sm text-slate-200">Embarkation and sex are passed through exactly like the notebook preprocessing flow.</p>
        </div>
        <div class="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
          <p class="text-xs uppercase tracking-[0.25em] text-cyan-100">Why This Frontend</p>
          <p class="mt-3 text-lg font-semibold text-white">Separate input from interpretation</p>
          <p class="mt-2 text-sm text-slate-200">The manifest updates live before you send anything to the model.</p>
        </div>
      </div>
    </div>
  </section>

  <div id="prediction-console" class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
    <section class="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
      <div class="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">Prediction Console</p>
          <h2 class="mt-2 text-3xl font-semibold text-slate-950" style="font-family: 'Merriweather', serif;">Build a passenger record</h2>
        </div>
        <p class="max-w-sm text-sm leading-6 text-slate-500">
          The <code>alone</code> flag is derived automatically from siblings/spouses and parents/children counts.
        </p>
      </div>

      <form id="titanic-form" class="mt-8 space-y-8">
        <div class="grid gap-4 md:grid-cols-2">
          <label class="block space-y-2">
            <span class="text-sm font-medium text-slate-700">Passenger Name</span>
            <input
              id="name"
              name="name"
              type="text"
              value="Avery Dawson"
              class="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
            >
          </label>

          <label class="block space-y-2">
            <span class="text-sm font-medium text-slate-700">Passenger Class</span>
            <select
              id="pclass"
              name="pclass"
              class="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
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
              class="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
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
              class="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
            >
          </label>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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
              class="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
            >
          </label>

          <label class="block space-y-2">
            <span class="text-sm font-medium text-slate-700">Embarked</span>
            <select
              id="embarked"
              name="embarked"
              class="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
            >
              <option value="S" selected>Southampton</option>
              <option value="C">Cherbourg</option>
              <option value="Q">Queenstown</option>
            </select>
          </label>

          <label class="block space-y-2">
            <span class="text-sm font-medium text-slate-700">Siblings / Spouses</span>
            <input
              id="sibsp"
              name="sibsp"
              type="number"
              min="0"
              max="10"
              value="0"
              class="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
            >
          </label>

          <label class="block space-y-2">
            <span class="text-sm font-medium text-slate-700">Parents / Children</span>
            <input
              id="parch"
              name="parch"
              type="number"
              min="0"
              max="10"
              value="0"
              class="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-2 focus:ring-cyan-200"
            >
          </label>
        </div>

        <div class="rounded-[28px] bg-slate-950 p-6 text-white">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Quick Manifests</p>
              <h3 class="mt-2 text-2xl font-semibold">Load a sample passenger</h3>
            </div>
            <p class="max-w-sm text-sm leading-6 text-slate-300">These are just starter records to test the notebook route faster.</p>
          </div>

          <div class="mt-5 grid gap-3 md:grid-cols-3">
            <button
              type="button"
              data-preset="atlantic_suite"
              class="preset-btn rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <span class="block text-sm font-semibold text-cyan-100">Atlantic Suite</span>
              <span class="mt-2 block text-sm leading-6 text-slate-300">Older first-class passenger with a larger fare and family aboard.</span>
            </button>

            <button
              type="button"
              data-preset="engine_room"
              class="preset-btn rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <span class="block text-sm font-semibold text-cyan-100">Engine Room</span>
              <span class="mt-2 block text-sm leading-6 text-slate-300">Young third-class solo traveler with a low fare and no family group.</span>
            </button>

            <button
              type="button"
              data-preset="family_crossing"
              class="preset-btn rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left transition hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <span class="block text-sm font-semibold text-cyan-100">Family Crossing</span>
              <span class="mt-2 block text-sm leading-6 text-slate-300">Second-class child traveling with parents and a midrange ticket.</span>
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-3 sm:flex-row">
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

    <div class="space-y-6">
      <section class="rounded-[28px] border border-slate-800 bg-slate-950 p-6 text-white shadow-sm lg:p-8">
        <div class="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Live Manifest</p>
            <h2 class="mt-2 text-3xl font-semibold" style="font-family: 'Merriweather', serif;">Passenger summary before send</h2>
          </div>
          <span id="travel-mode-badge" class="inline-flex w-fit rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100">
            Solo Traveler
          </span>
        </div>

        <p id="manifest-summary" class="mt-5 text-base leading-7 text-slate-200">
          Avery Dawson boards from Southampton with a second-class ticket and a solo travel profile.
        </p>

        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs uppercase tracking-[0.24em] text-cyan-100">Cabin Tier</p>
            <p id="manifest-class" class="mt-2 text-xl font-semibold text-white">2nd Class</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs uppercase tracking-[0.24em] text-cyan-100">Party Size</p>
            <p id="manifest-party" class="mt-2 text-xl font-semibold text-white">1 passenger</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs uppercase tracking-[0.24em] text-cyan-100">Departure Port</p>
            <p id="manifest-port" class="mt-2 text-xl font-semibold text-white">Southampton</p>
          </div>
          <div class="rounded-2xl border border-white/10 bg-white/5 p-4">
            <p class="text-xs uppercase tracking-[0.24em] text-cyan-100">Fare Signal</p>
            <p id="manifest-fare" class="mt-2 text-xl font-semibold text-white">$16.00</p>
          </div>
        </div>

        <div class="mt-6 rounded-[24px] border border-white/10 bg-white/5 p-5">
          <label for="api-url" class="text-sm font-medium text-slate-200">Prediction endpoint</label>
          <input
            id="api-url"
            type="text"
            class="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
          >
          <p class="mt-3 text-xs leading-5 text-slate-400">
            Defaults to the local Flask service on <code>localhost:8587</code> and falls back to the deployed Flask host elsewhere.
          </p>
        </div>
      </section>

      <section id="results-card" class="hidden rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 shadow-sm lg:p-8">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-700">Prediction Output</p>
            <h2 id="result-title" class="mt-2 text-3xl font-semibold text-slate-950" style="font-family: 'Merriweather', serif;">Awaiting result</h2>
          </div>
          <span id="result-badge" class="inline-flex w-fit rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white">
            Not Run
          </span>
        </div>

        <p id="result-copy" class="mt-5 text-base leading-7 text-slate-700">
          Run the predictor to see the model output.
        </p>

        <div class="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
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
                <p class="text-xs uppercase tracking-[0.22em] text-emerald-700">Survival Chance</p>
                <p id="survive-prob-detail" class="mt-3 text-3xl font-semibold text-slate-950">0.0%</p>
              </div>
              <div class="rounded-3xl bg-white p-5 shadow-sm">
                <p class="text-xs uppercase tracking-[0.22em] text-rose-700">Death Chance</p>
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

        <div id="weights-section" class="mt-6 hidden rounded-[24px] border border-slate-200 bg-white p-5">
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
      </section>

      <section class="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
        <div class="flex flex-col gap-4 border-b border-slate-200 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p class="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700">Notebook Pipeline</p>
            <h2 class="mt-2 text-3xl font-semibold text-slate-950" style="font-family: 'Merriweather', serif;">What this frontend is hosting</h2>
          </div>
          <a
            href="{{ site.baseurl }}/ml/titanic"
            class="inline-flex w-fit items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            Read Notebook
          </a>
        </div>

        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <div class="rounded-3xl bg-slate-50 p-5">
            <p class="text-xs uppercase tracking-[0.22em] text-cyan-700">1. Load Data</p>
            <p class="mt-3 text-lg font-semibold text-slate-950">Seaborn Titanic dataset</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">The notebook starts from the standard Titanic dataset and narrows the columns used for training.</p>
          </div>
          <div class="rounded-3xl bg-slate-50 p-5">
            <p class="text-xs uppercase tracking-[0.22em] text-cyan-700">2. Clean Inputs</p>
            <p class="mt-3 text-lg font-semibold text-slate-950">Binary + one-hot preprocessing</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">Sex and alone are converted to numeric values, while embarkation is one-hot encoded.</p>
          </div>
          <div class="rounded-3xl bg-slate-50 p-5">
            <p class="text-xs uppercase tracking-[0.22em] text-cyan-700">3. Serve Predictions</p>
            <p class="mt-3 text-lg font-semibold text-slate-950">Logistic regression via Flask</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">A Flask blueprint exposes the notebook-trained model at <code>/api/titanic/predict</code>.</p>
          </div>
        </div>

        <div class="mt-6 rounded-[24px] bg-slate-950 p-5 text-sm leading-7 text-slate-200">
          <p><span class="font-semibold text-white">Notebook source:</span> <code>_notebooks/CSP/big-ideas/big-idea-2/2025-02-19-pandas-ml_titanic.ipynb</code></p>
          <p class="mt-3"><span class="font-semibold text-white">Payload sent:</span> <code>name</code>, <code>pclass</code>, <code>sex</code>, <code>age</code>, <code>sibsp</code>, <code>parch</code>, <code>fare</code>, <code>embarked</code>, and a derived <code>alone</code> flag.</p>
        </div>
      </section>
    </div>
  </div>
</div>

<script type="module" src="{{ site.baseurl }}/assets/js/titanic-predictor.js"></script>
