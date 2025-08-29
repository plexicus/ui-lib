(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(`/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){.ui-lib *,.ui-lib :before,.ui-lib :after,.ui-lib ::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{.ui-lib,.ui-lib :host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-800:oklch(44.8% .119 151.328);--color-violet-800:oklch(43.2% .232 292.759);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-lg:32rem;--container-xl:36rem;--container-4xl:56rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--tracking-widest:.1em;--radius-xs:.125rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--blur-xs:4px;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{.ui-lib *,.ui-lib :after,.ui-lib :before,.ui-lib ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib html,.ui-lib :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}.ui-lib hr{height:0;color:inherit;border-top-width:1px}.ui-lib abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.ui-lib h1,.ui-lib h2,.ui-lib h3,.ui-lib h4,.ui-lib h5,.ui-lib h6{font-size:inherit;font-weight:inherit}.ui-lib a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}.ui-lib b,.ui-lib strong{font-weight:bolder}.ui-lib code,.ui-lib kbd,.ui-lib samp,.ui-lib pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}.ui-lib small{font-size:80%}.ui-lib sub,.ui-lib sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}.ui-lib sub{bottom:-.25em}.ui-lib sup{top:-.5em}.ui-lib table{text-indent:0;border-color:inherit;border-collapse:collapse}.ui-lib :-moz-focusring{outline:auto}.ui-lib progress{vertical-align:baseline}.ui-lib summary{display:list-item}.ui-lib ol,.ui-lib ul,.ui-lib menu{list-style:none}.ui-lib img,.ui-lib svg,.ui-lib video,.ui-lib canvas,.ui-lib audio,.ui-lib iframe,.ui-lib embed,.ui-lib object{vertical-align:middle;display:block}.ui-lib img,.ui-lib video{max-width:100%;height:auto}.ui-lib button,.ui-lib input,.ui-lib select,.ui-lib optgroup,.ui-lib textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib :where(select:is([multiple],[size])) optgroup{font-weight:bolder}.ui-lib :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}.ui-lib ::file-selector-button{margin-inline-end:4px}.ui-lib ::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){.ui-lib ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){.ui-lib ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}.ui-lib textarea{resize:vertical}.ui-lib ::-webkit-search-decoration{-webkit-appearance:none}.ui-lib ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}.ui-lib ::-webkit-datetime-edit{display:inline-flex}.ui-lib ::-webkit-datetime-edit-fields-wrapper{padding:0}.ui-lib ::-webkit-datetime-edit{padding-block:0}.ui-lib ::-webkit-datetime-edit-year-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-month-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-day-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-hour-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-minute-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-second-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-millisecond-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-meridiem-field{padding-block:0}.ui-lib ::-webkit-calendar-picker-indicator{line-height:1}.ui-lib :-moz-ui-invalid{box-shadow:none}.ui-lib button,.ui-lib input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::-webkit-inner-spin-button{height:auto}.ui-lib ::-webkit-outer-spin-button{height:auto}.ui-lib [hidden]:where(:not([hidden=until-found])){display:none!important}.ui-lib *{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib *{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib{background-color:var(--background);color:var(--foreground)}}@layer components;@layer utilities{.ui-lib .pointer-events-none{pointer-events:none}.ui-lib .collapse{visibility:collapse}.ui-lib .invisible{visibility:hidden}.ui-lib .visible{visibility:visible}.ui-lib .sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.ui-lib .not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.ui-lib .absolute{position:absolute}.ui-lib .fixed{position:fixed}.ui-lib .relative{position:relative}.ui-lib .static{position:static}.ui-lib .sticky{position:sticky}.ui-lib .inset-0{inset:calc(var(--spacing)*0)}.ui-lib .top-0{top:calc(var(--spacing)*0)}.ui-lib .top-1{top:calc(var(--spacing)*1)}.ui-lib .top-1\\/2{top:50%}.ui-lib .top-4{top:calc(var(--spacing)*4)}.ui-lib .top-16{top:calc(var(--spacing)*16)}.ui-lib .top-60{top:calc(var(--spacing)*60)}.ui-lib .top-\\[50\\%\\]{top:50%}.ui-lib .top-full{top:100%}.ui-lib .right-0{right:calc(var(--spacing)*0)}.ui-lib .right-1{right:calc(var(--spacing)*1)}.ui-lib .right-2{right:calc(var(--spacing)*2)}.ui-lib .right-4{right:calc(var(--spacing)*4)}.ui-lib .left-0{left:calc(var(--spacing)*0)}.ui-lib .left-3{left:calc(var(--spacing)*3)}.ui-lib .left-\\[50\\%\\]{left:50%}.ui-lib .isolate{isolation:isolate}.ui-lib .isolation-auto{isolation:auto}.ui-lib .z-30{z-index:30}.ui-lib .z-40{z-index:40}.ui-lib .z-50{z-index:50}.ui-lib .container{width:100%}@media (min-width:40rem){.ui-lib .container{max-width:40rem}}@media (min-width:48rem){.ui-lib .container{max-width:48rem}}@media (min-width:64rem){.ui-lib .container{max-width:64rem}}@media (min-width:80rem){.ui-lib .container{max-width:80rem}}@media (min-width:96rem){.ui-lib .container{max-width:96rem}}.ui-lib .-mx-1{margin-inline:calc(var(--spacing)*-1)}.ui-lib .mx-auto{margin-inline:auto}.ui-lib .my-1{margin-block:calc(var(--spacing)*1)}.ui-lib .mt-1{margin-top:calc(var(--spacing)*1)}.ui-lib .mt-2{margin-top:calc(var(--spacing)*2)}.ui-lib .mt-6{margin-top:calc(var(--spacing)*6)}.ui-lib .mt-8{margin-top:calc(var(--spacing)*8)}.ui-lib .mt-24{margin-top:calc(var(--spacing)*24)}.ui-lib .mr-1{margin-right:calc(var(--spacing)*1)}.ui-lib .mr-2{margin-right:calc(var(--spacing)*2)}.ui-lib .mr-4{margin-right:calc(var(--spacing)*4)}.ui-lib .mb-3{margin-bottom:calc(var(--spacing)*3)}.ui-lib .mb-4{margin-bottom:calc(var(--spacing)*4)}.ui-lib .mb-6{margin-bottom:calc(var(--spacing)*6)}.ui-lib .ml-0{margin-left:calc(var(--spacing)*0)}.ui-lib .ml-1{margin-left:calc(var(--spacing)*1)}.ui-lib .ml-4{margin-left:calc(var(--spacing)*4)}.ui-lib .ml-auto{margin-left:auto}.ui-lib .line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.ui-lib .line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.ui-lib .block{display:block}.ui-lib .contents{display:contents}.ui-lib .flex{display:flex}.ui-lib .flow-root{display:flow-root}.ui-lib .grid{display:grid}.ui-lib .hidden{display:none}.ui-lib .inline{display:inline}.ui-lib .inline-block{display:inline-block}.ui-lib .inline-flex{display:inline-flex}.ui-lib .inline-grid{display:inline-grid}.ui-lib .inline-table{display:inline-table}.ui-lib .list-item{display:list-item}.ui-lib .table{display:table}.ui-lib .table-caption{display:table-caption}.ui-lib .table-cell{display:table-cell}.ui-lib .table-column{display:table-column}.ui-lib .table-column-group{display:table-column-group}.ui-lib .table-footer-group{display:table-footer-group}.ui-lib .table-header-group{display:table-header-group}.ui-lib .table-row{display:table-row}.ui-lib .table-row-group{display:table-row-group}.ui-lib .size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.ui-lib .h-3{height:calc(var(--spacing)*3)}.ui-lib .h-3\\.5{height:calc(var(--spacing)*3.5)}.ui-lib .h-4{height:calc(var(--spacing)*4)}.ui-lib .h-5{height:calc(var(--spacing)*5)}.ui-lib .h-6{height:calc(var(--spacing)*6)}.ui-lib .h-7{height:calc(var(--spacing)*7)}.ui-lib .h-8{height:calc(var(--spacing)*8)}.ui-lib .h-9{height:calc(var(--spacing)*9)}.ui-lib .h-10{height:calc(var(--spacing)*10)}.ui-lib .h-11{height:calc(var(--spacing)*11)}.ui-lib .h-12{height:calc(var(--spacing)*12)}.ui-lib .h-14{height:calc(var(--spacing)*14)}.ui-lib .h-16{height:calc(var(--spacing)*16)}.ui-lib .h-36{height:calc(var(--spacing)*36)}.ui-lib .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.ui-lib .h-full{height:100%}.ui-lib .h-px{height:1px}.ui-lib .h-screen{height:100vh}.ui-lib .max-h-96{max-height:calc(var(--spacing)*96)}.ui-lib .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.ui-lib .max-h-\\[calc\\(100vh-80px\\)\\]{max-height:calc(100vh - 80px)}.ui-lib .max-h-\\[calc\\(100vh-600px\\)\\]{max-height:calc(100vh - 600px)}.ui-lib .max-h-full{max-height:100%}.ui-lib .w-3{width:calc(var(--spacing)*3)}.ui-lib .w-3\\.5{width:calc(var(--spacing)*3.5)}.ui-lib .w-4{width:calc(var(--spacing)*4)}.ui-lib .w-6{width:calc(var(--spacing)*6)}.ui-lib .w-7{width:calc(var(--spacing)*7)}.ui-lib .w-8{width:calc(var(--spacing)*8)}.ui-lib .w-9{width:calc(var(--spacing)*9)}.ui-lib .w-10{width:calc(var(--spacing)*10)}.ui-lib .w-12{width:calc(var(--spacing)*12)}.ui-lib .w-28{width:calc(var(--spacing)*28)}.ui-lib .w-64{width:calc(var(--spacing)*64)}.ui-lib .w-\\[24px\\]{width:24px}.ui-lib .w-\\[150px\\]{width:150px}.ui-lib .w-\\[200\\%\\]{width:200%}.ui-lib .w-auto{width:auto}.ui-lib .w-full{width:100%}.ui-lib .max-w-7xl{max-width:var(--container-7xl)}.ui-lib .max-w-\\[90vw\\]{max-width:90vw}.ui-lib .max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.ui-lib .max-w-none{max-width:none}.ui-lib .max-w-sm{max-width:var(--container-sm)}.ui-lib .min-w-0{min-width:calc(var(--spacing)*0)}.ui-lib .min-w-\\[8rem\\]{min-width:8rem}.ui-lib .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.ui-lib .flex-1{flex:1}.ui-lib .shrink{flex-shrink:1}.ui-lib .shrink-0{flex-shrink:0}.ui-lib .grow{flex-grow:1}.ui-lib .border-collapse{border-collapse:collapse}.ui-lib .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.ui-lib .origin-right{transform-origin:100%}.ui-lib .origin-top{transform-origin:top}.ui-lib .translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-none{translate:none}.ui-lib .scale-3d{scale:var(--tw-scale-x)var(--tw-scale-y)var(--tw-scale-z)}.ui-lib .rotate-180{rotate:180deg}.ui-lib .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.ui-lib .cursor-default{cursor:default}.ui-lib .touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.ui-lib .resize{resize:both}.ui-lib .scroll-py-1{scroll-padding-block:calc(var(--spacing)*1)}.ui-lib .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.ui-lib .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.ui-lib .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .flex-col{flex-direction:column}.ui-lib .flex-col-reverse{flex-direction:column-reverse}.ui-lib .flex-wrap{flex-wrap:wrap}.ui-lib .items-center{align-items:center}.ui-lib .items-start{align-items:flex-start}.ui-lib .justify-between{justify-content:space-between}.ui-lib .justify-center{justify-content:center}.ui-lib .justify-start{justify-content:flex-start}.ui-lib .gap-1{gap:calc(var(--spacing)*1)}.ui-lib .gap-2{gap:calc(var(--spacing)*2)}.ui-lib .gap-3{gap:calc(var(--spacing)*3)}.ui-lib .gap-4{gap:calc(var(--spacing)*4)}.ui-lib .gap-6{gap:calc(var(--spacing)*6)}.ui-lib .gap-8{gap:calc(var(--spacing)*8)}.ui-lib :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}.ui-lib :where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.ui-lib :where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}.ui-lib :where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}.ui-lib :where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}.ui-lib :where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.ui-lib .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui-lib .overflow-hidden{overflow:hidden}.ui-lib .overflow-visible{overflow:visible}.ui-lib .overflow-x-hidden{overflow-x:hidden}.ui-lib .overflow-y-auto{overflow-y:auto}.ui-lib .rounded{border-radius:.25rem}.ui-lib .rounded-full{border-radius:3.40282e38px}.ui-lib .rounded-lg{border-radius:var(--radius)}.ui-lib .rounded-md{border-radius:calc(var(--radius) - 2px)}.ui-lib .rounded-sm{border-radius:calc(var(--radius) - 4px)}.ui-lib .rounded-xl{border-radius:calc(var(--radius) + 4px)}.ui-lib .rounded-xs{border-radius:var(--radius-xs)}.ui-lib .rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.ui-lib .rounded-ss{border-start-start-radius:.25rem}.ui-lib .rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.ui-lib .rounded-se{border-start-end-radius:.25rem}.ui-lib .rounded-ee{border-end-end-radius:.25rem}.ui-lib .rounded-es{border-end-start-radius:.25rem}.ui-lib .rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.ui-lib .rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-tl{border-top-left-radius:.25rem}.ui-lib .rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.ui-lib .rounded-tr{border-top-right-radius:.25rem}.ui-lib .rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-br{border-bottom-right-radius:.25rem}.ui-lib .rounded-bl{border-bottom-left-radius:.25rem}.ui-lib .border{border-style:var(--tw-border-style);border-width:1px}.ui-lib .border-2{border-style:var(--tw-border-style);border-width:2px}.ui-lib .border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.ui-lib .border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.ui-lib .border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.ui-lib .border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.ui-lib .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.ui-lib .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.ui-lib .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.ui-lib .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.ui-lib .border-gray-100{border-color:var(--color-gray-100)}.ui-lib .border-gray-200{border-color:var(--color-gray-200)}.ui-lib .border-gray-300{border-color:var(--color-gray-300)}.ui-lib .border-gray-600{border-color:var(--color-gray-600)}.ui-lib .border-green-200{border-color:var(--color-green-200)}.ui-lib .border-input{border-color:var(--input)}.ui-lib .border-purple-300{border-color:var(--color-purple-300)}.ui-lib .border-white{border-color:var(--color-white)}.ui-lib .border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.ui-lib .border-white\\/50{border-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/50{border-color:color-mix(in oklab,var(--color-white)50%,transparent)}}.ui-lib .bg-\\[\\#8220ff\\]{background-color:#8220ff}.ui-lib .bg-\\[\\#8220ff\\]\\/10{background-color:#8220ff1a}.ui-lib .bg-\\[\\#8220ff\\]\\/60{background-color:#8220ff99}.ui-lib .bg-background,.ui-lib .bg-background\\/80{background-color:var(--background)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-background\\/80{background-color:color-mix(in oklab,var(--background)80%,transparent)}}.ui-lib .bg-black{background-color:var(--color-black)}.ui-lib .bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.ui-lib .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black)50%,transparent)}}.ui-lib .bg-border{background-color:var(--border)}.ui-lib .bg-destructive{background-color:var(--destructive)}.ui-lib .bg-gray-50{background-color:var(--color-gray-50)}.ui-lib .bg-gray-100{background-color:var(--color-gray-100)}.ui-lib .bg-gray-200{background-color:var(--color-gray-200)}.ui-lib .bg-green-100{background-color:var(--color-green-100)}.ui-lib .bg-muted{background-color:var(--muted)}.ui-lib .bg-popover{background-color:var(--popover)}.ui-lib .bg-primary,.ui-lib .bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.ui-lib .bg-secondary{background-color:var(--secondary)}.ui-lib .bg-transparent{background-color:#0000}.ui-lib .bg-violet-800{background-color:var(--color-violet-800)}.ui-lib .bg-white{background-color:var(--color-white)}.ui-lib .bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.ui-lib .from-\\[\\#8220ff\\]{--tw-gradient-from:#8220ff;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .to-\\[\\#a020f0\\]{--tw-gradient-to:#a020f0;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .bg-repeat{background-repeat:repeat}.ui-lib .mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.ui-lib .mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.ui-lib .object-contain{object-fit:contain}.ui-lib .p-0{padding:calc(var(--spacing)*0)}.ui-lib .p-1{padding:calc(var(--spacing)*1)}.ui-lib .p-2{padding:calc(var(--spacing)*2)}.ui-lib .p-3{padding:calc(var(--spacing)*3)}.ui-lib .p-4{padding:calc(var(--spacing)*4)}.ui-lib .p-6{padding:calc(var(--spacing)*6)}.ui-lib .px-1{padding-inline:calc(var(--spacing)*1)}.ui-lib .px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.ui-lib .px-2{padding-inline:calc(var(--spacing)*2)}.ui-lib .px-3{padding-inline:calc(var(--spacing)*3)}.ui-lib .px-4{padding-inline:calc(var(--spacing)*4)}.ui-lib .px-8{padding-inline:calc(var(--spacing)*8)}.ui-lib .py-1{padding-block:calc(var(--spacing)*1)}.ui-lib .py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.ui-lib .py-2{padding-block:calc(var(--spacing)*2)}.ui-lib .py-3{padding-block:calc(var(--spacing)*3)}.ui-lib .py-6{padding-block:calc(var(--spacing)*6)}.ui-lib .py-8{padding-block:calc(var(--spacing)*8)}.ui-lib .pt-4{padding-top:calc(var(--spacing)*4)}.ui-lib .pt-6{padding-top:calc(var(--spacing)*6)}.ui-lib .pt-12{padding-top:calc(var(--spacing)*12)}.ui-lib .pr-0{padding-right:calc(var(--spacing)*0)}.ui-lib .pr-6{padding-right:calc(var(--spacing)*6)}.ui-lib .pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .pr-10{padding-right:calc(var(--spacing)*10)}.ui-lib .pb-6{padding-bottom:calc(var(--spacing)*6)}.ui-lib .pb-20{padding-bottom:calc(var(--spacing)*20)}.ui-lib .pl-2{padding-left:calc(var(--spacing)*2)}.ui-lib .pl-10{padding-left:calc(var(--spacing)*10)}.ui-lib .text-center{text-align:center}.ui-lib .text-left{text-align:left}.ui-lib .font-mono{font-family:var(--font-mono)}.ui-lib .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.ui-lib .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.ui-lib .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.ui-lib .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .text-\\[10px\\]{font-size:10px}.ui-lib .leading-none{--tw-leading:1;line-height:1}.ui-lib .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.ui-lib .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.ui-lib .tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.ui-lib .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.ui-lib .text-wrap{text-wrap:wrap}.ui-lib .text-clip{text-overflow:clip}.ui-lib .text-ellipsis{text-overflow:ellipsis}.ui-lib .whitespace-nowrap{white-space:nowrap}.ui-lib .text-\\[\\#8220ff\\]{color:#8220ff}.ui-lib .text-\\[\\#8220ff\\]\\/80{color:#8220ffcc}.ui-lib .text-black{color:var(--color-black)}.ui-lib .text-foreground{color:var(--foreground)}.ui-lib .text-gray-200{color:var(--color-gray-200)}.ui-lib .text-gray-400{color:var(--color-gray-400)}.ui-lib .text-gray-500{color:var(--color-gray-500)}.ui-lib .text-gray-600{color:var(--color-gray-600)}.ui-lib .text-gray-700{color:var(--color-gray-700)}.ui-lib .text-gray-900{color:var(--color-gray-900)}.ui-lib .text-green-800{color:var(--color-green-800)}.ui-lib .text-muted-foreground{color:var(--muted-foreground)}.ui-lib .text-popover-foreground{color:var(--popover-foreground)}.ui-lib .text-primary{color:var(--primary)}.ui-lib .text-primary-foreground{color:var(--primary-foreground)}.ui-lib .text-purple-700{color:var(--color-purple-700)}.ui-lib .text-secondary-foreground{color:var(--secondary-foreground)}.ui-lib .text-white{color:var(--color-white)}.ui-lib .capitalize{text-transform:capitalize}.ui-lib .lowercase{text-transform:lowercase}.ui-lib .normal-case{text-transform:none}.ui-lib .uppercase{text-transform:uppercase}.ui-lib .italic{font-style:italic}.ui-lib .not-italic{font-style:normal}.ui-lib .diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .normal-nums{font-variant-numeric:normal}.ui-lib .line-through{text-decoration-line:line-through}.ui-lib .no-underline{text-decoration-line:none}.ui-lib .overline{text-decoration-line:overline}.ui-lib .underline{text-decoration-line:underline}.ui-lib .underline-offset-4{text-underline-offset:4px}.ui-lib .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ui-lib .subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.ui-lib .opacity-50{opacity:.5}.ui-lib .opacity-70{opacity:.7}.ui-lib .opacity-100{opacity:1}.ui-lib .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring-offset-background{--tw-ring-offset-color:var(--background)}.ui-lib .outline-hidden{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.ui-lib .outline-hidden{outline-offset:2px;outline:2px solid #0000}}.ui-lib .outline{outline-style:var(--tw-outline-style);outline-width:1px}.ui-lib .blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-blur-xs{--tw-backdrop-blur:blur(var(--blur-xs));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-\\[color\\,box-shadow\\]{transition-property:color,box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-discrete{transition-behavior:allow-discrete}.ui-lib .delay-0{transition-delay:0s}.ui-lib .delay-500{transition-delay:.5s}.ui-lib .duration-200{--tw-duration:.2s;transition-duration:.2s}.ui-lib .duration-300{--tw-duration:.3s;transition-duration:.3s}.ui-lib .ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ui-lib .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ui-lib .ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.ui-lib .delay-0{--tw-animation-delay:0s;animation-delay:0s}.ui-lib .delay-500{--tw-animation-delay:.5s;animation-delay:.5s}.ui-lib .outline-none{--tw-outline-style:none;outline-style:none}.ui-lib .select-none{-webkit-user-select:none;user-select:none}.ui-lib :where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ui-lib .paused{animation-play-state:paused}.ui-lib .ring-inset{--tw-ring-inset:inset}.ui-lib .running{animation-play-state:running}.ui-lib .zoom-in{--tw-enter-scale:0}.ui-lib .zoom-out{--tw-exit-scale:0}@media (hover:hover){.ui-lib .group-hover\\:bg-\\[\\#8220ff\\]\\/20:is(:where(.group):hover *){background-color:#8220ff33}.ui-lib .group-hover\\:text-\\[\\#8220ff\\]:is(:where(.group):hover *){color:#8220ff}}.ui-lib .selection\\:bg-primary ::selection{background-color:var(--primary)}.ui-lib .selection\\:bg-primary::selection{background-color:var(--primary)}.ui-lib .selection\\:text-primary-foreground ::selection{color:var(--primary-foreground)}.ui-lib .selection\\:text-primary-foreground::selection{color:var(--primary-foreground)}.ui-lib .file\\:inline-flex::file-selector-button{display:inline-flex}.ui-lib .file\\:h-7::file-selector-button{height:calc(var(--spacing)*7)}.ui-lib .file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.ui-lib .file\\:bg-transparent::file-selector-button{background-color:#0000}.ui-lib .file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .file\\:text-foreground::file-selector-button{color:var(--foreground)}.ui-lib .placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.ui-lib .placeholder\\:text-white\\/70::placeholder{color:#ffffffb3}@supports (color:color-mix(in lab,red,red)){.ui-lib .placeholder\\:text-white\\/70::placeholder{color:color-mix(in oklab,var(--color-white)70%,transparent)}}@media (hover:hover){.ui-lib .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.ui-lib .hover\\:bg-accent:hover{background-color:var(--accent)}.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}.ui-lib .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.ui-lib .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.ui-lib .hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}.ui-lib .hover\\:bg-purple-200:hover{background-color:var(--color-purple-200)}.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}}.ui-lib .hover\\:bg-violet-800:hover{background-color:var(--color-violet-800)}.ui-lib .hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.ui-lib .hover\\:text-\\[\\#8220ff\\]:hover{color:#8220ff}.ui-lib .hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.ui-lib .hover\\:text-gray-500:hover{color:var(--color-gray-500)}.ui-lib .hover\\:text-gray-700:hover{color:var(--color-gray-700)}.ui-lib .hover\\:text-purple-700:hover{color:var(--color-purple-700)}.ui-lib .hover\\:text-white\\/80:hover{color:#fffc}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:text-white\\/80:hover{color:color-mix(in oklab,var(--color-white)80%,transparent)}}.ui-lib .hover\\:underline:hover{text-decoration-line:underline}.ui-lib .hover\\:opacity-100:hover{opacity:1}.ui-lib .hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.ui-lib .focus\\:border-\\[\\#8220ff\\]:focus{border-color:#8220ff}.ui-lib .focus\\:border-ring:focus{border-color:var(--ring)}.ui-lib .focus\\:bg-accent:focus{background-color:var(--accent)}.ui-lib .focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.ui-lib .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-\\[\\#8220ff\\]\\/20:focus{--tw-ring-color:oklab(54.3459% .11409 -.259125/.2)}.ui-lib .focus\\:ring-gray-500:focus{--tw-ring-color:var(--color-gray-500)}.ui-lib .focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.ui-lib .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.ui-lib .focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.ui-lib .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.ui-lib .focus-visible\\:border-ring:focus-visible{border-color:var(--ring)}.ui-lib .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-\\[3px\\]:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-ring:focus-visible,.ui-lib .focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib .focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.ui-lib .disabled\\:pointer-events-none:disabled{pointer-events:none}.ui-lib .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.ui-lib .disabled\\:opacity-50:disabled{opacity:.5}.ui-lib .aria-invalid\\:border-destructive[aria-invalid=true]{border-color:var(--destructive)}.ui-lib .aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.ui-lib .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.ui-lib .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.ui-lib .data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled=true]{pointer-events:none}.ui-lib .data-\\[disabled\\=true\\]\\:opacity-50[data-disabled=true]{opacity:.5}.ui-lib .data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.ui-lib .data-\\[selected\\=true\\]\\:bg-accent[data-selected=true]{background-color:var(--accent)}.ui-lib .data-\\[selected\\=true\\]\\:text-accent-foreground[data-selected=true]{color:var(--accent-foreground)}.ui-lib .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(2*var(--spacing))}.ui-lib .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(2*var(--spacing))}.ui-lib :is(.\\*\\*\\:data-\\[slot\\=command-input-wrapper\\]\\:h-12 *)[data-slot=command-input-wrapper]{height:calc(var(--spacing)*12)}.ui-lib .data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.ui-lib .data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.ui-lib .data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:var(--accent)}.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:var(--muted-foreground)}.ui-lib .data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.ui-lib .data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}@media (min-width:40rem){.ui-lib .sm\\:top-80{top:calc(var(--spacing)*80)}.ui-lib .sm\\:max-h-\\[300px\\]{max-height:300px}.ui-lib .sm\\:max-w-lg{max-width:var(--container-lg)}.ui-lib .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .sm\\:flex-row{flex-direction:row}.ui-lib .sm\\:justify-end{justify-content:flex-end}.ui-lib .sm\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .sm\\:text-left{text-align:left}}@media (min-width:48rem){.ui-lib .md\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.ui-lib .md\\:h-40{height:calc(var(--spacing)*40)}.ui-lib .md\\:max-h-\\[400px\\]{max-height:400px}.ui-lib .md\\:w-1\\/3{width:33.3333%}.ui-lib .md\\:w-2\\/3{width:66.6667%}.ui-lib .md\\:w-40{width:calc(var(--spacing)*40)}.ui-lib .md\\:w-42{width:calc(var(--spacing)*42)}.ui-lib .md\\:max-w-xl{max-width:var(--container-xl)}.ui-lib .md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .md\\:flex-row{flex-direction:row}.ui-lib .md\\:items-center{align-items:center}.ui-lib .md\\:justify-between{justify-content:space-between}.ui-lib .md\\:gap-4{gap:calc(var(--spacing)*4)}.ui-lib .md\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .md\\:pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (min-width:64rem){.ui-lib .lg\\:top-100{top:calc(var(--spacing)*100)}.ui-lib .lg\\:col-span-2{grid-column:span 2/span 2}.ui-lib .lg\\:max-h-\\[500px\\]{max-height:500px}.ui-lib .lg\\:max-w-4xl{max-width:var(--container-4xl)}.ui-lib .lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.ui-lib .lg\\:gap-6{gap:calc(var(--spacing)*6)}.ui-lib .lg\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@media (min-width:80rem){.ui-lib .xl\\:flex{display:flex}.ui-lib .xl\\:hidden{display:none}.ui-lib .xl\\:inline{display:inline}}.ui-lib .dark\\:border-gray-700:is(.dark *){border-color:var(--color-gray-700)}.ui-lib .dark\\:bg-gray-900:is(.dark *){background-color:var(--color-gray-900)}.ui-lib .dark\\:bg-input\\/30:is(.dark *){background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.ui-lib .dark\\:bg-input\\/30:is(.dark *){background-color:color-mix(in oklab,var(--input)30%,transparent)}}.ui-lib .dark\\:text-white:is(.dark *){color:var(--color-white)}.ui-lib .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading]{padding-block:calc(var(--spacing)*1.5)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading]{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading]{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading]{color:var(--muted-foreground)}.ui-lib .\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden])~[cmdk-group]{padding-top:calc(var(--spacing)*0)}.ui-lib .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg{height:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg{width:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input]{height:calc(var(--spacing)*12)}.ui-lib .\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item]{padding-block:calc(var(--spacing)*3)}.ui-lib .\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg{height:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg{width:calc(var(--spacing)*5)}.ui-lib .\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.ui-lib .\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}.ui-lib .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.ui-lib .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground svg:not([class*=text-]){color:var(--muted-foreground)}.ui-lib .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}.ui-lib *{scrollbar-color:#404040 #000!important;scrollbar-width:thin!important}.ui-lib{--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5}.ui-lib .dark{--background:oklch(14.5% 0 0);--foreground:oklch(98.5% 0 0);--card:oklch(20.5% 0 0);--card-foreground:oklch(98.5% 0 0);--popover:oklch(20.5% 0 0);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(92.2% 0 0);--primary-foreground:oklch(20.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(26.9% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(70.4% .191 22.216);--border:oklch(100% 0 0/.1);--input:oklch(100% 0 0/.15);--ring:oklch(55.6% 0 0);--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.5% 0 0);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(26.9% 0 0);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(100% 0 0/.1);--sidebar-ring:oklch(55.6% 0 0)}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))}}`)),document.head.appendChild(i)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as g from "react";
import Ar, { createContext as ba, useContext as _a, useCallback as xt, useState as ae, useRef as st, useEffect as le } from "react";
import { Search as Fi, X as wa, XIcon as ka, SearchIcon as Sa, Globe as Pa } from "lucide-react";
import * as ja from "react-dom";
import Ca from "react-dom";
var Ot = { exports: {} }, ft = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cn;
function Ea() {
  if (Cn) return ft;
  Cn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, i, s) {
    var a = null;
    if (s !== void 0 && (a = "" + s), i.key !== void 0 && (a = "" + i.key), "key" in i) {
      s = {};
      for (var l in i)
        l !== "key" && (s[l] = i[l]);
    } else s = i;
    return i = s.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: i !== void 0 ? i : null,
      props: s
    };
  }
  return ft.Fragment = t, ft.jsx = r, ft.jsxs = r, ft;
}
var ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function Oa() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === E ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case m:
          return "Fragment";
        case I:
          return "Profiler";
        case w:
          return "StrictMode";
        case k:
          return "Suspense";
        case L:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case v:
            return "Portal";
          case N:
            return (f.displayName || "Context") + ".Provider";
          case x:
            return (f._context.displayName || "Context") + ".Consumer";
          case j:
            var P = f.render;
            return f = f.displayName, f || (f = P.displayName || P.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case O:
            return P = f.displayName || null, P !== null ? P : e(f.type) || "Memo";
          case S:
            P = f._payload, f = f._init;
            try {
              return e(f(P));
            } catch {
            }
        }
      return null;
    }
    function t(f) {
      return "" + f;
    }
    function r(f) {
      try {
        t(f);
        var P = !1;
      } catch {
        P = !0;
      }
      if (P) {
        P = console;
        var b = P.error, C = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return b.call(
          P,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), t(f);
      }
    }
    function n(f) {
      if (f === m) return "<>";
      if (typeof f == "object" && f !== null && f.$$typeof === S)
        return "<...>";
      try {
        var P = e(f);
        return P ? "<" + P + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var f = V.A;
      return f === null ? null : f.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function a(f) {
      if (G.call(f, "key")) {
        var P = Object.getOwnPropertyDescriptor(f, "key").get;
        if (P && P.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function l(f, P) {
      function b() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          P
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: b,
        configurable: !0
      });
    }
    function u() {
      var f = e(this.type);
      return Y[f] || (Y[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function c(f, P, b, C, z, A, K, $) {
      return b = A.ref, f = {
        $$typeof: h,
        type: f,
        key: P,
        props: A,
        _owner: z
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(f, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: K
      }), Object.defineProperty(f, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function p(f, P, b, C, z, A, K, $) {
      var F = P.children;
      if (F !== void 0)
        if (C)
          if (R(F)) {
            for (C = 0; C < F.length; C++)
              d(F[C]);
            Object.freeze && Object.freeze(F);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(F);
      if (G.call(P, "key")) {
        F = e(f);
        var Q = Object.keys(P).filter(function(pe) {
          return pe !== "key";
        });
        C = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", _[F + C] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          F,
          Q,
          F
        ), _[F + C] = !0);
      }
      if (F = null, b !== void 0 && (r(b), F = "" + b), a(P) && (r(P.key), F = "" + P.key), "key" in P) {
        b = {};
        for (var ne in P)
          ne !== "key" && (b[ne] = P[ne]);
      } else b = P;
      return F && l(
        b,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), c(
        f,
        F,
        A,
        z,
        i(),
        b,
        K,
        $
      );
    }
    function d(f) {
      typeof f == "object" && f !== null && f.$$typeof === h && f._store && (f._store.validated = 1);
    }
    var y = Ar, h = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), N = Symbol.for("react.context"), j = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), V = y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = Object.prototype.hasOwnProperty, R = Array.isArray, H = console.createTask ? console.createTask : function() {
      return null;
    };
    y = {
      react_stack_bottom_frame: function(f) {
        return f();
      }
    };
    var M, Y = {}, Z = y.react_stack_bottom_frame.bind(
      y,
      s
    )(), D = H(n(s)), _ = {};
    ht.Fragment = m, ht.jsx = function(f, P, b, C, z) {
      var A = 1e4 > V.recentlyCreatedOwnerStacks++;
      return p(
        f,
        P,
        b,
        !1,
        C,
        z,
        A ? Error("react-stack-top-frame") : Z,
        A ? H(n(f)) : D
      );
    }, ht.jsxs = function(f, P, b, C, z) {
      var A = 1e4 > V.recentlyCreatedOwnerStacks++;
      return p(
        f,
        P,
        b,
        !0,
        C,
        z,
        A ? Error("react-stack-top-frame") : Z,
        A ? H(n(f)) : D
      );
    };
  })()), ht;
}
var On;
function Ia() {
  return On || (On = 1, process.env.NODE_ENV === "production" ? Ot.exports = Ea() : Ot.exports = Oa()), Ot.exports;
}
var o = Ia();
function Bi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Bi(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Wi() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Bi(e)) && (n && (n += " "), n += t);
  return n;
}
const In = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Nn = Wi, Na = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Nn(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: i, defaultVariants: s } = t, a = Object.keys(i).map((c) => {
    const p = r == null ? void 0 : r[c], d = s == null ? void 0 : s[c];
    if (p === null) return null;
    const y = In(p) || In(d);
    return i[c][y];
  }), l = r && Object.entries(r).reduce((c, p) => {
    let [d, y] = p;
    return y === void 0 || (c[d] = y), c;
  }, {}), u = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, p) => {
    let { class: d, className: y, ...h } = p;
    return Object.entries(h).every((v) => {
      let [m, w] = v;
      return Array.isArray(w) ? w.includes({
        ...s,
        ...l
      }[m]) : {
        ...s,
        ...l
      }[m] === w;
    }) ? [
      ...c,
      d,
      y
    ] : c;
  }, []);
  return Nn(e, a, u, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Zr = "-", za = (e) => {
  const t = La(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (a) => {
      const l = a.split(Zr);
      return l[0] === "" && l.length !== 1 && l.shift(), Ki(l, t) || Aa(a);
    },
    getConflictingClassGroupIds: (a, l) => {
      const u = r[a] || [];
      return l && n[a] ? [...u, ...n[a]] : u;
    }
  };
}, Ki = (e, t) => {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), i = n ? Ki(e.slice(1), n) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const s = e.join(Zr);
  return (a = t.validators.find(({
    validator: l
  }) => l(s))) == null ? void 0 : a.classGroupId;
}, zn = /^\[(.+)\]$/, Aa = (e) => {
  if (zn.test(e)) {
    const t = zn.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, La = (e) => {
  const {
    theme: t,
    classGroups: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in r)
    Lr(r[i], n, i, t);
  return n;
}, Lr = (e, t, r, n) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? t : An(t, i);
      s.classGroupId = r;
      return;
    }
    if (typeof i == "function") {
      if (Ta(i)) {
        Lr(i(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: r
      });
      return;
    }
    Object.entries(i).forEach(([s, a]) => {
      Lr(a, An(t, s), r, n);
    });
  });
}, An = (e, t) => {
  let r = e;
  return t.split(Zr).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, Ta = (e) => e.isThemeGetter, Ra = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const i = (s, a) => {
    r.set(s, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let a = r.get(s);
      if (a !== void 0)
        return a;
      if ((a = n.get(s)) !== void 0)
        return i(s, a), a;
    },
    set(s, a) {
      r.has(s) ? r.set(s, a) : i(s, a);
    }
  };
}, Tr = "!", Rr = ":", Ma = Rr.length, $a = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: r
  } = e;
  let n = (i) => {
    const s = [];
    let a = 0, l = 0, u = 0, c;
    for (let v = 0; v < i.length; v++) {
      let m = i[v];
      if (a === 0 && l === 0) {
        if (m === Rr) {
          s.push(i.slice(u, v)), u = v + Ma;
          continue;
        }
        if (m === "/") {
          c = v;
          continue;
        }
      }
      m === "[" ? a++ : m === "]" ? a-- : m === "(" ? l++ : m === ")" && l--;
    }
    const p = s.length === 0 ? i : i.substring(u), d = Da(p), y = d !== p, h = c && c > u ? c - u : void 0;
    return {
      modifiers: s,
      hasImportantModifier: y,
      baseClassName: d,
      maybePostfixModifierPosition: h
    };
  };
  if (t) {
    const i = t + Rr, s = n;
    n = (a) => a.startsWith(i) ? s(a.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: a,
      maybePostfixModifierPosition: void 0
    };
  }
  if (r) {
    const i = n;
    n = (s) => r({
      className: s,
      parseClassName: i
    });
  }
  return n;
}, Da = (e) => e.endsWith(Tr) ? e.substring(0, e.length - 1) : e.startsWith(Tr) ? e.substring(1) : e, Fa = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((n) => [n, !0]));
  return (n) => {
    if (n.length <= 1)
      return n;
    const i = [];
    let s = [];
    return n.forEach((a) => {
      a[0] === "[" || t[a] ? (i.push(...s.sort(), a), s = []) : s.push(a);
    }), i.push(...s.sort()), i;
  };
}, Ba = (e) => ({
  cache: Ra(e.cacheSize),
  parseClassName: $a(e),
  sortModifiers: Fa(e),
  ...za(e)
}), Wa = /\s+/, Ka = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: i,
    sortModifiers: s
  } = t, a = [], l = e.trim().split(Wa);
  let u = "";
  for (let c = l.length - 1; c >= 0; c -= 1) {
    const p = l[c], {
      isExternal: d,
      modifiers: y,
      hasImportantModifier: h,
      baseClassName: v,
      maybePostfixModifierPosition: m
    } = r(p);
    if (d) {
      u = p + (u.length > 0 ? " " + u : u);
      continue;
    }
    let w = !!m, I = n(w ? v.substring(0, m) : v);
    if (!I) {
      if (!w) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (I = n(v), !I) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      w = !1;
    }
    const x = s(y).join(":"), N = h ? x + Tr : x, j = N + I;
    if (a.includes(j))
      continue;
    a.push(j);
    const k = i(I, w);
    for (let L = 0; L < k.length; ++L) {
      const O = k[L];
      a.push(N + O);
    }
    u = p + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Ha() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Hi(t)) && (n && (n += " "), n += r);
  return n;
}
const Hi = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Hi(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Va(e, ...t) {
  let r, n, i, s = a;
  function a(u) {
    const c = t.reduce((p, d) => d(p), e());
    return r = Ba(c), n = r.cache.get, i = r.cache.set, s = l, l(u);
  }
  function l(u) {
    const c = n(u);
    if (c)
      return c;
    const p = Ka(u, r);
    return i(u, p), p;
  }
  return function() {
    return s(Ha.apply(null, arguments));
  };
}
const ee = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Vi = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Gi = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Ga = /^\d+\/\d+$/, Ua = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qa = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ya = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Ja = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Za = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ve = (e) => Ga.test(e), X = (e) => !!e && !Number.isNaN(Number(e)), _e = (e) => !!e && Number.isInteger(Number(e)), mr = (e) => e.endsWith("%") && X(e.slice(0, -1)), me = (e) => Ua.test(e), Xa = () => !0, Qa = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qa.test(e) && !Ya.test(e)
), Ui = () => !1, eo = (e) => Ja.test(e), to = (e) => Za.test(e), ro = (e) => !B(e) && !W(e), no = (e) => ct(e, Ji, Ui), B = (e) => Vi.test(e), Oe = (e) => ct(e, Zi, Qa), vr = (e) => ct(e, lo, X), Ln = (e) => ct(e, qi, Ui), io = (e) => ct(e, Yi, to), It = (e) => ct(e, Xi, eo), W = (e) => Gi.test(e), gt = (e) => ut(e, Zi), so = (e) => ut(e, co), Tn = (e) => ut(e, qi), ao = (e) => ut(e, Ji), oo = (e) => ut(e, Yi), Nt = (e) => ut(e, Xi, !0), ct = (e, t, r) => {
  const n = Vi.exec(e);
  return n ? n[1] ? t(n[1]) : r(n[2]) : !1;
}, ut = (e, t, r = !1) => {
  const n = Gi.exec(e);
  return n ? n[1] ? t(n[1]) : r : !1;
}, qi = (e) => e === "position" || e === "percentage", Yi = (e) => e === "image" || e === "url", Ji = (e) => e === "length" || e === "size" || e === "bg-size", Zi = (e) => e === "length", lo = (e) => e === "number", co = (e) => e === "family-name", Xi = (e) => e === "shadow", uo = () => {
  const e = ee("color"), t = ee("font"), r = ee("text"), n = ee("font-weight"), i = ee("tracking"), s = ee("leading"), a = ee("breakpoint"), l = ee("container"), u = ee("spacing"), c = ee("radius"), p = ee("shadow"), d = ee("inset-shadow"), y = ee("text-shadow"), h = ee("drop-shadow"), v = ee("blur"), m = ee("perspective"), w = ee("aspect"), I = ee("ease"), x = ee("animate"), N = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => [
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
  ], k = () => [...j(), W, B], L = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", "contain", "none"], S = () => [W, B, u], T = () => [Ve, "full", "auto", ...S()], E = () => [_e, "none", "subgrid", W, B], V = () => ["auto", {
    span: ["full", _e, W, B]
  }, _e, W, B], G = () => [_e, "auto", W, B], R = () => ["auto", "min", "max", "fr", W, B], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], M = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], Y = () => ["auto", ...S()], Z = () => [Ve, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], D = () => [e, W, B], _ = () => [...j(), Tn, Ln, {
    position: [W, B]
  }], f = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], P = () => ["auto", "cover", "contain", ao, no, {
    size: [W, B]
  }], b = () => [mr, gt, Oe], C = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    W,
    B
  ], z = () => ["", X, gt, Oe], A = () => ["solid", "dashed", "dotted", "double"], K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], $ = () => [X, mr, Tn, Ln], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    v,
    W,
    B
  ], Q = () => ["none", X, W, B], ne = () => ["none", X, W, B], pe = () => [X, W, B], Ee = () => [Ve, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [me],
      breakpoint: [me],
      color: [Xa],
      container: [me],
      "drop-shadow": [me],
      ease: ["in", "out", "in-out"],
      font: [ro],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [me],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [me],
      shadow: [me],
      spacing: ["px", X],
      text: [me],
      "text-shadow": [me],
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
        aspect: ["auto", "square", Ve, B, W, w]
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
        columns: [X, B, W, l]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": N()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": N()
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
        object: k()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: L()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": L()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": L()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: O()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": O()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": O()
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
        inset: T()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": T()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": T()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: T()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: T()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: T()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: T()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: T()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: T()
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
        z: [_e, "auto", W, B]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ve, "full", "auto", l, ...S()]
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
        flex: [X, Ve, "auto", "initial", "none", B]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", X, W, B]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", X, W, B]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [_e, "first", "last", "none", W, B]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": E()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: V()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": G()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": G()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": E()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: V()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": G()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": G()
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
        "auto-cols": R()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": R()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: S()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": S()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": S()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...M(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...M()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...M(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...M(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...M(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...M()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: S()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: S()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: S()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: S()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: S()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: S()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: S()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: S()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: S()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: Y()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: Y()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: Y()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: Y()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: Y()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: Y()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: Y()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: Y()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: Y()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": S()
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
        "space-y": S()
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
        size: Z()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [l, "screen", ...Z()]
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
          ...Z()
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
            screen: [a]
          },
          ...Z()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Z()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Z()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Z()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", r, gt, Oe]
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
        font: [n, W, vr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", mr, B]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [so, B, t]
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
        tracking: [i, W, B]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [X, "none", W, vr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          s,
          ...S()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", W, B]
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
        list: ["disc", "decimal", "none", W, B]
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
        placeholder: D()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: D()
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
        decoration: [...A(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [X, "from-font", "auto", W, Oe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: D()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [X, "auto", W, B]
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
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", W, B]
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
        content: ["none", W, B]
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
        bg: _()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: f()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: P()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, _e, W, B],
          radial: ["", W, B],
          conic: [_e, W, B]
        }, oo, io]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: D()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: b()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: b()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: b()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: D()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: D()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: D()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: C()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": C()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": C()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": C()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": C()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": C()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": C()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": C()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": C()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": C()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": C()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": C()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": C()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": C()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": C()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: z()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": z()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": z()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": z()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": z()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": z()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": z()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": z()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": z()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": z()
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
        "divide-y": z()
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
        border: [...A(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...A(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: D()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": D()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": D()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": D()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": D()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": D()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": D()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": D()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": D()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: D()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...A(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [X, W, B]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", X, gt, Oe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: D()
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
          p,
          Nt,
          It
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: D()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, Nt, It]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": D()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: z()
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
        ring: D()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [X, Oe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": D()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": z()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": D()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", y, Nt, It]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": D()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [X, W, B]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...K(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": K()
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
        "mask-linear": [X]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": $()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": $()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": D()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": D()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": $()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": $()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": D()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": D()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": $()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": $()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": D()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": D()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": $()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": $()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": D()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": D()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": $()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": $()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": D()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": D()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": $()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": $()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": D()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": D()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": $()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": $()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": D()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": D()
      }],
      "mask-image-radial": [{
        "mask-radial": [W, B]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": $()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": $()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": D()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": D()
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
        "mask-radial-at": j()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [X]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": $()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": $()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": D()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": D()
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
        mask: _()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: f()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: P()
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
        mask: ["none", W, B]
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
          W,
          B
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: F()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [X, W, B]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [X, W, B]
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
          h,
          Nt,
          It
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": D()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", X, W, B]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [X, W, B]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", X, W, B]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [X, W, B]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", X, W, B]
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
          W,
          B
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": F()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [X, W, B]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [X, W, B]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", X, W, B]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [X, W, B]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", X, W, B]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [X, W, B]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [X, W, B]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", X, W, B]
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
        "border-spacing": S()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": S()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", W, B]
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
        duration: [X, "initial", W, B]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", I, W, B]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [X, W, B]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, W, B]
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
        perspective: [m, W, B]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Q()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Q()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Q()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Q()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ne()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ne()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ne()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ne()
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
        skew: pe()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": pe()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": pe()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [W, B, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: k()
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
        translate: Ee()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ee()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ee()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ee()
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
        accent: D()
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
        caret: D()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", W, B]
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
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
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
        "will-change": ["auto", "scroll", "contents", "transform", W, B]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...D()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [X, gt, Oe, vr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...D()]
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
}, po = /* @__PURE__ */ Va(uo);
function re(...e) {
  return po(Wi(e));
}
function Yt(e, t) {
  if (e) {
    const r = e.split(":");
    if (r.length >= 3 && r[0] && r[2] !== "443")
      return e;
  }
  return t;
}
const fo = Na(
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
), Ie = g.forwardRef(
  ({ className: e, variant: t, size: r, ...n }, i) => /* @__PURE__ */ o.jsx("button", { className: re(fo({ variant: t, size: r, className: e })), ref: i, ...n })
);
Ie.displayName = "Button";
const te = ({ href: e, children: t, className: r = "", target: n = "_self", rel: i = "noopener noreferrer", onClick: s }) => {
  const a = (l) => {
    n !== "_blank" && (l.preventDefault(), window.location.href = e), s && s(l);
  };
  return /* @__PURE__ */ o.jsx(
    "a",
    {
      href: e,
      className: r,
      target: n,
      rel: i,
      onClick: a,
      "aria-label": typeof t == "string" ? t : void 0,
      children: t
    }
  );
}, ho = (e, t, r, n) => {
  var s, a, l, u;
  const i = [r, {
    code: t,
    ...n || {}
  }];
  if ((a = (s = e == null ? void 0 : e.services) == null ? void 0 : s.logger) != null && a.forward)
    return e.services.logger.forward(i, "warn", "react-i18next::", !0);
  Ae(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), (u = (l = e == null ? void 0 : e.services) == null ? void 0 : l.logger) != null && u.warn ? e.services.logger.warn(...i) : console != null && console.warn && console.warn(...i);
}, Rn = {}, Mr = (e, t, r, n) => {
  Ae(r) && Rn[r] || (Ae(r) && (Rn[r] = /* @__PURE__ */ new Date()), ho(e, t, r, n));
}, Qi = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const r = () => {
      setTimeout(() => {
        e.off("initialized", r);
      }, 0), t();
    };
    e.on("initialized", r);
  }
}, $r = (e, t, r) => {
  e.loadNamespaces(t, Qi(e, r));
}, Mn = (e, t, r, n) => {
  if (Ae(r) && (r = [r]), e.options.preload && e.options.preload.indexOf(t) > -1) return $r(e, r, n);
  r.forEach((i) => {
    e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
  }), e.loadLanguages(t, Qi(e, n));
}, go = (e, t, r = {}) => !t.languages || !t.languages.length ? (Mr(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: t.languages
}), !0) : t.hasLoadedNamespace(e, {
  lng: r.lng,
  precheck: (n, i) => {
    if (r.bindI18n && r.bindI18n.indexOf("languageChanging") > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !i(n.isLanguageChangingTo, e)) return !1;
  }
}), Ae = (e) => typeof e == "string", mo = (e) => typeof e == "object" && e !== null, vo = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, yo = {
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
}, xo = (e) => yo[e], bo = (e) => e.replace(vo, xo);
let Dr = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: bo
};
const _o = (e = {}) => {
  Dr = {
    ...Dr,
    ...e
  };
}, wo = () => Dr;
let es;
const ko = (e) => {
  es = e;
}, So = () => es, Po = {
  type: "3rdParty",
  init(e) {
    _o(e.options.react), ko(e);
  }
}, jo = ba();
class Co {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Eo = (e, t) => {
  const r = st();
  return le(() => {
    r.current = e;
  }, [e, t]), r.current;
}, ts = (e, t, r, n) => e.getFixedT(t, r, n), Oo = (e, t, r, n) => xt(ts(e, t, r, n), [e, t, r, n]), nr = (e, t = {}) => {
  var j, k, L, O;
  const {
    i18n: r
  } = t, {
    i18n: n,
    defaultNS: i
  } = _a(jo) || {}, s = r || n || So();
  if (s && !s.reportNamespaces && (s.reportNamespaces = new Co()), !s) {
    Mr(s, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const S = (E, V) => Ae(V) ? V : mo(V) && Ae(V.defaultValue) ? V.defaultValue : Array.isArray(E) ? E[E.length - 1] : E, T = [S, {}, !1];
    return T.t = S, T.i18n = {}, T.ready = !1, T;
  }
  (j = s.options.react) != null && j.wait && Mr(s, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const a = {
    ...wo(),
    ...s.options.react,
    ...t
  }, {
    useSuspense: l,
    keyPrefix: u
  } = a;
  let c = i || ((k = s.options) == null ? void 0 : k.defaultNS);
  c = Ae(c) ? [c] : c || ["translation"], (O = (L = s.reportNamespaces).addUsedNamespaces) == null || O.call(L, c);
  const p = (s.isInitialized || s.initializedStoreOnce) && c.every((S) => go(S, s, a)), d = Oo(s, t.lng || null, a.nsMode === "fallback" ? c : c[0], u), y = () => d, h = () => ts(s, t.lng || null, a.nsMode === "fallback" ? c : c[0], u), [v, m] = ae(y);
  let w = c.join();
  t.lng && (w = `${t.lng}${w}`);
  const I = Eo(w), x = st(!0);
  le(() => {
    const {
      bindI18n: S,
      bindI18nStore: T
    } = a;
    x.current = !0, !p && !l && (t.lng ? Mn(s, t.lng, c, () => {
      x.current && m(h);
    }) : $r(s, c, () => {
      x.current && m(h);
    })), p && I && I !== w && x.current && m(h);
    const E = () => {
      x.current && m(h);
    };
    return S && (s == null || s.on(S, E)), T && (s == null || s.store.on(T, E)), () => {
      x.current = !1, s && S && (S == null || S.split(" ").forEach((V) => s.off(V, E))), T && s && T.split(" ").forEach((V) => s.store.off(V, E));
    };
  }, [s, w]), le(() => {
    x.current && p && m(y);
  }, [s, u, p]);
  const N = [v, s, p];
  if (N.t = v, N.i18n = s, N.ready = p, p || !p && !l) return N;
  throw new Promise((S) => {
    t.lng ? Mn(s, t.lng, c, () => S()) : $r(s, c, () => S());
  });
}, J = (e) => typeof e == "string", mt = () => {
  let e, t;
  const r = new Promise((n, i) => {
    e = n, t = i;
  });
  return r.resolve = e, r.reject = t, r;
}, $n = (e) => e == null ? "" : "" + e, Io = (e, t, r) => {
  e.forEach((n) => {
    t[n] && (r[n] = t[n]);
  });
}, No = /###/g, Dn = (e) => e && e.indexOf("###") > -1 ? e.replace(No, ".") : e, Fn = (e) => !e || J(e), bt = (e, t, r) => {
  const n = J(t) ? t.split(".") : t;
  let i = 0;
  for (; i < n.length - 1; ) {
    if (Fn(e)) return {};
    const s = Dn(n[i]);
    !e[s] && r && (e[s] = new r()), Object.prototype.hasOwnProperty.call(e, s) ? e = e[s] : e = {}, ++i;
  }
  return Fn(e) ? {} : {
    obj: e,
    k: Dn(n[i])
  };
}, Bn = (e, t, r) => {
  const {
    obj: n,
    k: i
  } = bt(e, t, Object);
  if (n !== void 0 || t.length === 1) {
    n[i] = r;
    return;
  }
  let s = t[t.length - 1], a = t.slice(0, t.length - 1), l = bt(e, a, Object);
  for (; l.obj === void 0 && a.length; )
    s = `${a[a.length - 1]}.${s}`, a = a.slice(0, a.length - 1), l = bt(e, a, Object), l != null && l.obj && typeof l.obj[`${l.k}.${s}`] < "u" && (l.obj = void 0);
  l.obj[`${l.k}.${s}`] = r;
}, zo = (e, t, r, n) => {
  const {
    obj: i,
    k: s
  } = bt(e, t, Object);
  i[s] = i[s] || [], i[s].push(r);
}, Jt = (e, t) => {
  const {
    obj: r,
    k: n
  } = bt(e, t);
  if (r && Object.prototype.hasOwnProperty.call(r, n))
    return r[n];
}, Ao = (e, t, r) => {
  const n = Jt(e, r);
  return n !== void 0 ? n : Jt(t, r);
}, rs = (e, t, r) => {
  for (const n in t)
    n !== "__proto__" && n !== "constructor" && (n in e ? J(e[n]) || e[n] instanceof String || J(t[n]) || t[n] instanceof String ? r && (e[n] = t[n]) : rs(e[n], t[n], r) : e[n] = t[n]);
  return e;
}, Ge = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Lo = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const To = (e) => J(e) ? e.replace(/[&<>"'\/]/g, (t) => Lo[t]) : e;
class Ro {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const r = this.regExpMap.get(t);
    if (r !== void 0)
      return r;
    const n = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, n), this.regExpQueue.push(t), n;
  }
}
const Mo = [" ", ",", "?", "!", ";"], $o = new Ro(20), Do = (e, t, r) => {
  t = t || "", r = r || "";
  const n = Mo.filter((a) => t.indexOf(a) < 0 && r.indexOf(a) < 0);
  if (n.length === 0) return !0;
  const i = $o.getRegExp(`(${n.map((a) => a === "?" ? "\\?" : a).join("|")})`);
  let s = !i.test(e);
  if (!s) {
    const a = e.indexOf(r);
    a > 0 && !i.test(e.substring(0, a)) && (s = !0);
  }
  return s;
}, Fr = (e, t, r = ".") => {
  if (!e) return;
  if (e[t])
    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
  const n = t.split(r);
  let i = e;
  for (let s = 0; s < n.length; ) {
    if (!i || typeof i != "object")
      return;
    let a, l = "";
    for (let u = s; u < n.length; ++u)
      if (u !== s && (l += r), l += n[u], a = i[l], a !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof a) > -1 && u < n.length - 1)
          continue;
        s += u - s + 1;
        break;
      }
    i = a;
  }
  return i;
}, wt = (e) => e == null ? void 0 : e.replace("_", "-"), Fo = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, t) {
    var r, n;
    (n = (r = console == null ? void 0 : console[e]) == null ? void 0 : r.apply) == null || n.call(r, console, t);
  }
};
class Zt {
  constructor(t, r = {}) {
    this.init(t, r);
  }
  init(t, r = {}) {
    this.prefix = r.prefix || "i18next:", this.logger = t || Fo, this.options = r, this.debug = r.debug;
  }
  log(...t) {
    return this.forward(t, "log", "", !0);
  }
  warn(...t) {
    return this.forward(t, "warn", "", !0);
  }
  error(...t) {
    return this.forward(t, "error", "");
  }
  deprecate(...t) {
    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, r, n, i) {
    return i && !this.debug ? null : (J(t[0]) && (t[0] = `${n}${this.prefix} ${t[0]}`), this.logger[r](t));
  }
  create(t) {
    return new Zt(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new Zt(this.logger, t);
  }
}
var he = new Zt();
class ir {
  constructor() {
    this.observers = {};
  }
  on(t, r) {
    return t.split(" ").forEach((n) => {
      this.observers[n] || (this.observers[n] = /* @__PURE__ */ new Map());
      const i = this.observers[n].get(r) || 0;
      this.observers[n].set(r, i + 1);
    }), this;
  }
  off(t, r) {
    if (this.observers[t]) {
      if (!r) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(r);
    }
  }
  emit(t, ...r) {
    this.observers[t] && Array.from(this.observers[t].entries()).forEach(([i, s]) => {
      for (let a = 0; a < s; a++)
        i(...r);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, s]) => {
      for (let a = 0; a < s; a++)
        i.apply(i, [t, ...r]);
    });
  }
}
class Wn extends ir {
  constructor(t, r = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = t || {}, this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const r = this.options.ns.indexOf(t);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(t, r, n, i = {}) {
    var c, p;
    const s = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, a = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let l;
    t.indexOf(".") > -1 ? l = t.split(".") : (l = [t, r], n && (Array.isArray(n) ? l.push(...n) : J(n) && s ? l.push(...n.split(s)) : l.push(n)));
    const u = Jt(this.data, l);
    return !u && !r && !n && t.indexOf(".") > -1 && (t = l[0], r = l[1], n = l.slice(2).join(".")), u || !a || !J(n) ? u : Fr((p = (c = this.data) == null ? void 0 : c[t]) == null ? void 0 : p[r], n, s);
  }
  addResource(t, r, n, i, s = {
    silent: !1
  }) {
    const a = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator;
    let l = [t, r];
    n && (l = l.concat(a ? n.split(a) : n)), t.indexOf(".") > -1 && (l = t.split("."), i = r, r = l[1]), this.addNamespaces(r), Bn(this.data, l, i), s.silent || this.emit("added", t, r, n, i);
  }
  addResources(t, r, n, i = {
    silent: !1
  }) {
    for (const s in n)
      (J(n[s]) || Array.isArray(n[s])) && this.addResource(t, r, s, n[s], {
        silent: !0
      });
    i.silent || this.emit("added", t, r, n);
  }
  addResourceBundle(t, r, n, i, s, a = {
    silent: !1,
    skipCopy: !1
  }) {
    let l = [t, r];
    t.indexOf(".") > -1 && (l = t.split("."), i = n, n = r, r = l[1]), this.addNamespaces(r);
    let u = Jt(this.data, l) || {};
    a.skipCopy || (n = JSON.parse(JSON.stringify(n))), i ? rs(u, n, s) : u = {
      ...u,
      ...n
    }, Bn(this.data, l, u), a.silent || this.emit("added", t, r, n);
  }
  removeResourceBundle(t, r) {
    this.hasResourceBundle(t, r) && delete this.data[t][r], this.removeNamespaces(r), this.emit("removed", t, r);
  }
  hasResourceBundle(t, r) {
    return this.getResource(t, r) !== void 0;
  }
  getResourceBundle(t, r) {
    return r || (r = this.options.defaultNS), this.getResource(t, r);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const r = this.getDataByLanguage(t);
    return !!(r && Object.keys(r) || []).find((i) => r[i] && Object.keys(r[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var ns = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, r, n, i) {
    return e.forEach((s) => {
      var a;
      t = ((a = this.processors[s]) == null ? void 0 : a.process(t, r, n, i)) ?? t;
    }), t;
  }
};
const is = Symbol("i18next/PATH_KEY");
function Bo() {
  const e = [], t = /* @__PURE__ */ Object.create(null);
  let r;
  return t.get = (n, i) => {
    var s;
    return (s = r == null ? void 0 : r.revoke) == null || s.call(r), i === is ? e : (e.push(i), r = Proxy.revocable(n, t), r.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), t).proxy;
}
function Br(e, t) {
  const {
    [is]: r
  } = e(Bo());
  return r.join((t == null ? void 0 : t.keySeparator) ?? ".");
}
const Kn = {}, Hn = (e) => !J(e) && typeof e != "boolean" && typeof e != "number";
class Xt extends ir {
  constructor(t, r = {}) {
    super(), Io(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = he.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, r = {
    interpolation: {}
  }) {
    const n = {
      ...r
    };
    if (t == null) return !1;
    const i = this.resolve(t, n);
    return (i == null ? void 0 : i.res) !== void 0;
  }
  extractFromKey(t, r) {
    let n = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    n === void 0 && (n = ":");
    const i = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let s = r.ns || this.options.defaultNS || [];
    const a = n && t.indexOf(n) > -1, l = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !Do(t, n, i);
    if (a && !l) {
      const u = t.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: t,
          namespaces: J(s) ? [s] : s
        };
      const c = t.split(n);
      (n !== i || n === i && this.options.ns.indexOf(c[0]) > -1) && (s = c.shift()), t = c.join(i);
    }
    return {
      key: t,
      namespaces: J(s) ? [s] : s
    };
  }
  translate(t, r, n) {
    let i = typeof r == "object" ? {
      ...r
    } : r;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = {
      ...i
    }), i || (i = {}), t == null) return "";
    typeof t == "function" && (t = Br(t, {
      ...this.options,
      ...i
    })), Array.isArray(t) || (t = [String(t)]);
    const s = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: l,
      namespaces: u
    } = this.extractFromKey(t[t.length - 1], i), c = u[u.length - 1];
    let p = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    p === void 0 && (p = ":");
    const d = i.lng || this.language, y = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((d == null ? void 0 : d.toLowerCase()) === "cimode")
      return y ? s ? {
        res: `${c}${p}${l}`,
        usedKey: l,
        exactUsedKey: l,
        usedLng: d,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(i)
      } : `${c}${p}${l}` : s ? {
        res: l,
        usedKey: l,
        exactUsedKey: l,
        usedLng: d,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(i)
      } : l;
    const h = this.resolve(t, i);
    let v = h == null ? void 0 : h.res;
    const m = (h == null ? void 0 : h.usedKey) || l, w = (h == null ? void 0 : h.exactUsedKey) || l, I = ["[object Number]", "[object Function]", "[object RegExp]"], x = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, N = !this.i18nFormat || this.i18nFormat.handleAsObject, j = i.count !== void 0 && !J(i.count), k = Xt.hasDefaultValue(i), L = j ? this.pluralResolver.getSuffix(d, i.count, i) : "", O = i.ordinal && j ? this.pluralResolver.getSuffix(d, i.count, {
      ordinal: !1
    }) : "", S = j && !i.ordinal && i.count === 0, T = S && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${L}`] || i[`defaultValue${O}`] || i.defaultValue;
    let E = v;
    N && !v && k && (E = T);
    const V = Hn(E), G = Object.prototype.toString.apply(E);
    if (N && E && V && I.indexOf(G) < 0 && !(J(x) && Array.isArray(E))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const R = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, E, {
          ...i,
          ns: u
        }) : `key '${l} (${this.language})' returned an object instead of string.`;
        return s ? (h.res = R, h.usedParams = this.getUsedParamsDetails(i), h) : R;
      }
      if (a) {
        const R = Array.isArray(E), H = R ? [] : {}, M = R ? w : m;
        for (const Y in E)
          if (Object.prototype.hasOwnProperty.call(E, Y)) {
            const Z = `${M}${a}${Y}`;
            k && !v ? H[Y] = this.translate(Z, {
              ...i,
              defaultValue: Hn(T) ? T[Y] : void 0,
              joinArrays: !1,
              ns: u
            }) : H[Y] = this.translate(Z, {
              ...i,
              joinArrays: !1,
              ns: u
            }), H[Y] === Z && (H[Y] = E[Y]);
          }
        v = H;
      }
    } else if (N && J(x) && Array.isArray(v))
      v = v.join(x), v && (v = this.extendTranslation(v, t, i, n));
    else {
      let R = !1, H = !1;
      !this.isValidLookup(v) && k && (R = !0, v = T), this.isValidLookup(v) || (H = !0, v = l);
      const Y = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && H ? void 0 : v, Z = k && T !== v && this.options.updateMissing;
      if (H || R || Z) {
        if (this.logger.log(Z ? "updateKey" : "missingKey", d, c, l, Z ? T : v), a) {
          const P = this.resolve(l, {
            ...i,
            keySeparator: !1
          });
          P && P.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let D = [];
        const _ = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && _ && _[0])
          for (let P = 0; P < _.length; P++)
            D.push(_[P]);
        else this.options.saveMissingTo === "all" ? D = this.languageUtils.toResolveHierarchy(i.lng || this.language) : D.push(i.lng || this.language);
        const f = (P, b, C) => {
          var A;
          const z = k && C !== v ? C : Y;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(P, c, b, z, Z, i) : (A = this.backendConnector) != null && A.saveMissing && this.backendConnector.saveMissing(P, c, b, z, Z, i), this.emit("missingKey", P, c, b, v);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && j ? D.forEach((P) => {
          const b = this.pluralResolver.getSuffixes(P, i);
          S && i[`defaultValue${this.options.pluralSeparator}zero`] && b.indexOf(`${this.options.pluralSeparator}zero`) < 0 && b.push(`${this.options.pluralSeparator}zero`), b.forEach((C) => {
            f([P], l + C, i[`defaultValue${C}`] || T);
          });
        }) : f(D, l, T));
      }
      v = this.extendTranslation(v, t, i, h, n), H && v === l && this.options.appendNamespaceToMissingKey && (v = `${c}${p}${l}`), (H || R) && this.options.parseMissingKeyHandler && (v = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}${p}${l}` : l, R ? v : void 0, i));
    }
    return s ? (h.res = v, h.usedParams = this.getUsedParamsDetails(i), h) : v;
  }
  extendTranslation(t, r, n, i, s) {
    var u, c;
    if ((u = this.i18nFormat) != null && u.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...n
      }, n.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!n.skipInterpolation) {
      n.interpolation && this.interpolator.init({
        ...n,
        interpolation: {
          ...this.options.interpolation,
          ...n.interpolation
        }
      });
      const p = J(t) && (((c = n == null ? void 0 : n.interpolation) == null ? void 0 : c.skipOnVariables) !== void 0 ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (p) {
        const h = t.match(this.interpolator.nestingRegexp);
        d = h && h.length;
      }
      let y = n.replace && !J(n.replace) ? n.replace : n;
      if (this.options.interpolation.defaultVariables && (y = {
        ...this.options.interpolation.defaultVariables,
        ...y
      }), t = this.interpolator.interpolate(t, y, n.lng || this.language || i.usedLng, n), p) {
        const h = t.match(this.interpolator.nestingRegexp), v = h && h.length;
        d < v && (n.nest = !1);
      }
      !n.lng && i && i.res && (n.lng = this.language || i.usedLng), n.nest !== !1 && (t = this.interpolator.nest(t, (...h) => (s == null ? void 0 : s[0]) === h[0] && !n.context ? (this.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${r[0]}`), null) : this.translate(...h, r), n)), n.interpolation && this.interpolator.reset();
    }
    const a = n.postProcess || this.options.postProcess, l = J(a) ? [a] : a;
    return t != null && (l != null && l.length) && n.applyPostProcessor !== !1 && (t = ns.handle(l, t, r, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(n)
      },
      ...n
    } : n, this)), t;
  }
  resolve(t, r = {}) {
    let n, i, s, a, l;
    return J(t) && (t = [t]), t.forEach((u) => {
      if (this.isValidLookup(n)) return;
      const c = this.extractFromKey(u, r), p = c.key;
      i = p;
      let d = c.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const y = r.count !== void 0 && !J(r.count), h = y && !r.ordinal && r.count === 0, v = r.context !== void 0 && (J(r.context) || typeof r.context == "number") && r.context !== "", m = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
      d.forEach((w) => {
        var I, x;
        this.isValidLookup(n) || (l = w, !Kn[`${m[0]}-${w}`] && ((I = this.utils) != null && I.hasLoadedNamespace) && !((x = this.utils) != null && x.hasLoadedNamespace(l)) && (Kn[`${m[0]}-${w}`] = !0, this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${l}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((N) => {
          var L;
          if (this.isValidLookup(n)) return;
          a = N;
          const j = [p];
          if ((L = this.i18nFormat) != null && L.addLookupKeys)
            this.i18nFormat.addLookupKeys(j, p, N, w, r);
          else {
            let O;
            y && (O = this.pluralResolver.getSuffix(N, r.count, r));
            const S = `${this.options.pluralSeparator}zero`, T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (y && (r.ordinal && O.indexOf(T) === 0 && j.push(p + O.replace(T, this.options.pluralSeparator)), j.push(p + O), h && j.push(p + S)), v) {
              const E = `${p}${this.options.contextSeparator || "_"}${r.context}`;
              j.push(E), y && (r.ordinal && O.indexOf(T) === 0 && j.push(E + O.replace(T, this.options.pluralSeparator)), j.push(E + O), h && j.push(E + S));
            }
          }
          let k;
          for (; k = j.pop(); )
            this.isValidLookup(n) || (s = k, n = this.getResource(N, w, k, r));
        }));
      });
    }), {
      res: n,
      usedKey: i,
      exactUsedKey: s,
      usedLng: a,
      usedNS: l
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, r, n, i = {}) {
    var s;
    return (s = this.i18nFormat) != null && s.getResource ? this.i18nFormat.getResource(t, r, n, i) : this.resourceStore.getResource(t, r, n, i);
  }
  getUsedParamsDetails(t = {}) {
    const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], n = t.replace && !J(t.replace);
    let i = n ? t.replace : t;
    if (n && typeof t.count < "u" && (i.count = t.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !n) {
      i = {
        ...i
      };
      for (const s of r)
        delete i[s];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const r = "defaultValue";
    for (const n in t)
      if (Object.prototype.hasOwnProperty.call(t, n) && r === n.substring(0, r.length) && t[n] !== void 0)
        return !0;
    return !1;
  }
}
class Vn {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = he.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = wt(t), !t || t.indexOf("-") < 0) return null;
    const r = t.split("-");
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = wt(t), !t || t.indexOf("-") < 0) return t;
    const r = t.split("-");
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(t) {
    if (J(t) && t.indexOf("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(t)[0];
      } catch {
      }
      return r && this.options.lowerCaseLng && (r = r.toLowerCase()), r || (this.options.lowerCaseLng ? t.toLowerCase() : t);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let r;
    return t.forEach((n) => {
      if (r) return;
      const i = this.formatLanguageCode(n);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (r = i);
    }), !r && this.options.supportedLngs && t.forEach((n) => {
      if (r) return;
      const i = this.getScriptPartFromCode(n);
      if (this.isSupportedCode(i)) return r = i;
      const s = this.getLanguagePartFromCode(n);
      if (this.isSupportedCode(s)) return r = s;
      r = this.options.supportedLngs.find((a) => {
        if (a === s) return a;
        if (!(a.indexOf("-") < 0 && s.indexOf("-") < 0) && (a.indexOf("-") > 0 && s.indexOf("-") < 0 && a.substring(0, a.indexOf("-")) === s || a.indexOf(s) === 0 && s.length > 1))
          return a;
      });
    }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r;
  }
  getFallbackCodes(t, r) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(r)), J(t) && (t = [t]), Array.isArray(t)) return t;
    if (!r) return t.default || [];
    let n = t[r];
    return n || (n = t[this.getScriptPartFromCode(r)]), n || (n = t[this.formatLanguageCode(r)]), n || (n = t[this.getLanguagePartFromCode(r)]), n || (n = t.default), n || [];
  }
  toResolveHierarchy(t, r) {
    const n = this.getFallbackCodes((r === !1 ? [] : r) || this.options.fallbackLng || [], t), i = [], s = (a) => {
      a && (this.isSupportedCode(a) ? i.push(a) : this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`));
    };
    return J(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && s(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && s(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && s(this.getLanguagePartFromCode(t))) : J(t) && s(this.formatLanguageCode(t)), n.forEach((a) => {
      i.indexOf(a) < 0 && s(this.formatLanguageCode(a));
    }), i;
  }
}
const Gn = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Un = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Wo {
  constructor(t, r = {}) {
    this.languageUtils = t, this.options = r, this.logger = he.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(t, r) {
    this.rules[t] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, r = {}) {
    const n = wt(t === "dev" ? "en" : t), i = r.ordinal ? "ordinal" : "cardinal", s = JSON.stringify({
      cleanedCode: n,
      type: i
    });
    if (s in this.pluralRulesCache)
      return this.pluralRulesCache[s];
    let a;
    try {
      a = new Intl.PluralRules(n, {
        type: i
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Un;
      if (!t.match(/-|_/)) return Un;
      const u = this.languageUtils.getLanguagePartFromCode(t);
      a = this.getRule(u, r);
    }
    return this.pluralRulesCache[s] = a, a;
  }
  needsPlural(t, r = {}) {
    let n = this.getRule(t, r);
    return n || (n = this.getRule("dev", r)), (n == null ? void 0 : n.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(t, r, n = {}) {
    return this.getSuffixes(t, n).map((i) => `${r}${i}`);
  }
  getSuffixes(t, r = {}) {
    let n = this.getRule(t, r);
    return n || (n = this.getRule("dev", r)), n ? n.resolvedOptions().pluralCategories.sort((i, s) => Gn[i] - Gn[s]).map((i) => `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(t, r, n = {}) {
    const i = this.getRule(t, n);
    return i ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(r)}` : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix("dev", r, n));
  }
}
const qn = (e, t, r, n = ".", i = !0) => {
  let s = Ao(e, t, r);
  return !s && i && J(r) && (s = Fr(e, r, n), s === void 0 && (s = Fr(t, r, n))), s;
}, yr = (e) => e.replace(/\$/g, "$$$$");
class Ko {
  constructor(t = {}) {
    var r;
    this.logger = he.create("interpolator"), this.options = t, this.format = ((r = t == null ? void 0 : t.interpolation) == null ? void 0 : r.format) || ((n) => n), this.init(t);
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: r,
      escapeValue: n,
      useRawValueToEscape: i,
      prefix: s,
      prefixEscaped: a,
      suffix: l,
      suffixEscaped: u,
      formatSeparator: c,
      unescapeSuffix: p,
      unescapePrefix: d,
      nestingPrefix: y,
      nestingPrefixEscaped: h,
      nestingSuffix: v,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: w,
      maxReplaces: I,
      alwaysFormat: x
    } = t.interpolation;
    this.escape = r !== void 0 ? r : To, this.escapeValue = n !== void 0 ? n : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = s ? Ge(s) : a || "{{", this.suffix = l ? Ge(l) : u || "}}", this.formatSeparator = c || ",", this.unescapePrefix = p ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : p || "", this.nestingPrefix = y ? Ge(y) : h || Ge("$t("), this.nestingSuffix = v ? Ge(v) : m || Ge(")"), this.nestingOptionsSeparator = w || ",", this.maxReplaces = I || 1e3, this.alwaysFormat = x !== void 0 ? x : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (r, n) => (r == null ? void 0 : r.source) === n ? (r.lastIndex = 0, r) : new RegExp(n, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(t, r, n, i) {
    var h;
    let s, a, l;
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (v) => {
      if (v.indexOf(this.formatSeparator) < 0) {
        const x = qn(r, u, v, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(x, void 0, n, {
          ...i,
          ...r,
          interpolationkey: v
        }) : x;
      }
      const m = v.split(this.formatSeparator), w = m.shift().trim(), I = m.join(this.formatSeparator).trim();
      return this.format(qn(r, u, w, this.options.keySeparator, this.options.ignoreJSONStructure), I, n, {
        ...i,
        ...r,
        interpolationkey: w
      });
    };
    this.resetRegExp();
    const p = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, d = ((h = i == null ? void 0 : i.interpolation) == null ? void 0 : h.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (v) => yr(v)
    }, {
      regex: this.regexp,
      safeValue: (v) => this.escapeValue ? yr(this.escape(v)) : yr(v)
    }].forEach((v) => {
      for (l = 0; s = v.regex.exec(t); ) {
        const m = s[1].trim();
        if (a = c(m), a === void 0)
          if (typeof p == "function") {
            const I = p(t, s, i);
            a = J(I) ? I : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, m))
            a = "";
          else if (d) {
            a = s[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${m} for interpolating ${t}`), a = "";
        else !J(a) && !this.useRawValueToEscape && (a = $n(a));
        const w = v.safeValue(a);
        if (t = t.replace(s[0], w), d ? (v.regex.lastIndex += a.length, v.regex.lastIndex -= s[0].length) : v.regex.lastIndex = 0, l++, l >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, r, n = {}) {
    let i, s, a;
    const l = (u, c) => {
      const p = this.nestingOptionsSeparator;
      if (u.indexOf(p) < 0) return u;
      const d = u.split(new RegExp(`${p}[ ]*{`));
      let y = `{${d[1]}`;
      u = d[0], y = this.interpolate(y, a);
      const h = y.match(/'/g), v = y.match(/"/g);
      (((h == null ? void 0 : h.length) ?? 0) % 2 === 0 && !v || v.length % 2 !== 0) && (y = y.replace(/'/g, '"'));
      try {
        a = JSON.parse(y), c && (a = {
          ...c,
          ...a
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, m), `${u}${p}${y}`;
      }
      return a.defaultValue && a.defaultValue.indexOf(this.prefix) > -1 && delete a.defaultValue, u;
    };
    for (; i = this.nestingRegexp.exec(t); ) {
      let u = [];
      a = {
        ...n
      }, a = a.replace && !J(a.replace) ? a.replace : a, a.applyPostProcessor = !1, delete a.defaultValue;
      const c = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
      if (c !== -1 && (u = i[1].slice(c).split(this.formatSeparator).map((p) => p.trim()).filter(Boolean), i[1] = i[1].slice(0, c)), s = r(l.call(this, i[1].trim(), a), a), s && i[0] === t && !J(s)) return s;
      J(s) || (s = $n(s)), s || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), s = ""), u.length && (s = u.reduce((p, d) => this.format(p, d, n.lng, {
        ...n,
        interpolationkey: i[1].trim()
      }), s.trim())), t = t.replace(i[0], s), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const Ho = (e) => {
  let t = e.toLowerCase().trim();
  const r = {};
  if (e.indexOf("(") > -1) {
    const n = e.split("(");
    t = n[0].toLowerCase().trim();
    const i = n[1].substring(0, n[1].length - 1);
    t === "currency" && i.indexOf(":") < 0 ? r.currency || (r.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? r.range || (r.range = i.trim()) : i.split(";").forEach((a) => {
      if (a) {
        const [l, ...u] = a.split(":"), c = u.join(":").trim().replace(/^'+|'+$/g, ""), p = l.trim();
        r[p] || (r[p] = c), c === "false" && (r[p] = !1), c === "true" && (r[p] = !0), isNaN(c) || (r[p] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: r
  };
}, Yn = (e) => {
  const t = {};
  return (r, n, i) => {
    let s = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (s = {
      ...s,
      [i.interpolationkey]: void 0
    });
    const a = n + JSON.stringify(s);
    let l = t[a];
    return l || (l = e(wt(n), i), t[a] = l), l(r);
  };
}, Vo = (e) => (t, r, n) => e(wt(r), n)(t);
class Go {
  constructor(t = {}) {
    this.logger = he.create("formatter"), this.options = t, this.init(t);
  }
  init(t, r = {
    interpolation: {}
  }) {
    this.formatSeparator = r.interpolation.formatSeparator || ",";
    const n = r.cacheInBuiltFormats ? Yn : Vo;
    this.formats = {
      number: n((i, s) => {
        const a = new Intl.NumberFormat(i, {
          ...s
        });
        return (l) => a.format(l);
      }),
      currency: n((i, s) => {
        const a = new Intl.NumberFormat(i, {
          ...s,
          style: "currency"
        });
        return (l) => a.format(l);
      }),
      datetime: n((i, s) => {
        const a = new Intl.DateTimeFormat(i, {
          ...s
        });
        return (l) => a.format(l);
      }),
      relativetime: n((i, s) => {
        const a = new Intl.RelativeTimeFormat(i, {
          ...s
        });
        return (l) => a.format(l, s.range || "day");
      }),
      list: n((i, s) => {
        const a = new Intl.ListFormat(i, {
          ...s
        });
        return (l) => a.format(l);
      })
    };
  }
  add(t, r) {
    this.formats[t.toLowerCase().trim()] = r;
  }
  addCached(t, r) {
    this.formats[t.toLowerCase().trim()] = Yn(r);
  }
  format(t, r, n, i = {}) {
    const s = r.split(this.formatSeparator);
    if (s.length > 1 && s[0].indexOf("(") > 1 && s[0].indexOf(")") < 0 && s.find((l) => l.indexOf(")") > -1)) {
      const l = s.findIndex((u) => u.indexOf(")") > -1);
      s[0] = [s[0], ...s.splice(1, l)].join(this.formatSeparator);
    }
    return s.reduce((l, u) => {
      var d;
      const {
        formatName: c,
        formatOptions: p
      } = Ho(u);
      if (this.formats[c]) {
        let y = l;
        try {
          const h = ((d = i == null ? void 0 : i.formatParams) == null ? void 0 : d[i.interpolationkey]) || {}, v = h.locale || h.lng || i.locale || i.lng || n;
          y = this.formats[c](l, v, {
            ...p,
            ...i,
            ...h
          });
        } catch (h) {
          this.logger.warn(h);
        }
        return y;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return l;
    }, t);
  }
}
const Uo = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class qo extends ir {
  constructor(t, r, n, i = {}) {
    var s, a;
    super(), this.backend = t, this.store = r, this.services = n, this.languageUtils = n.languageUtils, this.options = i, this.logger = he.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (a = (s = this.backend) == null ? void 0 : s.init) == null || a.call(s, n, i.backend, i);
  }
  queueLoad(t, r, n, i) {
    const s = {}, a = {}, l = {}, u = {};
    return t.forEach((c) => {
      let p = !0;
      r.forEach((d) => {
        const y = `${c}|${d}`;
        !n.reload && this.store.hasResourceBundle(c, d) ? this.state[y] = 2 : this.state[y] < 0 || (this.state[y] === 1 ? a[y] === void 0 && (a[y] = !0) : (this.state[y] = 1, p = !1, a[y] === void 0 && (a[y] = !0), s[y] === void 0 && (s[y] = !0), u[d] === void 0 && (u[d] = !0)));
      }), p || (l[c] = !0);
    }), (Object.keys(s).length || Object.keys(a).length) && this.queue.push({
      pending: a,
      pendingCount: Object.keys(a).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(s),
      pending: Object.keys(a),
      toLoadLanguages: Object.keys(l),
      toLoadNamespaces: Object.keys(u)
    };
  }
  loaded(t, r, n) {
    const i = t.split("|"), s = i[0], a = i[1];
    r && this.emit("failedLoading", s, a, r), !r && n && this.store.addResourceBundle(s, a, n, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = r ? -1 : 2, r && n && (this.state[t] = 0);
    const l = {};
    this.queue.forEach((u) => {
      zo(u.loaded, [s], a), Uo(u, t), r && u.errors.push(r), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((c) => {
        l[c] || (l[c] = {});
        const p = u.loaded[c];
        p.length && p.forEach((d) => {
          l[c][d] === void 0 && (l[c][d] = !0);
        });
      }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback());
    }), this.emit("loaded", l), this.queue = this.queue.filter((u) => !u.done);
  }
  read(t, r, n, i = 0, s = this.retryTimeout, a) {
    if (!t.length) return a(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: r,
        fcName: n,
        tried: i,
        wait: s,
        callback: a
      });
      return;
    }
    this.readingCalls++;
    const l = (c, p) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (c && p && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, r, n, i + 1, s * 2, a);
        }, s);
        return;
      }
      a(c, p);
    }, u = this.backend[n].bind(this.backend);
    if (u.length === 2) {
      try {
        const c = u(t, r);
        c && typeof c.then == "function" ? c.then((p) => l(null, p)).catch(l) : l(null, c);
      } catch (c) {
        l(c);
      }
      return;
    }
    return u(t, r, l);
  }
  prepareLoading(t, r, n = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    J(t) && (t = this.languageUtils.toResolveHierarchy(t)), J(r) && (r = [r]);
    const s = this.queueLoad(t, r, n, i);
    if (!s.toLoad.length)
      return s.pending.length || i(), null;
    s.toLoad.forEach((a) => {
      this.loadOne(a);
    });
  }
  load(t, r, n) {
    this.prepareLoading(t, r, {}, n);
  }
  reload(t, r, n) {
    this.prepareLoading(t, r, {
      reload: !0
    }, n);
  }
  loadOne(t, r = "") {
    const n = t.split("|"), i = n[0], s = n[1];
    this.read(i, s, "read", void 0, void 0, (a, l) => {
      a && this.logger.warn(`${r}loading namespace ${s} for language ${i} failed`, a), !a && l && this.logger.log(`${r}loaded namespace ${s} for language ${i}`, l), this.loaded(t, a, l);
    });
  }
  saveMissing(t, r, n, i, s, a = {}, l = () => {
  }) {
    var u, c, p, d, y;
    if ((c = (u = this.services) == null ? void 0 : u.utils) != null && c.hasLoadedNamespace && !((d = (p = this.services) == null ? void 0 : p.utils) != null && d.hasLoadedNamespace(r))) {
      this.logger.warn(`did not save key "${n}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(n == null || n === "")) {
      if ((y = this.backend) != null && y.create) {
        const h = {
          ...a,
          isUpdate: s
        }, v = this.backend.create.bind(this.backend);
        if (v.length < 6)
          try {
            let m;
            v.length === 5 ? m = v(t, r, n, i, h) : m = v(t, r, n, i), m && typeof m.then == "function" ? m.then((w) => l(null, w)).catch(l) : l(null, m);
          } catch (m) {
            l(m);
          }
        else
          v(t, r, n, i, l, h);
      }
      !t || !t[0] || this.store.addResource(t[0], r, n, i);
    }
  }
}
const Jn = () => ({
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
  overloadTranslationOptionHandler: (e) => {
    let t = {};
    if (typeof e[1] == "object" && (t = e[1]), J(e[1]) && (t.defaultValue = e[1]), J(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const r = e[3] || e[2];
      Object.keys(r).forEach((n) => {
        t[n] = r[n];
      });
    }
    return t;
  },
  interpolation: {
    escapeValue: !0,
    format: (e) => e,
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
}), Zn = (e) => {
  var t, r;
  return J(e.ns) && (e.ns = [e.ns]), J(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), J(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), ((r = (t = e.supportedLngs) == null ? void 0 : t.indexOf) == null ? void 0 : r.call(t, "cimode")) < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e;
}, zt = () => {
}, Yo = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((r) => {
    typeof e[r] == "function" && (e[r] = e[r].bind(e));
  });
};
class kt extends ir {
  constructor(t = {}, r) {
    if (super(), this.options = Zn(t), this.services = {}, this.logger = he, this.modules = {
      external: []
    }, Yo(this), r && !this.isInitialized && !t.isClone) {
      if (!this.options.initAsync)
        return this.init(t, r), this;
      setTimeout(() => {
        this.init(t, r);
      }, 0);
    }
  }
  init(t = {}, r) {
    this.isInitializing = !0, typeof t == "function" && (r = t, t = {}), t.defaultNS == null && t.ns && (J(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const n = Jn();
    this.options = {
      ...n,
      ...this.options,
      ...Zn(t)
    }, this.options.interpolation = {
      ...n.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const i = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? he.init(i(this.modules.logger), this.options) : he.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = Go;
      const p = new Vn(this.options);
      this.store = new Wn(this.options.resources, this.options);
      const d = this.services;
      d.logger = he, d.resourceStore = this.store, d.languageUtils = p, d.pluralResolver = new Wo(p, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== n.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), c && (!this.options.interpolation.format || this.options.interpolation.format === n.interpolation.format) && (d.formatter = i(c), d.formatter.init && d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new Ko(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new qo(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", (h, ...v) => {
        this.emit(h, ...v);
      }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new Xt(this.services, this.options), this.translator.on("*", (h, ...v) => {
        this.emit(h, ...v);
      }), this.modules.external.forEach((h) => {
        h.init && h.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, r || (r = zt), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = (...p) => this.store[c](...p);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = (...p) => (this.store[c](...p), this);
    });
    const l = mt(), u = () => {
      const c = (p, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), l.resolve(d), r(p, d);
      };
      if (this.languages && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), l;
  }
  loadResources(t, r = zt) {
    var s, a;
    let n = r;
    const i = J(t) ? t : this.language;
    if (typeof t == "function" && (n = t), !this.options.resources || this.options.partialBundledLanguages) {
      if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return n();
      const l = [], u = (c) => {
        if (!c || c === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(c).forEach((d) => {
          d !== "cimode" && l.indexOf(d) < 0 && l.push(d);
        });
      };
      i ? u(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((p) => u(p)), (a = (s = this.options.preload) == null ? void 0 : s.forEach) == null || a.call(s, (c) => u(c)), this.services.backendConnector.load(l, this.options.ns, (c) => {
        !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), n(c);
      });
    } else
      n(null);
  }
  reloadResources(t, r, n) {
    const i = mt();
    return typeof t == "function" && (n = t, t = void 0), typeof r == "function" && (n = r, r = void 0), t || (t = this.languages), r || (r = this.options.ns), n || (n = zt), this.services.backendConnector.reload(t, r, (s) => {
      i.resolve(), n(s);
    }), i;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && ns.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
      for (let r = 0; r < this.languages.length; r++) {
        const n = this.languages[r];
        if (!(["cimode", "dev"].indexOf(n) > -1) && this.store.hasLanguageSomeTranslations(n)) {
          this.resolvedLanguage = n;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(t) < 0 && this.store.hasLanguageSomeTranslations(t) && (this.resolvedLanguage = t, this.languages.unshift(t));
    }
  }
  changeLanguage(t, r) {
    this.isLanguageChangingTo = t;
    const n = mt();
    this.emit("languageChanging", t);
    const i = (l) => {
      this.language = l, this.languages = this.services.languageUtils.toResolveHierarchy(l), this.resolvedLanguage = void 0, this.setResolvedLanguage(l);
    }, s = (l, u) => {
      u ? this.isLanguageChangingTo === t && (i(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, n.resolve((...c) => this.t(...c)), r && r(l, (...c) => this.t(...c));
    }, a = (l) => {
      var p, d;
      !t && !l && this.services.languageDetector && (l = []);
      const u = J(l) ? l : l && l[0], c = this.store.hasLanguageSomeTranslations(u) ? u : this.services.languageUtils.getBestMatchFromCodes(J(l) ? [l] : l);
      c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), (d = (p = this.services.languageDetector) == null ? void 0 : p.cacheUserLanguage) == null || d.call(p, c)), this.loadResources(c, (y) => {
        s(y, c);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? a(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(a) : this.services.languageDetector.detect(a) : a(t), n;
  }
  getFixedT(t, r, n) {
    const i = (s, a, ...l) => {
      let u;
      typeof a != "object" ? u = this.options.overloadTranslationOptionHandler([s, a].concat(l)) : u = {
        ...a
      }, u.lng = u.lng || i.lng, u.lngs = u.lngs || i.lngs, u.ns = u.ns || i.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || n || i.keyPrefix);
      const c = this.options.keySeparator || ".";
      let p;
      return u.keyPrefix && Array.isArray(s) ? p = s.map((d) => (typeof d == "function" && (d = Br(d, {
        ...this.options,
        ...a
      })), `${u.keyPrefix}${c}${d}`)) : (typeof s == "function" && (s = Br(s, {
        ...this.options,
        ...a
      })), p = u.keyPrefix ? `${u.keyPrefix}${c}${s}` : s), this.t(p, u);
    };
    return J(t) ? i.lng = t : i.lngs = t, i.ns = r, i.keyPrefix = n, i;
  }
  t(...t) {
    var r;
    return (r = this.translator) == null ? void 0 : r.translate(...t);
  }
  exists(...t) {
    var r;
    return (r = this.translator) == null ? void 0 : r.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, r = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const n = r.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, s = this.languages[this.languages.length - 1];
    if (n.toLowerCase() === "cimode") return !0;
    const a = (l, u) => {
      const c = this.services.backendConnector.state[`${l}|${u}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (r.precheck) {
      const l = r.precheck(this, a);
      if (l !== void 0) return l;
    }
    return !!(this.hasResourceBundle(n, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || a(n, t) && (!i || a(s, t)));
  }
  loadNamespaces(t, r) {
    const n = mt();
    return this.options.ns ? (J(t) && (t = [t]), t.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      n.resolve(), r && r(i);
    }), n) : (r && r(), Promise.resolve());
  }
  loadLanguages(t, r) {
    const n = mt();
    J(t) && (t = [t]);
    const i = this.options.preload || [], s = t.filter((a) => i.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a));
    return s.length ? (this.options.preload = i.concat(s), this.loadResources((a) => {
      n.resolve(), r && r(a);
    }), n) : (r && r(), Promise.resolve());
  }
  dir(t) {
    var i, s;
    if (t || (t = this.resolvedLanguage || (((i = this.languages) == null ? void 0 : i.length) > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    try {
      const a = new Intl.Locale(t);
      if (a && a.getTextInfo) {
        const l = a.getTextInfo();
        if (l && l.direction) return l.direction;
      }
    } catch {
    }
    const r = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], n = ((s = this.services) == null ? void 0 : s.languageUtils) || new Vn(Jn());
    return t.toLowerCase().indexOf("-latn") > 1 ? "ltr" : r.indexOf(n.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(t = {}, r) {
    return new kt(t, r);
  }
  cloneInstance(t = {}, r = zt) {
    const n = t.forkResourceStore;
    n && delete t.forkResourceStore;
    const i = {
      ...this.options,
      ...t,
      isClone: !0
    }, s = new kt(i);
    if ((t.debug !== void 0 || t.prefix !== void 0) && (s.logger = s.logger.clone(t)), ["store", "services", "language"].forEach((l) => {
      s[l] = this[l];
    }), s.services = {
      ...this.services
    }, s.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, n) {
      const l = Object.keys(this.store.data).reduce((u, c) => (u[c] = {
        ...this.store.data[c]
      }, u[c] = Object.keys(u[c]).reduce((p, d) => (p[d] = {
        ...u[c][d]
      }, p), u[c]), u), {});
      s.store = new Wn(l, i), s.services.resourceStore = s.store;
    }
    return s.translator = new Xt(s.services, i), s.translator.on("*", (l, ...u) => {
      s.emit(l, ...u);
    }), s.init(i, r), s.translator.options = i, s.translator.backendConnector.services.utils = {
      hasLoadedNamespace: s.hasLoadedNamespace.bind(s)
    }, s;
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
const se = kt.createInstance();
se.createInstance = kt.createInstance;
se.createInstance;
se.dir;
se.init;
se.loadResources;
se.reloadResources;
se.use;
se.changeLanguage;
se.getFixedT;
se.t;
se.exists;
se.setDefaultNamespace;
se.hasLoadedNamespace;
se.loadNamespaces;
se.loadLanguages;
var Xr = {
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
}, Jo = Xr.footer, Zo = Xr.nav;
const Xo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xr,
  footer: Jo,
  nav: Zo
}, Symbol.toStringTag, { value: "Module" }));
var Qr = {
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
}, Qo = Qr.footer, el = Qr.nav;
const tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qr,
  footer: Qo,
  nav: el
}, Symbol.toStringTag, { value: "Module" }));
var en = {
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
}, rl = en.footer, nl = en.nav;
const il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: en,
  footer: rl,
  nav: nl
}, Symbol.toStringTag, { value: "Module" }));
var tn = {
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
}, sl = tn.footer, al = tn.nav;
const ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tn,
  footer: sl,
  nav: al
}, Symbol.toStringTag, { value: "Module" }));
var sr = {
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
}, ll = sr.footer, cl = sr.nav, ul = sr.search;
const dl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sr,
  footer: ll,
  nav: cl,
  search: ul
}, Symbol.toStringTag, { value: "Module" }));
var rn = {
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
}, pl = rn.footer, fl = rn.nav;
const hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rn,
  footer: pl,
  nav: fl
}, Symbol.toStringTag, { value: "Module" }));
var nn = {
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
}, gl = nn.footer, ml = nn.nav;
const vl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nn,
  footer: gl,
  nav: ml
}, Symbol.toStringTag, { value: "Module" }));
var sn = {
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
}, yl = sn.footer, xl = sn.nav;
const bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sn,
  footer: yl,
  nav: xl
}, Symbol.toStringTag, { value: "Module" }));
var an = {
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
}, _l = an.footer, wl = an.nav;
const kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: an,
  footer: _l,
  nav: wl
}, Symbol.toStringTag, { value: "Module" }));
var on = {
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
}, Sl = on.footer, Pl = on.nav;
const jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: on,
  footer: Sl,
  nav: Pl
}, Symbol.toStringTag, { value: "Module" }));
var ln = {
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
}, Cl = ln.footer, El = ln.nav;
const Ol = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ln,
  footer: Cl,
  nav: El
}, Symbol.toStringTag, { value: "Module" }));
var cn = {
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
}, Il = cn.footer, Nl = cn.nav;
const zl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cn,
  footer: Il,
  nav: Nl
}, Symbol.toStringTag, { value: "Module" }));
var un = {
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
}, Al = un.footer, Ll = un.nav;
const Tl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: un,
  footer: Al,
  nav: Ll
}, Symbol.toStringTag, { value: "Module" }));
var dn = {
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
}, Rl = dn.footer, Ml = dn.nav;
const $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dn,
  footer: Rl,
  nav: Ml
}, Symbol.toStringTag, { value: "Module" }));
var pn = {
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
}, Dl = pn.footer, Fl = pn.nav;
const Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pn,
  footer: Dl,
  nav: Fl
}, Symbol.toStringTag, { value: "Module" }));
var fn = {
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
}, Wl = fn.footer, Kl = fn.nav;
const Hl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fn,
  footer: Wl,
  nav: Kl
}, Symbol.toStringTag, { value: "Module" }));
var hn = {
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
}, Vl = hn.footer, Gl = hn.nav;
const Ul = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hn,
  footer: Vl,
  nav: Gl
}, Symbol.toStringTag, { value: "Module" }));
var gn = {
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
}, ql = gn.footer, Yl = gn.nav;
const Jl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gn,
  footer: ql,
  nav: Yl
}, Symbol.toStringTag, { value: "Module" }));
var mn = {
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
}, Zl = mn.footer, Xl = mn.nav;
const Ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mn,
  footer: Zl,
  nav: Xl
}, Symbol.toStringTag, { value: "Module" }));
function Wr(e, t = "") {
  let r = {};
  if (e && typeof e == "object") {
    for (const n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        const i = n === "default" && !t ? "" : t ? `${t}.${n}` : n, s = e[n];
        Array.isArray(s) ? (r[i] = s, s.forEach((a, l) => {
          typeof a == "object" && a !== null ? r = {
            ...r,
            ...Wr(a, `${i}.${l}`)
          } : r[`${i}.${l}`] = a;
        })) : typeof s == "object" && s !== null ? r = { ...r, ...Wr(s, i) } : r[i] = s;
      }
  }
  return r;
}
const Ne = {}, Xn = /* @__PURE__ */ Object.assign({ "./ar/translation.yaml": Xo, "./cs/translation.yaml": tl, "./da/translation.yaml": il, "./de/translation.yaml": ol, "./en/translation.yaml": dl, "./es/translation.yaml": hl, "./fi/translation.yaml": vl, "./fr/translation.yaml": bl, "./he/translation.yaml": kl, "./id/translation.yaml": jl, "./it/translation.yaml": Ol, "./ja/translation.yaml": zl, "./nl/translation.yaml": Tl, "./no/translation.yaml": $l, "./pl/translation.yaml": Bl, "./pt/translation.yaml": Hl, "./sv/translation.yaml": Ul, "./tr/translation.yaml": Jl, "./zh/translation.yaml": Ql });
for (const e in Xn) {
  const t = Xn[e], n = e.replace(/^\.\/|\/$/g, "").split("/")[0];
  if (Ne[n] || (Ne[n] = {}), typeof t != "object" || t === null) {
    console.warn(`File ${e} is not a valid object, skipping.`);
    continue;
  }
  Ne[n].translation || (Ne[n].translation = {}), Object.assign(Ne[n].translation, Wr(t));
}
const ec = Object.keys(Ne);
se.use(Po).init({
  lng: "en",
  supportedLngs: ec,
  resources: Ne,
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const ss = "https://www.plexicus.ai", as = "https://blog.plexicus.ai", At = "https://app.plexicus.ai";
function tc(e) {
  const [t, r] = ae(!1);
  return le(() => {
    const n = window.matchMedia(e), i = () => r(n.matches);
    return i(), n.addEventListener("change", i), () => n.removeEventListener("change", i);
  }, [e]), t;
}
function rc({ className: e, type: t, ...r }) {
  return /* @__PURE__ */ o.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: re(
        "file:text-foreground placeholder:text-white/70 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...r
    }
  );
}
function os(e) {
  const { currentLang: t = "en", debounceMs: r = 1e3, minQueryLength: n = 2, blogUrl: i, webUrl: s } = e, [a, l] = ae(""), [u, c] = ae([]), [p, d] = ae(!1), [y, h] = ae(!1), v = st(null);
  le(() => {
    if (v.current && clearTimeout(v.current), a.trim().length < n) {
      c([]), h(!1);
      return;
    }
    return v.current = setTimeout(async () => {
      await m(a.trim());
    }, r), () => {
      v.current && clearTimeout(v.current);
    };
  }, [a, t, r, n]);
  const m = async (N) => {
    d(!0);
    const j = t === "en" ? "" : "/";
    try {
      const k = [], [L, O] = await Promise.allSettled([
        fetch(`${s}/api/${t}/pages.json?t=${Date.now()}`).then((T) => T.json()),
        fetch(`${i}/api/${t}/pages.json?t=${Date.now()}`).then((T) => T.json())
      ]);
      if (L.status === "fulfilled") {
        const T = w(L.value.pages || [], N);
        k.push(...T.map((E) => ({ ...E, lang: t, path: E.path === "/" && t === "en" ? s : `${s}${j}${E.path}`, type: "page" })));
      }
      if (O.status === "fulfilled") {
        const T = w(O.value.pages || [], N);
        k.push(...T.map((E) => ({ ...E, lang: t, path: `${i}/${E.path}`, type: "blog" })));
      }
      if (k.length < 3 && t !== "en") {
        const [T, E] = await Promise.allSettled([
          fetch(`${s}/api/en/pages.json?t=${Date.now()}`).then((V) => V.json()),
          fetch(`${i}/api/en/pages.json?t=${Date.now()}`).then((V) => V.json())
        ]);
        if (T.status === "fulfilled") {
          const V = w(T.value.pages || [], N);
          k.push(...V.map((G) => ({ ...G, lang: "en", path: G.path === "/" ? s : `${s}${j}${G.path}`, type: "page" })));
        }
        if (E.status === "fulfilled") {
          const V = w(E.value.pages || [], N);
          k.push(...V.map((G) => ({ ...G, lang: "en", path: `${i}/${G.path}`, type: "blog" })));
        }
      }
      const S = k.filter((T, E, V) => E === V.findIndex((G) => G.path === T.path)).slice(0, 8);
      c(S), h(S.length > 0);
    } catch (k) {
      console.error("Search error:", k), c([]), h(!1);
    } finally {
      d(!1);
    }
  }, w = (N, j) => {
    const k = j.toLowerCase();
    return N.filter((L) => {
      var E;
      const O = L.title.toLowerCase().includes(k), S = L.description.toLowerCase().includes(k), T = (E = L.keywords) == null ? void 0 : E.some((V) => V.toLowerCase().includes(k));
      return O || S || T;
    });
  }, I = () => {
    l(""), c([]), h(!1);
  }, x = (N) => {
    window.location.href = `${N.path}`, h(!1);
  };
  return le(() => {
    m("platform");
  }, []), {
    query: a,
    setQuery: l,
    results: u,
    isLoading: p,
    isOpen: y,
    setIsOpen: h,
    clearSearch: I,
    handleResultClick: x
  };
}
function nc({ currentLang: e = "en", onClose: t, blogUrl: r, webUrl: n }) {
  const i = st(null), { query: s, setQuery: a, results: l, isLoading: u, clearSearch: c, handleResultClick: p } = os({ currentLang: e, blogUrl: r, webUrl: n }), { t: d } = nr(), y = () => {
    c(), t();
  };
  return /* @__PURE__ */ o.jsx("div", { className: "z-50 bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ o.jsxs("div", { className: " z-50 h-full bg-background ", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex items-center gap-4 p-4 border-b", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ o.jsx(Fi, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ o.jsx(
          rc,
          {
            ref: i,
            type: "text",
            placeholder: d("search.placeholder"),
            value: s,
            onChange: (h) => a(h.target.value),
            className: "pl-10 border-2 focus:border-[#8220ff] focus:ring-[#8220ff]/20 transition-all duration-200"
          }
        )
      ] }),
      l.length > 0 && /* @__PURE__ */ o.jsx(Ie, { variant: "ghost", size: "icon", onClick: y, children: /* @__PURE__ */ o.jsx(wa, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "p-4 max-h-[calc(100vh-80px)] overflow-y-auto", children: u ? /* @__PURE__ */ o.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: d("search.searching") }) : l.length > 0 ? /* @__PURE__ */ o.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ o.jsx(ic, { results: l, onClick: p }) }) : s.trim().length >= 2 ? /* @__PURE__ */ o.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: d("search.not_found") }) : /* @__PURE__ */ o.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: d("search.start_typing") }) })
  ] }) });
}
function ic({ results: e, onClick: t }) {
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: e.map((r, n) => /* @__PURE__ */ o.jsx(
    "button",
    {
      onClick: () => t(r),
      className: "w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group",
      children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ o.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ o.jsx("h4", { className: "font-medium text-sm line-clamp-1 group-hover:text-[#8220ff]", children: r.title }),
          /* @__PURE__ */ o.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: r.description }),
          r.keywords && r.keywords.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: r.keywords.slice(0, 3).map((i, s) => /* @__PURE__ */ o.jsx(
            "span",
            {
              className: "inline-block px-2 py-1 text-xs bg-[#8220ff]/60 text-white rounded-full",
              children: i
            },
            s
          )) })
        ] }),
        /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col p-2 items-center justify-start gap-2", children: [
          r.lang && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-muted-foreground uppercase font-mono", children: r.lang }),
          r.type && /* @__PURE__ */ o.jsx("span", { className: re("text-xs rounded-sm p-1 uppercase font-mono", r.type === "page" ? "bg-[#8220ff]/60 text-white " : "text-[#8220ff]/80 bg-gray-200"), children: r.type })
        ] })
      ] })
    },
    `${r.path}-${n}`
  )) });
}
var Qn = 1, sc = 0.9, ac = 0.8, oc = 0.17, xr = 0.1, br = 0.999, lc = 0.9999, cc = 0.99, uc = /[\\\/_+.#"@\[\(\{&]/, dc = /[\\\/_+.#"@\[\(\{&]/g, pc = /[\s-]/, ls = /[\s-]/g;
function Kr(e, t, r, n, i, s, a) {
  if (s === t.length) return i === e.length ? Qn : cc;
  var l = `${i},${s}`;
  if (a[l] !== void 0) return a[l];
  for (var u = n.charAt(s), c = r.indexOf(u, i), p = 0, d, y, h, v; c >= 0; ) d = Kr(e, t, r, n, c + 1, s + 1, a), d > p && (c === i ? d *= Qn : uc.test(e.charAt(c - 1)) ? (d *= ac, h = e.slice(i, c - 1).match(dc), h && i > 0 && (d *= Math.pow(br, h.length))) : pc.test(e.charAt(c - 1)) ? (d *= sc, v = e.slice(i, c - 1).match(ls), v && i > 0 && (d *= Math.pow(br, v.length))) : (d *= oc, i > 0 && (d *= Math.pow(br, c - i))), e.charAt(c) !== t.charAt(s) && (d *= lc)), (d < xr && r.charAt(c - 1) === n.charAt(s + 1) || n.charAt(s + 1) === n.charAt(s) && r.charAt(c - 1) !== n.charAt(s)) && (y = Kr(e, t, r, n, c + 1, s + 2, a), y * xr > d && (d = y * xr)), d > p && (p = d), c = r.indexOf(u, c + 1);
  return a[l] = p, p;
}
function ei(e) {
  return e.toLowerCase().replace(ls, " ");
}
function fc(e, t, r) {
  return e = r && r.length > 0 ? `${e + " " + r.join(" ")}` : e, Kr(e, t, ei(e), ei(t), 0, 0, {});
}
function Pe(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), r === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function ti(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Me(...e) {
  return (t) => {
    let r = !1;
    const n = e.map((i) => {
      const s = ti(i, t);
      return !r && typeof s == "function" && (r = !0), s;
    });
    if (r)
      return () => {
        for (let i = 0; i < n.length; i++) {
          const s = n[i];
          typeof s == "function" ? s() : ti(e[i], null);
        }
      };
  };
}
function Ke(...e) {
  return g.useCallback(Me(...e), e);
}
function hc(e, t) {
  const r = g.createContext(t), n = (s) => {
    const { children: a, ...l } = s, u = g.useMemo(() => l, Object.values(l));
    return /* @__PURE__ */ o.jsx(r.Provider, { value: u, children: a });
  };
  n.displayName = e + "Provider";
  function i(s) {
    const a = g.useContext(r);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${s}\` must be used within \`${e}\``);
  }
  return [n, i];
}
function gc(e, t = []) {
  let r = [];
  function n(s, a) {
    const l = g.createContext(a), u = r.length;
    r = [...r, a];
    const c = (d) => {
      var I;
      const { scope: y, children: h, ...v } = d, m = ((I = y == null ? void 0 : y[e]) == null ? void 0 : I[u]) || l, w = g.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ o.jsx(m.Provider, { value: w, children: h });
    };
    c.displayName = s + "Provider";
    function p(d, y) {
      var m;
      const h = ((m = y == null ? void 0 : y[e]) == null ? void 0 : m[u]) || l, v = g.useContext(h);
      if (v) return v;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${s}\``);
    }
    return [c, p];
  }
  const i = () => {
    const s = r.map((a) => g.createContext(a));
    return function(l) {
      const u = (l == null ? void 0 : l[e]) || s;
      return g.useMemo(
        () => ({ [`__scope${e}`]: { ...l, [e]: u } }),
        [l, u]
      );
    };
  };
  return i.scopeName = e, [n, mc(i, ...t)];
}
function mc(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(s) {
      const a = n.reduce((l, { useScope: u, scopeName: c }) => {
        const d = u(s)[`__scope${c}`];
        return { ...l, ...d };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
var St = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {
}, vc = g[" useId ".trim().toString()] || (() => {
}), yc = 0;
function ye(e) {
  const [t, r] = g.useState(vc());
  return St(() => {
    r((n) => n ?? String(yc++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var xc = g[" useInsertionEffect ".trim().toString()] || St;
function bc({
  prop: e,
  defaultProp: t,
  onChange: r = () => {
  },
  caller: n
}) {
  const [i, s, a] = _c({
    defaultProp: t,
    onChange: r
  }), l = e !== void 0, u = l ? e : i;
  {
    const p = g.useRef(e !== void 0);
    g.useEffect(() => {
      const d = p.current;
      d !== l && console.warn(
        `${n} is changing from ${d ? "controlled" : "uncontrolled"} to ${l ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), p.current = l;
    }, [l, n]);
  }
  const c = g.useCallback(
    (p) => {
      var d;
      if (l) {
        const y = wc(p) ? p(e) : p;
        y !== e && ((d = a.current) == null || d.call(a, y));
      } else
        s(p);
    },
    [l, e, s, a]
  );
  return [u, c];
}
function _c({
  defaultProp: e,
  onChange: t
}) {
  const [r, n] = g.useState(e), i = g.useRef(r), s = g.useRef(t);
  return xc(() => {
    s.current = t;
  }, [t]), g.useEffect(() => {
    var a;
    i.current !== r && ((a = s.current) == null || a.call(s, r), i.current = r);
  }, [r, i]), [r, n, s];
}
function wc(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function cs(e) {
  const t = /* @__PURE__ */ kc(e), r = g.forwardRef((n, i) => {
    const { children: s, ...a } = n, l = g.Children.toArray(s), u = l.find(Pc);
    if (u) {
      const c = u.props.children, p = l.map((d) => d === u ? g.Children.count(c) > 1 ? g.Children.only(null) : g.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ o.jsx(t, { ...a, ref: i, children: g.isValidElement(c) ? g.cloneElement(c, void 0, p) : null });
    }
    return /* @__PURE__ */ o.jsx(t, { ...a, ref: i, children: s });
  });
  return r.displayName = `${e}.Slot`, r;
}
// @__NO_SIDE_EFFECTS__
function kc(e) {
  const t = g.forwardRef((r, n) => {
    const { children: i, ...s } = r;
    if (g.isValidElement(i)) {
      const a = Cc(i), l = jc(s, i.props);
      return i.type !== g.Fragment && (l.ref = n ? Me(n, a) : a), g.cloneElement(i, l);
    }
    return g.Children.count(i) > 1 ? g.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var Sc = Symbol("radix.slottable");
function Pc(e) {
  return g.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === Sc;
}
function jc(e, t) {
  const r = { ...t };
  for (const n in t) {
    const i = e[n], s = t[n];
    /^on[A-Z]/.test(n) ? i && s ? r[n] = (...l) => {
      const u = s(...l);
      return i(...l), u;
    } : i && (r[n] = i) : n === "style" ? r[n] = { ...i, ...s } : n === "className" && (r[n] = [i, s].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function Cc(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Ec = [
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
], ie = Ec.reduce((e, t) => {
  const r = /* @__PURE__ */ cs(`Primitive.${t}`), n = g.forwardRef((i, s) => {
    const { asChild: a, ...l } = i, u = a ? r : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ o.jsx(u, { ...l, ref: s });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Oc(e, t) {
  e && ja.flushSync(() => e.dispatchEvent(t));
}
function Pt(e) {
  const t = g.useRef(e);
  return g.useEffect(() => {
    t.current = e;
  }), g.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
function Ic(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Pt(e);
  g.useEffect(() => {
    const n = (i) => {
      i.key === "Escape" && r(i);
    };
    return t.addEventListener("keydown", n, { capture: !0 }), () => t.removeEventListener("keydown", n, { capture: !0 });
  }, [r, t]);
}
var Nc = "DismissableLayer", Hr = "dismissableLayer.update", zc = "dismissableLayer.pointerDownOutside", Ac = "dismissableLayer.focusOutside", ri, us = g.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), ds = g.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: r = !1,
      onEscapeKeyDown: n,
      onPointerDownOutside: i,
      onFocusOutside: s,
      onInteractOutside: a,
      onDismiss: l,
      ...u
    } = e, c = g.useContext(us), [p, d] = g.useState(null), y = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = g.useState({}), v = Ke(t, (O) => d(O)), m = Array.from(c.layers), [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), I = m.indexOf(w), x = p ? m.indexOf(p) : -1, N = c.layersWithOutsidePointerEventsDisabled.size > 0, j = x >= I, k = Rc((O) => {
      const S = O.target, T = [...c.branches].some((E) => E.contains(S));
      !j || T || (i == null || i(O), a == null || a(O), O.defaultPrevented || l == null || l());
    }, y), L = Mc((O) => {
      const S = O.target;
      [...c.branches].some((E) => E.contains(S)) || (s == null || s(O), a == null || a(O), O.defaultPrevented || l == null || l());
    }, y);
    return Ic((O) => {
      x === c.layers.size - 1 && (n == null || n(O), !O.defaultPrevented && l && (O.preventDefault(), l()));
    }, y), g.useEffect(() => {
      if (p)
        return r && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (ri = y.body.style.pointerEvents, y.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(p)), c.layers.add(p), ni(), () => {
          r && c.layersWithOutsidePointerEventsDisabled.size === 1 && (y.body.style.pointerEvents = ri);
        };
    }, [p, y, r, c]), g.useEffect(() => () => {
      p && (c.layers.delete(p), c.layersWithOutsidePointerEventsDisabled.delete(p), ni());
    }, [p, c]), g.useEffect(() => {
      const O = () => h({});
      return document.addEventListener(Hr, O), () => document.removeEventListener(Hr, O);
    }, []), /* @__PURE__ */ o.jsx(
      ie.div,
      {
        ...u,
        ref: v,
        style: {
          pointerEvents: N ? j ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Pe(e.onFocusCapture, L.onFocusCapture),
        onBlurCapture: Pe(e.onBlurCapture, L.onBlurCapture),
        onPointerDownCapture: Pe(
          e.onPointerDownCapture,
          k.onPointerDownCapture
        )
      }
    );
  }
);
ds.displayName = Nc;
var Lc = "DismissableLayerBranch", Tc = g.forwardRef((e, t) => {
  const r = g.useContext(us), n = g.useRef(null), i = Ke(t, n);
  return g.useEffect(() => {
    const s = n.current;
    if (s)
      return r.branches.add(s), () => {
        r.branches.delete(s);
      };
  }, [r.branches]), /* @__PURE__ */ o.jsx(ie.div, { ...e, ref: i });
});
Tc.displayName = Lc;
function Rc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Pt(e), n = g.useRef(!1), i = g.useRef(() => {
  });
  return g.useEffect(() => {
    const s = (l) => {
      if (l.target && !n.current) {
        let u = function() {
          ps(
            zc,
            r,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: l };
        l.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = u, t.addEventListener("click", i.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", i.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", s);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", s), t.removeEventListener("click", i.current);
    };
  }, [t, r]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Mc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Pt(e), n = g.useRef(!1);
  return g.useEffect(() => {
    const i = (s) => {
      s.target && !n.current && ps(Ac, r, { originalEvent: s }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, r]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function ni() {
  const e = new CustomEvent(Hr);
  document.dispatchEvent(e);
}
function ps(e, t, r, { discrete: n }) {
  const i = r.originalEvent.target, s = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: r });
  t && i.addEventListener(e, t, { once: !0 }), n ? Oc(i, s) : i.dispatchEvent(s);
}
var _r = "focusScope.autoFocusOnMount", wr = "focusScope.autoFocusOnUnmount", ii = { bubbles: !1, cancelable: !0 }, $c = "FocusScope", fs = g.forwardRef((e, t) => {
  const {
    loop: r = !1,
    trapped: n = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: s,
    ...a
  } = e, [l, u] = g.useState(null), c = Pt(i), p = Pt(s), d = g.useRef(null), y = Ke(t, (m) => u(m)), h = g.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  g.useEffect(() => {
    if (n) {
      let m = function(N) {
        if (h.paused || !l) return;
        const j = N.target;
        l.contains(j) ? d.current = j : we(d.current, { select: !0 });
      }, w = function(N) {
        if (h.paused || !l) return;
        const j = N.relatedTarget;
        j !== null && (l.contains(j) || we(d.current, { select: !0 }));
      }, I = function(N) {
        if (document.activeElement === document.body)
          for (const k of N)
            k.removedNodes.length > 0 && we(l);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", w);
      const x = new MutationObserver(I);
      return l && x.observe(l, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", w), x.disconnect();
      };
    }
  }, [n, l, h.paused]), g.useEffect(() => {
    if (l) {
      ai.add(h);
      const m = document.activeElement;
      if (!l.contains(m)) {
        const I = new CustomEvent(_r, ii);
        l.addEventListener(_r, c), l.dispatchEvent(I), I.defaultPrevented || (Dc(Hc(hs(l)), { select: !0 }), document.activeElement === m && we(l));
      }
      return () => {
        l.removeEventListener(_r, c), setTimeout(() => {
          const I = new CustomEvent(wr, ii);
          l.addEventListener(wr, p), l.dispatchEvent(I), I.defaultPrevented || we(m ?? document.body, { select: !0 }), l.removeEventListener(wr, p), ai.remove(h);
        }, 0);
      };
    }
  }, [l, c, p, h]);
  const v = g.useCallback(
    (m) => {
      if (!r && !n || h.paused) return;
      const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, I = document.activeElement;
      if (w && I) {
        const x = m.currentTarget, [N, j] = Fc(x);
        N && j ? !m.shiftKey && I === j ? (m.preventDefault(), r && we(N, { select: !0 })) : m.shiftKey && I === N && (m.preventDefault(), r && we(j, { select: !0 })) : I === x && m.preventDefault();
      }
    },
    [r, n, h.paused]
  );
  return /* @__PURE__ */ o.jsx(ie.div, { tabIndex: -1, ...a, ref: y, onKeyDown: v });
});
fs.displayName = $c;
function Dc(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (we(n, { select: t }), document.activeElement !== r) return;
}
function Fc(e) {
  const t = hs(e), r = si(t, e), n = si(t.reverse(), e);
  return [r, n];
}
function hs(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const i = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || i ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
function si(e, t) {
  for (const r of e)
    if (!Bc(r, { upTo: t })) return r;
}
function Bc(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Wc(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function we(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== r && Wc(e) && t && e.select();
  }
}
var ai = Kc();
function Kc() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = oi(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = oi(e, t), (r = e[0]) == null || r.resume();
    }
  };
}
function oi(e, t) {
  const r = [...e], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Hc(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Vc = "Portal", gs = g.forwardRef((e, t) => {
  var l;
  const { container: r, ...n } = e, [i, s] = g.useState(!1);
  St(() => s(!0), []);
  const a = r || i && ((l = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : l.body);
  return a ? Ca.createPortal(/* @__PURE__ */ o.jsx(ie.div, { ...n, ref: t }), a) : null;
});
gs.displayName = Vc;
function Gc(e, t) {
  return g.useReducer((r, n) => t[r][n] ?? r, e);
}
var ar = (e) => {
  const { present: t, children: r } = e, n = Uc(t), i = typeof r == "function" ? r({ present: n.isPresent }) : g.Children.only(r), s = Ke(n.ref, qc(i));
  return typeof r == "function" || n.isPresent ? g.cloneElement(i, { ref: s }) : null;
};
ar.displayName = "Presence";
function Uc(e) {
  const [t, r] = g.useState(), n = g.useRef(null), i = g.useRef(e), s = g.useRef("none"), a = e ? "mounted" : "unmounted", [l, u] = Gc(a, {
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
  return g.useEffect(() => {
    const c = Lt(n.current);
    s.current = l === "mounted" ? c : "none";
  }, [l]), St(() => {
    const c = n.current, p = i.current;
    if (p !== e) {
      const y = s.current, h = Lt(c);
      e ? u("MOUNT") : h === "none" || (c == null ? void 0 : c.display) === "none" ? u("UNMOUNT") : u(p && y !== h ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, u]), St(() => {
    if (t) {
      let c;
      const p = t.ownerDocument.defaultView ?? window, d = (h) => {
        const m = Lt(n.current).includes(CSS.escape(h.animationName));
        if (h.target === t && m && (u("ANIMATION_END"), !i.current)) {
          const w = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
          });
        }
      }, y = (h) => {
        h.target === t && (s.current = Lt(n.current));
      };
      return t.addEventListener("animationstart", y), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        p.clearTimeout(c), t.removeEventListener("animationstart", y), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(l),
    ref: g.useCallback((c) => {
      n.current = c ? getComputedStyle(c) : null, r(c);
    }, [])
  };
}
function Lt(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function qc(e) {
  var n, i;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var kr = 0;
function Yc() {
  g.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? li()), document.body.insertAdjacentElement("beforeend", e[1] ?? li()), kr++, () => {
      kr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), kr--;
    };
  }, []);
}
function li() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var fe = function() {
  return fe = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
    }
    return t;
  }, fe.apply(this, arguments);
};
function ms(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function Jc(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, s; n < i; n++)
    (s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
  return e.concat(s || Array.prototype.slice.call(t));
}
var Gt = "right-scroll-bar-position", Ut = "width-before-scroll-bar", Zc = "with-scroll-bars-hidden", Xc = "--removed-body-scroll-bar-size";
function Sr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Qc(e, t) {
  var r = ae(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var i = r.value;
          i !== n && (r.value = n, r.callback(n, i));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var eu = typeof window < "u" ? g.useLayoutEffect : g.useEffect, ci = /* @__PURE__ */ new WeakMap();
function tu(e, t) {
  var r = Qc(null, function(n) {
    return e.forEach(function(i) {
      return Sr(i, n);
    });
  });
  return eu(function() {
    var n = ci.get(r);
    if (n) {
      var i = new Set(n), s = new Set(e), a = r.current;
      i.forEach(function(l) {
        s.has(l) || Sr(l, null);
      }), s.forEach(function(l) {
        i.has(l) || Sr(l, a);
      });
    }
    ci.set(r, e);
  }, [e]), r;
}
function ru(e) {
  return e;
}
function nu(e, t) {
  t === void 0 && (t = ru);
  var r = [], n = !1, i = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(s) {
      var a = t(s, n);
      return r.push(a), function() {
        r = r.filter(function(l) {
          return l !== a;
        });
      };
    },
    assignSyncMedium: function(s) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(s);
      }
      r = {
        push: function(l) {
          return s(l);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(s) {
      n = !0;
      var a = [];
      if (r.length) {
        var l = r;
        r = [], l.forEach(s), a = r;
      }
      var u = function() {
        var p = a;
        a = [], p.forEach(s);
      }, c = function() {
        return Promise.resolve().then(u);
      };
      c(), r = {
        push: function(p) {
          a.push(p), c();
        },
        filter: function(p) {
          return a = a.filter(p), r;
        }
      };
    }
  };
  return i;
}
function iu(e) {
  e === void 0 && (e = {});
  var t = nu(null);
  return t.options = fe({ async: !0, ssr: !1 }, e), t;
}
var vs = function(e) {
  var t = e.sideCar, r = ms(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return g.createElement(n, fe({}, r));
};
vs.isSideCarExport = !0;
function su(e, t) {
  return e.useMedium(t), vs;
}
var ys = iu(), Pr = function() {
}, or = g.forwardRef(function(e, t) {
  var r = g.useRef(null), n = g.useState({
    onScrollCapture: Pr,
    onWheelCapture: Pr,
    onTouchMoveCapture: Pr
  }), i = n[0], s = n[1], a = e.forwardProps, l = e.children, u = e.className, c = e.removeScrollBar, p = e.enabled, d = e.shards, y = e.sideCar, h = e.noRelative, v = e.noIsolation, m = e.inert, w = e.allowPinchZoom, I = e.as, x = I === void 0 ? "div" : I, N = e.gapMode, j = ms(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), k = y, L = tu([r, t]), O = fe(fe({}, j), i);
  return g.createElement(
    g.Fragment,
    null,
    p && g.createElement(k, { sideCar: ys, removeScrollBar: c, shards: d, noRelative: h, noIsolation: v, inert: m, setCallbacks: s, allowPinchZoom: !!w, lockRef: r, gapMode: N }),
    a ? g.cloneElement(g.Children.only(l), fe(fe({}, O), { ref: L })) : g.createElement(x, fe({}, O, { className: u, ref: L }), l)
  );
});
or.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
or.classNames = {
  fullWidth: Ut,
  zeroRight: Gt
};
var au = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function ou() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = au();
  return t && e.setAttribute("nonce", t), e;
}
function lu(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function cu(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var uu = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = ou()) && (lu(t, r), cu(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, du = function() {
  var e = uu();
  return function(t, r) {
    g.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, xs = function() {
  var e = du(), t = function(r) {
    var n = r.styles, i = r.dynamic;
    return e(n, i), null;
  };
  return t;
}, pu = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, jr = function(e) {
  return parseInt(e || "", 10) || 0;
}, fu = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [jr(r), jr(n), jr(i)];
}, hu = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return pu;
  var t = fu(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, gu = xs(), et = "data-scroll-locked", mu = function(e, t, r, n) {
  var i = e.left, s = e.top, a = e.right, l = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(Zc, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(l, "px ").concat(n, `;
  }
  body[`).concat(et, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(s, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(l, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Gt, ` {
    right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(Ut, ` {
    margin-right: `).concat(l, "px ").concat(n, `;
  }
  
  .`).concat(Gt, " .").concat(Gt, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Ut, " .").concat(Ut, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(et, `] {
    `).concat(Xc, ": ").concat(l, `px;
  }
`);
}, ui = function() {
  var e = parseInt(document.body.getAttribute(et) || "0", 10);
  return isFinite(e) ? e : 0;
}, vu = function() {
  g.useEffect(function() {
    return document.body.setAttribute(et, (ui() + 1).toString()), function() {
      var e = ui() - 1;
      e <= 0 ? document.body.removeAttribute(et) : document.body.setAttribute(et, e.toString());
    };
  }, []);
}, yu = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, i = n === void 0 ? "margin" : n;
  vu();
  var s = g.useMemo(function() {
    return hu(i);
  }, [i]);
  return g.createElement(gu, { styles: mu(s, !t, i, r ? "" : "!important") });
}, Vr = !1;
if (typeof window < "u")
  try {
    var Tt = Object.defineProperty({}, "passive", {
      get: function() {
        return Vr = !0, !0;
      }
    });
    window.addEventListener("test", Tt, Tt), window.removeEventListener("test", Tt, Tt);
  } catch {
    Vr = !1;
  }
var Ue = Vr ? { passive: !1 } : !1, xu = function(e) {
  return e.tagName === "TEXTAREA";
}, bs = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !xu(e) && r[t] === "visible")
  );
}, bu = function(e) {
  return bs(e, "overflowY");
}, _u = function(e) {
  return bs(e, "overflowX");
}, di = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var i = _s(e, n);
    if (i) {
      var s = ws(e, n), a = s[1], l = s[2];
      if (a > l)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, wu = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, ku = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, _s = function(e, t) {
  return e === "v" ? bu(t) : _u(t);
}, ws = function(e, t) {
  return e === "v" ? wu(t) : ku(t);
}, Su = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Pu = function(e, t, r, n, i) {
  var s = Su(e, window.getComputedStyle(t).direction), a = s * n, l = r.target, u = t.contains(l), c = !1, p = a > 0, d = 0, y = 0;
  do {
    if (!l)
      break;
    var h = ws(e, l), v = h[0], m = h[1], w = h[2], I = m - w - s * v;
    (v || I) && _s(e, l) && (d += I, y += v);
    var x = l.parentNode;
    l = x && x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? x.host : x;
  } while (
    // portaled content
    !u && l !== document.body || // self content
    u && (t.contains(l) || t === l)
  );
  return (p && Math.abs(d) < 1 || !p && Math.abs(y) < 1) && (c = !0), c;
}, Rt = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, pi = function(e) {
  return [e.deltaX, e.deltaY];
}, fi = function(e) {
  return e && "current" in e ? e.current : e;
}, ju = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Cu = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Eu = 0, qe = [];
function Ou(e) {
  var t = g.useRef([]), r = g.useRef([0, 0]), n = g.useRef(), i = g.useState(Eu++)[0], s = g.useState(xs)[0], a = g.useRef(e);
  g.useEffect(function() {
    a.current = e;
  }, [e]), g.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var m = Jc([e.lockRef.current], (e.shards || []).map(fi), !0).filter(Boolean);
      return m.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), m.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = g.useCallback(function(m, w) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !a.current.allowPinchZoom;
    var I = Rt(m), x = r.current, N = "deltaX" in m ? m.deltaX : x[0] - I[0], j = "deltaY" in m ? m.deltaY : x[1] - I[1], k, L = m.target, O = Math.abs(N) > Math.abs(j) ? "h" : "v";
    if ("touches" in m && O === "h" && L.type === "range")
      return !1;
    var S = di(O, L);
    if (!S)
      return !0;
    if (S ? k = O : (k = O === "v" ? "h" : "v", S = di(O, L)), !S)
      return !1;
    if (!n.current && "changedTouches" in m && (N || j) && (n.current = k), !k)
      return !0;
    var T = n.current || k;
    return Pu(T, w, m, T === "h" ? N : j);
  }, []), u = g.useCallback(function(m) {
    var w = m;
    if (!(!qe.length || qe[qe.length - 1] !== s)) {
      var I = "deltaY" in w ? pi(w) : Rt(w), x = t.current.filter(function(k) {
        return k.name === w.type && (k.target === w.target || w.target === k.shadowParent) && ju(k.delta, I);
      })[0];
      if (x && x.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!x) {
        var N = (a.current.shards || []).map(fi).filter(Boolean).filter(function(k) {
          return k.contains(w.target);
        }), j = N.length > 0 ? l(w, N[0]) : !a.current.noIsolation;
        j && w.cancelable && w.preventDefault();
      }
    }
  }, []), c = g.useCallback(function(m, w, I, x) {
    var N = { name: m, delta: w, target: I, should: x, shadowParent: Iu(I) };
    t.current.push(N), setTimeout(function() {
      t.current = t.current.filter(function(j) {
        return j !== N;
      });
    }, 1);
  }, []), p = g.useCallback(function(m) {
    r.current = Rt(m), n.current = void 0;
  }, []), d = g.useCallback(function(m) {
    c(m.type, pi(m), m.target, l(m, e.lockRef.current));
  }, []), y = g.useCallback(function(m) {
    c(m.type, Rt(m), m.target, l(m, e.lockRef.current));
  }, []);
  g.useEffect(function() {
    return qe.push(s), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: y
    }), document.addEventListener("wheel", u, Ue), document.addEventListener("touchmove", u, Ue), document.addEventListener("touchstart", p, Ue), function() {
      qe = qe.filter(function(m) {
        return m !== s;
      }), document.removeEventListener("wheel", u, Ue), document.removeEventListener("touchmove", u, Ue), document.removeEventListener("touchstart", p, Ue);
    };
  }, []);
  var h = e.removeScrollBar, v = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    v ? g.createElement(s, { styles: Cu(i) }) : null,
    h ? g.createElement(yu, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Iu(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Nu = su(ys, Ou);
var ks = g.forwardRef(function(e, t) {
  return g.createElement(or, fe({}, e, { ref: t, sideCar: Nu }));
});
ks.classNames = or.classNames;
var zu = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Ye = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), $t = {}, Cr = 0, Ss = function(e) {
  return e && (e.host || Ss(e.parentNode));
}, Au = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Ss(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Lu = function(e, t, r, n) {
  var i = Au(t, Array.isArray(e) ? e : [e]);
  $t[r] || ($t[r] = /* @__PURE__ */ new WeakMap());
  var s = $t[r], a = [], l = /* @__PURE__ */ new Set(), u = new Set(i), c = function(d) {
    !d || l.has(d) || (l.add(d), c(d.parentNode));
  };
  i.forEach(c);
  var p = function(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, function(y) {
      if (l.has(y))
        p(y);
      else
        try {
          var h = y.getAttribute(n), v = h !== null && h !== "false", m = (Ye.get(y) || 0) + 1, w = (s.get(y) || 0) + 1;
          Ye.set(y, m), s.set(y, w), a.push(y), m === 1 && v && Mt.set(y, !0), w === 1 && y.setAttribute(r, "true"), v || y.setAttribute(n, "true");
        } catch (I) {
          console.error("aria-hidden: cannot operate on ", y, I);
        }
    });
  };
  return p(t), l.clear(), Cr++, function() {
    a.forEach(function(d) {
      var y = Ye.get(d) - 1, h = s.get(d) - 1;
      Ye.set(d, y), s.set(d, h), y || (Mt.has(d) || d.removeAttribute(n), Mt.delete(d)), h || d.removeAttribute(r);
    }), Cr--, Cr || (Ye = /* @__PURE__ */ new WeakMap(), Ye = /* @__PURE__ */ new WeakMap(), Mt = /* @__PURE__ */ new WeakMap(), $t = {});
  };
}, Tu = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), i = zu(e);
  return i ? (n.push.apply(n, Array.from(i.querySelectorAll("[aria-live], script"))), Lu(n, i, r, "aria-hidden")) : function() {
    return null;
  };
}, lr = "Dialog", [Ps, cf] = gc(lr), [Ru, de] = Ps(lr), js = (e) => {
  const {
    __scopeDialog: t,
    children: r,
    open: n,
    defaultOpen: i,
    onOpenChange: s,
    modal: a = !0
  } = e, l = g.useRef(null), u = g.useRef(null), [c, p] = bc({
    prop: n,
    defaultProp: i ?? !1,
    onChange: s,
    caller: lr
  });
  return /* @__PURE__ */ o.jsx(
    Ru,
    {
      scope: t,
      triggerRef: l,
      contentRef: u,
      contentId: ye(),
      titleId: ye(),
      descriptionId: ye(),
      open: c,
      onOpenChange: p,
      onOpenToggle: g.useCallback(() => p((d) => !d), [p]),
      modal: a,
      children: r
    }
  );
};
js.displayName = lr;
var Cs = "DialogTrigger", Mu = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = de(Cs, r), s = Ke(t, i.triggerRef);
    return /* @__PURE__ */ o.jsx(
      ie.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": xn(i.open),
        ...n,
        ref: s,
        onClick: Pe(e.onClick, i.onOpenToggle)
      }
    );
  }
);
Mu.displayName = Cs;
var vn = "DialogPortal", [$u, Es] = Ps(vn, {
  forceMount: void 0
}), Os = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: i } = e, s = de(vn, t);
  return /* @__PURE__ */ o.jsx($u, { scope: t, forceMount: r, children: g.Children.map(n, (a) => /* @__PURE__ */ o.jsx(ar, { present: r || s.open, children: /* @__PURE__ */ o.jsx(gs, { asChild: !0, container: i, children: a }) })) });
};
Os.displayName = vn;
var Qt = "DialogOverlay", Is = g.forwardRef(
  (e, t) => {
    const r = Es(Qt, e.__scopeDialog), { forceMount: n = r.forceMount, ...i } = e, s = de(Qt, e.__scopeDialog);
    return s.modal ? /* @__PURE__ */ o.jsx(ar, { present: n || s.open, children: /* @__PURE__ */ o.jsx(Fu, { ...i, ref: t }) }) : null;
  }
);
Is.displayName = Qt;
var Du = /* @__PURE__ */ cs("DialogOverlay.RemoveScroll"), Fu = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = de(Qt, r);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ o.jsx(ks, { as: Du, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ o.jsx(
        ie.div,
        {
          "data-state": xn(i.open),
          ...n,
          ref: t,
          style: { pointerEvents: "auto", ...n.style }
        }
      ) })
    );
  }
), $e = "DialogContent", Ns = g.forwardRef(
  (e, t) => {
    const r = Es($e, e.__scopeDialog), { forceMount: n = r.forceMount, ...i } = e, s = de($e, e.__scopeDialog);
    return /* @__PURE__ */ o.jsx(ar, { present: n || s.open, children: s.modal ? /* @__PURE__ */ o.jsx(Bu, { ...i, ref: t }) : /* @__PURE__ */ o.jsx(Wu, { ...i, ref: t }) });
  }
);
Ns.displayName = $e;
var Bu = g.forwardRef(
  (e, t) => {
    const r = de($e, e.__scopeDialog), n = g.useRef(null), i = Ke(t, r.contentRef, n);
    return g.useEffect(() => {
      const s = n.current;
      if (s) return Tu(s);
    }, []), /* @__PURE__ */ o.jsx(
      zs,
      {
        ...e,
        ref: i,
        trapFocus: r.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Pe(e.onCloseAutoFocus, (s) => {
          var a;
          s.preventDefault(), (a = r.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Pe(e.onPointerDownOutside, (s) => {
          const a = s.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || l) && s.preventDefault();
        }),
        onFocusOutside: Pe(
          e.onFocusOutside,
          (s) => s.preventDefault()
        )
      }
    );
  }
), Wu = g.forwardRef(
  (e, t) => {
    const r = de($e, e.__scopeDialog), n = g.useRef(!1), i = g.useRef(!1);
    return /* @__PURE__ */ o.jsx(
      zs,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (s) => {
          var a, l;
          (a = e.onCloseAutoFocus) == null || a.call(e, s), s.defaultPrevented || (n.current || (l = r.triggerRef.current) == null || l.focus(), s.preventDefault()), n.current = !1, i.current = !1;
        },
        onInteractOutside: (s) => {
          var u, c;
          (u = e.onInteractOutside) == null || u.call(e, s), s.defaultPrevented || (n.current = !0, s.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const a = s.target;
          ((c = r.triggerRef.current) == null ? void 0 : c.contains(a)) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && i.current && s.preventDefault();
        }
      }
    );
  }
), zs = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: i, onCloseAutoFocus: s, ...a } = e, l = de($e, r), u = g.useRef(null), c = Ke(t, u);
    return Yc(), /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
      /* @__PURE__ */ o.jsx(
        fs,
        {
          asChild: !0,
          loop: !0,
          trapped: n,
          onMountAutoFocus: i,
          onUnmountAutoFocus: s,
          children: /* @__PURE__ */ o.jsx(
            ds,
            {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": xn(l.open),
              ...a,
              ref: c,
              onDismiss: () => l.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
        /* @__PURE__ */ o.jsx(Ku, { titleId: l.titleId }),
        /* @__PURE__ */ o.jsx(Vu, { contentRef: u, descriptionId: l.descriptionId })
      ] })
    ] });
  }
), yn = "DialogTitle", As = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = de(yn, r);
    return /* @__PURE__ */ o.jsx(ie.h2, { id: i.titleId, ...n, ref: t });
  }
);
As.displayName = yn;
var Ls = "DialogDescription", Ts = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = de(Ls, r);
    return /* @__PURE__ */ o.jsx(ie.p, { id: i.descriptionId, ...n, ref: t });
  }
);
Ts.displayName = Ls;
var Rs = "DialogClose", Ms = g.forwardRef(
  (e, t) => {
    const { __scopeDialog: r, ...n } = e, i = de(Rs, r);
    return /* @__PURE__ */ o.jsx(
      ie.button,
      {
        type: "button",
        ...n,
        ref: t,
        onClick: Pe(e.onClick, () => i.onOpenChange(!1))
      }
    );
  }
);
Ms.displayName = Rs;
function xn(e) {
  return e ? "open" : "closed";
}
var $s = "DialogTitleWarning", [uf, Ds] = hc($s, {
  contentName: $e,
  titleName: yn,
  docsSlug: "dialog"
}), Ku = ({ titleId: e }) => {
  const t = Ds($s), r = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return g.useEffect(() => {
    e && (document.getElementById(e) || console.error(r));
  }, [r, e]), null;
}, Hu = "DialogDescriptionWarning", Vu = ({ contentRef: e, descriptionId: t }) => {
  const n = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${Ds(Hu).contentName}}.`;
  return g.useEffect(() => {
    var s;
    const i = (s = e.current) == null ? void 0 : s.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(n));
  }, [n, e, t]), null;
}, Fs = js, Bs = Os, Ws = Is, Ks = Ns, Gu = As, Uu = Ts, qu = Ms, vt = '[cmdk-group=""]', Er = '[cmdk-group-items=""]', Yu = '[cmdk-group-heading=""]', Hs = '[cmdk-item=""]', hi = `${Hs}:not([aria-disabled="true"])`, Gr = "cmdk-item-select", Je = "data-value", Ju = (e, t, r) => fc(e, t, r), Vs = g.createContext(void 0), Ct = () => g.useContext(Vs), Gs = g.createContext(void 0), bn = () => g.useContext(Gs), Us = g.createContext(void 0), qs = g.forwardRef((e, t) => {
  let r = Ze(() => {
    var b, C;
    return { search: "", value: (C = (b = e.value) != null ? b : e.defaultValue) != null ? C : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), n = Ze(() => /* @__PURE__ */ new Set()), i = Ze(() => /* @__PURE__ */ new Map()), s = Ze(() => /* @__PURE__ */ new Map()), a = Ze(() => /* @__PURE__ */ new Set()), l = Ys(e), { label: u, children: c, value: p, onValueChange: d, filter: y, shouldFilter: h, loop: v, disablePointerSelection: m = !1, vimBindings: w = !0, ...I } = e, x = ye(), N = ye(), j = ye(), k = g.useRef(null), L = od();
  De(() => {
    if (p !== void 0) {
      let b = p.trim();
      r.current.value = b, O.emit();
    }
  }, [p]), De(() => {
    L(6, R);
  }, []);
  let O = g.useMemo(() => ({ subscribe: (b) => (a.current.add(b), () => a.current.delete(b)), snapshot: () => r.current, setState: (b, C, z) => {
    var A, K, $, F;
    if (!Object.is(r.current[b], C)) {
      if (r.current[b] = C, b === "search") G(), E(), L(1, V);
      else if (b === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let Q = document.getElementById(j);
          Q ? Q.focus() : (A = document.getElementById(x)) == null || A.focus();
        }
        if (L(7, () => {
          var Q;
          r.current.selectedItemId = (Q = H()) == null ? void 0 : Q.id, O.emit();
        }), z || L(5, R), ((K = l.current) == null ? void 0 : K.value) !== void 0) {
          let Q = C ?? "";
          (F = ($ = l.current).onValueChange) == null || F.call($, Q);
          return;
        }
      }
      O.emit();
    }
  }, emit: () => {
    a.current.forEach((b) => b());
  } }), []), S = g.useMemo(() => ({ value: (b, C, z) => {
    var A;
    C !== ((A = s.current.get(b)) == null ? void 0 : A.value) && (s.current.set(b, { value: C, keywords: z }), r.current.filtered.items.set(b, T(C, z)), L(2, () => {
      E(), O.emit();
    }));
  }, item: (b, C) => (n.current.add(b), C && (i.current.has(C) ? i.current.get(C).add(b) : i.current.set(C, /* @__PURE__ */ new Set([b]))), L(3, () => {
    G(), E(), r.current.value || V(), O.emit();
  }), () => {
    s.current.delete(b), n.current.delete(b), r.current.filtered.items.delete(b);
    let z = H();
    L(4, () => {
      G(), (z == null ? void 0 : z.getAttribute("id")) === b && V(), O.emit();
    });
  }), group: (b) => (i.current.has(b) || i.current.set(b, /* @__PURE__ */ new Set()), () => {
    s.current.delete(b), i.current.delete(b);
  }), filter: () => l.current.shouldFilter, label: u || e["aria-label"], getDisablePointerSelection: () => l.current.disablePointerSelection, listId: x, inputId: j, labelId: N, listInnerRef: k }), []);
  function T(b, C) {
    var z, A;
    let K = (A = (z = l.current) == null ? void 0 : z.filter) != null ? A : Ju;
    return b ? K(b, r.current.search, C) : 0;
  }
  function E() {
    if (!r.current.search || l.current.shouldFilter === !1) return;
    let b = r.current.filtered.items, C = [];
    r.current.filtered.groups.forEach((A) => {
      let K = i.current.get(A), $ = 0;
      K.forEach((F) => {
        let Q = b.get(F);
        $ = Math.max(Q, $);
      }), C.push([A, $]);
    });
    let z = k.current;
    M().sort((A, K) => {
      var $, F;
      let Q = A.getAttribute("id"), ne = K.getAttribute("id");
      return (($ = b.get(ne)) != null ? $ : 0) - ((F = b.get(Q)) != null ? F : 0);
    }).forEach((A) => {
      let K = A.closest(Er);
      K ? K.appendChild(A.parentElement === K ? A : A.closest(`${Er} > *`)) : z.appendChild(A.parentElement === z ? A : A.closest(`${Er} > *`));
    }), C.sort((A, K) => K[1] - A[1]).forEach((A) => {
      var K;
      let $ = (K = k.current) == null ? void 0 : K.querySelector(`${vt}[${Je}="${encodeURIComponent(A[0])}"]`);
      $ == null || $.parentElement.appendChild($);
    });
  }
  function V() {
    let b = M().find((z) => z.getAttribute("aria-disabled") !== "true"), C = b == null ? void 0 : b.getAttribute(Je);
    O.setState("value", C || void 0);
  }
  function G() {
    var b, C, z, A;
    if (!r.current.search || l.current.shouldFilter === !1) {
      r.current.filtered.count = n.current.size;
      return;
    }
    r.current.filtered.groups = /* @__PURE__ */ new Set();
    let K = 0;
    for (let $ of n.current) {
      let F = (C = (b = s.current.get($)) == null ? void 0 : b.value) != null ? C : "", Q = (A = (z = s.current.get($)) == null ? void 0 : z.keywords) != null ? A : [], ne = T(F, Q);
      r.current.filtered.items.set($, ne), ne > 0 && K++;
    }
    for (let [$, F] of i.current) for (let Q of F) if (r.current.filtered.items.get(Q) > 0) {
      r.current.filtered.groups.add($);
      break;
    }
    r.current.filtered.count = K;
  }
  function R() {
    var b, C, z;
    let A = H();
    A && (((b = A.parentElement) == null ? void 0 : b.firstChild) === A && ((z = (C = A.closest(vt)) == null ? void 0 : C.querySelector(Yu)) == null || z.scrollIntoView({ block: "nearest" })), A.scrollIntoView({ block: "nearest" }));
  }
  function H() {
    var b;
    return (b = k.current) == null ? void 0 : b.querySelector(`${Hs}[aria-selected="true"]`);
  }
  function M() {
    var b;
    return Array.from(((b = k.current) == null ? void 0 : b.querySelectorAll(hi)) || []);
  }
  function Y(b) {
    let C = M()[b];
    C && O.setState("value", C.getAttribute(Je));
  }
  function Z(b) {
    var C;
    let z = H(), A = M(), K = A.findIndex((F) => F === z), $ = A[K + b];
    (C = l.current) != null && C.loop && ($ = K + b < 0 ? A[A.length - 1] : K + b === A.length ? A[0] : A[K + b]), $ && O.setState("value", $.getAttribute(Je));
  }
  function D(b) {
    let C = H(), z = C == null ? void 0 : C.closest(vt), A;
    for (; z && !A; ) z = b > 0 ? sd(z, vt) : ad(z, vt), A = z == null ? void 0 : z.querySelector(hi);
    A ? O.setState("value", A.getAttribute(Je)) : Z(b);
  }
  let _ = () => Y(M().length - 1), f = (b) => {
    b.preventDefault(), b.metaKey ? _() : b.altKey ? D(1) : Z(1);
  }, P = (b) => {
    b.preventDefault(), b.metaKey ? Y(0) : b.altKey ? D(-1) : Z(-1);
  };
  return g.createElement(ie.div, { ref: t, tabIndex: -1, ...I, "cmdk-root": "", onKeyDown: (b) => {
    var C;
    (C = I.onKeyDown) == null || C.call(I, b);
    let z = b.nativeEvent.isComposing || b.keyCode === 229;
    if (!(b.defaultPrevented || z)) switch (b.key) {
      case "n":
      case "j": {
        w && b.ctrlKey && f(b);
        break;
      }
      case "ArrowDown": {
        f(b);
        break;
      }
      case "p":
      case "k": {
        w && b.ctrlKey && P(b);
        break;
      }
      case "ArrowUp": {
        P(b);
        break;
      }
      case "Home": {
        b.preventDefault(), Y(0);
        break;
      }
      case "End": {
        b.preventDefault(), _();
        break;
      }
      case "Enter": {
        b.preventDefault();
        let A = H();
        if (A) {
          let K = new Event(Gr);
          A.dispatchEvent(K);
        }
      }
    }
  } }, g.createElement("label", { "cmdk-label": "", htmlFor: S.inputId, id: S.labelId, style: cd }, u), cr(e, (b) => g.createElement(Gs.Provider, { value: O }, g.createElement(Vs.Provider, { value: S }, b))));
}), Zu = g.forwardRef((e, t) => {
  var r, n;
  let i = ye(), s = g.useRef(null), a = g.useContext(Us), l = Ct(), u = Ys(e), c = (n = (r = u.current) == null ? void 0 : r.forceMount) != null ? n : a == null ? void 0 : a.forceMount;
  De(() => {
    if (!c) return l.item(i, a == null ? void 0 : a.id);
  }, [c]);
  let p = Js(i, s, [e.value, e.children, s], e.keywords), d = bn(), y = Ce((L) => L.value && L.value === p.current), h = Ce((L) => c || l.filter() === !1 ? !0 : L.search ? L.filtered.items.get(i) > 0 : !0);
  g.useEffect(() => {
    let L = s.current;
    if (!(!L || e.disabled)) return L.addEventListener(Gr, v), () => L.removeEventListener(Gr, v);
  }, [h, e.onSelect, e.disabled]);
  function v() {
    var L, O;
    m(), (O = (L = u.current).onSelect) == null || O.call(L, p.current);
  }
  function m() {
    d.setState("value", p.current, !0);
  }
  if (!h) return null;
  let { disabled: w, value: I, onSelect: x, forceMount: N, keywords: j, ...k } = e;
  return g.createElement(ie.div, { ref: Me(s, t), ...k, id: i, "cmdk-item": "", role: "option", "aria-disabled": !!w, "aria-selected": !!y, "data-disabled": !!w, "data-selected": !!y, onPointerMove: w || l.getDisablePointerSelection() ? void 0 : m, onClick: w ? void 0 : v }, e.children);
}), Xu = g.forwardRef((e, t) => {
  let { heading: r, children: n, forceMount: i, ...s } = e, a = ye(), l = g.useRef(null), u = g.useRef(null), c = ye(), p = Ct(), d = Ce((h) => i || p.filter() === !1 ? !0 : h.search ? h.filtered.groups.has(a) : !0);
  De(() => p.group(a), []), Js(a, l, [e.value, e.heading, u]);
  let y = g.useMemo(() => ({ id: a, forceMount: i }), [i]);
  return g.createElement(ie.div, { ref: Me(l, t), ...s, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, r && g.createElement("div", { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, r), cr(e, (h) => g.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": r ? c : void 0 }, g.createElement(Us.Provider, { value: y }, h))));
}), Qu = g.forwardRef((e, t) => {
  let { alwaysRender: r, ...n } = e, i = g.useRef(null), s = Ce((a) => !a.search);
  return !r && !s ? null : g.createElement(ie.div, { ref: Me(i, t), ...n, "cmdk-separator": "", role: "separator" });
}), ed = g.forwardRef((e, t) => {
  let { onValueChange: r, ...n } = e, i = e.value != null, s = bn(), a = Ce((c) => c.search), l = Ce((c) => c.selectedItemId), u = Ct();
  return g.useEffect(() => {
    e.value != null && s.setState("search", e.value);
  }, [e.value]), g.createElement(ie.input, { ref: t, ...n, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": u.listId, "aria-labelledby": u.labelId, "aria-activedescendant": l, id: u.inputId, type: "text", value: i ? e.value : a, onChange: (c) => {
    i || s.setState("search", c.target.value), r == null || r(c.target.value);
  } });
}), td = g.forwardRef((e, t) => {
  let { children: r, label: n = "Suggestions", ...i } = e, s = g.useRef(null), a = g.useRef(null), l = Ce((c) => c.selectedItemId), u = Ct();
  return g.useEffect(() => {
    if (a.current && s.current) {
      let c = a.current, p = s.current, d, y = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let h = c.offsetHeight;
          p.style.setProperty("--cmdk-list-height", h.toFixed(1) + "px");
        });
      });
      return y.observe(c), () => {
        cancelAnimationFrame(d), y.unobserve(c);
      };
    }
  }, []), g.createElement(ie.div, { ref: Me(s, t), ...i, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": l, "aria-label": n, id: u.listId }, cr(e, (c) => g.createElement("div", { ref: Me(a, u.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), rd = g.forwardRef((e, t) => {
  let { open: r, onOpenChange: n, overlayClassName: i, contentClassName: s, container: a, ...l } = e;
  return g.createElement(Fs, { open: r, onOpenChange: n }, g.createElement(Bs, { container: a }, g.createElement(Ws, { "cmdk-overlay": "", className: i }), g.createElement(Ks, { "aria-label": e.label, "cmdk-dialog": "", className: s }, g.createElement(qs, { ref: t, ...l }))));
}), nd = g.forwardRef((e, t) => Ce((r) => r.filtered.count === 0) ? g.createElement(ie.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), id = g.forwardRef((e, t) => {
  let { progress: r, children: n, label: i = "Loading...", ...s } = e;
  return g.createElement(ie.div, { ref: t, ...s, "cmdk-loading": "", role: "progressbar", "aria-valuenow": r, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": i }, cr(e, (a) => g.createElement("div", { "aria-hidden": !0 }, a)));
}), He = Object.assign(qs, { List: td, Item: Zu, Input: ed, Group: Xu, Separator: Qu, Dialog: rd, Empty: nd, Loading: id });
function sd(e, t) {
  let r = e.nextElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.nextElementSibling;
  }
}
function ad(e, t) {
  let r = e.previousElementSibling;
  for (; r; ) {
    if (r.matches(t)) return r;
    r = r.previousElementSibling;
  }
}
function Ys(e) {
  let t = g.useRef(e);
  return De(() => {
    t.current = e;
  }), t;
}
var De = typeof window > "u" ? g.useEffect : g.useLayoutEffect;
function Ze(e) {
  let t = g.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ce(e) {
  let t = bn(), r = () => e(t.snapshot());
  return g.useSyncExternalStore(t.subscribe, r, r);
}
function Js(e, t, r, n = []) {
  let i = g.useRef(), s = Ct();
  return De(() => {
    var a;
    let l = (() => {
      var c;
      for (let p of r) {
        if (typeof p == "string") return p.trim();
        if (typeof p == "object" && "current" in p) return p.current ? (c = p.current.textContent) == null ? void 0 : c.trim() : i.current;
      }
    })(), u = n.map((c) => c.trim());
    s.value(e, l, u), (a = t.current) == null || a.setAttribute(Je, l), i.current = l;
  }), i;
}
var od = () => {
  let [e, t] = g.useState(), r = Ze(() => /* @__PURE__ */ new Map());
  return De(() => {
    r.current.forEach((n) => n()), r.current = /* @__PURE__ */ new Map();
  }, [e]), (n, i) => {
    r.current.set(n, i), t({});
  };
};
function ld(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function cr({ asChild: e, children: t }, r) {
  return e && g.isValidElement(t) ? g.cloneElement(ld(t), { ref: t.ref }, r(t.props.children)) : r(t);
}
var cd = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function ud({
  ...e
}) {
  return /* @__PURE__ */ o.jsx(Fs, { "data-slot": "dialog", ...e });
}
function dd({
  ...e
}) {
  return /* @__PURE__ */ o.jsx(Bs, { "data-slot": "dialog-portal", ...e });
}
function Zs({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ o.jsx(
    Ws,
    {
      "data-slot": "dialog-overlay",
      className: re(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  ) });
}
function pd({
  className: e,
  children: t,
  showCloseButton: r = !0,
  ...n
}) {
  return /* @__PURE__ */ o.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ o.jsxs(dd, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ o.jsx(Zs, {}),
    /* @__PURE__ */ o.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ o.jsxs(
      Ks,
      {
        "data-slot": "dialog-content",
        className: re(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg md:max-w-xl lg:max-w-4xl",
          e
        ),
        ...n,
        children: [
          t,
          r && /* @__PURE__ */ o.jsxs(
            qu,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ o.jsx(ka, {}),
                /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    ) })
  ] }) });
}
function fd({ className: e, ...t }) {
  return /* @__PURE__ */ o.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: re("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function hd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o.jsx(
    Gu,
    {
      "data-slot": "dialog-title",
      className: re("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function gd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o.jsx(
    Uu,
    {
      "data-slot": "dialog-description",
      className: re("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function md({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o.jsx(
    He,
    {
      "data-slot": "command",
      className: re(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function vd({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: r,
  className: n,
  showCloseButton: i = !0,
  ...s
}) {
  return /* @__PURE__ */ o.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ o.jsxs(ud, { ...s, children: [
    /* @__PURE__ */ o.jsx(Zs, { className: "backdrop-blur-xs" }),
    /* @__PURE__ */ o.jsxs(fd, { className: "sr-only ui-lib", children: [
      /* @__PURE__ */ o.jsx(hd, { children: e }),
      /* @__PURE__ */ o.jsx(gd, { children: t })
    ] }),
    /* @__PURE__ */ o.jsx(
      pd,
      {
        className: re("overflow-hidden p-0", n),
        showCloseButton: i,
        children: /* @__PURE__ */ o.jsx(md, { shouldFilter: !1, className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: r })
      }
    )
  ] }) });
}
function yd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ o.jsx(Sa, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ o.jsx(
          He.Input,
          {
            "data-slot": "command-input",
            className: re(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              e
            ),
            ...t
          }
        )
      ]
    }
  );
}
function xd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o.jsx(
    He.List,
    {
      "data-slot": "command-list",
      className: re(
        "max-h-[calc(100vh-600px)] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...t
    }
  );
}
function bd({
  ...e
}) {
  return /* @__PURE__ */ o.jsx(
    He.Loading,
    {
      "data-slot": "command-loading",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function _d({
  ...e
}) {
  return /* @__PURE__ */ o.jsx(
    He.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function wd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o.jsx(
    He.Group,
    {
      "data-slot": "command-group",
      className: re(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function kd({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o.jsx(
    He.Item,
    {
      "data-slot": "command-item",
      className: re(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function df({ currentLang: e = "en", className: t, blogUrl: r, webUrl: n }) {
  const [i, s] = g.useState(!1);
  g.useEffect(() => {
    const h = (v) => {
      v.key === "k" && (v.metaKey || v.ctrlKey) && (v.preventDefault(), s((m) => !m));
    };
    return document.addEventListener("keydown", h), () => document.removeEventListener("keydown", h);
  }, []);
  const { t: a } = nr(), {
    query: l,
    setQuery: u,
    results: c,
    isLoading: p,
    handleResultClick: d
  } = os({ currentLang: e, blogUrl: r, webUrl: n }), y = ({ data: h }) => /* @__PURE__ */ o.jsx(wd, { children: h.map((v) => /* @__PURE__ */ o.jsx(te, { href: v.path, children: /* @__PURE__ */ o.jsx(kd, { onSelect: () => d(v), className: "w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group", children: /* @__PURE__ */ o.jsxs("div", { className: "flex items-start justify-between gap-2 w-full", children: [
    /* @__PURE__ */ o.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ o.jsx("h4", { className: "font-medium text-sm line-clamp-1 group-hover:text-[#8220ff]", children: v.title }),
      /* @__PURE__ */ o.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: v.description }),
      v.keywords && v.keywords.length > 0 && /* @__PURE__ */ o.jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: v.keywords.slice(0, 3).map((m, w) => /* @__PURE__ */ o.jsx(
        "span",
        {
          className: "inline-block px-2 py-1 text-xs bg-[#8220ff]/60 text-white rounded-full",
          children: m
        },
        w
      )) })
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col p-2 items-center justify-start gap-2", children: [
      v.lang && /* @__PURE__ */ o.jsx("span", { className: "text-xs text-muted-foreground uppercase font-mono", children: v.lang }),
      v.type && /* @__PURE__ */ o.jsx("span", { className: re("text-xs rounded-sm p-1 uppercase font-mono", v.type === "page" ? "bg-[#8220ff]/60 text-white " : "text-[#8220ff]/80 bg-gray-200"), children: v.type })
    ] })
  ] }) }, v.title) })) });
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsx("div", { className: re("ui-lib", t), children: /* @__PURE__ */ o.jsxs(vd, { open: i, onOpenChange: s, className: "top-[50%] sm:top-80 lg:top-100 dark", children: [
    /* @__PURE__ */ o.jsx(yd, { placeholder: a("search.placeholder"), value: l, onValueChange: (h) => u(h) }),
    /* @__PURE__ */ o.jsx(xd, { children: p ? /* @__PURE__ */ o.jsx(bd, { children: "Hang on…" }) : c.length ? /* @__PURE__ */ o.jsx(y, { data: c }) : /* @__PURE__ */ o.jsx(_d, { children: a("search.not_found") }) })
  ] }) }) });
}
const Sd = () => {
  const e = () => {
    const t = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: !0,
      bubbles: !0,
      // Allow the event to bubble up the DOM tree
      cancelable: !0
    });
    document.dispatchEvent(t);
  };
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      onClick: e,
      className: "flex items-center space-x-2 px-4 py-1 bg-transparent text-gray-200 rounded-xl border border-white/50 hover:bg-violet-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
      children: [
        /* @__PURE__ */ o.jsx(Fi, { className: "w-4 h-4" }),
        /* @__PURE__ */ o.jsxs("kbd", { className: "inline-flex h-5 items-center gap-1 rounded border border-gray-600 bg-violet-800 px-1.5 font-mono text-[10px] font-medium opacity-100", children: [
          /* @__PURE__ */ o.jsx("span", { className: "text-xs", children: "⌘" }),
          "K"
        ] })
      ]
    }
  );
}, pf = ({
  lang: e,
  fullSiteUrl: t = "http://localhost:8000",
  fullBlogUrl: r = "http://localhost:9000"
}) => {
  const [n, i] = ae("/"), [s, a] = ae(!1), [l, u] = ae(null), [c, p] = ae([]), d = st(null), y = (R) => {
    p((H) => H.includes(R) ? H.filter((M) => M !== R) : [R]);
  }, [h, v] = ae(!1), [m, w] = ae(!1), I = tc("(max-width: 1279px)"), { t: x, i18n: N } = nr();
  le(() => {
    v(!0);
  }, []), le(() => {
    N.changeLanguage(e), i(e !== "en" ? `/${e}/` : "/");
  }, []);
  const [j, k] = ae(!1);
  le(() => {
    const R = () => {
      const H = window.scrollY;
      k(H > 50);
    };
    return window.addEventListener("scroll", R), R(), () => {
      window.removeEventListener("scroll", R);
    };
  }, []);
  const L = xt((R) => {
    d.current && (clearTimeout(d.current), d.current = null), u(R);
  }, []), O = st([]), S = xt(() => {
    const R = setTimeout(() => {
      u(null);
    }, 150);
    d.current = R, O.current.push(R);
  }, []);
  le(() => () => {
    d.current && clearTimeout(d.current), O.current.forEach(clearTimeout), O.current = [];
  }, []);
  const T = xt(
    (R) => {
      u(l === R ? null : R);
    },
    [l]
  ), E = Yt(t, ss), V = Yt(r, as), G = {
    products: {
      title: x("nav.product.title"),
      shortTitle: x("footer.sections.products.title"),
      image: "product-diagram",
      items: [
        {
          title: x("nav.product.platform_overview"),
          description: x("nav.product.platform_overview_desc"),
          href: `${E}${n}products/cnapp-platform`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ o.jsx("path", { d: "M12 16v-4" }),
                /* @__PURE__ */ o.jsx("path", { d: "M12 8h.01" })
              ]
            }
          )
        },
        {
          title: x("nav.product.benefits"),
          description: x("nav.product.benefits_desc"),
          href: `${E}${n}products/benefits`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "m9 12 2 2 4-4" }),
                /* @__PURE__ */ o.jsx("path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
                /* @__PURE__ */ o.jsx("path", { d: "M22 19H2" })
              ]
            }
          )
        },
        {
          title: x("nav.product.use_cases"),
          description: x("nav.product.use_cases_desc"),
          href: `${E}${n}products/use-cases`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
                /* @__PURE__ */ o.jsx("path", { d: "M8 12h8" }),
                /* @__PURE__ */ o.jsx("path", { d: "M12 8v8" })
              ]
            }
          )
        },
        {
          title: x("nav.product.aspm"),
          description: x("nav.product.aspm_desc"),
          href: `${E}${n}products/aspm`,
          icon: /* @__PURE__ */ o.jsx(
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
              children: /* @__PURE__ */ o.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
            }
          )
        },
        {
          title: x("nav.product.cspm"),
          description: x("nav.product.cspm_desc"),
          href: `${E}${n}products/cspm`,
          icon: /* @__PURE__ */ o.jsx(
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
              children: /* @__PURE__ */ o.jsx("path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" })
            }
          )
        },
        {
          title: x("nav.product.container_security"),
          description: x("nav.product.container_security_desc"),
          href: `${E}${n}products/container`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                /* @__PURE__ */ o.jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                /* @__PURE__ */ o.jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
              ]
            }
          )
        },
        {
          title: x("nav.product.cwpp"),
          description: x("nav.product.cwpp_desc"),
          href: `${E}${n}products/cwpp`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
                /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "16", r: "1" }),
                /* @__PURE__ */ o.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
              ]
            }
          )
        },
        {
          title: x("nav.product.ciem"),
          description: x("nav.product.ciem_desc"),
          href: `${E}${n}products/ciem`,
          icon: /* @__PURE__ */ o.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-cloud-cog-icon lucide-cloud-cog", children: [
            /* @__PURE__ */ o.jsx("path", { d: "m10.852 19.772-.383.924" }),
            /* @__PURE__ */ o.jsx("path", { d: "m13.148 14.228.383-.923" }),
            /* @__PURE__ */ o.jsx("path", { d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" }),
            /* @__PURE__ */ o.jsx("path", { d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" }),
            /* @__PURE__ */ o.jsx("path", { d: "m14.772 15.852.923-.383" }),
            /* @__PURE__ */ o.jsx("path", { d: "m14.772 18.148.923.383" }),
            /* @__PURE__ */ o.jsx("path", { d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }),
            /* @__PURE__ */ o.jsx("path", { d: "m9.228 15.852-.923-.383" }),
            /* @__PURE__ */ o.jsx("path", { d: "m9.228 18.148-.923.383" })
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
          href: `${E}${n}solutions/fintech`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
                /* @__PURE__ */ o.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.healthtech"),
          description: x("nav.solutions.healthtech_desc"),
          href: `${E}${n}solutions/healthtech`,
          icon: /* @__PURE__ */ o.jsx(
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
              children: /* @__PURE__ */ o.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
            }
          )
        },
        {
          title: x("nav.solutions.hrtech"),
          description: x("nav.solutions.hrtech_desc"),
          href: `${E}${n}solutions/hrtech`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                /* @__PURE__ */ o.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                /* @__PURE__ */ o.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.group_companies"),
          description: x("nav.solutions.group_companies_desc"),
          href: `${E}${n}solutions/group-companies`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                /* @__PURE__ */ o.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.agencies"),
          description: x("nav.solutions.agencies_desc"),
          href: `${E}${n}solutions/agencies`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                /* @__PURE__ */ o.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.startups"),
          description: x("nav.solutions.startups_desc"),
          href: `${E}${n}solutions/startups`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
                /* @__PURE__ */ o.jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
                /* @__PURE__ */ o.jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
                /* @__PURE__ */ o.jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.enterprise"),
          description: x("nav.solutions.enterprise_desc"),
          href: `${E}${n}solutions/enterprise`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ o.jsx("path", { d: "M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14" }),
                /* @__PURE__ */ o.jsx("path", { d: "M12 3v4" }),
                /* @__PURE__ */ o.jsx("path", { d: "M5 8h14" }),
                /* @__PURE__ */ o.jsx("path", { d: "M7 14h2" }),
                /* @__PURE__ */ o.jsx("path", { d: "M15 14h2" }),
                /* @__PURE__ */ o.jsx("path", { d: "M7 10h2" }),
                /* @__PURE__ */ o.jsx("path", { d: "M15 10h2" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.mobile_apps"),
          description: x("nav.solutions.mobile_apps_desc"),
          href: `${E}${n}solutions/mobile-apps`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
                /* @__PURE__ */ o.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.manufacturing"),
          description: x("nav.solutions.manufacturing_desc"),
          href: `${E}${n}solutions/manufacturing`,
          icon: /* @__PURE__ */ o.jsx(
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
              children: /* @__PURE__ */ o.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
            }
          )
        },
        {
          title: x("nav.solutions.government"),
          description: x("nav.solutions.government_desc"),
          href: `${E}${n}solutions/government`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ o.jsx("path", { d: "M12 4v6" }),
                /* @__PURE__ */ o.jsx("path", { d: "M4 20V10l8-6 8 6v10" }),
                /* @__PURE__ */ o.jsx("path", { d: "M15 12v8" }),
                /* @__PURE__ */ o.jsx("path", { d: "M9 12v8" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.retailtech"),
          description: x("nav.solutions.retailtech_desc"),
          href: `${E}${n}solutions/retailtech`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("circle", { cx: "9", cy: "21", r: "1" }),
                /* @__PURE__ */ o.jsx("circle", { cx: "20", cy: "21", r: "1" }),
                /* @__PURE__ */ o.jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
              ]
            }
          )
        },
        {
          title: x("nav.solutions.legaltech"),
          description: x("nav.solutions.legal_desc"),
          href: `${E}${n}solutions/legaltech`,
          icon: /* @__PURE__ */ o.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-gavel-icon lucide-gavel", children: [
            /* @__PURE__ */ o.jsx("path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }),
            /* @__PURE__ */ o.jsx("path", { d: "m16 16 6-6" }),
            /* @__PURE__ */ o.jsx("path", { d: "m21.5 10.5-8-8" }),
            /* @__PURE__ */ o.jsx("path", { d: "m8 8 6-6" }),
            /* @__PURE__ */ o.jsx("path", { d: "m8.5 7.5 8 8" })
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
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ o.jsx("polyline", { points: "14 2 14 8 20 8" }),
                /* @__PURE__ */ o.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                /* @__PURE__ */ o.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                /* @__PURE__ */ o.jsx("polyline", { points: "10 9 9 9 8 9" })
              ]
            }
          )
        },
        {
          title: x("nav.developers.api_references"),
          description: x("nav.developers.api_references_desc"),
          href: "https://docs.plexicus.com/api",
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "m18 16 4-4-4-4" }),
                /* @__PURE__ */ o.jsx("path", { d: "m6 8-4 4 4 4" }),
                /* @__PURE__ */ o.jsx("path", { d: "m14.5 4-5 16" })
              ]
            }
          )
        },
        {
          title: x("nav.developers.github_apps"),
          description: x("nav.developers.github_apps_desc"),
          href: "https://github.com/apps/plexicus",
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                /* @__PURE__ */ o.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
              ]
            }
          )
        },
        {
          title: x("nav.developers.plexalyzer_action"),
          description: x("nav.developers.plexalyzer_action_desc"),
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: /* @__PURE__ */ o.jsx(
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
              children: /* @__PURE__ */ o.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
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
          href: `${V}${n}`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ o.jsx("path", { d: "M14 3v5h5M16 13H8M16 17H8M10 9H8" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.youtube_channel"),
          description: x("nav.resources.youtube_channel_desc"),
          href: "https://youtube.com/@plexicus",
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
                /* @__PURE__ */ o.jsx("path", { d: "m10 15 5-3-5-3z" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.branding_assets"),
          description: x("nav.resources.branding_assets_desc"),
          href: `${E}${n}branding-assets`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" }),
                /* @__PURE__ */ o.jsx("path", { d: "m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" }),
                /* @__PURE__ */ o.jsx("path", { d: "m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1 0L6.5 8.5" }),
                /* @__PURE__ */ o.jsx("path", { d: "m3.5 13.5 5-5" }),
                /* @__PURE__ */ o.jsx("path", { d: "m5 19 5-5" }),
                /* @__PURE__ */ o.jsx("path", { d: "m17.5 6.5-5 5" }),
                /* @__PURE__ */ o.jsx("path", { d: "m16 17-5-5" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.changelogs"),
          description: x("nav.resources.changelogs_desc"),
          href: "https://plexicus.canny.io/changelog",
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                /* @__PURE__ */ o.jsx("path", { d: "m9 12 2 2 4-4" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.feature_requests"),
          description: x("nav.resources.feature_requests_desc"),
          href: "https://plexicus.canny.io/feature-requests",
          icon: /* @__PURE__ */ o.jsx(
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
              children: /* @__PURE__ */ o.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
            }
          )
        },
        {
          title: x("nav.resources.integrations"),
          description: x("nav.resources.integrations_desc"),
          href: `${E}${n}integrations`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M9 12l2 2 4-4" }),
                /* @__PURE__ */ o.jsx("path", { d: "M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ o.jsx("path", { d: "M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ o.jsx("path", { d: "M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ o.jsx("path", { d: "M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.comparison_overview"),
          description: x("nav.resources.comparison_overview_desc"),
          href: `${E}${n}comparison/overview`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
                /* @__PURE__ */ o.jsx("circle", { cx: "12", cy: "12", r: "3" })
              ]
            }
          )
        },
        {
          title: x("nav.resources.support"),
          description: x("nav.resources.support_desc"),
          href: `${E}${n}support`,
          icon: /* @__PURE__ */ o.jsxs(
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
                /* @__PURE__ */ o.jsx("path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" }),
                /* @__PURE__ */ o.jsx("path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" })
              ]
            }
          )
        }
      ]
    }
  };
  return /* @__PURE__ */ o.jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-1",
      style: {
        background: j ? "#8220ff" : "transparent",
        boxShadow: j ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ o.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ o.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ o.jsx(
            te,
            {
              href: `${E}${n}`,
              className: "flex items-center gap-2 overflow-visible",
              "aria-label": "Plexicus Home",
              children: /* @__PURE__ */ o.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ o.jsx(
                "img",
                {
                  src: "/images/plexicus-logo-white.png",
                  alt: "Plexicus Logo",
                  className: re("object-contain max-h-full max-w-none w-28", j ? "md:w-40" : "md:w-42"),
                  style: {
                    // maxWidth: isScrolled ? "180px" : "220px",
                    transition: "max-width 0.3s ease-in-out"
                  }
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ o.jsxs("nav", { className: "hidden xl:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(G).filter(([R]) => R === "products").map(([R, H]) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => L(R),
                onMouseLeave: S,
                children: /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === R,
                    "aria-haspopup": "true",
                    onClick: () => T(R),
                    children: [
                      /* @__PURE__ */ o.jsx("span", { className: "hidden xl:inline", children: H.title }),
                      /* @__PURE__ */ o.jsx("span", { className: "xl:hidden", children: H.shortTitle }),
                      /* @__PURE__ */ o.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${l === R ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ o.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              R
            )),
            /* @__PURE__ */ o.jsx(
              te,
              {
                href: `${E}${n}pricing`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: x("nav.pricing")
              }
            ),
            Object.entries(G).filter(([R]) => R === "solutions" || R === "developers" || R === "resources").map(([R, H]) => /* @__PURE__ */ o.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => L(R),
                onMouseLeave: S,
                children: /* @__PURE__ */ o.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": l === R,
                    "aria-haspopup": "true",
                    onClick: () => T(R),
                    children: [
                      /* @__PURE__ */ o.jsx("span", { className: "hidden xl:inline", children: H.title }),
                      /* @__PURE__ */ o.jsx("span", { className: "xl:hidden", children: H.shortTitle }),
                      /* @__PURE__ */ o.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${l === R ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ o.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              R
            )),
            /* @__PURE__ */ o.jsx(
              te,
              {
                href: `${E}${n}contact`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: x("nav.contact")
              }
            )
          ] }),
          /* @__PURE__ */ o.jsxs("div", { className: "flex flex-end items-center justify-center ml-4", children: [
            /* @__PURE__ */ o.jsxs("div", { className: "hidden xl:flex  items-center gap-4", children: [
              /* @__PURE__ */ o.jsx(Sd, {}),
              /* @__PURE__ */ o.jsxs("div", { className: re("flex items-center gap-4 transition-all transition-discrete delay-0"), children: [
                /* @__PURE__ */ o.jsx(
                  te,
                  {
                    href: `${At}/login`,
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                    children: x("nav.login")
                  }
                ),
                /* @__PURE__ */ o.jsx(te, { href: `${At}/register`, children: /* @__PURE__ */ o.jsx(Ie, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: x("nav.get_started") }) })
              ] })
            ] }),
            /* @__PURE__ */ o.jsx(
              "button",
              {
                className: "flex xl:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
                onClick: () => a(!s),
                "aria-label": s ? "Close menu" : "Open menu",
                "aria-expanded": s,
                children: s ? /* @__PURE__ */ o.jsxs(
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
                      /* @__PURE__ */ o.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      /* @__PURE__ */ o.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                    ]
                  }
                ) : /* @__PURE__ */ o.jsxs(
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
                      /* @__PURE__ */ o.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                      /* @__PURE__ */ o.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                      /* @__PURE__ */ o.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        l && /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/20 z-30",
              onClick: () => u(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ o.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => L(l),
              onMouseLeave: S,
              role: "menu",
              "aria-labelledby": `menu-button-${l}`,
              children: /* @__PURE__ */ o.jsx("div", { className: "container mx-auto py-8 px-4 md:px-6 max-w-7xl", children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                /* @__PURE__ */ o.jsxs("div", { className: "w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col", children: [
                  /* @__PURE__ */ o.jsx("div", { className: "relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4", children: /* @__PURE__ */ o.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    l === "products" && /* @__PURE__ */ o.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ o.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ o.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ o.jsx(
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
                          /* @__PURE__ */ o.jsx("rect", { x: "40", y: "30", width: "320", height: "40", rx: "12", fill: "#8220ff", fillOpacity: "0.9" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "65", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "90", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "115", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "40", y: "70", width: "80", height: "200", fill: "#f5f5f7" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "55", y: "90", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.7" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "55", y: "110", width: "40", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "55", y: "130", width: "45", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "55", y: "150", width: "35", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "55", y: "170", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "140", y: "90", width: "200", height: "70", rx: "8", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "155", y: "105", width: "170", height: "40", rx: "4", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "175", cy: "125", r: "15", fill: "#8220ff", fillOpacity: "0.8" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "200", y: "115", width: "110", height: "8", rx: "4", fill: "white" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "200", y: "130", width: "80", height: "6", rx: "3", fill: "white", fillOpacity: "0.7" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "140", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ o.jsx(
                            "path",
                            {
                              d: "M150 240 L170 220 L190 230 L210 200",
                              stroke: "#8220ff",
                              strokeWidth: "3",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ o.jsx("circle", { cx: "170", cy: "220", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "190", cy: "230", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "210", cy: "200", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "245", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ o.jsx(
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
                          /* @__PURE__ */ o.jsx("circle", { cx: "293", cy: "220", r: "30", fill: "transparent", stroke: "#e0e0e5", strokeWidth: "8" }),
                          /* @__PURE__ */ o.jsx("text", { x: "283", y: "225", fontFamily: "Arial", fontSize: "12", fill: "#8220ff", fontWeight: "bold", children: "75%" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "320", cy: "50", r: "12", fill: "white", fillOpacity: "0.2" }),
                          /* @__PURE__ */ o.jsx("path", { d: "M314 50 L320 56 L326 50", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "30", cy: "30", r: "5", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "350", cy: "280", r: "7", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "370", cy: "50", r: "4", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "20", cy: "250", r: "6", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ o.jsx(
                            "path",
                            {
                              d: "M15 100 C30 120, 20 150, 35 160",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ o.jsx(
                            "path",
                            {
                              d: "M370 120 C350 140, 360 170, 380 190",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ o.jsx("defs", { children: /* @__PURE__ */ o.jsxs(
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
                                /* @__PURE__ */ o.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                /* @__PURE__ */ o.jsx(
                                  "feColorMatrix",
                                  {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  }
                                ),
                                /* @__PURE__ */ o.jsx("feOffset", { dy: "4" }),
                                /* @__PURE__ */ o.jsx("feGaussianBlur", { stdDeviation: "6" }),
                                /* @__PURE__ */ o.jsx(
                                  "feColorMatrix",
                                  {
                                    type: "matrix",
                                    values: "0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                  }
                                ),
                                /* @__PURE__ */ o.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                                /* @__PURE__ */ o.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                              ]
                            }
                          ) })
                        ]
                      }
                    ) }),
                    l === "solutions" && /* @__PURE__ */ o.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ o.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ o.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ o.jsx(
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
                          /* @__PURE__ */ o.jsx("circle", { cx: "100", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "300", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "200", cy: "70", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "200", cy: "230", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ o.jsx("path", { d: "M125 150 L160 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ o.jsx("path", { d: "M240 150 L275 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ o.jsx("path", { d: "M200 95 L200 130", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ o.jsx("path", { d: "M200 170 L200 205", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ o.jsx("polygon", { points: "158,145 158,155 168,150", fill: "#8220ff" }),
                          /* @__PURE__ */ o.jsx("polygon", { points: "242,145 242,155 232,150", fill: "#8220ff" }),
                          /* @__PURE__ */ o.jsx("polygon", { points: "195,128 205,128 200,138", fill: "#8220ff" }),
                          /* @__PURE__ */ o.jsx("polygon", { points: "195,172 205,172 200,162", fill: "#8220ff" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "100", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "300", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "200", cy: "70", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "200", cy: "230", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "200", cy: "150", r: "20", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "200", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "150", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "250", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "150", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "250", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" })
                        ]
                      }
                    ) }),
                    l === "resources" && /* @__PURE__ */ o.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ o.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ o.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ o.jsxs("g", { filter: "url(#resourcesShadow)", children: [
                            /* @__PURE__ */ o.jsx("rect", { x: "140", y: "80", width: "120", height: "140", rx: "4", fill: "url(#bookGradient)" }),
                            /* @__PURE__ */ o.jsx(
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
                            /* @__PURE__ */ o.jsx("path", { d: "M160 100 L240 100", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ o.jsx("path", { d: "M160 120 L240 120", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ o.jsx("path", { d: "M160 140 L240 140", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ o.jsx("path", { d: "M160 160 L240 160", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ o.jsx("path", { d: "M160 180 L240 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ o.jsx("path", { d: "M230 80 L230 110 L220 100 L210 110 L210 80", fill: "#8220ff", fillOpacity: "0.3" }),
                            /* @__PURE__ */ o.jsxs("g", { transform: "translate(-10, -10) rotate(-5)", children: [
                              /* @__PURE__ */ o.jsx(
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
                              /* @__PURE__ */ o.jsx("path", { d: "M90 135 L150 135", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ o.jsx("path", { d: "M90 150 L150 150", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ o.jsx("path", { d: "M90 165 L150 165", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ o.jsx("path", { d: "M90 180 L120 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" })
                            ] }),
                            /* @__PURE__ */ o.jsxs("g", { transform: "translate(10, -10) rotate(5)", children: [
                              /* @__PURE__ */ o.jsx(
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
                              /* @__PURE__ */ o.jsx("polygon", { points: "270,140 290,150 270,160", fill: "#8220ff" }),
                              /* @__PURE__ */ o.jsx(
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
                          /* @__PURE__ */ o.jsx("circle", { cx: "200", cy: "50", r: "15", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "200", cy: "50", r: "10", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "200", cy: "50", r: "5", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "150", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "250", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "120", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "280", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ o.jsxs("defs", { children: [
                            /* @__PURE__ */ o.jsxs(
                              "linearGradient",
                              {
                                id: "bookGradient",
                                x1: "140",
                                y1: "80",
                                x2: "260",
                                y2: "220",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ o.jsx("stop", { offset: "0%", stopColor: "#f0f0f5" }),
                                  /* @__PURE__ */ o.jsx("stop", { offset: "100%", stopColor: "#ffffff" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ o.jsx("filter", { id: "resourcesShadow", x: "-10%", y: "-10%", width: "120%", height: "120%", children: /* @__PURE__ */ o.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "4", floodColor: "#8220ff", floodOpacity: "0.2" }) })
                          ] })
                        ]
                      }
                    ) }),
                    l === "developers" && /* @__PURE__ */ o.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ o.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ o.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "20", y: "20", width: "280", height: "200", rx: "8", fill: "#1E1E1E" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "20", y: "20", width: "280", height: "30", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "40", cy: "35", r: "6", fill: "#FF5F56" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "60", cy: "35", r: "6", fill: "#FFBD2E" }),
                          /* @__PURE__ */ o.jsx("circle", { cx: "80", cy: "35", r: "6", fill: "#27C93F" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "40", y: "70", width: "120", height: "10", rx: "2", fill: "#9CDCFE", fillOpacity: "0.7" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "40", y: "90", width: "180", height: "10", rx: "2", fill: "#CE9178", fillOpacity: "0.7" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "60", y: "110", width: "200", height: "10", rx: "2", fill: "#6A9955", fillOpacity: "0.7" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "60", y: "130", width: "160", height: "10", rx: "2", fill: "#569CD6", fillOpacity: "0.7" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "40", y: "150", width: "140", height: "10", rx: "2", fill: "#DCDCAA", fillOpacity: "0.7" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "60", y: "170", width: "180", height: "10", rx: "2", fill: "#4EC9B0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "40", y: "190", width: "160", height: "10", rx: "2", fill: "#C586C0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ o.jsx("text", { x: "30", y: "75", fontSize: "10", fill: "#858585", children: "1" }),
                          /* @__PURE__ */ o.jsx("text", { x: "30", y: "95", fontSize: "10", fill: "#858585", children: "2" }),
                          /* @__PURE__ */ o.jsx("text", { x: "30", y: "115", fontSize: "10", fill: "#858585", children: "3" }),
                          /* @__PURE__ */ o.jsx("text", { x: "30", y: "135", fontSize: "10", fill: "#858585", children: "4" }),
                          /* @__PURE__ */ o.jsx("text", { x: "30", y: "155", fontSize: "10", fill: "#858585", children: "5" }),
                          /* @__PURE__ */ o.jsx("text", { x: "30", y: "175", fontSize: "10", fill: "#858585", children: "6" }),
                          /* @__PURE__ */ o.jsx("text", { x: "30", y: "195", fontSize: "10", fill: "#858585", children: "7" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "80", y: "130", width: "310", height: "130", rx: "8", fill: "#1E1E1E", filter: "url(#shadow)" }),
                          /* @__PURE__ */ o.jsx("rect", { x: "80", y: "130", width: "310", height: "25", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ o.jsx("text", { x: "235", y: "147", fontSize: "12", fill: "#FFFFFF", textAnchor: "middle", children: "Terminal" }),
                          /* @__PURE__ */ o.jsx("text", { x: "90", y: "170", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ git clone https://github.com/plexicus/plexicus-sdk.git" }),
                          /* @__PURE__ */ o.jsx("text", { x: "90", y: "185", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "Cloning into 'plexicus-sdk'..." }),
                          /* @__PURE__ */ o.jsx("text", { x: "90", y: "200", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "remote: Counting objects: 100% (1234/1234)" }),
                          /* @__PURE__ */ o.jsx("text", { x: "90", y: "215", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ cd plexicus-sdk && npm install" }),
                          /* @__PURE__ */ o.jsx("text", { x: "90", y: "230", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "added 1024 packages in 4.2s" }),
                          /* @__PURE__ */ o.jsx("text", { x: "90", y: "245", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ npm run dev" }),
                          /* @__PURE__ */ o.jsxs("g", { transform: "translate(320, 240) scale(0.8)", children: [
                            /* @__PURE__ */ o.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white" }),
                            /* @__PURE__ */ o.jsx(
                              "path",
                              {
                                d: "M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z",
                                fill: "#1B1F23",
                                transform: "translate(0, 0)"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ o.jsx("defs", { children: /* @__PURE__ */ o.jsx("filter", { id: "shadow", x: "0", y: "0", width: "400", height: "300", filterUnits: "userSpaceOnUse", children: /* @__PURE__ */ o.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "3", floodColor: "#000000", floodOpacity: "0.3" }) }) })
                        ]
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ o.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
                    /* @__PURE__ */ o.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: G[l].title }),
                    /* @__PURE__ */ o.jsx("p", { className: "text-gray-700", children: x(l === "products" ? "nav.product.explore" : l === "solutions" ? "nav.solutions.explore" : "nav.resources.explore") })
                  ] })
                ] }),
                /* @__PURE__ */ o.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: G[l].items.filter((R) => l !== "resources" || !R.title.startsWith("vs ")).map((R, H) => /* @__PURE__ */ o.jsxs(
                  te,
                  {
                    href: R.href,
                    className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                    onClick: () => u(null),
                    children: [
                      /* @__PURE__ */ o.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: Ar.cloneElement(R.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ o.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ o.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: R.title }),
                        /* @__PURE__ */ o.jsx("p", { className: "text-sm text-gray-600 mt-1", children: R.description })
                      ] })
                    ]
                  },
                  H
                )) }) })
              ] }) })
            }
          )
        ] }),
        h && I && s && /* @__PURE__ */ o.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 xl:hidden", onClick: () => a(!1) }),
        h && I && /* @__PURE__ */ o.jsx(
          "div",
          {
            className: `xl:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300  delay-500 ease-in-out ${s ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ o.jsxs("div", { className: "overflow-y-auto h-full p-4 pb-20", children: [
              /* @__PURE__ */ o.jsx(
                nc,
                {
                  currentLang: e,
                  webUrl: E,
                  blogUrl: V,
                  isOpen: m,
                  onClose: () => w(!1)
                }
              ),
              /* @__PURE__ */ o.jsxs("div", { className: "space-y-4", children: [
                Object.entries(G).map(([R, H]) => {
                  const M = c.includes(R);
                  return /* @__PURE__ */ o.jsxs("div", { className: "space-y-2 bg-[#8220ff]/10 px-2 rounded-md", children: [
                    /* @__PURE__ */ o.jsxs(
                      "button",
                      {
                        onClick: () => y(R),
                        className: "flex items-center justify-between w-full py-2",
                        children: [
                          /* @__PURE__ */ o.jsx("h3", { className: "font-semibold", children: H.title }),
                          /* @__PURE__ */ o.jsx(
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
                              className: `transition-transform duration-200 ${M ? "transform rotate-180" : ""}`,
                              children: /* @__PURE__ */ o.jsx("path", { d: "m6 9 6 6 6-6" })
                            }
                          )
                        ]
                      }
                    ),
                    M && /* @__PURE__ */ o.jsx("div", { className: "grid grid-cols-1 gap-2 py-2", children: H.items.map((Y, Z) => /* @__PURE__ */ o.jsxs(
                      te,
                      {
                        href: Y.href,
                        className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                        onClick: () => a(!1),
                        children: [
                          /* @__PURE__ */ o.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: Ar.cloneElement(Y.icon, { width: 16, height: 16 }) }),
                          /* @__PURE__ */ o.jsx("span", { className: "text-sm", children: Y.title })
                        ]
                      },
                      Z
                    )) })
                  ] }, R);
                }),
                /* @__PURE__ */ o.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ o.jsx(te, { href: `${At}/register`, className: "flex items-center justify-center", children: /* @__PURE__ */ o.jsx(Ie, { className: "text-white w-full bg-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: x("nav.get_started") }) }),
                  /* @__PURE__ */ o.jsx(
                    te,
                    {
                      href: `${At}/login`,
                      className: "text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-center",
                      children: /* @__PURE__ */ o.jsx(Ie, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: x("nav.login") })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    te,
                    {
                      href: `${E}${n}pricing`,
                      className: " py-2 text-sm font-medium flex items-center justify-center",
                      onClick: () => a(!1),
                      children: /* @__PURE__ */ o.jsx(Ie, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: x("nav.pricing") })
                    }
                  ),
                  /* @__PURE__ */ o.jsx(
                    te,
                    {
                      href: `${E}${n}contact`,
                      className: " py-2 text-sm font-medium flex items-center justify-center",
                      onClick: () => a(!1),
                      children: /* @__PURE__ */ o.jsx(Ie, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: x("nav.contact") })
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
}, Pd = "English", jd = "German", Cd = "French", Ed = "Japanese", Od = "Italian", Id = "Dutch", Nd = "Swedish", zd = "Spanish", Ad = "Norwegian", Ld = "Danish", Td = "Finnish", Rd = "Portuguese", Md = "Chinese (Simplified)", $d = "Arabic", Dd = "Hebrew", Fd = "Turkish", Bd = "Polish", Wd = "Czech", Kd = "Indonesian", Hd = {
  en: Pd,
  de: jd,
  fr: Cd,
  ja: Ed,
  it: Od,
  nl: Id,
  sv: Nd,
  es: zd,
  no: Ad,
  da: Ld,
  fi: Td,
  pt: Rd,
  zh: Md,
  ar: $d,
  he: Dd,
  tr: Fd,
  pl: Bd,
  cs: Wd,
  id: Kd
};
function Vd() {
  var r;
  const e = (n) => {
    localStorage.setItem("scrollPosition", String(window == null ? void 0 : window.scrollY));
    const i = window.location.pathname;
    let a = i.match(/^\/([a-z]{2})\//) ? i.replace(/^\/[a-z]{2}\//, `/${n}/`) : `/${n}${i}`;
    a = a.startsWith("/en/") ? a.replace(/^\/en/, "") : a, window.location.href = a;
  };
  le(() => {
    const n = localStorage.getItem("scrollPosition");
    n && (window.scrollTo(0, parseInt(n)), localStorage.removeItem("scrollPosition"));
  }, []);
  const t = ((r = window.location.pathname.match(/^\/([a-z]{2})\//)) == null ? void 0 : r[1]) || "en";
  return /* @__PURE__ */ o.jsx(o.Fragment, { children: /* @__PURE__ */ o.jsxs("div", { className: "relative inline-flex items-center w-[150px]", children: [
    /* @__PURE__ */ o.jsx(Pa, { className: "absolute  text-muted-foreground pointer-events-none", style: { left: 1, paddingLeft: 6, width: 22 } }),
    /* @__PURE__ */ o.jsx(
      "select",
      {
        defaultValue: t,
        className: "appearance-none w-full  pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700",
        style: { paddingLeft: 30 },
        onChange: (n) => e(n.target.value),
        children: Object.entries(Hd).map(([n, i]) => /* @__PURE__ */ o.jsx("option", { value: n, children: i }, n))
      }
    ),
    /* @__PURE__ */ o.jsx(
      "svg",
      {
        className: "pointer-events-none absolute  top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        style: { right: 3, marginRight: 4 },
        children: /* @__PURE__ */ o.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
      }
    )
  ] }) });
}
function ff({ lang: e, fullSiteUrl: t = "http://localhost:8000", fullBlogUrl: r = "http://localhost:9000", showLanguageSelector: n = !0 }) {
  const [i, s] = ae("/"), { t: a, i18n: l } = nr();
  le(() => {
    l.changeLanguage(e), s(e !== "en" ? `/${e}/` : "/");
  }, []);
  const u = Yt(t, ss), c = Yt(r, as), p = [
    {
      alt: a("footer.social_media.twitter"),
      link: "https://x.com/plexicus_ai/",
      icon: /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", children: /* @__PURE__ */ o.jsxs("g", { fill: "none", "fill-rule": "evenodd", children: [
        /* @__PURE__ */ o.jsx("path", { d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ o.jsx("path", { fill: "currentColor", d: "M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16ZM16.5 19L6 5h1.5L18 19z" })
      ] }) })
    },
    {
      alt: a("footer.social_media.linkedin"),
      link: "https://www.linkedin.com/company/plexicus/",
      icon: /* @__PURE__ */ o.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z",
          clipRule: "evenodd"
        }
      ) })
    },
    {
      alt: a("footer.social_media.github"),
      link: "https://github.com/apps/plexicus",
      icon: /* @__PURE__ */ o.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: /* @__PURE__ */ o.jsx("path", { fill: "currentColor", d: "M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2 .1-2 .1-2c3.1.1 4.8 3.2 4.8 3.2c2.7 4.8 7.3 3.4 9 2.5c.3-2 1.1-3.4 2-4.2c-6.8-.7-14.1-3.4-14.1-15.2c0-3.4 1.3-6.1 3.2-8.2c-.3-.7-1.4-3.9.3-8.2c0 0 2.7-.8 8.6 3.2c2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2c1.7 4.2.7 7.5.3 8.2c2 2.1 3.2 4.9 3.2 8.2c0 11.8-7.3 14.5-14.1 15.2c1.1 1 2.1 3 2.1 5.8c0 4.2-.1 7.5-.1 8.5c0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8" }) })
    },
    {
      alt: a("footer.social_media.instagram"),
      link: "https://www.instagram.com/plexicus_ai/",
      icon: /* @__PURE__ */ o.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: [
        /* @__PURE__ */ o.jsx("path", { fill: "currentColor", d: "M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5s-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1s-5.5.7-7.6 1.4s-3.8 1.9-5.5 3.6s-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8s.7 5.5 1.4 7.6s1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5s4.2 1.3 7.6 1.4c3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1s5.5-.7 7.6-1.4s3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5s1.3-4.2 1.4-7.6c.1-3.2.1-4.2.1-12.7s.2-9.6.1-13m-5.6 25.3c-.1 3-.7 4.6-1.1 5.8c-.6 1.4-1.3 2.5-2.4 3.5c-1.1 1.1-2.1 1.7-3.5 2.4c-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1c-3-.1-4.6-.7-5.8-1.1c-1.4-.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5c-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5c.1-3 .7-4.6 1.1-5.8c.6-1.4 1.3-2.5 2.3-3.5c1.1-1.1 2.1-1.7 3.5-2.3c1.1-.4 2.7-1 5.8-1.1c3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1c1.4.6 2.5 1.3 3.5 2.3c1.1 1.1 1.7 2.1 2.4 3.5c.4 1.1 1 2.7 1.1 5.8c.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5" }),
        /* @__PURE__ */ o.jsx("path", { fill: "currentColor", d: "M32 16.1c-8.9 0-15.9 7.2-15.9 15.9c0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9s-7.1-15.9-16-15.9m0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4" }),
        /* @__PURE__ */ o.jsx("circle", { cx: "48.7", cy: "15.4", r: "3.7", fill: "currentColor" })
      ] })
    }
  ], d = [
    {
      title: a("footer.sections.products.title"),
      items: [
        {
          link: `${u}${i}products/cnapp-platform`,
          text: a("footer.sections.products.links.platform_overview")
        },
        {
          link: `${u}${i}products/benefits`,
          text: a("footer.sections.products.links.benefits")
        },
        {
          link: `${u}${i}products/use-cases`,
          text: a("footer.sections.products.links.use_cases")
        },
        {
          link: `${u}${i}products/aspm`,
          text: a("footer.sections.products.links.aspm")
        },
        {
          link: `${u}${i}products/cspm`,
          text: a("footer.sections.products.links.cspm")
        },
        {
          link: `${u}${i}products/container`,
          text: a("footer.sections.products.links.container_security")
        },
        {
          link: `${u}${i}products/cwpp`,
          text: a("footer.sections.products.links.cwpp")
        },
        {
          link: `${u}${i}products/ciem`,
          text: a("footer.sections.products.links.ciem")
        }
      ]
    },
    {
      title: a("footer.sections.resources.title"),
      items: [
        {
          link: `${c}${i}`,
          text: a("footer.sections.resources.links.blog")
        },
        {
          link: "https://docs.plexicus.com/",
          text: a("footer.sections.resources.links.documentation")
        },
        {
          text: a("nav.resources.branding_assets"),
          link: `${u}${i}branding-assets`
        },
        {
          text: a("nav.resources.changelogs"),
          link: "https://plexicus.canny.io/changelog"
        },
        {
          text: a("nav.resources.youtube_channel"),
          link: "https://youtube.com/@plexicus"
        },
        {
          text: a("nav.resources.feature_requests"),
          link: "https://plexicus.canny.io/feature-requests"
        },
        {
          text: a("nav.resources.integrations"),
          link: `${u}${i}integrations`
        },
        {
          text: a("nav.resources.comparison_overview"),
          link: `${u}${i}comparison/overview`
        }
      ]
    },
    {
      title: a("footer.sections.company.title"),
      items: [
        {
          link: `${u}${i}contact`,
          text: a("footer.sections.company.links.contact")
        },
        {
          link: `${u}${i}privacy`,
          text: a("footer.sections.company.links.privacy_policy")
        },
        {
          link: `${u}${i}pricing`,
          text: a("footer.sections.products.links.pricing")
        },
        {
          link: `${u}${i}support`,
          text: a("nav.resources.support")
        }
      ]
    }
  ];
  return /* @__PURE__ */ o.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ o.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ o.jsxs("div", { id: "footer-grid", className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5", children: [
      /* @__PURE__ */ o.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ o.jsx(te, { href: `${u}${i}`, className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ o.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus S.L.", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ o.jsx("p", { className: "text-gray-600 mb-4 max-w-sm", children: a("footer.tagline") }),
        /* @__PURE__ */ o.jsx("div", { id: "social_links", className: "flex justify-start items-center gap-4", children: p.map(({ link: y, icon: h, alt: v }) => /* @__PURE__ */ o.jsxs(te, { target: "_blank", href: y, className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ o.jsx("span", { className: "sr-only", children: v }),
          h
        ] }, y)) }),
        n && /* @__PURE__ */ o.jsx("div", { className: "mt-6", children: /* @__PURE__ */ o.jsx(Vd, {}) })
      ] }),
      d.map(({ title: y, items: h }) => /* @__PURE__ */ o.jsxs("div", { children: [
        /* @__PURE__ */ o.jsx("h3", { className: "text-sm font-semibold text-purple-700 tracking-wider uppercase mb-4", children: y }),
        /* @__PURE__ */ o.jsx("ul", { className: "space-y-2", children: h.map(({ link: v, text: m }) => /* @__PURE__ */ o.jsx("li", { children: /* @__PURE__ */ o.jsx(te, { href: v, className: "text-gray-600 hover:text-purple-700", children: m }) }, m)) })
      ] }, y))
    ] }),
    /* @__PURE__ */ o.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ o.jsxs("div", { className: "flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-4", children: [
      /* @__PURE__ */ o.jsxs("p", { className: "text-gray-500 text-sm flex flex-col md:flex-row gap-3 ", children: [
        /* @__PURE__ */ o.jsx("div", { children: "© 2025 PLEXICUS, S.L" }),
        /* @__PURE__ */ o.jsxs("div", { children: [
          /* @__PURE__ */ o.jsx(te, { href: `${u}${i}privacy`, className: "underline hover:text-gray-700 ml-0 ", children: a("footer.policies.privacy_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ o.jsx(te, { href: `${u}${i}management`, className: "underline hover:text-gray-700", children: a("footer.policies.management_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ o.jsx(te, { href: `${u}${i}legal`, className: "underline hover:text-gray-700", children: a("footer.policies.legal_notice") })
        ] })
      ] }),
      /* @__PURE__ */ o.jsx("div", { children: /* @__PURE__ */ o.jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200", children: [
        /* @__PURE__ */ o.jsx("svg", { className: "w-4 h-4 mr-1", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ o.jsx(
          "path",
          {
            d: "M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ) }),
        a("footer.readiness")
      ] }) })
    ] }) })
  ] }) });
}
function gi(e, t, r, n, i) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++) e = e ? e[t[n]] : i;
  return e === i ? r : e;
}
var Gd = "function", Ud = "string", ce = "undefined", qd = "boolean", er = "object", Yd = "array", Jd = "number", Zd = "symbol", Xd = "null", Xs = "any", Qs = "*", Fe = "__", Qd = "form", ep = "input", tp = "button", rp = "select", tr = typeof process !== ce ? process : {};
tr.env && tr.env.NODE_ENV;
var ue = typeof document !== ce;
tr.versions != null && tr.versions.node != null;
typeof Deno !== ce && Deno.core;
ue && window.name === "nodejs" || typeof navigator !== ce && typeof navigator.userAgent !== ce && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom"));
function ea(e, t) {
  return t.charAt(0)[e]() + t.slice(1);
}
var np = ea.bind(null, "toUpperCase"), ip = ea.bind(null, "toLowerCase");
function sp(e) {
  return ta(e) ? np(Xd) : typeof e === er ? up(e) : Object.prototype.toString.call(e).slice(8, -1);
}
function rr(e, t) {
  t === void 0 && (t = !0);
  var r = sp(e);
  return t ? ip(r) : r;
}
function Et(e, t) {
  return typeof t === e;
}
var ge = Et.bind(null, Gd), tt = Et.bind(null, Ud), Xe = Et.bind(null, ce), ap = Et.bind(null, qd);
Et.bind(null, Zd);
function ta(e) {
  return e === null;
}
function op(e) {
  return rr(e) === Jd && !isNaN(e);
}
function lp(e) {
  return rr(e) === Yd;
}
function oe(e) {
  if (!cp(e)) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function cp(e) {
  return e && (typeof e === er || e !== null);
}
function up(e) {
  return ge(e.constructor) ? e.constructor.name : null;
}
function dp(e) {
  return e instanceof Error || tt(e.message) && e.constructor && op(e.constructor.stackTraceLimit);
}
function ra(e, t) {
  if (typeof t != "object" || ta(t)) return !1;
  if (t instanceof e) return !0;
  var r = rr(new e(""));
  if (dp(t)) for (; t; ) {
    if (rr(t) === r) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
ra.bind(null, TypeError);
ra.bind(null, SyntaxError);
function ur(e, t) {
  var r = e instanceof Element || e instanceof HTMLDocument;
  return r && t ? pp(e, t) : r;
}
function pp(e, t) {
  return t === void 0 && (t = ""), e && e.nodeName === t.toUpperCase();
}
function dr(e) {
  var t = [].slice.call(arguments, 1);
  return function() {
    return e.apply(void 0, [].slice.call(arguments).concat(t));
  };
}
dr(ur, Qd);
dr(ur, tp);
dr(ur, ep);
dr(ur, rp);
function mi(e) {
  try {
    return decodeURIComponent(e.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function fp() {
  if (ue) {
    var e = navigator, t = e.languages;
    return e.userLanguage || (t && t.length ? t[0] : e.language);
  }
}
function hp() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function gp(e) {
  return (function(t) {
    for (var r, n = /* @__PURE__ */ Object.create(null), i = /([^&=]+)=?([^&]*)/g; r = i.exec(t); ) {
      var s = mi(r[1]), a = mi(r[2]);
      if (s) if (s.substring(s.length - 2) === "[]") {
        var l = n[s = s.substring(0, s.length - 2)] || (n[s] = []);
        n[s] = Array.isArray(l) ? l : [], n[s].push(a);
      } else n[s] = a === "" || a;
    }
    for (var u in n) {
      var c = u.split("[");
      c.length > 1 && (mp(n, c.map(function(p) {
        return p.replace(/[?[\]\\ ]/g, "");
      }), n[u]), delete n[u]);
    }
    return n;
  })((function(t) {
    return ue && window.location.search.substring(1);
  })());
}
function mp(e, t, r) {
  for (var n = t.length - 1, i = 0; i < n; ++i) {
    var s = t[i];
    if (s === "__proto__" || s === "constructor") break;
    s in e || (e[s] = {}), e = e[s];
  }
  e[t[n]] = r;
}
function pr() {
  for (var e = "", t = 0, r = 4294967295 * Math.random() | 0; t++ < 36; ) {
    var n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[t - 1], i = 15 & r;
    e += n == "-" || n == "4" ? n : (n == "x" ? i : 3 & i | 8).toString(16), r = t % 8 == 0 ? 4294967295 * Math.random() | 0 : r >> 4;
  }
  return e;
}
var Le = "global", at = Fe + Le + Fe, ot = typeof self === er && self.self === self && self || typeof global === er && global[Le] === global && global || void 0;
function Be(e) {
  return ot[at][e];
}
function We(e, t) {
  return ot[at][e] = t;
}
function dt(e) {
  delete ot[at][e];
}
function pt(e, t, r) {
  var n;
  try {
    if (_n(e)) {
      var i = window[e];
      n = i[t].bind(i);
    }
  } catch {
  }
  return n || r;
}
ot[at] || (ot[at] = {});
var Dt = {};
function _n(e) {
  if (typeof Dt[e] !== ce) return Dt[e];
  try {
    var t = window[e];
    t.setItem(ce, ce), t.removeItem(ce);
  } catch {
    return Dt[e] = !1;
  }
  return Dt[e] = !0;
}
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, q.apply(null, arguments);
}
var Se = "function", ve = "undefined", _t = "reducer", na = "@@redux/", Ur = na + "INIT", vp = na + Math.random().toString(36), vi = /* @__PURE__ */ (function() {
  return typeof Symbol === Se && Symbol.observable || "@@observable";
})(), Ft = " != " + Se;
function ia(e, t, r) {
  var n;
  if (typeof t === Se && typeof r === ve && (r = t, t = void 0), typeof r !== ve) {
    if (typeof r !== Se) throw new Error("enhancer" + Ft);
    return r(ia)(e, t);
  }
  if (typeof e !== Se) throw new Error(_t + Ft);
  var i = e, s = t, a = [], l = a, u = !1;
  function c() {
    l === a && (l = a.slice());
  }
  function p() {
    return s;
  }
  function d(h) {
    if (typeof h !== Se) throw new Error("Listener" + Ft);
    var v = !0;
    return c(), l.push(h), function() {
      if (v) {
        v = !1, c();
        var m = l.indexOf(h);
        l.splice(m, 1);
      }
    };
  }
  function y(h) {
    if (!oe(h)) throw new Error("Act != obj");
    if (typeof h.type === ve) throw new Error("ActType " + ve);
    if (u) throw new Error("Dispatch in " + _t);
    try {
      u = !0, s = i(s, h);
    } finally {
      u = !1;
    }
    for (var v = a = l, m = 0; m < v.length; m++) (0, v[m])();
    return h;
  }
  return y({ type: Ur }), (n = { dispatch: y, subscribe: d, getState: p, replaceReducer: function(h) {
    if (typeof h !== Se) throw new Error("next " + _t + Ft);
    i = h, y({ type: Ur });
  } })[vi] = function() {
    var h, v = d;
    return (h = { subscribe: function(m) {
      if (typeof m != "object") throw new TypeError("Observer != obj");
      function w() {
        m.next && m.next(p());
      }
      return w(), { unsubscribe: v(w) };
    } })[vi] = function() {
      return this;
    }, h;
  }, n;
}
function yp(e, t) {
  var r = t && t.type;
  return "action " + (r && r.toString() || "?") + _t + " " + e + " returns " + ve;
}
function lt() {
  var e = [].slice.call(arguments);
  return e.length === 0 ? function(t) {
    return t;
  } : e.length === 1 ? e[0] : e.reduce(function(t, r) {
    return function() {
      return t(r.apply(void 0, [].slice.call(arguments)));
    };
  });
}
function xp() {
  var e = arguments;
  return function(t) {
    return function(r, n, i) {
      var s, a = t(r, n, i), l = a.dispatch, u = { getState: a.getState, dispatch: function(c) {
        return l(c);
      } };
      return s = [].slice.call(e).map(function(c) {
        return c(u);
      }), q({}, a, { dispatch: l = lt.apply(void 0, s)(a.dispatch) });
    };
  };
}
var je = Fe + "anon_id", Te = Fe + "user_id", rt = Fe + "user_traits", qr = "analytics", ke = "userId", Qe = "anonymousId", qt = ["bootstrap", "params", "campaign", "initializeStart", "initialize", "initializeEnd", "ready", "resetStart", "reset", "resetEnd", "pageStart", "page", "pageEnd", "pageAborted", "trackStart", "track", "trackEnd", "trackAborted", "identifyStart", "identify", "identifyEnd", "identifyAborted", "userIdChanged", "registerPlugins", "enablePlugin", "disablePlugin", "online", "offline", "setItemStart", "setItem", "setItemEnd", "setItemAborted", "removeItemStart", "removeItem", "removeItemEnd", "removeItemAborted"], Yr = ["name", "EVENTS", "config", "loaded"], U = qt.reduce(function(e, t) {
  return e[t] = t, e;
}, { registerPluginType: function(e) {
  return "registerPlugin:" + e;
}, pluginReadyType: function(e) {
  return "ready:" + e;
} }), yi = /^utm_/, xi = /^an_prop_/, bi = /^an_trait_/;
function bp(e) {
  var t = e.storage.setItem;
  return function(r) {
    return function(n) {
      return function(i) {
        if (i.type === U.bootstrap) {
          var s = i.params, a = i.user, l = i.persistedUser, u = i.initialUser, c = l.userId === a.userId;
          l.anonymousId !== a.anonymousId && t(je, a.anonymousId), c || t(Te, a.userId), u.traits && t(rt, q({}, c && l.traits ? l.traits : {}, u.traits));
          var p = Object.keys(i.params);
          if (p.length) {
            var d = s.an_uid, y = s.an_event, h = p.reduce(function(v, m) {
              if (m.match(yi) || m.match(/^(d|g)clid/)) {
                var w = m.replace(yi, "");
                v.campaign[w === "campaign" ? "name" : w] = s[m];
              }
              return m.match(xi) && (v.props[m.replace(xi, "")] = s[m]), m.match(bi) && (v.traits[m.replace(bi, "")] = s[m]), v;
            }, { campaign: {}, props: {}, traits: {} });
            r.dispatch(q({ type: U.params, raw: s }, h, d ? { userId: d } : {})), d && setTimeout(function() {
              return e.identify(d, h.traits);
            }, 0), y && setTimeout(function() {
              return e.track(y, h.props);
            }, 0), Object.keys(h.campaign).length && r.dispatch({ type: U.campaign, campaign: h.campaign });
          }
        }
        return n(i);
      };
    };
  };
}
function _p(e) {
  return function(t, r) {
    if (t === void 0 && (t = {}), r === void 0 && (r = {}), r.type === U.setItemEnd) {
      if (r.key === je) return q({}, t, { anonymousId: r.value });
      if (r.key === Te) return q({}, t, { userId: r.value });
    }
    switch (r.type) {
      case U.identify:
        return Object.assign({}, t, { userId: r.userId, traits: q({}, t.traits, r.traits) });
      case U.reset:
        return [Te, je, rt].forEach(function(n) {
          e.removeItem(n);
        }), Object.assign({}, t, { userId: null, anonymousId: null, traits: {} });
      default:
        return t;
    }
  };
}
function _i(e) {
  return { userId: e.getItem(Te), anonymousId: e.getItem(je), traits: e.getItem(rt) };
}
var Jr = function(e) {
  return Fe + "TEMP" + Fe + e;
};
function wp(e) {
  var t = e.storage, r = t.setItem, n = t.removeItem, i = t.getItem;
  return function(s) {
    return function(a) {
      return function(l) {
        var u = l.userId, c = l.traits, p = l.options;
        if (l.type === U.reset && ([Te, rt, je].forEach(function(h) {
          n(h);
        }), [ke, Qe, "traits"].forEach(function(h) {
          dt(Jr(h));
        })), l.type === U.identify) {
          i(je) || r(je, pr());
          var d = i(Te), y = i(rt) || {};
          d && d !== u && s.dispatch({ type: U.userIdChanged, old: { userId: d, traits: y }, new: { userId: u, traits: c }, options: p }), u && r(Te, u), c && r(rt, q({}, y, c));
        }
        return a(l);
      };
    };
  };
}
var yt = {};
function wi(e, t) {
  yt[e] && ge(yt[e]) && (yt[e](t), delete yt[e]);
}
function sa(e, t, r) {
  return new Promise(function(n, i) {
    return t() ? n(e) : r < 1 ? i(q({}, e, { queue: !0 })) : new Promise(function(s) {
      return setTimeout(s, 10);
    }).then(function(s) {
      return sa(e, t, r - 10).then(n, i);
    });
  });
}
function kp(e) {
  return { abort: e };
}
function aa(e, t, r) {
  var n = {}, i = t(), s = e.getState(), a = s.plugins, l = s.queue, u = s.user;
  if (!s.context.offline && l && l.actions && l.actions.length) {
    var c = l.actions.reduce(function(d, y, h) {
      return a[y.plugin].loaded ? (d.process.push(y), d.processIndex.push(h)) : (d.requeue.push(y), d.requeueIndex.push(h)), d;
    }, { processIndex: [], process: [], requeue: [], requeueIndex: [] });
    if (c.processIndex && c.processIndex.length) {
      c.processIndex.forEach(function(d) {
        var y = l.actions[d], h = y.plugin, v = y.payload.type, m = i[h][v];
        if (m && ge(m)) {
          var w, I = (function(j, k) {
            return j === void 0 && (j = {}), k === void 0 && (k = {}), [ke, Qe].reduce(function(L, O) {
              return j.hasOwnProperty(O) && k[O] && k[O] !== j[O] && (L[O] = k[O]), L;
            }, j);
          })(y.payload, u), x = n[I.meta.rid];
          if (!x && (w = m({ payload: I, config: a[h].config, instance: r, abort: kp })) && oe(w) && w.abort) return void (n[I.meta.rid] = !0);
          if (!x) {
            var N = v + ":" + h;
            e.dispatch(q({}, I, { type: N, _: { called: N, from: "queueDrain" } }));
          }
        }
      });
      var p = l.actions.filter(function(d, y) {
        return !~c.processIndex.indexOf(y);
      });
      l.actions = p;
    }
  }
}
var Or = function(e) {
  var t = e.data, r = e.action, n = e.instance, i = e.state, s = e.allPlugins, a = e.allMatches, l = e.store, u = e.EVENTS;
  try {
    var c = i.plugins, p = i.context, d = r.type, y = d.match(nt), h = t.exact.map(function(w) {
      return w.pluginName;
    });
    y && (h = a.during.map(function(w) {
      return w.pluginName;
    }));
    var v = /* @__PURE__ */ (function(w, I) {
      return function(x, N, j) {
        var k = N.config, L = N.name, O = L + "." + x.type;
        j && (O = j.event);
        var S = x.type.match(nt) ? /* @__PURE__ */ (function(T, E, V, G, R) {
          return function(H, M) {
            var Y = G ? G.name : T, Z = M && jt(M) ? M : V;
            if (G && (!(Z = M && jt(M) ? M : [T]).includes(T) || Z.length !== 1)) throw new Error("Method " + E + " can only abort " + T + " plugin. " + JSON.stringify(Z) + " input valid");
            return q({}, R, { abort: { reason: H, plugins: Z, caller: E, _: Y } });
          };
        })(L, O, I, j, x) : /* @__PURE__ */ (function(T, E) {
          return function() {
            throw new Error(T.type + " action not cancellable. Remove abort in " + E);
          };
        })(x, O);
        return { payload: Sp(x), instance: w, config: k || {}, abort: S };
      };
    })(n, h), m = t.exact.reduce(function(w, I) {
      var x = I.pluginName, N = I.methodName, j = !1;
      return N.match(/^initialize/) || N.match(/^reset/) || (j = !c[x].loaded), p.offline && N.match(/^(page|track|identify)/) && (j = !0), w["" + x] = j, w;
    }, {});
    return Promise.resolve(t.exact.reduce(function(w, I, x) {
      var N = I.pluginName;
      return Promise.resolve(w).then(function(j) {
        function k() {
          return Promise.resolve(j);
        }
        var L = (function() {
          if (t.namespaced && t.namespaced[N]) return Promise.resolve(t.namespaced[N].reduce(function(O, S, T) {
            return Promise.resolve(O).then(function(E) {
              return S.method && ge(S.method) ? ((function(H, M) {
                var Y = Oi(H);
                if (Y && Y.name === M) {
                  var Z = Oi(Y.method);
                  throw new Error([M + " plugin is calling method " + H, "Plugins cant call self", "Use " + Y.method + " " + (Z ? "or " + Z.method : "") + " in " + M + " plugin insteadof " + H].join(`
`));
                }
              })(S.methodName, S.pluginName), Promise.resolve(S.method({ payload: E, instance: n, abort: (V = E, G = N, R = S.pluginName, function(H, M) {
                return q({}, V, { abort: { reason: H, plugins: M || [G], caller: d, from: R || G } });
              }), config: Pi(S.pluginName, c, s), plugins: c })).then(function(H) {
                var M = oe(H) ? H : {};
                return Promise.resolve(q({}, E, M));
              })) : E;
              var V, G, R;
            });
          }, Promise.resolve(r))).then(function(O) {
            j[N] = O;
          });
          j[N] = r;
        })();
        return L && L.then ? L.then(k) : k();
      });
    }, Promise.resolve({}))).then(function(w) {
      return Promise.resolve(t.exact.reduce(function(I, x, N) {
        try {
          var j = t.exact.length === N + 1, k = x.pluginName, L = s[k];
          return Promise.resolve(I).then(function(O) {
            var S = w[k] ? w[k] : {};
            if (y && (S = O), Nr(S, k)) return Ir({ data: S, method: d, instance: n, pluginName: k, store: l }), Promise.resolve(O);
            if (Nr(O, k)) return j && Ir({ data: O, method: d, instance: n, store: l }), Promise.resolve(O);
            if (m.hasOwnProperty(k) && m[k] === !0) return l.dispatch({ type: "queue", plugin: k, payload: S, _: { called: "queue", from: "queueMechanism" } }), Promise.resolve(O);
            var T = v(w[k], s[k]);
            return Promise.resolve(L[d]({ abort: T.abort, payload: S, instance: n, config: Pi(k, c, s), plugins: c })).then(function(E) {
              var V = oe(E) ? E : {}, G = q({}, O, V), R = w[k];
              if (Nr(R, k)) Ir({ data: R, method: d, instance: n, pluginName: k, store: l });
              else {
                var H = d + ":" + k;
                (H.match(/:/g) || []).length < 2 && !d.match(ki) && !d.match(Si) && n.dispatch(q({}, y ? G : S, { type: H, _: { called: H, from: "submethod" } }));
              }
              return Promise.resolve(G);
            });
          });
        } catch (O) {
          return Promise.reject(O);
        }
      }, Promise.resolve(r))).then(function(I) {
        if (!(d.match(nt) || d.match(/^registerPlugin/) || d.match(Si) || d.match(ki) || d.match(/^params/) || d.match(/^userIdChanged/))) {
          if (u.plugins.includes(d), I._ && I._.originalAction === d) return I;
          var x = q({}, I, { _: { originalAction: I.type, called: I.type, from: "engineEnd" } });
          oa(I, t.exact.length) && !d.match(/End$/) && (x = q({}, x, { type: I.type + "Aborted" })), l.dispatch(x);
        }
        return I;
      });
    });
  } catch (w) {
    return Promise.reject(w);
  }
}, nt = /Start$/, ki = /^bootstrap/, Si = /^ready/;
function Ir(e) {
  var t = e.pluginName, r = e.method + "Aborted" + (t ? ":" + t : "");
  e.store.dispatch(q({}, e.data, { type: r, _: { called: r, from: "abort" } }));
}
function Pi(e, t, r) {
  var n = t[e] || r[e];
  return n && n.config ? n.config : {};
}
function ji(e, t) {
  return t.reduce(function(r, n) {
    return n[e] ? r.concat({ methodName: e, pluginName: n.name, method: n[e] }) : r;
  }, []);
}
function Ci(e, t) {
  var r = e.replace(nt, ""), n = t ? ":" + t : "";
  return ["" + e + n, "" + r + n, r + "End" + n];
}
function Nr(e, t) {
  var r = e.abort;
  return !!r && (r === !0 || Ei(r, t) || r && Ei(r.plugins, t));
}
function oa(e, t) {
  var r = e.abort;
  if (!r) return !1;
  if (r === !0 || tt(r)) return !0;
  var n = r.plugins;
  return jt(r) && r.length === t || jt(n) && n.length === t;
}
function jt(e) {
  return Array.isArray(e);
}
function Ei(e, t) {
  return !(!e || !jt(e)) && e.includes(t);
}
function Oi(e) {
  var t = e.match(/(.*):(.*)/);
  return !!t && { method: t[1], name: t[2] };
}
function Sp(e) {
  return Object.keys(e).reduce(function(t, r) {
    return r === "type" || (t[r] = oe(e[r]) ? Object.assign({}, e[r]) : e[r]), t;
  }, {});
}
function Pp(e, t, r) {
  var n = {};
  return function(i) {
    return function(s) {
      return function(a) {
        try {
          var l, u = function(j) {
            return l ? j : s(d);
          }, c = a.type, p = a.plugins, d = a;
          if (a.abort) return Promise.resolve(s(a));
          if (c === U.enablePlugin && i.dispatch({ type: U.initializeStart, plugins: p, disabled: [], fromEnable: !0, meta: a.meta }), c === U.disablePlugin && setTimeout(function() {
            return wi(a.meta.rid, { payload: a });
          }, 0), c === U.initializeEnd) {
            var y = t(), h = Object.keys(y), v = h.filter(function(j) {
              return p.includes(j);
            }).map(function(j) {
              return y[j];
            }), m = [], w = [], I = a.disabled, x = v.map(function(j) {
              var k = j.loaded, L = j.name, O = j.config;
              return sa(j, function() {
                return k({ config: O });
              }, 1e4).then(function(S) {
                return n[L] || (i.dispatch({ type: U.pluginReadyType(L), name: L, events: Object.keys(j).filter(function(T) {
                  return !Yr.includes(T);
                }) }), n[L] = !0), m = m.concat(L), j;
              }).catch(function(S) {
                if (S instanceof Error) throw new Error(S);
                return w = w.concat(S.name), S;
              });
            });
            Promise.all(x).then(function(j) {
              var k = { plugins: m, failed: w, disabled: I };
              setTimeout(function() {
                h.length === x.length + I.length && i.dispatch(q({}, { type: U.ready }, k));
              }, 0);
            });
          }
          var N = (function() {
            if (c !== U.bootstrap) return /^ready:([^:]*)$/.test(c) && setTimeout(function() {
              return aa(i, t, e);
            }, 0), Promise.resolve((function(j, k, L, O, S) {
              try {
                var T = ge(k) ? k() : k, E = j.type, V = E.replace(nt, "");
                if (j._ && j._.called) return Promise.resolve(j);
                var G = L.getState(), R = (Y = T, (Z = G.plugins) === void 0 && (Z = {}), (D = j.options) === void 0 && (D = {}), Object.keys(Y).filter(function(_) {
                  var f = D.plugins || {};
                  return ap(f[_]) ? f[_] : f.all !== !1 && (!Z[_] || Z[_].enabled !== !1);
                }).map(function(_) {
                  return Y[_];
                }));
                E === U.initializeStart && j.fromEnable && (R = Object.keys(G.plugins).filter(function(_) {
                  var f = G.plugins[_];
                  return j.plugins.includes(_) && !f.initialized;
                }).map(function(_) {
                  return T[_];
                }));
                var H = R.map(function(_) {
                  return _.name;
                }), M = (function(_, f) {
                  var P = Ci(_).map(function(b) {
                    return ji(b, f);
                  });
                  return f.reduce(function(b, C) {
                    var z = C.name, A = Ci(_, z).map(function(Q) {
                      return ji(Q, f);
                    }), K = A[0], $ = A[1], F = A[2];
                    return K.length && (b.beforeNS[z] = K), $.length && (b.duringNS[z] = $), F.length && (b.afterNS[z] = F), b;
                  }, { before: P[0], beforeNS: {}, during: P[1], duringNS: {}, after: P[2], afterNS: {} });
                })(E, R);
                return Promise.resolve(Or({ action: j, data: { exact: M.before, namespaced: M.beforeNS }, state: G, allPlugins: T, allMatches: M, instance: L, store: O, EVENTS: S })).then(function(_) {
                  function f() {
                    var C = (function() {
                      if (E.match(nt)) return Promise.resolve(Or({ action: q({}, P, { type: V + "End" }), data: { exact: M.after, namespaced: M.afterNS }, state: G, allPlugins: T, allMatches: M, instance: L, store: O, EVENTS: S })).then(function(z) {
                        z.meta && z.meta.hasCallback && wi(z.meta.rid, { payload: z });
                      });
                    })();
                    return C && C.then ? C.then(function() {
                      return _;
                    }) : _;
                  }
                  if (oa(_, H.length)) return _;
                  var P, b = (function() {
                    if (E !== V) return Promise.resolve(Or({ action: q({}, _, { type: V }), data: { exact: M.during, namespaced: M.duringNS }, state: G, allPlugins: T, allMatches: M, instance: L, store: O, EVENTS: S })).then(function(C) {
                      P = C;
                    });
                    P = _;
                  })();
                  return b && b.then ? b.then(f) : f();
                });
              } catch (_) {
                return Promise.reject(_);
              }
              var Y, Z, D;
            })(a, t, e, i, r)).then(function(j) {
              var k = s(j);
              return l = 1, k;
            });
          })();
          return Promise.resolve(N && N.then ? N.then(u) : u(N));
        } catch (j) {
          return Promise.reject(j);
        }
      };
    };
  };
}
function jp(e) {
  return function(t) {
    return function(r) {
      return function(n) {
        var i = n.type, s = n.key, a = n.value, l = n.options;
        if (i === U.setItem || i === U.removeItem) {
          if (n.abort) return r(n);
          i === U.setItem ? e.setItem(s, a, l) : e.removeItem(s, l);
        }
        return r(n);
      };
    };
  };
}
var Cp = function() {
  var e = this;
  this.before = [], this.after = [], this.addMiddleware = function(t, r) {
    e[r] = e[r].concat(t);
  }, this.removeMiddleware = function(t, r) {
    var n = e[r].findIndex(function(i) {
      return i === t;
    });
    n !== -1 && (e[r] = [].concat(e[r].slice(0, n), e[r].slice(n + 1)));
  }, this.dynamicMiddlewares = function(t) {
    return function(r) {
      return function(n) {
        return function(i) {
          var s = { getState: r.getState, dispatch: function(l) {
            return r.dispatch(l);
          } }, a = e[t].map(function(l) {
            return l(s);
          });
          return lt.apply(void 0, a)(n)(i);
        };
      };
    };
  };
};
function Ep(e) {
  return function(t, r) {
    t === void 0 && (t = {});
    var n = {};
    if (r.type === "initialize:aborted") return t;
    if (/^registerPlugin:([^:]*)$/.test(r.type)) {
      var i = Ii(r.type, "registerPlugin"), s = e()[i];
      if (!s || !i) return t;
      var a = r.enabled, l = s.config;
      return n[i] = { enabled: a, initialized: !!a && !s.initialize, loaded: !!a && !!s.loaded({ config: l }), config: l }, q({}, t, n);
    }
    if (/^initialize:([^:]*)$/.test(r.type)) {
      var u = Ii(r.type, U.initialize), c = e()[u];
      return c && u ? (n[u] = q({}, t[u], { initialized: !0, loaded: !!c.loaded({ config: c.config }) }), q({}, t, n)) : t;
    }
    if (/^ready:([^:]*)$/.test(r.type)) return n[r.name] = q({}, t[r.name], { loaded: !0 }), q({}, t, n);
    switch (r.type) {
      case U.disablePlugin:
        return q({}, t, Ni(r.plugins, !1, t));
      case U.enablePlugin:
        return q({}, t, Ni(r.plugins, !0, t));
      default:
        return t;
    }
  };
}
function Ii(e, t) {
  return e.substring(t.length + 1, e.length);
}
function Ni(e, t, r) {
  return e.reduce(function(n, i) {
    return n[i] = q({}, r[i], { enabled: t }), n;
  }, r);
}
function la(e) {
  try {
    return JSON.parse(JSON.stringify(e));
  } catch {
  }
  return e;
}
var Op = { last: {}, history: [] };
function Ip(e, t) {
  e === void 0 && (e = Op);
  var r = t.options, n = t.meta;
  if (t.type === U.track) {
    var i = la(q({ event: t.event, properties: t.properties }, Object.keys(r).length && { options: r }, { meta: n }));
    return q({}, e, { last: i, history: e.history.concat(i) });
  }
  return e;
}
var Np = { actions: [] };
function zp(e, t) {
  e === void 0 && (e = Np);
  var r = t.payload;
  switch (t.type) {
    case "queue":
      var n;
      return n = r && r.type && r.type === U.identify ? [t].concat(e.actions) : e.actions.concat(t), q({}, e, { actions: n });
    case "dequeue":
      return [];
    default:
      return e;
  }
}
var ca = /#.*$/;
function Ap(e) {
  var t = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e);
  return "/" + (t && t[3] ? t[3].split("?")[0].replace(ca, "") : "");
}
var ua, da, pa, fa, Lp = function(e) {
  if (e === void 0 && (e = {}), !ue) return e;
  var t = document, r = t.title, n = t.referrer, i = window, s = i.location, a = i.innerWidth, l = i.innerHeight, u = s.hash, c = s.search, p = (function(y) {
    var h = (function() {
      if (ue) {
        for (var v, m = document.getElementsByTagName("link"), w = 0; v = m[w]; w++) if (v.getAttribute("rel") === "canonical") return v.getAttribute("href");
      }
    })();
    return h ? h.match(/\?/) ? h : h + y : window.location.href.replace(ca, "");
  })(c), d = { title: r, url: p, path: Ap(p), hash: u, search: c, width: a, height: l };
  return n && n !== "" && (d.referrer = n), q({}, d, e);
}, Tp = { last: {}, history: [] };
function Rp(e, t) {
  e === void 0 && (e = Tp);
  var r = t.options;
  if (t.type === U.page) {
    var n = la(q({ properties: t.properties, meta: t.meta }, Object.keys(r).length && { options: r }));
    return q({}, e, { last: n, history: e.history.concat(n) });
  }
  return e;
}
ua = (function() {
  if (!ue) return !1;
  var e = navigator.appVersion;
  return ~e.indexOf("Win") ? "Windows" : ~e.indexOf("Mac") ? "MacOS" : ~e.indexOf("X11") ? "UNIX" : ~e.indexOf("Linux") ? "Linux" : "Unknown OS";
})(), da = ue ? document.referrer : null, pa = fp(), fa = hp();
var zi = { initialized: !1, sessionId: pr(), app: null, version: null, debug: !1, offline: !!ue && !navigator.onLine, os: { name: ua }, userAgent: ue ? navigator.userAgent : "node", library: { name: qr, version: "0.13.1" }, timezone: fa, locale: pa, campaign: {}, referrer: da };
function Mp(e, t) {
  e === void 0 && (e = zi);
  var r = e.initialized, n = t.campaign;
  switch (t.type) {
    case U.campaign:
      return q({}, e, { campaign: n });
    case U.offline:
      return q({}, e, { offline: !0 });
    case U.online:
      return q({}, e, { offline: !1 });
    default:
      return r ? e : q({}, zi, e, { initialized: !0 });
  }
}
var $p = ["plugins", "reducers", "storage"];
function Dp(e, t, r) {
  if (ue) {
    var n = window[(r ? "add" : "remove") + "EventListener"];
    e.split(" ").forEach(function(i) {
      n(i, t);
    });
  }
}
function Fp(e) {
  var t = Dp.bind(null, "online offline", function(r) {
    return Promise.resolve(!navigator.onLine).then(e);
  });
  return t(!0), function(r) {
    return t(!1);
  };
}
function ha() {
  return We(qr, []), function(e) {
    return function(t, r, n) {
      var i = e(t, r, n), s = i.dispatch;
      return Object.assign(i, { dispatch: function(a) {
        return ot[at][qr].push(a.action || a), s(a);
      } });
    };
  };
}
function Ai(e) {
  return function() {
    return lt(lt.apply(null, arguments), ha());
  };
}
function zr(e) {
  return e ? lp(e) ? e : [e] : [];
}
function Li(e, t, r) {
  e === void 0 && (e = {});
  var n, i, s = pr();
  return t && (yt[s] = (n = t, i = (function(a) {
    for (var l, u = a || Array.prototype.slice.call(arguments), c = 0; c < u.length; c++) if (ge(u[c])) {
      l = u[c];
      break;
    }
    return l;
  })(r), function(a) {
    i && i(a), n(a);
  })), q({}, e, { rid: s, ts: (/* @__PURE__ */ new Date()).getTime() }, t ? { hasCallback: !0 } : {});
}
function Bp(e) {
  e === void 0 && (e = {});
  var t = e.reducers || {}, r = e.initialUser || {}, n = (e.plugins || []).reduce(function(_, f) {
    if (ge(f)) return _.middlewares = _.middlewares.concat(f), _;
    if (f.NAMESPACE && (f.name = f.NAMESPACE), !f.name) throw new Error("https://lytics.dev/errors/1");
    f.config || (f.config = {});
    var P = f.EVENTS ? Object.keys(f.EVENTS).map(function(z) {
      return f.EVENTS[z];
    }) : [];
    _.pluginEnabled[f.name] = !(f.enabled === !1 || f.config.enabled === !1), delete f.enabled, f.methods && (_.methods[f.name] = Object.keys(f.methods).reduce(function(z, A) {
      var K;
      return z[A] = (K = f.methods[A], function() {
        for (var $ = Array.prototype.slice.call(arguments), F = new Array(K.length), Q = 0; Q < $.length; Q++) F[Q] = $[Q];
        return F[F.length] = k, K.apply({ instance: k }, F);
      }), z;
    }, {}), delete f.methods);
    var b = Object.keys(f).concat(P), C = new Set(_.events.concat(b));
    if (_.events = Array.from(C), _.pluginsArray = _.pluginsArray.concat(f), _.plugins[f.name]) throw new Error(f.name + "AlreadyLoaded");
    return _.plugins[f.name] = f, _.plugins[f.name].loaded || (_.plugins[f.name].loaded = function() {
      return !0;
    }), _;
  }, { plugins: {}, pluginEnabled: {}, methods: {}, pluginsArray: [], middlewares: [], events: [] }), i = e.storage ? e.storage : { getItem: Be, setItem: We, removeItem: dt }, s = /* @__PURE__ */ (function(_) {
    return function(f, P, b) {
      return P.getState("user")[f] || (b && oe(b) && b[f] ? b[f] : _i(_)[f] || Be(Jr(f)) || null);
    };
  })(i), a = n.plugins, l = n.events.filter(function(_) {
    return !Yr.includes(_);
  }).sort(), u = new Set(l.concat(qt).filter(function(_) {
    return !Yr.includes(_);
  })), c = Array.from(u).sort(), p = function() {
    return a;
  }, d = new Cp(), y = d.addMiddleware, h = d.removeMiddleware, v = d.dynamicMiddlewares, m = function() {
    throw new Error("Abort disabled inListener");
  }, w = gp(), I = _i(i), x = q({}, I, r, w.an_uid ? { userId: w.an_uid } : {}, w.an_aid ? { anonymousId: w.an_aid } : {});
  x.anonymousId || (x.anonymousId = pr());
  var N = q({ enable: function(_, f) {
    return new Promise(function(P) {
      M.dispatch({ type: U.enablePlugin, plugins: zr(_), _: { originalAction: U.enablePlugin } }, P, [f]);
    });
  }, disable: function(_, f) {
    return new Promise(function(P) {
      M.dispatch({ type: U.disablePlugin, plugins: zr(_), _: { originalAction: U.disablePlugin } }, P, [f]);
    });
  } }, n.methods), j = !1, k = { identify: function(_, f, P, b) {
    try {
      var C = tt(_) ? _ : null, z = oe(_) ? _ : f, A = P || {}, K = k.user();
      We(Jr(ke), C);
      var $ = C || z.userId || s(ke, k, z);
      return Promise.resolve(new Promise(function(F) {
        M.dispatch(q({ type: U.identifyStart, userId: $, traits: z || {}, options: A, anonymousId: K.anonymousId }, K.id && K.id !== C && { previousId: K.id }), F, [f, P, b]);
      }));
    } catch (F) {
      return Promise.reject(F);
    }
  }, track: function(_, f, P, b) {
    try {
      var C = oe(_) ? _.event : _;
      if (!C || !tt(C)) throw new Error("EventMissing");
      var z = oe(_) ? _ : f || {}, A = oe(P) ? P : {};
      return Promise.resolve(new Promise(function(K) {
        M.dispatch({ type: U.trackStart, event: C, properties: z, options: A, userId: s(ke, k, f), anonymousId: s(Qe, k, f) }, K, [f, P, b]);
      }));
    } catch (K) {
      return Promise.reject(K);
    }
  }, page: function(_, f, P) {
    try {
      var b = oe(_) ? _ : {}, C = oe(f) ? f : {};
      return Promise.resolve(new Promise(function(z) {
        M.dispatch({ type: U.pageStart, properties: Lp(b), options: C, userId: s(ke, k, b), anonymousId: s(Qe, k, b) }, z, [_, f, P]);
      }));
    } catch (z) {
      return Promise.reject(z);
    }
  }, user: function(_) {
    if (_ === ke || _ === "id") return s(ke, k);
    if (_ === Qe || _ === "anonId") return s(Qe, k);
    var f = k.getState("user");
    return _ ? gi(f, _) : f;
  }, reset: function(_) {
    return new Promise(function(f) {
      M.dispatch({ type: U.resetStart }, f, _);
    });
  }, ready: function(_) {
    return j && _({ plugins: N, instance: k }), k.on(U.ready, function(f) {
      _ && _(f), j = !0;
    });
  }, on: function(_, f) {
    if (!_ || !ge(f)) return !1;
    if (_ === U.bootstrap) throw new Error(".on disabled for " + _);
    var P = /Start$|Start:/;
    if (_ === "*") {
      var b = function(K) {
        return function($) {
          return function(F) {
            return F.type.match(P) && f({ payload: F, instance: k, plugins: a }), $(F);
          };
        };
      }, C = function(K) {
        return function($) {
          return function(F) {
            return F.type.match(P) || f({ payload: F, instance: k, plugins: a }), $(F);
          };
        };
      };
      return y(b, Bt), y(C, Wt), function() {
        h(b, Bt), h(C, Wt);
      };
    }
    var z = _.match(P) ? Bt : Wt, A = function(K) {
      return function($) {
        return function(F) {
          return F.type === _ && f({ payload: F, instance: k, plugins: a, abort: m }), $(F);
        };
      };
    };
    return y(A, z), function() {
      return h(A, z);
    };
  }, once: function(_, f) {
    if (!_ || !ge(f)) return !1;
    if (_ === U.bootstrap) throw new Error(".once disabled for " + _);
    var P = k.on(_, function(b) {
      f({ payload: b.payload, instance: k, plugins: a, abort: m }), P();
    });
    return P;
  }, getState: function(_) {
    var f = M.getState();
    return _ ? gi(f, _) : Object.assign({}, f);
  }, dispatch: function(_) {
    var f = tt(_) ? { type: _ } : _;
    if (qt.includes(f.type)) throw new Error("reserved action " + f.type);
    var P = q({}, f, { _: q({ originalAction: f.type }, _._ || {}) });
    M.dispatch(P);
  }, enablePlugin: N.enable, disablePlugin: N.disable, plugins: N, storage: { getItem: i.getItem, setItem: function(_, f, P) {
    M.dispatch({ type: U.setItemStart, key: _, value: f, options: P });
  }, removeItem: function(_, f) {
    M.dispatch({ type: U.removeItemStart, key: _, options: f });
  } }, setAnonymousId: function(_, f) {
    k.storage.setItem(je, _, f);
  }, events: { core: qt, plugins: l } }, L = n.middlewares.concat([function(_) {
    return function(f) {
      return function(P) {
        return P.meta || (P.meta = Li()), f(P);
      };
    };
  }, v(Bt), Pp(k, p, { all: c, plugins: l }), jp(i), bp(k), wp(k), v(Wt)]), O = { context: Mp, user: _p(i), page: Rp, track: Ip, plugins: Ep(p), queue: zp }, S = lt, T = lt;
  if (ue && e.debug) {
    var E = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    E && (S = E({ trace: !0, traceLimit: 25 })), T = function() {
      return arguments.length === 0 ? ha() : oe(typeof arguments[0]) ? Ai() : Ai().apply(null, arguments);
    };
  }
  var V, G = (function(_) {
    return Object.keys(_).reduce(function(f, P) {
      return $p.includes(P) || (f[P] = _[P]), f;
    }, {});
  })(e), R = n.pluginsArray.reduce(function(_, f) {
    var P = f.name, b = f.config, C = f.loaded, z = n.pluginEnabled[P];
    return _[P] = { enabled: z, initialized: !!z && !f.initialize, loaded: !!C({ config: b }), config: b }, _;
  }, {}), H = { context: G, user: x, plugins: R }, M = ia((function(_) {
    for (var f = Object.keys(_), P = {}, b = 0; b < f.length; b++) {
      var C = f[b];
      typeof _[C] === Se && (P[C] = _[C]);
    }
    var z, A = Object.keys(P);
    try {
      (function(K) {
        Object.keys(K).forEach(function($) {
          var F = K[$];
          if (typeof F(void 0, { type: Ur }) === ve || typeof F(void 0, { type: vp }) === ve) throw new Error(_t + " " + $ + " " + ve);
        });
      })(P);
    } catch (K) {
      z = K;
    }
    return function(K, $) {
      if (K === void 0 && (K = {}), z) throw z;
      for (var F = !1, Q = {}, ne = 0; ne < A.length; ne++) {
        var pe = A[ne], Ee = K[pe], gr = (0, P[pe])(Ee, $);
        if (typeof gr === ve) {
          var xa = yp(pe, $);
          throw new Error(xa);
        }
        Q[pe] = gr, F = F || gr !== Ee;
      }
      return F ? Q : K;
    };
  })(q({}, O, t)), H, T(S(xp.apply(void 0, L))));
  M.dispatch = (V = M.dispatch, function(_, f, P) {
    var b = q({}, _, { meta: Li(_.meta, f, zr(P)) });
    return V.apply(null, [b]);
  });
  var Y = Object.keys(a);
  M.dispatch({ type: U.bootstrap, plugins: Y, config: G, params: w, user: x, initialUser: r, persistedUser: I });
  var Z = Y.filter(function(_) {
    return n.pluginEnabled[_];
  }), D = Y.filter(function(_) {
    return !n.pluginEnabled[_];
  });
  return M.dispatch({ type: U.registerPlugins, plugins: Y, enabled: n.pluginEnabled }), n.pluginsArray.map(function(_, f) {
    var P = _.bootstrap, b = _.config, C = _.name;
    P && ge(P) && P({ instance: k, config: b, payload: _ }), M.dispatch({ type: U.registerPluginType(C), name: C, enabled: n.pluginEnabled[C], plugin: _ }), n.pluginsArray.length === f + 1 && M.dispatch({ type: U.initializeStart, plugins: Z, disabled: D });
  }), Fp(function(_) {
    M.dispatch({ type: _ ? U.offline : U.online });
  }), (function(_, f, P) {
    setInterval(function() {
      return aa(_, f, P);
    }, 3e3);
  })(M, p, k), k;
}
var Bt = "before", Wt = "after", Re = "cookie", ze = va(), ga = fr, Wp = fr;
function ma(e) {
  return ze ? fr(e, "", -1) : dt(e);
}
function va() {
  if (ze !== void 0) return ze;
  var e = Re + Re;
  try {
    fr(e, e), ze = document.cookie.indexOf(e) !== -1, ma(e);
  } catch {
    ze = !1;
  }
  return ze;
}
function fr(e, t, r, n, i, s) {
  if (typeof window < "u") {
    var a = arguments.length > 1;
    return ze === !1 && (a ? We(e, t) : Be(e)), a ? document.cookie = e + "=" + encodeURIComponent(t) + (r ? "; expires=" + new Date(+/* @__PURE__ */ new Date() + 1e3 * r).toUTCString() + (n ? "; path=" + n : "") + (i ? "; domain=" + i : "") + (s ? "; secure" : "") : "") : decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0]);
  }
}
var xe = "localStorage", Kp = _n.bind(null, xe);
pt(xe, "getItem", Be);
pt(xe, "setItem", We);
pt(xe, "removeItem", dt);
var be = "sessionStorage", Hp = _n.bind(null, be);
pt(be, "getItem", Be);
pt(be, "setItem", We);
pt(be, "removeItem", dt);
function it(e) {
  var t = e;
  try {
    if ((t = JSON.parse(e)) === "true") return !0;
    if (t === "false") return !1;
    if (oe(t)) return t;
    parseFloat(t) === t && (t = parseFloat(t));
  } catch {
  }
  if (t !== null && t !== "") return t;
}
var Vp = Kp(), Gp = Hp(), Up = va();
function ya(e, t) {
  if (e) {
    var r = wn(t), n = !jn(r), i = kn(r) ? it(localStorage.getItem(e)) : void 0;
    if (n && !Xe(i)) return i;
    var s = Sn(r) ? it(ga(e)) : void 0;
    if (n && s) return s;
    var a = Pn(r) ? it(sessionStorage.getItem(e)) : void 0;
    if (n && a) return a;
    var l = Be(e);
    return n ? l : { localStorage: i, sessionStorage: a, cookie: s, global: l };
  }
}
function qp(e, t, r) {
  if (e && !Xe(t)) {
    var n = {}, i = wn(r), s = JSON.stringify(t), a = !jn(i);
    return kn(i) && (n[xe] = Kt(xe, t, it(localStorage.getItem(e))), localStorage.setItem(e, s), a) ? n[xe] : Sn(i) && (n[Re] = Kt(Re, t, it(ga(e))), Wp(e, s), a) ? n[Re] : Pn(i) && (n[be] = Kt(be, t, it(sessionStorage.getItem(e))), sessionStorage.setItem(e, s), a) ? n[be] : (n[Le] = Kt(Le, t, Be(e)), We(e, t), a ? n[Le] : n);
  }
}
function Yp(e, t) {
  if (e) {
    var r = wn(t), n = ya(e, Qs), i = {};
    return !Xe(n.localStorage) && kn(r) && (localStorage.removeItem(e), i[xe] = n.localStorage), !Xe(n.cookie) && Sn(r) && (ma(e), i[Re] = n.cookie), !Xe(n.sessionStorage) && Pn(r) && (sessionStorage.removeItem(e), i[be] = n.sessionStorage), !Xe(n.global) && hr(r, Le) && (dt(e), i[Le] = n.global), i;
  }
}
function wn(e) {
  return e ? tt(e) ? e : e.storage : Xs;
}
function kn(e) {
  return Vp && hr(e, xe);
}
function Sn(e) {
  return Up && hr(e, Re);
}
function Pn(e) {
  return Gp && hr(e, be);
}
function jn(e) {
  return e === Qs || e === "all";
}
function hr(e, t) {
  return e === Xs || e === t || jn(e);
}
function Kt(e, t, r) {
  return { location: e, current: t, previous: r };
}
var Jp = { setItem: qp, getItem: ya, removeItem: Yp };
function Zp(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ti(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ri(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ti(Object(r), !0).forEach(function(n) {
      Zp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ti(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Xp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
    storage: Jp
  };
  return Bp(Ri(Ri({}, t), e));
}
function Mi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ht(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Mi(Object(r), !0).forEach(function(n) {
      Qp(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Mi(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Qp(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
var ef = {
  debug: !1,
  containerId: null,
  dataLayerName: "dataLayer",
  dataLayer: void 0,
  preview: void 0,
  auth: void 0,
  execution: "async"
  // assumesPageview: true,
}, Vt;
function tf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = "https://www.googletagmanager.com/gtm.js";
  return {
    name: "google-tag-manager",
    config: Ht(Ht({}, ef), e),
    initialize: function(n) {
      var i = n.config, s = i.containerId, a = i.dataLayerName, l = i.customScriptSrc, u = i.preview, c = i.auth, p = i.execution, d = i.nonce;
      if (!s)
        throw new Error("No google tag manager containerId defined");
      if (u && !c)
        throw new Error("When enabling preview mode, both preview and auth parameters must be defined");
      var y = l || t;
      Di(s, y) || ((function(h, v, m, w, I) {
        h[w] = h[w] || [], h[w].push({
          "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
          event: "gtm.js"
        });
        var x = v.getElementsByTagName(m)[0], N = v.createElement(m), j = w != "dataLayer" ? "&l=" + w : "", k = u ? "&gtm_preview=" + u + "&gtm_auth=" + c + "&gtm_cookies_win=x" : "";
        p && (N[p] = !0), N.src = "".concat(y, "?id=") + I + j + k, d && N.setAttribute("nonce", d), x.parentNode.insertBefore(N, x);
      })(window, document, "script", a, s), Vt = a, i.dataLayer = window[a]);
    },
    page: function(n) {
      var i = n.payload;
      n.options, n.instance;
      var s = n.config;
      typeof s.dataLayer < "u" && s.dataLayer.push(i.properties);
    },
    track: function(n) {
      var i = n.payload;
      n.options;
      var s = n.config;
      if (typeof s.dataLayer < "u") {
        var a = i.anonymousId, l = i.userId, u = i.properties, c = u;
        l && (c.userId = l), a && (c.anonymousId = a), u.category || (c.category = "All"), s.debug && console.log("dataLayer push", Ht({
          event: i.event
        }, c)), s.dataLayer.push(Ht({
          event: i.event
        }, c));
      }
    },
    loaded: function() {
      var n = !!Vt && !!(window[Vt] && Array.prototype.push !== window[Vt].push);
      return Di(e.containerId, e.customScriptSrc || t) && n;
    }
  };
}
var $i = {};
function Di(e, t) {
  var r = $i[e];
  if (!r) {
    var n = t.replace(/^https?:\/\//, "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    r = new RegExp(n + ".*[?&]id=" + e), $i[e] = r;
  }
  var i = document.querySelectorAll("script[src]");
  return !!Object.keys(i).filter(function(s) {
    return (i[s].src || "").match(r);
  }).length;
}
var rf = tf;
const nf = "G-Y274FMXQNP", sf = ({ containerId: e = nf }) => Xp({
  app: "awesome-app",
  plugins: [
    rf({
      containerId: e
    })
  ]
});
console.log("init", sf);
const hf = () => xt(
  (t, r, n, i) => {
    typeof window.gtag == "function" ? window.gtag("event", t, {
      event_category: r,
      event_label: n,
      ...i !== void 0 && { value: i }
      // Conditionally add value
    }) : console.warn("gtag is not defined. Google Analytics script might not be loaded.");
  },
  []
  // No dependencies, so the function reference is stable
);
export {
  df as CommandDialogSearch,
  ff as FooterPlexicus,
  pf as NavbarPlexicus,
  Vd as SelectLanguage,
  sf as analytics,
  hf as useTrackClick
};
