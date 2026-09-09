import{t as e}from"./config-DYtfWPvx.js";var t=`Ver estructura`,n=`En preparación`;function r({label:e,code:t}){return`
            <div>
                <p class="font-mono text-xs text-blueprint-700">${t}</p>
                <h3 class="mt-2 font-display text-base text-ink">${e}</h3>
            </div>`}function i(e){return`
        <div class="flex flex-col justify-between rounded-sm border border-line border-dashed bg-paper p-6 opacity-60" aria-disabled="true">
${r(e)}
            <span class="mt-6 inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-soft">
                ${n}
            </span>
        </div>
    `}function a(e){return e.disabled?i(e):`
        <a href="${e.href}" class="group flex flex-col justify-between rounded-sm border border-line bg-white p-6 transition-colors hover:border-blueprint-600">
${r(e)}
            <span class="mt-6 inline-flex items-center gap-1 text-xs text-ink-soft transition-colors group-hover:text-blueprint-700">
                ${t}
                <svg class="h-3 w-3 transition-transform group-hover:translate-x-0.5" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 6h7M6 2.5 9.5 6 6 9.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </span>
        </a>
    `}function o(){let t=document.getElementById(`contract-types-grid`);t&&(t.innerHTML=e.map(a).join(``))}o(),window.HSStaticMethods.autoInit();