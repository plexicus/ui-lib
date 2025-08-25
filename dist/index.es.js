(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(`/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){.ui-lib *,.ui-lib :before,.ui-lib :after,.ui-lib ::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{.ui-lib,.ui-lib :host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-800:oklch(44.8% .119 151.328);--color-violet-800:oklch(43.2% .232 292.759);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-lg:32rem;--container-xl:36rem;--container-4xl:56rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--tracking-widest:.1em;--radius-xs:.125rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--blur-xs:4px;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{.ui-lib *,.ui-lib :after,.ui-lib :before,.ui-lib ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib html,.ui-lib :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}.ui-lib hr{height:0;color:inherit;border-top-width:1px}.ui-lib abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.ui-lib h1,.ui-lib h2,.ui-lib h3,.ui-lib h4,.ui-lib h5,.ui-lib h6{font-size:inherit;font-weight:inherit}.ui-lib a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}.ui-lib b,.ui-lib strong{font-weight:bolder}.ui-lib code,.ui-lib kbd,.ui-lib samp,.ui-lib pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}.ui-lib small{font-size:80%}.ui-lib sub,.ui-lib sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}.ui-lib sub{bottom:-.25em}.ui-lib sup{top:-.5em}.ui-lib table{text-indent:0;border-color:inherit;border-collapse:collapse}.ui-lib :-moz-focusring{outline:auto}.ui-lib progress{vertical-align:baseline}.ui-lib summary{display:list-item}.ui-lib ol,.ui-lib ul,.ui-lib menu{list-style:none}.ui-lib img,.ui-lib svg,.ui-lib video,.ui-lib canvas,.ui-lib audio,.ui-lib iframe,.ui-lib embed,.ui-lib object{vertical-align:middle;display:block}.ui-lib img,.ui-lib video{max-width:100%;height:auto}.ui-lib button,.ui-lib input,.ui-lib select,.ui-lib optgroup,.ui-lib textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib :where(select:is([multiple],[size])) optgroup{font-weight:bolder}.ui-lib :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}.ui-lib ::file-selector-button{margin-inline-end:4px}.ui-lib ::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){.ui-lib ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){.ui-lib ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}.ui-lib textarea{resize:vertical}.ui-lib ::-webkit-search-decoration{-webkit-appearance:none}.ui-lib ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}.ui-lib ::-webkit-datetime-edit{display:inline-flex}.ui-lib ::-webkit-datetime-edit-fields-wrapper{padding:0}.ui-lib ::-webkit-datetime-edit{padding-block:0}.ui-lib ::-webkit-datetime-edit-year-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-month-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-day-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-hour-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-minute-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-second-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-millisecond-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-meridiem-field{padding-block:0}.ui-lib ::-webkit-calendar-picker-indicator{line-height:1}.ui-lib :-moz-ui-invalid{box-shadow:none}.ui-lib button,.ui-lib input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::-webkit-inner-spin-button{height:auto}.ui-lib ::-webkit-outer-spin-button{height:auto}.ui-lib [hidden]:where(:not([hidden=until-found])){display:none!important}.ui-lib *{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib *{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib{background-color:var(--background);color:var(--foreground)}}@layer components;@layer utilities{.ui-lib .pointer-events-none{pointer-events:none}.ui-lib .collapse{visibility:collapse}.ui-lib .invisible{visibility:hidden}.ui-lib .visible{visibility:visible}.ui-lib .sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.ui-lib .not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.ui-lib .absolute{position:absolute}.ui-lib .fixed{position:fixed}.ui-lib .relative{position:relative}.ui-lib .static{position:static}.ui-lib .sticky{position:sticky}.ui-lib .inset-0{inset:calc(var(--spacing)*0)}.ui-lib .top-0{top:calc(var(--spacing)*0)}.ui-lib .top-1{top:calc(var(--spacing)*1)}.ui-lib .top-1\\/2{top:50%}.ui-lib .top-4{top:calc(var(--spacing)*4)}.ui-lib .top-16{top:calc(var(--spacing)*16)}.ui-lib .top-60{top:calc(var(--spacing)*60)}.ui-lib .top-\\[50\\%\\]{top:50%}.ui-lib .top-full{top:100%}.ui-lib .right-0{right:calc(var(--spacing)*0)}.ui-lib .right-1{right:calc(var(--spacing)*1)}.ui-lib .right-2{right:calc(var(--spacing)*2)}.ui-lib .right-4{right:calc(var(--spacing)*4)}.ui-lib .left-0{left:calc(var(--spacing)*0)}.ui-lib .left-3{left:calc(var(--spacing)*3)}.ui-lib .left-\\[50\\%\\]{left:50%}.ui-lib .isolate{isolation:isolate}.ui-lib .isolation-auto{isolation:auto}.ui-lib .z-30{z-index:30}.ui-lib .z-40{z-index:40}.ui-lib .z-50{z-index:50}.ui-lib .container{width:100%}@media (min-width:40rem){.ui-lib .container{max-width:40rem}}@media (min-width:48rem){.ui-lib .container{max-width:48rem}}@media (min-width:64rem){.ui-lib .container{max-width:64rem}}@media (min-width:80rem){.ui-lib .container{max-width:80rem}}@media (min-width:96rem){.ui-lib .container{max-width:96rem}}.ui-lib .-mx-1{margin-inline:calc(var(--spacing)*-1)}.ui-lib .mx-auto{margin-inline:auto}.ui-lib .my-1{margin-block:calc(var(--spacing)*1)}.ui-lib .mt-1{margin-top:calc(var(--spacing)*1)}.ui-lib .mt-2{margin-top:calc(var(--spacing)*2)}.ui-lib .mt-6{margin-top:calc(var(--spacing)*6)}.ui-lib .mt-8{margin-top:calc(var(--spacing)*8)}.ui-lib .mt-24{margin-top:calc(var(--spacing)*24)}.ui-lib .mr-1{margin-right:calc(var(--spacing)*1)}.ui-lib .mr-2{margin-right:calc(var(--spacing)*2)}.ui-lib .mr-4{margin-right:calc(var(--spacing)*4)}.ui-lib .mb-3{margin-bottom:calc(var(--spacing)*3)}.ui-lib .mb-4{margin-bottom:calc(var(--spacing)*4)}.ui-lib .mb-6{margin-bottom:calc(var(--spacing)*6)}.ui-lib .ml-0{margin-left:calc(var(--spacing)*0)}.ui-lib .ml-1{margin-left:calc(var(--spacing)*1)}.ui-lib .ml-4{margin-left:calc(var(--spacing)*4)}.ui-lib .ml-auto{margin-left:auto}.ui-lib .line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.ui-lib .line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.ui-lib .block{display:block}.ui-lib .contents{display:contents}.ui-lib .flex{display:flex}.ui-lib .flow-root{display:flow-root}.ui-lib .grid{display:grid}.ui-lib .hidden{display:none}.ui-lib .inline{display:inline}.ui-lib .inline-block{display:inline-block}.ui-lib .inline-flex{display:inline-flex}.ui-lib .inline-grid{display:inline-grid}.ui-lib .inline-table{display:inline-table}.ui-lib .list-item{display:list-item}.ui-lib .table{display:table}.ui-lib .table-caption{display:table-caption}.ui-lib .table-cell{display:table-cell}.ui-lib .table-column{display:table-column}.ui-lib .table-column-group{display:table-column-group}.ui-lib .table-footer-group{display:table-footer-group}.ui-lib .table-header-group{display:table-header-group}.ui-lib .table-row{display:table-row}.ui-lib .table-row-group{display:table-row-group}.ui-lib .size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.ui-lib .h-3{height:calc(var(--spacing)*3)}.ui-lib .h-3\\.5{height:calc(var(--spacing)*3.5)}.ui-lib .h-4{height:calc(var(--spacing)*4)}.ui-lib .h-5{height:calc(var(--spacing)*5)}.ui-lib .h-6{height:calc(var(--spacing)*6)}.ui-lib .h-7{height:calc(var(--spacing)*7)}.ui-lib .h-8{height:calc(var(--spacing)*8)}.ui-lib .h-9{height:calc(var(--spacing)*9)}.ui-lib .h-10{height:calc(var(--spacing)*10)}.ui-lib .h-11{height:calc(var(--spacing)*11)}.ui-lib .h-12{height:calc(var(--spacing)*12)}.ui-lib .h-14{height:calc(var(--spacing)*14)}.ui-lib .h-16{height:calc(var(--spacing)*16)}.ui-lib .h-36{height:calc(var(--spacing)*36)}.ui-lib .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.ui-lib .h-full{height:100%}.ui-lib .h-px{height:1px}.ui-lib .h-screen{height:100vh}.ui-lib .max-h-96{max-height:calc(var(--spacing)*96)}.ui-lib .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.ui-lib .max-h-\\[calc\\(100vh-80px\\)\\]{max-height:calc(100vh - 80px)}.ui-lib .max-h-\\[calc\\(100vh-600px\\)\\]{max-height:calc(100vh - 600px)}.ui-lib .max-h-full{max-height:100%}.ui-lib .w-3{width:calc(var(--spacing)*3)}.ui-lib .w-3\\.5{width:calc(var(--spacing)*3.5)}.ui-lib .w-4{width:calc(var(--spacing)*4)}.ui-lib .w-6{width:calc(var(--spacing)*6)}.ui-lib .w-7{width:calc(var(--spacing)*7)}.ui-lib .w-8{width:calc(var(--spacing)*8)}.ui-lib .w-9{width:calc(var(--spacing)*9)}.ui-lib .w-10{width:calc(var(--spacing)*10)}.ui-lib .w-12{width:calc(var(--spacing)*12)}.ui-lib .w-28{width:calc(var(--spacing)*28)}.ui-lib .w-64{width:calc(var(--spacing)*64)}.ui-lib .w-\\[24px\\]{width:24px}.ui-lib .w-\\[150px\\]{width:150px}.ui-lib .w-\\[200\\%\\]{width:200%}.ui-lib .w-auto{width:auto}.ui-lib .w-full{width:100%}.ui-lib .max-w-7xl{max-width:var(--container-7xl)}.ui-lib .max-w-\\[90vw\\]{max-width:90vw}.ui-lib .max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.ui-lib .max-w-none{max-width:none}.ui-lib .max-w-sm{max-width:var(--container-sm)}.ui-lib .min-w-0{min-width:calc(var(--spacing)*0)}.ui-lib .min-w-\\[8rem\\]{min-width:8rem}.ui-lib .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.ui-lib .flex-1{flex:1}.ui-lib .shrink{flex-shrink:1}.ui-lib .shrink-0{flex-shrink:0}.ui-lib .grow{flex-grow:1}.ui-lib .border-collapse{border-collapse:collapse}.ui-lib .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.ui-lib .origin-right{transform-origin:100%}.ui-lib .origin-top{transform-origin:top}.ui-lib .translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-none{translate:none}.ui-lib .scale-3d{scale:var(--tw-scale-x)var(--tw-scale-y)var(--tw-scale-z)}.ui-lib .rotate-180{rotate:180deg}.ui-lib .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.ui-lib .cursor-default{cursor:default}.ui-lib .touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.ui-lib .resize{resize:both}.ui-lib .scroll-py-1{scroll-padding-block:calc(var(--spacing)*1)}.ui-lib .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.ui-lib .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.ui-lib .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .flex-col{flex-direction:column}.ui-lib .flex-col-reverse{flex-direction:column-reverse}.ui-lib .flex-wrap{flex-wrap:wrap}.ui-lib .items-center{align-items:center}.ui-lib .items-start{align-items:flex-start}.ui-lib .justify-between{justify-content:space-between}.ui-lib .justify-center{justify-content:center}.ui-lib .justify-start{justify-content:flex-start}.ui-lib .gap-1{gap:calc(var(--spacing)*1)}.ui-lib .gap-2{gap:calc(var(--spacing)*2)}.ui-lib .gap-3{gap:calc(var(--spacing)*3)}.ui-lib .gap-4{gap:calc(var(--spacing)*4)}.ui-lib .gap-6{gap:calc(var(--spacing)*6)}.ui-lib .gap-8{gap:calc(var(--spacing)*8)}.ui-lib :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}.ui-lib :where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.ui-lib :where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}.ui-lib :where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}.ui-lib :where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}.ui-lib :where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.ui-lib .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui-lib .overflow-hidden{overflow:hidden}.ui-lib .overflow-visible{overflow:visible}.ui-lib .overflow-x-hidden{overflow-x:hidden}.ui-lib .overflow-y-auto{overflow-y:auto}.ui-lib .rounded{border-radius:.25rem}.ui-lib .rounded-full{border-radius:3.40282e38px}.ui-lib .rounded-lg{border-radius:var(--radius)}.ui-lib .rounded-md{border-radius:calc(var(--radius) - 2px)}.ui-lib .rounded-sm{border-radius:calc(var(--radius) - 4px)}.ui-lib .rounded-xl{border-radius:calc(var(--radius) + 4px)}.ui-lib .rounded-xs{border-radius:var(--radius-xs)}.ui-lib .rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.ui-lib .rounded-ss{border-start-start-radius:.25rem}.ui-lib .rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.ui-lib .rounded-se{border-start-end-radius:.25rem}.ui-lib .rounded-ee{border-end-end-radius:.25rem}.ui-lib .rounded-es{border-end-start-radius:.25rem}.ui-lib .rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.ui-lib .rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-tl{border-top-left-radius:.25rem}.ui-lib .rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.ui-lib .rounded-tr{border-top-right-radius:.25rem}.ui-lib .rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-br{border-bottom-right-radius:.25rem}.ui-lib .rounded-bl{border-bottom-left-radius:.25rem}.ui-lib .border{border-style:var(--tw-border-style);border-width:1px}.ui-lib .border-2{border-style:var(--tw-border-style);border-width:2px}.ui-lib .border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.ui-lib .border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.ui-lib .border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.ui-lib .border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.ui-lib .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.ui-lib .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.ui-lib .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.ui-lib .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.ui-lib .border-gray-100{border-color:var(--color-gray-100)}.ui-lib .border-gray-200{border-color:var(--color-gray-200)}.ui-lib .border-gray-300{border-color:var(--color-gray-300)}.ui-lib .border-gray-600{border-color:var(--color-gray-600)}.ui-lib .border-green-200{border-color:var(--color-green-200)}.ui-lib .border-input{border-color:var(--input)}.ui-lib .border-purple-300{border-color:var(--color-purple-300)}.ui-lib .border-white{border-color:var(--color-white)}.ui-lib .border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.ui-lib .border-white\\/50{border-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/50{border-color:color-mix(in oklab,var(--color-white)50%,transparent)}}.ui-lib .bg-\\[\\#8220ff\\]{background-color:#8220ff}.ui-lib .bg-\\[\\#8220ff\\]\\/10{background-color:#8220ff1a}.ui-lib .bg-\\[\\#8220ff\\]\\/60{background-color:#8220ff99}.ui-lib .bg-background,.ui-lib .bg-background\\/80{background-color:var(--background)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-background\\/80{background-color:color-mix(in oklab,var(--background)80%,transparent)}}.ui-lib .bg-black{background-color:var(--color-black)}.ui-lib .bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.ui-lib .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black)50%,transparent)}}.ui-lib .bg-border{background-color:var(--border)}.ui-lib .bg-destructive{background-color:var(--destructive)}.ui-lib .bg-gray-50{background-color:var(--color-gray-50)}.ui-lib .bg-gray-100{background-color:var(--color-gray-100)}.ui-lib .bg-gray-200{background-color:var(--color-gray-200)}.ui-lib .bg-green-100{background-color:var(--color-green-100)}.ui-lib .bg-muted{background-color:var(--muted)}.ui-lib .bg-popover{background-color:var(--popover)}.ui-lib .bg-primary,.ui-lib .bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.ui-lib .bg-secondary{background-color:var(--secondary)}.ui-lib .bg-transparent{background-color:#0000}.ui-lib .bg-violet-800{background-color:var(--color-violet-800)}.ui-lib .bg-white{background-color:var(--color-white)}.ui-lib .bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.ui-lib .from-\\[\\#8220ff\\]{--tw-gradient-from:#8220ff;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .to-\\[\\#a020f0\\]{--tw-gradient-to:#a020f0;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .bg-repeat{background-repeat:repeat}.ui-lib .mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.ui-lib .mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.ui-lib .object-contain{object-fit:contain}.ui-lib .p-0{padding:calc(var(--spacing)*0)}.ui-lib .p-1{padding:calc(var(--spacing)*1)}.ui-lib .p-2{padding:calc(var(--spacing)*2)}.ui-lib .p-3{padding:calc(var(--spacing)*3)}.ui-lib .p-4{padding:calc(var(--spacing)*4)}.ui-lib .p-6{padding:calc(var(--spacing)*6)}.ui-lib .px-1{padding-inline:calc(var(--spacing)*1)}.ui-lib .px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.ui-lib .px-2{padding-inline:calc(var(--spacing)*2)}.ui-lib .px-3{padding-inline:calc(var(--spacing)*3)}.ui-lib .px-4{padding-inline:calc(var(--spacing)*4)}.ui-lib .px-8{padding-inline:calc(var(--spacing)*8)}.ui-lib .py-1{padding-block:calc(var(--spacing)*1)}.ui-lib .py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.ui-lib .py-2{padding-block:calc(var(--spacing)*2)}.ui-lib .py-3{padding-block:calc(var(--spacing)*3)}.ui-lib .py-6{padding-block:calc(var(--spacing)*6)}.ui-lib .py-8{padding-block:calc(var(--spacing)*8)}.ui-lib .pt-4{padding-top:calc(var(--spacing)*4)}.ui-lib .pt-6{padding-top:calc(var(--spacing)*6)}.ui-lib .pt-12{padding-top:calc(var(--spacing)*12)}.ui-lib .pr-0{padding-right:calc(var(--spacing)*0)}.ui-lib .pr-6{padding-right:calc(var(--spacing)*6)}.ui-lib .pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .pr-10{padding-right:calc(var(--spacing)*10)}.ui-lib .pb-6{padding-bottom:calc(var(--spacing)*6)}.ui-lib .pb-20{padding-bottom:calc(var(--spacing)*20)}.ui-lib .pl-2{padding-left:calc(var(--spacing)*2)}.ui-lib .pl-10{padding-left:calc(var(--spacing)*10)}.ui-lib .text-center{text-align:center}.ui-lib .text-left{text-align:left}.ui-lib .font-mono{font-family:var(--font-mono)}.ui-lib .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.ui-lib .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.ui-lib .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.ui-lib .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .text-\\[10px\\]{font-size:10px}.ui-lib .leading-none{--tw-leading:1;line-height:1}.ui-lib .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.ui-lib .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.ui-lib .tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.ui-lib .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.ui-lib .text-wrap{text-wrap:wrap}.ui-lib .text-clip{text-overflow:clip}.ui-lib .text-ellipsis{text-overflow:ellipsis}.ui-lib .whitespace-nowrap{white-space:nowrap}.ui-lib .text-\\[\\#8220ff\\]{color:#8220ff}.ui-lib .text-\\[\\#8220ff\\]\\/80{color:#8220ffcc}.ui-lib .text-black{color:var(--color-black)}.ui-lib .text-foreground{color:var(--foreground)}.ui-lib .text-gray-200{color:var(--color-gray-200)}.ui-lib .text-gray-400{color:var(--color-gray-400)}.ui-lib .text-gray-500{color:var(--color-gray-500)}.ui-lib .text-gray-600{color:var(--color-gray-600)}.ui-lib .text-gray-700{color:var(--color-gray-700)}.ui-lib .text-gray-900{color:var(--color-gray-900)}.ui-lib .text-green-800{color:var(--color-green-800)}.ui-lib .text-muted-foreground{color:var(--muted-foreground)}.ui-lib .text-popover-foreground{color:var(--popover-foreground)}.ui-lib .text-primary{color:var(--primary)}.ui-lib .text-primary-foreground{color:var(--primary-foreground)}.ui-lib .text-purple-700{color:var(--color-purple-700)}.ui-lib .text-secondary-foreground{color:var(--secondary-foreground)}.ui-lib .text-white{color:var(--color-white)}.ui-lib .capitalize{text-transform:capitalize}.ui-lib .lowercase{text-transform:lowercase}.ui-lib .normal-case{text-transform:none}.ui-lib .uppercase{text-transform:uppercase}.ui-lib .italic{font-style:italic}.ui-lib .not-italic{font-style:normal}.ui-lib .diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .normal-nums{font-variant-numeric:normal}.ui-lib .line-through{text-decoration-line:line-through}.ui-lib .no-underline{text-decoration-line:none}.ui-lib .overline{text-decoration-line:overline}.ui-lib .underline{text-decoration-line:underline}.ui-lib .underline-offset-4{text-underline-offset:4px}.ui-lib .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ui-lib .subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.ui-lib .opacity-50{opacity:.5}.ui-lib .opacity-70{opacity:.7}.ui-lib .opacity-100{opacity:1}.ui-lib .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring-offset-background{--tw-ring-offset-color:var(--background)}.ui-lib .outline-hidden{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.ui-lib .outline-hidden{outline-offset:2px;outline:2px solid #0000}}.ui-lib .outline{outline-style:var(--tw-outline-style);outline-width:1px}.ui-lib .blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-blur-xs{--tw-backdrop-blur:blur(var(--blur-xs));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-\\[color\\,box-shadow\\]{transition-property:color,box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-discrete{transition-behavior:allow-discrete}.ui-lib .delay-0{transition-delay:0s}.ui-lib .delay-500{transition-delay:.5s}.ui-lib .duration-200{--tw-duration:.2s;transition-duration:.2s}.ui-lib .duration-300{--tw-duration:.3s;transition-duration:.3s}.ui-lib .ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ui-lib .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ui-lib .ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.ui-lib .delay-0{--tw-animation-delay:0s;animation-delay:0s}.ui-lib .delay-500{--tw-animation-delay:.5s;animation-delay:.5s}.ui-lib .outline-none{--tw-outline-style:none;outline-style:none}.ui-lib .select-none{-webkit-user-select:none;user-select:none}.ui-lib :where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ui-lib .paused{animation-play-state:paused}.ui-lib .ring-inset{--tw-ring-inset:inset}.ui-lib .running{animation-play-state:running}.ui-lib .zoom-in{--tw-enter-scale:0}.ui-lib .zoom-out{--tw-exit-scale:0}@media (hover:hover){.ui-lib .group-hover\\:bg-\\[\\#8220ff\\]\\/20:is(:where(.group):hover *){background-color:#8220ff33}.ui-lib .group-hover\\:text-\\[\\#8220ff\\]:is(:where(.group):hover *){color:#8220ff}}.ui-lib .selection\\:bg-primary ::selection{background-color:var(--primary)}.ui-lib .selection\\:bg-primary::selection{background-color:var(--primary)}.ui-lib .selection\\:text-primary-foreground ::selection{color:var(--primary-foreground)}.ui-lib .selection\\:text-primary-foreground::selection{color:var(--primary-foreground)}.ui-lib .file\\:inline-flex::file-selector-button{display:inline-flex}.ui-lib .file\\:h-7::file-selector-button{height:calc(var(--spacing)*7)}.ui-lib .file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.ui-lib .file\\:bg-transparent::file-selector-button{background-color:#0000}.ui-lib .file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .file\\:text-foreground::file-selector-button{color:var(--foreground)}.ui-lib .placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.ui-lib .placeholder\\:text-white\\/70::placeholder{color:#ffffffb3}@supports (color:color-mix(in lab,red,red)){.ui-lib .placeholder\\:text-white\\/70::placeholder{color:color-mix(in oklab,var(--color-white)70%,transparent)}}@media (hover:hover){.ui-lib .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.ui-lib .hover\\:bg-accent:hover{background-color:var(--accent)}.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}.ui-lib .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.ui-lib .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.ui-lib .hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}.ui-lib .hover\\:bg-purple-200:hover{background-color:var(--color-purple-200)}.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}}.ui-lib .hover\\:bg-violet-800:hover{background-color:var(--color-violet-800)}.ui-lib .hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.ui-lib .hover\\:text-\\[\\#8220ff\\]:hover{color:#8220ff}.ui-lib .hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.ui-lib .hover\\:text-gray-500:hover{color:var(--color-gray-500)}.ui-lib .hover\\:text-gray-700:hover{color:var(--color-gray-700)}.ui-lib .hover\\:text-purple-700:hover{color:var(--color-purple-700)}.ui-lib .hover\\:text-white\\/80:hover{color:#fffc}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:text-white\\/80:hover{color:color-mix(in oklab,var(--color-white)80%,transparent)}}.ui-lib .hover\\:underline:hover{text-decoration-line:underline}.ui-lib .hover\\:opacity-100:hover{opacity:1}.ui-lib .hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.ui-lib .focus\\:border-\\[\\#8220ff\\]:focus{border-color:#8220ff}.ui-lib .focus\\:border-ring:focus{border-color:var(--ring)}.ui-lib .focus\\:bg-accent:focus{background-color:var(--accent)}.ui-lib .focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.ui-lib .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-\\[\\#8220ff\\]\\/20:focus{--tw-ring-color:oklab(54.3459% .11409 -.259125/.2)}.ui-lib .focus\\:ring-gray-500:focus{--tw-ring-color:var(--color-gray-500)}.ui-lib .focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.ui-lib .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.ui-lib .focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.ui-lib .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.ui-lib .focus-visible\\:border-ring:focus-visible{border-color:var(--ring)}.ui-lib .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-\\[3px\\]:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-ring:focus-visible,.ui-lib .focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib .focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.ui-lib .disabled\\:pointer-events-none:disabled{pointer-events:none}.ui-lib .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.ui-lib .disabled\\:opacity-50:disabled{opacity:.5}.ui-lib .aria-invalid\\:border-destructive[aria-invalid=true]{border-color:var(--destructive)}.ui-lib .aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.ui-lib .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.ui-lib .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.ui-lib .data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled=true]{pointer-events:none}.ui-lib .data-\\[disabled\\=true\\]\\:opacity-50[data-disabled=true]{opacity:.5}.ui-lib .data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.ui-lib .data-\\[selected\\=true\\]\\:bg-accent[data-selected=true]{background-color:var(--accent)}.ui-lib .data-\\[selected\\=true\\]\\:text-accent-foreground[data-selected=true]{color:var(--accent-foreground)}.ui-lib .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(2*var(--spacing))}.ui-lib .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(2*var(--spacing))}.ui-lib :is(.\\*\\*\\:data-\\[slot\\=command-input-wrapper\\]\\:h-12 *)[data-slot=command-input-wrapper]{height:calc(var(--spacing)*12)}.ui-lib .data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.ui-lib .data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.ui-lib .data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:var(--accent)}.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:var(--muted-foreground)}.ui-lib .data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.ui-lib .data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}@media (min-width:40rem){.ui-lib .sm\\:top-80{top:calc(var(--spacing)*80)}.ui-lib .sm\\:max-h-\\[300px\\]{max-height:300px}.ui-lib .sm\\:max-w-lg{max-width:var(--container-lg)}.ui-lib .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .sm\\:flex-row{flex-direction:row}.ui-lib .sm\\:justify-end{justify-content:flex-end}.ui-lib .sm\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .sm\\:text-left{text-align:left}}@media (min-width:48rem){.ui-lib .md\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.ui-lib .md\\:h-40{height:calc(var(--spacing)*40)}.ui-lib .md\\:max-h-\\[400px\\]{max-height:400px}.ui-lib .md\\:w-1\\/3{width:33.3333%}.ui-lib .md\\:w-2\\/3{width:66.6667%}.ui-lib .md\\:w-40{width:calc(var(--spacing)*40)}.ui-lib .md\\:w-42{width:calc(var(--spacing)*42)}.ui-lib .md\\:max-w-xl{max-width:var(--container-xl)}.ui-lib .md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .md\\:flex-row{flex-direction:row}.ui-lib .md\\:items-center{align-items:center}.ui-lib .md\\:justify-between{justify-content:space-between}.ui-lib .md\\:gap-4{gap:calc(var(--spacing)*4)}.ui-lib .md\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .md\\:pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (min-width:64rem){.ui-lib .lg\\:top-100{top:calc(var(--spacing)*100)}.ui-lib .lg\\:col-span-2{grid-column:span 2/span 2}.ui-lib .lg\\:max-h-\\[500px\\]{max-height:500px}.ui-lib .lg\\:max-w-4xl{max-width:var(--container-4xl)}.ui-lib .lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.ui-lib .lg\\:gap-6{gap:calc(var(--spacing)*6)}.ui-lib .lg\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@media (min-width:80rem){.ui-lib .xl\\:flex{display:flex}.ui-lib .xl\\:hidden{display:none}.ui-lib .xl\\:inline{display:inline}}.ui-lib .dark\\:border-gray-700:is(.dark *){border-color:var(--color-gray-700)}.ui-lib .dark\\:bg-gray-900:is(.dark *){background-color:var(--color-gray-900)}.ui-lib .dark\\:bg-input\\/30:is(.dark *){background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.ui-lib .dark\\:bg-input\\/30:is(.dark *){background-color:color-mix(in oklab,var(--input)30%,transparent)}}.ui-lib .dark\\:text-white:is(.dark *){color:var(--color-white)}.ui-lib .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading]{padding-block:calc(var(--spacing)*1.5)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading]{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading]{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading]{color:var(--muted-foreground)}.ui-lib .\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden])~[cmdk-group]{padding-top:calc(var(--spacing)*0)}.ui-lib .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg{height:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg{width:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input]{height:calc(var(--spacing)*12)}.ui-lib .\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item]{padding-block:calc(var(--spacing)*3)}.ui-lib .\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg{height:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg{width:calc(var(--spacing)*5)}.ui-lib .\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.ui-lib .\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}.ui-lib .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.ui-lib .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground svg:not([class*=text-]){color:var(--muted-foreground)}.ui-lib .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}.ui-lib *{scrollbar-color:#404040 #000!important;scrollbar-width:thin!important}.ui-lib{--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5}.ui-lib .dark{--background:oklch(14.5% 0 0);--foreground:oklch(98.5% 0 0);--card:oklch(20.5% 0 0);--card-foreground:oklch(98.5% 0 0);--popover:oklch(20.5% 0 0);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(92.2% 0 0);--primary-foreground:oklch(20.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(26.9% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(70.4% .191 22.216);--border:oklch(100% 0 0/.1);--input:oklch(100% 0 0/.15);--ring:oklch(55.6% 0 0);--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.5% 0 0);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(26.9% 0 0);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(100% 0 0/.1);--sidebar-ring:oklch(55.6% 0 0)}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))}}`)),document.head.appendChild(i)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as f from "react";
import Nt, { createContext as ms, useContext as vs, useCallback as Be, useState as re, useRef as Ne, useEffect as ie } from "react";
import { Search as nn, X as xs, XIcon as ys, SearchIcon as bs, Globe as _s } from "lucide-react";
import * as ks from "react-dom";
import ws from "react-dom";
var Ye = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr;
function js() {
  if (gr) return Me;
  gr = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function r(n, s, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      i = {};
      for (var l in s)
        l !== "key" && (i[l] = s[l]);
    } else i = s;
    return s = i.ref, {
      $$typeof: t,
      type: n,
      key: o,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return Me.Fragment = e, Me.jsx = r, Me.jsxs = r, Me;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function Ss() {
  return mr || (mr = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(b) {
      if (b == null) return null;
      if (typeof b == "function")
        return b.$$typeof === w ? null : b.displayName || b.name || null;
      if (typeof b == "string") return b;
      switch (b) {
        case v:
          return "Fragment";
        case C:
          return "Profiler";
        case _:
          return "StrictMode";
        case E:
          return "Suspense";
        case R:
          return "SuspenseList";
        case I:
          return "Activity";
      }
      if (typeof b == "object")
        switch (typeof b.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), b.$$typeof) {
          case h:
            return "Portal";
          case L:
            return (b.displayName || "Context") + ".Provider";
          case x:
            return (b._context.displayName || "Context") + ".Consumer";
          case A:
            var T = b.render;
            return b = b.displayName, b || (b = T.displayName || T.name || "", b = b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef"), b;
          case S:
            return T = b.displayName || null, T !== null ? T : t(b.type) || "Memo";
          case k:
            T = b._payload, b = b._init;
            try {
              return t(b(T));
            } catch {
            }
        }
      return null;
    }
    function e(b) {
      return "" + b;
    }
    function r(b) {
      try {
        e(b);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var y = T.error, j = typeof Symbol == "function" && Symbol.toStringTag && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return y.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          j
        ), e(b);
      }
    }
    function n(b) {
      if (b === v) return "<>";
      if (typeof b == "object" && b !== null && b.$$typeof === k)
        return "<...>";
      try {
        var T = t(b);
        return T ? "<" + T + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var b = K.A;
      return b === null ? null : b.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(b) {
      if (U.call(b, "key")) {
        var T = Object.getOwnPropertyDescriptor(b, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return b.key !== void 0;
    }
    function l(b, T) {
      function y() {
        J || (J = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      y.isReactWarning = !0, Object.defineProperty(b, "key", {
        get: y,
        configurable: !0
      });
    }
    function u() {
      var b = t(this.type);
      return V[b] || (V[b] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), b = this.props.ref, b !== void 0 ? b : null;
    }
    function c(b, T, y, j, $, P, H, D) {
      return y = P.ref, b = {
        $$typeof: g,
        type: b,
        key: T,
        props: P,
        _owner: $
      }, (y !== void 0 ? y : null) !== null ? Object.defineProperty(b, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(b, "ref", { enumerable: !1, value: null }), b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(b, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(b, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.defineProperty(b, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    }
    function d(b, T, y, j, $, P, H, D) {
      var G = T.children;
      if (G !== void 0)
        if (j)
          if (N(G)) {
            for (j = 0; j < G.length; j++)
              p(G[j]);
            Object.freeze && Object.freeze(G);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(G);
      if (U.call(T, "key")) {
        G = t(b);
        var q = Object.keys(T).filter(function(Re) {
          return Re !== "key";
        });
        j = 0 < q.length ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}", ne[G + j] || (q = 0 < q.length ? "{" + q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          j,
          G,
          q,
          G
        ), ne[G + j] = !0);
      }
      if (G = null, y !== void 0 && (r(y), G = "" + y), o(T) && (r(T.key), G = "" + T.key), "key" in T) {
        y = {};
        for (var se in T)
          se !== "key" && (y[se] = T[se]);
      } else y = T;
      return G && l(
        y,
        typeof b == "function" ? b.displayName || b.name || "Unknown" : b
      ), c(
        b,
        G,
        P,
        $,
        s(),
        y,
        H,
        D
      );
    }
    function p(b) {
      typeof b == "object" && b !== null && b.$$typeof === g && b._store && (b._store.validated = 1);
    }
    var m = Nt, g = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), L = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), I = Symbol.for("react.activity"), w = Symbol.for("react.client.reference"), K = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, N = Array.isArray, B = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(b) {
        return b();
      }
    };
    var J, V = {}, Y = m.react_stack_bottom_frame.bind(
      m,
      i
    )(), M = B(n(i)), ne = {};
    Te.Fragment = v, Te.jsx = function(b, T, y, j, $) {
      var P = 1e4 > K.recentlyCreatedOwnerStacks++;
      return d(
        b,
        T,
        y,
        !1,
        j,
        $,
        P ? Error("react-stack-top-frame") : Y,
        P ? B(n(b)) : M
      );
    }, Te.jsxs = function(b, T, y, j, $) {
      var P = 1e4 > K.recentlyCreatedOwnerStacks++;
      return d(
        b,
        T,
        y,
        !0,
        j,
        $,
        P ? Error("react-stack-top-frame") : Y,
        P ? B(n(b)) : M
      );
    };
  })()), Te;
}
var vr;
function Ps() {
  return vr || (vr = 1, process.env.NODE_ENV === "production" ? Ye.exports = js() : Ye.exports = Ss()), Ye.exports;
}
var a = Ps();
function sn(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var s = t.length;
    for (e = 0; e < s; e++) t[e] && (r = sn(t[e])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function an() {
  for (var t, e, r = 0, n = "", s = arguments.length; r < s; r++) (t = arguments[r]) && (e = sn(t)) && (n && (n += " "), n += e);
  return n;
}
const xr = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, yr = an, Cs = (t, e) => (r) => {
  var n;
  if ((e == null ? void 0 : e.variants) == null) return yr(t, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: i } = e, o = Object.keys(s).map((c) => {
    const d = r == null ? void 0 : r[c], p = i == null ? void 0 : i[c];
    if (d === null) return null;
    const m = xr(d) || xr(p);
    return s[c][m];
  }), l = r && Object.entries(r).reduce((c, d) => {
    let [p, m] = d;
    return m === void 0 || (c[p] = m), c;
  }, {}), u = e == null || (n = e.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, d) => {
    let { class: p, className: m, ...g } = d;
    return Object.entries(g).every((h) => {
      let [v, _] = h;
      return Array.isArray(_) ? _.includes({
        ...i,
        ...l
      }[v]) : {
        ...i,
        ...l
      }[v] === _;
    }) ? [
      ...c,
      p,
      m
    ] : c;
  }, []);
  return yr(t, o, u, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Vt = "-", Es = (t) => {
  const e = Os(t), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = t;
  return {
    getClassGroupId: (o) => {
      const l = o.split(Vt);
      return l[0] === "" && l.length !== 1 && l.shift(), on(l, e) || zs(o);
    },
    getConflictingClassGroupIds: (o, l) => {
      const u = r[o] || [];
      return l && n[o] ? [...u, ...n[o]] : u;
    }
  };
}, on = (t, e) => {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  const r = t[0], n = e.nextPart.get(r), s = n ? on(t.slice(1), n) : void 0;
  if (s)
    return s;
  if (e.validators.length === 0)
    return;
  const i = t.join(Vt);
  return (o = e.validators.find(({
    validator: l
  }) => l(i))) == null ? void 0 : o.classGroupId;
}, br = /^\[(.+)\]$/, zs = (t) => {
  if (br.test(t)) {
    const e = br.exec(t)[1], r = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, Os = (t) => {
  const {
    theme: e,
    classGroups: r
  } = t, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in r)
    It(r[s], n, s, e);
  return n;
}, It = (t, e, r, n) => {
  t.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? e : _r(e, s);
      i.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (As(s)) {
        It(s(n), e, r, n);
        return;
      }
      e.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([i, o]) => {
      It(o, _r(e, i), r, n);
    });
  });
}, _r = (t, e) => {
  let r = t;
  return e.split(Vt).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, As = (t) => t.isThemeGetter, Ns = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const s = (i, o) => {
    r.set(i, o), e++, e > t && (e = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let o = r.get(i);
      if (o !== void 0)
        return o;
      if ((o = n.get(i)) !== void 0)
        return s(i, o), o;
    },
    set(i, o) {
      r.has(i) ? r.set(i, o) : s(i, o);
    }
  };
}, Lt = "!", Rt = ":", Is = Rt.length, Ls = (t) => {
  const {
    prefix: e,
    experimentalParseClassName: r
  } = t;
  let n = (s) => {
    const i = [];
    let o = 0, l = 0, u = 0, c;
    for (let h = 0; h < s.length; h++) {
      let v = s[h];
      if (o === 0 && l === 0) {
        if (v === Rt) {
          i.push(s.slice(u, h)), u = h + Is;
          continue;
        }
        if (v === "/") {
          c = h;
          continue;
        }
      }
      v === "[" ? o++ : v === "]" ? o-- : v === "(" ? l++ : v === ")" && l--;
    }
    const d = i.length === 0 ? s : s.substring(u), p = Rs(d), m = p !== d, g = c && c > u ? c - u : void 0;
    return {
      modifiers: i,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: g
    };
  };
  if (e) {
    const s = e + Rt, i = n;
    n = (o) => o.startsWith(s) ? i(o.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const s = n;
    n = (i) => r({
      className: i,
      parseClassName: s
    });
  }
  return n;
}, Rs = (t) => t.endsWith(Lt) ? t.substring(0, t.length - 1) : t.startsWith(Lt) ? t.substring(1) : t, Ms = (t) => {
  const e = Object.fromEntries(t.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const s = [];
    let i = [];
    return n.forEach((o) => {
      o[0] === "[" || e[o] ? (s.push(...i.sort(), o), i = []) : i.push(o);
    }), s.push(...i.sort()), s;
  };
}, Ts = (t) => ({
  cache: Ns(t.cacheSize),
  parseClassName: Ls(t),
  sortModifiers: Ms(t),
  ...Es(t)
}), $s = /\s+/, Ds = (t, e) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s,
    sortModifiers: i
  } = e, o = [], l = t.trim().split($s);
  let u = "";
  for (let c = l.length - 1; c >= 0; c -= 1) {
    const d = l[c], {
      isExternal: p,
      modifiers: m,
      hasImportantModifier: g,
      baseClassName: h,
      maybePostfixModifierPosition: v
    } = r(d);
    if (p) {
      u = d + (u.length > 0 ? " " + u : u);
      continue;
    }
    let _ = !!v, C = n(_ ? h.substring(0, v) : h);
    if (!C) {
      if (!_) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (C = n(h), !C) {
        u = d + (u.length > 0 ? " " + u : u);
        continue;
      }
      _ = !1;
    }
    const x = i(m).join(":"), L = g ? x + Lt : x, A = L + C;
    if (o.includes(A))
      continue;
    o.push(A);
    const E = s(C, _);
    for (let R = 0; R < E.length; ++R) {
      const S = E[R];
      o.push(L + S);
    }
    u = d + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Fs() {
  let t = 0, e, r, n = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (r = ln(e)) && (n && (n += " "), n += r);
  return n;
}
const ln = (t) => {
  if (typeof t == "string")
    return t;
  let e, r = "";
  for (let n = 0; n < t.length; n++)
    t[n] && (e = ln(t[n])) && (r && (r += " "), r += e);
  return r;
};
function Bs(t, ...e) {
  let r, n, s, i = o;
  function o(u) {
    const c = e.reduce((d, p) => p(d), t());
    return r = Ts(c), n = r.cache.get, s = r.cache.set, i = l, l(u);
  }
  function l(u) {
    const c = n(u);
    if (c)
      return c;
    const d = Ds(u, r);
    return s(u, d), d;
  }
  return function() {
    return i(Fs.apply(null, arguments));
  };
}
const Z = (t) => {
  const e = (r) => r[t] || [];
  return e.isThemeGetter = !0, e;
}, cn = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, un = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ws = /^\d+\/\d+$/, Ks = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Hs = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Gs = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Vs = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Us = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, je = (t) => Ws.test(t), W = (t) => !!t && !Number.isNaN(Number(t)), de = (t) => !!t && Number.isInteger(Number(t)), yt = (t) => t.endsWith("%") && W(t.slice(0, -1)), ce = (t) => Ks.test(t), qs = () => !0, Ys = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Hs.test(t) && !Gs.test(t)
), dn = () => !1, Js = (t) => Vs.test(t), Zs = (t) => Us.test(t), Xs = (t) => !z(t) && !O(t), Qs = (t) => Ie(t, hn, dn), z = (t) => cn.test(t), ge = (t) => Ie(t, gn, Ys), bt = (t) => Ie(t, si, W), kr = (t) => Ie(t, pn, dn), ei = (t) => Ie(t, fn, Zs), Je = (t) => Ie(t, mn, Js), O = (t) => un.test(t), $e = (t) => Le(t, gn), ti = (t) => Le(t, ii), wr = (t) => Le(t, pn), ri = (t) => Le(t, hn), ni = (t) => Le(t, fn), Ze = (t) => Le(t, mn, !0), Ie = (t, e, r) => {
  const n = cn.exec(t);
  return n ? n[1] ? e(n[1]) : r(n[2]) : !1;
}, Le = (t, e, r = !1) => {
  const n = un.exec(t);
  return n ? n[1] ? e(n[1]) : r : !1;
}, pn = (t) => t === "position" || t === "percentage", fn = (t) => t === "image" || t === "url", hn = (t) => t === "length" || t === "size" || t === "bg-size", gn = (t) => t === "length", si = (t) => t === "number", ii = (t) => t === "family-name", mn = (t) => t === "shadow", ai = () => {
  const t = Z("color"), e = Z("font"), r = Z("text"), n = Z("font-weight"), s = Z("tracking"), i = Z("leading"), o = Z("breakpoint"), l = Z("container"), u = Z("spacing"), c = Z("radius"), d = Z("shadow"), p = Z("inset-shadow"), m = Z("text-shadow"), g = Z("drop-shadow"), h = Z("blur"), v = Z("perspective"), _ = Z("aspect"), C = Z("ease"), x = Z("animate"), L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], A = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], E = () => [...A(), O, z], R = () => ["auto", "hidden", "clip", "visible", "scroll"], S = () => ["auto", "contain", "none"], k = () => [O, z, u], I = () => [je, "full", "auto", ...k()], w = () => [de, "none", "subgrid", O, z], K = () => ["auto", {
    span: ["full", de, O, z]
  }, de, O, z], U = () => [de, "auto", O, z], N = () => ["auto", "min", "max", "fr", O, z], B = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], J = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], V = () => ["auto", ...k()], Y = () => [je, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...k()], M = () => [t, O, z], ne = () => [...A(), wr, kr, {
    position: [O, z]
  }], b = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], T = () => ["auto", "cover", "contain", ri, Qs, {
    size: [O, z]
  }], y = () => [yt, $e, ge], j = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    O,
    z
  ], $ = () => ["", W, $e, ge], P = () => ["solid", "dashed", "dotted", "double"], H = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], D = () => [W, yt, wr, kr], G = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    O,
    z
  ], q = () => ["none", W, O, z], se = () => ["none", W, O, z], Re = () => [W, O, z], qe = () => [je, "full", ...k()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ce],
      breakpoint: [ce],
      color: [qs],
      container: [ce],
      "drop-shadow": [ce],
      ease: ["in", "out", "in-out"],
      font: [Xs],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ce],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ce],
      shadow: [ce],
      spacing: ["px", W],
      text: [ce],
      "text-shadow": [ce],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", je, z, O, _]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [W, z, O, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": L()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": L()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: E()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: R()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": R()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": R()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: S()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": S()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": S()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [de, "auto", O, z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [je, "full", "auto", l, ...k()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [W, je, "auto", "initial", "none", z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", W, O, z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", W, O, z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [de, "first", "last", "none", O, z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": w()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: K()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": U()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": U()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": w()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: K()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": U()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": U()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": N()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": N()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: k()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": k()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": k()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...B(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...J(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...J()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...B()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...J(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...J(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": B()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...J(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...J()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: k()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: k()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: k()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: k()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: k()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: k()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: k()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: k()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: k()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: V()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: V()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: V()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: V()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: V()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: V()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: V()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: V()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: V()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": k()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": k()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          l,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          l,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, $e, ge]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [n, O, bt]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", yt, z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ti, z, e]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, O, z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [W, "none", O, bt]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...k()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O, z]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", O, z]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: M()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: M()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...P(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [W, "from-font", "auto", O, ge]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: M()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [W, "auto", O, z]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O, z]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", O, z]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: ne()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: b()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: T()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, de, O, z],
          radial: ["", O, z],
          conic: [de, O, z]
        }, ni, ei]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: M()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: y()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: y()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: y()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: M()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: M()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: M()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: j()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": j()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": j()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": j()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": j()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": j()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": j()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": j()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": j()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": j()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": j()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": j()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": j()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": j()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": j()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: $()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": $()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": $()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": $()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": $()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": $()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": $()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": $()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": $()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": $()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": $()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...P(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...P(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: M()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": M()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": M()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": M()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": M()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": M()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": M()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": M()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": M()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: M()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...P(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [W, O, z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", W, $e, ge]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: M()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          d,
          Ze,
          Je
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: M()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", p, Ze, Je]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": M()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: $()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: M()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [W, ge]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": M()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": $()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": M()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", m, Ze, Je]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": M()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [W, O, z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...H(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": H()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [W]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": D()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": M()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": M()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": D()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": M()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": M()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": D()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": M()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": M()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": D()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": M()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": M()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": D()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": M()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": M()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": D()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": M()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": M()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": D()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": M()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": M()
      }],
      "mask-image-radial": [{
        "mask-radial": [O, z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": D()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": M()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": M()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": A()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [W]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": D()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": M()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": M()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: ne()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: b()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: T()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", O, z]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          O,
          z
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: G()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [W, O, z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [W, O, z]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          g,
          Ze,
          Je
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": M()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", W, O, z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [W, O, z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", W, O, z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [W, O, z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", W, O, z]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          O,
          z
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": G()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [W, O, z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [W, O, z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", W, O, z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [W, O, z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", W, O, z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [W, O, z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [W, O, z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", W, O, z]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": k()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": k()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": k()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", O, z]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [W, "initial", O, z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", C, O, z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [W, O, z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, O, z]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [v, O, z]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": E()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: se()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": se()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": se()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": se()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: Re()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Re()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Re()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [O, z, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: E()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: qe()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": qe()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": qe()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": qe()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: M()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: M()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O, z]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", O, z]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...M()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [W, $e, ge, bt]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...M()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, oi = /* @__PURE__ */ Bs(ai);
function Q(...t) {
  return oi(an(t));
}
function ot(t, e) {
  if (t) {
    const r = t.split(":");
    if (r.length >= 3 && r[0] && r[2] !== "443")
      return t;
  }
  return e;
}
const li = Cs(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none data-[state=open]:bg-secondary/50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary/50",
        link: "underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-[#8220ff] to-[#a020f0] text-white hover:shadow-xl hover:scale-105 transition-all duration-300 border border-purple-300"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "w-10 h-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), me = f.forwardRef(
  ({ className: t, variant: e, size: r, ...n }, s) => /* @__PURE__ */ a.jsx("button", { className: Q(li({ variant: e, size: r, className: t })), ref: s, ...n })
);
me.displayName = "Button";
const X = ({ href: t, children: e, className: r = "", target: n = "_self", rel: s = "noopener noreferrer", onClick: i }) => {
  const o = (l) => {
    n !== "_blank" && (l.preventDefault(), window.location.href = t), i && i(l);
  };
  return /* @__PURE__ */ a.jsx(
    "a",
    {
      href: t,
      className: r,
      target: n,
      rel: s,
      onClick: o,
      "aria-label": typeof e == "string" ? e : void 0,
      children: e
    }
  );
}, ci = (t, e, r, n) => {
  var i, o, l, u;
  const s = [r, {
    code: e,
    ...n || {}
  }];
  if ((o = (i = t == null ? void 0 : t.services) == null ? void 0 : i.logger) != null && o.forward)
    return t.services.logger.forward(s, "warn", "react-i18next::", !0);
  xe(s[0]) && (s[0] = `react-i18next:: ${s[0]}`), (u = (l = t == null ? void 0 : t.services) == null ? void 0 : l.logger) != null && u.warn ? t.services.logger.warn(...s) : console != null && console.warn && console.warn(...s);
}, jr = {}, Mt = (t, e, r, n) => {
  xe(r) && jr[r] || (xe(r) && (jr[r] = /* @__PURE__ */ new Date()), ci(t, e, r, n));
}, vn = (t, e) => () => {
  if (t.isInitialized)
    e();
  else {
    const r = () => {
      setTimeout(() => {
        t.off("initialized", r);
      }, 0), e();
    };
    t.on("initialized", r);
  }
}, Tt = (t, e, r) => {
  t.loadNamespaces(e, vn(t, r));
}, Sr = (t, e, r, n) => {
  if (xe(r) && (r = [r]), t.options.preload && t.options.preload.indexOf(e) > -1) return Tt(t, r, n);
  r.forEach((s) => {
    t.options.ns.indexOf(s) < 0 && t.options.ns.push(s);
  }), t.loadLanguages(e, vn(t, n));
}, ui = (t, e, r = {}) => !e.languages || !e.languages.length ? (Mt(e, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: e.languages
}), !0) : e.hasLoadedNamespace(t, {
  lng: r.lng,
  precheck: (n, s) => {
    if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !s(n.isLanguageChangingTo, t)) return !1;
  }
}), xe = (t) => typeof t == "string", di = (t) => typeof t == "object" && t !== null, pi = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, fi = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, hi = (t) => fi[t], gi = (t) => t.replace(pi, hi);
let $t = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: gi
};
const mi = (t = {}) => {
  $t = {
    ...$t,
    ...t
  };
}, vi = () => $t;
let xn;
const xi = (t) => {
  xn = t;
}, yi = () => xn, bi = {
  type: "3rdParty",
  init(t) {
    mi(t.options.react), xi(t);
  }
}, _i = ms();
class ki {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(e) {
    e.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const wi = (t, e) => {
  const r = Ne();
  return ie(() => {
    r.current = t;
  }, [t, e]), r.current;
}, yn = (t, e, r, n) => t.getFixedT(e, r, n), ji = (t, e, r, n) => Be(yn(t, e, r, n), [t, e, r, n]), pt = (t, e = {}) => {
  var A, E, R, S;
  const {
    i18n: r
  } = e, {
    i18n: n,
    defaultNS: s
  } = vs(_i) || {}, i = r || n || yi();
  if (i && !i.reportNamespaces && (i.reportNamespaces = new ki()), !i) {
    Mt(i, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const k = (w, K) => xe(K) ? K : di(K) && xe(K.defaultValue) ? K.defaultValue : Array.isArray(w) ? w[w.length - 1] : w, I = [k, {}, !1];
    return I.t = k, I.i18n = {}, I.ready = !1, I;
  }
  (A = i.options.react) != null && A.wait && Mt(i, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const o = {
    ...vi(),
    ...i.options.react,
    ...e
  }, {
    useSuspense: l,
    keyPrefix: u
  } = o;
  let c = s || ((E = i.options) == null ? void 0 : E.defaultNS);
  c = xe(c) ? [c] : c || ["translation"], (S = (R = i.reportNamespaces).addUsedNamespaces) == null || S.call(R, c);
  const d = (i.isInitialized || i.initializedStoreOnce) && c.every((k) => ui(k, i, o)), p = ji(i, e.lng || null, o.nsMode === "fallback" ? c : c[0], u), m = () => p, g = () => yn(i, e.lng || null, o.nsMode === "fallback" ? c : c[0], u), [h, v] = re(m);
  let _ = c.join();
  e.lng && (_ = `${e.lng}${_}`);
  const C = wi(_), x = Ne(!0);
  ie(() => {
    const {
      bindI18n: k,
      bindI18nStore: I
    } = o;
    x.current = !0, !d && !l && (e.lng ? Sr(i, e.lng, c, () => {
      x.current && v(g);
    }) : Tt(i, c, () => {
      x.current && v(g);
    })), d && C && C !== _ && x.current && v(g);
    const w = () => {
      x.current && v(g);
    };
    return k && (i == null || i.on(k, w)), I && (i == null || i.store.on(I, w)), () => {
      x.current = !1, i && k && (k == null || k.split(" ").forEach((K) => i.off(K, w))), I && i && I.split(" ").forEach((K) => i.store.off(K, w));
    };
  }, [i, _]), ie(() => {
    x.current && d && v(m);
  }, [i, u, d]);
  const L = [h, i, d];
  if (L.t = h, L.i18n = i, L.ready = d, d || !d && !l) return L;
  throw new Promise((k) => {
    e.lng ? Sr(i, e.lng, c, () => k()) : Tt(i, c, () => k());
  });
}, F = (t) => typeof t == "string", De = () => {
  let t, e;
  const r = new Promise((n, s) => {
    t = n, e = s;
  });
  return r.resolve = t, r.reject = e, r;
}, Pr = (t) => t == null ? "" : "" + t, Si = (t, e, r) => {
  t.forEach((n) => {
    e[n] && (r[n] = e[n]);
  });
}, Pi = /###/g, Cr = (t) => t && t.indexOf("###") > -1 ? t.replace(Pi, ".") : t, Er = (t) => !t || F(t), We = (t, e, r) => {
  const n = F(e) ? e.split(".") : e;
  let s = 0;
  for (; s < n.length - 1; ) {
    if (Er(t)) return {};
    const i = Cr(n[s]);
    !t[i] && r && (t[i] = new r()), Object.prototype.hasOwnProperty.call(t, i) ? t = t[i] : t = {}, ++s;
  }
  return Er(t) ? {} : {
    obj: t,
    k: Cr(n[s])
  };
}, zr = (t, e, r) => {
  const {
    obj: n,
    k: s
  } = We(t, e, Object);
  if (n !== void 0 || e.length === 1) {
    n[s] = r;
    return;
  }
  let i = e[e.length - 1], o = e.slice(0, e.length - 1), l = We(t, o, Object);
  for (; l.obj === void 0 && o.length; )
    i = `${o[o.length - 1]}.${i}`, o = o.slice(0, o.length - 1), l = We(t, o, Object), l != null && l.obj && typeof l.obj[`${l.k}.${i}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${i}`] = r;
}, Ci = (t, e, r, n) => {
  const {
    obj: s,
    k: i
  } = We(t, e, Object);
  s[i] = s[i] || [], s[i].push(r);
}, lt = (t, e) => {
  const {
    obj: r,
    k: n
  } = We(t, e);
  if (r && Object.prototype.hasOwnProperty.call(r, n))
    return r[n];
}, Ei = (t, e, r) => {
  const n = lt(t, r);
  return n !== void 0 ? n : lt(e, r);
}, bn = (t, e, r) => {
  for (const n in e)
    n !== "__proto__" && n !== "constructor" && (n in t ? F(t[n]) || t[n] instanceof String || F(e[n]) || e[n] instanceof String ? r && (t[n] = e[n]) : bn(t[n], e[n], r) : t[n] = e[n]);
  return t;
}, Se = (t) => t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var zi = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Oi = (t) => F(t) ? t.replace(/[&<>"'\/]/g, (e) => zi[e]) : t;
class Ai {
  constructor(e) {
    this.capacity = e, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(e) {
    const r = this.regExpMap.get(e);
    if (r !== void 0)
      return r;
    const n = new RegExp(e);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n;
  }
}
const Ni = [" ", ",", "?", "!", ";"], Ii = new Ai(20), Li = (t, e, r) => {
  e = e || "", r = r || "";
  const n = Ni.filter((o) => e.indexOf(o) < 0 && r.indexOf(o) < 0);
  if (n.length === 0) return !0;
  const s = Ii.getRegExp(`(${n.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let i = !s.test(t);
  if (!i) {
    const o = t.indexOf(r);
    o > 0 && !s.test(t.substring(0, o)) && (i = !0);
  }
  return i;
}, Dt = (t, e, r = ".") => {
  if (!t) return;
  if (t[e])
    return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
  const n = e.split(r);
  let s = t;
  for (let i = 0; i < n.length; ) {
    if (!s || typeof s != "object")
      return;
    let o, l = "";
    for (let u = i; u < n.length; ++u)
      if (u !== i && (l += r), l += n[u], o = s[l], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && u < n.length - 1)
          continue;
        i += u - i + 1;
        break;
      }
    s = o;
  }
  return s;
}, Ke = (t) => t == null ? void 0 : t.replace("_", "-"), Ri = {
  type: "logger",
  log(t) {
    this.output("log", t);
  },
  warn(t) {
    this.output("warn", t);
  },
  error(t) {
    this.output("error", t);
  },
  output(t, e) {
    var r, n;
    (n = (r = console == null ? void 0 : console[t]) == null ? void 0 : r.apply) == null || n.call(r, console, e);
  }
};
class ct {
  constructor(e, r = {}) {
    this.init(e, r);
  }
  init(e, r = {}) {
    this.prefix = r.prefix || "i18next:", this.logger = e || Ri, this.options = r, this.debug = r.debug;
  }
  log(...e) {
    return this.forward(e, "log", "", !0);
  }
  warn(...e) {
    return this.forward(e, "warn", "", !0);
  }
  error(...e) {
    return this.forward(e, "error", "");
  }
  deprecate(...e) {
    return this.forward(e, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(e, r, n, s) {
    return s && !this.debug ? null : (F(e[0]) && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[r](e));
  }
  create(e) {
    return new ct(this.logger, {
      prefix: `${this.prefix}:${e}:`,
      ...this.options
    });
  }
  clone(e) {
    return e = e || this.options, e.prefix = e.prefix || this.prefix, new ct(this.logger, e);
  }
}
var le = new ct();
class ft {
  constructor() {
    this.observers = {};
  }
  on(e, r) {
    return e.split(" ").forEach((n) => {
      this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
      const s = this.observers[n].get(r) || 0;
      this.observers[n].set(r, s + 1);
    }), this;
  }
  off(e, r) {
    if (this.observers[e]) {
      if (!r) {
        delete this.observers[e];
        return;
      }
      this.observers[e].delete(r);
    }
  }
  emit(e, ...r) {
    this.observers[e] && Array.from(this.observers[e].entries()).forEach(([s, i]) => {
      for (let o = 0; o < i; o++)
        s(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([s, i]) => {
      for (let o = 0; o < i; o++)
        s.apply(s, [e, ...r]);
    });
  }
}
class Or extends ft {
  constructor(e, r = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = e || {}, this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(e) {
    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
  }
  removeNamespaces(e) {
    const r = this.options.ns.indexOf(e);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(e, r, n, s = {}) {
    var c, d;
    const i = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, o = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    e.indexOf(".") > -1 ? l = e.split(".") : (l = [e, r], n && (Array.isArray(n) ? l.push(...n) : F(n) && i ? l.push(...n.split(i)) : l.push(n)));
    const u = lt(this.data, l);
    return !u && !r && !n && e.indexOf(".") > -1 && (e = l[0], r = l[1], n = l.slice(2).join(".")), u || !o || !F(n) ? u : Dt((d = (c = this.data) == null ? void 0 : c[e]) == null ? void 0 : d[r], n, i);
  }
  addResource(e, r, n, s, i = {
    silent: !1
  }) {
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let l = [e, r];
    n && (l = l.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (l = e.split("."), s = r, r = l[1]), this.addNamespaces(r), zr(this.data, l, s), i.silent || this.emit("added", e, r, n, s);
  }
  addResources(e, r, n, s = {
    silent: !1
  }) {
    for (const i in n)
      (F(n[i]) || Array.isArray(n[i])) && this.addResource(e, r, i, n[i], {
        silent: !0
      });
    s.silent || this.emit("added", e, r, n);
  }
  addResourceBundle(e, r, n, s, i, o = {
    silent: !1,
    skipCopy: !1
  }) {
    let l = [e, r];
    e.indexOf(".") > -1 && (l = e.split("."), s = n, n = r, r = l[1]), this.addNamespaces(r);
    let u = lt(this.data, l) || {};
    o.skipCopy || (n = JSON.parse(JSON.stringify(n))), s ? bn(u, n, i) : u = {
      ...u,
      ...n
    }, zr(this.data, l, u), o.silent || this.emit("added", e, r, n);
  }
  removeResourceBundle(e, r) {
    this.hasResourceBundle(e, r) && delete this.data[e][r], this.removeNamespaces(r), this.emit("removed", e, r);
  }
  hasResourceBundle(e, r) {
    return this.getResource(e, r) !== void 0;
  }
  getResourceBundle(e, r) {
    return r || (r = this.options.defaultNS), this.getResource(e, r);
  }
  getDataByLanguage(e) {
    return this.data[e];
  }
  hasLanguageSomeTranslations(e) {
    const r = this.getDataByLanguage(e);
    return !!(r && Object.keys(r) || []).find((s) => r[s] && Object.keys(r[s]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var _n = {
  processors: {},
  addPostProcessor(t) {
    this.processors[t.name] = t;
  },
  handle(t, e, r, n, s) {
    return t.forEach((i) => {
      var o;
      e = ((o = this.processors[i]) == null ? void 0 : o.process(e, r, n, s)) ?? e;
    }), e;
  }
};
const kn = Symbol("i18next/PATH_KEY");
function Mi() {
  const t = [], e = /* @__PURE__ */ Object.create(null);
  let r;
  return e.get = (n, s) => {
    var i;
    return (i = r == null ? void 0 : r.revoke) == null || i.call(r), s === kn ? t : (t.push(s), r = Proxy.revocable(n, e), r.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), e).proxy;
}
function Ft(t, e) {
  const {
    [kn]: r
  } = t(Mi());
  return r.join((e == null ? void 0 : e.keySeparator) ?? ".");
}
const Ar = {}, Nr = (t) => !F(t) && typeof t != "boolean" && typeof t != "number";
class ut extends ft {
  constructor(e, r = {}) {
    super(), Si(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = le.create("translator");
  }
  changeLanguage(e) {
    e && (this.language = e);
  }
  exists(e, r = {
    interpolation: {}
  }) {
    const n = {
      ...r
    };
    if (e == null) return !1;
    const s = this.resolve(e, n);
    return (s == null ? void 0 : s.res) !== void 0;
  }
  extractFromKey(e, r) {
    let n = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const s = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let i = r.ns || this.options.defaultNS || [];
    const o = n && e.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !Li(e, n, s);
    if (o && !l) {
      const u = e.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: e,
          namespaces: F(i) ? [i] : i
        };
      const c = e.split(n);
      (n !== s || n === s && this.options.ns.indexOf(c[0]) > -1) && (i = c.shift()), e = c.join(s);
    }
    return {
      key: e,
      namespaces: F(i) ? [i] : i
    };
  }
  translate(e, r, n) {
    let s = typeof r == "object" ? {
      ...r
    } : r;
    if (typeof s != "object" && this.options.overloadTranslationOptionHandler && (s = this.options.overloadTranslationOptionHandler(arguments)), typeof s == "object" && (s = {
      ...s
    }), s || (s = {}), e == null) return "";
    typeof e == "function" && (e = Ft(e, {
      ...this.options,
      ...s
    })), Array.isArray(e) || (e = [String(e)]);
    const i = s.returnDetails !== void 0 ? s.returnDetails : this.options.returnDetails, o = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, {
      key: l,
      namespaces: u
    } = this.extractFromKey(e[e.length - 1], s), c = u[u.length - 1];
    let d = s.nsSeparator !== void 0 ? s.nsSeparator : this.options.nsSeparator;
    d === void 0 && (d = ":");
    const p = s.lng || this.language, m = s.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((p == null ? void 0 : p.toLowerCase()) === "cimode")
      return m ? i ? {
        res: `${c}${d}${l}`,
        usedKey: l,
        exactUsedKey: l,
        usedLng: p,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(s)
      } : `${c}${d}${l}` : i ? {
        res: l,
        usedKey: l,
        exactUsedKey: l,
        usedLng: p,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(s)
      } : l;
    const g = this.resolve(e, s);
    let h = g == null ? void 0 : g.res;
    const v = (g == null ? void 0 : g.usedKey) || l, _ = (g == null ? void 0 : g.exactUsedKey) || l, C = ["[object Number]", "[object Function]", "[object RegExp]"], x = s.joinArrays !== void 0 ? s.joinArrays : this.options.joinArrays, L = !this.i18nFormat || this.i18nFormat.handleAsObject, A = s.count !== void 0 && !F(s.count), E = ut.hasDefaultValue(s), R = A ? this.pluralResolver.getSuffix(p, s.count, s) : "", S = s.ordinal && A ? this.pluralResolver.getSuffix(p, s.count, {
      ordinal: !1
    }) : "", k = A && !s.ordinal && s.count === 0, I = k && s[`defaultValue${this.options.pluralSeparator}zero`] || s[`defaultValue${R}`] || s[`defaultValue${S}`] || s.defaultValue;
    let w = h;
    L && !h && E && (w = I);
    const K = Nr(w), U = Object.prototype.toString.apply(w);
    if (L && w && K && C.indexOf(U) < 0 && !(F(x) && Array.isArray(w))) {
      if (!s.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const N = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, w, {
          ...s,
          ns: u
        }) : `key '${l} (${this.language})' returned an object instead of string.`;
        return i ? (g.res = N, g.usedParams = this.getUsedParamsDetails(s), g) : N;
      }
      if (o) {
        const N = Array.isArray(w), B = N ? [] : {}, J = N ? _ : v;
        for (const V in w)
          if (Object.prototype.hasOwnProperty.call(w, V)) {
            const Y = `${J}${o}${V}`;
            E && !h ? B[V] = this.translate(Y, {
              ...s,
              defaultValue: Nr(I) ? I[V] : void 0,
              joinArrays: !1,
              ns: u
            }) : B[V] = this.translate(Y, {
              ...s,
              joinArrays: !1,
              ns: u
            }), B[V] === Y && (B[V] = w[V]);
          }
        h = B;
      }
    } else if (L && F(x) && Array.isArray(h))
      h = h.join(x), h && (h = this.extendTranslation(h, e, s, n));
    else {
      let N = !1, B = !1;
      !this.isValidLookup(h) && E && (N = !0, h = I), this.isValidLookup(h) || (B = !0, h = l);
      const V = (s.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && B ? void 0 : h, Y = E && I !== h && this.options.updateMissing;
      if (B || N || Y) {
        if (this.logger.log(Y ? "updateKey" : "missingKey", p, c, l, Y ? I : h), o) {
          const T = this.resolve(l, {
            ...s,
            keySeparator: !1
          });
          T && T.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let M = [];
        const ne = this.languageUtils.getFallbackCodes(this.options.fallbackLng, s.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && ne && ne[0])
          for (let T = 0; T < ne.length; T++)
            M.push(ne[T]);
        else this.options.saveMissingTo === "all" ? M = this.languageUtils.toResolveHierarchy(s.lng || this.language) : M.push(s.lng || this.language);
        const b = (T, y, j) => {
          var P;
          const $ = E && j !== h ? j : V;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(T, c, y, $, Y, s) : (P = this.backendConnector) != null && P.saveMissing && this.backendConnector.saveMissing(T, c, y, $, Y, s), this.emit("missingKey", T, c, y, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && A ? M.forEach((T) => {
          const y = this.pluralResolver.getSuffixes(T, s);
          k && s[`defaultValue${this.options.pluralSeparator}zero`] && y.indexOf(`${this.options.pluralSeparator}zero`) < 0 && y.push(`${this.options.pluralSeparator}zero`), y.forEach((j) => {
            b([T], l + j, s[`defaultValue${j}`] || I);
          });
        }) : b(M, l, I));
      }
      h = this.extendTranslation(h, e, s, g, n), B && h === l && this.options.appendNamespaceToMissingKey && (h = `${c}${d}${l}`), (B || N) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}${d}${l}` : l, N ? h : void 0, s));
    }
    return i ? (g.res = h, g.usedParams = this.getUsedParamsDetails(s), g) : h;
  }
  extendTranslation(e, r, n, s, i) {
    var u, c;
    if ((u = this.i18nFormat) != null && u.parse)
      e = this.i18nFormat.parse(e, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
        resolved: s
      });
    else if (!n.skipInterpolation) {
      n.interpolation && this.interpolator.init({
        ...n,
        interpolation: {
          ...this.options.interpolation,
          ...n.interpolation
        }
      });
      const d = F(e) && (((c = n == null ? void 0 : n.interpolation) == null ? void 0 : c.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let p;
      if (d) {
        const g = e.match(this.interpolator.nestingRegexp);
        p = g && g.length;
      }
      let m = n.replace && !F(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (m = {
        ...this.options.interpolation.defaultVariables,
        ...m
      }), e = this.interpolator.interpolate(e, m, n.lng || this.language || s.usedLng, n), d) {
        const g = e.match(this.interpolator.nestingRegexp), h = g && g.length;
        p < h && (n.nest = !1);
      }
      !n.lng && s && s.res && (n.lng = this.language || s.usedLng), n.nest !== !1 && (e = this.interpolator.nest(e, (...g) => (i == null ? void 0 : i[0]) === g[0] && !n.context ? (this.logger.warn(`It seems you are nesting recursively key: ${g[0]} in key: ${r[0]}`), null) : this.translate(...g, r), n)), n.interpolation && this.interpolator.reset();
    }
    const o = n.postProcess || this.options.postProcess, l = F(o) ? [o] : o;
    return e != null && (l != null && l.length) && n.applyPostProcessor !== !1 && (e = _n.handle(l, e, r, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), e;
  }
  resolve(e, r = {}) {
    let n, s, i, o, l;
    return F(e) && (e = [e]), e.forEach((u) => {
      if (this.isValidLookup(n)) return;
      const c = this.extractFromKey(u, r), d = c.key;
      s = d;
      let p = c.namespaces;
      this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
      const m = r.count !== void 0 && !F(r.count), g = m && !r.ordinal && r.count === 0, h = r.context !== void 0 && (F(r.context) || typeof r.context == "number") && r.context !== "", v = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
      p.forEach((_) => {
        var C, x;
        this.isValidLookup(n) || (l = _, !Ar[`${v[0]}-${_}`] && ((C = this.utils) != null && C.hasLoadedNamespace) && !((x = this.utils) != null && x.hasLoadedNamespace(l)) && (Ar[`${v[0]}-${_}`] = !0, this.logger.warn(`key "${s}" for languages "${v.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), v.forEach((L) => {
          var R;
          if (this.isValidLookup(n)) return;
          o = L;
          const A = [d];
          if ((R = this.i18nFormat) != null && R.addLookupKeys)
            this.i18nFormat.addLookupKeys(A, d, L, _, r);
          else {
            let S;
            m && (S = this.pluralResolver.getSuffix(L, r.count, r));
            const k = `${this.options.pluralSeparator}zero`, I = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (m && (r.ordinal && S.indexOf(I) === 0 && A.push(d + S.replace(I, this.options.pluralSeparator)), A.push(d + S), g && A.push(d + k)), h) {
              const w = `${d}${this.options.contextSeparator || "_"}${r.context}`;
              A.push(w), m && (r.ordinal && S.indexOf(I) === 0 && A.push(w + S.replace(I, this.options.pluralSeparator)), A.push(w + S), g && A.push(w + k));
            }
          }
          let E;
          for (; E = A.pop(); )
            this.isValidLookup(n) || (i = E, n = this.getResource(L, _, E, r));
        }));
      });
    }), {
      res: n,
      usedKey: s,
      exactUsedKey: i,
      usedLng: o,
      usedNS: l
    };
  }
  isValidLookup(e) {
    return e !== void 0 && !(!this.options.returnNull && e === null) && !(!this.options.returnEmptyString && e === "");
  }
  getResource(e, r, n, s = {}) {
    var i;
    return (i = this.i18nFormat) != null && i.getResource ? this.i18nFormat.getResource(e, r, n, s) : this.resourceStore.getResource(e, r, n, s);
  }
  getUsedParamsDetails(e = {}) {
    const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = e.replace && !F(e.replace);
    let s = n ? e.replace : e;
    if (n && typeof e.count < "u" && (s.count = e.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !n) {
      s = {
        ...s
      };
      for (const i of r)
        delete s[i];
    }
    return s;
  }
  static hasDefaultValue(e) {
    const r = "defaultValue";
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n) && r === n.substring(0, r.length) && e[n] !== void 0)
        return !0;
    return !1;
  }
}
class Ir {
  constructor(e) {
    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = le.create("languageUtils");
  }
  getScriptPartFromCode(e) {
    if (e = Ke(e), !e || e.indexOf("-") < 0) return null;
    const r = e.split("-");
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"));
  }
  getLanguagePartFromCode(e) {
    if (e = Ke(e), !e || e.indexOf("-") < 0) return e;
    const r = e.split("-");
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(e) {
    if (F(e) && e.indexOf("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(e)[0];
      } catch {
      }
      return r && this.options.lowerCaseLng && (r = r.toLowerCase()), r || (this.options.lowerCaseLng ? e.toLowerCase() : e);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
  }
  isSupportedCode(e) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1;
  }
  getBestMatchFromCodes(e) {
    if (!e) return null;
    let r;
    return e.forEach((n) => {
      if (r) return;
      const s = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(s)) && (r = s);
    }), !r && this.options.supportedLngs && e.forEach((n) => {
      if (r) return;
      const s = this.getScriptPartFromCode(n);
      if (this.isSupportedCode(s)) return r = s;
      const i = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(i)) return r = i;
      r = this.options.supportedLngs.find((o) => {
        if (o === i) return o;
        if (!(o.indexOf("-") < 0 && i.indexOf("-") < 0) && (o.indexOf("-") > 0 && i.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === i || o.indexOf(i) === 0 && i.length > 1))
          return o;
      });
    }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r;
  }
  getFallbackCodes(e, r) {
    if (!e) return [];
    if (typeof e == "function" && (e = e(r)), F(e) && (e = [e]), Array.isArray(e)) return e;
    if (!r) return e.default || [];
    let n = e[r];
    return n || (n = e[this.getScriptPartFromCode(r)]), n || (n = e[this.formatLanguageCode(r)]), n || (n = e[this.getLanguagePartFromCode(r)]), n || (n = e.default), n || [];
  }
  toResolveHierarchy(e, r) {
    const n = this.getFallbackCodes((r === !1 ? [] : r) || this.options.fallbackLng || [], e), s = [], i = (o) => {
      o && (this.isSupportedCode(o) ? s.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return F(e) && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && i(this.formatLanguageCode(e)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && i(this.getScriptPartFromCode(e)), this.options.load !== "currentOnly" && i(this.getLanguagePartFromCode(e))) : F(e) && i(this.formatLanguageCode(e)), n.forEach((o) => {
      s.indexOf(o) < 0 && i(this.formatLanguageCode(o));
    }), s;
  }
}
const Lr = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Rr = {
  select: (t) => t === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Ti {
  constructor(e, r = {}) {
    this.languageUtils = e, this.options = r, this.logger = le.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(e, r) {
    this.rules[e] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(e, r = {}) {
    const n = Ke(e === "dev" ? "en" : e), s = r.ordinal ? "ordinal" : "cardinal", i = JSON.stringify({
      cleanedCode: n,
      type: s
    });
    if (i in this.pluralRulesCache)
      return this.pluralRulesCache[i];
    let o;
    try {
      o = new Intl.PluralRules(n, {
        type: s
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Rr;
      if (!e.match(/-|_/)) return Rr;
      const u = this.languageUtils.getLanguagePartFromCode(e);
      o = this.getRule(u, r);
    }
    return this.pluralRulesCache[i] = o, o;
  }
  needsPlural(e, r = {}) {
    let n = this.getRule(e, r);
    return n || (n = this.getRule("dev", r)), (n == null ? void 0 : n.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(e, r, n = {}) {
    return this.getSuffixes(e, n).map((s) => `${r}${s}`);
  }
  getSuffixes(e, r = {}) {
    let n = this.getRule(e, r);
    return n || (n = this.getRule("dev", r)), n ? n.resolvedOptions().pluralCategories.sort((s, i) => Lr[s] - Lr[i]).map((s) => `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : [];
  }
  getSuffix(e, r, n = {}) {
    const s = this.getRule(e, n);
    return s ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(r)}` : (this.logger.warn(`no plural rule found for: ${e}`), this.getSuffix("dev", r, n));
  }
}
const Mr = (t, e, r, n = ".", s = !0) => {
  let i = Ei(t, e, r);
  return !i && s && F(r) && (i = Dt(t, r, n), i === void 0 && (i = Dt(e, r, n))), i;
}, _t = (t) => t.replace(/\$/g, "$$$$");
class $i {
  constructor(e = {}) {
    var r;
    this.logger = le.create("interpolator"), this.options = e, this.format = ((r = e == null ? void 0 : e.interpolation) == null ? void 0 : r.format) || ((n) => n), this.init(e);
  }
  init(e = {}) {
    e.interpolation || (e.interpolation = {
      escapeValue: !0
    });
    const {
      escape: r,
      escapeValue: n,
      useRawValueToEscape: s,
      prefix: i,
      prefixEscaped: o,
      suffix: l,
      suffixEscaped: u,
      formatSeparator: c,
      unescapeSuffix: d,
      unescapePrefix: p,
      nestingPrefix: m,
      nestingPrefixEscaped: g,
      nestingSuffix: h,
      nestingSuffixEscaped: v,
      nestingOptionsSeparator: _,
      maxReplaces: C,
      alwaysFormat: x
    } = e.interpolation;
    this.escape = r !== void 0 ? r : Oi, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = i ? Se(i) : o || "{{", this.suffix = l ? Se(l) : u || "}}", this.formatSeparator = c || ",", this.unescapePrefix = d ? "" : p || "-", this.unescapeSuffix = this.unescapePrefix ? "" : d || "", this.nestingPrefix = m ? Se(m) : g || Se("$t("), this.nestingSuffix = h ? Se(h) : v || Se(")"), this.nestingOptionsSeparator = _ || ",", this.maxReplaces = C || 1e3, this.alwaysFormat = x !== void 0 ? x : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const e = (r, n) => (r == null ? void 0 : r.source) === n ? (r.lastIndex = 0, r) : new RegExp(n, "g");
    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(e, r, n, s) {
    var g;
    let i, o, l;
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const x = Mr(r, u, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, n, {
          ...s,
          ...r,
          interpolationkey: h
        }) : x;
      }
      const v = h.split(this.formatSeparator), _ = v.shift().trim(), C = v.join(this.formatSeparator).trim();
      return this.format(Mr(r, u, _, this.options.keySeparator, this.options.ignoreJSONStructure), C, n, {
        ...s,
        ...r,
        interpolationkey: _
      });
    };
    this.resetRegExp();
    const d = (s == null ? void 0 : s.missingInterpolationHandler) || this.options.missingInterpolationHandler, p = ((g = s == null ? void 0 : s.interpolation) == null ? void 0 : g.skipOnVariables) !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => _t(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? _t(this.escape(h)) : _t(h)
    }].forEach((h) => {
      for (l = 0; i = h.regex.exec(e); ) {
        const v = i[1].trim();
        if (o = c(v), o === void 0)
          if (typeof d == "function") {
            const C = d(e, i, s);
            o = F(C) ? C : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, v))
            o = "";
          else if (p) {
            o = i[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${v} for interpolating ${e}`), o = "";
        else !F(o) && !this.useRawValueToEscape && (o = Pr(o));
        const _ = h.safeValue(o);
        if (e = e.replace(i[0], _), p ? (h.regex.lastIndex += o.length, h.regex.lastIndex -= i[0].length) : h.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), e;
  }
  nest(e, r, n = {}) {
    let s, i, o;
    const l = (u, c) => {
      const d = this.nestingOptionsSeparator;
      if (u.indexOf(d) < 0) return u;
      const p = u.split(new RegExp(`${d}[ ]*{`));
      let m = `{${p[1]}`;
      u = p[0], m = this.interpolate(m, o);
      const g = m.match(/'/g), h = m.match(/"/g);
      (((g == null ? void 0 : g.length) ?? 0) % 2 === 0 && !h || h.length % 2 !== 0) && (m = m.replace(/'/g, '"'));
      try {
        o = JSON.parse(m), c && (o = {
          ...c,
          ...o
        });
      } catch (v) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, v), `${u}${d}${m}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, u;
    };
    for (; s = this.nestingRegexp.exec(e); ) {
      let u = [];
      o = {
        ...n
      }, o = o.replace && !F(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      const c = /{.*}/.test(s[1]) ? s[1].lastIndexOf("}") + 1 : s[1].indexOf(this.formatSeparator);
      if (c !== -1 && (u = s[1].slice(c).split(this.formatSeparator).map((d) => d.trim()).filter(Boolean), s[1] = s[1].slice(0, c)), i = r(l.call(this, s[1].trim(), o), o), i && s[0] === e && !F(i)) return i;
      F(i) || (i = Pr(i)), i || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${e}`), i = ""), u.length && (i = u.reduce((d, p) => this.format(d, p, n.lng, {
        ...n,
        interpolationkey: s[1].trim()
      }), i.trim())), e = e.replace(s[0], i), this.regexp.lastIndex = 0;
    }
    return e;
  }
}
const Di = (t) => {
  let e = t.toLowerCase().trim();
  const r = {};
  if (t.indexOf("(") > -1) {
    const n = t.split("(");
    e = n[0].toLowerCase().trim();
    const s = n[1].substring(0, n[1].length - 1);
    e === "currency" && s.indexOf(":") < 0 ? r.currency || (r.currency = s.trim()) : e === "relativetime" && s.indexOf(":") < 0 ? r.range || (r.range = s.trim()) : s.split(";").forEach((o) => {
      if (o) {
        const [l, ...u] = o.split(":"), c = u.join(":").trim().replace(/^'+|'+$/g, ""), d = l.trim();
        r[d] || (r[d] = c), c === "false" && (r[d] = !1), c === "true" && (r[d] = !0), isNaN(c) || (r[d] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: e,
    formatOptions: r
  };
}, Tr = (t) => {
  const e = {};
  return (r, n, s) => {
    let i = s;
    s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (i = {
      ...i,
      [s.interpolationkey]: void 0
    });
    const o = n + JSON.stringify(i);
    let l = e[o];
    return l || (l = t(Ke(n), s), e[o] = l), l(r);
  };
}, Fi = (t) => (e, r, n) => t(Ke(r), n)(e);
class Bi {
  constructor(e = {}) {
    this.logger = le.create("formatter"), this.options = e, this.init(e);
  }
  init(e, r = {
    interpolation: {}
  }) {
    this.formatSeparator = r.interpolation.formatSeparator || ",";
    const n = r.cacheInBuiltFormats ? Tr : Fi;
    this.formats = {
      number: n((s, i) => {
        const o = new Intl.NumberFormat(s, {
          ...i
        });
        return (l) => o.format(l);
      }),
      currency: n((s, i) => {
        const o = new Intl.NumberFormat(s, {
          ...i,
          style: "currency"
        });
        return (l) => o.format(l);
      }),
      datetime: n((s, i) => {
        const o = new Intl.DateTimeFormat(s, {
          ...i
        });
        return (l) => o.format(l);
      }),
      relativetime: n((s, i) => {
        const o = new Intl.RelativeTimeFormat(s, {
          ...i
        });
        return (l) => o.format(l, i.range || "day");
      }),
      list: n((s, i) => {
        const o = new Intl.ListFormat(s, {
          ...i
        });
        return (l) => o.format(l);
      })
    };
  }
  add(e, r) {
    this.formats[e.toLowerCase().trim()] = r;
  }
  addCached(e, r) {
    this.formats[e.toLowerCase().trim()] = Tr(r);
  }
  format(e, r, n, s = {}) {
    const i = r.split(this.formatSeparator);
    if (i.length > 1 && i[0].indexOf("(") > 1 && i[0].indexOf(")") < 0 && i.find((l) => l.indexOf(")") > -1)) {
      const l = i.findIndex((u) => u.indexOf(")") > -1);
      i[0] = [i[0], ...i.splice(1, l)].join(this.formatSeparator);
    }
    return i.reduce((l, u) => {
      var p;
      const {
        formatName: c,
        formatOptions: d
      } = Di(u);
      if (this.formats[c]) {
        let m = l;
        try {
          const g = ((p = s == null ? void 0 : s.formatParams) == null ? void 0 : p[s.interpolationkey]) || {}, h = g.locale || g.lng || s.locale || s.lng || n;
          m = this.formats[c](l, h, {
            ...d,
            ...s,
            ...g
          });
        } catch (g) {
          this.logger.warn(g);
        }
        return m;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return l;
    }, e);
  }
}
const Wi = (t, e) => {
  t.pending[e] !== void 0 && (delete t.pending[e], t.pendingCount--);
};
class Ki extends ft {
  constructor(e, r, n, s = {}) {
    var i, o;
    super(), this.backend = e, this.store = r, this.services = n, this.languageUtils = n.languageUtils, this.options = s, this.logger = le.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], (o = (i = this.backend) == null ? void 0 : i.init) == null || o.call(i, n, s.backend, s);
  }
  queueLoad(e, r, n, s) {
    const i = {}, o = {}, l = {}, u = {};
    return e.forEach((c) => {
      let d = !0;
      r.forEach((p) => {
        const m = `${c}|${p}`;
        !n.reload && this.store.hasResourceBundle(c, p) ? this.state[m] = 2 : this.state[m] < 0 || (this.state[m] === 1 ? o[m] === void 0 && (o[m] = !0) : (this.state[m] = 1, d = !1, o[m] === void 0 && (o[m] = !0), i[m] === void 0 && (i[m] = !0), u[p] === void 0 && (u[p] = !0)));
      }), d || (l[c] = !0);
    }), (Object.keys(i).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(i),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(u)
    };
  }
  loaded(e, r, n) {
    const s = e.split("|"), i = s[0], o = s[1];
    r && this.emit("failedLoading", i, o, r), !r && n && this.store.addResourceBundle(i, o, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[e] = r ? -1 : 2, r && n && (this.state[e] = 0);
    const l = {};
    this.queue.forEach((u) => {
      Ci(u.loaded, [i], o), Wi(u, e), r && u.errors.push(r), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((c) => {
        l[c] || (l[c] = {});
        const d = u.loaded[c];
        d.length && d.forEach((p) => {
          l[c][p] === void 0 && (l[c][p] = !0);
        });
      }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((u) => !u.done);
  }
  read(e, r, n, s = 0, i = this.retryTimeout, o) {
    if (!e.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: e,
        ns: r,
        fcName: n,
        tried: s,
        wait: i,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const l = (c, d) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const p = this.waitingReads.shift();
        this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
      }
      if (c && d && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, e, r, n, s + 1, i * 2, o);
        }, i);
        return;
      }
      o(c, d);
    }, u = this.backend[n].bind(this.backend);
    if (u.length === 2) {
      try {
        const c = u(e, r);
        c && typeof c.then == "function" ? c.then((d) => l(null, d)).catch(l) : l(null, c);
      } catch (c) {
        l(c);
      }
      return;
    }
    return u(e, r, l);
  }
  prepareLoading(e, r, n = {}, s) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    F(e) && (e = this.languageUtils.toResolveHierarchy(e)), F(r) && (r = [r]);
    const i = this.queueLoad(e, r, n, s);
    if (!i.toLoad.length)
      return i.pending.length || s(), null;
    i.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(e, r, n) {
    this.prepareLoading(e, r, {}, n);
  }
  reload(e, r, n) {
    this.prepareLoading(e, r, {
      reload: !0
    }, n);
  }
  loadOne(e, r = "") {
    const n = e.split("|"), s = n[0], i = n[1];
    this.read(s, i, "read", void 0, void 0, (o, l) => {
      o && this.logger.warn(`${r}loading namespace ${i} for language ${s} failed`, o), !o && l && this.logger.log(`${r}loaded namespace ${i} for language ${s}`, l), this.loaded(e, o, l);
    });
  }
  saveMissing(e, r, n, s, i, o = {}, l = () => {
  }) {
    var u, c, d, p, m;
    if ((c = (u = this.services) == null ? void 0 : u.utils) != null && c.hasLoadedNamespace && !((p = (d = this.services) == null ? void 0 : d.utils) != null && p.hasLoadedNamespace(r))) {
      this.logger.warn(`did not save key "${n}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if ((m = this.backend) != null && m.create) {
        const g = {
          ...o,
          isUpdate: i
        }, h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let v;
            h.length === 5 ? v = h(e, r, n, s, g) : v = h(e, r, n, s), v && typeof v.then == "function" ? v.then((_) => l(null, _)).catch(l) : l(null, v);
          } catch (v) {
            l(v);
          }
        else
          h(e, r, n, s, l, g);
      }
      !e || !e[0] || this.store.addResource(e[0], r, n, s);
    }
  }
}
const $r = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (t) => {
    let e = {};
    if (typeof t[1] == "object" && (e = t[1]), F(t[1]) && (e.defaultValue = t[1]), F(t[2]) && (e.tDescription = t[2]), typeof t[2] == "object" || typeof t[3] == "object") {
      const r = t[3] || t[2];
      Object.keys(r).forEach((n) => {
        e[n] = r[n];
      });
    }
    return e;
  },
  interpolation: {
    escapeValue: !0,
    format: (t) => t,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  },
  cacheInBuiltFormats: !0
}), Dr = (t) => {
  var e, r;
  return F(t.ns) && (t.ns = [t.ns]), F(t.fallbackLng) && (t.fallbackLng = [t.fallbackLng]), F(t.fallbackNS) && (t.fallbackNS = [t.fallbackNS]), ((r = (e = t.supportedLngs) == null ? void 0 : e.indexOf) == null ? void 0 : r.call(e, "cimode")) < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), typeof t.initImmediate == "boolean" && (t.initAsync = t.initImmediate), t;
}, Xe = () => {
}, Hi = (t) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach((r) => {
    typeof t[r] == "function" && (t[r] = t[r].bind(t));
  });
};
class He extends ft {
  constructor(e = {}, r) {
    if (super(), this.options = Dr(e), this.services = {}, this.logger = le, this.modules = {
      external: []
    }, Hi(this), r && !this.isInitialized && !e.isClone) {
      if (!this.options.initAsync)
        return this.init(e, r), this;
      setTimeout(() => {
        this.init(e, r);
      }, 0);
    }
  }
  init(e = {}, r) {
    this.isInitializing = !0, typeof e == "function" && (r = e, e = {}), e.defaultNS == null && e.ns && (F(e.ns) ? e.defaultNS = e.ns : e.ns.indexOf("translation") < 0 && (e.defaultNS = e.ns[0]));
    const n = $r();
    this.options = {
      ...n,
      ...this.options,
      ...Dr(e)
    }, this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }, e.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = e.keySeparator), e.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = e.nsSeparator);
    const s = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? le.init(s(this.modules.logger), this.options) : le.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = Bi;
      const d = new Ir(this.options);
      this.store = new Or(this.options.resources, this.options);
      const p = this.services;
      p.logger = le, p.resourceStore = this.store, p.languageUtils = d, p.pluralResolver = new Ti(d, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), c && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (p.formatter = s(c), p.formatter.init && p.formatter.init(p, this.options), this.options.interpolation.format = p.formatter.format.bind(p.formatter)), p.interpolator = new $i(this.options), p.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, p.backendConnector = new Ki(s(this.modules.backend), p.resourceStore, p, this.options), p.backendConnector.on("*", (g, ...h) => {
        this.emit(g, ...h);
      }), this.modules.languageDetector && (p.languageDetector = s(this.modules.languageDetector), p.languageDetector.init && p.languageDetector.init(p, this.options.detection, this.options)), this.modules.i18nFormat && (p.i18nFormat = s(this.modules.i18nFormat), p.i18nFormat.init && p.i18nFormat.init(this)), this.translator = new ut(this.services, this.options), this.translator.on("*", (g, ...h) => {
        this.emit(g, ...h);
      }), this.modules.external.forEach((g) => {
        g.init && g.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = Xe), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = (...d) => this.store[c](...d);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = (...d) => (this.store[c](...d), this);
    });
    const l = De(), u = () => {
      const c = (d, p) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(p), r(d, p);
      };
      if (this.languages && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), l;
  }
  loadResources(e, r = Xe) {
    var i, o;
    let n = r;
    const s = F(e) ? e : this.language;
    if (typeof e == "function" && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
      if ((s == null ? void 0 : s.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const l = [], u = (c) => {
        if (!c || c === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(c).forEach((p) => {
          p !== "cimode" && l.indexOf(p) < 0 && l.push(p);
        });
      };
      s ? u(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((d) => u(d)), (o = (i = this.options.preload) == null ? void 0 : i.forEach) == null || o.call(i, (c) => u(c)), this.services.backendConnector.load(l, this.options.ns, (c) => {
        !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(c);
      });
    } else
      n(null);
  }
  reloadResources(e, r, n) {
    const s = De();
    return typeof e == "function" && (n = e, e = void 0), typeof r == "function" && (n = r, r = void 0), e || (e = this.languages), r || (r = this.options.ns), n || (n = Xe), this.services.backendConnector.reload(e, r, (i) => {
      s.resolve(), n(i);
    }), s;
  }
  use(e) {
    if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return e.type === "backend" && (this.modules.backend = e), (e.type === "logger" || e.log && e.warn && e.error) && (this.modules.logger = e), e.type === "languageDetector" && (this.modules.languageDetector = e), e.type === "i18nFormat" && (this.modules.i18nFormat = e), e.type === "postProcessor" && _n.addPostProcessor(e), e.type === "formatter" && (this.modules.formatter = e), e.type === "3rdParty" && this.modules.external.push(e), this;
  }
  setResolvedLanguage(e) {
    if (!(!e || !this.languages) && !(["cimode", "dev"].indexOf(e) > -1)) {
      for (let r = 0; r < this.languages.length; r++) {
        const n = this.languages[r];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(e) < 0 && this.store.hasLanguageSomeTranslations(e) && (this.resolvedLanguage = e, this.languages.unshift(e));
    }
  }
  changeLanguage(e, r) {
    this.isLanguageChangingTo = e;
    const n = De();
    this.emit("languageChanging", e);
    const s = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, i = (l, u) => {
      u ? this.isLanguageChangingTo === e && (s(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, n.resolve((...c) => this.t(...c)), r && r(l, (...c) => this.t(...c));
    }, o = (l) => {
      var d, p;
      !e && !l && this.services.languageDetector && (l = []);
      const u = F(l) ? l : l && l[0], c = this.store.hasLanguageSomeTranslations(u) ? u : this.services.languageUtils.getBestMatchFromCodes(F(l) ? [l] : l);
      c && (this.language || s(c), this.translator.language || this.translator.changeLanguage(c), (p = (d = this.services.languageDetector) == null ? void 0 : d.cacheUserLanguage) == null || p.call(d, c)), this.loadResources(c, (m) => {
        i(m, c);
      });
    };
    return !e && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(e), n;
  }
  getFixedT(e, r, n) {
    const s = (i, o, ...l) => {
      let u;
      typeof o != "object" ? u = this.options.overloadTranslationOptionHandler([i, o].concat(l)) : u = {
        ...o
      }, u.lng = u.lng || s.lng, u.lngs = u.lngs || s.lngs, u.ns = u.ns || s.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || n || s.keyPrefix);
      const c = this.options.keySeparator || ".";
      let d;
      return u.keyPrefix && Array.isArray(i) ? d = i.map((p) => (typeof p == "function" && (p = Ft(p, {
        ...this.options,
        ...o
      })), `${u.keyPrefix}${c}${p}`)) : (typeof i == "function" && (i = Ft(i, {
        ...this.options,
        ...o
      })), d = u.keyPrefix ? `${u.keyPrefix}${c}${i}` : i), this.t(d, u);
    };
    return F(e) ? s.lng = e : s.lngs = e, s.ns = r, s.keyPrefix = n, s;
  }
  t(...e) {
    var r;
    return (r = this.translator) == null ? void 0 : r.translate(...e);
  }
  exists(...e) {
    var r;
    return (r = this.translator) == null ? void 0 : r.exists(...e);
  }
  setDefaultNamespace(e) {
    this.options.defaultNS = e;
  }
  hasLoadedNamespace(e, r = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = r.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, i = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const o = (l, u) => {
      const c = this.services.backendConnector.state[`${l}|${u}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (r.precheck) {
      const l = r.precheck(this, o);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(n, e) && (!s || o(i, e)));
  }
  loadNamespaces(e, r) {
    const n = De();
    return this.options.ns ? (F(e) && (e = [e]), e.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      n.resolve(), r && r(s);
    }), n) : (r && r(), Promise.resolve());
  }
  loadLanguages(e, r) {
    const n = De();
    F(e) && (e = [e]);
    const s = this.options.preload || [], i = e.filter((o) => s.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return i.length ? (this.options.preload = s.concat(i), this.loadResources((o) => {
      n.resolve(), r && r(o);
    }), n) : (r && r(), Promise.resolve());
  }
  dir(e) {
    var s, i;
    if (e || (e = this.resolvedLanguage || (((s = this.languages) == null ? void 0 : s.length) > 0 ? this.languages[0] : this.language)), !e) return "rtl";
    try {
      const o = new Intl.Locale(e);
      if (o && o.getTextInfo) {
        const l = o.getTextInfo();
        if (l && l.direction) return l.direction;
      }
    } catch {
    }
    const r = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = ((i = this.services) == null ? void 0 : i.languageUtils) || new Ir($r());
    return e.toLowerCase().indexOf("-latn") > 1 ? "ltr" : r.indexOf(n.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(e = {}, r) {
    return new He(e, r);
  }
  cloneInstance(e = {}, r = Xe) {
    const n = e.forkResourceStore;
    n && delete e.forkResourceStore;
    const s = {
      ...this.options,
      ...e,
      isClone: !0
    }, i = new He(s);
    if ((e.debug !== void 0 || e.prefix !== void 0) && (i.logger = i.logger.clone(e)), ["store", "services", "language"].forEach((l) => {
      i[l] = this[l];
    }), i.services = {
      ...this.services
    }, i.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, n) {
      const l = Object.keys(this.store.data).reduce((u, c) => (u[c] = {
        ...this.store.data[c]
      }, u[c] = Object.keys(u[c]).reduce((d, p) => (d[p] = {
        ...u[c][p]
      }, d), u[c]), u), {});
      i.store = new Or(l, s), i.services.resourceStore = i.store;
    }
    return i.translator = new ut(i.services, s), i.translator.on("*", (l, ...u) => {
      i.emit(l, ...u);
    }), i.init(s, r), i.translator.options = s, i.translator.backendConnector.services.utils = {
      hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
    }, i;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const te = He.createInstance();
te.createInstance = He.createInstance;
te.createInstance;
te.dir;
te.init;
te.loadResources;
te.reloadResources;
te.use;
te.changeLanguage;
te.getFixedT;
te.t;
te.exists;
te.setDefaultNamespace;
te.hasLoadedNamespace;
te.loadNamespaces;
te.loadLanguages;
var Ut = {
  footer: {
    policies: {
      legal_notice: "إشعار قانوني",
      management_policy: "سياسة الإدارة",
      privacy_policy: "سياسة الخصوصية"
    },
    readiness: "جاهزية SOC2 النوع الثاني",
    sections: {
      company: {
        links: {
          about_us: "من نحن",
          careers: "وظائف",
          contact: "تواصل",
          privacy_policy: "سياسة الخصوصية"
        },
        title: "الشركة"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "الفوائد",
          ciem: "CIEM",
          container_security: "أمان الحاويات",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "نظرة عامة على المنصة",
          pricing: "التسعير",
          use_cases: "حالات الاستخدام"
        },
        title: "المنتجات"
      },
      resources: {
        links: {
          blog: "مدونة",
          case_studies: "دراسات الحالة",
          documentation: "الوثائق",
          security_resources: "موارد الأمان"
        },
        title: "الموارد"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "إنستغرام",
      linkedin: "لينكد إن",
      twitter: "تويتر"
    },
    tagline: "ارتقِ باستراتيجية الأمن السيبراني الخاصة بك مع Plexicus"
  },
  nav: {
    contact: "تواصل",
    developers: {
      api_references: "مراجع API",
      api_references_desc: "وثائق API شاملة",
      documentation: "الوثائق",
      documentation_desc: "أدلة فنية ومراجع",
      github_apps: "تطبيقات GitHub",
      github_apps_desc: "دمج Plexicus مع مستودعاتك",
      plexalyzer_action: "إجراء Plexalyzer",
      plexalyzer_action_desc: "أتمتة الأمان في خط أنابيب CI/CD الخاص بك",
      title: "المطورون"
    },
    get_started: "ابدأ الآن",
    languages: "اللغات",
    login: "تسجيل الدخول",
    pricing: "التسعير",
    product: {
      aspm: "ASPM",
      aspm_desc: "إدارة وضع أمان التطبيقات",
      benefits: "الفوائد",
      benefits_desc: "شاهد كيف يحول Plexicus الأمان",
      ciem: "CIEM",
      ciem_desc: "إدارة استحقاقات البنية التحتية السحابية",
      container_security: "أمان الحاويات",
      container_security_desc: "أمان الحاويات وKubernetes",
      cspm: "CSPM",
      cspm_desc: "إدارة وضع أمان السحابة",
      cwpp: "CWPP",
      cwpp_desc: "منصة حماية عبء العمل السحابي",
      explore: "استكشاف منتجنا",
      platform_overview: "نظرة عامة على المنصة",
      platform_overview_desc: "منصة CNAPP موحدة",
      title: "المنتج",
      use_cases: "حالات الاستخدام",
      use_cases_desc: "أمثلة على التنفيذ في العالم الحقيقي"
    },
    resources: {
      blog: "مدونة",
      blog_desc: "آخر الأخبار ورؤى الأمان",
      branding_assets: "أصول العلامة التجارية",
      branding_assets_desc: "الشعارات وإرشادات العلامة التجارية",
      changelogs: "سجلات التغيير",
      changelogs_desc: "آخر تحديثات المنتج",
      comparison_overview: "نظرة عامة على المقارنة",
      comparison_overview_desc: "شاهد كيف يقارن Plexicus بأدوات الأمان الأخرى",
      explore: "استكشاف مواردنا",
      feature_requests: "طلبات الميزات",
      feature_requests_desc: "تقديم والتصويت على ميزات جديدة",
      integrations: "التكاملات",
      integrations_desc: "ربط أدواتك ومنصاتك",
      support: "الدعم",
      support_desc: "يوفر Plexicus دعمًا شاملاً لمساعدتك في الاستفادة القصوى من منصتنا.",
      title: "الموارد",
      youtube_channel: "قناة يوتيوب",
      youtube_channel_desc: "دروس فيديو وندوات عبر الإنترنت"
    },
    solutions: {
      agencies: "الوكالات",
      agencies_desc: "الأمان للوكالات الرقمية والتسويقية",
      enterprise: "المؤسسات",
      enterprise_desc: "أمان شامل للمؤسسات الكبيرة",
      explore: "استكشاف حلولنا",
      fintech: "التكنولوجيا المالية",
      fintech_desc: "حلول الأمان للتكنولوجيا المالية",
      government: "الحكومة",
      government_desc: "حلول الأمان للوكالات الحكومية",
      group_companies: "الشركات الجماعية",
      group_companies_desc: "حلول للمجموعات والشركات القابضة",
      healthtech: "التكنولوجيا الصحية",
      healthtech_desc: "حلول أمان متوافقة مع HIPAA",
      hrtech: "تكنولوجيا الموارد البشرية",
      hrtech_desc: "الأمان لتكنولوجيا الموارد البشرية",
      legal_desc: "الأمان للشركات القانونية",
      legaltech: "التكنولوجيا القانونية",
      manufacturing: "التصنيع",
      manufacturing_desc: "الأمان للأنظمة الصناعية وإنترنت الأشياء",
      mobile_apps: "تطبيقات الجوال",
      mobile_apps_desc: "الأمان لتطبيقات iOS وAndroid",
      retailtech: "تكنولوجيا البيع بالتجزئة",
      retailtech_desc: "الأمان لمنصات التجارة الإلكترونية والبيع بالتجزئة",
      startups: "الشركات الناشئة",
      startups_desc: "أمان قابل للتوسع للشركات الناشئة",
      title: "الحلول"
    }
  }
}, Gi = Ut.footer, Vi = Ut.nav;
const Ui = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ut,
  footer: Gi,
  nav: Vi
}, Symbol.toStringTag, { value: "Module" }));
var qt = {
  footer: {
    policies: {
      legal_notice: "Právní oznámení",
      management_policy: "Politika řízení",
      privacy_policy: "Zásady ochrany osobních údajů"
    },
    readiness: "SOC2 Typ II Připravenost",
    sections: {
      company: {
        links: {
          about_us: "O nás",
          careers: "Kariéra",
          contact: "Kontakt",
          privacy_policy: "Zásady ochrany osobních údajů"
        },
        title: "Společnost"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Výhody",
          ciem: "CIEM",
          container_security: "Bezpečnost kontejnerů",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Přehled platformy",
          pricing: "Ceny",
          use_cases: "Případy použití"
        },
        title: "Produkty"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Případové studie",
          documentation: "Dokumentace",
          security_resources: "Bezpečnostní zdroje"
        },
        title: "Zdroje"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Zvyšte svou strategii kybernetické bezpečnosti s Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "API Reference",
      api_references_desc: "Komplexní dokumentace API",
      documentation: "Dokumentace",
      documentation_desc: "Technické příručky a reference",
      github_apps: "GitHub Aplikace",
      github_apps_desc: "Integrujte Plexicus s vašimi repozitáři",
      plexalyzer_action: "Plexalyzer Akce",
      plexalyzer_action_desc: "Automatizujte bezpečnost ve vašem CI/CD pipeline",
      title: "Vývojáři"
    },
    get_started: "Začít",
    languages: "Jazyky",
    login: "Přihlásit se",
    pricing: "Ceny",
    product: {
      aspm: "ASPM",
      aspm_desc: "Řízení bezpečnostního postoje aplikací",
      benefits: "Výhody",
      benefits_desc: "Podívejte se, jak Plexicus transformuje bezpečnost",
      ciem: "CIEM",
      ciem_desc: "Řízení oprávnění cloudové infrastruktury",
      container_security: "Bezpečnost kontejnerů",
      container_security_desc: "Bezpečnost kontejnerů a Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Řízení bezpečnostního postoje cloudu",
      cwpp: "CWPP",
      cwpp_desc: "Platforma ochrany cloudových pracovních zátěží",
      explore: "Prozkoumejte náš produkt",
      platform_overview: "Přehled platformy",
      platform_overview_desc: "Jednotná CNAPP platforma",
      title: "Produkt",
      use_cases: "Případy použití",
      use_cases_desc: "Příklady implementace v reálném světě"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Nejnovější zprávy a bezpečnostní poznatky",
      branding_assets: "Brandingové materiály",
      branding_assets_desc: "Loga a pokyny k značce",
      changelogs: "Změny",
      changelogs_desc: "Nejnovější aktualizace produktů",
      comparison_overview: "Přehled srovnání",
      comparison_overview_desc: "Podívejte se, jak Plexicus srovnává s jinými bezpečnostními nástroji",
      explore: "Prozkoumejte naše zdroje",
      feature_requests: "Požadavky na funkce",
      feature_requests_desc: "Podávejte a hlasujte o nových funkcích",
      integrations: "Integrace",
      integrations_desc: "Připojte své nástroje a platformy",
      support: "Podpora",
      support_desc: "Plexicus poskytuje komplexní podporu, aby vám pomohl co nejlépe využít naši platformu.",
      title: "Zdroje",
      youtube_channel: "YouTube Kanál",
      youtube_channel_desc: "Video tutoriály a webináře"
    },
    solutions: {
      agencies: "Agentury",
      agencies_desc: "Bezpečnost pro digitální a marketingové agentury",
      enterprise: "Podnik",
      enterprise_desc: "Komplexní bezpečnost pro velké organizace",
      explore: "Prozkoumejte naše řešení",
      fintech: "FinTech",
      fintech_desc: "Bezpečnostní řešení pro finanční technologie",
      government: "Vláda",
      government_desc: "Bezpečnostní řešení pro vládní agentury",
      group_companies: "Skupinové společnosti",
      group_companies_desc: "Řešení pro korporátní skupiny a holdingy",
      healthtech: "HealthTech",
      healthtech_desc: "Bezpečnostní řešení v souladu s HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Bezpečnost pro technologie lidských zdrojů",
      legal_desc: "Bezpečnost pro právní společnosti",
      legaltech: "LegalTech",
      manufacturing: "Výroba",
      manufacturing_desc: "Bezpečnost pro průmyslové a IoT systémy",
      mobile_apps: "Mobilní aplikace",
      mobile_apps_desc: "Bezpečnost pro iOS a Android aplikace",
      retailtech: "RetailTech",
      retailtech_desc: "Bezpečnost pro e-commerce a maloobchodní platformy",
      startups: "Startupy",
      startups_desc: "Škálovatelná bezpečnost pro rostoucí společnosti",
      title: "Řešení"
    }
  }
}, qi = qt.footer, Yi = qt.nav;
const Ji = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qt,
  footer: qi,
  nav: Yi
}, Symbol.toStringTag, { value: "Module" }));
var Yt = {
  footer: {
    policies: {
      legal_notice: "Juridisk meddelelse",
      management_policy: "Ledelsespolitik",
      privacy_policy: "Privatlivspolitik"
    },
    readiness: "SOC2 Type II Parathed",
    sections: {
      company: {
        links: {
          about_us: "Om os",
          careers: "Karriere",
          contact: "Kontakt",
          privacy_policy: "Privatlivspolitik"
        },
        title: "Virksomhed"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Fordele",
          ciem: "CIEM",
          container_security: "Containersikkerhed",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Platformoversigt",
          pricing: "Prissætning",
          use_cases: "Anvendelsestilfælde"
        },
        title: "Produkter"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Case-studier",
          documentation: "Dokumentation",
          security_resources: "Sikkerhedsressourcer"
        },
        title: "Ressourcer"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Forbedr din cybersikkerhedsstrategi med Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "API-referencer",
      api_references_desc: "Omfattende API-dokumentation",
      documentation: "Dokumentation",
      documentation_desc: "Tekniske guider og referencer",
      github_apps: "GitHub-apps",
      github_apps_desc: "Integrer Plexicus med dine repositories",
      plexalyzer_action: "Plexalyzer-handling",
      plexalyzer_action_desc: "Automatiser sikkerhed i din CI/CD-pipeline",
      title: "Udviklere"
    },
    get_started: "Kom i gang",
    languages: "Sprog",
    login: "Log ind",
    pricing: "Prissætning",
    product: {
      aspm: "ASPM",
      aspm_desc: "Applikationssikkerhedsstyring",
      benefits: "Fordele",
      benefits_desc: "Se hvordan Plexicus transformerer sikkerhed",
      ciem: "CIEM",
      ciem_desc: "Cloud Infrastructure Entitlement Management",
      container_security: "Containersikkerhed",
      container_security_desc: "Container- og Kubernetes-sikkerhed",
      cspm: "CSPM",
      cspm_desc: "Cloud Security Posture Management",
      cwpp: "CWPP",
      cwpp_desc: "Cloud Workload Protection Platform",
      explore: "Udforsk vores produkt",
      platform_overview: "Platformoversigt",
      platform_overview_desc: "Enhedlig CNAPP-platform",
      title: "Produkt",
      use_cases: "Anvendelsestilfælde",
      use_cases_desc: "Eksempler på implementering i den virkelige verden"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Seneste nyheder og sikkerhedsindsigter",
      branding_assets: "Branding-aktiver",
      branding_assets_desc: "Logoer og brandretningslinjer",
      changelogs: "Ændringslog",
      changelogs_desc: "Seneste produktopdateringer",
      comparison_overview: "Sammenligningsoversigt",
      comparison_overview_desc: "Se hvordan Plexicus sammenlignes med andre sikkerhedsværktøjer",
      explore: "Udforsk vores ressourcer",
      feature_requests: "Funktionsanmodninger",
      feature_requests_desc: "Indsend og stem på nye funktioner",
      integrations: "Integrationer",
      integrations_desc: "Forbind dine værktøjer og platforme",
      support: "Support",
      support_desc: "Plexicus tilbyder omfattende support for at hjælpe dig med at få mest muligt ud af vores platform.",
      title: "Ressourcer",
      youtube_channel: "YouTube-kanal",
      youtube_channel_desc: "Videotutorials og webinarer"
    },
    solutions: {
      agencies: "Agenturer",
      agencies_desc: "Sikkerhed for digitale og marketingbureauer",
      enterprise: "Enterprise",
      enterprise_desc: "Omfattende sikkerhed for store organisationer",
      explore: "Udforsk vores løsninger",
      fintech: "FinTech",
      fintech_desc: "Sikkerhedsløsninger for finansiel teknologi",
      government: "Regering",
      government_desc: "Sikkerhedsløsninger for offentlige myndigheder",
      group_companies: "Koncernselskaber",
      group_companies_desc: "Løsninger for koncerner og holdingselskaber",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-kompatible sikkerhedsløsninger",
      hrtech: "HRTech",
      hrtech_desc: "Sikkerhed for HR-teknologi",
      legal_desc: "Sikkerhed for juridiske virksomheder",
      legaltech: "LegalTech",
      manufacturing: "Produktion",
      manufacturing_desc: "Sikkerhed for industrielle og IoT-systemer",
      mobile_apps: "Mobilapps",
      mobile_apps_desc: "Sikkerhed for iOS- og Android-applikationer",
      retailtech: "RetailTech",
      retailtech_desc: "Sikkerhed for e-handel og detailplatforme",
      startups: "Startups",
      startups_desc: "Skalerbar sikkerhed for voksende virksomheder",
      title: "Løsninger"
    }
  }
}, Zi = Yt.footer, Xi = Yt.nav;
const Qi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yt,
  footer: Zi,
  nav: Xi
}, Symbol.toStringTag, { value: "Module" }));
var Jt = {
  footer: {
    policies: {
      legal_notice: "Impressum",
      management_policy: "Managementrichtlinie",
      privacy_policy: "Datenschutzrichtlinie"
    },
    readiness: "SOC2 Typ II Bereitschaft",
    sections: {
      company: {
        links: {
          about_us: "Über uns",
          careers: "Karriere",
          contact: "Kontakt",
          privacy_policy: "Datenschutzrichtlinie"
        },
        title: "Unternehmen"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Vorteile",
          ciem: "CIEM",
          container_security: "Containersicherheit",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Plattformübersicht",
          pricing: "Preisgestaltung",
          use_cases: "Anwendungsfälle"
        },
        title: "Produkte"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Fallstudien",
          documentation: "Dokumentation",
          security_resources: "Sicherheitsressourcen"
        },
        title: "Ressourcen"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Erhöhen Sie Ihre Cybersicherheitsstrategie mit Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "API-Referenzen",
      api_references_desc: "Umfassende API-Dokumentation",
      documentation: "Dokumentation",
      documentation_desc: "Technische Anleitungen und Referenzen",
      github_apps: "GitHub-Apps",
      github_apps_desc: "Integrieren Sie Plexicus in Ihre Repositories",
      plexalyzer_action: "Plexalyzer-Aktion",
      plexalyzer_action_desc: "Automatisieren Sie die Sicherheit in Ihrer CI/CD-Pipeline",
      title: "Entwickler"
    },
    get_started: "Erste Schritte",
    languages: "Sprachen",
    login: "Anmelden",
    pricing: "Preisgestaltung",
    product: {
      aspm: "ASPM",
      aspm_desc: "Verwaltung der Anwendungssicherheitslage",
      benefits: "Vorteile",
      benefits_desc: "Sehen Sie, wie Plexicus die Sicherheit transformiert",
      ciem: "CIEM",
      ciem_desc: "Verwaltung von Cloud-Infrastruktur-Berechtigungen",
      container_security: "Containersicherheit",
      container_security_desc: "Sicherheit für Container und Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Verwaltung der Cloud-Sicherheitslage",
      cwpp: "CWPP",
      cwpp_desc: "Plattform zum Schutz von Cloud-Workloads",
      explore: "Entdecken Sie unser Produkt",
      platform_overview: "Plattformübersicht",
      platform_overview_desc: "Einheitliche CNAPP-Plattform",
      title: "Produkt",
      use_cases: "Anwendungsfälle",
      use_cases_desc: "Beispiele für reale Implementierungen"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Neueste Nachrichten und Sicherheitseinblicke",
      branding_assets: "Markenressourcen",
      branding_assets_desc: "Logos und Markenrichtlinien",
      changelogs: "Änderungsprotokolle",
      changelogs_desc: "Neueste Produktaktualisierungen",
      comparison_overview: "Vergleichsübersicht",
      comparison_overview_desc: "Sehen Sie, wie Plexicus im Vergleich zu anderen Sicherheitstools abschneidet",
      explore: "Entdecken Sie unsere Ressourcen",
      feature_requests: "Funktionsanfragen",
      feature_requests_desc: "Neue Funktionen einreichen und abstimmen",
      integrations: "Integrationen",
      integrations_desc: "Verbinden Sie Ihre Tools und Plattformen",
      support: "Unterstützung",
      support_desc: "Plexicus bietet umfassenden Support, um Ihnen zu helfen, das Beste aus unserer Plattform herauszuholen.",
      title: "Ressourcen",
      youtube_channel: "YouTube-Kanal",
      youtube_channel_desc: "Video-Tutorials und Webinare"
    },
    solutions: {
      agencies: "Agenturen",
      agencies_desc: "Sicherheit für digitale und Marketingagenturen",
      enterprise: "Unternehmen",
      enterprise_desc: "Umfassende Sicherheit für große Organisationen",
      explore: "Entdecken Sie unsere Lösungen",
      fintech: "FinTech",
      fintech_desc: "Sicherheitslösungen für Finanztechnologie",
      government: "Regierung",
      government_desc: "Sicherheitslösungen für Regierungsbehörden",
      group_companies: "Unternehmensgruppen",
      group_companies_desc: "Lösungen für Unternehmensgruppen und Holdings",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-konforme Sicherheitslösungen",
      hrtech: "HRTech",
      hrtech_desc: "Sicherheit für Personaltechnologie",
      legal_desc: "Sicherheit für Rechtsunternehmen",
      legaltech: "LegalTech",
      manufacturing: "Fertigung",
      manufacturing_desc: "Sicherheit für industrielle und IoT-Systeme",
      mobile_apps: "Mobile Apps",
      mobile_apps_desc: "Sicherheit für iOS- und Android-Anwendungen",
      retailtech: "RetailTech",
      retailtech_desc: "Sicherheit für E-Commerce- und Einzelhandelsplattformen",
      startups: "Startups",
      startups_desc: "Skalierbare Sicherheit für wachsende Unternehmen",
      title: "Lösungen"
    }
  }
}, ea = Jt.footer, ta = Jt.nav;
const ra = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jt,
  footer: ea,
  nav: ta
}, Symbol.toStringTag, { value: "Module" }));
var ht = {
  footer: {
    policies: {
      legal_notice: "Legal Notice",
      management_policy: "Management Policy",
      privacy_policy: "Privacy Policy"
    },
    readiness: "SOC2 Type II Readiness",
    sections: {
      company: {
        links: {
          about_us: "About Us",
          careers: "Careers",
          contact: "Contact",
          privacy_policy: "Privacy Policy"
        },
        title: "Company"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Benefits",
          ciem: "CIEM",
          container_security: "Container Security",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Platform Overview",
          pricing: "Pricing",
          use_cases: "Use Cases"
        },
        title: "Products"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Case Studies",
          documentation: "Documentation",
          security_resources: "Security Resources"
        },
        title: "Resources"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Elevate your cybersecurity strategy with Plexicus"
  },
  nav: {
    contact: "Contact",
    developers: {
      api_references: "API References",
      api_references_desc: "Comprehensive API documentation",
      documentation: "Documentation",
      documentation_desc: "Technical guides and references",
      github_apps: "GitHub Apps",
      github_apps_desc: "Integrate Plexicus with your repositories",
      plexalyzer_action: "Plexalyzer Action",
      plexalyzer_action_desc: "Automate security in your CI/CD pipeline",
      title: "Developers"
    },
    get_started: "Get Started",
    languages: "Languages",
    login: "Login",
    pricing: "Pricing",
    product: {
      aspm: "ASPM",
      aspm_desc: "Application Security Posture Management",
      benefits: "Benefits",
      benefits_desc: "See how Plexicus transforms security",
      ciem: "CIEM",
      ciem_desc: "Cloud Infrastructure Entitlement Management",
      container_security: "Container Security",
      container_security_desc: "Container and Kubernetes security",
      cspm: "CSPM",
      cspm_desc: "Cloud Security Posture Management",
      cwpp: "CWPP",
      cwpp_desc: "Cloud Workload Protection Platform",
      explore: "Explore our product",
      platform_overview: "Platform Overview",
      platform_overview_desc: "Unified CNAPP platform",
      title: "Product",
      use_cases: "Use Cases",
      use_cases_desc: "Real-world implementation examples"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Latest news and security insights",
      branding_assets: "Branding Assets",
      branding_assets_desc: "Logos and brand guidelines",
      changelogs: "Changelogs",
      changelogs_desc: "Latest product updates",
      comparison_overview: "Comparison Overview",
      comparison_overview_desc: "See how Plexicus compares to other security tools",
      explore: "Explore our resources",
      feature_requests: "Feature Requests",
      feature_requests_desc: "Submit and vote on new features",
      integrations: "Integrations",
      integrations_desc: "Connect your tools and platforms",
      support: "Support",
      support_desc: "Plexicus provides comprehensive support to help you get the most out of our platform.",
      title: "Resources",
      youtube_channel: "YouTube Channel",
      youtube_channel_desc: "Video tutorials and webinars"
    },
    solutions: {
      agencies: "Agencies",
      agencies_desc: "Security for digital and marketing agencies",
      enterprise: "Enterprise",
      enterprise_desc: "Comprehensive security for large organizations",
      explore: "Explore our solutions",
      fintech: "FinTech",
      fintech_desc: "Security solutions for financial technology",
      government: "Government",
      government_desc: "Security solutions for government agencies",
      group_companies: "Group Companies",
      group_companies_desc: "Solutions for corporate groups and holdings",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA compliant security solutions",
      hrtech: "HRTech",
      hrtech_desc: "Security for human resources technology",
      legal_desc: "Security for legal companies",
      legaltech: "LegalTech",
      manufacturing: "Manufacturing",
      manufacturing_desc: "Security for industrial and IoT systems",
      mobile_apps: "Mobile Apps",
      mobile_apps_desc: "Security for iOS and Android applications",
      retailtech: "RetailTech",
      retailtech_desc: "Security for e-commerce and retail platforms",
      startups: "Startups",
      startups_desc: "Scalable security for growing companies",
      title: "Solutions"
    }
  },
  search: {
    placeholder: "Search anything...",
    searching: "Searching...",
    not_found: "No results found",
    start_typing: "Start typing to search..."
  }
}, na = ht.footer, sa = ht.nav, ia = ht.search;
const aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ht,
  footer: na,
  nav: sa,
  search: ia
}, Symbol.toStringTag, { value: "Module" }));
var Zt = {
  footer: {
    policies: {
      legal_notice: "Aviso Legal",
      management_policy: "Política de Gestión",
      privacy_policy: "Política de Privacidad"
    },
    readiness: "Preparación SOC2 Tipo II",
    sections: {
      company: {
        links: {
          about_us: "Sobre Nosotros",
          careers: "Carreras",
          contact: "Contacto",
          privacy_policy: "Política de Privacidad"
        },
        title: "Empresa"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Beneficios",
          ciem: "CIEM",
          container_security: "Seguridad de Contenedores",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Descripción de la Plataforma",
          pricing: "Precios",
          use_cases: "Casos de Uso"
        },
        title: "Productos"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Estudios de Caso",
          documentation: "Documentación",
          security_resources: "Recursos de Seguridad"
        },
        title: "Recursos"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Eleva tu estrategia de ciberseguridad con Plexicus"
  },
  nav: {
    contact: "Contacto",
    developers: {
      api_references: "Referencias API",
      api_references_desc: "Documentación completa de API",
      documentation: "Documentación",
      documentation_desc: "Guías técnicas y referencias",
      github_apps: "Aplicaciones de GitHub",
      github_apps_desc: "Integra Plexicus con tus repositorios",
      plexalyzer_action: "Acción Plexalyzer",
      plexalyzer_action_desc: "Automatiza la seguridad en tu pipeline CI/CD",
      title: "Desarrolladores"
    },
    get_started: "Comenzar",
    languages: "Idiomas",
    login: "Iniciar Sesión",
    pricing: "Precios",
    product: {
      aspm: "ASPM",
      aspm_desc: "Gestión de Postura de Seguridad de Aplicaciones",
      benefits: "Beneficios",
      benefits_desc: "Descubre cómo Plexicus transforma la seguridad",
      ciem: "CIEM",
      ciem_desc: "Gestión de Derechos de Infraestructura en la Nube",
      container_security: "Seguridad de Contenedores",
      container_security_desc: "Seguridad de contenedores y Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Gestión de Postura de Seguridad en la Nube",
      cwpp: "CWPP",
      cwpp_desc: "Plataforma de Protección de Cargas de Trabajo en la Nube",
      explore: "Explora nuestro producto",
      platform_overview: "Descripción de la Plataforma",
      platform_overview_desc: "Plataforma CNAPP unificada",
      title: "Producto",
      use_cases: "Casos de Uso",
      use_cases_desc: "Ejemplos de implementación en el mundo real"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Últimas noticias y perspectivas de seguridad",
      branding_assets: "Activos de Marca",
      branding_assets_desc: "Logotipos y guías de marca",
      changelogs: "Registros de Cambios",
      changelogs_desc: "Últimas actualizaciones de productos",
      comparison_overview: "Descripción Comparativa",
      comparison_overview_desc: "Descubre cómo Plexicus se compara con otras herramientas de seguridad",
      explore: "Explora nuestros recursos",
      feature_requests: "Solicitudes de Funciones",
      feature_requests_desc: "Envía y vota nuevas funciones",
      integrations: "Integraciones",
      integrations_desc: "Conecta tus herramientas y plataformas",
      support: "Soporte",
      support_desc: "Plexicus proporciona soporte integral para ayudarte a aprovechar al máximo nuestra plataforma.",
      title: "Recursos",
      youtube_channel: "Canal de YouTube",
      youtube_channel_desc: "Tutoriales en video y seminarios web"
    },
    solutions: {
      agencies: "Agencias",
      agencies_desc: "Seguridad para agencias digitales y de marketing",
      enterprise: "Empresa",
      enterprise_desc: "Seguridad integral para grandes organizaciones",
      explore: "Explora nuestras soluciones",
      fintech: "FinTech",
      fintech_desc: "Soluciones de seguridad para tecnología financiera",
      government: "Gobierno",
      government_desc: "Soluciones de seguridad para agencias gubernamentales",
      group_companies: "Empresas del Grupo",
      group_companies_desc: "Soluciones para grupos corporativos y holdings",
      healthtech: "HealthTech",
      healthtech_desc: "Soluciones de seguridad compatibles con HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Seguridad para tecnología de recursos humanos",
      legal_desc: "Seguridad para empresas legales",
      legaltech: "LegalTech",
      manufacturing: "Manufactura",
      manufacturing_desc: "Seguridad para sistemas industriales e IoT",
      mobile_apps: "Aplicaciones Móviles",
      mobile_apps_desc: "Seguridad para aplicaciones iOS y Android",
      retailtech: "RetailTech",
      retailtech_desc: "Seguridad para plataformas de comercio electrónico y minoristas",
      startups: "Startups",
      startups_desc: "Seguridad escalable para empresas en crecimiento",
      title: "Soluciones"
    }
  }
}, oa = Zt.footer, la = Zt.nav;
const ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zt,
  footer: oa,
  nav: la
}, Symbol.toStringTag, { value: "Module" }));
var Xt = {
  footer: {
    policies: {
      legal_notice: "Laillinen ilmoitus",
      management_policy: "Hallintapolitiikka",
      privacy_policy: "Tietosuojakäytäntö"
    },
    readiness: "SOC2 Type II Valmius",
    sections: {
      company: {
        links: {
          about_us: "Meistä",
          careers: "Urat",
          contact: "Yhteystiedot",
          privacy_policy: "Tietosuojakäytäntö"
        },
        title: "Yritys"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Hyödyt",
          ciem: "CIEM",
          container_security: "Konttiturvallisuus",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Alustan yleiskatsaus",
          pricing: "Hinnoittelu",
          use_cases: "Käyttötapaukset"
        },
        title: "Tuotteet"
      },
      resources: {
        links: {
          blog: "Blogi",
          case_studies: "Case-tutkimukset",
          documentation: "Dokumentaatio",
          security_resources: "Turvallisuusresurssit"
        },
        title: "Resurssit"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Nosta kyberturvallisuusstrategiasi Plexicuksen avulla"
  },
  nav: {
    contact: "Yhteystiedot",
    developers: {
      api_references: "API-viitteet",
      api_references_desc: "Kattava API-dokumentaatio",
      documentation: "Dokumentaatio",
      documentation_desc: "Teknisiä oppaita ja viitteitä",
      github_apps: "GitHub-sovellukset",
      github_apps_desc: "Integroi Plexicus repositorioihisi",
      plexalyzer_action: "Plexalyzer-toiminto",
      plexalyzer_action_desc: "Automatisoi turvallisuus CI/CD-putkessasi",
      title: "Kehittäjät"
    },
    get_started: "Aloita",
    languages: "Kielet",
    login: "Kirjaudu sisään",
    pricing: "Hinnoittelu",
    product: {
      aspm: "ASPM",
      aspm_desc: "Sovellusturvallisuuden hallinta",
      benefits: "Hyödyt",
      benefits_desc: "Katso, miten Plexicus muuttaa turvallisuutta",
      ciem: "CIEM",
      ciem_desc: "Pilvi-infrastruktuurin oikeuksien hallinta",
      container_security: "Konttiturvallisuus",
      container_security_desc: "Konttien ja Kubernetesin turvallisuus",
      cspm: "CSPM",
      cspm_desc: "Pilviturvallisuuden hallinta",
      cwpp: "CWPP",
      cwpp_desc: "Pilvityökuormien suojausalusta",
      explore: "Tutustu tuotteeseemme",
      platform_overview: "Alustan yleiskatsaus",
      platform_overview_desc: "Yhtenäinen CNAPP-alusta",
      title: "Tuote",
      use_cases: "Käyttötapaukset",
      use_cases_desc: "Todellisia toteutusesimerkkejä"
    },
    resources: {
      blog: "Blogi",
      blog_desc: "Viimeisimmät uutiset ja turvallisuusnäkemykset",
      branding_assets: "Brändäysmateriaalit",
      branding_assets_desc: "Logot ja brändiohjeet",
      changelogs: "Muutoslokit",
      changelogs_desc: "Viimeisimmät tuoteuutiset",
      comparison_overview: "Vertailun yleiskatsaus",
      comparison_overview_desc: "Katso, miten Plexicus vertautuu muihin turvallisuustyökaluihin",
      explore: "Tutustu resursseihimme",
      feature_requests: "Ominaisuuspyynnöt",
      feature_requests_desc: "Lähetä ja äänestä uusia ominaisuuksia",
      integrations: "Integraatiot",
      integrations_desc: "Yhdistä työkalusi ja alustasi",
      support: "Tuki",
      support_desc: "Plexicus tarjoaa kattavaa tukea, jotta saat kaiken irti alustastamme.",
      title: "Resurssit",
      youtube_channel: "YouTube-kanava",
      youtube_channel_desc: "Videotutoriaalit ja webinaarit"
    },
    solutions: {
      agencies: "Toimistot",
      agencies_desc: "Turvallisuus digitaalisille ja markkinointitoimistoille",
      enterprise: "Yritykset",
      enterprise_desc: "Kattava turvallisuus suurille organisaatioille",
      explore: "Tutustu ratkaisuihimme",
      fintech: "FinTech",
      fintech_desc: "Turvallisuusratkaisut finanssiteknologialle",
      government: "Hallitus",
      government_desc: "Turvallisuusratkaisut valtion virastoille",
      group_companies: "Yritysryhmät",
      group_companies_desc: "Ratkaisut yritysryhmille ja holding-yhtiöille",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-yhteensopivat turvallisuusratkaisut",
      hrtech: "HRTech",
      hrtech_desc: "Turvallisuus henkilöstöhallinnon teknologialle",
      legal_desc: "Turvallisuus lakialan yrityksille",
      legaltech: "LegalTech",
      manufacturing: "Valmistus",
      manufacturing_desc: "Turvallisuus teollisuus- ja IoT-järjestelmille",
      mobile_apps: "Mobiilisovellukset",
      mobile_apps_desc: "Turvallisuus iOS- ja Android-sovelluksille",
      retailtech: "RetailTech",
      retailtech_desc: "Turvallisuus verkkokauppa- ja vähittäiskauppa-alustoille",
      startups: "Startupit",
      startups_desc: "Skaalautuva turvallisuus kasvaville yrityksille",
      title: "Ratkaisut"
    }
  }
}, ua = Xt.footer, da = Xt.nav;
const pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xt,
  footer: ua,
  nav: da
}, Symbol.toStringTag, { value: "Module" }));
var Qt = {
  footer: {
    policies: {
      legal_notice: "Avis légal",
      management_policy: "Politique de gestion",
      privacy_policy: "Politique de confidentialité"
    },
    readiness: "Préparation SOC2 Type II",
    sections: {
      company: {
        links: {
          about_us: "À propos de nous",
          careers: "Carrières",
          contact: "Contact",
          privacy_policy: "Politique de confidentialité"
        },
        title: "Entreprise"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Avantages",
          ciem: "CIEM",
          container_security: "Sécurité des conteneurs",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Aperçu de la plateforme",
          pricing: "Tarification",
          use_cases: "Cas d'utilisation"
        },
        title: "Produits"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Études de cas",
          documentation: "Documentation",
          security_resources: "Ressources de sécurité"
        },
        title: "Ressources"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Élevez votre stratégie de cybersécurité avec Plexicus"
  },
  nav: {
    contact: "Contact",
    developers: {
      api_references: "Références API",
      api_references_desc: "Documentation complète de l'API",
      documentation: "Documentation",
      documentation_desc: "Guides techniques et références",
      github_apps: "Applications GitHub",
      github_apps_desc: "Intégrez Plexicus avec vos dépôts",
      plexalyzer_action: "Action Plexalyzer",
      plexalyzer_action_desc: "Automatisez la sécurité dans votre pipeline CI/CD",
      title: "Développeurs"
    },
    get_started: "Commencer",
    languages: "Langues",
    login: "Connexion",
    pricing: "Tarification",
    product: {
      aspm: "ASPM",
      aspm_desc: "Gestion de la posture de sécurité des applications",
      benefits: "Avantages",
      benefits_desc: "Découvrez comment Plexicus transforme la sécurité",
      ciem: "CIEM",
      ciem_desc: "Gestion des droits d'infrastructure cloud",
      container_security: "Sécurité des conteneurs",
      container_security_desc: "Sécurité des conteneurs et Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Gestion de la posture de sécurité cloud",
      cwpp: "CWPP",
      cwpp_desc: "Plateforme de protection des charges de travail cloud",
      explore: "Explorez notre produit",
      platform_overview: "Aperçu de la plateforme",
      platform_overview_desc: "Plateforme CNAPP unifiée",
      title: "Produit",
      use_cases: "Cas d'utilisation",
      use_cases_desc: "Exemples de mise en œuvre réelle"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Dernières nouvelles et perspectives de sécurité",
      branding_assets: "Actifs de marque",
      branding_assets_desc: "Logos et directives de marque",
      changelogs: "Journaux des modifications",
      changelogs_desc: "Dernières mises à jour du produit",
      comparison_overview: "Aperçu des comparaisons",
      comparison_overview_desc: "Découvrez comment Plexicus se compare à d'autres outils de sécurité",
      explore: "Explorez nos ressources",
      feature_requests: "Demandes de fonctionnalités",
      feature_requests_desc: "Soumettez et votez pour de nouvelles fonctionnalités",
      integrations: "Intégrations",
      integrations_desc: "Connectez vos outils et plateformes",
      support: "Support",
      support_desc: "Plexicus fournit un support complet pour vous aider à tirer le meilleur parti de notre plateforme.",
      title: "Ressources",
      youtube_channel: "Chaîne YouTube",
      youtube_channel_desc: "Tutoriels vidéo et webinaires"
    },
    solutions: {
      agencies: "Agences",
      agencies_desc: "Sécurité pour les agences numériques et de marketing",
      enterprise: "Entreprise",
      enterprise_desc: "Sécurité complète pour les grandes organisations",
      explore: "Explorez nos solutions",
      fintech: "FinTech",
      fintech_desc: "Solutions de sécurité pour la technologie financière",
      government: "Gouvernement",
      government_desc: "Solutions de sécurité pour les agences gouvernementales",
      group_companies: "Entreprises de groupe",
      group_companies_desc: "Solutions pour les groupes d'entreprises et holdings",
      healthtech: "HealthTech",
      healthtech_desc: "Solutions de sécurité conformes à la HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Sécurité pour la technologie des ressources humaines",
      legal_desc: "Sécurité pour les entreprises juridiques",
      legaltech: "LegalTech",
      manufacturing: "Fabrication",
      manufacturing_desc: "Sécurité pour les systèmes industriels et IoT",
      mobile_apps: "Applications mobiles",
      mobile_apps_desc: "Sécurité pour les applications iOS et Android",
      retailtech: "RetailTech",
      retailtech_desc: "Sécurité pour les plateformes de commerce électronique et de vente au détail",
      startups: "Startups",
      startups_desc: "Sécurité évolutive pour les entreprises en croissance",
      title: "Solutions"
    }
  }
}, fa = Qt.footer, ha = Qt.nav;
const ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qt,
  footer: fa,
  nav: ha
}, Symbol.toStringTag, { value: "Module" }));
var er = {
  footer: {
    policies: {
      legal_notice: "הודעה משפטית",
      management_policy: "מדיניות ניהול",
      privacy_policy: "מדיניות פרטיות"
    },
    readiness: "מוכנות SOC2 סוג II",
    sections: {
      company: {
        links: {
          about_us: "אודותינו",
          careers: "קריירה",
          contact: "צור קשר",
          privacy_policy: "מדיניות פרטיות"
        },
        title: "חברה"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "יתרונות",
          ciem: "CIEM",
          container_security: "אבטחת מכולות",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "סקירת פלטפורמה",
          pricing: "תמחור",
          use_cases: "מקרי שימוש"
        },
        title: "מוצרים"
      },
      resources: {
        links: {
          blog: "בלוג",
          case_studies: "מחקרי מקרה",
          documentation: "תיעוד",
          security_resources: "משאבי אבטחה"
        },
        title: "משאבים"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "אינסטגרם",
      linkedin: "LinkedIn",
      twitter: "טוויטר"
    },
    tagline: "שפר את אסטרטגיית הסייבר שלך עם Plexicus"
  },
  nav: {
    contact: "צור קשר",
    developers: {
      api_references: "הפניות API",
      api_references_desc: "תיעוד API מקיף",
      documentation: "תיעוד",
      documentation_desc: "מדריכים טכניים והפניות",
      github_apps: "אפליקציות GitHub",
      github_apps_desc: "שלב את Plexicus עם המאגר שלך",
      plexalyzer_action: "פעולה Plexalyzer",
      plexalyzer_action_desc: "אוטומציה של אבטחה בצנרת CI/CD שלך",
      title: "מפתחים"
    },
    get_started: "התחל",
    languages: "שפות",
    login: "התחברות",
    pricing: "תמחור",
    product: {
      aspm: "ASPM",
      aspm_desc: "ניהול מצב אבטחת יישומים",
      benefits: "יתרונות",
      benefits_desc: "ראה כיצד Plexicus משנה את האבטחה",
      ciem: "CIEM",
      ciem_desc: "ניהול זכויות תשתית ענן",
      container_security: "אבטחת מכולות",
      container_security_desc: "אבטחת מכולות וקוברנטיס",
      cspm: "CSPM",
      cspm_desc: "ניהול מצב אבטחת ענן",
      cwpp: "CWPP",
      cwpp_desc: "פלטפורמת הגנת עומסי עבודה בענן",
      explore: "חקור את המוצר שלנו",
      platform_overview: "סקירת פלטפורמה",
      platform_overview_desc: "פלטפורמת CNAPP מאוחדת",
      title: "מוצר",
      use_cases: "מקרי שימוש",
      use_cases_desc: "דוגמאות ליישום בעולם האמיתי"
    },
    resources: {
      blog: "בלוג",
      blog_desc: "חדשות אחרונות ותובנות אבטחה",
      branding_assets: "נכסי מותג",
      branding_assets_desc: "לוגואים והנחיות מותג",
      changelogs: "יומני שינויים",
      changelogs_desc: "עדכוני מוצר אחרונים",
      comparison_overview: "סקירת השוואה",
      comparison_overview_desc: "ראה כיצד Plexicus משווה לכלי אבטחה אחרים",
      explore: "חקור את המשאבים שלנו",
      feature_requests: "בקשות תכונה",
      feature_requests_desc: "הגש והצביע על תכונות חדשות",
      integrations: "אינטגרציות",
      integrations_desc: "חבר את הכלים והפלטפורמות שלך",
      support: "תמיכה",
      support_desc: "Plexicus מספקת תמיכה מקיפה כדי לעזור לך להפיק את המירב מהפלטפורמה שלנו.",
      title: "משאבים",
      youtube_channel: "ערוץ YouTube",
      youtube_channel_desc: "מדריכי וידאו וסמינרים מקוונים"
    },
    solutions: {
      agencies: "סוכנויות",
      agencies_desc: "אבטחה לסוכנויות דיגיטל ושיווק",
      enterprise: "ארגונים",
      enterprise_desc: "אבטחה מקיפה לארגונים גדולים",
      explore: "חקור את הפתרונות שלנו",
      fintech: "FinTech",
      fintech_desc: "פתרונות אבטחה לטכנולוגיה פיננסית",
      government: "ממשלה",
      government_desc: "פתרונות אבטחה לסוכנויות ממשלתיות",
      group_companies: "חברות קבוצתיות",
      group_companies_desc: "פתרונות לקבוצות תאגידיות והחזקות",
      healthtech: "HealthTech",
      healthtech_desc: "פתרונות אבטחה תואמי HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "אבטחה לטכנולוגיית משאבי אנוש",
      legal_desc: "אבטחה לחברות משפטיות",
      legaltech: "LegalTech",
      manufacturing: "ייצור",
      manufacturing_desc: "אבטחה למערכות תעשייתיות ו-IoT",
      mobile_apps: "אפליקציות ניידות",
      mobile_apps_desc: "אבטחה לאפליקציות iOS ו-Android",
      retailtech: "RetailTech",
      retailtech_desc: "אבטחה לפלטפורמות מסחר אלקטרוני וקמעונאות",
      startups: "סטארטאפים",
      startups_desc: "אבטחה ניתנת להרחבה לחברות מתפתחות",
      title: "פתרונות"
    }
  }
}, ma = er.footer, va = er.nav;
const xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er,
  footer: ma,
  nav: va
}, Symbol.toStringTag, { value: "Module" }));
var tr = {
  footer: {
    policies: {
      legal_notice: "Pemberitahuan Hukum",
      management_policy: "Kebijakan Manajemen",
      privacy_policy: "Kebijakan Privasi"
    },
    readiness: "Kesiapan SOC2 Tipe II",
    sections: {
      company: {
        links: {
          about_us: "Tentang Kami",
          careers: "Karir",
          contact: "Kontak",
          privacy_policy: "Kebijakan Privasi"
        },
        title: "Perusahaan"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Manfaat",
          ciem: "CIEM",
          container_security: "Keamanan Kontainer",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Gambaran Platform",
          pricing: "Harga",
          use_cases: "Kasus Penggunaan"
        },
        title: "Produk"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Studi Kasus",
          documentation: "Dokumentasi",
          security_resources: "Sumber Daya Keamanan"
        },
        title: "Sumber Daya"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Tingkatkan strategi keamanan siber Anda dengan Plexicus"
  },
  nav: {
    contact: "Kontak",
    developers: {
      api_references: "Referensi API",
      api_references_desc: "Dokumentasi API yang komprehensif",
      documentation: "Dokumentasi",
      documentation_desc: "Panduan teknis dan referensi",
      github_apps: "Aplikasi GitHub",
      github_apps_desc: "Integrasikan Plexicus dengan repositori Anda",
      plexalyzer_action: "Aksi Plexalyzer",
      plexalyzer_action_desc: "Otomatisasi keamanan dalam pipeline CI/CD Anda",
      title: "Pengembang"
    },
    get_started: "Mulai",
    languages: "Bahasa",
    login: "Masuk",
    pricing: "Harga",
    product: {
      aspm: "ASPM",
      aspm_desc: "Manajemen Postur Keamanan Aplikasi",
      benefits: "Manfaat",
      benefits_desc: "Lihat bagaimana Plexicus mengubah keamanan",
      ciem: "CIEM",
      ciem_desc: "Manajemen Hak Infrastruktur Cloud",
      container_security: "Keamanan Kontainer",
      container_security_desc: "Keamanan Kontainer dan Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Manajemen Postur Keamanan Cloud",
      cwpp: "CWPP",
      cwpp_desc: "Platform Perlindungan Beban Kerja Cloud",
      explore: "Jelajahi produk kami",
      platform_overview: "Gambaran Platform",
      platform_overview_desc: "Platform CNAPP terpadu",
      title: "Produk",
      use_cases: "Kasus Penggunaan",
      use_cases_desc: "Contoh implementasi dunia nyata"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Berita terbaru dan wawasan keamanan",
      branding_assets: "Aset Merek",
      branding_assets_desc: "Logo dan panduan merek",
      changelogs: "Catatan Perubahan",
      changelogs_desc: "Pembaruan produk terbaru",
      comparison_overview: "Gambaran Perbandingan",
      comparison_overview_desc: "Lihat bagaimana Plexicus dibandingkan dengan alat keamanan lainnya",
      explore: "Jelajahi sumber daya kami",
      feature_requests: "Permintaan Fitur",
      feature_requests_desc: "Kirim dan beri suara pada fitur baru",
      integrations: "Integrasi",
      integrations_desc: "Hubungkan alat dan platform Anda",
      support: "Dukungan",
      support_desc: "Plexicus menyediakan dukungan komprehensif untuk membantu Anda mendapatkan hasil maksimal dari platform kami.",
      title: "Sumber Daya",
      youtube_channel: "Saluran YouTube",
      youtube_channel_desc: "Tutorial video dan webinar"
    },
    solutions: {
      agencies: "Agensi",
      agencies_desc: "Keamanan untuk agensi digital dan pemasaran",
      enterprise: "Perusahaan",
      enterprise_desc: "Keamanan komprehensif untuk organisasi besar",
      explore: "Jelajahi solusi kami",
      fintech: "FinTech",
      fintech_desc: "Solusi keamanan untuk teknologi keuangan",
      government: "Pemerintah",
      government_desc: "Solusi keamanan untuk lembaga pemerintah",
      group_companies: "Perusahaan Grup",
      group_companies_desc: "Solusi untuk kelompok perusahaan dan holding",
      healthtech: "HealthTech",
      healthtech_desc: "Solusi keamanan yang sesuai dengan HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Keamanan untuk teknologi sumber daya manusia",
      legal_desc: "Keamanan untuk perusahaan hukum",
      legaltech: "LegalTech",
      manufacturing: "Manufaktur",
      manufacturing_desc: "Keamanan untuk sistem industri dan IoT",
      mobile_apps: "Aplikasi Mobile",
      mobile_apps_desc: "Keamanan untuk aplikasi iOS dan Android",
      retailtech: "RetailTech",
      retailtech_desc: "Keamanan untuk platform e-commerce dan ritel",
      startups: "Startup",
      startups_desc: "Keamanan yang dapat diskalakan untuk perusahaan yang sedang berkembang",
      title: "Solusi"
    }
  }
}, ya = tr.footer, ba = tr.nav;
const _a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tr,
  footer: ya,
  nav: ba
}, Symbol.toStringTag, { value: "Module" }));
var rr = {
  footer: {
    policies: {
      legal_notice: "Avviso Legale",
      management_policy: "Politica di Gestione",
      privacy_policy: "Politica sulla Privacy"
    },
    readiness: "Prontezza SOC2 Tipo II",
    sections: {
      company: {
        links: {
          about_us: "Chi Siamo",
          careers: "Carriere",
          contact: "Contatto",
          privacy_policy: "Politica sulla Privacy"
        },
        title: "Azienda"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Vantaggi",
          ciem: "CIEM",
          container_security: "Sicurezza dei Container",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Panoramica della Piattaforma",
          pricing: "Prezzi",
          use_cases: "Casi d'Uso"
        },
        title: "Prodotti"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Casi di Studio",
          documentation: "Documentazione",
          security_resources: "Risorse di Sicurezza"
        },
        title: "Risorse"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Eleva la tua strategia di cybersecurity con Plexicus"
  },
  nav: {
    contact: "Contatto",
    developers: {
      api_references: "Riferimenti API",
      api_references_desc: "Documentazione API completa",
      documentation: "Documentazione",
      documentation_desc: "Guide tecniche e riferimenti",
      github_apps: "App GitHub",
      github_apps_desc: "Integra Plexicus con i tuoi repository",
      plexalyzer_action: "Azione Plexalyzer",
      plexalyzer_action_desc: "Automatizza la sicurezza nel tuo pipeline CI/CD",
      title: "Sviluppatori"
    },
    get_started: "Inizia",
    languages: "Lingue",
    login: "Accedi",
    pricing: "Prezzi",
    product: {
      aspm: "ASPM",
      aspm_desc: "Gestione della Postura di Sicurezza delle Applicazioni",
      benefits: "Vantaggi",
      benefits_desc: "Scopri come Plexicus trasforma la sicurezza",
      ciem: "CIEM",
      ciem_desc: "Gestione delle Autorizzazioni dell'Infrastruttura Cloud",
      container_security: "Sicurezza dei Container",
      container_security_desc: "Sicurezza dei Container e Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Gestione della Postura di Sicurezza Cloud",
      cwpp: "CWPP",
      cwpp_desc: "Piattaforma di Protezione dei Carichi di Lavoro Cloud",
      explore: "Esplora il nostro prodotto",
      platform_overview: "Panoramica della Piattaforma",
      platform_overview_desc: "Piattaforma CNAPP unificata",
      title: "Prodotto",
      use_cases: "Casi d'Uso",
      use_cases_desc: "Esempi di implementazione nel mondo reale"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Ultime notizie e approfondimenti sulla sicurezza",
      branding_assets: "Risorse di Branding",
      branding_assets_desc: "Loghi e linee guida del marchio",
      changelogs: "Changelog",
      changelogs_desc: "Ultimi aggiornamenti del prodotto",
      comparison_overview: "Panoramica Comparativa",
      comparison_overview_desc: "Scopri come Plexicus si confronta con altri strumenti di sicurezza",
      explore: "Esplora le nostre risorse",
      feature_requests: "Richieste di Funzionalità",
      feature_requests_desc: "Invia e vota nuove funzionalità",
      integrations: "Integrazioni",
      integrations_desc: "Connetti i tuoi strumenti e piattaforme",
      support: "Supporto",
      support_desc: "Plexicus offre supporto completo per aiutarti a ottenere il massimo dalla nostra piattaforma.",
      title: "Risorse",
      youtube_channel: "Canale YouTube",
      youtube_channel_desc: "Tutorial video e webinar"
    },
    solutions: {
      agencies: "Agenzie",
      agencies_desc: "Sicurezza per agenzie digitali e di marketing",
      enterprise: "Impresa",
      enterprise_desc: "Sicurezza completa per grandi organizzazioni",
      explore: "Esplora le nostre soluzioni",
      fintech: "FinTech",
      fintech_desc: "Soluzioni di sicurezza per la tecnologia finanziaria",
      government: "Governo",
      government_desc: "Soluzioni di sicurezza per agenzie governative",
      group_companies: "Gruppi Aziendali",
      group_companies_desc: "Soluzioni per gruppi aziendali e holding",
      healthtech: "HealthTech",
      healthtech_desc: "Soluzioni di sicurezza conformi a HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Sicurezza per la tecnologia delle risorse umane",
      legal_desc: "Sicurezza per aziende legali",
      legaltech: "LegalTech",
      manufacturing: "Manifatturiero",
      manufacturing_desc: "Sicurezza per sistemi industriali e IoT",
      mobile_apps: "App Mobili",
      mobile_apps_desc: "Sicurezza per applicazioni iOS e Android",
      retailtech: "RetailTech",
      retailtech_desc: "Sicurezza per piattaforme di e-commerce e vendita al dettaglio",
      startups: "Startup",
      startups_desc: "Sicurezza scalabile per aziende in crescita",
      title: "Soluzioni"
    }
  }
}, ka = rr.footer, wa = rr.nav;
const ja = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr,
  footer: ka,
  nav: wa
}, Symbol.toStringTag, { value: "Module" }));
var nr = {
  footer: {
    policies: {
      legal_notice: "法的通知",
      management_policy: "管理方針",
      privacy_policy: "プライバシーポリシー"
    },
    readiness: "SOC2 タイプII準備",
    sections: {
      company: {
        links: {
          about_us: "会社概要",
          careers: "採用情報",
          contact: "お問い合わせ",
          privacy_policy: "プライバシーポリシー"
        },
        title: "会社"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "利点",
          ciem: "CIEM",
          container_security: "コンテナセキュリティ",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "プラットフォーム概要",
          pricing: "価格",
          use_cases: "ユースケース"
        },
        title: "製品"
      },
      resources: {
        links: {
          blog: "ブログ",
          case_studies: "ケーススタディ",
          documentation: "ドキュメント",
          security_resources: "セキュリティリソース"
        },
        title: "リソース"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Plexicusでサイバーセキュリティ戦略を高めましょう"
  },
  nav: {
    contact: "お問い合わせ",
    developers: {
      api_references: "APIリファレンス",
      api_references_desc: "包括的なAPIドキュメント",
      documentation: "ドキュメント",
      documentation_desc: "技術ガイドとリファレンス",
      github_apps: "GitHubアプリ",
      github_apps_desc: "リポジトリにPlexicusを統合",
      plexalyzer_action: "Plexalyzerアクション",
      plexalyzer_action_desc: "CI/CDパイプラインでのセキュリティ自動化",
      title: "開発者"
    },
    get_started: "始める",
    languages: "言語",
    login: "ログイン",
    pricing: "価格",
    product: {
      aspm: "ASPM",
      aspm_desc: "アプリケーションセキュリティポスチャ管理",
      benefits: "利点",
      benefits_desc: "Plexicusがどのようにセキュリティを変革するかを見る",
      ciem: "CIEM",
      ciem_desc: "クラウドインフラストラクチャ権限管理",
      container_security: "コンテナセキュリティ",
      container_security_desc: "コンテナとKubernetesのセキュリティ",
      cspm: "CSPM",
      cspm_desc: "クラウドセキュリティポスチャ管理",
      cwpp: "CWPP",
      cwpp_desc: "クラウドワークロード保護プラットフォーム",
      explore: "製品を探る",
      platform_overview: "プラットフォーム概要",
      platform_overview_desc: "統合CNAPPプラットフォーム",
      title: "製品",
      use_cases: "ユースケース",
      use_cases_desc: "実際の実装例"
    },
    resources: {
      blog: "ブログ",
      blog_desc: "最新ニュースとセキュリティの洞察",
      branding_assets: "ブランディング資産",
      branding_assets_desc: "ロゴとブランドガイドライン",
      changelogs: "変更履歴",
      changelogs_desc: "最新の製品アップデート",
      comparison_overview: "比較概要",
      comparison_overview_desc: "Plexicusが他のセキュリティツールとどのように比較されるかを見る",
      explore: "リソースを探る",
      feature_requests: "機能リクエスト",
      feature_requests_desc: "新機能の提出と投票",
      integrations: "統合",
      integrations_desc: "ツールとプラットフォームを接続",
      support: "サポート",
      support_desc: "Plexicusはプラットフォームを最大限に活用するための包括的なサポートを提供します。",
      title: "リソース",
      youtube_channel: "YouTubeチャンネル",
      youtube_channel_desc: "ビデオチュートリアルとウェビナー"
    },
    solutions: {
      agencies: "エージェンシー",
      agencies_desc: "デジタルおよびマーケティングエージェンシー向けのセキュリティ",
      enterprise: "エンタープライズ",
      enterprise_desc: "大規模組織向けの包括的なセキュリティ",
      explore: "ソリューションを探る",
      fintech: "フィンテック",
      fintech_desc: "金融技術向けのセキュリティソリューション",
      government: "政府",
      government_desc: "政府機関向けのセキュリティソリューション",
      group_companies: "グループ企業",
      group_companies_desc: "企業グループおよびホールディング向けのソリューション",
      healthtech: "ヘルステック",
      healthtech_desc: "HIPAA準拠のセキュリティソリューション",
      hrtech: "HRテック",
      hrtech_desc: "人事技術向けのセキュリティ",
      legal_desc: "法律会社向けのセキュリティ",
      legaltech: "リーガルテック",
      manufacturing: "製造業",
      manufacturing_desc: "産業およびIoTシステム向けのセキュリティ",
      mobile_apps: "モバイルアプリ",
      mobile_apps_desc: "iOSおよびAndroidアプリケーション向けのセキュリティ",
      retailtech: "リテールテック",
      retailtech_desc: "eコマースおよび小売プラットフォーム向けのセキュリティ",
      startups: "スタートアップ",
      startups_desc: "成長企業向けのスケーラブルなセキュリティ",
      title: "ソリューション"
    }
  }
}, Sa = nr.footer, Pa = nr.nav;
const Ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nr,
  footer: Sa,
  nav: Pa
}, Symbol.toStringTag, { value: "Module" }));
var sr = {
  footer: {
    policies: {
      legal_notice: "Juridische Kennisgeving",
      management_policy: "Beleid van het Management",
      privacy_policy: "Privacybeleid"
    },
    readiness: "SOC2 Type II Gereedheid",
    sections: {
      company: {
        links: {
          about_us: "Over Ons",
          careers: "Carrières",
          contact: "Contact",
          privacy_policy: "Privacybeleid"
        },
        title: "Bedrijf"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Voordelen",
          ciem: "CIEM",
          container_security: "Containerbeveiliging",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Platformoverzicht",
          pricing: "Prijzen",
          use_cases: "Gebruiksscenario's"
        },
        title: "Producten"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Casestudy's",
          documentation: "Documentatie",
          security_resources: "Beveiligingsbronnen"
        },
        title: "Bronnen"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Verhoog uw cybersecuritystrategie met Plexicus"
  },
  nav: {
    contact: "Contact",
    developers: {
      api_references: "API-referenties",
      api_references_desc: "Uitgebreide API-documentatie",
      documentation: "Documentatie",
      documentation_desc: "Technische handleidingen en referenties",
      github_apps: "GitHub-apps",
      github_apps_desc: "Integreer Plexicus met uw repositories",
      plexalyzer_action: "Plexalyzer-actie",
      plexalyzer_action_desc: "Automatiseer beveiliging in uw CI/CD-pijplijn",
      title: "Ontwikkelaars"
    },
    get_started: "Aan de Slag",
    languages: "Talen",
    login: "Inloggen",
    pricing: "Prijzen",
    product: {
      aspm: "ASPM",
      aspm_desc: "Beheer van Applicatiebeveiligingshouding",
      benefits: "Voordelen",
      benefits_desc: "Zie hoe Plexicus beveiliging transformeert",
      ciem: "CIEM",
      ciem_desc: "Beheer van Cloudinfrastructuurtoestemmingen",
      container_security: "Containerbeveiliging",
      container_security_desc: "Beveiliging van containers en Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Beheer van Cloudbeveiligingshouding",
      cwpp: "CWPP",
      cwpp_desc: "Cloud Workload Beschermingsplatform",
      explore: "Verken ons product",
      platform_overview: "Platformoverzicht",
      platform_overview_desc: "Geïntegreerd CNAPP-platform",
      title: "Product",
      use_cases: "Gebruiksscenario's",
      use_cases_desc: "Voorbeelden van implementatie in de praktijk"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Laatste nieuws en beveiligingsinzichten",
      branding_assets: "Merkmiddelen",
      branding_assets_desc: "Logo's en merkrichtlijnen",
      changelogs: "Wijzigingslogboeken",
      changelogs_desc: "Laatste productupdates",
      comparison_overview: "Vergelijkingsoverzicht",
      comparison_overview_desc: "Zie hoe Plexicus zich verhoudt tot andere beveiligingstools",
      explore: "Verken onze bronnen",
      feature_requests: "Functieaanvragen",
      feature_requests_desc: "Dien nieuwe functies in en stem erop",
      integrations: "Integraties",
      integrations_desc: "Verbind uw tools en platforms",
      support: "Ondersteuning",
      support_desc: "Plexicus biedt uitgebreide ondersteuning om u te helpen het meeste uit ons platform te halen.",
      title: "Bronnen",
      youtube_channel: "YouTube-kanaal",
      youtube_channel_desc: "Videotutorials en webinars"
    },
    solutions: {
      agencies: "Bureaus",
      agencies_desc: "Beveiliging voor digitale en marketingbureaus",
      enterprise: "Onderneming",
      enterprise_desc: "Uitgebreide beveiliging voor grote organisaties",
      explore: "Verken onze oplossingen",
      fintech: "FinTech",
      fintech_desc: "Beveiligingsoplossingen voor financiële technologie",
      government: "Overheid",
      government_desc: "Beveiligingsoplossingen voor overheidsinstanties",
      group_companies: "Groepsbedrijven",
      group_companies_desc: "Oplossingen voor bedrijfs- en holdinggroepen",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-conforme beveiligingsoplossingen",
      hrtech: "HRTech",
      hrtech_desc: "Beveiliging voor technologie op het gebied van personeelszaken",
      legal_desc: "Beveiliging voor juridische bedrijven",
      legaltech: "LegalTech",
      manufacturing: "Productie",
      manufacturing_desc: "Beveiliging voor industriële en IoT-systemen",
      mobile_apps: "Mobiele Apps",
      mobile_apps_desc: "Beveiliging voor iOS- en Android-applicaties",
      retailtech: "RetailTech",
      retailtech_desc: "Beveiliging voor e-commerce en retailplatforms",
      startups: "Startups",
      startups_desc: "Schaalbare beveiliging voor groeiende bedrijven",
      title: "Oplossingen"
    }
  }
}, Ea = sr.footer, za = sr.nav;
const Oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sr,
  footer: Ea,
  nav: za
}, Symbol.toStringTag, { value: "Module" }));
var ir = {
  footer: {
    policies: {
      legal_notice: "Juridisk Merknad",
      management_policy: "Ledelsespolitikk",
      privacy_policy: "Personvernpolicy"
    },
    readiness: "SOC2 Type II Beredskap",
    sections: {
      company: {
        links: {
          about_us: "Om Oss",
          careers: "Karriere",
          contact: "Kontakt",
          privacy_policy: "Personvernpolicy"
        },
        title: "Selskap"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Fordeler",
          ciem: "CIEM",
          container_security: "Container Sikkerhet",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Plattformoversikt",
          pricing: "Prising",
          use_cases: "Brukstilfeller"
        },
        title: "Produkter"
      },
      resources: {
        links: {
          blog: "Blogg",
          case_studies: "Case Studier",
          documentation: "Dokumentasjon",
          security_resources: "Sikkerhetsressurser"
        },
        title: "Ressurser"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Forbedre din cybersikkerhetsstrategi med Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "API Referanser",
      api_references_desc: "Omfattende API-dokumentasjon",
      documentation: "Dokumentasjon",
      documentation_desc: "Tekniske guider og referanser",
      github_apps: "GitHub Apper",
      github_apps_desc: "Integrer Plexicus med dine repositorier",
      plexalyzer_action: "Plexalyzer Handling",
      plexalyzer_action_desc: "Automatiser sikkerhet i din CI/CD-pipeline",
      title: "Utviklere"
    },
    get_started: "Kom i Gang",
    languages: "Språk",
    login: "Logg Inn",
    pricing: "Prising",
    product: {
      aspm: "ASPM",
      aspm_desc: "Applikasjonssikkerhetsstyring",
      benefits: "Fordeler",
      benefits_desc: "Se hvordan Plexicus transformerer sikkerhet",
      ciem: "CIEM",
      ciem_desc: "Skyinfrastrukturrettighetsstyring",
      container_security: "Container Sikkerhet",
      container_security_desc: "Container- og Kubernetes-sikkerhet",
      cspm: "CSPM",
      cspm_desc: "Sky Sikkerhetsstyring",
      cwpp: "CWPP",
      cwpp_desc: "Skyarbeidsbelastningsbeskyttelsesplattform",
      explore: "Utforsk vårt produkt",
      platform_overview: "Plattformoversikt",
      platform_overview_desc: "Enhetlig CNAPP-plattform",
      title: "Produkt",
      use_cases: "Brukstilfeller",
      use_cases_desc: "Eksempler på implementering i virkeligheten"
    },
    resources: {
      blog: "Blogg",
      blog_desc: "Siste nytt og sikkerhetsinnsikt",
      branding_assets: "Branding Ressurser",
      branding_assets_desc: "Logoer og merkevareveiledninger",
      changelogs: "Endringslogger",
      changelogs_desc: "Siste produktoppdateringer",
      comparison_overview: "Sammenligningsoversikt",
      comparison_overview_desc: "Se hvordan Plexicus sammenlignes med andre sikkerhetsverktøy",
      explore: "Utforsk våre ressurser",
      feature_requests: "Funksjonsforespørsler",
      feature_requests_desc: "Send inn og stem på nye funksjoner",
      integrations: "Integrasjoner",
      integrations_desc: "Koble dine verktøy og plattformer",
      support: "Støtte",
      support_desc: "Plexicus gir omfattende støtte for å hjelpe deg med å få mest mulig ut av vår plattform.",
      title: "Ressurser",
      youtube_channel: "YouTube Kanal",
      youtube_channel_desc: "Videoveiledninger og webinarer"
    },
    solutions: {
      agencies: "Byråer",
      agencies_desc: "Sikkerhet for digitale og markedsføringsbyråer",
      enterprise: "Bedrift",
      enterprise_desc: "Omfattende sikkerhet for store organisasjoner",
      explore: "Utforsk våre løsninger",
      fintech: "FinTech",
      fintech_desc: "Sikkerhetsløsninger for finansiell teknologi",
      government: "Regjering",
      government_desc: "Sikkerhetsløsninger for offentlige etater",
      group_companies: "Konsernselskaper",
      group_companies_desc: "Løsninger for konserngrupper og holdingselskaper",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-kompatible sikkerhetsløsninger",
      hrtech: "HRTech",
      hrtech_desc: "Sikkerhet for HR-teknologi",
      legal_desc: "Sikkerhet for juridiske selskaper",
      legaltech: "LegalTech",
      manufacturing: "Produksjon",
      manufacturing_desc: "Sikkerhet for industrielle og IoT-systemer",
      mobile_apps: "Mobilapper",
      mobile_apps_desc: "Sikkerhet for iOS- og Android-applikasjoner",
      retailtech: "RetailTech",
      retailtech_desc: "Sikkerhet for e-handel og detaljhandelsplattformer",
      startups: "Oppstartsbedrifter",
      startups_desc: "Skalerbar sikkerhet for voksende selskaper",
      title: "Løsninger"
    }
  }
}, Aa = ir.footer, Na = ir.nav;
const Ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir,
  footer: Aa,
  nav: Na
}, Symbol.toStringTag, { value: "Module" }));
var ar = {
  footer: {
    policies: {
      legal_notice: "Nota prawna",
      management_policy: "Polityka zarządzania",
      privacy_policy: "Polityka prywatności"
    },
    readiness: "Gotowość SOC2 Typ II",
    sections: {
      company: {
        links: {
          about_us: "O nas",
          careers: "Kariera",
          contact: "Kontakt",
          privacy_policy: "Polityka prywatności"
        },
        title: "Firma"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Korzyści",
          ciem: "CIEM",
          container_security: "Bezpieczeństwo kontenerów",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Przegląd platformy",
          pricing: "Cennik",
          use_cases: "Przypadki użycia"
        },
        title: "Produkty"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Studium przypadków",
          documentation: "Dokumentacja",
          security_resources: "Zasoby bezpieczeństwa"
        },
        title: "Zasoby"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Podnieś swoją strategię cyberbezpieczeństwa z Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "Odwołania API",
      api_references_desc: "Kompleksowa dokumentacja API",
      documentation: "Dokumentacja",
      documentation_desc: "Przewodniki techniczne i odniesienia",
      github_apps: "Aplikacje GitHub",
      github_apps_desc: "Integracja Plexicus z Twoimi repozytoriami",
      plexalyzer_action: "Akcja Plexalyzer",
      plexalyzer_action_desc: "Automatyzacja bezpieczeństwa w Twoim pipeline CI/CD",
      title: "Deweloperzy"
    },
    get_started: "Rozpocznij",
    languages: "Języki",
    login: "Zaloguj się",
    pricing: "Cennik",
    product: {
      aspm: "ASPM",
      aspm_desc: "Zarządzanie postawą bezpieczeństwa aplikacji",
      benefits: "Korzyści",
      benefits_desc: "Zobacz, jak Plexicus przekształca bezpieczeństwo",
      ciem: "CIEM",
      ciem_desc: "Zarządzanie uprawnieniami infrastruktury chmurowej",
      container_security: "Bezpieczeństwo kontenerów",
      container_security_desc: "Bezpieczeństwo kontenerów i Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Zarządzanie postawą bezpieczeństwa chmury",
      cwpp: "CWPP",
      cwpp_desc: "Platforma ochrony obciążeń chmurowych",
      explore: "Odkryj nasz produkt",
      platform_overview: "Przegląd platformy",
      platform_overview_desc: "Zunifikowana platforma CNAPP",
      title: "Produkt",
      use_cases: "Przypadki użycia",
      use_cases_desc: "Przykłady wdrożeń w rzeczywistych sytuacjach"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Najnowsze wiadomości i spostrzeżenia dotyczące bezpieczeństwa",
      branding_assets: "Zasoby marki",
      branding_assets_desc: "Logotypy i wytyczne dotyczące marki",
      changelogs: "Dzienniki zmian",
      changelogs_desc: "Najnowsze aktualizacje produktu",
      comparison_overview: "Przegląd porównawczy",
      comparison_overview_desc: "Zobacz, jak Plexicus wypada w porównaniu z innymi narzędziami bezpieczeństwa",
      explore: "Odkryj nasze zasoby",
      feature_requests: "Prośby o funkcje",
      feature_requests_desc: "Zgłaszaj i głosuj na nowe funkcje",
      integrations: "Integracje",
      integrations_desc: "Połącz swoje narzędzia i platformy",
      support: "Wsparcie",
      support_desc: "Plexicus zapewnia kompleksowe wsparcie, aby pomóc Ci w pełni wykorzystać naszą platformę.",
      title: "Zasoby",
      youtube_channel: "Kanał YouTube",
      youtube_channel_desc: "Samouczki wideo i webinaria"
    },
    solutions: {
      agencies: "Agencje",
      agencies_desc: "Bezpieczeństwo dla agencji cyfrowych i marketingowych",
      enterprise: "Przedsiębiorstwa",
      enterprise_desc: "Kompleksowe bezpieczeństwo dla dużych organizacji",
      explore: "Odkryj nasze rozwiązania",
      fintech: "FinTech",
      fintech_desc: "Rozwiązania bezpieczeństwa dla technologii finansowych",
      government: "Rząd",
      government_desc: "Rozwiązania bezpieczeństwa dla agencji rządowych",
      group_companies: "Grupy firm",
      group_companies_desc: "Rozwiązania dla grup korporacyjnych i holdingów",
      healthtech: "HealthTech",
      healthtech_desc: "Rozwiązania bezpieczeństwa zgodne z HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Bezpieczeństwo dla technologii zasobów ludzkich",
      legal_desc: "Bezpieczeństwo dla firm prawniczych",
      legaltech: "LegalTech",
      manufacturing: "Produkcja",
      manufacturing_desc: "Bezpieczeństwo dla systemów przemysłowych i IoT",
      mobile_apps: "Aplikacje mobilne",
      mobile_apps_desc: "Bezpieczeństwo dla aplikacji iOS i Android",
      retailtech: "RetailTech",
      retailtech_desc: "Bezpieczeństwo dla platform e-commerce i detalicznych",
      startups: "Startupy",
      startups_desc: "Skalowalne bezpieczeństwo dla rozwijających się firm",
      title: "Rozwiązania"
    }
  }
}, La = ar.footer, Ra = ar.nav;
const Ma = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar,
  footer: La,
  nav: Ra
}, Symbol.toStringTag, { value: "Module" }));
var or = {
  footer: {
    policies: {
      legal_notice: "Aviso Legal",
      management_policy: "Política de Gestão",
      privacy_policy: "Política de Privacidade"
    },
    readiness: "Prontidão SOC2 Tipo II",
    sections: {
      company: {
        links: {
          about_us: "Sobre Nós",
          careers: "Carreiras",
          contact: "Contato",
          privacy_policy: "Política de Privacidade"
        },
        title: "Empresa"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Benefícios",
          ciem: "CIEM",
          container_security: "Segurança de Contêiner",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Visão Geral da Plataforma",
          pricing: "Preços",
          use_cases: "Casos de Uso"
        },
        title: "Produtos"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Estudos de Caso",
          documentation: "Documentação",
          security_resources: "Recursos de Segurança"
        },
        title: "Recursos"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Eleve sua estratégia de cibersegurança com Plexicus"
  },
  nav: {
    contact: "Contato",
    developers: {
      api_references: "Referências de API",
      api_references_desc: "Documentação abrangente de API",
      documentation: "Documentação",
      documentation_desc: "Guias técnicos e referências",
      github_apps: "Aplicativos GitHub",
      github_apps_desc: "Integre o Plexicus com seus repositórios",
      plexalyzer_action: "Ação Plexalyzer",
      plexalyzer_action_desc: "Automatize a segurança em seu pipeline CI/CD",
      title: "Desenvolvedores"
    },
    get_started: "Comece Agora",
    languages: "Idiomas",
    login: "Login",
    pricing: "Preços",
    product: {
      aspm: "ASPM",
      aspm_desc: "Gestão de Postura de Segurança de Aplicações",
      benefits: "Benefícios",
      benefits_desc: "Veja como o Plexicus transforma a segurança",
      ciem: "CIEM",
      ciem_desc: "Gestão de Direitos de Infraestrutura em Nuvem",
      container_security: "Segurança de Contêiner",
      container_security_desc: "Segurança de contêiner e Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Gestão de Postura de Segurança em Nuvem",
      cwpp: "CWPP",
      cwpp_desc: "Plataforma de Proteção de Carga de Trabalho em Nuvem",
      explore: "Explore nosso produto",
      platform_overview: "Visão Geral da Plataforma",
      platform_overview_desc: "Plataforma CNAPP unificada",
      title: "Produto",
      use_cases: "Casos de Uso",
      use_cases_desc: "Exemplos de implementação no mundo real"
    },
    resources: {
      blog: "Blog",
      blog_desc: "Últimas notícias e insights de segurança",
      branding_assets: "Ativos de Marca",
      branding_assets_desc: "Logos e diretrizes de marca",
      changelogs: "Registros de Alterações",
      changelogs_desc: "Últimas atualizações de produtos",
      comparison_overview: "Visão Geral de Comparação",
      comparison_overview_desc: "Veja como o Plexicus se compara a outras ferramentas de segurança",
      explore: "Explore nossos recursos",
      feature_requests: "Solicitações de Recursos",
      feature_requests_desc: "Envie e vote em novos recursos",
      integrations: "Integrações",
      integrations_desc: "Conecte suas ferramentas e plataformas",
      support: "Suporte",
      support_desc: "O Plexicus oferece suporte abrangente para ajudá-lo a aproveitar ao máximo nossa plataforma.",
      title: "Recursos",
      youtube_channel: "Canal do YouTube",
      youtube_channel_desc: "Tutoriais em vídeo e webinars"
    },
    solutions: {
      agencies: "Agências",
      agencies_desc: "Segurança para agências digitais e de marketing",
      enterprise: "Empresa",
      enterprise_desc: "Segurança abrangente para grandes organizações",
      explore: "Explore nossas soluções",
      fintech: "FinTech",
      fintech_desc: "Soluções de segurança para tecnologia financeira",
      government: "Governo",
      government_desc: "Soluções de segurança para agências governamentais",
      group_companies: "Empresas do Grupo",
      group_companies_desc: "Soluções para grupos corporativos e holdings",
      healthtech: "HealthTech",
      healthtech_desc: "Soluções de segurança compatíveis com HIPAA",
      hrtech: "HRTech",
      hrtech_desc: "Segurança para tecnologia de recursos humanos",
      legal_desc: "Segurança para empresas jurídicas",
      legaltech: "LegalTech",
      manufacturing: "Manufatura",
      manufacturing_desc: "Segurança para sistemas industriais e IoT",
      mobile_apps: "Aplicativos Móveis",
      mobile_apps_desc: "Segurança para aplicativos iOS e Android",
      retailtech: "RetailTech",
      retailtech_desc: "Segurança para plataformas de e-commerce e varejo",
      startups: "Startups",
      startups_desc: "Segurança escalável para empresas em crescimento",
      title: "Soluções"
    }
  }
}, Ta = or.footer, $a = or.nav;
const Da = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: or,
  footer: Ta,
  nav: $a
}, Symbol.toStringTag, { value: "Module" }));
var lr = {
  footer: {
    policies: {
      legal_notice: "Juridiskt meddelande",
      management_policy: "Ledningspolicy",
      privacy_policy: "Integritetspolicy"
    },
    readiness: "SOC2 Typ II Beredskap",
    sections: {
      company: {
        links: {
          about_us: "Om oss",
          careers: "Karriär",
          contact: "Kontakt",
          privacy_policy: "Integritetspolicy"
        },
        title: "Företag"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Fördelar",
          ciem: "CIEM",
          container_security: "Containersäkerhet",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Plattformöversikt",
          pricing: "Prissättning",
          use_cases: "Användningsfall"
        },
        title: "Produkter"
      },
      resources: {
        links: {
          blog: "Blogg",
          case_studies: "Fallstudier",
          documentation: "Dokumentation",
          security_resources: "Säkerhetsresurser"
        },
        title: "Resurser"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Höj din cybersäkerhetsstrategi med Plexicus"
  },
  nav: {
    contact: "Kontakt",
    developers: {
      api_references: "API-referenser",
      api_references_desc: "Omfattande API-dokumentation",
      documentation: "Dokumentation",
      documentation_desc: "Tekniska guider och referenser",
      github_apps: "GitHub-appar",
      github_apps_desc: "Integrera Plexicus med dina arkiv",
      plexalyzer_action: "Plexalyzer-åtgärd",
      plexalyzer_action_desc: "Automatisera säkerhet i din CI/CD-pipeline",
      title: "Utvecklare"
    },
    get_started: "Kom igång",
    languages: "Språk",
    login: "Logga in",
    pricing: "Prissättning",
    product: {
      aspm: "ASPM",
      aspm_desc: "Hantering av applikationssäkerhetsläge",
      benefits: "Fördelar",
      benefits_desc: "Se hur Plexicus förändrar säkerheten",
      ciem: "CIEM",
      ciem_desc: "Hantering av molninfrastrukturens rättigheter",
      container_security: "Containersäkerhet",
      container_security_desc: "Säkerhet för container och Kubernetes",
      cspm: "CSPM",
      cspm_desc: "Hantering av molnsäkerhetsläge",
      cwpp: "CWPP",
      cwpp_desc: "Plattform för skydd av molnarbetsbelastning",
      explore: "Utforska vår produkt",
      platform_overview: "Plattformöversikt",
      platform_overview_desc: "Enhetlig CNAPP-plattform",
      title: "Produkt",
      use_cases: "Användningsfall",
      use_cases_desc: "Exempel på verklig implementering"
    },
    resources: {
      blog: "Blogg",
      blog_desc: "Senaste nyheterna och säkerhetsinsikter",
      branding_assets: "Varumärkesresurser",
      branding_assets_desc: "Logotyper och varumärkesriktlinjer",
      changelogs: "Ändringsloggar",
      changelogs_desc: "Senaste produktuppdateringarna",
      comparison_overview: "Jämförelseöversikt",
      comparison_overview_desc: "Se hur Plexicus jämförs med andra säkerhetsverktyg",
      explore: "Utforska våra resurser",
      feature_requests: "Funktionsförfrågningar",
      feature_requests_desc: "Skicka in och rösta på nya funktioner",
      integrations: "Integrationer",
      integrations_desc: "Anslut dina verktyg och plattformar",
      support: "Support",
      support_desc: "Plexicus erbjuder omfattande support för att hjälpa dig att få ut det mesta av vår plattform.",
      title: "Resurser",
      youtube_channel: "YouTube-kanal",
      youtube_channel_desc: "Videotutorials och webbseminarier"
    },
    solutions: {
      agencies: "Byråer",
      agencies_desc: "Säkerhet för digitala och marknadsföringsbyråer",
      enterprise: "Företag",
      enterprise_desc: "Omfattande säkerhet för stora organisationer",
      explore: "Utforska våra lösningar",
      fintech: "FinTech",
      fintech_desc: "Säkerhetslösningar för finansiell teknologi",
      government: "Regering",
      government_desc: "Säkerhetslösningar för myndigheter",
      group_companies: "Koncernföretag",
      group_companies_desc: "Lösningar för företagsgrupper och holdingbolag",
      healthtech: "HealthTech",
      healthtech_desc: "HIPAA-kompatibla säkerhetslösningar",
      hrtech: "HRTech",
      hrtech_desc: "Säkerhet för HR-teknologi",
      legal_desc: "Säkerhet för juridiska företag",
      legaltech: "LegalTech",
      manufacturing: "Tillverkning",
      manufacturing_desc: "Säkerhet för industriella och IoT-system",
      mobile_apps: "Mobilappar",
      mobile_apps_desc: "Säkerhet för iOS- och Android-applikationer",
      retailtech: "RetailTech",
      retailtech_desc: "Säkerhet för e-handels- och detaljhandelsplattformar",
      startups: "Startups",
      startups_desc: "Skalbar säkerhet för växande företag",
      title: "Lösningar"
    }
  }
}, Fa = lr.footer, Ba = lr.nav;
const Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lr,
  footer: Fa,
  nav: Ba
}, Symbol.toStringTag, { value: "Module" }));
var cr = {
  footer: {
    policies: {
      legal_notice: "Hukuki Bildirim",
      management_policy: "Yönetim Politikası",
      privacy_policy: "Gizlilik Politikası"
    },
    readiness: "SOC2 Tip II Hazırlığı",
    sections: {
      company: {
        links: {
          about_us: "Hakkımızda",
          careers: "Kariyer",
          contact: "İletişim",
          privacy_policy: "Gizlilik Politikası"
        },
        title: "Şirket"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "Faydalar",
          ciem: "CIEM",
          container_security: "Konteyner Güvenliği",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "Platform Genel Bakış",
          pricing: "Fiyatlandırma",
          use_cases: "Kullanım Senaryoları"
        },
        title: "Ürünler"
      },
      resources: {
        links: {
          blog: "Blog",
          case_studies: "Vaka Çalışmaları",
          documentation: "Dokümantasyon",
          security_resources: "Güvenlik Kaynakları"
        },
        title: "Kaynaklar"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "Plexicus ile siber güvenlik stratejinizi yükseltin"
  },
  nav: {
    contact: "İletişim",
    developers: {
      api_references: "API Referansları",
      api_references_desc: "Kapsamlı API dokümantasyonu",
      documentation: "Dokümantasyon",
      documentation_desc: "Teknik kılavuzlar ve referanslar",
      github_apps: "GitHub Uygulamaları",
      github_apps_desc: "Plexicus'u depolarınızla entegre edin",
      plexalyzer_action: "Plexalyzer Eylemi",
      plexalyzer_action_desc: "CI/CD hattınızda güvenliği otomatikleştirin",
      title: "Geliştiriciler"
    },
    get_started: "Başlayın",
    languages: "Diller",
    login: "Giriş",
    pricing: "Fiyatlandırma",
    product: {
      aspm: "ASPM",
      aspm_desc: "Uygulama Güvenliği Duruş Yönetimi",
      benefits: "Faydalar",
      benefits_desc: "Plexicus'un güvenliği nasıl dönüştürdüğünü görün",
      ciem: "CIEM",
      ciem_desc: "Bulut Altyapısı Yetki Yönetimi",
      container_security: "Konteyner Güvenliği",
      container_security_desc: "Konteyner ve Kubernetes güvenliği",
      cspm: "CSPM",
      cspm_desc: "Bulut Güvenliği Duruş Yönetimi",
      cwpp: "CWPP",
      cwpp_desc: "Bulut İş Yükü Koruma Platformu",
      explore: "Ürünümüzü keşfedin",
      platform_overview: "Platform Genel Bakış",
      platform_overview_desc: "Birleşik CNAPP platformu",
      title: "Ürün",
      use_cases: "Kullanım Senaryoları",
      use_cases_desc: "Gerçek dünya uygulama örnekleri"
    },
    resources: {
      blog: "Blog",
      blog_desc: "En son haberler ve güvenlik içgörüleri",
      branding_assets: "Marka Varlıkları",
      branding_assets_desc: "Logolar ve marka yönergeleri",
      changelogs: "Değişiklik Günlükleri",
      changelogs_desc: "En son ürün güncellemeleri",
      comparison_overview: "Karşılaştırma Genel Bakış",
      comparison_overview_desc: "Plexicus'un diğer güvenlik araçlarıyla nasıl karşılaştırıldığını görün",
      explore: "Kaynaklarımızı keşfedin",
      feature_requests: "Özellik Talepleri",
      feature_requests_desc: "Yeni özellikler için oy verin ve gönderin",
      integrations: "Entegrasyonlar",
      integrations_desc: "Araçlarınızı ve platformlarınızı bağlayın",
      support: "Destek",
      support_desc: "Plexicus, platformumuzdan en iyi şekilde yararlanmanıza yardımcı olmak için kapsamlı destek sağlar.",
      title: "Kaynaklar",
      youtube_channel: "YouTube Kanalı",
      youtube_channel_desc: "Video eğitimleri ve web seminerleri"
    },
    solutions: {
      agencies: "Ajanslar",
      agencies_desc: "Dijital ve pazarlama ajansları için güvenlik",
      enterprise: "Kurumsal",
      enterprise_desc: "Büyük organizasyonlar için kapsamlı güvenlik",
      explore: "Çözümlerimizi keşfedin",
      fintech: "FinTech",
      fintech_desc: "Finansal teknoloji için güvenlik çözümleri",
      government: "Devlet",
      government_desc: "Devlet kurumları için güvenlik çözümleri",
      group_companies: "Grup Şirketleri",
      group_companies_desc: "Kurumsal gruplar ve holdingler için çözümler",
      healthtech: "Sağlık Teknolojisi",
      healthtech_desc: "HIPAA uyumlu güvenlik çözümleri",
      hrtech: "İnsan Kaynakları Teknolojisi",
      hrtech_desc: "İnsan kaynakları teknolojisi için güvenlik",
      legal_desc: "Hukuk şirketleri için güvenlik",
      legaltech: "Hukuk Teknolojisi",
      manufacturing: "Üretim",
      manufacturing_desc: "Endüstriyel ve IoT sistemleri için güvenlik",
      mobile_apps: "Mobil Uygulamalar",
      mobile_apps_desc: "iOS ve Android uygulamaları için güvenlik",
      retailtech: "Perakende Teknolojisi",
      retailtech_desc: "E-ticaret ve perakende platformları için güvenlik",
      startups: "Girişimler",
      startups_desc: "Büyüyen şirketler için ölçeklenebilir güvenlik",
      title: "Çözümler"
    }
  }
}, Ka = cr.footer, Ha = cr.nav;
const Ga = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cr,
  footer: Ka,
  nav: Ha
}, Symbol.toStringTag, { value: "Module" }));
var ur = {
  footer: {
    policies: {
      legal_notice: "法律声明",
      management_policy: "管理政策",
      privacy_policy: "隐私政策"
    },
    readiness: "SOC2 Type II 准备",
    sections: {
      company: {
        links: {
          about_us: "关于我们",
          careers: "职业",
          contact: "联系",
          privacy_policy: "隐私政策"
        },
        title: "公司"
      },
      products: {
        links: {
          aspm: "ASPM",
          benefits: "优势",
          ciem: "CIEM",
          container_security: "容器安全",
          cspm: "CSPM",
          cwpp: "CWPP",
          platform_overview: "平台概览",
          pricing: "定价",
          use_cases: "使用案例"
        },
        title: "产品"
      },
      resources: {
        links: {
          blog: "博客",
          case_studies: "案例研究",
          documentation: "文档",
          security_resources: "安全资源"
        },
        title: "资源"
      }
    },
    social_media: {
      github: "GitHub",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      twitter: "Twitter"
    },
    tagline: "提升您的网络安全策略与Plexicus"
  },
  nav: {
    contact: "联系",
    developers: {
      api_references: "API参考",
      api_references_desc: "全面的API文档",
      documentation: "文档",
      documentation_desc: "技术指南和参考",
      github_apps: "GitHub应用",
      github_apps_desc: "将Plexicus与您的存储库集成",
      plexalyzer_action: "Plexalyzer操作",
      plexalyzer_action_desc: "在您的CI/CD管道中自动化安全",
      title: "开发者"
    },
    get_started: "开始使用",
    languages: "语言",
    login: "登录",
    pricing: "定价",
    product: {
      aspm: "ASPM",
      aspm_desc: "应用安全态势管理",
      benefits: "优势",
      benefits_desc: "看看Plexicus如何改变安全性",
      ciem: "CIEM",
      ciem_desc: "云基础设施权限管理",
      container_security: "容器安全",
      container_security_desc: "容器和Kubernetes安全",
      cspm: "CSPM",
      cspm_desc: "云安全态势管理",
      cwpp: "CWPP",
      cwpp_desc: "云工作负载保护平台",
      explore: "探索我们的产品",
      platform_overview: "平台概览",
      platform_overview_desc: "统一的CNAPP平台",
      title: "产品",
      use_cases: "使用案例",
      use_cases_desc: "实际应用示例"
    },
    resources: {
      blog: "博客",
      blog_desc: "最新新闻和安全见解",
      branding_assets: "品牌资产",
      branding_assets_desc: "标志和品牌指南",
      changelogs: "更新日志",
      changelogs_desc: "最新产品更新",
      comparison_overview: "比较概览",
      comparison_overview_desc: "看看Plexicus与其他安全工具的比较",
      explore: "探索我们的资源",
      feature_requests: "功能请求",
      feature_requests_desc: "提交和投票新功能",
      integrations: "集成",
      integrations_desc: "连接您的工具和平台",
      support: "支持",
      support_desc: "Plexicus提供全面支持，帮助您充分利用我们的平台。",
      title: "资源",
      youtube_channel: "YouTube频道",
      youtube_channel_desc: "视频教程和网络研讨会"
    },
    solutions: {
      agencies: "代理机构",
      agencies_desc: "数字和营销代理机构的安全性",
      enterprise: "企业",
      enterprise_desc: "大型组织的全面安全",
      explore: "探索我们的解决方案",
      fintech: "金融科技",
      fintech_desc: "金融科技的安全解决方案",
      government: "政府",
      government_desc: "政府机构的安全解决方案",
      group_companies: "集团公司",
      group_companies_desc: "企业集团和控股公司的解决方案",
      healthtech: "健康科技",
      healthtech_desc: "符合HIPAA的安全解决方案",
      hrtech: "人力资源科技",
      hrtech_desc: "人力资源技术的安全性",
      legal_desc: "法律公司的安全性",
      legaltech: "法律科技",
      manufacturing: "制造业",
      manufacturing_desc: "工业和物联网系统的安全性",
      mobile_apps: "移动应用",
      mobile_apps_desc: "iOS和Android应用的安全性",
      retailtech: "零售科技",
      retailtech_desc: "电子商务和零售平台的安全性",
      startups: "初创公司",
      startups_desc: "为成长型公司的可扩展安全性",
      title: "解决方案"
    }
  }
}, Va = ur.footer, Ua = ur.nav;
const qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ur,
  footer: Va,
  nav: Ua
}, Symbol.toStringTag, { value: "Module" }));
function Bt(t, e = "") {
  let r = {};
  if (t && typeof t == "object") {
    for (const n in t)
      if (Object.prototype.hasOwnProperty.call(t, n)) {
        const s = n === "default" && !e ? "" : e ? `${e}.${n}` : n, i = t[n];
        Array.isArray(i) ? (r[s] = i, i.forEach((o, l) => {
          typeof o == "object" && o !== null ? r = {
            ...r,
            ...Bt(o, `${s}.${l}`)
          } : r[`${s}.${l}`] = o;
        })) : typeof i == "object" && i !== null ? r = { ...r, ...Bt(i, s) } : r[s] = i;
      }
  }
  return r;
}
const ve = {}, Fr = /* @__PURE__ */ Object.assign({ "./ar/translation.yaml": Ui, "./cs/translation.yaml": Ji, "./da/translation.yaml": Qi, "./de/translation.yaml": ra, "./en/translation.yaml": aa, "./es/translation.yaml": ca, "./fi/translation.yaml": pa, "./fr/translation.yaml": ga, "./he/translation.yaml": xa, "./id/translation.yaml": _a, "./it/translation.yaml": ja, "./ja/translation.yaml": Ca, "./nl/translation.yaml": Oa, "./no/translation.yaml": Ia, "./pl/translation.yaml": Ma, "./pt/translation.yaml": Da, "./sv/translation.yaml": Wa, "./tr/translation.yaml": Ga, "./zh/translation.yaml": qa });
for (const t in Fr) {
  const e = Fr[t], n = t.replace(/^\.\/|\/$/g, "").split("/")[0];
  if (ve[n] || (ve[n] = {}), typeof e != "object" || e === null) {
    console.warn(`File ${t} is not a valid object, skipping.`);
    continue;
  }
  ve[n].translation || (ve[n].translation = {}), Object.assign(ve[n].translation, Bt(e));
}
const Ya = Object.keys(ve);
te.use(bi).init({
  lng: "en",
  supportedLngs: Ya,
  resources: ve,
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const wn = "https://www.plexicus.ai", jn = "https://blog.plexicus.ai", Qe = "https://app.plexicus.ai";
function Ja(t) {
  const [e, r] = re(!1);
  return ie(() => {
    const n = window.matchMedia(t), s = () => r(n.matches);
    return s(), n.addEventListener("change", s), () => n.removeEventListener("change", s);
  }, [t]), e;
}
function Za({ className: t, type: e, ...r }) {
  return /* @__PURE__ */ a.jsx(
    "input",
    {
      type: e,
      "data-slot": "input",
      className: Q(
        "file:text-foreground placeholder:text-white/70 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        t
      ),
      ...r
    }
  );
}
function Sn(t) {
  const { currentLang: e = "en", debounceMs: r = 1e3, minQueryLength: n = 2, blogUrl: s, webUrl: i } = t, [o, l] = re(""), [u, c] = re([]), [d, p] = re(!1), [m, g] = re(!1), h = Ne(null);
  ie(() => {
    if (h.current && clearTimeout(h.current), o.trim().length < n) {
      c([]), g(!1);
      return;
    }
    return h.current = setTimeout(async () => {
      await v(o.trim());
    }, r), () => {
      h.current && clearTimeout(h.current);
    };
  }, [o, e, r, n]);
  const v = async (L) => {
    p(!0);
    const A = e === "en" ? "" : "/";
    try {
      const E = [], [R, S] = await Promise.allSettled([
        fetch(`${i}/api/${e}/pages.json?t=${Date.now()}`).then((I) => I.json()),
        fetch(`${s}/api/${e}/pages.json?t=${Date.now()}`).then((I) => I.json())
      ]);
      if (R.status === "fulfilled") {
        const I = _(R.value.pages || [], L);
        E.push(...I.map((w) => ({ ...w, lang: e, path: w.path === "/" && e === "en" ? i : `${i}${A}${w.path}`, type: "page" })));
      }
      if (S.status === "fulfilled") {
        const I = _(S.value.pages || [], L);
        E.push(...I.map((w) => ({ ...w, lang: e, path: `${s}/${w.path}`, type: "blog" })));
      }
      if (E.length < 3 && e !== "en") {
        const [I, w] = await Promise.allSettled([
          fetch(`${i}/api/en/pages.json?t=${Date.now()}`).then((K) => K.json()),
          fetch(`${s}/api/en/pages.json?t=${Date.now()}`).then((K) => K.json())
        ]);
        if (I.status === "fulfilled") {
          const K = _(I.value.pages || [], L);
          E.push(...K.map((U) => ({ ...U, lang: "en", path: U.path === "/" ? i : `${i}${A}${U.path}`, type: "page" })));
        }
        if (w.status === "fulfilled") {
          const K = _(w.value.pages || [], L);
          E.push(...K.map((U) => ({ ...U, lang: "en", path: `${s}/${U.path}`, type: "blog" })));
        }
      }
      const k = E.filter((I, w, K) => w === K.findIndex((U) => U.path === I.path)).slice(0, 8);
      c(k), g(k.length > 0);
    } catch (E) {
      console.error("Search error:", E), c([]), g(!1);
    } finally {
      p(!1);
    }
  }, _ = (L, A) => {
    const E = A.toLowerCase();
    return L.filter((R) => {
      var w;
      const S = R.title.toLowerCase().includes(E), k = R.description.toLowerCase().includes(E), I = (w = R.keywords) == null ? void 0 : w.some((K) => K.toLowerCase().includes(E));
      return S || k || I;
    });
  }, C = () => {
    l(""), c([]), g(!1);
  }, x = (L) => {
    window.location.href = `${L.path}`, g(!1);
  };
  return ie(() => {
    v("platform");
  }, []), {
    query: o,
    setQuery: l,
    results: u,
    isLoading: d,
    isOpen: m,
    setIsOpen: g,
    clearSearch: C,
    handleResultClick: x
  };
}
function Xa({ currentLang: t = "en", onClose: e, blogUrl: r, webUrl: n }) {
  const s = Ne(null), { query: i, setQuery: o, results: l, isLoading: u, clearSearch: c, handleResultClick: d } = Sn({ currentLang: t, blogUrl: r, webUrl: n }), { t: p } = pt(), m = () => {
    c(), e();
  };
  return /* @__PURE__ */ a.jsx("div", { className: "z-50 bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ a.jsxs("div", { className: " z-50 h-full bg-background ", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex items-center gap-4 p-4 border-b", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ a.jsx(nn, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ a.jsx(
          Za,
          {
            ref: s,
            type: "text",
            placeholder: p("search.placeholder"),
            value: i,
            onChange: (g) => o(g.target.value),
            className: "pl-10 border-2 focus:border-[#8220ff] focus:ring-[#8220ff]/20 transition-all duration-200"
          }
        )
      ] }),
      l.length > 0 && /* @__PURE__ */ a.jsx(me, { variant: "ghost", size: "icon", onClick: m, children: /* @__PURE__ */ a.jsx(xs, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "p-4 max-h-[calc(100vh-80px)] overflow-y-auto", children: u ? /* @__PURE__ */ a.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: p("search.searching") }) : l.length > 0 ? /* @__PURE__ */ a.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ a.jsx(Qa, { results: l, onClick: d }) }) : i.trim().length >= 2 ? /* @__PURE__ */ a.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: p("search.not_found") }) : /* @__PURE__ */ a.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: p("search.start_typing") }) })
  ] }) });
}
function Qa({ results: t, onClick: e }) {
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: t.map((r, n) => /* @__PURE__ */ a.jsx(
    "button",
    {
      onClick: () => e(r),
      className: "w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group",
      children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ a.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ a.jsx("h4", { className: "font-medium text-sm line-clamp-1 group-hover:text-[#8220ff]", children: r.title }),
          /* @__PURE__ */ a.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: r.description }),
          r.keywords && r.keywords.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: r.keywords.slice(0, 3).map((s, i) => /* @__PURE__ */ a.jsx(
            "span",
            {
              className: "inline-block px-2 py-1 text-xs bg-[#8220ff]/60 text-white rounded-full",
              children: s
            },
            i
          )) })
        ] }),
        /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col p-2 items-center justify-start gap-2", children: [
          r.lang && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-muted-foreground uppercase font-mono", children: r.lang }),
          r.type && /* @__PURE__ */ a.jsx("span", { className: Q("text-xs rounded-sm p-1 uppercase font-mono", r.type === "page" ? "bg-[#8220ff]/60 text-white " : "text-[#8220ff]/80 bg-gray-200"), children: r.type })
        ] })
      ] })
    },
    `${r.path}-${n}`
  )) });
}
var Br = 1, eo = 0.9, to = 0.8, ro = 0.17, kt = 0.1, wt = 0.999, no = 0.9999, so = 0.99, io = /[\\\/_+.#"@\[\(\{&]/, ao = /[\\\/_+.#"@\[\(\{&]/g, oo = /[\s-]/, Pn = /[\s-]/g;
function Wt(t, e, r, n, s, i, o) {
  if (i === e.length) return s === t.length ? Br : so;
  var l = `${s},${i}`;
  if (o[l] !== void 0) return o[l];
  for (var u = n.charAt(i), c = r.indexOf(u, s), d = 0, p, m, g, h; c >= 0; ) p = Wt(t, e, r, n, c + 1, i + 1, o), p > d && (c === s ? p *= Br : io.test(t.charAt(c - 1)) ? (p *= to, g = t.slice(s, c - 1).match(ao), g && s > 0 && (p *= Math.pow(wt, g.length))) : oo.test(t.charAt(c - 1)) ? (p *= eo, h = t.slice(s, c - 1).match(Pn), h && s > 0 && (p *= Math.pow(wt, h.length))) : (p *= ro, s > 0 && (p *= Math.pow(wt, c - s))), t.charAt(c) !== e.charAt(i) && (p *= no)), (p < kt && r.charAt(c - 1) === n.charAt(i + 1) || n.charAt(i + 1) === n.charAt(i) && r.charAt(c - 1) !== n.charAt(i)) && (m = Wt(t, e, r, n, c + 1, i + 2, o), m * kt > p && (p = m * kt)), p > d && (d = p), c = r.indexOf(u, c + 1);
  return o[l] = d, d;
}
function Wr(t) {
  return t.toLowerCase().replace(Pn, " ");
}
function lo(t, e, r) {
  return t = r && r.length > 0 ? `${t + " " + r.join(" ")}` : t, Wt(t, e, Wr(t), Wr(e), 0, 0, {});
}
function fe(t, e, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (t == null || t(s), r === !1 || !s.defaultPrevented)
      return e == null ? void 0 : e(s);
  };
}
function Kr(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function ye(...t) {
  return (e) => {
    let r = !1;
    const n = t.map((s) => {
      const i = Kr(s, e);
      return !r && typeof i == "function" && (r = !0), i;
    });
    if (r)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          typeof i == "function" ? i() : Kr(t[s], null);
        }
      };
  };
}
function ke(...t) {
  return f.useCallback(ye(...t), t);
}
function co(t, e) {
  const r = f.createContext(e), n = (i) => {
    const { children: o, ...l } = i, u = f.useMemo(() => l, Object.values(l));
    return /* @__PURE__ */ a.jsx(r.Provider, { value: u, children: o });
  };
  n.displayName = t + "Provider";
  function s(i) {
    const o = f.useContext(r);
    if (o) return o;
    if (e !== void 0) return e;
    throw new Error(`\`${i}\` must be used within \`${t}\``);
  }
  return [n, s];
}
function uo(t, e = []) {
  let r = [];
  function n(i, o) {
    const l = f.createContext(o), u = r.length;
    r = [...r, o];
    const c = (p) => {
      var C;
      const { scope: m, children: g, ...h } = p, v = ((C = m == null ? void 0 : m[t]) == null ? void 0 : C[u]) || l, _ = f.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ a.jsx(v.Provider, { value: _, children: g });
    };
    c.displayName = i + "Provider";
    function d(p, m) {
      var v;
      const g = ((v = m == null ? void 0 : m[t]) == null ? void 0 : v[u]) || l, h = f.useContext(g);
      if (h) return h;
      if (o !== void 0) return o;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [c, d];
  }
  const s = () => {
    const i = r.map((o) => f.createContext(o));
    return function(l) {
      const u = (l == null ? void 0 : l[t]) || i;
      return f.useMemo(
        () => ({ [`__scope${t}`]: { ...l, [t]: u } }),
        [l, u]
      );
    };
  };
  return s.scopeName = t, [n, po(s, ...e)];
}
function po(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const r = () => {
    const n = t.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(i) {
      const o = n.reduce((l, { useScope: u, scopeName: c }) => {
        const p = u(i)[`__scope${c}`];
        return { ...l, ...p };
      }, {});
      return f.useMemo(() => ({ [`__scope${e.scopeName}`]: o }), [o]);
    };
  };
  return r.scopeName = e.scopeName, r;
}
var Ge = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {
}, fo = f[" useId ".trim().toString()] || (() => {
}), ho = 0;
function ue(t) {
  const [e, r] = f.useState(fo());
  return Ge(() => {
    r((n) => n ?? String(ho++));
  }, [t]), t || (e ? `radix-${e}` : "");
}
var go = f[" useInsertionEffect ".trim().toString()] || Ge;
function mo({
  prop: t,
  defaultProp: e,
  onChange: r = () => {
  },
  caller: n
}) {
  const [s, i, o] = vo({
    defaultProp: e,
    onChange: r
  }), l = t !== void 0, u = l ? t : s;
  {
    const d = f.useRef(t !== void 0);
    f.useEffect(() => {
      const p = d.current;
      p !== l && console.warn(
        `${n} is changing from ${p ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), d.current = l;
    }, [l, n]);
  }
  const c = f.useCallback(
    (d) => {
      var p;
      if (l) {
        const m = xo(d) ? d(t) : d;
        m !== t && ((p = o.current) == null || p.call(o, m));
      } else
        i(d);
    },
    [l, t, i, o]
  );
  return [u, c];
}
function vo({
  defaultProp: t,
  onChange: e
}) {
  const [r, n] = f.useState(t), s = f.useRef(r), i = f.useRef(e);
  return go(() => {
    i.current = e;
  }, [e]), f.useEffect(() => {
    var o;
    s.current !== r && ((o = i.current) == null || o.call(i, r), s.current = r);
  }, [r, s]), [r, n, i];
}
function xo(t) {
  return typeof t == "function";
}
// @__NO_SIDE_EFFECTS__
function Cn(t) {
  const e = /* @__PURE__ */ yo(t), r = f.forwardRef((n, s) => {
    const { children: i, ...o } = n, l = f.Children.toArray(i), u = l.find(_o);
    if (u) {
      const c = u.props.children, d = l.map((p) => p === u ? f.Children.count(c) > 1 ? f.Children.only(null) : f.isValidElement(c) ? c.props.children : null : p);
      return /* @__PURE__ */ a.jsx(e, { ...o, ref: s, children: f.isValidElement(c) ? f.cloneElement(c, void 0, d) : null });
    }
    return /* @__PURE__ */ a.jsx(e, { ...o, ref: s, children: i });
  });
  return r.displayName = `${t}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function yo(t) {
  const e = f.forwardRef((r, n) => {
    const { children: s, ...i } = r;
    if (f.isValidElement(s)) {
      const o = wo(s), l = ko(i, s.props);
      return s.type !== f.Fragment && (l.ref = n ? ye(n, o) : o), f.cloneElement(s, l);
    }
    return f.Children.count(s) > 1 ? f.Children.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var bo = Symbol("radix.slottable");
function _o(t) {
  return f.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === bo;
}
function ko(t, e) {
  const r = { ...e };
  for (const n in e) {
    const s = t[n], i = e[n];
    /^on[A-Z]/.test(n) ? s && i ? r[n] = (...l) => {
      const u = i(...l);
      return s(...l), u;
    } : s && (r[n] = s) : n === "style" ? r[n] = { ...s, ...i } : n === "className" && (r[n] = [s, i].filter(Boolean).join(" "));
  }
  return { ...t, ...r };
}
function wo(t) {
  var n, s;
  let e = (n = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : n.get, r = e && "isReactWarning" in e && e.isReactWarning;
  return r ? t.ref : (e = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
var jo = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], ee = jo.reduce((t, e) => {
  const r = /* @__PURE__ */ Cn(`Primitive.${e}`), n = f.forwardRef((s, i) => {
    const { asChild: o, ...l } = s, u = o ? r : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ a.jsx(u, { ...l, ref: i });
  });
  return n.displayName = `Primitive.${e}`, { ...t, [e]: n };
}, {});
function So(t, e) {
  t && ks.flushSync(() => t.dispatchEvent(e));
}
function Ve(t) {
  const e = f.useRef(t);
  return f.useEffect(() => {
    e.current = t;
  }), f.useMemo(() => (...r) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...r);
  }, []);
}
function Po(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Ve(t);
  f.useEffect(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return e.addEventListener("keydown", n, { capture: !0 }), () => e.removeEventListener("keydown", n, { capture: !0 });
  }, [r, e]);
}
var Co = "DismissableLayer", Kt = "dismissableLayer.update", Eo = "dismissableLayer.pointerDownOutside", zo = "dismissableLayer.focusOutside", Hr, En = f.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), zn = f.forwardRef(
  (t, e) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: s,
      onFocusOutside: i,
      onInteractOutside: o,
      onDismiss: l,
      ...u
    } = t, c = f.useContext(En), [d, p] = f.useState(null), m = (d == null ? void 0 : d.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, g] = f.useState({}), h = ke(e, (S) => p(S)), v = Array.from(c.layers), [_] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), C = v.indexOf(_), x = d ? v.indexOf(d) : -1, L = c.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= C, E = No((S) => {
      const k = S.target, I = [...c.branches].some((w) => w.contains(k));
      !A || I || (s == null || s(S), o == null || o(S), S.defaultPrevented || l == null || l());
    }, m), R = Io((S) => {
      const k = S.target;
      [...c.branches].some((w) => w.contains(k)) || (i == null || i(S), o == null || o(S), S.defaultPrevented || l == null || l());
    }, m);
    return Po((S) => {
      x === c.layers.size - 1 && (n == null || n(S), !S.defaultPrevented && l && (S.preventDefault(), l()));
    }, m), f.useEffect(() => {
      if (d)
        return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (Hr = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(d)), c.layers.add(d), Gr(), () => {
          r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Hr);
        };
    }, [d, m, r, c]), f.useEffect(() => () => {
      d && (c.layers.delete(d), c.layersWithOutsidePointerEventsDisabled.delete(d), Gr());
    }, [d, c]), f.useEffect(() => {
      const S = () => g({});
      return document.addEventListener(Kt, S), () => document.removeEventListener(Kt, S);
    }, []), /* @__PURE__ */ a.jsx(
      ee.div,
      {
        ...u,
        ref: h,
        style: {
          pointerEvents: L ? A ? "auto" : "none" : void 0,
          ...t.style
        },
        onFocusCapture: fe(t.onFocusCapture, R.onFocusCapture),
        onBlurCapture: fe(t.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: fe(
          t.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
zn.displayName = Co;
var Oo = "DismissableLayerBranch", Ao = f.forwardRef((t, e) => {
  const r = f.useContext(En), n = f.useRef(null), s = ke(e, n);
  return f.useEffect(() => {
    const i = n.current;
    if (i)
      return r.branches.add(i), () => {
        r.branches.delete(i);
      };
  }, [r.branches]), /* @__PURE__ */ a.jsx(ee.div, { ...t, ref: s });
});
Ao.displayName = Oo;
function No(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Ve(t), n = f.useRef(!1), s = f.useRef(() => {
  });
  return f.useEffect(() => {
    const i = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          On(
            Eo,
            r,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: l };
        l.pointerType === "touch" ? (e.removeEventListener("click", s.current), s.current = u, e.addEventListener("click", s.current, { once: !0 })) : u();
      } else
        e.removeEventListener("click", s.current);
      n.current = !1;
    }, o = window.setTimeout(() => {
      e.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(o), e.removeEventListener("pointerdown", i), e.removeEventListener("click", s.current);
    };
  }, [e, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Io(t, e = globalThis == null ? void 0 : globalThis.document) {
  const r = Ve(t), n = f.useRef(!1);
  return f.useEffect(() => {
    const s = (i) => {
      i.target && !n.current && On(zo, r, { originalEvent: i }, {
        discrete: !1
      });
    };
    return e.addEventListener("focusin", s), () => e.removeEventListener("focusin", s);
  }, [e, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Gr() {
  const t = new CustomEvent(Kt);
  document.dispatchEvent(t);
}
function On(t, e, r, { discrete: n }) {
  const s = r.originalEvent.target, i = new CustomEvent(t, { bubbles: !1, cancelable: !0, detail: r });
  e && s.addEventListener(t, e, { once: !0 }), n ? So(s, i) : s.dispatchEvent(i);
}
var jt = "focusScope.autoFocusOnMount", St = "focusScope.autoFocusOnUnmount", Vr = { bubbles: !1, cancelable: !0 }, Lo = "FocusScope", An = f.forwardRef((t, e) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: i,
    ...o
  } = t, [l, u] = f.useState(null), c = Ve(s), d = Ve(i), p = f.useRef(null), m = ke(e, (v) => u(v)), g = f.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  f.useEffect(() => {
    if (n) {
      let v = function(L) {
        if (g.paused || !l) return;
        const A = L.target;
        l.contains(A) ? p.current = A : pe(p.current, { select: !0 });
      }, _ = function(L) {
        if (g.paused || !l) return;
        const A = L.relatedTarget;
        A !== null && (l.contains(A) || pe(p.current, { select: !0 }));
      }, C = function(L) {
        if (document.activeElement === document.body)
          for (const E of L)
            E.removedNodes.length > 0 && pe(l);
      };
      document.addEventListener("focusin", v), document.addEventListener("focusout", _);
      const x = new MutationObserver(C);
      return l && x.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", v), document.removeEventListener("focusout", _), x.disconnect();
      };
    }
  }, [n, l, g.paused]), f.useEffect(() => {
    if (l) {
      qr.add(g);
      const v = document.activeElement;
      if (!l.contains(v)) {
        const C = new CustomEvent(jt, Vr);
        l.addEventListener(jt, c), l.dispatchEvent(C), C.defaultPrevented || (Ro(Fo(Nn(l)), { select: !0 }), document.activeElement === v && pe(l));
      }
      return () => {
        l.removeEventListener(jt, c), setTimeout(() => {
          const C = new CustomEvent(St, Vr);
          l.addEventListener(St, d), l.dispatchEvent(C), C.defaultPrevented || pe(v ?? document.body, { select: !0 }), l.removeEventListener(St, d), qr.remove(g);
        }, 0);
      };
    }
  }, [l, c, d, g]);
  const h = f.useCallback(
    (v) => {
      if (!r && !n || g.paused) return;
      const _ = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, C = document.activeElement;
      if (_ && C) {
        const x = v.currentTarget, [L, A] = Mo(x);
        L && A ? !v.shiftKey && C === A ? (v.preventDefault(), r && pe(L, { select: !0 })) : v.shiftKey && C === L && (v.preventDefault(), r && pe(A, { select: !0 })) : C === x && v.preventDefault();
      }
    },
    [r, n, g.paused]
  );
  return /* @__PURE__ */ a.jsx(ee.div, { tabIndex: -1, ...o, ref: m, onKeyDown: h });
});
An.displayName = Lo;
function Ro(t, { select: e = !1 } = {}) {
  const r = document.activeElement;
  for (const n of t)
    if (pe(n, { select: e }), document.activeElement !== r) return;
}
function Mo(t) {
  const e = Nn(t), r = Ur(e, t), n = Ur(e.reverse(), t);
  return [r, n];
}
function Nn(t) {
  const e = [], r = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const s = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) e.push(r.currentNode);
  return e;
}
function Ur(t, e) {
  for (const r of t)
    if (!To(r, { upTo: e })) return r;
}
function To(t, { upTo: e }) {
  if (getComputedStyle(t).visibility === "hidden") return !0;
  for (; t; ) {
    if (e !== void 0 && t === e) return !1;
    if (getComputedStyle(t).display === "none") return !0;
    t = t.parentElement;
  }
  return !1;
}
function $o(t) {
  return t instanceof HTMLInputElement && "select" in t;
}
function pe(t, { select: e = !1 } = {}) {
  if (t && t.focus) {
    const r = document.activeElement;
    t.focus({ preventScroll: !0 }), t !== r && $o(t) && e && t.select();
  }
}
var qr = Do();
function Do() {
  let t = [];
  return {
    add(e) {
      const r = t[0];
      e !== r && (r == null || r.pause()), t = Yr(t, e), t.unshift(e);
    },
    remove(e) {
      var r;
      t = Yr(t, e), (r = t[0]) == null || r.resume();
    }
  };
}
function Yr(t, e) {
  const r = [...t], n = r.indexOf(e);
  return n !== -1 && r.splice(n, 1), r;
}
function Fo(t) {
  return t.filter((e) => e.tagName !== "A");
}
var Bo = "Portal", In = f.forwardRef((t, e) => {
  var l;
  const { container: r, ...n } = t, [s, i] = f.useState(!1);
  Ge(() => i(!0), []);
  const o = r || s && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return o ? ws.createPortal(/* @__PURE__ */ a.jsx(ee.div, { ...n, ref: e }), o) : null;
});
In.displayName = Bo;
function Wo(t, e) {
  return f.useReducer((r, n) => e[r][n] ?? r, t);
}
var gt = (t) => {
  const { present: e, children: r } = t, n = Ko(e), s = typeof r == "function" ? r({ present: n.isPresent }) : f.Children.only(r), i = ke(n.ref, Ho(s));
  return typeof r == "function" || n.isPresent ? f.cloneElement(s, { ref: i }) : null;
};
gt.displayName = "Presence";
function Ko(t) {
  const [e, r] = f.useState(), n = f.useRef(null), s = f.useRef(t), i = f.useRef("none"), o = t ? "mounted" : "unmounted", [l, u] = Wo(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return f.useEffect(() => {
    const c = et(n.current);
    i.current = l === "mounted" ? c : "none";
  }, [l]), Ge(() => {
    const c = n.current, d = s.current;
    if (d !== t) {
      const m = i.current, g = et(c);
      t ? u("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? u("UNMOUNT") : u(d && m !== g ? "ANIMATION_OUT" : "UNMOUNT"), s.current = t;
    }
  }, [t, u]), Ge(() => {
    if (e) {
      let c;
      const d = e.ownerDocument.defaultView ?? window, p = (g) => {
        const v = et(n.current).includes(CSS.escape(g.animationName));
        if (g.target === e && v && (u("ANIMATION_END"), !s.current)) {
          const _ = e.style.animationFillMode;
          e.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            e.style.animationFillMode === "forwards" && (e.style.animationFillMode = _);
          });
        }
      }, m = (g) => {
        g.target === e && (i.current = et(n.current));
      };
      return e.addEventListener("animationstart", m), e.addEventListener("animationcancel", p), e.addEventListener("animationend", p), () => {
        d.clearTimeout(c), e.removeEventListener("animationstart", m), e.removeEventListener("animationcancel", p), e.removeEventListener("animationend", p);
      };
    } else
      u("ANIMATION_END");
  }, [e, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: f.useCallback((c) => {
      n.current = c ? getComputedStyle(c) : null, r(c);
    }, [])
  };
}
function et(t) {
  return (t == null ? void 0 : t.animationName) || "none";
}
function Ho(t) {
  var n, s;
  let e = (n = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : n.get, r = e && "isReactWarning" in e && e.isReactWarning;
  return r ? t.ref : (e = (s = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : s.get, r = e && "isReactWarning" in e && e.isReactWarning, r ? t.props.ref : t.props.ref || t.ref);
}
var Pt = 0;
function Go() {
  f.useEffect(() => {
    const t = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", t[0] ?? Jr()), document.body.insertAdjacentElement("beforeend", t[1] ?? Jr()), Pt++, () => {
      Pt === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((e) => e.remove()), Pt--;
    };
  }, []);
}
function Jr() {
  const t = document.createElement("span");
  return t.setAttribute("data-radix-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
var oe = function() {
  return oe = Object.assign || function(e) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, oe.apply(this, arguments);
};
function Ln(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(t); s < n.length; s++)
      e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (r[n[s]] = t[n[s]]);
  return r;
}
function Vo(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, s = e.length, i; n < s; n++)
    (i || !(n in e)) && (i || (i = Array.prototype.slice.call(e, 0, n)), i[n] = e[n]);
  return t.concat(i || Array.prototype.slice.call(e));
}
var it = "right-scroll-bar-position", at = "width-before-scroll-bar", Uo = "with-scroll-bars-hidden", qo = "--removed-body-scroll-bar-size";
function Ct(t, e) {
  return typeof t == "function" ? t(e) : t && (t.current = e), t;
}
function Yo(t, e) {
  var r = re(function() {
    return {
      // value
      value: t,
      // last callback
      callback: e,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var s = r.value;
          s !== n && (r.value = n, r.callback(n, s));
        }
      }
    };
  })[0];
  return r.callback = e, r.facade;
}
var Jo = typeof window < "u" ? f.useLayoutEffect : f.useEffect, Zr = /* @__PURE__ */ new WeakMap();
function Zo(t, e) {
  var r = Yo(null, function(n) {
    return t.forEach(function(s) {
      return Ct(s, n);
    });
  });
  return Jo(function() {
    var n = Zr.get(r);
    if (n) {
      var s = new Set(n), i = new Set(t), o = r.current;
      s.forEach(function(l) {
        i.has(l) || Ct(l, null);
      }), i.forEach(function(l) {
        s.has(l) || Ct(l, o);
      });
    }
    Zr.set(r, t);
  }, [t]), r;
}
function Xo(t) {
  return t;
}
function Qo(t, e) {
  e === void 0 && (e = Xo);
  var r = [], n = !1, s = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : t;
    },
    useMedium: function(i) {
      var o = e(i, n);
      return r.push(o), function() {
        r = r.filter(function(l) {
          return l !== o;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (n = !0; r.length; ) {
        var o = r;
        r = [], o.forEach(i);
      }
      r = {
        push: function(l) {
          return i(l);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(i) {
      n = !0;
      var o = [];
      if (r.length) {
        var l = r;
        r = [], l.forEach(i), o = r;
      }
      var u = function() {
        var d = o;
        o = [], d.forEach(i);
      }, c = function() {
        return Promise.resolve().then(u);
      };
      c(), r = {
        push: function(d) {
          o.push(d), c();
        },
        filter: function(d) {
          return o = o.filter(d), r;
        }
      };
    }
  };
  return s;
}
function el(t) {
  t === void 0 && (t = {});
  var e = Qo(null);
  return e.options = oe({ async: !0, ssr: !1 }, t), e;
}
var Rn = function(t) {
  var e = t.sideCar, r = Ln(t, ["sideCar"]);
  if (!e)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = e.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return f.createElement(n, oe({}, r));
};
Rn.isSideCarExport = !0;
function tl(t, e) {
  return t.useMedium(e), Rn;
}
var Mn = el(), Et = function() {
}, mt = f.forwardRef(function(t, e) {
  var r = f.useRef(null), n = f.useState({
    onScrollCapture: Et,
    onWheelCapture: Et,
    onTouchMoveCapture: Et
  }), s = n[0], i = n[1], o = t.forwardProps, l = t.children, u = t.className, c = t.removeScrollBar, d = t.enabled, p = t.shards, m = t.sideCar, g = t.noRelative, h = t.noIsolation, v = t.inert, _ = t.allowPinchZoom, C = t.as, x = C === void 0 ? "div" : C, L = t.gapMode, A = Ln(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), E = m, R = Zo([r, e]), S = oe(oe({}, A), s);
  return f.createElement(
    f.Fragment,
    null,
    d && f.createElement(E, { sideCar: Mn, removeScrollBar: c, shards: p, noRelative: g, noIsolation: h, inert: v, setCallbacks: i, allowPinchZoom: !!_, lockRef: r, gapMode: L }),
    o ? f.cloneElement(f.Children.only(l), oe(oe({}, S), { ref: R })) : f.createElement(x, oe({}, S, { className: u, ref: R }), l)
  );
});
mt.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
mt.classNames = {
  fullWidth: at,
  zeroRight: it
};
var rl = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function nl() {
  if (!document)
    return null;
  var t = document.createElement("style");
  t.type = "text/css";
  var e = rl();
  return e && t.setAttribute("nonce", e), t;
}
function sl(t, e) {
  t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
}
function il(t) {
  var e = document.head || document.getElementsByTagName("head")[0];
  e.appendChild(t);
}
var al = function() {
  var t = 0, e = null;
  return {
    add: function(r) {
      t == 0 && (e = nl()) && (sl(e, r), il(e)), t++;
    },
    remove: function() {
      t--, !t && e && (e.parentNode && e.parentNode.removeChild(e), e = null);
    }
  };
}, ol = function() {
  var t = al();
  return function(e, r) {
    f.useEffect(function() {
      return t.add(e), function() {
        t.remove();
      };
    }, [e && r]);
  };
}, Tn = function() {
  var t = ol(), e = function(r) {
    var n = r.styles, s = r.dynamic;
    return t(n, s), null;
  };
  return e;
}, ll = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, zt = function(t) {
  return parseInt(t || "", 10) || 0;
}, cl = function(t) {
  var e = window.getComputedStyle(document.body), r = e[t === "padding" ? "paddingLeft" : "marginLeft"], n = e[t === "padding" ? "paddingTop" : "marginTop"], s = e[t === "padding" ? "paddingRight" : "marginRight"];
  return [zt(r), zt(n), zt(s)];
}, ul = function(t) {
  if (t === void 0 && (t = "margin"), typeof window > "u")
    return ll;
  var e = cl(t), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: e[0],
    top: e[1],
    right: e[2],
    gap: Math.max(0, n - r + e[2] - e[0])
  };
}, dl = Tn(), Ae = "data-scroll-locked", pl = function(t, e, r, n) {
  var s = t.left, i = t.top, o = t.right, l = t.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Uo, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(l, "px ").concat(n, `;
  }
  body[`).concat(Ae, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    e && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(l, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(it, ` {
    right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(at, ` {
    margin-right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(it, " .").concat(it, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(at, " .").concat(at, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Ae, `] {
    `).concat(qo, ": ").concat(l, `px;
  }
`);
}, Xr = function() {
  var t = parseInt(document.body.getAttribute(Ae) || "0", 10);
  return isFinite(t) ? t : 0;
}, fl = function() {
  f.useEffect(function() {
    return document.body.setAttribute(Ae, (Xr() + 1).toString()), function() {
      var t = Xr() - 1;
      t <= 0 ? document.body.removeAttribute(Ae) : document.body.setAttribute(Ae, t.toString());
    };
  }, []);
}, hl = function(t) {
  var e = t.noRelative, r = t.noImportant, n = t.gapMode, s = n === void 0 ? "margin" : n;
  fl();
  var i = f.useMemo(function() {
    return ul(s);
  }, [s]);
  return f.createElement(dl, { styles: pl(i, !e, s, r ? "" : "!important") });
}, Ht = !1;
if (typeof window < "u")
  try {
    var tt = Object.defineProperty({}, "passive", {
      get: function() {
        return Ht = !0, !0;
      }
    });
    window.addEventListener("test", tt, tt), window.removeEventListener("test", tt, tt);
  } catch {
    Ht = !1;
  }
var Pe = Ht ? { passive: !1 } : !1, gl = function(t) {
  return t.tagName === "TEXTAREA";
}, $n = function(t, e) {
  if (!(t instanceof Element))
    return !1;
  var r = window.getComputedStyle(t);
  return (
    // not-not-scrollable
    r[e] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !gl(t) && r[e] === "visible")
  );
}, ml = function(t) {
  return $n(t, "overflowY");
}, vl = function(t) {
  return $n(t, "overflowX");
}, Qr = function(t, e) {
  var r = e.ownerDocument, n = e;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var s = Dn(t, n);
    if (s) {
      var i = Fn(t, n), o = i[1], l = i[2];
      if (o > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, xl = function(t) {
  var e = t.scrollTop, r = t.scrollHeight, n = t.clientHeight;
  return [
    e,
    r,
    n
  ];
}, yl = function(t) {
  var e = t.scrollLeft, r = t.scrollWidth, n = t.clientWidth;
  return [
    e,
    r,
    n
  ];
}, Dn = function(t, e) {
  return t === "v" ? ml(e) : vl(e);
}, Fn = function(t, e) {
  return t === "v" ? xl(e) : yl(e);
}, bl = function(t, e) {
  return t === "h" && e === "rtl" ? -1 : 1;
}, _l = function(t, e, r, n, s) {
  var i = bl(t, window.getComputedStyle(e).direction), o = i * n, l = r.target, u = e.contains(l), c = !1, d = o > 0, p = 0, m = 0;
  do {
    if (!l)
      break;
    var g = Fn(t, l), h = g[0], v = g[1], _ = g[2], C = v - _ - i * h;
    (h || C) && Dn(t, l) && (p += C, m += h);
    var x = l.parentNode;
    l = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !u && l !== document.body || // self content
    u && (e.contains(l) || e === l)
  );
  return (d && Math.abs(p) < 1 || !d && Math.abs(m) < 1) && (c = !0), c;
}, rt = function(t) {
  return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0];
}, en = function(t) {
  return [t.deltaX, t.deltaY];
}, tn = function(t) {
  return t && "current" in t ? t.current : t;
}, kl = function(t, e) {
  return t[0] === e[0] && t[1] === e[1];
}, wl = function(t) {
  return `
  .block-interactivity-`.concat(t, ` {pointer-events: none;}
  .allow-interactivity-`).concat(t, ` {pointer-events: all;}
`);
}, jl = 0, Ce = [];
function Sl(t) {
  var e = f.useRef([]), r = f.useRef([0, 0]), n = f.useRef(), s = f.useState(jl++)[0], i = f.useState(Tn)[0], o = f.useRef(t);
  f.useEffect(function() {
    o.current = t;
  }, [t]), f.useEffect(function() {
    if (t.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var v = Vo([t.lockRef.current], (t.shards || []).map(tn), !0).filter(Boolean);
      return v.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), v.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [t.inert, t.lockRef.current, t.shards]);
  var l = f.useCallback(function(v, _) {
    if ("touches" in v && v.touches.length === 2 || v.type === "wheel" && v.ctrlKey)
      return !o.current.allowPinchZoom;
    var C = rt(v), x = r.current, L = "deltaX" in v ? v.deltaX : x[0] - C[0], A = "deltaY" in v ? v.deltaY : x[1] - C[1], E, R = v.target, S = Math.abs(L) > Math.abs(A) ? "h" : "v";
    if ("touches" in v && S === "h" && R.type === "range")
      return !1;
    var k = Qr(S, R);
    if (!k)
      return !0;
    if (k ? E = S : (E = S === "v" ? "h" : "v", k = Qr(S, R)), !k)
      return !1;
    if (!n.current && "changedTouches" in v && (L || A) && (n.current = E), !E)
      return !0;
    var I = n.current || E;
    return _l(I, _, v, I === "h" ? L : A);
  }, []), u = f.useCallback(function(v) {
    var _ = v;
    if (!(!Ce.length || Ce[Ce.length - 1] !== i)) {
      var C = "deltaY" in _ ? en(_) : rt(_), x = e.current.filter(function(E) {
        return E.name === _.type && (E.target === _.target || _.target === E.shadowParent) && kl(E.delta, C);
      })[0];
      if (x && x.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!x) {
        var L = (o.current.shards || []).map(tn).filter(Boolean).filter(function(E) {
          return E.contains(_.target);
        }), A = L.length > 0 ? l(_, L[0]) : !o.current.noIsolation;
        A && _.cancelable && _.preventDefault();
      }
    }
  }, []), c = f.useCallback(function(v, _, C, x) {
    var L = { name: v, delta: _, target: C, should: x, shadowParent: Pl(C) };
    e.current.push(L), setTimeout(function() {
      e.current = e.current.filter(function(A) {
        return A !== L;
      });
    }, 1);
  }, []), d = f.useCallback(function(v) {
    r.current = rt(v), n.current = void 0;
  }, []), p = f.useCallback(function(v) {
    c(v.type, en(v), v.target, l(v, t.lockRef.current));
  }, []), m = f.useCallback(function(v) {
    c(v.type, rt(v), v.target, l(v, t.lockRef.current));
  }, []);
  f.useEffect(function() {
    return Ce.push(i), t.setCallbacks({
      onScrollCapture: p,
      onWheelCapture: p,
      onTouchMoveCapture: m
    }), document.addEventListener("wheel", u, Pe), document.addEventListener("touchmove", u, Pe), document.addEventListener("touchstart", d, Pe), function() {
      Ce = Ce.filter(function(v) {
        return v !== i;
      }), document.removeEventListener("wheel", u, Pe), document.removeEventListener("touchmove", u, Pe), document.removeEventListener("touchstart", d, Pe);
    };
  }, []);
  var g = t.removeScrollBar, h = t.inert;
  return f.createElement(
    f.Fragment,
    null,
    h ? f.createElement(i, { styles: wl(s) }) : null,
    g ? f.createElement(hl, { noRelative: t.noRelative, gapMode: t.gapMode }) : null
  );
}
function Pl(t) {
  for (var e = null; t !== null; )
    t instanceof ShadowRoot && (e = t.host, t = t.host), t = t.parentNode;
  return e;
}
const Cl = tl(Mn, Sl);
var Bn = f.forwardRef(function(t, e) {
  return f.createElement(mt, oe({}, t, { ref: e, sideCar: Cl }));
});
Bn.classNames = mt.classNames;
var El = function(t) {
  if (typeof document > "u")
    return null;
  var e = Array.isArray(t) ? t[0] : t;
  return e.ownerDocument.body;
}, Ee = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), st = {}, Ot = 0, Wn = function(t) {
  return t && (t.host || Wn(t.parentNode));
}, zl = function(t, e) {
  return e.map(function(r) {
    if (t.contains(r))
      return r;
    var n = Wn(r);
    return n && t.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", t, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Ol = function(t, e, r, n) {
  var s = zl(e, Array.isArray(t) ? t : [t]);
  st[r] || (st[r] = /* @__PURE__ */ new WeakMap());
  var i = st[r], o = [], l = /* @__PURE__ */ new Set(), u = new Set(s), c = function(p) {
    !p || l.has(p) || (l.add(p), c(p.parentNode));
  };
  s.forEach(c);
  var d = function(p) {
    !p || u.has(p) || Array.prototype.forEach.call(p.children, function(m) {
      if (l.has(m))
        d(m);
      else
        try {
          var g = m.getAttribute(n), h = g !== null && g !== "false", v = (Ee.get(m) || 0) + 1, _ = (i.get(m) || 0) + 1;
          Ee.set(m, v), i.set(m, _), o.push(m), v === 1 && h && nt.set(m, !0), _ === 1 && m.setAttribute(r, "true"), h || m.setAttribute(n, "true");
        } catch (C) {
          console.error("aria-hidden: cannot operate on ", m, C);
        }
    });
  };
  return d(e), l.clear(), Ot++, function() {
    o.forEach(function(p) {
      var m = Ee.get(p) - 1, g = i.get(p) - 1;
      Ee.set(p, m), i.set(p, g), m || (nt.has(p) || p.removeAttribute(n), nt.delete(p)), g || p.removeAttribute(r);
    }), Ot--, Ot || (Ee = /* @__PURE__ */ new WeakMap(), Ee = /* @__PURE__ */ new WeakMap(), nt = /* @__PURE__ */ new WeakMap(), st = {});
  };
}, Al = function(t, e, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(t) ? t : [t]), s = El(t);
  return s ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live], script"))), Ol(n, s, r, "aria-hidden")) : function() {
    return null;
  };
}, vt = "Dialog", [Kn, Vc] = uo(vt), [Nl, ae] = Kn(vt), Hn = (t) => {
  const {
    __scopeDialog: e,
    children: r,
    open: n,
    defaultOpen: s,
    onOpenChange: i,
    modal: o = !0
  } = t, l = f.useRef(null), u = f.useRef(null), [c, d] = mo({
    prop: n,
    defaultProp: s ?? !1,
    onChange: i,
    caller: vt
  });
  return /* @__PURE__ */ a.jsx(
    Nl,
    {
      scope: e,
      triggerRef: l,
      contentRef: u,
      contentId: ue(),
      titleId: ue(),
      descriptionId: ue(),
      open: c,
      onOpenChange: d,
      onOpenToggle: f.useCallback(() => d((p) => !p), [d]),
      modal: o,
      children: r
    }
  );
};
Hn.displayName = vt;
var Gn = "DialogTrigger", Il = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, ...n } = t, s = ae(Gn, r), i = ke(e, s.triggerRef);
    return /* @__PURE__ */ a.jsx(
      ee.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": fr(s.open),
        ...n,
        ref: i,
        onClick: fe(t.onClick, s.onOpenToggle)
      }
    );
  }
);
Il.displayName = Gn;
var dr = "DialogPortal", [Ll, Vn] = Kn(dr, {
  forceMount: void 0
}), Un = (t) => {
  const { __scopeDialog: e, forceMount: r, children: n, container: s } = t, i = ae(dr, e);
  return /* @__PURE__ */ a.jsx(Ll, { scope: e, forceMount: r, children: f.Children.map(n, (o) => /* @__PURE__ */ a.jsx(gt, { present: r || i.open, children: /* @__PURE__ */ a.jsx(In, { asChild: !0, container: s, children: o }) })) });
};
Un.displayName = dr;
var dt = "DialogOverlay", qn = f.forwardRef(
  (t, e) => {
    const r = Vn(dt, t.__scopeDialog), { forceMount: n = r.forceMount, ...s } = t, i = ae(dt, t.__scopeDialog);
    return i.modal ? /* @__PURE__ */ a.jsx(gt, { present: n || i.open, children: /* @__PURE__ */ a.jsx(Ml, { ...s, ref: e }) }) : null;
  }
);
qn.displayName = dt;
var Rl = /* @__PURE__ */ Cn("DialogOverlay.RemoveScroll"), Ml = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, ...n } = t, s = ae(dt, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ a.jsx(Bn, { as: Rl, allowPinchZoom: !0, shards: [s.contentRef], children: /* @__PURE__ */ a.jsx(
        ee.div,
        {
          "data-state": fr(s.open),
          ...n,
          ref: e,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), be = "DialogContent", Yn = f.forwardRef(
  (t, e) => {
    const r = Vn(be, t.__scopeDialog), { forceMount: n = r.forceMount, ...s } = t, i = ae(be, t.__scopeDialog);
    return /* @__PURE__ */ a.jsx(gt, { present: n || i.open, children: i.modal ? /* @__PURE__ */ a.jsx(Tl, { ...s, ref: e }) : /* @__PURE__ */ a.jsx($l, { ...s, ref: e }) });
  }
);
Yn.displayName = be;
var Tl = f.forwardRef(
  (t, e) => {
    const r = ae(be, t.__scopeDialog), n = f.useRef(null), s = ke(e, r.contentRef, n);
    return f.useEffect(() => {
      const i = n.current;
      if (i) return Al(i);
    }, []), /* @__PURE__ */ a.jsx(
      Jn,
      {
        ...t,
        ref: s,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: fe(t.onCloseAutoFocus, (i) => {
          var o;
          i.preventDefault(), (o = r.triggerRef.current) == null || o.focus();
        }),
        onPointerDownOutside: fe(t.onPointerDownOutside, (i) => {
          const o = i.detail.originalEvent, l = o.button === 0 && o.ctrlKey === !0;
          (o.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: fe(
          t.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), $l = f.forwardRef(
  (t, e) => {
    const r = ae(be, t.__scopeDialog), n = f.useRef(!1), s = f.useRef(!1);
    return /* @__PURE__ */ a.jsx(
      Jn,
      {
        ...t,
        ref: e,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var o, l;
          (o = t.onCloseAutoFocus) == null || o.call(t, i), i.defaultPrevented || (n.current || (l = r.triggerRef.current) == null || l.focus(), i.preventDefault()), n.current = !1, s.current = !1;
        },
        onInteractOutside: (i) => {
          var u, c;
          (u = t.onInteractOutside) == null || u.call(t, i), i.defaultPrevented || (n.current = !0, i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
          const o = i.target;
          ((c = r.triggerRef.current) == null ? void 0 : c.contains(o)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && s.current && i.preventDefault();
        }
      }
    );
  }
), Jn = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: s, onCloseAutoFocus: i, ...o } = t, l = ae(be, r), u = f.useRef(null), c = ke(e, u);
    return Go(), /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        An,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: s,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ a.jsx(
            zn,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": fr(l.open),
              ...o,
              ref: c,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
        /* @__PURE__ */ a.jsx(Dl, { titleId: l.titleId }),
        /* @__PURE__ */ a.jsx(Bl, { contentRef: u, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), pr = "DialogTitle", Zn = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, ...n } = t, s = ae(pr, r);
    return /* @__PURE__ */ a.jsx(ee.h2, { id: s.titleId, ...n, ref: e });
  }
);
Zn.displayName = pr;
var Xn = "DialogDescription", Qn = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, ...n } = t, s = ae(Xn, r);
    return /* @__PURE__ */ a.jsx(ee.p, { id: s.descriptionId, ...n, ref: e });
  }
);
Qn.displayName = Xn;
var es = "DialogClose", ts = f.forwardRef(
  (t, e) => {
    const { __scopeDialog: r, ...n } = t, s = ae(es, r);
    return /* @__PURE__ */ a.jsx(
      ee.button,
      {
        type: "button",
        ...n,
        ref: e,
        onClick: fe(t.onClick, () => s.onOpenChange(!1))
      }
    );
  }
);
ts.displayName = es;
function fr(t) {
  return t ? "open" : "closed";
}
var rs = "DialogTitleWarning", [Uc, ns] = co(rs, {
  contentName: be,
  titleName: pr,
  docsSlug: "dialog"
}), Dl = ({ titleId: t }) => {
  const e = ns(rs), r = `\`${e.contentName}\` requires a \`${e.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${e.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${e.docsSlug}`;
  return f.useEffect(() => {
    t && (document.getElementById(t) || console.error(r));
  }, [r, t]), null;
}, Fl = "DialogDescriptionWarning", Bl = ({ contentRef: t, descriptionId: e }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ns(Fl).contentName}}.`;
  return f.useEffect(() => {
    var i;
    const s = (i = t.current) == null ? void 0 : i.getAttribute("aria-describedby");
    e && s && (document.getElementById(e) || console.warn(n));
  }, [n, t, e]), null;
}, ss = Hn, is = Un, as = qn, os = Yn, Wl = Zn, Kl = Qn, Hl = ts, Fe = '[cmdk-group=""]', At = '[cmdk-group-items=""]', Gl = '[cmdk-group-heading=""]', ls = '[cmdk-item=""]', rn = `${ls}:not([aria-disabled="true"])`, Gt = "cmdk-item-select", ze = "data-value", Vl = (t, e, r) => lo(t, e, r), cs = f.createContext(void 0), Ue = () => f.useContext(cs), us = f.createContext(void 0), hr = () => f.useContext(us), ds = f.createContext(void 0), ps = f.forwardRef((t, e) => {
  let r = Oe(() => {
    var y, j;
    return { search: "", value: (j = (y = t.value) != null ? y : t.defaultValue) != null ? j : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = Oe(() => /* @__PURE__ */ new Set()), s = Oe(() => /* @__PURE__ */ new Map()), i = Oe(() => /* @__PURE__ */ new Map()), o = Oe(() => /* @__PURE__ */ new Set()), l = fs(t), { label: u, children: c, value: d, onValueChange: p, filter: m, shouldFilter: g, loop: h, disablePointerSelection: v = !1, vimBindings: _ = !0, ...C } = t, x = ue(), L = ue(), A = ue(), E = f.useRef(null), R = nc();
  _e(() => {
    if (d !== void 0) {
      let y = d.trim();
      r.current.value = y, S.emit();
    }
  }, [d]), _e(() => {
    R(6, N);
  }, []);
  let S = f.useMemo(() => ({ subscribe: (y) => (o.current.add(y), () => o.current.delete(y)), snapshot: () => r.current, setState: (y, j, $) => {
    var P, H, D, G;
    if (!Object.is(r.current[y], j)) {
      if (r.current[y] = j, y === "search") U(), w(), R(1, K);
      else if (y === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let q = document.getElementById(A);
          q ? q.focus() : (P = document.getElementById(x)) == null || P.focus();
        }
        if (R(7, () => {
          var q;
          r.current.selectedItemId = (q = B()) == null ? void 0 : q.id, S.emit();
        }), $ || R(5, N), ((H = l.current) == null ? void 0 : H.value) !== void 0) {
          let q = j ?? "";
          (G = (D = l.current).onValueChange) == null || G.call(D, q);
          return;
        }
      }
      S.emit();
    }
  }, emit: () => {
    o.current.forEach((y) => y());
  } }), []), k = f.useMemo(() => ({ value: (y, j, $) => {
    var P;
    j !== ((P = i.current.get(y)) == null ? void 0 : P.value) && (i.current.set(y, { value: j, keywords: $ }), r.current.filtered.items.set(y, I(j, $)), R(2, () => {
      w(), S.emit();
    }));
  }, item: (y, j) => (n.current.add(y), j && (s.current.has(j) ? s.current.get(j).add(y) : s.current.set(j, /* @__PURE__ */ new Set([y]))), R(3, () => {
    U(), w(), r.current.value || K(), S.emit();
  }), () => {
    i.current.delete(y), n.current.delete(y), r.current.filtered.items.delete(y);
    let $ = B();
    R(4, () => {
      U(), ($ == null ? void 0 : $.getAttribute("id")) === y && K(), S.emit();
    });
  }), group: (y) => (s.current.has(y) || s.current.set(y, /* @__PURE__ */ new Set()), () => {
    i.current.delete(y), s.current.delete(y);
  }), filter: () => l.current.shouldFilter, label: u || t["aria-label"], getDisablePointerSelection: () => l.current.disablePointerSelection, listId: x, inputId: A, labelId: L, listInnerRef: E }), []);
  function I(y, j) {
    var $, P;
    let H = (P = ($ = l.current) == null ? void 0 : $.filter) != null ? P : Vl;
    return y ? H(y, r.current.search, j) : 0;
  }
  function w() {
    if (!r.current.search || l.current.shouldFilter === !1) return;
    let y = r.current.filtered.items, j = [];
    r.current.filtered.groups.forEach((P) => {
      let H = s.current.get(P), D = 0;
      H.forEach((G) => {
        let q = y.get(G);
        D = Math.max(q, D);
      }), j.push([P, D]);
    });
    let $ = E.current;
    J().sort((P, H) => {
      var D, G;
      let q = P.getAttribute("id"), se = H.getAttribute("id");
      return ((D = y.get(se)) != null ? D : 0) - ((G = y.get(q)) != null ? G : 0);
    }).forEach((P) => {
      let H = P.closest(At);
      H ? H.appendChild(P.parentElement === H ? P : P.closest(`${At} > *`)) : $.appendChild(P.parentElement === $ ? P : P.closest(`${At} > *`));
    }), j.sort((P, H) => H[1] - P[1]).forEach((P) => {
      var H;
      let D = (H = E.current) == null ? void 0 : H.querySelector(`${Fe}[${ze}="${encodeURIComponent(P[0])}"]`);
      D == null || D.parentElement.appendChild(D);
    });
  }
  function K() {
    let y = J().find(($) => $.getAttribute("aria-disabled") !== "true"), j = y == null ? void 0 : y.getAttribute(ze);
    S.setState("value", j || void 0);
  }
  function U() {
    var y, j, $, P;
    if (!r.current.search || l.current.shouldFilter === !1) {
      r.current.filtered.count = n.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let H = 0;
    for (let D of n.current) {
      let G = (j = (y = i.current.get(D)) == null ? void 0 : y.value) != null ? j : "", q = (P = ($ = i.current.get(D)) == null ? void 0 : $.keywords) != null ? P : [], se = I(G, q);
      r.current.filtered.items.set(D, se), se > 0 && H++;
    }
    for (let [D, G] of s.current) for (let q of G) if (r.current.filtered.items.get(q) > 0) {
      r.current.filtered.groups.add(D);
      break;
    }
    r.current.filtered.count = H;
  }
  function N() {
    var y, j, $;
    let P = B();
    P && (((y = P.parentElement) == null ? void 0 : y.firstChild) === P && (($ = (j = P.closest(Fe)) == null ? void 0 : j.querySelector(Gl)) == null || $.scrollIntoView({ block: "nearest" })), P.scrollIntoView({ block: "nearest" }));
  }
  function B() {
    var y;
    return (y = E.current) == null ? void 0 : y.querySelector(`${ls}[aria-selected="true"]`);
  }
  function J() {
    var y;
    return Array.from(((y = E.current) == null ? void 0 : y.querySelectorAll(rn)) || []);
  }
  function V(y) {
    let j = J()[y];
    j && S.setState("value", j.getAttribute(ze));
  }
  function Y(y) {
    var j;
    let $ = B(), P = J(), H = P.findIndex((G) => G === $), D = P[H + y];
    (j = l.current) != null && j.loop && (D = H + y < 0 ? P[P.length - 1] : H + y === P.length ? P[0] : P[H + y]), D && S.setState("value", D.getAttribute(ze));
  }
  function M(y) {
    let j = B(), $ = j == null ? void 0 : j.closest(Fe), P;
    for (; $ && !P; ) $ = y > 0 ? tc($, Fe) : rc($, Fe), P = $ == null ? void 0 : $.querySelector(rn);
    P ? S.setState("value", P.getAttribute(ze)) : Y(y);
  }
  let ne = () => V(J().length - 1), b = (y) => {
    y.preventDefault(), y.metaKey ? ne() : y.altKey ? M(1) : Y(1);
  }, T = (y) => {
    y.preventDefault(), y.metaKey ? V(0) : y.altKey ? M(-1) : Y(-1);
  };
  return f.createElement(ee.div, { ref: e, tabIndex: -1, ...C, "cmdk-root": "", onKeyDown: (y) => {
    var j;
    (j = C.onKeyDown) == null || j.call(C, y);
    let $ = y.nativeEvent.isComposing || y.keyCode === 229;
    if (!(y.defaultPrevented || $)) switch (y.key) {
      case "n":
      case "j": {
        _ && y.ctrlKey && b(y);
        break;
      }
      case "ArrowDown": {
        b(y);
        break;
      }
      case "p":
      case "k": {
        _ && y.ctrlKey && T(y);
        break;
      }
      case "ArrowUp": {
        T(y);
        break;
      }
      case "Home": {
        y.preventDefault(), V(0);
        break;
      }
      case "End": {
        y.preventDefault(), ne();
        break;
      }
      case "Enter": {
        y.preventDefault();
        let P = B();
        if (P) {
          let H = new Event(Gt);
          P.dispatchEvent(H);
        }
      }
    }
  } }, f.createElement("label", { "cmdk-label": "", htmlFor: k.inputId, id: k.labelId, style: ic }, u), xt(t, (y) => f.createElement(us.Provider, { value: S }, f.createElement(cs.Provider, { value: k }, y))));
}), Ul = f.forwardRef((t, e) => {
  var r, n;
  let s = ue(), i = f.useRef(null), o = f.useContext(ds), l = Ue(), u = fs(t), c = (n = (r = u.current) == null ? void 0 : r.forceMount) != null ? n : o == null ? void 0 : o.forceMount;
  _e(() => {
    if (!c) return l.item(s, o == null ? void 0 : o.id);
  }, [c]);
  let d = hs(s, i, [t.value, t.children, i], t.keywords), p = hr(), m = he((R) => R.value && R.value === d.current), g = he((R) => c || l.filter() === !1 ? !0 : R.search ? R.filtered.items.get(s) > 0 : !0);
  f.useEffect(() => {
    let R = i.current;
    if (!(!R || t.disabled)) return R.addEventListener(Gt, h), () => R.removeEventListener(Gt, h);
  }, [g, t.onSelect, t.disabled]);
  function h() {
    var R, S;
    v(), (S = (R = u.current).onSelect) == null || S.call(R, d.current);
  }
  function v() {
    p.setState("value", d.current, !0);
  }
  if (!g) return null;
  let { disabled: _, value: C, onSelect: x, forceMount: L, keywords: A, ...E } = t;
  return f.createElement(ee.div, { ref: ye(i, e), ...E, id: s, "cmdk-item": "", role: "option", "aria-disabled": !!_, "aria-selected": !!m, "data-disabled": !!_, "data-selected": !!m, onPointerMove: _ || l.getDisablePointerSelection() ? void 0 : v, onClick: _ ? void 0 : h }, t.children);
}), ql = f.forwardRef((t, e) => {
  let { heading: r, children: n, forceMount: s, ...i } = t, o = ue(), l = f.useRef(null), u = f.useRef(null), c = ue(), d = Ue(), p = he((g) => s || d.filter() === !1 ? !0 : g.search ? g.filtered.groups.has(o) : !0);
  _e(() => d.group(o), []), hs(o, l, [t.value, t.heading, u]);
  let m = f.useMemo(() => ({ id: o, forceMount: s }), [s]);
  return f.createElement(ee.div, { ref: ye(l, e), ...i, "cmdk-group": "", role: "presentation", hidden: p ? void 0 : !0 }, r && f.createElement("div", { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, r), xt(t, (g) => f.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? c : void 0 }, f.createElement(ds.Provider, { value: m }, g))));
}), Yl = f.forwardRef((t, e) => {
  let { alwaysRender: r, ...n } = t, s = f.useRef(null), i = he((o) => !o.search);
  return !r && !i ? null : f.createElement(ee.div, { ref: ye(s, e), ...n, "cmdk-separator": "", role: "separator" });
}), Jl = f.forwardRef((t, e) => {
  let { onValueChange: r, ...n } = t, s = t.value != null, i = hr(), o = he((c) => c.search), l = he((c) => c.selectedItemId), u = Ue();
  return f.useEffect(() => {
    t.value != null && i.setState("search", t.value);
  }, [t.value]), f.createElement(ee.input, { ref: e, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": u.listId, "aria-labelledby": u.labelId, "aria-activedescendant": l, id: u.inputId, type: "text", value: s ? t.value : o, onChange: (c) => {
    s || i.setState("search", c.target.value), r == null || r(c.target.value);
  } });
}), Zl = f.forwardRef((t, e) => {
  let { children: r, label: n = "Suggestions", ...s } = t, i = f.useRef(null), o = f.useRef(null), l = he((c) => c.selectedItemId), u = Ue();
  return f.useEffect(() => {
    if (o.current && i.current) {
      let c = o.current, d = i.current, p, m = new ResizeObserver(() => {
        p = requestAnimationFrame(() => {
          let g = c.offsetHeight;
          d.style.setProperty("--cmdk-list-height", g.toFixed(1) + "px");
        });
      });
      return m.observe(c), () => {
        cancelAnimationFrame(p), m.unobserve(c);
      };
    }
  }, []), f.createElement(ee.div, { ref: ye(i, e), ...s, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": l, "aria-label": n, id: u.listId }, xt(t, (c) => f.createElement("div", { ref: ye(o, u.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), Xl = f.forwardRef((t, e) => {
  let { open: r, onOpenChange: n, overlayClassName: s, contentClassName: i, container: o, ...l } = t;
  return f.createElement(ss, { open: r, onOpenChange: n }, f.createElement(is, { container: o }, f.createElement(as, { "cmdk-overlay": "", className: s }), f.createElement(os, { "aria-label": t.label, "cmdk-dialog": "", className: i }, f.createElement(ps, { ref: e, ...l }))));
}), Ql = f.forwardRef((t, e) => he((r) => r.filtered.count === 0) ? f.createElement(ee.div, { ref: e, ...t, "cmdk-empty": "", role: "presentation" }) : null), ec = f.forwardRef((t, e) => {
  let { progress: r, children: n, label: s = "Loading...", ...i } = t;
  return f.createElement(ee.div, { ref: e, ...i, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": s }, xt(t, (o) => f.createElement("div", { "aria-hidden": !0 }, o)));
}), we = Object.assign(ps, { List: Zl, Item: Ul, Input: Jl, Group: ql, Separator: Yl, Dialog: Xl, Empty: Ql, Loading: ec });
function tc(t, e) {
  let r = t.nextElementSibling;
  for (; r; ) {
    if (r.matches(e)) return r;
    r = r.nextElementSibling;
  }
}
function rc(t, e) {
  let r = t.previousElementSibling;
  for (; r; ) {
    if (r.matches(e)) return r;
    r = r.previousElementSibling;
  }
}
function fs(t) {
  let e = f.useRef(t);
  return _e(() => {
    e.current = t;
  }), e;
}
var _e = typeof window > "u" ? f.useEffect : f.useLayoutEffect;
function Oe(t) {
  let e = f.useRef();
  return e.current === void 0 && (e.current = t()), e;
}
function he(t) {
  let e = hr(), r = () => t(e.snapshot());
  return f.useSyncExternalStore(e.subscribe, r, r);
}
function hs(t, e, r, n = []) {
  let s = f.useRef(), i = Ue();
  return _e(() => {
    var o;
    let l = (() => {
      var c;
      for (let d of r) {
        if (typeof d == "string") return d.trim();
        if (typeof d == "object" && "current" in d) return d.current ? (c = d.current.textContent) == null ? void 0 : c.trim() : s.current;
      }
    })(), u = n.map((c) => c.trim());
    i.value(t, l, u), (o = e.current) == null || o.setAttribute(ze, l), s.current = l;
  }), s;
}
var nc = () => {
  let [t, e] = f.useState(), r = Oe(() => /* @__PURE__ */ new Map());
  return _e(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [t]), (n, s) => {
    r.current.set(n, s), e({});
  };
};
function sc(t) {
  let e = t.type;
  return typeof e == "function" ? e(t.props) : "render" in e ? e.render(t.props) : t;
}
function xt({ asChild: t, children: e }, r) {
  return t && f.isValidElement(e) ? f.cloneElement(sc(e), { ref: e.ref }, r(e.props.children)) : r(e);
}
var ic = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function ac({
  ...t
}) {
  return /* @__PURE__ */ a.jsx(ss, { "data-slot": "dialog", ...t });
}
function oc({
  ...t
}) {
  return /* @__PURE__ */ a.jsx(is, { "data-slot": "dialog-portal", ...t });
}
function gs({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ a.jsx(
    as,
    {
      "data-slot": "dialog-overlay",
      className: Q(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        t
      ),
      ...e
    }
  ) });
}
function lc({
  className: t,
  children: e,
  showCloseButton: r = !0,
  ...n
}) {
  return /* @__PURE__ */ a.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ a.jsxs(oc, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ a.jsx(gs, {}),
    /* @__PURE__ */ a.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ a.jsxs(
      os,
      {
        "data-slot": "dialog-content",
        className: Q(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg md:max-w-xl lg:max-w-4xl",
          t
        ),
        ...n,
        children: [
          e,
          r && /* @__PURE__ */ a.jsxs(
            Hl,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ a.jsx(ys, {}),
                /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    ) })
  ] }) });
}
function cc({ className: t, ...e }) {
  return /* @__PURE__ */ a.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: Q("flex flex-col gap-2 text-center sm:text-left", t),
      ...e
    }
  );
}
function uc({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    Wl,
    {
      "data-slot": "dialog-title",
      className: Q("text-lg leading-none font-semibold", t),
      ...e
    }
  );
}
function dc({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    Kl,
    {
      "data-slot": "dialog-description",
      className: Q("text-muted-foreground text-sm", t),
      ...e
    }
  );
}
function pc({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    we,
    {
      "data-slot": "command",
      className: Q(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        t
      ),
      ...e
    }
  );
}
function fc({
  title: t = "Command Palette",
  description: e = "Search for a command to run...",
  children: r,
  className: n,
  showCloseButton: s = !0,
  ...i
}) {
  return /* @__PURE__ */ a.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ a.jsxs(ac, { ...i, children: [
    /* @__PURE__ */ a.jsx(gs, { className: "backdrop-blur-xs" }),
    /* @__PURE__ */ a.jsxs(cc, { className: "sr-only ui-lib", children: [
      /* @__PURE__ */ a.jsx(uc, { children: t }),
      /* @__PURE__ */ a.jsx(dc, { children: e })
    ] }),
    /* @__PURE__ */ a.jsx(
      lc,
      {
        className: Q("overflow-hidden p-0", n),
        showCloseButton: s,
        children: /* @__PURE__ */ a.jsx(pc, { shouldFilter: !1, className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r })
      }
    )
  ] }) });
}
function hc({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ a.jsx(bs, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ a.jsx(
          we.Input,
          {
            "data-slot": "command-input",
            className: Q(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              t
            ),
            ...e
          }
        )
      ]
    }
  );
}
function gc({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    we.List,
    {
      "data-slot": "command-list",
      className: Q(
        "max-h-[calc(100vh-600px)] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        t
      ),
      ...e
    }
  );
}
function mc({
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    we.Loading,
    {
      "data-slot": "command-loading",
      className: "py-6 text-center text-sm",
      ...t
    }
  );
}
function vc({
  ...t
}) {
  return /* @__PURE__ */ a.jsx(
    we.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...t
    }
  );
}
function xc({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    we.Group,
    {
      "data-slot": "command-group",
      className: Q(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        t
      ),
      ...e
    }
  );
}
function yc({
  className: t,
  ...e
}) {
  return /* @__PURE__ */ a.jsx(
    we.Item,
    {
      "data-slot": "command-item",
      className: Q(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...e
    }
  );
}
function qc({ currentLang: t = "en", className: e, blogUrl: r, webUrl: n }) {
  const [s, i] = f.useState(!1);
  f.useEffect(() => {
    const g = (h) => {
      h.key === "k" && (h.metaKey || h.ctrlKey) && (h.preventDefault(), i((v) => !v));
    };
    return document.addEventListener("keydown", g), () => document.removeEventListener("keydown", g);
  }, []);
  const { t: o } = pt(), {
    query: l,
    setQuery: u,
    results: c,
    isLoading: d,
    handleResultClick: p
  } = Sn({ currentLang: t, blogUrl: r, webUrl: n }), m = ({ data: g }) => /* @__PURE__ */ a.jsx(xc, { children: g.map((h) => /* @__PURE__ */ a.jsx(X, { href: h.path, children: /* @__PURE__ */ a.jsx(yc, { onSelect: () => p(h), className: "w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group", children: /* @__PURE__ */ a.jsxs("div", { className: "flex items-start justify-between gap-2 w-full", children: [
    /* @__PURE__ */ a.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ a.jsx("h4", { className: "font-medium text-sm line-clamp-1 group-hover:text-[#8220ff]", children: h.title }),
      /* @__PURE__ */ a.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: h.description }),
      h.keywords && h.keywords.length > 0 && /* @__PURE__ */ a.jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: h.keywords.slice(0, 3).map((v, _) => /* @__PURE__ */ a.jsx(
        "span",
        {
          className: "inline-block px-2 py-1 text-xs bg-[#8220ff]/60 text-white rounded-full",
          children: v
        },
        _
      )) })
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col p-2 items-center justify-start gap-2", children: [
      h.lang && /* @__PURE__ */ a.jsx("span", { className: "text-xs text-muted-foreground uppercase font-mono", children: h.lang }),
      h.type && /* @__PURE__ */ a.jsx("span", { className: Q("text-xs rounded-sm p-1 uppercase font-mono", h.type === "page" ? "bg-[#8220ff]/60 text-white " : "text-[#8220ff]/80 bg-gray-200"), children: h.type })
    ] })
  ] }) }, h.title) })) });
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsx("div", { className: Q("ui-lib", e), children: /* @__PURE__ */ a.jsxs(fc, { open: s, onOpenChange: i, className: "top-[50%] sm:top-80 lg:top-100 dark", children: [
    /* @__PURE__ */ a.jsx(hc, { placeholder: o("search.placeholder"), value: l, onValueChange: (g) => u(g) }),
    /* @__PURE__ */ a.jsx(gc, { children: d ? /* @__PURE__ */ a.jsx(mc, { children: "Hang on…" }) : c.length ? /* @__PURE__ */ a.jsx(m, { data: c }) : /* @__PURE__ */ a.jsx(vc, { children: o("search.not_found") }) })
  ] }) }) });
}
const bc = () => {
  const t = () => {
    const e = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: !0,
      bubbles: !0,
      // Allow the event to bubble up the DOM tree
      cancelable: !0
    });
    document.dispatchEvent(e);
  };
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      onClick: t,
      className: "flex items-center space-x-2 px-4 py-1 bg-transparent text-gray-200 rounded-xl border border-white/50 hover:bg-violet-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
      children: [
        /* @__PURE__ */ a.jsx(nn, { className: "w-4 h-4" }),
        /* @__PURE__ */ a.jsxs("kbd", { className: "inline-flex h-5 items-center gap-1 rounded border border-gray-600 bg-violet-800 px-1.5 font-mono text-[10px] font-medium opacity-100", children: [
          /* @__PURE__ */ a.jsx("span", { className: "text-xs", children: "⌘" }),
          "K"
        ] })
      ]
    }
  );
}, Yc = ({
  lang: t,
  fullSiteUrl: e = "http://localhost:8000",
  fullBlogUrl: r = "http://localhost:9000"
}) => {
  const [n, s] = re("/"), [i, o] = re(!1), [l, u] = re(null), [c, d] = re([]), p = Ne(null), m = (N) => {
    d((B) => B.includes(N) ? B.filter((J) => J !== N) : [N]);
  }, [g, h] = re(!1), [v, _] = re(!1), C = Ja("(max-width: 1279px)"), { t: x, i18n: L } = pt();
  ie(() => {
    h(!0);
  }, []), ie(() => {
    L.changeLanguage(t), s(t !== "en" ? `/${t}/` : "/");
  }, []);
  const [A, E] = re(!1);
  ie(() => {
    const N = () => {
      const B = window.scrollY;
      E(B > 50);
    };
    return window.addEventListener("scroll", N), N(), () => {
      window.removeEventListener("scroll", N);
    };
  }, []);
  const R = Be((N) => {
    p.current && (clearTimeout(p.current), p.current = null), u(N);
  }, []), S = Ne([]), k = Be(() => {
    const N = setTimeout(() => {
      u(null);
    }, 150);
    p.current = N, S.current.push(N);
  }, []);
  ie(() => () => {
    p.current && clearTimeout(p.current), S.current.forEach(clearTimeout), S.current = [];
  }, []);
  const I = Be(
    (N) => {
      u(l === N ? null : N);
    },
    [l]
  ), w = ot(e, wn), K = ot(r, jn), U = {
    products: {
      title: x("nav.product.title"),
      shortTitle: x("footer.sections.products.title"),
      image: "product-diagram",
      items: [
        {
          title: x("nav.product.platform_overview"),
          description: x("nav.product.platform_overview_desc"),
          href: `${w}${n}products/cnapp-platform`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 16v-4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 8h.01" })
              ]
            }
          )
        },
        {
          title: x("nav.product.benefits"),
          description: x("nav.product.benefits_desc"),
          href: `${w}${n}products/benefits`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "m9 12 2 2 4-4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M22 19H2" })
              ]
            }
          )
        },
        {
          title: x("nav.product.use_cases"),
          description: x("nav.product.use_cases_desc"),
          href: `${w}${n}products/use-cases`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
                /* @__PURE__ */ a.jsx("path", { d: "M8 12h8" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 8v8" })
              ]
            }
          )
        },
        {
          title: x("nav.product.aspm"),
          description: x("nav.product.aspm_desc"),
          href: `${w}${n}products/aspm`,
          icon: /* @__PURE__ */ a.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ a.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
            }
          )
        },
        {
          title: x("nav.product.cspm"),
          description: x("nav.product.cspm_desc"),
          href: `${w}${n}products/cspm`,
          icon: /* @__PURE__ */ a.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ a.jsx("path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" })
            }
          )
        },
        {
          title: x("nav.product.container_security"),
          description: x("nav.product.container_security_desc"),
          href: `${w}${n}products/container`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                /* @__PURE__ */ a.jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                /* @__PURE__ */ a.jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
              ]
            }
          )
        },
        {
          title: x("nav.product.cwpp"),
          description: x("nav.product.cwpp_desc"),
          href: `${w}${n}products/cwpp`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
                /* @__PURE__ */ a.jsx("circle", { cx: "12", cy: "16", r: "1" }),
                /* @__PURE__ */ a.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
              ]
            }
          )
        },
        {
          title: x("nav.product.ciem"),
          description: x("nav.product.ciem_desc"),
          href: `${w}${n}products/ciem`,
          icon: /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-cloud-cog-icon lucide-cloud-cog", children: [
            /* @__PURE__ */ a.jsx("path", { d: "m10.852 19.772-.383.924" }),
            /* @__PURE__ */ a.jsx("path", { d: "m13.148 14.228.383-.923" }),
            /* @__PURE__ */ a.jsx("path", { d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" }),
            /* @__PURE__ */ a.jsx("path", { d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" }),
            /* @__PURE__ */ a.jsx("path", { d: "m14.772 15.852.923-.383" }),
            /* @__PURE__ */ a.jsx("path", { d: "m14.772 18.148.923.383" }),
            /* @__PURE__ */ a.jsx("path", { d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }),
            /* @__PURE__ */ a.jsx("path", { d: "m9.228 15.852-.923-.383" }),
            /* @__PURE__ */ a.jsx("path", { d: "m9.228 18.148-.923.383" })
          ] })
        }
      ]
    },
    solutions: {
      title: x("nav.solutions.title"),
      link: "/solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: x("nav.solutions.fintech"),
          description: x("nav.solutions.fintech_desc"),
          href: `${w}${n}solutions/fintech`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
                /* @__PURE__ */ a.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.healthtech"),
          description: x("nav.solutions.healthtech_desc"),
          href: `${w}${n}solutions/healthtech`,
          icon: /* @__PURE__ */ a.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ a.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
            }
          )
        },
        {
          title: x("nav.solutions.hrtech"),
          description: x("nav.solutions.hrtech_desc"),
          href: `${w}${n}solutions/hrtech`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ a.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                /* @__PURE__ */ a.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.group_companies"),
          description: x("nav.solutions.group_companies_desc"),
          href: `${w}${n}solutions/group-companies`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                /* @__PURE__ */ a.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.agencies"),
          description: x("nav.solutions.agencies_desc"),
          href: `${w}${n}solutions/agencies`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.startups"),
          description: x("nav.solutions.startups_desc"),
          href: `${w}${n}solutions/startups`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
                /* @__PURE__ */ a.jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.enterprise"),
          description: x("nav.solutions.enterprise_desc"),
          href: `${w}${n}solutions/enterprise`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ a.jsx("path", { d: "M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 3v4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M5 8h14" }),
                /* @__PURE__ */ a.jsx("path", { d: "M7 14h2" }),
                /* @__PURE__ */ a.jsx("path", { d: "M15 14h2" }),
                /* @__PURE__ */ a.jsx("path", { d: "M7 10h2" }),
                /* @__PURE__ */ a.jsx("path", { d: "M15 10h2" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.mobile_apps"),
          description: x("nav.solutions.mobile_apps_desc"),
          href: `${w}${n}solutions/mobile-apps`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
                /* @__PURE__ */ a.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.manufacturing"),
          description: x("nav.solutions.manufacturing_desc"),
          href: `${w}${n}solutions/manufacturing`,
          icon: /* @__PURE__ */ a.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ a.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
            }
          )
        },
        {
          title: x("nav.solutions.government"),
          description: x("nav.solutions.government_desc"),
          href: `${w}${n}solutions/government`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 4v6" }),
                /* @__PURE__ */ a.jsx("path", { d: "M4 20V10l8-6 8 6v10" }),
                /* @__PURE__ */ a.jsx("path", { d: "M15 12v8" }),
                /* @__PURE__ */ a.jsx("path", { d: "M9 12v8" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.retailtech"),
          description: x("nav.solutions.retailtech_desc"),
          href: `${w}${n}solutions/retailtech`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("circle", { cx: "9", cy: "21", r: "1" }),
                /* @__PURE__ */ a.jsx("circle", { cx: "20", cy: "21", r: "1" }),
                /* @__PURE__ */ a.jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.legaltech"),
          description: x("nav.solutions.legal_desc"),
          href: `${w}${n}solutions/legaltech`,
          icon: /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-gavel-icon lucide-gavel", children: [
            /* @__PURE__ */ a.jsx("path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }),
            /* @__PURE__ */ a.jsx("path", { d: "m16 16 6-6" }),
            /* @__PURE__ */ a.jsx("path", { d: "m21.5 10.5-8-8" }),
            /* @__PURE__ */ a.jsx("path", { d: "m8 8 6-6" }),
            /* @__PURE__ */ a.jsx("path", { d: "m8.5 7.5 8 8" })
          ] })
        }
      ]
    },
    developers: {
      title: x("nav.developers.title"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: x("nav.developers.documentation"),
          description: x("nav.developers.documentation_desc"),
          href: "https://docs.plexicus.com",
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ a.jsx("polyline", { points: "14 2 14 8 20 8" }),
                /* @__PURE__ */ a.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                /* @__PURE__ */ a.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                /* @__PURE__ */ a.jsx("polyline", { points: "10 9 9 9 8 9" })
              ]
            }
          )
        },
        {
          title: x("nav.developers.api_references"),
          description: x("nav.developers.api_references_desc"),
          href: "https://docs.plexicus.com/api",
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "m18 16 4-4-4-4" }),
                /* @__PURE__ */ a.jsx("path", { d: "m6 8-4 4 4 4" }),
                /* @__PURE__ */ a.jsx("path", { d: "m14.5 4-5 16" })
              ]
            }
          )
        },
        {
          title: x("nav.developers.github_apps"),
          description: x("nav.developers.github_apps_desc"),
          href: "https://github.com/apps/plexicus",
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
              ]
            }
          )
        },
        {
          title: x("nav.developers.plexalyzer_action"),
          description: x("nav.developers.plexalyzer_action_desc"),
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: /* @__PURE__ */ a.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ a.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
            }
          )
        }
      ]
    },
    resources: {
      title: x("nav.resources.title"),
      shortTitle: x("nav.resources.title"),
      image: "resources-diagram",
      items: [
        {
          title: x("nav.resources.blog"),
          description: x("nav.resources.blog_desc"),
          href: `${K}${n}`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M14 3v5h5M16 13H8M16 17H8M10 9H8" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.youtube_channel"),
          description: x("nav.resources.youtube_channel_desc"),
          href: "https://youtube.com/@plexicus",
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
                /* @__PURE__ */ a.jsx("path", { d: "m10 15 5-3-5-3z" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.branding_assets"),
          description: x("nav.resources.branding_assets_desc"),
          href: `${w}${n}branding-assets`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" }),
                /* @__PURE__ */ a.jsx("path", { d: "m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" }),
                /* @__PURE__ */ a.jsx("path", { d: "m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1 0L6.5 8.5" }),
                /* @__PURE__ */ a.jsx("path", { d: "m3.5 13.5 5-5" }),
                /* @__PURE__ */ a.jsx("path", { d: "m5 19 5-5" }),
                /* @__PURE__ */ a.jsx("path", { d: "m17.5 6.5-5 5" }),
                /* @__PURE__ */ a.jsx("path", { d: "m16 17-5-5" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.changelogs"),
          description: x("nav.resources.changelogs_desc"),
          href: "https://plexicus.canny.io/changelog",
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                /* @__PURE__ */ a.jsx("path", { d: "m9 12 2 2 4-4" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.feature_requests"),
          description: x("nav.resources.feature_requests_desc"),
          href: "https://plexicus.canny.io/feature-requests",
          icon: /* @__PURE__ */ a.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: /* @__PURE__ */ a.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
            }
          )
        },
        {
          title: x("nav.resources.integrations"),
          description: x("nav.resources.integrations_desc"),
          href: `${w}${n}integrations`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M9 12l2 2 4-4" }),
                /* @__PURE__ */ a.jsx("path", { d: "M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.comparison_overview"),
          description: x("nav.resources.comparison_overview_desc"),
          href: `${w}${n}comparison/overview`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              className: "text-primary",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
                /* @__PURE__ */ a.jsx("circle", { cx: "12", cy: "12", r: "3" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.support"),
          description: x("nav.resources.support_desc"),
          href: `${w}${n}support`,
          icon: /* @__PURE__ */ a.jsxs(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              className: "text-primary",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ a.jsx("path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" }),
                /* @__PURE__ */ a.jsx("path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" })
              ]
            }
          )
        }
      ]
    }
  };
  return /* @__PURE__ */ a.jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-1",
      style: {
        background: A ? "#8220ff" : "transparent",
        boxShadow: A ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ a.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ a.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ a.jsx(
            X,
            {
              href: `${w}${n}`,
              className: "flex items-center gap-2 overflow-visible",
              "aria-label": "Plexicus Home",
              children: /* @__PURE__ */ a.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ a.jsx(
                "img",
                {
                  src: "/images/plexicus-logo-white.png",
                  alt: "Plexicus Logo",
                  className: Q("object-contain max-h-full max-w-none w-28", A ? "md:w-40" : "md:w-42"),
                  style: {
                    // maxWidth: isScrolled ? "180px" : "220px",
                    transition: "max-width 0.3s ease-in-out"
                  }
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ a.jsxs("nav", { className: "hidden xl:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(U).filter(([N]) => N === "products").map(([N, B]) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => R(N),
                onMouseLeave: k,
                children: /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === N,
                    "aria-haspopup": "true",
                    onClick: () => I(N),
                    children: [
                      /* @__PURE__ */ a.jsx("span", { className: "hidden xl:inline", children: B.title }),
                      /* @__PURE__ */ a.jsx("span", { className: "xl:hidden", children: B.shortTitle }),
                      /* @__PURE__ */ a.jsx(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: `ml-1 transition-transform duration-200 ${l === N ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ a.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              N
            )),
            /* @__PURE__ */ a.jsx(
              X,
              {
                href: `${w}${n}pricing`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: x("nav.pricing")
              }
            ),
            Object.entries(U).filter(([N]) => N === "solutions" || N === "developers" || N === "resources").map(([N, B]) => /* @__PURE__ */ a.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => R(N),
                onMouseLeave: k,
                children: /* @__PURE__ */ a.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === N,
                    "aria-haspopup": "true",
                    onClick: () => I(N),
                    children: [
                      /* @__PURE__ */ a.jsx("span", { className: "hidden xl:inline", children: B.title }),
                      /* @__PURE__ */ a.jsx("span", { className: "xl:hidden", children: B.shortTitle }),
                      /* @__PURE__ */ a.jsx(
                        "svg",
                        {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "16",
                          height: "16",
                          viewBox: "0 0 24 24",
                          fill: "none",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          className: `ml-1 transition-transform duration-200 ${l === N ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ a.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              N
            )),
            /* @__PURE__ */ a.jsx(
              X,
              {
                href: `${w}${n}contact`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: x("nav.contact")
              }
            )
          ] }),
          /* @__PURE__ */ a.jsxs("div", { className: "flex flex-end items-center justify-center ml-4", children: [
            /* @__PURE__ */ a.jsxs("div", { className: "hidden xl:flex  items-center gap-4", children: [
              /* @__PURE__ */ a.jsx(bc, {}),
              /* @__PURE__ */ a.jsxs("div", { className: Q("flex items-center gap-4 transition-all transition-discrete delay-0"), children: [
                /* @__PURE__ */ a.jsx(
                  X,
                  {
                    href: `${Qe}/login`,
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                    children: x("nav.login")
                  }
                ),
                /* @__PURE__ */ a.jsx(X, { href: `${Qe}/register`, children: /* @__PURE__ */ a.jsx(me, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: x("nav.get_started") }) })
              ] })
            ] }),
            /* @__PURE__ */ a.jsx(
              "button",
              {
                className: "flex xl:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
                onClick: () => o(!i),
                "aria-label": i ? "Close menu" : "Open menu",
                "aria-expanded": i,
                children: i ? /* @__PURE__ */ a.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "h-6 w-6",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ a.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      /* @__PURE__ */ a.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                    ]
                  }
                ) : /* @__PURE__ */ a.jsxs(
                  "svg",
                  {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "h-6 w-6",
                    "aria-hidden": "true",
                    children: [
                      /* @__PURE__ */ a.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                      /* @__PURE__ */ a.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                      /* @__PURE__ */ a.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/20 z-30",
              onClick: () => u(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ a.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => R(l),
              onMouseLeave: k,
              role: "menu",
              "aria-labelledby": `menu-button-${l}`,
              children: /* @__PURE__ */ a.jsx("div", { className: "container mx-auto py-8 px-4 md:px-6 max-w-7xl", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                /* @__PURE__ */ a.jsxs("div", { className: "w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col", children: [
                  /* @__PURE__ */ a.jsx("div", { className: "relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4", children: /* @__PURE__ */ a.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    l === "products" && /* @__PURE__ */ a.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ a.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ a.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ a.jsx(
                            "rect",
                            {
                              x: "40",
                              y: "30",
                              width: "320",
                              height: "240",
                              rx: "12",
                              fill: "white",
                              filter: "url(#shadowEffect)"
                            }
                          ),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "30", width: "320", height: "40", rx: "12", fill: "#8220ff", fillOpacity: "0.9" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "65", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "90", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "115", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "70", width: "80", height: "200", fill: "#f5f5f7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "55", y: "90", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "55", y: "110", width: "40", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "55", y: "130", width: "45", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "55", y: "150", width: "35", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "55", y: "170", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "140", y: "90", width: "200", height: "70", rx: "8", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "155", y: "105", width: "170", height: "40", rx: "4", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "175", cy: "125", r: "15", fill: "#8220ff", fillOpacity: "0.8" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "200", y: "115", width: "110", height: "8", rx: "4", fill: "white" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "200", y: "130", width: "80", height: "6", rx: "3", fill: "white", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "140", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ a.jsx(
                            "path",
                            {
                              d: "M150 240 L170 220 L190 230 L210 200",
                              stroke: "#8220ff",
                              strokeWidth: "3",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ a.jsx("circle", { cx: "170", cy: "220", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "190", cy: "230", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "210", cy: "200", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "245", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ a.jsx(
                            "circle",
                            {
                              cx: "293",
                              cy: "220",
                              r: "30",
                              fill: "transparent",
                              stroke: "#8220ff",
                              strokeWidth: "8",
                              strokeDasharray: "120 180"
                            }
                          ),
                          /* @__PURE__ */ a.jsx("circle", { cx: "293", cy: "220", r: "30", fill: "transparent", stroke: "#e0e0e5", strokeWidth: "8" }),
                          /* @__PURE__ */ a.jsx("text", { x: "283", y: "225", fontFamily: "Arial", fontSize: "12", fill: "#8220ff", fontWeight: "bold", children: "75%" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "320", cy: "50", r: "12", fill: "white", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("path", { d: "M314 50 L320 56 L326 50", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "30", cy: "30", r: "5", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "350", cy: "280", r: "7", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "370", cy: "50", r: "4", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "20", cy: "250", r: "6", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx(
                            "path",
                            {
                              d: "M15 100 C30 120, 20 150, 35 160",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ a.jsx(
                            "path",
                            {
                              d: "M370 120 C350 140, 360 170, 380 190",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsxs(
                            "filter",
                            {
                              id: "shadowEffect",
                              x: "0",
                              y: "0",
                              width: "400",
                              height: "300",
                              filterUnits: "userSpaceOnUse",
                              colorInterpolationFilters: "sRGB",
                              children: [
                                /* @__PURE__ */ a.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                /* @__PURE__ */ a.jsx(
                                  "feColorMatrix",
                                  {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  }
                                ),
                                /* @__PURE__ */ a.jsx("feOffset", { dy: "4" }),
                                /* @__PURE__ */ a.jsx("feGaussianBlur", { stdDeviation: "6" }),
                                /* @__PURE__ */ a.jsx(
                                  "feColorMatrix",
                                  {
                                    type: "matrix",
                                    values: "0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                  }
                                ),
                                /* @__PURE__ */ a.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                                /* @__PURE__ */ a.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                              ]
                            }
                          ) })
                        ]
                      }
                    ) }),
                    l === "solutions" && /* @__PURE__ */ a.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ a.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ a.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ a.jsx(
                            "circle",
                            {
                              cx: "200",
                              cy: "150",
                              r: "40",
                              fill: "#8220ff",
                              fillOpacity: "0.1",
                              stroke: "#8220ff",
                              strokeWidth: "2"
                            }
                          ),
                          /* @__PURE__ */ a.jsx("circle", { cx: "100", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "300", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "70", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "230", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("path", { d: "M125 150 L160 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("path", { d: "M240 150 L275 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("path", { d: "M200 95 L200 130", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("path", { d: "M200 170 L200 205", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ a.jsx("polygon", { points: "158,145 158,155 168,150", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("polygon", { points: "242,145 242,155 232,150", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("polygon", { points: "195,128 205,128 200,138", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("polygon", { points: "195,172 205,172 200,162", fill: "#8220ff" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "100", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "300", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "70", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "230", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "150", r: "20", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "150", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "250", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "150", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "250", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" })
                        ]
                      }
                    ) }),
                    l === "resources" && /* @__PURE__ */ a.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ a.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ a.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ a.jsxs("g", { filter: "url(#resourcesShadow)", children: [
                            /* @__PURE__ */ a.jsx("rect", { x: "140", y: "80", width: "120", height: "140", rx: "4", fill: "url(#bookGradient)" }),
                            /* @__PURE__ */ a.jsx(
                              "rect",
                              {
                                x: "140",
                                y: "80",
                                width: "120",
                                height: "140",
                                rx: "4",
                                stroke: "#8220ff",
                                strokeWidth: "2",
                                fill: "none"
                              }
                            ),
                            /* @__PURE__ */ a.jsx("path", { d: "M160 100 L240 100", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M160 120 L240 120", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M160 140 L240 140", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M160 160 L240 160", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M160 180 L240 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsx("path", { d: "M230 80 L230 110 L220 100 L210 110 L210 80", fill: "#8220ff", fillOpacity: "0.3" }),
                            /* @__PURE__ */ a.jsxs("g", { transform: "translate(-10, -10) rotate(-5)", children: [
                              /* @__PURE__ */ a.jsx(
                                "rect",
                                {
                                  x: "80",
                                  y: "120",
                                  width: "80",
                                  height: "100",
                                  rx: "4",
                                  fill: "white",
                                  stroke: "#8220ff",
                                  strokeWidth: "1.5"
                                }
                              ),
                              /* @__PURE__ */ a.jsx("path", { d: "M90 135 L150 135", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ a.jsx("path", { d: "M90 150 L150 150", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ a.jsx("path", { d: "M90 165 L150 165", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ a.jsx("path", { d: "M90 180 L120 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" })
                            ] }),
                            /* @__PURE__ */ a.jsxs("g", { transform: "translate(10, -10) rotate(5)", children: [
                              /* @__PURE__ */ a.jsx(
                                "rect",
                                {
                                  x: "240",
                                  y: "120",
                                  width: "80",
                                  height: "60",
                                  rx: "4",
                                  fill: "#f0f0f5",
                                  stroke: "#8220ff",
                                  strokeWidth: "1.5"
                                }
                              ),
                              /* @__PURE__ */ a.jsx("polygon", { points: "270,140 290,150 270,160", fill: "#8220ff" }),
                              /* @__PURE__ */ a.jsx(
                                "rect",
                                {
                                  x: "245",
                                  y: "125",
                                  width: "70",
                                  height: "50",
                                  rx: "2",
                                  stroke: "#8220ff",
                                  strokeWidth: "1",
                                  fill: "none"
                                }
                              )
                            ] })
                          ] }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "50", r: "15", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "50", r: "10", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "200", cy: "50", r: "5", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "150", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "250", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "120", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "280", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ a.jsxs("defs", { children: [
                            /* @__PURE__ */ a.jsxs(
                              "linearGradient",
                              {
                                id: "bookGradient",
                                x1: "140",
                                y1: "80",
                                x2: "260",
                                y2: "220",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ a.jsx("stop", { offset: "0%", stopColor: "#f0f0f5" }),
                                  /* @__PURE__ */ a.jsx("stop", { offset: "100%", stopColor: "#ffffff" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ a.jsx("filter", { id: "resourcesShadow", x: "-10%", y: "-10%", width: "120%", height: "120%", children: /* @__PURE__ */ a.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "4", floodColor: "#8220ff", floodOpacity: "0.2" }) })
                          ] })
                        ]
                      }
                    ) }),
                    l === "developers" && /* @__PURE__ */ a.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ a.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ a.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "20", y: "20", width: "280", height: "200", rx: "8", fill: "#1E1E1E" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "20", y: "20", width: "280", height: "30", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "40", cy: "35", r: "6", fill: "#FF5F56" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "60", cy: "35", r: "6", fill: "#FFBD2E" }),
                          /* @__PURE__ */ a.jsx("circle", { cx: "80", cy: "35", r: "6", fill: "#27C93F" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "70", width: "120", height: "10", rx: "2", fill: "#9CDCFE", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "90", width: "180", height: "10", rx: "2", fill: "#CE9178", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "60", y: "110", width: "200", height: "10", rx: "2", fill: "#6A9955", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "60", y: "130", width: "160", height: "10", rx: "2", fill: "#569CD6", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "150", width: "140", height: "10", rx: "2", fill: "#DCDCAA", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "60", y: "170", width: "180", height: "10", rx: "2", fill: "#4EC9B0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "40", y: "190", width: "160", height: "10", rx: "2", fill: "#C586C0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "75", fontSize: "10", fill: "#858585", children: "1" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "95", fontSize: "10", fill: "#858585", children: "2" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "115", fontSize: "10", fill: "#858585", children: "3" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "135", fontSize: "10", fill: "#858585", children: "4" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "155", fontSize: "10", fill: "#858585", children: "5" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "175", fontSize: "10", fill: "#858585", children: "6" }),
                          /* @__PURE__ */ a.jsx("text", { x: "30", y: "195", fontSize: "10", fill: "#858585", children: "7" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "80", y: "130", width: "310", height: "130", rx: "8", fill: "#1E1E1E", filter: "url(#shadow)" }),
                          /* @__PURE__ */ a.jsx("rect", { x: "80", y: "130", width: "310", height: "25", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ a.jsx("text", { x: "235", y: "147", fontSize: "12", fill: "#FFFFFF", textAnchor: "middle", children: "Terminal" }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "170", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ git clone https://github.com/plexicus/plexicus-sdk.git" }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "185", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "Cloning into 'plexicus-sdk'..." }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "200", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "remote: Counting objects: 100% (1234/1234)" }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "215", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ cd plexicus-sdk && npm install" }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "230", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "added 1024 packages in 4.2s" }),
                          /* @__PURE__ */ a.jsx("text", { x: "90", y: "245", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ npm run dev" }),
                          /* @__PURE__ */ a.jsxs("g", { transform: "translate(320, 240) scale(0.8)", children: [
                            /* @__PURE__ */ a.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white" }),
                            /* @__PURE__ */ a.jsx(
                              "path",
                              {
                                d: "M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z",
                                fill: "#1B1F23",
                                transform: "translate(0, 0)"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ a.jsx("defs", { children: /* @__PURE__ */ a.jsx("filter", { id: "shadow", x: "0", y: "0", width: "400", height: "300", filterUnits: "userSpaceOnUse", children: /* @__PURE__ */ a.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "3", floodColor: "#000000", floodOpacity: "0.3" }) }) })
                        ]
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ a.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
                    /* @__PURE__ */ a.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: U[l].title }),
                    /* @__PURE__ */ a.jsx("p", { className: "text-gray-700", children: x(l === "products" ? "nav.product.explore" : l === "solutions" ? "nav.solutions.explore" : "nav.resources.explore") })
                  ] })
                ] }),
                /* @__PURE__ */ a.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: U[l].items.filter((N) => l !== "resources" || !N.title.startsWith("vs ")).map((N, B) => /* @__PURE__ */ a.jsxs(
                  X,
                  {
                    href: N.href,
                    className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                    onClick: () => u(null),
                    children: [
                      /* @__PURE__ */ a.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: Nt.cloneElement(N.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ a.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ a.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: N.title }),
                        /* @__PURE__ */ a.jsx("p", { className: "text-sm text-gray-600 mt-1", children: N.description })
                      ] })
                    ]
                  },
                  B
                )) }) })
              ] }) })
            }
          )
        ] }),
        g && C && i && /* @__PURE__ */ a.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 xl:hidden", onClick: () => o(!1) }),
        g && C && /* @__PURE__ */ a.jsx(
          "div",
          {
            className: `xl:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300  delay-500 ease-in-out ${i ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ a.jsxs("div", { className: "overflow-y-auto h-full p-4 pb-20", children: [
              /* @__PURE__ */ a.jsx(
                Xa,
                {
                  currentLang: t,
                  webUrl: w,
                  blogUrl: K,
                  isOpen: v,
                  onClose: () => _(!1)
                }
              ),
              /* @__PURE__ */ a.jsxs("div", { className: "space-y-4", children: [
                Object.entries(U).map(([N, B]) => {
                  const J = c.includes(N);
                  return /* @__PURE__ */ a.jsxs("div", { className: "space-y-2 bg-[#8220ff]/10 px-2 rounded-md", children: [
                    /* @__PURE__ */ a.jsxs(
                      "button",
                      {
                        onClick: () => m(N),
                        className: "flex items-center justify-between w-full py-2",
                        children: [
                          /* @__PURE__ */ a.jsx("h3", { className: "font-semibold", children: B.title }),
                          /* @__PURE__ */ a.jsx(
                            "svg",
                            {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "16",
                              height: "16",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              className: `transition-transform duration-200 ${J ? "transform rotate-180" : ""}`,
                              children: /* @__PURE__ */ a.jsx("path", { d: "m6 9 6 6 6-6" })
                            }
                          )
                        ]
                      }
                    ),
                    J && /* @__PURE__ */ a.jsx("div", { className: "grid grid-cols-1 gap-2 py-2", children: B.items.map((V, Y) => /* @__PURE__ */ a.jsxs(
                      X,
                      {
                        href: V.href,
                        className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                        onClick: () => o(!1),
                        children: [
                          /* @__PURE__ */ a.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: Nt.cloneElement(V.icon, { width: 16, height: 16 }) }),
                          /* @__PURE__ */ a.jsx("span", { className: "text-sm", children: V.title })
                        ]
                      },
                      Y
                    )) })
                  ] }, N);
                }),
                /* @__PURE__ */ a.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ a.jsx(X, { href: `${Qe}/register`, className: "flex items-center justify-center", children: /* @__PURE__ */ a.jsx(me, { className: "text-white w-full bg-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: x("nav.get_started") }) }),
                  /* @__PURE__ */ a.jsx(
                    X,
                    {
                      href: `${Qe}/login`,
                      className: "text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-center",
                      children: /* @__PURE__ */ a.jsx(me, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: x("nav.login") })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    X,
                    {
                      href: `${w}${n}pricing`,
                      className: " py-2 text-sm font-medium flex items-center justify-center",
                      onClick: () => o(!1),
                      children: /* @__PURE__ */ a.jsx(me, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: x("nav.pricing") })
                    }
                  ),
                  /* @__PURE__ */ a.jsx(
                    X,
                    {
                      href: `${w}${n}contact`,
                      className: " py-2 text-sm font-medium flex items-center justify-center",
                      onClick: () => o(!1),
                      children: /* @__PURE__ */ a.jsx(me, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: x("nav.contact") })
                    }
                  )
                ] })
              ] })
            ] })
          }
        )
      ]
    }
  );
}, _c = "English", kc = "German", wc = "French", jc = "Japanese", Sc = "Italian", Pc = "Dutch", Cc = "Swedish", Ec = "Spanish", zc = "Norwegian", Oc = "Danish", Ac = "Finnish", Nc = "Portuguese", Ic = "Chinese (Simplified)", Lc = "Arabic", Rc = "Hebrew", Mc = "Turkish", Tc = "Polish", $c = "Czech", Dc = "Indonesian", Fc = {
  en: _c,
  de: kc,
  fr: wc,
  ja: jc,
  it: Sc,
  nl: Pc,
  sv: Cc,
  es: Ec,
  no: zc,
  da: Oc,
  fi: Ac,
  pt: Nc,
  zh: Ic,
  ar: Lc,
  he: Rc,
  tr: Mc,
  pl: Tc,
  cs: $c,
  id: Dc
};
function Bc() {
  var r;
  const t = (n) => {
    localStorage.setItem("scrollPosition", String(window == null ? void 0 : window.scrollY));
    const s = window.location.pathname;
    let o = s.match(/^\/([a-z]{2})\//) ? s.replace(/^\/[a-z]{2}\//, `/${n}/`) : `/${n}${s}`;
    o = o.startsWith("/en/") ? o.replace(/^\/en/, "") : o, window.location.href = o;
  };
  ie(() => {
    const n = localStorage.getItem("scrollPosition");
    n && (window.scrollTo(0, parseInt(n)), localStorage.removeItem("scrollPosition"));
  }, []);
  const e = ((r = window.location.pathname.match(/^\/([a-z]{2})\//)) == null ? void 0 : r[1]) || "en";
  return /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs("div", { className: "relative inline-flex items-center w-[150px]", children: [
    /* @__PURE__ */ a.jsx(_s, { className: "absolute  text-muted-foreground pointer-events-none", style: { left: 1, paddingLeft: 6, width: 22 } }),
    /* @__PURE__ */ a.jsx(
      "select",
      {
        defaultValue: e,
        className: "appearance-none w-full  pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700",
        style: { paddingLeft: 30 },
        onChange: (n) => t(n.target.value),
        children: Object.entries(Fc).map(([n, s]) => /* @__PURE__ */ a.jsx("option", { value: n, children: s }, n))
      }
    ),
    /* @__PURE__ */ a.jsx(
      "svg",
      {
        className: "pointer-events-none absolute  top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        style: { right: 3, marginRight: 4 },
        children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
      }
    )
  ] }) });
}
function Jc({ lang: t, fullSiteUrl: e = "http://localhost:8000", fullBlogUrl: r = "http://localhost:9000", showLanguageSelector: n = !0 }) {
  const [s, i] = re("/"), { t: o, i18n: l } = pt();
  ie(() => {
    l.changeLanguage(t), i(t !== "en" ? `/${t}/` : "/");
  }, []);
  const u = ot(e, wn), c = ot(r, jn), d = [
    {
      alt: o("footer.social_media.twitter"),
      link: "https://x.com/plexicus_ai/",
      icon: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsxs("g", { fill: "none", "fill-rule": "evenodd", children: [
        /* @__PURE__ */ a.jsx("path", { d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ a.jsx("path", { fill: "currentColor", d: "M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16ZM16.5 19L6 5h1.5L18 19z" })
      ] }) })
    },
    {
      alt: o("footer.social_media.linkedin"),
      link: "https://www.linkedin.com/company/plexicus/",
      icon: /* @__PURE__ */ a.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ a.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
          clipRule: "evenodd"
        }
      ) })
    },
    {
      alt: o("footer.social_media.github"),
      link: "https://github.com/apps/plexicus",
      icon: /* @__PURE__ */ a.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: /* @__PURE__ */ a.jsx("path", { fill: "currentColor", d: "M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2 .1-2 .1-2c3.1.1 4.8 3.2 4.8 3.2c2.7 4.8 7.3 3.4 9 2.5c.3-2 1.1-3.4 2-4.2c-6.8-.7-14.1-3.4-14.1-15.2c0-3.4 1.3-6.1 3.2-8.2c-.3-.7-1.4-3.9.3-8.2c0 0 2.7-.8 8.6 3.2c2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2c1.7 4.2.7 7.5.3 8.2c2 2.1 3.2 4.9 3.2 8.2c0 11.8-7.3 14.5-14.1 15.2c1.1 1 2.1 3 2.1 5.8c0 4.2-.1 7.5-.1 8.5c0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8" }) })
    },
    {
      alt: o("footer.social_media.instagram"),
      link: "https://www.instagram.com/plexicus_ai/",
      icon: /* @__PURE__ */ a.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: [
        /* @__PURE__ */ a.jsx("path", { fill: "currentColor", d: "M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5s-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1s-5.5.7-7.6 1.4s-3.8 1.9-5.5 3.6s-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8s.7 5.5 1.4 7.6s1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5s4.2 1.3 7.6 1.4c3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1s5.5-.7 7.6-1.4s3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5s1.3-4.2 1.4-7.6c.1-3.2.1-4.2.1-12.7s.2-9.6.1-13m-5.6 25.3c-.1 3-.7 4.6-1.1 5.8c-.6 1.4-1.3 2.5-2.4 3.5c-1.1 1.1-2.1 1.7-3.5 2.4c-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1c-3-.1-4.6-.7-5.8-1.1c-1.4-.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5c-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5c.1-3 .7-4.6 1.1-5.8c.6-1.4 1.3-2.5 2.3-3.5c1.1-1.1 2.1-1.7 3.5-2.3c1.1-.4 2.7-1 5.8-1.1c3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1c1.4.6 2.5 1.3 3.5 2.3c1.1 1.1 1.7 2.1 2.4 3.5c.4 1.1 1 2.7 1.1 5.8c.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5" }),
        /* @__PURE__ */ a.jsx("path", { fill: "currentColor", d: "M32 16.1c-8.9 0-15.9 7.2-15.9 15.9c0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9s-7.1-15.9-16-15.9m0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4" }),
        /* @__PURE__ */ a.jsx("circle", { cx: "48.7", cy: "15.4", r: "3.7", fill: "currentColor" })
      ] })
    }
  ], p = [
    {
      title: o("footer.sections.products.title"),
      items: [
        {
          link: `${u}${s}products/cnapp-platform`,
          text: o("footer.sections.products.links.platform_overview")
        },
        {
          link: `${u}${s}products/benefits`,
          text: o("footer.sections.products.links.benefits")
        },
        {
          link: `${u}${s}products/use-cases`,
          text: o("footer.sections.products.links.use_cases")
        },
        {
          link: `${u}${s}products/aspm`,
          text: o("footer.sections.products.links.aspm")
        },
        {
          link: `${u}${s}products/cspm`,
          text: o("footer.sections.products.links.cspm")
        },
        {
          link: `${u}${s}products/container`,
          text: o("footer.sections.products.links.container_security")
        },
        {
          link: `${u}${s}products/cwpp`,
          text: o("footer.sections.products.links.cwpp")
        },
        {
          link: `${u}${s}products/ciem`,
          text: o("footer.sections.products.links.ciem")
        }
      ]
    },
    {
      title: o("footer.sections.resources.title"),
      items: [
        {
          link: `${c}${s}`,
          text: o("footer.sections.resources.links.blog")
        },
        {
          link: "https://docs.plexicus.com/",
          text: o("footer.sections.resources.links.documentation")
        },
        {
          text: o("nav.resources.branding_assets"),
          link: `${u}${s}branding-assets`
        },
        {
          text: o("nav.resources.changelogs"),
          link: "https://plexicus.canny.io/changelog"
        },
        {
          text: o("nav.resources.youtube_channel"),
          link: "https://youtube.com/@plexicus"
        },
        {
          text: o("nav.resources.feature_requests"),
          link: "https://plexicus.canny.io/feature-requests"
        },
        {
          text: o("nav.resources.integrations"),
          link: `${u}${s}integrations`
        },
        {
          text: o("nav.resources.comparison_overview"),
          link: `${u}${s}comparison/overview`
        }
      ]
    },
    {
      title: o("footer.sections.company.title"),
      items: [
        {
          link: `${u}${s}contact`,
          text: o("footer.sections.company.links.contact")
        },
        {
          link: `${u}${s}privacy`,
          text: o("footer.sections.company.links.privacy_policy")
        },
        {
          link: `${u}${s}pricing`,
          text: o("footer.sections.products.links.pricing")
        },
        {
          link: `${u}${s}support`,
          text: o("nav.resources.support")
        }
      ]
    }
  ];
  return /* @__PURE__ */ a.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ a.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ a.jsxs("div", { id: "footer-grid", className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5", children: [
      /* @__PURE__ */ a.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ a.jsx(X, { href: `${u}${s}`, className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ a.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus S.L.", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ a.jsx("p", { className: "text-gray-600 mb-4 max-w-sm", children: o("footer.tagline") }),
        /* @__PURE__ */ a.jsx("div", { id: "social_links", className: "flex justify-start items-center gap-4", children: d.map(({ link: m, icon: g, alt: h }) => /* @__PURE__ */ a.jsxs(X, { target: "_blank", href: m, className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ a.jsx("span", { className: "sr-only", children: h }),
          g
        ] }, m)) }),
        n && /* @__PURE__ */ a.jsx("div", { className: "mt-6", children: /* @__PURE__ */ a.jsx(Bc, {}) })
      ] }),
      p.map(({ title: m, items: g }) => /* @__PURE__ */ a.jsxs("div", { children: [
        /* @__PURE__ */ a.jsx("h3", { className: "text-sm font-semibold text-purple-700 tracking-wider uppercase mb-4", children: m }),
        /* @__PURE__ */ a.jsx("ul", { className: "space-y-2", children: g.map(({ link: h, text: v }) => /* @__PURE__ */ a.jsx("li", { children: /* @__PURE__ */ a.jsx(X, { href: h, className: "text-gray-600 hover:text-purple-700", children: v }) }, v)) })
      ] }, m))
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ a.jsxs("div", { className: "flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-4", children: [
      /* @__PURE__ */ a.jsxs("p", { className: "text-gray-500 text-sm flex flex-col md:flex-row gap-3 ", children: [
        /* @__PURE__ */ a.jsx("div", { children: "© 2025 PLEXICUS, S.L" }),
        /* @__PURE__ */ a.jsxs("div", { children: [
          /* @__PURE__ */ a.jsx(X, { href: `${u}${s}privacy`, className: "underline hover:text-gray-700 ml-0 ", children: o("footer.policies.privacy_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ a.jsx(X, { href: `${u}${s}management`, className: "underline hover:text-gray-700", children: o("footer.policies.management_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ a.jsx(X, { href: `${u}${s}legal`, className: "underline hover:text-gray-700", children: o("footer.policies.legal_notice") })
        ] })
      ] }),
      /* @__PURE__ */ a.jsx("div", { children: /* @__PURE__ */ a.jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200", children: [
        /* @__PURE__ */ a.jsx("svg", { className: "w-4 h-4 mr-1", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ a.jsx(
          "path",
          {
            d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }),
        o("footer.readiness")
      ] }) })
    ] }) })
  ] }) });
}
const Wc = "G-Y274FMXQNP", Zc = ({ trackingId: t = Wc, ...e }) => /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
  /* @__PURE__ */ a.jsx("script", { async: !0, src: `https://www.googletagmanager.com/gtag/js?id=${t}` }),
  /* @__PURE__ */ a.jsx(
    "script",
    {
      ...e,
      dangerouslySetInnerHTML: {
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '${t}');
          `
      }
    }
  )
] }), Xc = () => Be(
  (e, r, n, s) => {
    typeof window.gtag == "function" ? window.gtag("event", e, {
      event_category: r,
      event_label: n,
      ...s !== void 0 && { value: s }
      // Conditionally add value
    }) : console.warn("gtag is not defined. Google Analytics script might not be loaded.");
  },
  []
  // No dependencies, so the function reference is stable
);
export {
  qc as CommandDialogSearch,
  Jc as FooterPlexicus,
  Zc as GoogleAnalytics,
  Yc as NavbarPlexicus,
  Bc as SelectLanguage,
  Xc as useTrackClick
};
