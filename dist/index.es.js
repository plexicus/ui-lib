(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(`/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){.ui-lib *,.ui-lib :before,.ui-lib :after,.ui-lib ::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-animation-delay:0s;--tw-animation-direction:normal;--tw-animation-duration:initial;--tw-animation-fill-mode:none;--tw-animation-iteration-count:1;--tw-enter-blur:0;--tw-enter-opacity:1;--tw-enter-rotate:0;--tw-enter-scale:1;--tw-enter-translate-x:0;--tw-enter-translate-y:0;--tw-exit-blur:0;--tw-exit-opacity:1;--tw-exit-rotate:0;--tw-exit-scale:1;--tw-exit-translate-x:0;--tw-exit-translate-y:0}}}@layer theme{.ui-lib,.ui-lib :host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-green-100:oklch(96.2% .044 156.743);--color-green-200:oklch(92.5% .084 155.995);--color-green-800:oklch(44.8% .119 151.328);--color-violet-800:oklch(43.2% .232 292.759);--color-purple-200:oklch(90.2% .063 306.703);--color-purple-300:oklch(82.7% .119 306.383);--color-purple-700:oklch(49.6% .265 301.924);--color-gray-50:oklch(98.5% .002 247.839);--color-gray-100:oklch(96.7% .003 264.542);--color-gray-200:oklch(92.8% .006 264.531);--color-gray-300:oklch(87.2% .01 258.338);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-500:oklch(55.1% .027 264.364);--color-gray-600:oklch(44.6% .03 256.802);--color-gray-700:oklch(37.3% .034 259.733);--color-gray-900:oklch(21% .034 264.665);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-sm:24rem;--container-lg:32rem;--container-xl:36rem;--container-4xl:56rem;--container-7xl:80rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wider:.05em;--tracking-widest:.1em;--radius-xs:.125rem;--ease-in:cubic-bezier(.4,0,1,1);--ease-out:cubic-bezier(0,0,.2,1);--ease-in-out:cubic-bezier(.4,0,.2,1);--blur-xs:4px;--blur-sm:8px;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{.ui-lib *,.ui-lib :after,.ui-lib :before,.ui-lib ::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib ::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}.ui-lib html,.ui-lib :host{-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}.ui-lib hr{height:0;color:inherit;border-top-width:1px}.ui-lib abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.ui-lib h1,.ui-lib h2,.ui-lib h3,.ui-lib h4,.ui-lib h5,.ui-lib h6{font-size:inherit;font-weight:inherit}.ui-lib a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}.ui-lib b,.ui-lib strong{font-weight:bolder}.ui-lib code,.ui-lib kbd,.ui-lib samp,.ui-lib pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}.ui-lib small{font-size:80%}.ui-lib sub,.ui-lib sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}.ui-lib sub{bottom:-.25em}.ui-lib sup{top:-.5em}.ui-lib table{text-indent:0;border-color:inherit;border-collapse:collapse}.ui-lib :-moz-focusring{outline:auto}.ui-lib progress{vertical-align:baseline}.ui-lib summary{display:list-item}.ui-lib ol,.ui-lib ul,.ui-lib menu{list-style:none}.ui-lib img,.ui-lib svg,.ui-lib video,.ui-lib canvas,.ui-lib audio,.ui-lib iframe,.ui-lib embed,.ui-lib object{vertical-align:middle;display:block}.ui-lib img,.ui-lib video{max-width:100%;height:auto}.ui-lib button,.ui-lib input,.ui-lib select,.ui-lib optgroup,.ui-lib textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib ::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}.ui-lib :where(select:is([multiple],[size])) optgroup{font-weight:bolder}.ui-lib :where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}.ui-lib ::file-selector-button{margin-inline-end:4px}.ui-lib ::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){.ui-lib ::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){.ui-lib ::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}.ui-lib textarea{resize:vertical}.ui-lib ::-webkit-search-decoration{-webkit-appearance:none}.ui-lib ::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}.ui-lib ::-webkit-datetime-edit{display:inline-flex}.ui-lib ::-webkit-datetime-edit-fields-wrapper{padding:0}.ui-lib ::-webkit-datetime-edit{padding-block:0}.ui-lib ::-webkit-datetime-edit-year-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-month-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-day-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-hour-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-minute-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-second-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-millisecond-field{padding-block:0}.ui-lib ::-webkit-datetime-edit-meridiem-field{padding-block:0}.ui-lib ::-webkit-calendar-picker-indicator{line-height:1}.ui-lib :-moz-ui-invalid{box-shadow:none}.ui-lib button,.ui-lib input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::file-selector-button{-webkit-appearance:button;-moz-appearance:button;appearance:button}.ui-lib ::-webkit-inner-spin-button{height:auto}.ui-lib ::-webkit-outer-spin-button{height:auto}.ui-lib [hidden]:where(:not([hidden=until-found])){display:none!important}.ui-lib *{border-color:var(--border);outline-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib *{outline-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib{background-color:var(--background);color:var(--foreground)}}@layer components;@layer utilities{.ui-lib .pointer-events-none{pointer-events:none}.ui-lib .collapse{visibility:collapse}.ui-lib .invisible{visibility:hidden}.ui-lib .visible{visibility:visible}.ui-lib .sr-only{clip:rect(0,0,0,0);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.ui-lib .not-sr-only{clip:auto;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.ui-lib .absolute{position:absolute}.ui-lib .fixed{position:fixed}.ui-lib .relative{position:relative}.ui-lib .static{position:static}.ui-lib .sticky{position:sticky}.ui-lib .inset-0{inset:calc(var(--spacing)*0)}.ui-lib .top-0{top:calc(var(--spacing)*0)}.ui-lib .top-1{top:calc(var(--spacing)*1)}.ui-lib .top-1\\/2{top:50%}.ui-lib .top-4{top:calc(var(--spacing)*4)}.ui-lib .top-16{top:calc(var(--spacing)*16)}.ui-lib .top-60{top:calc(var(--spacing)*60)}.ui-lib .top-\\[50\\%\\]{top:50%}.ui-lib .top-full{top:100%}.ui-lib .right-0{right:calc(var(--spacing)*0)}.ui-lib .right-1{right:calc(var(--spacing)*1)}.ui-lib .right-2{right:calc(var(--spacing)*2)}.ui-lib .right-4{right:calc(var(--spacing)*4)}.ui-lib .left-0{left:calc(var(--spacing)*0)}.ui-lib .left-3{left:calc(var(--spacing)*3)}.ui-lib .left-\\[50\\%\\]{left:50%}.ui-lib .isolate{isolation:isolate}.ui-lib .isolation-auto{isolation:auto}.ui-lib .z-30{z-index:30}.ui-lib .z-40{z-index:40}.ui-lib .z-50{z-index:50}.ui-lib .container{width:100%}@media (min-width:40rem){.ui-lib .container{max-width:40rem}}@media (min-width:48rem){.ui-lib .container{max-width:48rem}}@media (min-width:64rem){.ui-lib .container{max-width:64rem}}@media (min-width:80rem){.ui-lib .container{max-width:80rem}}@media (min-width:96rem){.ui-lib .container{max-width:96rem}}.ui-lib .-mx-1{margin-inline:calc(var(--spacing)*-1)}.ui-lib .mx-auto{margin-inline:auto}.ui-lib .my-1{margin-block:calc(var(--spacing)*1)}.ui-lib .mt-1{margin-top:calc(var(--spacing)*1)}.ui-lib .mt-2{margin-top:calc(var(--spacing)*2)}.ui-lib .mt-6{margin-top:calc(var(--spacing)*6)}.ui-lib .mt-8{margin-top:calc(var(--spacing)*8)}.ui-lib .mt-24{margin-top:calc(var(--spacing)*24)}.ui-lib .mr-1{margin-right:calc(var(--spacing)*1)}.ui-lib .mr-2{margin-right:calc(var(--spacing)*2)}.ui-lib .mr-4{margin-right:calc(var(--spacing)*4)}.ui-lib .mb-3{margin-bottom:calc(var(--spacing)*3)}.ui-lib .mb-4{margin-bottom:calc(var(--spacing)*4)}.ui-lib .mb-6{margin-bottom:calc(var(--spacing)*6)}.ui-lib .ml-0{margin-left:calc(var(--spacing)*0)}.ui-lib .ml-1{margin-left:calc(var(--spacing)*1)}.ui-lib .ml-4{margin-left:calc(var(--spacing)*4)}.ui-lib .ml-auto{margin-left:auto}.ui-lib .line-clamp-1{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.ui-lib .line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.ui-lib .block{display:block}.ui-lib .contents{display:contents}.ui-lib .flex{display:flex}.ui-lib .flow-root{display:flow-root}.ui-lib .grid{display:grid}.ui-lib .hidden{display:none}.ui-lib .inline{display:inline}.ui-lib .inline-block{display:inline-block}.ui-lib .inline-flex{display:inline-flex}.ui-lib .inline-grid{display:inline-grid}.ui-lib .inline-table{display:inline-table}.ui-lib .list-item{display:list-item}.ui-lib .table{display:table}.ui-lib .table-caption{display:table-caption}.ui-lib .table-cell{display:table-cell}.ui-lib .table-column{display:table-column}.ui-lib .table-column-group{display:table-column-group}.ui-lib .table-footer-group{display:table-footer-group}.ui-lib .table-header-group{display:table-header-group}.ui-lib .table-row{display:table-row}.ui-lib .table-row-group{display:table-row-group}.ui-lib .size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.ui-lib .h-3{height:calc(var(--spacing)*3)}.ui-lib .h-3\\.5{height:calc(var(--spacing)*3.5)}.ui-lib .h-4{height:calc(var(--spacing)*4)}.ui-lib .h-5{height:calc(var(--spacing)*5)}.ui-lib .h-6{height:calc(var(--spacing)*6)}.ui-lib .h-7{height:calc(var(--spacing)*7)}.ui-lib .h-8{height:calc(var(--spacing)*8)}.ui-lib .h-9{height:calc(var(--spacing)*9)}.ui-lib .h-10{height:calc(var(--spacing)*10)}.ui-lib .h-11{height:calc(var(--spacing)*11)}.ui-lib .h-12{height:calc(var(--spacing)*12)}.ui-lib .h-14{height:calc(var(--spacing)*14)}.ui-lib .h-16{height:calc(var(--spacing)*16)}.ui-lib .h-36{height:calc(var(--spacing)*36)}.ui-lib .h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.ui-lib .h-full{height:100%}.ui-lib .h-px{height:1px}.ui-lib .h-screen{height:100vh}.ui-lib .max-h-96{max-height:calc(var(--spacing)*96)}.ui-lib .max-h-\\[--radix-select-content-available-height\\]{max-height:--radix-select-content-available-height}.ui-lib .max-h-\\[calc\\(100vh-80px\\)\\]{max-height:calc(100vh - 80px)}.ui-lib .max-h-\\[calc\\(100vh-600px\\)\\]{max-height:calc(100vh - 600px)}.ui-lib .max-h-full{max-height:100%}.ui-lib .w-3{width:calc(var(--spacing)*3)}.ui-lib .w-3\\.5{width:calc(var(--spacing)*3.5)}.ui-lib .w-4{width:calc(var(--spacing)*4)}.ui-lib .w-6{width:calc(var(--spacing)*6)}.ui-lib .w-7{width:calc(var(--spacing)*7)}.ui-lib .w-8{width:calc(var(--spacing)*8)}.ui-lib .w-9{width:calc(var(--spacing)*9)}.ui-lib .w-10{width:calc(var(--spacing)*10)}.ui-lib .w-12{width:calc(var(--spacing)*12)}.ui-lib .w-28{width:calc(var(--spacing)*28)}.ui-lib .w-64{width:calc(var(--spacing)*64)}.ui-lib .w-\\[24px\\]{width:24px}.ui-lib .w-\\[150px\\]{width:150px}.ui-lib .w-\\[200\\%\\]{width:200%}.ui-lib .w-auto{width:auto}.ui-lib .w-full{width:100%}.ui-lib .max-w-7xl{max-width:var(--container-7xl)}.ui-lib .max-w-\\[90vw\\]{max-width:90vw}.ui-lib .max-w-\\[calc\\(100\\%-2rem\\)\\]{max-width:calc(100% - 2rem)}.ui-lib .max-w-none{max-width:none}.ui-lib .max-w-sm{max-width:var(--container-sm)}.ui-lib .min-w-0{min-width:calc(var(--spacing)*0)}.ui-lib .min-w-\\[8rem\\]{min-width:8rem}.ui-lib .min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.ui-lib .flex-1{flex:1}.ui-lib .shrink{flex-shrink:1}.ui-lib .shrink-0{flex-shrink:0}.ui-lib .grow{flex-grow:1}.ui-lib .border-collapse{border-collapse:collapse}.ui-lib .origin-\\[--radix-select-content-transform-origin\\]{transform-origin:--radix-select-content-transform-origin}.ui-lib .origin-right{transform-origin:100%}.ui-lib .origin-top{transform-origin:top}.ui-lib .translate-x-0{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-\\[-50\\%\\]{--tw-translate-x:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .-translate-y-1\\/2{--tw-translate-y: -50% ;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-y-\\[-50\\%\\]{--tw-translate-y:-50%;translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .translate-none{translate:none}.ui-lib .scale-3d{scale:var(--tw-scale-x)var(--tw-scale-y)var(--tw-scale-z)}.ui-lib .rotate-180{rotate:180deg}.ui-lib .transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.ui-lib .cursor-default{cursor:default}.ui-lib .cursor-pointer{cursor:pointer}.ui-lib .touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,)var(--tw-pan-y,)var(--tw-pinch-zoom,)}.ui-lib .resize{resize:both}.ui-lib .scroll-py-1{scroll-padding-block:calc(var(--spacing)*1)}.ui-lib .appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.ui-lib .grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.ui-lib .grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .flex-col{flex-direction:column}.ui-lib .flex-col-reverse{flex-direction:column-reverse}.ui-lib .flex-wrap{flex-wrap:wrap}.ui-lib .items-center{align-items:center}.ui-lib .items-start{align-items:flex-start}.ui-lib .justify-between{justify-content:space-between}.ui-lib .justify-center{justify-content:center}.ui-lib .justify-start{justify-content:flex-start}.ui-lib .gap-1{gap:calc(var(--spacing)*1)}.ui-lib .gap-2{gap:calc(var(--spacing)*2)}.ui-lib .gap-3{gap:calc(var(--spacing)*3)}.ui-lib .gap-4{gap:calc(var(--spacing)*4)}.ui-lib .gap-6{gap:calc(var(--spacing)*6)}.ui-lib .gap-8{gap:calc(var(--spacing)*8)}.ui-lib :where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*4)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*4)*calc(1 - var(--tw-space-y-reverse)))}.ui-lib :where(.space-y-reverse>:not(:last-child)){--tw-space-y-reverse:1}.ui-lib :where(.space-x-2>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-start:calc(calc(var(--spacing)*2)*var(--tw-space-x-reverse));margin-inline-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-x-reverse)))}.ui-lib :where(.space-x-reverse>:not(:last-child)){--tw-space-x-reverse:1}.ui-lib :where(.divide-x>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-style:var(--tw-border-style);border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-end-width:calc(1px*calc(1 - var(--tw-divide-x-reverse)))}.ui-lib :where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse));border-bottom-width:calc(1px*calc(1 - var(--tw-divide-y-reverse)))}.ui-lib :where(.divide-y-reverse>:not(:last-child)){--tw-divide-y-reverse:1}.ui-lib .truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.ui-lib .overflow-hidden{overflow:hidden}.ui-lib .overflow-visible{overflow:visible}.ui-lib .overflow-x-hidden{overflow-x:hidden}.ui-lib .overflow-y-auto{overflow-y:auto}.ui-lib .rounded{border-radius:.25rem}.ui-lib .rounded-full{border-radius:3.40282e38px}.ui-lib .rounded-lg{border-radius:var(--radius)}.ui-lib .rounded-md{border-radius:calc(var(--radius) - 2px)}.ui-lib .rounded-sm{border-radius:calc(var(--radius) - 4px)}.ui-lib .rounded-xl{border-radius:calc(var(--radius) + 4px)}.ui-lib .rounded-xs{border-radius:var(--radius-xs)}.ui-lib .rounded-s{border-start-start-radius:.25rem;border-end-start-radius:.25rem}.ui-lib .rounded-ss{border-start-start-radius:.25rem}.ui-lib .rounded-e{border-start-end-radius:.25rem;border-end-end-radius:.25rem}.ui-lib .rounded-se{border-start-end-radius:.25rem}.ui-lib .rounded-ee{border-end-end-radius:.25rem}.ui-lib .rounded-es{border-end-start-radius:.25rem}.ui-lib .rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.ui-lib .rounded-l{border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-tl{border-top-left-radius:.25rem}.ui-lib .rounded-r{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.ui-lib .rounded-tr{border-top-right-radius:.25rem}.ui-lib .rounded-b{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.ui-lib .rounded-br{border-bottom-right-radius:.25rem}.ui-lib .rounded-bl{border-bottom-left-radius:.25rem}.ui-lib .border{border-style:var(--tw-border-style);border-width:1px}.ui-lib .border-2{border-style:var(--tw-border-style);border-width:2px}.ui-lib .border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.ui-lib .border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.ui-lib .border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.ui-lib .border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.ui-lib .border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.ui-lib .border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.ui-lib .border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.ui-lib .border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.ui-lib .border-gray-100{border-color:var(--color-gray-100)}.ui-lib .border-gray-200{border-color:var(--color-gray-200)}.ui-lib .border-gray-300{border-color:var(--color-gray-300)}.ui-lib .border-gray-600{border-color:var(--color-gray-600)}.ui-lib .border-green-200{border-color:var(--color-green-200)}.ui-lib .border-input{border-color:var(--input)}.ui-lib .border-purple-300{border-color:var(--color-purple-300)}.ui-lib .border-white{border-color:var(--color-white)}.ui-lib .border-white\\/30{border-color:#ffffff4d}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/30{border-color:color-mix(in oklab,var(--color-white)30%,transparent)}}.ui-lib .border-white\\/50{border-color:#ffffff80}@supports (color:color-mix(in lab,red,red)){.ui-lib .border-white\\/50{border-color:color-mix(in oklab,var(--color-white)50%,transparent)}}.ui-lib .bg-\\[\\#8220ff\\]{background-color:#8220ff}.ui-lib .bg-\\[\\#8220ff\\]\\/10{background-color:#8220ff1a}.ui-lib .bg-\\[\\#8220ff\\]\\/60{background-color:#8220ff99}.ui-lib .bg-background,.ui-lib .bg-background\\/80{background-color:var(--background)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-background\\/80{background-color:color-mix(in oklab,var(--background)80%,transparent)}}.ui-lib .bg-black{background-color:var(--color-black)}.ui-lib .bg-black\\/20{background-color:#0003}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/20{background-color:color-mix(in oklab,var(--color-black)20%,transparent)}}.ui-lib .bg-black\\/50{background-color:#00000080}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-black\\/50{background-color:color-mix(in oklab,var(--color-black)50%,transparent)}}.ui-lib .bg-border{background-color:var(--border)}.ui-lib .bg-destructive{background-color:var(--destructive)}.ui-lib .bg-gray-50{background-color:var(--color-gray-50)}.ui-lib .bg-gray-100{background-color:var(--color-gray-100)}.ui-lib .bg-gray-200{background-color:var(--color-gray-200)}.ui-lib .bg-green-100{background-color:var(--color-green-100)}.ui-lib .bg-muted{background-color:var(--muted)}.ui-lib .bg-popover{background-color:var(--popover)}.ui-lib .bg-primary,.ui-lib .bg-primary\\/10{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .bg-primary\\/10{background-color:color-mix(in oklab,var(--primary)10%,transparent)}}.ui-lib .bg-secondary{background-color:var(--secondary)}.ui-lib .bg-transparent{background-color:#0000}.ui-lib .bg-violet-800{background-color:var(--color-violet-800)}.ui-lib .bg-white{background-color:var(--color-white)}.ui-lib .bg-gradient-to-r{--tw-gradient-position:to right in oklab;background-image:linear-gradient(var(--tw-gradient-stops))}.ui-lib .from-\\[\\#8220ff\\]{--tw-gradient-from:#8220ff;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .to-\\[\\#a020f0\\]{--tw-gradient-to:#a020f0;--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from)var(--tw-gradient-from-position),var(--tw-gradient-to)var(--tw-gradient-to-position))}.ui-lib .bg-repeat{background-repeat:repeat}.ui-lib .mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.ui-lib .mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.ui-lib .object-contain{object-fit:contain}.ui-lib .p-0{padding:calc(var(--spacing)*0)}.ui-lib .p-1{padding:calc(var(--spacing)*1)}.ui-lib .p-2{padding:calc(var(--spacing)*2)}.ui-lib .p-3{padding:calc(var(--spacing)*3)}.ui-lib .p-4{padding:calc(var(--spacing)*4)}.ui-lib .p-6{padding:calc(var(--spacing)*6)}.ui-lib .px-1{padding-inline:calc(var(--spacing)*1)}.ui-lib .px-1\\.5{padding-inline:calc(var(--spacing)*1.5)}.ui-lib .px-2{padding-inline:calc(var(--spacing)*2)}.ui-lib .px-3{padding-inline:calc(var(--spacing)*3)}.ui-lib .px-4{padding-inline:calc(var(--spacing)*4)}.ui-lib .px-8{padding-inline:calc(var(--spacing)*8)}.ui-lib .py-1{padding-block:calc(var(--spacing)*1)}.ui-lib .py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.ui-lib .py-2{padding-block:calc(var(--spacing)*2)}.ui-lib .py-3{padding-block:calc(var(--spacing)*3)}.ui-lib .py-6{padding-block:calc(var(--spacing)*6)}.ui-lib .py-8{padding-block:calc(var(--spacing)*8)}.ui-lib .pt-4{padding-top:calc(var(--spacing)*4)}.ui-lib .pt-6{padding-top:calc(var(--spacing)*6)}.ui-lib .pt-12{padding-top:calc(var(--spacing)*12)}.ui-lib .pr-0{padding-right:calc(var(--spacing)*0)}.ui-lib .pr-6{padding-right:calc(var(--spacing)*6)}.ui-lib .pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .pr-10{padding-right:calc(var(--spacing)*10)}.ui-lib .pb-6{padding-bottom:calc(var(--spacing)*6)}.ui-lib .pb-20{padding-bottom:calc(var(--spacing)*20)}.ui-lib .pl-2{padding-left:calc(var(--spacing)*2)}.ui-lib .pl-10{padding-left:calc(var(--spacing)*10)}.ui-lib .text-center{text-align:center}.ui-lib .text-left{text-align:left}.ui-lib .font-mono{font-family:var(--font-mono)}.ui-lib .text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.ui-lib .text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.ui-lib .text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.ui-lib .text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .text-\\[10px\\]{font-size:10px}.ui-lib .leading-none{--tw-leading:1;line-height:1}.ui-lib .font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.ui-lib .font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.ui-lib .tracking-wider{--tw-tracking:var(--tracking-wider);letter-spacing:var(--tracking-wider)}.ui-lib .tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.ui-lib .text-wrap{text-wrap:wrap}.ui-lib .text-clip{text-overflow:clip}.ui-lib .text-ellipsis{text-overflow:ellipsis}.ui-lib .whitespace-nowrap{white-space:nowrap}.ui-lib .text-\\[\\#8220ff\\]{color:#8220ff}.ui-lib .text-\\[\\#8220ff\\]\\/80{color:#8220ffcc}.ui-lib .text-black{color:var(--color-black)}.ui-lib .text-foreground{color:var(--foreground)}.ui-lib .text-gray-200{color:var(--color-gray-200)}.ui-lib .text-gray-400{color:var(--color-gray-400)}.ui-lib .text-gray-500{color:var(--color-gray-500)}.ui-lib .text-gray-600{color:var(--color-gray-600)}.ui-lib .text-gray-700{color:var(--color-gray-700)}.ui-lib .text-gray-900{color:var(--color-gray-900)}.ui-lib .text-green-800{color:var(--color-green-800)}.ui-lib .text-muted-foreground{color:var(--muted-foreground)}.ui-lib .text-popover-foreground{color:var(--popover-foreground)}.ui-lib .text-primary{color:var(--primary)}.ui-lib .text-primary-foreground{color:var(--primary-foreground)}.ui-lib .text-purple-700{color:var(--color-purple-700)}.ui-lib .text-secondary-foreground{color:var(--secondary-foreground)}.ui-lib .text-white{color:var(--color-white)}.ui-lib .capitalize{text-transform:capitalize}.ui-lib .lowercase{text-transform:lowercase}.ui-lib .normal-case{text-transform:none}.ui-lib .uppercase{text-transform:uppercase}.ui-lib .italic{font-style:italic}.ui-lib .not-italic{font-style:normal}.ui-lib .diagonal-fractions{--tw-numeric-fraction:diagonal-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .lining-nums{--tw-numeric-figure:lining-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .oldstyle-nums{--tw-numeric-figure:oldstyle-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .ordinal{--tw-ordinal:ordinal;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .proportional-nums{--tw-numeric-spacing:proportional-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .slashed-zero{--tw-slashed-zero:slashed-zero;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .stacked-fractions{--tw-numeric-fraction:stacked-fractions;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .tabular-nums{--tw-numeric-spacing:tabular-nums;font-variant-numeric:var(--tw-ordinal,)var(--tw-slashed-zero,)var(--tw-numeric-figure,)var(--tw-numeric-spacing,)var(--tw-numeric-fraction,)}.ui-lib .normal-nums{font-variant-numeric:normal}.ui-lib .line-through{text-decoration-line:line-through}.ui-lib .no-underline{text-decoration-line:none}.ui-lib .overline{text-decoration-line:overline}.ui-lib .underline{text-decoration-line:underline}.ui-lib .underline-offset-4{text-underline-offset:4px}.ui-lib .antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ui-lib .subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.ui-lib .opacity-50{opacity:.5}.ui-lib .opacity-70{opacity:.7}.ui-lib .opacity-100{opacity:1}.ui-lib .shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a),0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a),0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,#0000000d);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .ring-offset-background{--tw-ring-offset-color:var(--background)}.ui-lib .outline-hidden{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.ui-lib .outline-hidden{outline-offset:2px;outline:2px solid #0000}}.ui-lib .outline{outline-style:var(--tw-outline-style);outline-width:1px}.ui-lib .blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,#0000001a))drop-shadow(0 1px 1px var(--tw-drop-shadow-color,#0000000f));--tw-drop-shadow:drop-shadow(0 1px 2px #0000001a)drop-shadow(0 1px 1px #0000000f);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .grayscale{--tw-grayscale:grayscale(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .invert{--tw-invert:invert(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .sepia{--tw-sepia:sepia(100%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.ui-lib .backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-blur-sm{--tw-backdrop-blur:blur(var(--blur-sm));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-blur-xs{--tw-backdrop-blur:blur(var(--blur-xs));-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-invert{--tw-backdrop-invert:invert(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-sepia{--tw-backdrop-sepia:sepia(100%);-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,)var(--tw-backdrop-brightness,)var(--tw-backdrop-contrast,)var(--tw-backdrop-grayscale,)var(--tw-backdrop-hue-rotate,)var(--tw-backdrop-invert,)var(--tw-backdrop-opacity,)var(--tw-backdrop-saturate,)var(--tw-backdrop-sepia,)}.ui-lib .transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-\\[color\\,box-shadow\\]{transition-property:color,box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.ui-lib .transition-discrete{transition-behavior:allow-discrete}.ui-lib .delay-0{transition-delay:0s}.ui-lib .delay-500{transition-delay:.5s}.ui-lib .duration-200{--tw-duration:.2s;transition-duration:.2s}.ui-lib .duration-300{--tw-duration:.3s;transition-duration:.3s}.ui-lib .ease-in{--tw-ease:var(--ease-in);transition-timing-function:var(--ease-in)}.ui-lib .ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ui-lib .ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.ui-lib .delay-0{--tw-animation-delay:0s;animation-delay:0s}.ui-lib .delay-500{--tw-animation-delay:.5s;animation-delay:.5s}.ui-lib .outline-none{--tw-outline-style:none;outline-style:none}.ui-lib .select-none{-webkit-user-select:none;user-select:none}.ui-lib :where(.divide-x-reverse>:not(:last-child)){--tw-divide-x-reverse:1}.ui-lib .paused{animation-play-state:paused}.ui-lib .ring-inset{--tw-ring-inset:inset}.ui-lib .running{animation-play-state:running}.ui-lib .zoom-in{--tw-enter-scale:0}.ui-lib .zoom-out{--tw-exit-scale:0}@media (hover:hover){.ui-lib .group-hover\\:bg-\\[\\#8220ff\\]\\/20:is(:where(.group):hover *){background-color:#8220ff33}.ui-lib .group-hover\\:text-\\[\\#8220ff\\]:is(:where(.group):hover *){color:#8220ff}}.ui-lib .selection\\:bg-primary ::selection{background-color:var(--primary)}.ui-lib .selection\\:bg-primary::selection{background-color:var(--primary)}.ui-lib .selection\\:text-primary-foreground ::selection{color:var(--primary-foreground)}.ui-lib .selection\\:text-primary-foreground::selection{color:var(--primary-foreground)}.ui-lib .file\\:inline-flex::file-selector-button{display:inline-flex}.ui-lib .file\\:h-7::file-selector-button{height:calc(var(--spacing)*7)}.ui-lib .file\\:border-0::file-selector-button{border-style:var(--tw-border-style);border-width:0}.ui-lib .file\\:bg-transparent::file-selector-button{background-color:#0000}.ui-lib .file\\:text-sm::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.ui-lib .file\\:font-medium::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .file\\:text-foreground::file-selector-button{color:var(--foreground)}.ui-lib .placeholder\\:text-muted-foreground::placeholder{color:var(--muted-foreground)}.ui-lib .placeholder\\:text-white\\/70::placeholder{color:#ffffffb3}@supports (color:color-mix(in lab,red,red)){.ui-lib .placeholder\\:text-white\\/70::placeholder{color:color-mix(in oklab,var(--color-white)70%,transparent)}}@media (hover:hover){.ui-lib .hover\\:scale-105:hover{--tw-scale-x:105%;--tw-scale-y:105%;--tw-scale-z:105%;scale:var(--tw-scale-x)var(--tw-scale-y)}.ui-lib .hover\\:bg-accent:hover{background-color:var(--accent)}.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-destructive\\/90:hover{background-color:color-mix(in oklab,var(--destructive)90%,transparent)}}.ui-lib .hover\\:bg-gray-50:hover{background-color:var(--color-gray-50)}.ui-lib .hover\\:bg-gray-100:hover{background-color:var(--color-gray-100)}.ui-lib .hover\\:bg-primary\\/90:hover{background-color:var(--primary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-primary\\/90:hover{background-color:color-mix(in oklab,var(--primary)90%,transparent)}}.ui-lib .hover\\:bg-purple-200:hover{background-color:var(--color-purple-200)}.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/50:hover{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-secondary\\/80:hover{background-color:color-mix(in oklab,var(--secondary)80%,transparent)}}.ui-lib .hover\\:bg-violet-800:hover{background-color:var(--color-violet-800)}.ui-lib .hover\\:bg-white\\/10:hover{background-color:#ffffff1a}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:bg-white\\/10:hover{background-color:color-mix(in oklab,var(--color-white)10%,transparent)}}.ui-lib .hover\\:text-\\[\\#8220ff\\]:hover{color:#8220ff}.ui-lib .hover\\:text-accent-foreground:hover{color:var(--accent-foreground)}.ui-lib .hover\\:text-gray-500:hover{color:var(--color-gray-500)}.ui-lib .hover\\:text-gray-700:hover{color:var(--color-gray-700)}.ui-lib .hover\\:text-purple-700:hover{color:var(--color-purple-700)}.ui-lib .hover\\:text-white\\/80:hover{color:#fffc}@supports (color:color-mix(in lab,red,red)){.ui-lib .hover\\:text-white\\/80:hover{color:color-mix(in oklab,var(--color-white)80%,transparent)}}.ui-lib .hover\\:underline:hover{text-decoration-line:underline}.ui-lib .hover\\:opacity-100:hover{opacity:1}.ui-lib .hover\\:shadow-xl:hover{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.ui-lib .focus\\:border-\\[\\#8220ff\\]:focus{border-color:#8220ff}.ui-lib .focus\\:border-ring:focus{border-color:var(--ring)}.ui-lib .focus\\:bg-accent:focus{background-color:var(--accent)}.ui-lib .focus\\:text-accent-foreground:focus{color:var(--accent-foreground)}.ui-lib .focus\\:ring-1:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus\\:ring-\\[\\#8220ff\\]\\/20:focus{--tw-ring-color:oklab(54.3459% .11409 -.259125/.2)}.ui-lib .focus\\:ring-gray-500:focus{--tw-ring-color:var(--color-gray-500)}.ui-lib .focus\\:ring-ring:focus{--tw-ring-color:var(--ring)}.ui-lib .focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus\\:outline-hidden:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.ui-lib .focus\\:outline-hidden:focus{outline-offset:2px;outline:2px solid #0000}}.ui-lib .focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.ui-lib .focus-visible\\:border-ring:focus-visible{border-color:var(--ring)}.ui-lib .focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-\\[3px\\]:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(3px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ui-lib .focus-visible\\:ring-ring:focus-visible,.ui-lib .focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:var(--ring)}@supports (color:color-mix(in lab,red,red)){.ui-lib .focus-visible\\:ring-ring\\/50:focus-visible{--tw-ring-color:color-mix(in oklab,var(--ring)50%,transparent)}}.ui-lib .focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.ui-lib .focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.ui-lib .disabled\\:pointer-events-none:disabled{pointer-events:none}.ui-lib .disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.ui-lib .disabled\\:opacity-50:disabled{opacity:.5}.ui-lib .aria-invalid\\:border-destructive[aria-invalid=true]{border-color:var(--destructive)}.ui-lib .aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .aria-invalid\\:ring-destructive\\/20[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)20%,transparent)}}.ui-lib .data-\\[disabled\\]\\:pointer-events-none[data-disabled]{pointer-events:none}.ui-lib .data-\\[disabled\\]\\:opacity-50[data-disabled]{opacity:.5}.ui-lib .data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled=true]{pointer-events:none}.ui-lib .data-\\[disabled\\=true\\]\\:opacity-50[data-disabled=true]{opacity:.5}.ui-lib .data-\\[placeholder\\]\\:text-muted-foreground[data-placeholder]{color:var(--muted-foreground)}.ui-lib .data-\\[selected\\=true\\]\\:bg-accent[data-selected=true]{background-color:var(--accent)}.ui-lib .data-\\[selected\\=true\\]\\:text-accent-foreground[data-selected=true]{color:var(--accent-foreground)}.ui-lib .data-\\[side\\=bottom\\]\\:translate-y-1[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side=bottom]{--tw-enter-translate-y:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=left\\]\\:-translate-x-1[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side=left]{--tw-enter-translate-x:calc(2*var(--spacing))}.ui-lib .data-\\[side\\=right\\]\\:translate-x-1[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side=right]{--tw-enter-translate-x:calc(2*var(--spacing)*-1)}.ui-lib .data-\\[side\\=top\\]\\:-translate-y-1[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x)var(--tw-translate-y)}.ui-lib .data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side=top]{--tw-enter-translate-y:calc(2*var(--spacing))}.ui-lib :is(.\\*\\*\\:data-\\[slot\\=command-input-wrapper\\]\\:h-12 *)[data-slot=command-input-wrapper]{height:calc(var(--spacing)*12)}.ui-lib .data-\\[state\\=closed\\]\\:animate-out[data-state=closed]{animation:exit var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=closed\\]\\:fade-out-0[data-state=closed]{--tw-exit-opacity:0}.ui-lib .data-\\[state\\=closed\\]\\:zoom-out-95[data-state=closed]{--tw-exit-scale:.95}.ui-lib .data-\\[state\\=open\\]\\:animate-in[data-state=open]{animation:enter var(--tw-animation-duration,var(--tw-duration,.15s))var(--tw-ease,ease)var(--tw-animation-delay,0s)var(--tw-animation-iteration-count,1)var(--tw-animation-direction,normal)var(--tw-animation-fill-mode,none)}.ui-lib .data-\\[state\\=open\\]\\:bg-accent[data-state=open]{background-color:var(--accent)}.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:var(--secondary)}@supports (color:color-mix(in lab,red,red)){.ui-lib .data-\\[state\\=open\\]\\:bg-secondary\\/50[data-state=open]{background-color:color-mix(in oklab,var(--secondary)50%,transparent)}}.ui-lib .data-\\[state\\=open\\]\\:text-muted-foreground[data-state=open]{color:var(--muted-foreground)}.ui-lib .data-\\[state\\=open\\]\\:fade-in-0[data-state=open]{--tw-enter-opacity:0}.ui-lib .data-\\[state\\=open\\]\\:zoom-in-95[data-state=open]{--tw-enter-scale:.95}@media (min-width:40rem){.ui-lib .sm\\:top-80{top:calc(var(--spacing)*80)}.ui-lib .sm\\:max-h-\\[300px\\]{max-height:300px}.ui-lib .sm\\:max-w-lg{max-width:var(--container-lg)}.ui-lib .sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .sm\\:flex-row{flex-direction:row}.ui-lib .sm\\:justify-end{justify-content:flex-end}.ui-lib .sm\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .sm\\:text-left{text-align:left}}@media (min-width:48rem){.ui-lib .md\\:mb-0{margin-bottom:calc(var(--spacing)*0)}.ui-lib .md\\:h-40{height:calc(var(--spacing)*40)}.ui-lib .md\\:max-h-\\[400px\\]{max-height:400px}.ui-lib .md\\:w-1\\/3{width:33.3333%}.ui-lib .md\\:w-2\\/3{width:66.6667%}.ui-lib .md\\:w-40{width:calc(var(--spacing)*40)}.ui-lib .md\\:w-42{width:calc(var(--spacing)*42)}.ui-lib .md\\:max-w-xl{max-width:var(--container-xl)}.ui-lib .md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.ui-lib .md\\:flex-row{flex-direction:row}.ui-lib .md\\:items-center{align-items:center}.ui-lib .md\\:justify-between{justify-content:space-between}.ui-lib .md\\:gap-4{gap:calc(var(--spacing)*4)}.ui-lib .md\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .md\\:pr-8{padding-right:calc(var(--spacing)*8)}.ui-lib .md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@media (min-width:64rem){.ui-lib .lg\\:top-100{top:calc(var(--spacing)*100)}.ui-lib .lg\\:col-span-2{grid-column:span 2/span 2}.ui-lib .lg\\:max-h-\\[500px\\]{max-height:500px}.ui-lib .lg\\:max-w-4xl{max-width:var(--container-4xl)}.ui-lib .lg\\:grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.ui-lib .lg\\:gap-6{gap:calc(var(--spacing)*6)}.ui-lib .lg\\:px-6{padding-inline:calc(var(--spacing)*6)}.ui-lib .lg\\:px-8{padding-inline:calc(var(--spacing)*8)}}@media (min-width:80rem){.ui-lib .xl\\:flex{display:flex}.ui-lib .xl\\:hidden{display:none}.ui-lib .xl\\:inline{display:inline}}.ui-lib .dark\\:border-gray-700:is(.dark *){border-color:var(--color-gray-700)}.ui-lib .dark\\:bg-gray-900:is(.dark *){background-color:var(--color-gray-900)}.ui-lib .dark\\:bg-input\\/30:is(.dark *){background-color:var(--input)}@supports (color:color-mix(in lab,red,red)){.ui-lib .dark\\:bg-input\\/30:is(.dark *){background-color:color-mix(in oklab,var(--input)30%,transparent)}}.ui-lib .dark\\:text-white:is(.dark *){color:var(--color-white)}.ui-lib .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:var(--destructive)}@supports (color:color-mix(in lab,red,red)){.ui-lib .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid=true]{--tw-ring-color:color-mix(in oklab,var(--destructive)40%,transparent)}}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading]{padding-block:calc(var(--spacing)*1.5)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading]{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading]{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.ui-lib .\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-muted-foreground [cmdk-group-heading]{color:var(--muted-foreground)}.ui-lib .\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden])~[cmdk-group]{padding-top:calc(var(--spacing)*0)}.ui-lib .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg{height:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg{width:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input]{height:calc(var(--spacing)*12)}.ui-lib .\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item]{padding-inline:calc(var(--spacing)*2)}.ui-lib .\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item]{padding-block:calc(var(--spacing)*3)}.ui-lib .\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg{height:calc(var(--spacing)*5)}.ui-lib .\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg{width:calc(var(--spacing)*5)}.ui-lib .\\[\\&_svg\\]\\:pointer-events-none svg{pointer-events:none}.ui-lib .\\[\\&_svg\\]\\:shrink-0 svg{flex-shrink:0}.ui-lib .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*=size-]){width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.ui-lib .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'text-\\'\\]\\)\\]\\:text-muted-foreground svg:not([class*=text-]){color:var(--muted-foreground)}.ui-lib .\\[\\&\\>span\\]\\:line-clamp-1>span{-webkit-line-clamp:1;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}}@property --tw-animation-delay{syntax:"*";inherits:false;initial-value:0s}@property --tw-animation-direction{syntax:"*";inherits:false;initial-value:normal}@property --tw-animation-duration{syntax:"*";inherits:false}@property --tw-animation-fill-mode{syntax:"*";inherits:false;initial-value:none}@property --tw-animation-iteration-count{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-enter-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-enter-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-blur{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-opacity{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-rotate{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-scale{syntax:"*";inherits:false;initial-value:1}@property --tw-exit-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-exit-translate-y{syntax:"*";inherits:false;initial-value:0}.ui-lib *{scrollbar-color:#404040 #000!important;scrollbar-width:thin!important}.ui-lib{--radius:.625rem;--background:oklch(100% 0 0);--foreground:oklch(14.5% 0 0);--card:oklch(100% 0 0);--card-foreground:oklch(14.5% 0 0);--popover:oklch(100% 0 0);--popover-foreground:oklch(14.5% 0 0);--primary:oklch(20.5% 0 0);--primary-foreground:oklch(98.5% 0 0);--secondary:oklch(97% 0 0);--secondary-foreground:oklch(20.5% 0 0);--muted:oklch(97% 0 0);--muted-foreground:oklch(55.6% 0 0);--accent:oklch(97% 0 0);--accent-foreground:oklch(20.5% 0 0);--destructive:oklch(57.7% .245 27.325);--border:oklch(92.2% 0 0);--input:oklch(92.2% 0 0);--ring:oklch(70.8% 0 0);--chart-1:oklch(64.6% .222 41.116);--chart-2:oklch(60% .118 184.704);--chart-3:oklch(39.8% .07 227.392);--chart-4:oklch(82.8% .189 84.429);--chart-5:oklch(76.9% .188 70.08);--sidebar:oklch(98.5% 0 0);--sidebar-foreground:oklch(14.5% 0 0);--sidebar-primary:oklch(20.5% 0 0);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(97% 0 0);--sidebar-accent-foreground:oklch(20.5% 0 0);--sidebar-border:oklch(92.2% 0 0);--sidebar-ring:oklch(70.8% 0 0);font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;font-weight:400;line-height:1.5}.ui-lib .dark{--background:oklch(14.5% 0 0);--foreground:oklch(98.5% 0 0);--card:oklch(20.5% 0 0);--card-foreground:oklch(98.5% 0 0);--popover:oklch(20.5% 0 0);--popover-foreground:oklch(98.5% 0 0);--primary:oklch(92.2% 0 0);--primary-foreground:oklch(20.5% 0 0);--secondary:oklch(26.9% 0 0);--secondary-foreground:oklch(98.5% 0 0);--muted:oklch(26.9% 0 0);--muted-foreground:oklch(70.8% 0 0);--accent:oklch(26.9% 0 0);--accent-foreground:oklch(98.5% 0 0);--destructive:oklch(70.4% .191 22.216);--border:oklch(100% 0 0/.1);--input:oklch(100% 0 0/.15);--ring:oklch(55.6% 0 0);--chart-1:oklch(48.8% .243 264.376);--chart-2:oklch(69.6% .17 162.48);--chart-3:oklch(76.9% .188 70.08);--chart-4:oklch(62.7% .265 303.9);--chart-5:oklch(64.5% .246 16.439);--sidebar:oklch(20.5% 0 0);--sidebar-foreground:oklch(98.5% 0 0);--sidebar-primary:oklch(48.8% .243 264.376);--sidebar-primary-foreground:oklch(98.5% 0 0);--sidebar-accent:oklch(26.9% 0 0);--sidebar-accent-foreground:oklch(98.5% 0 0);--sidebar-border:oklch(100% 0 0/.1);--sidebar-ring:oklch(55.6% 0 0)}@property --tw-translate-x{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-y{syntax:"*";inherits:false;initial-value:0}@property --tw-translate-z{syntax:"*";inherits:false;initial-value:0}@property --tw-scale-x{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-y{syntax:"*";inherits:false;initial-value:1}@property --tw-scale-z{syntax:"*";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-pan-x{syntax:"*";inherits:false}@property --tw-pan-y{syntax:"*";inherits:false}@property --tw-pinch-zoom{syntax:"*";inherits:false}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:"*";inherits:false}@property --tw-gradient-from{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:"<color>";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:"*";inherits:false}@property --tw-gradient-via-stops{syntax:"*";inherits:false}@property --tw-gradient-from-position{syntax:"<length-percentage>";inherits:false;initial-value:0%}@property --tw-gradient-via-position{syntax:"<length-percentage>";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:"<length-percentage>";inherits:false;initial-value:100%}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-ordinal{syntax:"*";inherits:false}@property --tw-slashed-zero{syntax:"*";inherits:false}@property --tw-numeric-figure{syntax:"*";inherits:false}@property --tw-numeric-spacing{syntax:"*";inherits:false}@property --tw-numeric-fraction{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-backdrop-blur{syntax:"*";inherits:false}@property --tw-backdrop-brightness{syntax:"*";inherits:false}@property --tw-backdrop-contrast{syntax:"*";inherits:false}@property --tw-backdrop-grayscale{syntax:"*";inherits:false}@property --tw-backdrop-hue-rotate{syntax:"*";inherits:false}@property --tw-backdrop-invert{syntax:"*";inherits:false}@property --tw-backdrop-opacity{syntax:"*";inherits:false}@property --tw-backdrop-saturate{syntax:"*";inherits:false}@property --tw-backdrop-sepia{syntax:"*";inherits:false}@property --tw-duration{syntax:"*";inherits:false}@property --tw-ease{syntax:"*";inherits:false}@keyframes enter{0%{opacity:var(--tw-enter-opacity,1);transform:translate3d(var(--tw-enter-translate-x,0),var(--tw-enter-translate-y,0),0)scale3d(var(--tw-enter-scale,1),var(--tw-enter-scale,1),var(--tw-enter-scale,1))rotate(var(--tw-enter-rotate,0));filter:blur(var(--tw-enter-blur,0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity,1);transform:translate3d(var(--tw-exit-translate-x,0),var(--tw-exit-translate-y,0),0)scale3d(var(--tw-exit-scale,1),var(--tw-exit-scale,1),var(--tw-exit-scale,1))rotate(var(--tw-exit-rotate,0));filter:blur(var(--tw-exit-blur,0))}}#cc-main{background:transparent;color:var(--cc-primary-color);font-family:var(--cc-font-family);font-size:16px;font-weight:400;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;line-height:1.15;position:relative;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;position:fixed;z-index:var(--cc-z-index)}#cc-main :after,#cc-main :before,#cc-main a,#cc-main button,#cc-main div,#cc-main h2,#cc-main input,#cc-main p,#cc-main span{all:unset;box-sizing:border-box}#cc-main .pm__badge,#cc-main button{all:initial;box-sizing:border-box;color:unset;visibility:unset}#cc-main .pm__badge,#cc-main a,#cc-main button,#cc-main input{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;font-family:inherit;font-size:100%;line-height:normal;margin:0;outline:revert;outline-offset:2px;overflow:hidden}#cc-main table,#cc-main tbody,#cc-main td,#cc-main th,#cc-main thead,#cc-main tr{all:revert;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit}:root{--cc-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";--cc-modal-border-radius:.5rem;--cc-btn-border-radius:.4rem;--cc-modal-transition-duration:.25s;--cc-link-color:var(--cc-btn-primary-bg);--cc-modal-margin:1rem;--cc-z-index:2147483647;--cc-bg:#fff;--cc-primary-color:#2c2f31;--cc-secondary-color:#5e6266;--cc-btn-primary-bg:#30363c;--cc-btn-primary-color:#fff;--cc-btn-primary-border-color:var(--cc-btn-primary-bg);--cc-btn-primary-hover-bg:#000;--cc-btn-primary-hover-color:#fff;--cc-btn-primary-hover-border-color:var(--cc-btn-primary-hover-bg);--cc-btn-secondary-bg:#eaeff2;--cc-btn-secondary-color:var(--cc-primary-color);--cc-btn-secondary-border-color:var(--cc-btn-secondary-bg);--cc-btn-secondary-hover-bg:#d4dae0;--cc-btn-secondary-hover-color:#000;--cc-btn-secondary-hover-border-color:#d4dae0;--cc-separator-border-color:#f0f4f7;--cc-toggle-on-bg:var(--cc-btn-primary-bg);--cc-toggle-off-bg:#667481;--cc-toggle-on-knob-bg:#fff;--cc-toggle-off-knob-bg:var(--cc-toggle-on-knob-bg);--cc-toggle-enabled-icon-color:var(--cc-bg);--cc-toggle-disabled-icon-color:var(--cc-bg);--cc-toggle-readonly-bg:#d5dee2;--cc-toggle-readonly-knob-bg:#fff;--cc-toggle-readonly-knob-icon-color:var(--cc-toggle-readonly-bg);--cc-section-category-border:var(--cc-cookie-category-block-bg);--cc-cookie-category-block-bg:#f0f4f7;--cc-cookie-category-block-border:#f0f4f7;--cc-cookie-category-block-hover-bg:#e9eff4;--cc-cookie-category-block-hover-border:#e9eff4;--cc-cookie-category-expanded-block-bg:transparent;--cc-cookie-category-expanded-block-hover-bg:#dee4e9;--cc-overlay-bg:rgba(0,0,0,.65);--cc-webkit-scrollbar-bg:var(--cc-section-category-border);--cc-webkit-scrollbar-hover-bg:var(--cc-btn-primary-hover-bg);--cc-footer-bg:var(--cc-btn-secondary-bg);--cc-footer-color:var(--cc-secondary-color);--cc-footer-border-color:#e4eaed;--cc-pm-toggle-border-radius:4em}#cc-main.cc--rtl{direction:rtl}#cc-main .cm__title,#cc-main a,#cc-main b,#cc-main em,#cc-main strong{font-weight:600}#cc-main button>span{pointer-events:none}#cc-main .cc__link,#cc-main a{background-image:linear-gradient(currentColor,currentColor);background-position:0 100%;background-repeat:no-repeat;background-size:0 1px;font-weight:600;position:relative;transition:background-size .25s,color .25s ease}#cc-main .cc__link:hover,#cc-main a:hover{background-size:100% 1px;color:var(--cc-primary-color)}#cc-main .cc__link{color:var(--cc-link-color)}#cc-main .cm__desc,#cc-main .pm__body{overscroll-behavior:auto contain;scrollbar-width:thin}@media screen and (min-width:640px){#cc-main ::-webkit-scrollbar,#cc-main ::-webkit-scrollbar-thumb,#cc-main ::-webkit-scrollbar-track{all:revert}#cc-main ::-webkit-scrollbar-thumb{-webkit-background-clip:padding-box;background-clip:padding-box;background:var(--cc-toggle-readonly-bg);border:.25rem solid var(--cc-bg);border-radius:1rem}#cc-main ::-webkit-scrollbar-thumb:hover{background:var(--cc-toggle-off-bg)}#cc-main ::-webkit-scrollbar{background:transparent;width:12px}}html.disable--interaction.show--consent,html.disable--interaction.show--consent body{height:auto!important;overflow:hidden!important}@media (prefers-reduced-motion){#cc-main{--cc-modal-transition-duration:0s}}.cc--darkmode{--cc-bg:#161a1c;--cc-primary-color:#ebf3f6;--cc-secondary-color:#aebbc5;--cc-btn-primary-bg:#c2d0e0;--cc-btn-primary-color:var(--cc-bg);--cc-btn-primary-border-color:var(--cc-btn-primary-bg);--cc-btn-primary-hover-bg:#98a7b6;--cc-btn-primary-hover-color:#000;--cc-btn-primary-hover-border-color:var(--cc-btn-primary-hover-bg);--cc-btn-secondary-bg:#242c31;--cc-btn-secondary-color:var(--cc-primary-color);--cc-btn-secondary-border-color:var(--cc-btn-secondary-bg);--cc-btn-secondary-hover-bg:#353d43;--cc-btn-secondary-hover-color:#fff;--cc-btn-secondary-hover-border-color:var(--cc-btn-secondary-hover-bg);--cc-separator-border-color:#222a30;--cc-toggle-on-bg:var(--cc-btn-primary-bg);--cc-toggle-off-bg:#525f6b;--cc-toggle-on-knob-bg:var(--cc-btn-primary-color);--cc-toggle-off-knob-bg:var(--cc-btn-primary-color);--cc-toggle-enabled-icon-color:var(--cc-btn-primary-color);--cc-toggle-disabled-icon-color:var(--cc-btn-primary-color);--cc-toggle-readonly-bg:#343e45;--cc-toggle-readonly-knob-bg:#5f6b72;--cc-toggle-readonly-knob-icon-color:var(--cc-toggle-readonly-bg);--cc-section-category-border:#1e2428;--cc-cookie-category-block-bg:#1e2428;--cc-cookie-category-block-border:var(--cc-section-category-border);--cc-cookie-category-block-hover-bg:#242c31;--cc-cookie-category-block-hover-border:#232a2f;--cc-cookie-category-expanded-block-bg:transparent;--cc-cookie-category-expanded-block-hover-bg:var(--cc-toggle-readonly-bg);--cc-overlay-bg:rgba(0,0,0,.65);--cc-webkit-scrollbar-bg:var(--cc-section-category-border);--cc-webkit-scrollbar-hover-bg:var(--cc-btn-primary-hover-bg);--cc-footer-bg:#0c0e0f;--cc-footer-color:var(--cc-secondary-color);--cc-footer-border-color:#060809}.cc--darkmode #cc-main{color-scheme:dark}#cc-main .cm{background:var(--cc-bg);border-radius:var(--cc-modal-border-radius);box-shadow:0 .625em 1.875em #0000024d;display:flex;flex-direction:column;max-width:24rem;opacity:0;overflow:hidden;position:fixed;transform:translateY(1.6em);visibility:hidden;z-index:1}#cc-main .cm--top{top:var(--cc-modal-margin)}#cc-main .cm--middle{top:50%;transform:translateY(calc(-50% + 1.6em))}#cc-main .cm--bottom{bottom:var(--cc-modal-margin)}#cc-main .cm--center{left:var(--cc-modal-margin);margin:0 auto;right:var(--cc-modal-margin);width:unset}#cc-main .cm--left{left:var(--cc-modal-margin);margin-right:var(--cc-modal-margin)}#cc-main .cm--right{margin-left:var(--cc-modal-margin);right:var(--cc-modal-margin)}#cc-main .cm__body{display:flex;flex-direction:column;justify-content:space-between;position:relative}#cc-main .cm__btns,#cc-main .cm__links{padding:1rem 1.3rem;width:unset}#cc-main .cm__texts{display:flex;flex:1;flex-direction:column;justify-content:center;padding:1rem 0 0}#cc-main .cm__desc,#cc-main .cm__title{padding:0 1.3rem}#cc-main .cm__title{font-size:1.05em}#cc-main .cm__title+.cm__desc{margin-top:1.1em}#cc-main .cm__desc{color:var(--cc-secondary-color);font-size:.9em;line-height:1.5;max-height:40vh;overflow-x:visible;overflow-y:auto;padding-bottom:1em}#cc-main .cm__btns{border-top:1px solid var(--cc-separator-border-color);display:flex;flex-direction:column;justify-content:center}#cc-main .cm__btn-group{display:grid;grid-auto-columns:minmax(0,1fr)}#cc-main .cm__btn+.cm__btn,#cc-main .cm__btn-group+.cm__btn-group{margin-top:.375rem}#cc-main .cm--flip .cm__btn+.cm__btn,#cc-main .cm--flip .cm__btn-group+.cm__btn-group{margin-bottom:.375rem;margin-top:0}#cc-main .cm--inline .cm__btn+.cm__btn{margin-left:.375rem;margin-top:0}#cc-main .cm--inline.cm--flip .cm__btn+.cm__btn{margin-bottom:0;margin-left:0;margin-right:.375rem}#cc-main .cm--inline.cm--flip .cm__btn-group+.cm__btn-group{margin-bottom:.375rem;margin-right:0}#cc-main .cm--wide .cm__btn+.cm__btn,#cc-main .cm--wide .cm__btn-group+.cm__btn-group{margin-left:.375rem;margin-top:0}#cc-main .cm--wide.cm--flip .cm__btn+.cm__btn,#cc-main .cm--wide.cm--flip .cm__btn-group+.cm__btn-group{margin-bottom:0;margin-right:.375rem}#cc-main .cm--bar:not(.cm--inline) .cm__btn-group--uneven,#cc-main .cm--wide .cm__btn-group--uneven{display:flex;flex:1;justify-content:space-between}#cc-main .cm--bar:not(.cm--inline).cm--flip .cm__btn-group--uneven,#cc-main .cm--wide.cm--flip .cm__btn-group--uneven{flex-direction:row-reverse}#cc-main .cm__btn{background:var(--cc-btn-primary-bg);border:1px solid var(--cc-btn-primary-border-color);border-radius:var(--cc-btn-border-radius);color:var(--cc-btn-primary-color);font-size:.82em;font-weight:600;min-height:42px;padding:.5em 1em;text-align:center}#cc-main .cm__btn:hover{background:var(--cc-btn-primary-hover-bg);border-color:var(--cc-btn-primary-hover-border-color);color:var(--cc-btn-primary-hover-color)}#cc-main .cm__btn--secondary{background:var(--cc-btn-secondary-bg);border-color:var(--cc-btn-secondary-border-color);color:var(--cc-btn-secondary-color)}#cc-main .cm__btn--secondary:hover{background:var(--cc-btn-secondary-hover-bg);border-color:var(--cc-btn-secondary-hover-border-color);color:var(--cc-btn-secondary-hover-color)}#cc-main .cm__btn--close{border-radius:0;border-bottom-left-radius:var(--cc-btn-border-radius);border-right:none;border-top:none;display:none;font-size:1em;height:42px;min-width:auto!important;overflow:hidden;padding:0!important;position:absolute;right:0;top:0;width:42px}#cc-main .cm__btn--close svg{stroke:var(--cc-btn-primary-color);transform:scale(.5);transition:stroke .15s ease}#cc-main .cm__btn--close:hover svg{stroke:var(--cc-btn-primary-hover-color)}#cc-main .cm__btn--close.cm__btn--secondary svg{stroke:var(--cc-btn-secondary-color)}#cc-main .cm__btn--close.cm__btn--secondary:hover svg{stroke:var(--cc-btn-secondary-hover-color)}#cc-main .cm__btn--close+.cm__texts .cm__title{padding-right:3rem}#cc-main .cm--inline .cm__btn-group{grid-auto-flow:column}#cc-main .cm__footer{background:var(--cc-footer-bg);border-top:1px solid var(--cc-footer-border-color);color:var(--cc-footer-color);padding:.4em 0 .5em}#cc-main .cm__links{display:flex;flex-direction:row;padding-bottom:0;padding-top:0}#cc-main .cm__link-group{display:flex;flex-direction:row;font-size:.8em;width:100%}#cc-main .cm__link-group>*+*{margin-left:1.3rem}#cc-main .cm--flip .cm__btn:last-child{grid-row:1}#cc-main .cm--inline.cm--flip .cm__btn:last-child{grid-column:1}#cc-main .cm--box .cm__btn--close{display:block}#cc-main .cm--box.cm--flip .cm__btns{flex-direction:column-reverse}#cc-main .cm--box.cm--wide{max-width:36em}#cc-main .cm--box.cm--wide .cm__btns{flex-direction:row;justify-content:space-between}#cc-main .cm--box.cm--wide .cm__btn-group{grid-auto-flow:column}#cc-main .cm--box.cm--wide .cm__btn{min-width:120px;padding-left:1.8em;padding-right:1.8em}#cc-main .cm--box.cm--wide.cm--flip .cm__btns{flex-direction:row-reverse}#cc-main .cm--box.cm--wide.cm--flip .cm__btn:last-child{grid-column:1}#cc-main .cm--cloud{max-width:54em;width:unset}#cc-main .cm--cloud .cm__body{flex-direction:row}#cc-main .cm--cloud .cm__texts{flex:1}#cc-main .cm--cloud .cm__desc{max-height:9.4em}#cc-main .cm--cloud .cm__btns{border-left:1px solid var(--cc-separator-border-color);border-top:none;max-width:23em}#cc-main .cm--cloud .cm__btn-group{flex-direction:column}#cc-main .cm--cloud .cm__btn{min-width:19em}#cc-main .cm--cloud.cm--flip .cm__btn-group,#cc-main .cm--cloud.cm--flip .cm__btns{flex-direction:column-reverse}#cc-main .cm--cloud.cm--inline .cm__btn-group{flex-direction:row}#cc-main .cm--cloud.cm--inline .cm__btn{min-width:10em}#cc-main .cm--cloud.cm--inline.cm--flip .cm__btn-group{flex-direction:row-reverse}#cc-main .cm--bar{border-radius:0;left:0;margin:0;max-width:unset;opacity:1;right:0;transform:translateY(0);width:100vw;--cc-modal-transition-duration:.35s}#cc-main .cm--bar.cm--top{top:0;transform:translateY(-100%)}#cc-main .cm--bar.cm--bottom{bottom:0;transform:translateY(100%)}#cc-main .cm--bar .cm__body,#cc-main .cm--bar .cm__links{margin:0 auto;max-width:55em;width:100%}#cc-main .cm--bar .cm__body{padding:.5em 0 .9em}#cc-main .cm--bar .cm__btns{border-top:none;flex-direction:row;justify-content:space-between}#cc-main .cm--bar .cm__btn-group{grid-auto-flow:column}#cc-main .cm--bar:not(.cm--inline) .cm__btn+.cm__btn,#cc-main .cm--bar:not(.cm--inline) .cm__btn-group+.cm__btn-group{margin-left:.375rem;margin-top:0}#cc-main .cm--bar .cm__btn{min-width:120px;padding-left:2em;padding-right:2em}#cc-main .cm--bar.cm--flip:not(.cm--inline) .cm__btn+.cm__btn,#cc-main .cm--bar.cm--flip:not(.cm--inline) .cm__btn-group+.cm__btn-group{margin-bottom:0;margin-left:0;margin-right:.375rem}#cc-main .cm--bar.cm--flip .cm__btns{flex-direction:row-reverse}#cc-main .cm--bar.cm--flip .cm__btn:last-child{grid-column:1}#cc-main .cm--bar.cm--inline .cm__body,#cc-main .cm--bar.cm--inline .cm__links{max-width:74em}#cc-main .cm--bar.cm--inline .cm__body{flex-direction:row;padding:0}#cc-main .cm--bar.cm--inline .cm__btns{flex-direction:column;justify-content:center;max-width:23em}#cc-main .cm--bar.cm--inline.cm--flip .cm__btns{flex-direction:column-reverse}#cc-main .cc--anim .cm,#cc-main .cc--anim.cm-wrapper:before{transition:opacity var(--cc-modal-transition-duration) ease,visibility var(--cc-modal-transition-duration) ease,transform var(--cc-modal-transition-duration) ease}#cc-main .cc--anim .cm__btn,#cc-main .cc--anim .cm__close{transition:background-color .15s ease,border-color .15s ease,color .15s ease}.disable--interaction #cc-main .cm-wrapper:before{background:var(--cc-overlay-bg);bottom:0;content:"";left:0;opacity:0;position:fixed;right:0;top:0;visibility:hidden;z-index:0}.show--consent #cc-main .cc--anim .cm{opacity:1;transform:translateY(0);visibility:visible!important}.show--consent #cc-main .cc--anim .cm--middle{transform:translateY(-50%)}.show--consent #cc-main .cc--anim .cm--bar{transform:translateY(0)}.show--consent #cc-main .cc--anim.cm-wrapper:before{opacity:1;visibility:visible}#cc-main.cc--rtl .cm__btn--close{border-bottom-left-radius:unset;border-bottom-right-radius:var(--cc-btn-border-radius);left:0;right:unset}#cc-main.cc--rtl .cm__btn--close+.cm__texts .cm__title{padding-left:3rem!important;padding-right:1.3rem}#cc-main.cc--rtl .cm--inline .cm__btn+.cm__btn{margin-left:0;margin-right:.375rem}#cc-main.cc--rtl .cm--inline.cm--flip .cm__btn+.cm__btn{margin-left:.375rem;margin-right:0}#cc-main.cc--rtl .cm:not(.cm--inline).cm--bar .cm__btn+.cm__btn,#cc-main.cc--rtl .cm:not(.cm--inline).cm--bar .cm__btn-group+.cm__btn-group,#cc-main.cc--rtl .cm:not(.cm--inline).cm--wide .cm__btn+.cm__btn,#cc-main.cc--rtl .cm:not(.cm--inline).cm--wide .cm__btn-group+.cm__btn-group{margin-left:0;margin-right:.375rem}#cc-main.cc--rtl .cm:not(.cm--inline).cm--bar.cm--flip .cm__btn+.cm__btn,#cc-main.cc--rtl .cm:not(.cm--inline).cm--wide.cm--flip .cm__btn+.cm__btn{margin-left:.375rem;margin-right:0}#cc-main.cc--rtl .cm__link-group>*+*{margin-left:0;margin-right:1.3rem}@media screen and (max-width:640px){#cc-main{--cc-modal-margin:.5em}#cc-main .cm{max-width:none!important;width:auto!important}#cc-main .cm__body{flex-direction:column!important;padding:0!important}#cc-main .cm__btns,#cc-main .cm__desc,#cc-main .cm__links,#cc-main .cm__title{padding-left:1.1rem!important;padding-right:1.1rem!important}#cc-main .cm__btns{border-left:none!important;border-top:1px solid var(--cc-separator-border-color)!important;flex-direction:column!important;max-width:none!important;min-width:auto!important}#cc-main .cm__btn+.cm__btn,#cc-main .cm__btn-group+.cm__btn-group{margin:.375rem 0 0!important}#cc-main .cm--flip .cm__btn+.cm__btn,#cc-main .cm--flip .cm__btn-group+.cm__btn-group{margin-bottom:.375rem!important;margin-top:0!important}#cc-main .cm__btn-group{display:flex!important;flex-direction:column!important;min-width:auto!important}#cc-main .cm__btn{flex:auto!important}#cc-main .cm__link-group{justify-content:center!important}#cc-main .cm--flip .cm__btn-group,#cc-main .cm--flip .cm__btns{flex-direction:column-reverse!important}}#cc-main .pm-wrapper{position:relative;z-index:2}#cc-main .pm{background:var(--cc-bg);border-radius:var(--cc-modal-border-radius);box-shadow:0 .625em 1.875em #0000024d;display:flex;flex-direction:column;opacity:0;overflow:hidden;position:fixed;visibility:hidden;width:100%;width:unset;z-index:1}#cc-main svg{fill:none;width:100%}#cc-main .pm__body,#cc-main .pm__footer,#cc-main .pm__header{padding:1em 1.4em}#cc-main .pm__header{align-items:center;border-bottom:1px solid var(--cc-separator-border-color);display:flex;justify-content:space-between}#cc-main .pm__title{align-items:center;display:flex;flex:1;font-weight:600;margin-right:2em}#cc-main .pm__close-btn{background:var(--cc-btn-secondary-bg);border:1px solid var(--cc-btn-secondary-border-color);border-radius:var(--cc-btn-border-radius);height:40px;position:relative;transition:all .15s ease;width:40px}#cc-main .pm__close-btn span{display:flex;height:100%;width:100%}#cc-main .pm__close-btn svg{stroke:var(--cc-btn-secondary-color);transform:scale(.5);transition:stroke .15s ease}#cc-main .pm__close-btn:hover{background:var(--cc-btn-secondary-hover-bg);border-color:var(--cc-btn-secondary-hover-border-color)}#cc-main .pm__close-btn:hover svg{stroke:var(--cc-btn-secondary-hover-color)}#cc-main .pm__body{flex:1;overflow-y:auto;overflow-y:overlay}#cc-main .pm__section,#cc-main .pm__section--toggle{border-radius:var(--cc-btn-border-radius);display:flex;flex-direction:column;margin-bottom:.5em}#cc-main .pm__section--toggle .pm__section-desc-wrapper{border:1px solid var(--cc-cookie-category-block-border);border-radius:var(--cc-btn-border-radius);border-top:none;border-top-left-radius:0;border-top-right-radius:0;display:none;margin-top:0!important;overflow:hidden}#cc-main .pm__section{border:1px solid var(--cc-separator-border-color);padding:1em;transition:background-color .25s ease,border-color .25s ease}#cc-main .pm__section:first-child{border:none;margin-bottom:2em;margin-top:0;padding:0;transition:none}#cc-main .pm__section:not(:first-child):hover{background:var(--cc-cookie-category-block-bg);border-color:var(--cc-cookie-category-block-border)}#cc-main .pm__section-toggles+.pm__section{margin-top:2em}#cc-main .pm__section--toggle{background:var(--cc-cookie-category-block-bg);border-top:none;margin-bottom:.375rem}#cc-main .pm__section--toggle .pm__section-title{align-items:center;background:var(--cc-cookie-category-block-bg);border:1px solid var(--cc-cookie-category-block-border);display:flex;justify-content:space-between;min-height:58px;padding:1.1em 5.4em 1.1em 1.2em;position:relative;transition:background-color .25s ease,border-color .25s ease;width:100%}#cc-main .pm__section--toggle .pm__section-title:hover{background:var(--cc-cookie-category-block-hover-bg);border-color:var(--cc-cookie-category-block-hover-border)}#cc-main .pm__section--toggle .pm__section-desc{margin-top:0;padding:1em}#cc-main .pm__section--toggle.is-expanded{--cc-cookie-category-block-bg:var(--cc-cookie-category-expanded-block-bg);--cc-cookie-category-block-border:var(--cc-cookie-category-expanded-block-hover-bg)}#cc-main .pm__section--toggle.is-expanded .pm__section-title{border-bottom-left-radius:0;border-bottom-right-radius:0}#cc-main .pm__section--toggle.is-expanded .pm__section-arrow svg{transform:scale(.5) rotate(180deg)}#cc-main .pm__section--toggle.is-expanded .pm__section-desc-wrapper{display:flex}#cc-main .pm__section--expandable .pm__section-title{cursor:pointer;padding-left:3.4em}#cc-main .pm__section--expandable .pm__section-arrow{background:var(--cc-toggle-readonly-bg);border-radius:100%;display:flex;height:20px;justify-content:center;left:18px;pointer-events:none;position:absolute;width:20px}#cc-main .pm__section--expandable .pm__section-arrow svg{stroke:var(--cc-btn-secondary-color);transform:scale(.5)}#cc-main .pm__section-title-wrapper{align-items:center;display:flex;position:relative}#cc-main .pm__section-title-wrapper+.pm__section-desc-wrapper{margin-top:.85em}#cc-main .pm__section-title{border-radius:var(--cc-btn-border-radius);font-size:.95em;font-weight:600}#cc-main .pm__badge{align-items:center;background:var(--cc-btn-secondary-bg);border-radius:5em;color:var(--cc-secondary-color);display:flex;flex:none;font-size:.8em;font-weight:600;height:23px;justify-content:center;margin-left:1em;min-width:23px;overflow:hidden;padding:0 .6em 1px;position:relative;text-align:center;white-space:nowrap;width:auto}#cc-main .pm__service-counter{background:var(--cc-btn-primary-bg);color:var(--cc-btn-primary-color);padding:0;width:23px}#cc-main .pm__service-counter[data-counterlabel]{padding:0 .6em 1px;width:auto}#cc-main .section__toggle,#cc-main .section__toggle-wrapper,#cc-main .toggle__icon,#cc-main .toggle__label{border-radius:var(--cc-pm-toggle-border-radius);height:23px;transform:translateZ(0);width:50px}#cc-main .section__toggle-wrapper{cursor:pointer;position:absolute;right:18px;z-index:1}#cc-main .toggle-service{height:19px;position:relative;right:0;width:42px}#cc-main .toggle-service .section__toggle,#cc-main .toggle-service .toggle__icon,#cc-main .toggle-service .toggle__label{height:19px;width:42px}#cc-main .toggle-service .toggle__icon{position:relative}#cc-main .toggle-service .toggle__icon-circle{height:19px;width:19px}#cc-main .toggle-service .section__toggle:checked~.toggle__icon .toggle__icon-circle{transform:translate(23px)}#cc-main .pm__section--toggle:nth-child(2) .section__toggle-wrapper:after{display:none!important}#cc-main .section__toggle{border:0;cursor:pointer;display:block;left:0;margin:0;position:absolute;top:0}#cc-main .section__toggle:disabled{cursor:not-allowed}#cc-main .toggle__icon{background:var(--cc-toggle-off-bg);box-shadow:0 0 0 1px var(--cc-toggle-off-bg);display:flex;flex-direction:row;pointer-events:none;position:absolute;transition:all .25s ease}#cc-main .toggle__icon-circle{background:var(--cc-toggle-off-knob-bg);border:none;border-radius:var(--cc-pm-toggle-border-radius);box-shadow:0 1px 2px #1820035c;display:block;height:23px;left:0;position:absolute;top:0;transition:transform .25s ease,background-color .25s ease;width:23px}#cc-main .toggle__icon-off,#cc-main .toggle__icon-on{height:100%;position:absolute;transition:opacity .15s ease;width:100%}#cc-main .toggle__icon-on{opacity:0;transform:rotate(45deg)}#cc-main .toggle__icon-on svg{stroke:var(--cc-toggle-on-bg);transform:scale(.55) rotate(-45deg)}#cc-main .toggle__icon-off{opacity:1}#cc-main .toggle__icon-off svg{stroke:var(--cc-toggle-off-bg);transform:scale(.55)}#cc-main .section__toggle:checked~.toggle__icon{background:var(--cc-toggle-on-bg);box-shadow:0 0 0 1px var(--cc-toggle-on-bg)}#cc-main .section__toggle:checked~.toggle__icon .toggle__icon-circle{background-color:var(--cc-toggle-on-knob-bg);transform:translate(27px)}#cc-main .section__toggle:checked~.toggle__icon .toggle__icon-on{opacity:1}#cc-main .section__toggle:checked~.toggle__icon .toggle__icon-off{opacity:0}#cc-main .section__toggle:checked:disabled~.toggle__icon{background:var(--cc-toggle-readonly-bg);box-shadow:0 0 0 1px var(--cc-toggle-readonly-bg)}#cc-main .section__toggle:checked:disabled~.toggle__icon .toggle__icon-circle{background:var(--cc-toggle-readonly-knob-bg);box-shadow:none}#cc-main .section__toggle:checked:disabled~.toggle__icon svg{stroke:var(--cc-toggle-readonly-knob-icon-color)}#cc-main .toggle__label{opacity:0;overflow:hidden;pointer-events:none;position:absolute;top:0;z-index:-1}#cc-main .pm__section-desc-wrapper{color:var(--cc-secondary-color);display:flex;flex-direction:column;font-size:.9em}#cc-main .pm__section-desc-wrapper>:not(:last-child){border-bottom:1px solid var(--cc-cookie-category-block-border)}#cc-main .pm__section-services{display:flex;flex-direction:column}#cc-main .pm__service{align-items:center;display:flex;justify-content:space-between;padding:.4em 1.2em;position:relative;transition:background-color .15s ease}#cc-main .pm__service:hover{background-color:var(--cc-cookie-category-block-hover-bg)}#cc-main .pm__service-header{align-items:center;display:flex;margin-right:1em;width:100%}#cc-main .pm__service-icon{border:2px solid;border-radius:100%;height:8px;margin-left:6px;margin-right:20px;margin-top:1px;min-width:8px}#cc-main .pm__service-title{font-size:.95em;width:100%;word-break:break-word}#cc-main .pm__section-desc{line-height:1.5em}#cc-main .pm__section-table{border-collapse:collapse;font-size:.9em;margin:0;overflow:hidden;padding:0;text-align:left;width:100%}#cc-main .pm__table-caption{text-align:left}#cc-main .pm__table-caption,#cc-main .pm__table-head>tr{border-bottom:1px dashed var(--cc-separator-border-color);color:var(--cc-primary-color);font-weight:600}#cc-main .pm__table-tr{transition:background-color .15s ease}#cc-main .pm__table-tr:hover{background:var(--cc-cookie-category-block-hover-bg)}#cc-main .pm__table-caption,#cc-main .pm__table-td,#cc-main .pm__table-th{padding:.625em .625em .625em 1.2em;vertical-align:top}#cc-main .pm__footer{border-top:1px solid var(--cc-separator-border-color);display:flex;justify-content:space-between}#cc-main .pm__btn-group{display:flex}#cc-main .pm__btn+.pm__btn,#cc-main .pm__btn-group+.pm__btn-group{margin-left:.375rem}#cc-main .pm--flip .pm__btn+.pm__btn,#cc-main .pm--flip .pm__btn-group+.pm__btn-group{margin-left:0;margin-right:.375rem}#cc-main .pm__btn{background:var(--cc-btn-primary-bg);border:1px solid var(--cc-btn-primary-border-color);border-radius:var(--cc-btn-border-radius);color:var(--cc-btn-primary-color);flex:auto;font-size:.82em;font-weight:600;min-height:42px;min-width:110px;padding:.5em 1.5em;text-align:center;transition:background-color .15s ease,border-color .15s ease,color .15s ease}#cc-main .pm__btn:hover{background:var(--cc-btn-primary-hover-bg);border-color:var(--cc-btn-primary-hover-border-color);color:var(--cc-btn-primary-hover-color)}#cc-main .pm__btn--secondary{background:var(--cc-btn-secondary-bg);border-color:var(--cc-btn-secondary-border-color);color:var(--cc-btn-secondary-color)}#cc-main .pm__btn--secondary:hover{background:var(--cc-btn-secondary-hover-bg);border-color:var(--cc-btn-secondary-hover-border-color);color:var(--cc-btn-secondary-hover-color)}#cc-main .pm--box{height:calc(100% - 2em);left:var(--cc-modal-margin);margin:0 auto;max-height:37.5em;max-width:43em;right:var(--cc-modal-margin);top:50%;transform:translateY(calc(-50% + 1.6em))}#cc-main .pm--box.pm--flip .pm__btn-group,#cc-main .pm--box.pm--flip .pm__footer{flex-direction:row-reverse}#cc-main .pm--bar{border-radius:0;bottom:0;height:100%;margin:0;max-height:none;max-width:29em;opacity:1;top:0;width:100%;--cc-modal-transition-duration:.35s}#cc-main .pm--bar .pm__section-table,#cc-main .pm--bar .pm__table-body,#cc-main .pm--bar .pm__table-td,#cc-main .pm--bar .pm__table-th,#cc-main .pm--bar .pm__table-tr{display:block}#cc-main .pm--bar .pm__table-head{display:none}#cc-main .pm--bar .pm__table-caption{display:block}#cc-main .pm--bar .pm__table-tr:not(:last-child){border-bottom:1px solid var(--cc-separator-border-color)}#cc-main .pm--bar .pm__table-td{display:flex;justify-content:space-between}#cc-main .pm--bar .pm__table-td:before{color:var(--cc-primary-color);content:attr(data-column);flex:1;font-weight:600;min-width:100px;overflow:hidden;padding-right:2em;text-overflow:ellipsis}#cc-main .pm--bar .pm__table-td>div{flex:3}#cc-main .pm--bar:not(.pm--wide) .pm__body,#cc-main .pm--bar:not(.pm--wide) .pm__footer,#cc-main .pm--bar:not(.pm--wide) .pm__header{padding:1em 1.3em}#cc-main .pm--bar:not(.pm--wide) .pm__btn-group,#cc-main .pm--bar:not(.pm--wide) .pm__footer{flex-direction:column}#cc-main .pm--bar:not(.pm--wide) .pm__btn+.pm__btn,#cc-main .pm--bar:not(.pm--wide) .pm__btn-group+.pm__btn-group{margin:.375rem 0 0}#cc-main .pm--bar:not(.pm--wide).pm--flip .pm__btn-group,#cc-main .pm--bar:not(.pm--wide).pm--flip .pm__footer{flex-direction:column-reverse}#cc-main .pm--bar:not(.pm--wide).pm--flip .pm__btn+.pm__btn,#cc-main .pm--bar:not(.pm--wide).pm--flip .pm__btn-group+.pm__btn-group{margin-bottom:.375rem;margin-top:0}#cc-main .pm--bar:not(.pm--wide) .pm__badge{display:none}#cc-main .pm--bar.pm--left{left:0;transform:translate(-100%)}#cc-main .pm--bar.pm--right{right:0;transform:translate(100%)}#cc-main .pm--bar.pm--wide{max-width:35em}#cc-main .pm--bar.pm--wide .pm__body,#cc-main .pm--bar.pm--wide .pm__footer,#cc-main .pm--bar.pm--wide .pm__header{padding:1em 1.4em}#cc-main .pm--bar.pm--wide.pm--flip .pm__btn-group,#cc-main .pm--bar.pm--wide.pm--flip .pm__footer{flex-direction:row-reverse}#cc-main .pm-overlay{background:var(--cc-overlay-bg);bottom:0;content:"";left:0;opacity:0;position:fixed;right:0;top:0;visibility:hidden;z-index:1}#cc-main .cc--anim .pm,#cc-main .cc--anim .pm-overlay{transition:opacity var(--cc-modal-transition-duration) ease,visibility var(--cc-modal-transition-duration) ease,transform var(--cc-modal-transition-duration) ease}.show--preferences #cc-main .cc--anim .pm{opacity:1;visibility:visible!important}.show--preferences #cc-main .cc--anim .pm--box{transform:translateY(-50%)}.show--preferences #cc-main .cc--anim .pm--bar{transform:translate(0)}.show--preferences #cc-main .cc--anim .pm-overlay{opacity:1;visibility:visible}#cc-main.cc--rtl .pm__service-header{margin-left:1em;margin-right:0}#cc-main.cc--rtl .pm__section-arrow{left:unset;right:18px}#cc-main.cc--rtl .section__toggle-wrapper{left:18px;right:unset;transform-origin:left}#cc-main.cc--rtl .toggle-service{left:0}#cc-main.cc--rtl .pm__service-icon{margin-left:20px;margin-right:5px}#cc-main.cc--rtl .pm__section--toggle .pm__section-title{padding-left:5.4em;padding-right:1.2em}#cc-main.cc--rtl .pm__section--expandable .pm__section-title{padding-right:3.4em}#cc-main.cc--rtl .pm__badge{margin-left:unset;margin-right:1em}#cc-main.cc--rtl .toggle__icon-circle{transform:translate(27px)}#cc-main.cc--rtl .toggle-service .toggle__icon-circle{transform:translate(23px)}#cc-main.cc--rtl .section__toggle:checked~.toggle__icon .toggle__icon-circle{transform:translate(0)}#cc-main.cc--rtl .pm__table-td,#cc-main.cc--rtl .pm__table-th{padding-left:unset;padding-right:1.2em;text-align:right}#cc-main.cc--rtl .pm__table-td{padding-left:unset;padding-right:1.2em}#cc-main.cc--rtl .pm__table-td:before{padding-left:2em;padding-right:unset}#cc-main.cc--rtl .pm__btn+.pm__btn,#cc-main.cc--rtl .pm__btn-group+.pm__btn-group{margin-left:0;margin-right:.375rem}#cc-main.cc--rtl .pm--flip .pm__btn+.pm__btn,#cc-main.cc--rtl .pm--flip .pm__btn-group+.pm__btn-group{margin-left:.375rem;margin-right:0}#cc-main.cc--rtl .pm--flip.pm--bar:not(.pm--wide) .pm__btn+.pm__btn,#cc-main.cc--rtl .pm--flip.pm--bar:not(.pm--wide) .pm__btn-group+.pm__btn-group{margin-left:0}@media screen and (max-width:640px){#cc-main .pm{border-radius:0;bottom:0;height:auto;left:0;max-height:100%;max-width:none!important;right:0;top:0;transform:translateY(1.6em)}#cc-main .pm__body,#cc-main .pm__footer,#cc-main .pm__header{padding:.9em!important}#cc-main .pm__badge{display:none}#cc-main .pm__section-table,#cc-main .pm__table-body,#cc-main .pm__table-caption,#cc-main .pm__table-td,#cc-main .pm__table-th,#cc-main .pm__table-tr{display:block}#cc-main .pm__table-head{display:none}#cc-main .pm__table-tr:not(:last-child){border-bottom:1px solid var(--cc-separator-border-color)}#cc-main .pm__table-td{display:flex;justify-content:space-between}#cc-main .pm__table-td:before{color:var(--cc-primary-color);content:attr(data-column);flex:1;font-weight:600;min-width:100px;overflow:hidden;padding-right:2em;text-overflow:ellipsis}#cc-main .pm__table-td>div{flex:3}#cc-main .pm__btn-group,#cc-main .pm__footer{flex-direction:column!important}#cc-main .pm__btn-group{display:flex!important}#cc-main .pm__btn+.pm__btn,#cc-main .pm__btn-group+.pm__btn-group{margin:.375rem 0 0!important}#cc-main .pm--flip .pm__btn+.pm__btn,#cc-main .pm--flip .pm__btn-group+.pm__btn-group{margin-bottom:.375rem!important;margin-top:0!important}#cc-main .pm--flip .pm__btn-group,#cc-main .pm--flip .pm__footer{flex-direction:column-reverse!important}.show--preferences #cc-main .cc--anim .pm{transform:translateY(0)!important}}.cc-btns{display:flex;flex-direction:column;gap:3px}.cc-btns>button{padding:10px}#cc-main{--cc-btn-primary-bg: #8220ff;--cc-btn-primary-border-color: #6619cc;--cc-btn-primary-hover-bg: #9b51e0;--cc-btn-primary-hover-border-color: #7a29e0;--cc-toggle-on-bg: var(--cc-btn-primary-bg);--cc-btn-border-radius: 10px}`)),document.head.appendChild(i)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import * as b from "react";
import wr, { createContext as ml, useContext as vl, useCallback as Sn, useState as ye, useRef as Et, useEffect as xe } from "react";
import { Search as ho, X as yl, XIcon as bl, SearchIcon as kl, Globe as xl } from "lucide-react";
import * as _l from "react-dom";
import wl from "react-dom";
var ln = { exports: {} }, Ft = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vi;
function jl() {
  if (Vi) return Ft;
  Vi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return Ft.Fragment = t, Ft.jsx = n, Ft.jsxs = n, Ft;
}
var Gt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ki;
function Sl() {
  return Ki || (Ki = 1, process.env.NODE_ENV !== "production" && (function() {
    function e(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === E ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case m:
          return "Fragment";
        case P:
          return "Profiler";
        case x:
          return "StrictMode";
        case j:
          return "Suspense";
        case I:
          return "SuspenseList";
        case T:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case h:
            return "Portal";
          case S:
            return (v.displayName || "Context") + ".Provider";
          case y:
            return (v._context.displayName || "Context") + ".Consumer";
          case _:
            var A = v.render;
            return v = v.displayName, v || (v = A.displayName || A.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case z:
            return A = v.displayName || null, A !== null ? A : e(v.type) || "Memo";
          case C:
            A = v._payload, v = v._init;
            try {
              return e(v(A));
            } catch {
            }
        }
      return null;
    }
    function t(v) {
      return "" + v;
    }
    function n(v) {
      try {
        t(v);
        var A = !1;
      } catch {
        A = !0;
      }
      if (A) {
        A = console;
        var k = A.error, M = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return k.call(
          A,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          M
        ), t(v);
      }
    }
    function r(v) {
      if (v === m) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === C)
        return "<...>";
      try {
        var A = e(v);
        return A ? "<" + A + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var v = K.A;
      return v === null ? null : v.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(v) {
      if (Z.call(v, "key")) {
        var A = Object.getOwnPropertyDescriptor(v, "key").get;
        if (A && A.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function s(v, A) {
      function k() {
        D || (D = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          A
        ));
      }
      k.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: k,
        configurable: !0
      });
    }
    function u() {
      var v = e(this.type);
      return J[v] || (J[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function c(v, A, k, M, N, L, B, F) {
      return k = L.ref, v = {
        $$typeof: f,
        type: v,
        key: A,
        props: L,
        _owner: N
      }, (k !== void 0 ? k : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: F
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function p(v, A, k, M, N, L, B, F) {
      var R = A.children;
      if (R !== void 0)
        if (M)
          if ($(R)) {
            for (M = 0; M < R.length; M++)
              d(R[M]);
            Object.freeze && Object.freeze(R);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(R);
      if (Z.call(A, "key")) {
        R = e(v);
        var X = Object.keys(A).filter(function(de) {
          return de !== "key";
        });
        M = 0 < X.length ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}", w[R + M] || (X = 0 < X.length ? "{" + X.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          M,
          R,
          X,
          R
        ), w[R + M] = !0);
      }
      if (R = null, k !== void 0 && (n(k), R = "" + k), o(A) && (n(A.key), R = "" + A.key), "key" in A) {
        k = {};
        for (var le in A)
          le !== "key" && (k[le] = A[le]);
      } else k = A;
      return R && s(
        k,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), c(
        v,
        R,
        L,
        N,
        i(),
        k,
        B,
        F
      );
    }
    function d(v) {
      typeof v == "object" && v !== null && v.$$typeof === f && v._store && (v._store.validated = 1);
    }
    var g = wr, f = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), S = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), T = Symbol.for("react.activity"), E = Symbol.for("react.client.reference"), K = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = Object.prototype.hasOwnProperty, $ = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(v) {
        return v();
      }
    };
    var D, J = {}, Y = g.react_stack_bottom_frame.bind(
      g,
      a
    )(), W = G(r(a)), w = {};
    Gt.Fragment = m, Gt.jsx = function(v, A, k, M, N) {
      var L = 1e4 > K.recentlyCreatedOwnerStacks++;
      return p(
        v,
        A,
        k,
        !1,
        M,
        N,
        L ? Error("react-stack-top-frame") : Y,
        L ? G(r(v)) : W
      );
    }, Gt.jsxs = function(v, A, k, M, N) {
      var L = 1e4 > K.recentlyCreatedOwnerStacks++;
      return p(
        v,
        A,
        k,
        !0,
        M,
        N,
        L ? Error("react-stack-top-frame") : Y,
        L ? G(r(v)) : W
      );
    };
  })()), Gt;
}
var Ui;
function Pl() {
  return Ui || (Ui = 1, process.env.NODE_ENV === "production" ? ln.exports = jl() : ln.exports = Sl()), ln.exports;
}
var l = Pl();
function go(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = go(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function mo() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = go(e)) && (r && (r += " "), r += t);
  return r;
}
const qi = (e) => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e, Yi = mo, Cl = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Yi(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: a } = t, o = Object.keys(i).map((c) => {
    const p = n == null ? void 0 : n[c], d = a == null ? void 0 : a[c];
    if (p === null) return null;
    const g = qi(p) || qi(d);
    return i[c][g];
  }), s = n && Object.entries(n).reduce((c, p) => {
    let [d, g] = p;
    return g === void 0 || (c[d] = g), c;
  }, {}), u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, p) => {
    let { class: d, className: g, ...f } = p;
    return Object.entries(f).every((h) => {
      let [m, x] = h;
      return Array.isArray(x) ? x.includes({
        ...a,
        ...s
      }[m]) : {
        ...a,
        ...s
      }[m] === x;
    }) ? [
      ...c,
      d,
      g
    ] : c;
  }, []);
  return Yi(e, o, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Hr = "-", zl = (e) => {
  const t = Ml(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (o) => {
      const s = o.split(Hr);
      return s[0] === "" && s.length !== 1 && s.shift(), vo(s, t) || Al(o);
    },
    getConflictingClassGroupIds: (o, s) => {
      const u = n[o] || [];
      return s && r[o] ? [...u, ...r[o]] : u;
    }
  };
}, vo = (e, t) => {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), i = r ? vo(e.slice(1), r) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const a = e.join(Hr);
  return (o = t.validators.find(({
    validator: s
  }) => s(a))) == null ? void 0 : o.classGroupId;
}, Zi = /^\[(.+)\]$/, Al = (e) => {
  if (Zi.test(e)) {
    const t = Zi.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, Ml = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in n)
    jr(n[i], r, i, t);
  return r;
}, jr = (e, t, n, r) => {
  e.forEach((i) => {
    if (typeof i == "string") {
      const a = i === "" ? t : Ji(t, i);
      a.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (El(i)) {
        jr(i(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(([a, o]) => {
      jr(o, Ji(t, a), n, r);
    });
  });
}, Ji = (e, t) => {
  let n = e;
  return t.split(Hr).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, El = (e) => e.isThemeGetter, Ol = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const i = (a, o) => {
    n.set(a, o), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(a) {
      let o = n.get(a);
      if (o !== void 0)
        return o;
      if ((o = r.get(a)) !== void 0)
        return i(a, o), o;
    },
    set(a, o) {
      n.has(a) ? n.set(a, o) : i(a, o);
    }
  };
}, Sr = "!", Pr = ":", Il = Pr.length, Nl = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (i) => {
    const a = [];
    let o = 0, s = 0, u = 0, c;
    for (let h = 0; h < i.length; h++) {
      let m = i[h];
      if (o === 0 && s === 0) {
        if (m === Pr) {
          a.push(i.slice(u, h)), u = h + Il;
          continue;
        }
        if (m === "/") {
          c = h;
          continue;
        }
      }
      m === "[" ? o++ : m === "]" ? o-- : m === "(" ? s++ : m === ")" && s--;
    }
    const p = a.length === 0 ? i : i.substring(u), d = Tl(p), g = d !== p, f = c && c > u ? c - u : void 0;
    return {
      modifiers: a,
      hasImportantModifier: g,
      baseClassName: d,
      maybePostfixModifierPosition: f
    };
  };
  if (t) {
    const i = t + Pr, a = r;
    r = (o) => o.startsWith(i) ? a(o.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const i = r;
    r = (a) => n({
      className: a,
      parseClassName: i
    });
  }
  return r;
}, Tl = (e) => e.endsWith(Sr) ? e.substring(0, e.length - 1) : e.startsWith(Sr) ? e.substring(1) : e, $l = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const i = [];
    let a = [];
    return r.forEach((o) => {
      o[0] === "[" || t[o] ? (i.push(...a.sort(), o), a = []) : a.push(o);
    }), i.push(...a.sort()), i;
  };
}, Ll = (e) => ({
  cache: Ol(e.cacheSize),
  parseClassName: Nl(e),
  sortModifiers: $l(e),
  ...zl(e)
}), Rl = /\s+/, Dl = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: i,
    sortModifiers: a
  } = t, o = [], s = e.trim().split(Rl);
  let u = "";
  for (let c = s.length - 1; c >= 0; c -= 1) {
    const p = s[c], {
      isExternal: d,
      modifiers: g,
      hasImportantModifier: f,
      baseClassName: h,
      maybePostfixModifierPosition: m
    } = n(p);
    if (d) {
      u = p + (u.length > 0 ? " " + u : u);
      continue;
    }
    let x = !!m, P = r(x ? h.substring(0, m) : h);
    if (!P) {
      if (!x) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      if (P = r(h), !P) {
        u = p + (u.length > 0 ? " " + u : u);
        continue;
      }
      x = !1;
    }
    const y = a(g).join(":"), S = f ? y + Sr : y, _ = S + P;
    if (o.includes(_))
      continue;
    o.push(_);
    const j = i(P, x);
    for (let I = 0; I < j.length; ++I) {
      const z = j[I];
      o.push(S + z);
    }
    u = p + (u.length > 0 ? " " + u : u);
  }
  return u;
};
function Bl() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = yo(t)) && (r && (r += " "), r += n);
  return r;
}
const yo = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = yo(e[r])) && (n && (n += " "), n += t);
  return n;
};
function Fl(e, ...t) {
  let n, r, i, a = o;
  function o(u) {
    const c = t.reduce((p, d) => d(p), e());
    return n = Ll(c), r = n.cache.get, i = n.cache.set, a = s, s(u);
  }
  function s(u) {
    const c = r(u);
    if (c)
      return c;
    const p = Dl(u, n);
    return i(u, p), p;
  }
  return function() {
    return a(Bl.apply(null, arguments));
  };
}
const ue = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, bo = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ko = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Gl = /^\d+\/\d+$/, Wl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Hl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Vl = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Kl = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ul = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ht = (e) => Gl.test(e), re = (e) => !!e && !Number.isNaN(Number(e)), Fe = (e) => !!e && Number.isInteger(Number(e)), tr = (e) => e.endsWith("%") && re(e.slice(0, -1)), Te = (e) => Wl.test(e), ql = () => !0, Yl = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Hl.test(e) && !Vl.test(e)
), xo = () => !1, Zl = (e) => Kl.test(e), Jl = (e) => Ul.test(e), Xl = (e) => !U(e) && !q(e), Ql = (e) => Tt(e, jo, xo), U = (e) => bo.test(e), Ze = (e) => Tt(e, So, Yl), nr = (e) => Tt(e, ic, re), Xi = (e) => Tt(e, _o, xo), ec = (e) => Tt(e, wo, Jl), cn = (e) => Tt(e, Po, Zl), q = (e) => ko.test(e), Wt = (e) => $t(e, So), tc = (e) => $t(e, ac), Qi = (e) => $t(e, _o), nc = (e) => $t(e, jo), rc = (e) => $t(e, wo), un = (e) => $t(e, Po, !0), Tt = (e, t, n) => {
  const r = bo.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, $t = (e, t, n = !1) => {
  const r = ko.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, _o = (e) => e === "position" || e === "percentage", wo = (e) => e === "image" || e === "url", jo = (e) => e === "length" || e === "size" || e === "bg-size", So = (e) => e === "length", ic = (e) => e === "number", ac = (e) => e === "family-name", Po = (e) => e === "shadow", oc = () => {
  const e = ue("color"), t = ue("font"), n = ue("text"), r = ue("font-weight"), i = ue("tracking"), a = ue("leading"), o = ue("breakpoint"), s = ue("container"), u = ue("spacing"), c = ue("radius"), p = ue("shadow"), d = ue("inset-shadow"), g = ue("text-shadow"), f = ue("drop-shadow"), h = ue("blur"), m = ue("perspective"), x = ue("aspect"), P = ue("ease"), y = ue("animate"), S = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
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
  ], j = () => [..._(), q, U], I = () => ["auto", "hidden", "clip", "visible", "scroll"], z = () => ["auto", "contain", "none"], C = () => [q, U, u], T = () => [ht, "full", "auto", ...C()], E = () => [Fe, "none", "subgrid", q, U], K = () => ["auto", {
    span: ["full", Fe, q, U]
  }, Fe, q, U], Z = () => [Fe, "auto", q, U], $ = () => ["auto", "min", "max", "fr", q, U], G = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], D = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], J = () => ["auto", ...C()], Y = () => [ht, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...C()], W = () => [e, q, U], w = () => [..._(), Qi, Xi, {
    position: [q, U]
  }], v = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], A = () => ["auto", "cover", "contain", nc, Ql, {
    size: [q, U]
  }], k = () => [tr, Wt, Ze], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    c,
    q,
    U
  ], N = () => ["", re, Wt, Ze], L = () => ["solid", "dashed", "dotted", "double"], B = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], F = () => [re, tr, Qi, Xi], R = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    h,
    q,
    U
  ], X = () => ["none", re, q, U], le = () => ["none", re, q, U], de = () => [re, q, U], ke = () => [ht, "full", ...C()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Te],
      breakpoint: [Te],
      color: [ql],
      container: [Te],
      "drop-shadow": [Te],
      ease: ["in", "out", "in-out"],
      font: [Xl],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Te],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Te],
      shadow: [Te],
      spacing: ["px", re],
      text: [Te],
      "text-shadow": [Te],
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
        aspect: ["auto", "square", ht, U, q, x]
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
        columns: [re, U, q, s]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": S()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": S()
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
        object: j()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: I()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": I()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": I()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: z()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": z()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": z()
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
        z: [Fe, "auto", q, U]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [ht, "full", "auto", s, ...C()]
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
        flex: [re, ht, "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", re, q, U]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", re, q, U]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Fe, "first", "last", "none", q, U]
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
        col: K()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Z()
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
        row: K()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Z()
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
        "auto-cols": $()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": $()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: C()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": C()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": C()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...G(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...D(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...D()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...G()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...D(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": G()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...D(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...D()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: C()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: C()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: C()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: C()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: C()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: C()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: C()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: C()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: C()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: J()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: J()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: J()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: J()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: J()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: J()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: J()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: J()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: J()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": C()
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
        "space-y": C()
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
        w: [s, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          s,
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
          s,
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
        text: ["base", n, Wt, Ze]
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
        font: [r, q, nr]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", tr, U]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [tc, U, t]
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
        tracking: [i, q, U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [re, "none", q, nr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          a,
          ...C()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", q, U]
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
        list: ["disc", "decimal", "none", q, U]
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
        placeholder: W()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: W()
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
        decoration: [...L(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [re, "from-font", "auto", q, Ze]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: W()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [re, "auto", q, U]
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
        indent: C()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", q, U]
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
        content: ["none", q, U]
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
        bg: w()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: v()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: A()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Fe, q, U],
          radial: ["", q, U],
          conic: [Fe, q, U]
        }, rc, ec]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: W()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: k()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: k()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: k()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: W()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: W()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: W()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: M()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": M()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": M()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": M()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": M()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": M()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": M()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": M()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": M()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": M()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": M()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": M()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": M()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": M()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": M()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: N()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": N()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": N()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": N()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": N()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": N()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": N()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": N()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": N()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": N()
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
        "divide-y": N()
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
        border: [...L(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...L(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: W()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": W()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": W()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": W()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": W()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": W()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": W()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": W()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": W()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: W()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...L(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [re, q, U]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", re, Wt, Ze]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: W()
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
          un,
          cn
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: W()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, un, cn]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": W()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: N()
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
        ring: W()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [re, Ze]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": W()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": N()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": W()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", g, un, cn]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": W()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [re, q, U]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...B(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": B()
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
        "mask-linear": [re]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": F()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": F()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": W()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": F()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": F()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": W()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": F()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": F()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": W()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": F()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": F()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": W()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": F()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": F()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": W()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": F()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": F()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": W()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": F()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": F()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": W()
      }],
      "mask-image-radial": [{
        "mask-radial": [q, U]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": F()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": F()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": W()
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
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [re]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": F()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": F()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": W()
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
        mask: w()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: v()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: A()
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
        mask: ["none", q, U]
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
          q,
          U
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: R()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [re, q, U]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [re, q, U]
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
          f,
          un,
          cn
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": W()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", re, q, U]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [re, q, U]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", re, q, U]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [re, q, U]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", re, q, U]
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
          q,
          U
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": R()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [re, q, U]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [re, q, U]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", re, q, U]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [re, q, U]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", re, q, U]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [re, q, U]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [re, q, U]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", re, q, U]
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
        "border-spacing": C()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": C()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": C()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", q, U]
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
        duration: [re, "initial", q, U]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", P, q, U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [re, q, U]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, q, U]
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
        perspective: [m, q, U]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": j()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: X()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": X()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": X()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": X()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: le()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": le()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": le()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": le()
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
        skew: de()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": de()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": de()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [q, U, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: j()
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
        translate: ke()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ke()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ke()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ke()
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
        accent: W()
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
        caret: W()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", q, U]
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
        "scroll-m": C()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": C()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": C()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": C()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": C()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": C()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": C()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": C()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": C()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": C()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": C()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": C()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": C()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": C()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": C()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": C()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": C()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": C()
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
        "will-change": ["auto", "scroll", "contents", "transform", q, U]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...W()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [re, Wt, Ze, nr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...W()]
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
}, sc = /* @__PURE__ */ Fl(oc);
function fe(...e) {
  return sc(mo(e));
}
function En(e, t) {
  if (e) {
    const n = e.split(":");
    if (n.length >= 3 && n[0] && n[2] !== "443")
      return e;
  }
  return t;
}
const lc = Cl(
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
), Je = b.forwardRef(
  ({ className: e, variant: t, size: n, ...r }, i) => /* @__PURE__ */ l.jsx("button", { className: fe(lc({ variant: t, size: n, className: e })), ref: i, ...r })
);
Je.displayName = "Button";
const pe = ({ href: e, children: t, className: n = "", target: r = "_self", rel: i = "noopener noreferrer", onClick: a }) => {
  const o = (s) => {
    r !== "_blank" && (s.preventDefault(), window.location.href = e), a && a(s);
  };
  return /* @__PURE__ */ l.jsx(
    "a",
    {
      href: e,
      className: n,
      target: r,
      rel: i,
      onClick: o,
      "aria-label": typeof t == "string" ? t : void 0,
      children: t
    }
  );
}, cc = (e, t, n, r) => {
  var a, o, s, u;
  const i = [n, {
    code: t,
    ...r || {}
  }];
  if ((o = (a = e == null ? void 0 : e.services) == null ? void 0 : a.logger) != null && o.forward)
    return e.services.logger.forward(i, "warn", "react-i18next::", !0);
  et(i[0]) && (i[0] = `react-i18next:: ${i[0]}`), (u = (s = e == null ? void 0 : e.services) == null ? void 0 : s.logger) != null && u.warn ? e.services.logger.warn(...i) : console != null && console.warn && console.warn(...i);
}, ea = {}, Cr = (e, t, n, r) => {
  et(n) && ea[n] || (et(n) && (ea[n] = /* @__PURE__ */ new Date()), cc(e, t, n, r));
}, Co = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off("initialized", n);
      }, 0), t();
    };
    e.on("initialized", n);
  }
}, zr = (e, t, n) => {
  e.loadNamespaces(t, Co(e, n));
}, ta = (e, t, n, r) => {
  if (et(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1) return zr(e, n, r);
  n.forEach((i) => {
    e.options.ns.indexOf(i) < 0 && e.options.ns.push(i);
  }), e.loadLanguages(t, Co(e, r));
}, uc = (e, t, n = {}) => !t.languages || !t.languages.length ? (Cr(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: t.languages
}), !0) : t.hasLoadedNamespace(e, {
  lng: n.lng,
  precheck: (r, i) => {
    if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && r.services.backendConnector.backend && r.isLanguageChangingTo && !i(r.isLanguageChangingTo, e)) return !1;
  }
}), et = (e) => typeof e == "string", dc = (e) => typeof e == "object" && e !== null, pc = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, fc = {
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
}, hc = (e) => fc[e], gc = (e) => e.replace(pc, hc);
let Ar = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: gc
};
const mc = (e = {}) => {
  Ar = {
    ...Ar,
    ...e
  };
}, vc = () => Ar;
let zo;
const yc = (e) => {
  zo = e;
}, bc = () => zo, kc = {
  type: "3rdParty",
  init(e) {
    mc(e.options.react), yc(e);
  }
}, xc = ml();
class _c {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const wc = (e, t) => {
  const n = Et();
  return xe(() => {
    n.current = e;
  }, [e, t]), n.current;
}, Ao = (e, t, n, r) => e.getFixedT(t, n, r), jc = (e, t, n, r) => Sn(Ao(e, t, n, r), [e, t, n, r]), Gn = (e, t = {}) => {
  var _, j, I, z;
  const {
    i18n: n
  } = t, {
    i18n: r,
    defaultNS: i
  } = vl(xc) || {}, a = n || r || bc();
  if (a && !a.reportNamespaces && (a.reportNamespaces = new _c()), !a) {
    Cr(a, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const C = (E, K) => et(K) ? K : dc(K) && et(K.defaultValue) ? K.defaultValue : Array.isArray(E) ? E[E.length - 1] : E, T = [C, {}, !1];
    return T.t = C, T.i18n = {}, T.ready = !1, T;
  }
  (_ = a.options.react) != null && _.wait && Cr(a, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const o = {
    ...vc(),
    ...a.options.react,
    ...t
  }, {
    useSuspense: s,
    keyPrefix: u
  } = o;
  let c = i || ((j = a.options) == null ? void 0 : j.defaultNS);
  c = et(c) ? [c] : c || ["translation"], (z = (I = a.reportNamespaces).addUsedNamespaces) == null || z.call(I, c);
  const p = (a.isInitialized || a.initializedStoreOnce) && c.every((C) => uc(C, a, o)), d = jc(a, t.lng || null, o.nsMode === "fallback" ? c : c[0], u), g = () => d, f = () => Ao(a, t.lng || null, o.nsMode === "fallback" ? c : c[0], u), [h, m] = ye(g);
  let x = c.join();
  t.lng && (x = `${t.lng}${x}`);
  const P = wc(x), y = Et(!0);
  xe(() => {
    const {
      bindI18n: C,
      bindI18nStore: T
    } = o;
    y.current = !0, !p && !s && (t.lng ? ta(a, t.lng, c, () => {
      y.current && m(f);
    }) : zr(a, c, () => {
      y.current && m(f);
    })), p && P && P !== x && y.current && m(f);
    const E = () => {
      y.current && m(f);
    };
    return C && (a == null || a.on(C, E)), T && (a == null || a.store.on(T, E)), () => {
      y.current = !1, a && C && (C == null || C.split(" ").forEach((K) => a.off(K, E))), T && a && T.split(" ").forEach((K) => a.store.off(K, E));
    };
  }, [a, x]), xe(() => {
    y.current && p && m(g);
  }, [a, u, p]);
  const S = [h, a, p];
  if (S.t = h, S.i18n = a, S.ready = p, p || !p && !s) return S;
  throw new Promise((C) => {
    t.lng ? ta(a, t.lng, c, () => C()) : zr(a, c, () => C());
  });
}, te = (e) => typeof e == "string", Ht = () => {
  let e, t;
  const n = new Promise((r, i) => {
    e = r, t = i;
  });
  return n.resolve = e, n.reject = t, n;
}, na = (e) => e == null ? "" : "" + e, Sc = (e, t, n) => {
  e.forEach((r) => {
    t[r] && (n[r] = t[r]);
  });
}, Pc = /###/g, ra = (e) => e && e.indexOf("###") > -1 ? e.replace(Pc, ".") : e, ia = (e) => !e || te(e), qt = (e, t, n) => {
  const r = te(t) ? t.split(".") : t;
  let i = 0;
  for (; i < r.length - 1; ) {
    if (ia(e)) return {};
    const a = ra(r[i]);
    !e[a] && n && (e[a] = new n()), Object.prototype.hasOwnProperty.call(e, a) ? e = e[a] : e = {}, ++i;
  }
  return ia(e) ? {} : {
    obj: e,
    k: ra(r[i])
  };
}, aa = (e, t, n) => {
  const {
    obj: r,
    k: i
  } = qt(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[i] = n;
    return;
  }
  let a = t[t.length - 1], o = t.slice(0, t.length - 1), s = qt(e, o, Object);
  for (; s.obj === void 0 && o.length; )
    a = `${o[o.length - 1]}.${a}`, o = o.slice(0, o.length - 1), s = qt(e, o, Object), s != null && s.obj && typeof s.obj[`${s.k}.${a}`] < "u" && (s.obj = void 0);
  s.obj[`${s.k}.${a}`] = n;
}, Cc = (e, t, n, r) => {
  const {
    obj: i,
    k: a
  } = qt(e, t, Object);
  i[a] = i[a] || [], i[a].push(n);
}, On = (e, t) => {
  const {
    obj: n,
    k: r
  } = qt(e, t);
  if (n && Object.prototype.hasOwnProperty.call(n, r))
    return n[r];
}, zc = (e, t, n) => {
  const r = On(e, n);
  return r !== void 0 ? r : On(t, n);
}, Mo = (e, t, n) => {
  for (const r in t)
    r !== "__proto__" && r !== "constructor" && (r in e ? te(e[r]) || e[r] instanceof String || te(t[r]) || t[r] instanceof String ? n && (e[r] = t[r]) : Mo(e[r], t[r], n) : e[r] = t[r]);
  return e;
}, gt = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Ac = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Mc = (e) => te(e) ? e.replace(/[&<>"'\/]/g, (t) => Ac[t]) : e;
class Ec {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0)
      return n;
    const r = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, r), this.regExpQueue.push(t), r;
  }
}
const Oc = [" ", ",", "?", "!", ";"], Ic = new Ec(20), Nc = (e, t, n) => {
  t = t || "", n = n || "";
  const r = Oc.filter((o) => t.indexOf(o) < 0 && n.indexOf(o) < 0);
  if (r.length === 0) return !0;
  const i = Ic.getRegExp(`(${r.map((o) => o === "?" ? "\\?" : o).join("|")})`);
  let a = !i.test(e);
  if (!a) {
    const o = e.indexOf(n);
    o > 0 && !i.test(e.substring(0, o)) && (a = !0);
  }
  return a;
}, Mr = (e, t, n = ".") => {
  if (!e) return;
  if (e[t])
    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
  const r = t.split(n);
  let i = e;
  for (let a = 0; a < r.length; ) {
    if (!i || typeof i != "object")
      return;
    let o, s = "";
    for (let u = a; u < r.length; ++u)
      if (u !== a && (s += n), s += r[u], o = i[s], o !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof o) > -1 && u < r.length - 1)
          continue;
        a += u - a + 1;
        break;
      }
    i = o;
  }
  return i;
}, Xt = (e) => e == null ? void 0 : e.replace("_", "-"), Tc = {
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
    var n, r;
    (r = (n = console == null ? void 0 : console[e]) == null ? void 0 : n.apply) == null || r.call(n, console, t);
  }
};
class In {
  constructor(t, n = {}) {
    this.init(t, n);
  }
  init(t, n = {}) {
    this.prefix = n.prefix || "i18next:", this.logger = t || Tc, this.options = n, this.debug = n.debug;
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
  forward(t, n, r, i) {
    return i && !this.debug ? null : (te(t[0]) && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new In(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new In(this.logger, t);
  }
}
var Ee = new In();
class Wn {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return t.split(" ").forEach((r) => {
      this.observers[r] || (this.observers[r] = /* @__PURE__ */ new Map());
      const i = this.observers[r].get(n) || 0;
      this.observers[r].set(n, i + 1);
    }), this;
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t, ...n) {
    this.observers[t] && Array.from(this.observers[t].entries()).forEach(([i, a]) => {
      for (let o = 0; o < a; o++)
        i(...n);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(([i, a]) => {
      for (let o = 0; o < a; o++)
        i.apply(i, [t, ...n]);
    });
  }
}
class oa extends Wn {
  constructor(t, n = {
    ns: ["translation"],
    defaultNS: "translation"
  }) {
    super(), this.data = t || {}, this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r, i = {}) {
    var c, p;
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, o = i.ignoreJSONStructure !== void 0 ? i.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    t.indexOf(".") > -1 ? s = t.split(".") : (s = [t, n], r && (Array.isArray(r) ? s.push(...r) : te(r) && a ? s.push(...r.split(a)) : s.push(r)));
    const u = On(this.data, s);
    return !u && !n && !r && t.indexOf(".") > -1 && (t = s[0], n = s[1], r = s.slice(2).join(".")), u || !o || !te(r) ? u : Mr((p = (c = this.data) == null ? void 0 : c[t]) == null ? void 0 : p[n], r, a);
  }
  addResource(t, n, r, i, a = {
    silent: !1
  }) {
    const o = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator;
    let s = [t, n];
    r && (s = s.concat(o ? r.split(o) : r)), t.indexOf(".") > -1 && (s = t.split("."), i = n, n = s[1]), this.addNamespaces(n), aa(this.data, s, i), a.silent || this.emit("added", t, n, r, i);
  }
  addResources(t, n, r, i = {
    silent: !1
  }) {
    for (const a in r)
      (te(r[a]) || Array.isArray(r[a])) && this.addResource(t, n, a, r[a], {
        silent: !0
      });
    i.silent || this.emit("added", t, n, r);
  }
  addResourceBundle(t, n, r, i, a, o = {
    silent: !1,
    skipCopy: !1
  }) {
    let s = [t, n];
    t.indexOf(".") > -1 && (s = t.split("."), i = r, r = n, n = s[1]), this.addNamespaces(n);
    let u = On(this.data, s) || {};
    o.skipCopy || (r = JSON.parse(JSON.stringify(r))), i ? Mo(u, r, a) : u = {
      ...u,
      ...r
    }, aa(this.data, s, u), o.silent || this.emit("added", t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit("removed", t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return n || (n = this.options.defaultNS), this.getResource(t, n);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!(n && Object.keys(n) || []).find((i) => n[i] && Object.keys(n[i]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Eo = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, i) {
    return e.forEach((a) => {
      var o;
      t = ((o = this.processors[a]) == null ? void 0 : o.process(t, n, r, i)) ?? t;
    }), t;
  }
};
const Oo = Symbol("i18next/PATH_KEY");
function $c() {
  const e = [], t = /* @__PURE__ */ Object.create(null);
  let n;
  return t.get = (r, i) => {
    var a;
    return (a = n == null ? void 0 : n.revoke) == null || a.call(n), i === Oo ? e : (e.push(i), n = Proxy.revocable(r, t), n.proxy);
  }, Proxy.revocable(/* @__PURE__ */ Object.create(null), t).proxy;
}
function Er(e, t) {
  const {
    [Oo]: n
  } = e($c());
  return n.join((t == null ? void 0 : t.keySeparator) ?? ".");
}
const sa = {}, la = (e) => !te(e) && typeof e != "boolean" && typeof e != "number";
class Nn extends Wn {
  constructor(t, n = {}) {
    super(), Sc(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = n, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Ee.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t, n = {
    interpolation: {}
  }) {
    const r = {
      ...n
    };
    if (t == null) return !1;
    const i = this.resolve(t, r);
    return (i == null ? void 0 : i.res) !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ":");
    const i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let a = n.ns || this.options.defaultNS || [];
    const o = r && t.indexOf(r) > -1, s = !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Nc(t, r, i);
    if (o && !s) {
      const u = t.match(this.interpolator.nestingRegexp);
      if (u && u.length > 0)
        return {
          key: t,
          namespaces: te(a) ? [a] : a
        };
      const c = t.split(r);
      (r !== i || r === i && this.options.ns.indexOf(c[0]) > -1) && (a = c.shift()), t = c.join(i);
    }
    return {
      key: t,
      namespaces: te(a) ? [a] : a
    };
  }
  translate(t, n, r) {
    let i = typeof n == "object" ? {
      ...n
    } : n;
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = {
      ...i
    }), i || (i = {}), t == null) return "";
    typeof t == "function" && (t = Er(t, {
      ...this.options,
      ...i
    })), Array.isArray(t) || (t = [String(t)]);
    const a = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: s,
      namespaces: u
    } = this.extractFromKey(t[t.length - 1], i), c = u[u.length - 1];
    let p = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    p === void 0 && (p = ":");
    const d = i.lng || this.language, g = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((d == null ? void 0 : d.toLowerCase()) === "cimode")
      return g ? a ? {
        res: `${c}${p}${s}`,
        usedKey: s,
        exactUsedKey: s,
        usedLng: d,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(i)
      } : `${c}${p}${s}` : a ? {
        res: s,
        usedKey: s,
        exactUsedKey: s,
        usedLng: d,
        usedNS: c,
        usedParams: this.getUsedParamsDetails(i)
      } : s;
    const f = this.resolve(t, i);
    let h = f == null ? void 0 : f.res;
    const m = (f == null ? void 0 : f.usedKey) || s, x = (f == null ? void 0 : f.exactUsedKey) || s, P = ["[object Number]", "[object Function]", "[object RegExp]"], y = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, S = !this.i18nFormat || this.i18nFormat.handleAsObject, _ = i.count !== void 0 && !te(i.count), j = Nn.hasDefaultValue(i), I = _ ? this.pluralResolver.getSuffix(d, i.count, i) : "", z = i.ordinal && _ ? this.pluralResolver.getSuffix(d, i.count, {
      ordinal: !1
    }) : "", C = _ && !i.ordinal && i.count === 0, T = C && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${I}`] || i[`defaultValue${z}`] || i.defaultValue;
    let E = h;
    S && !h && j && (E = T);
    const K = la(E), Z = Object.prototype.toString.apply(E);
    if (S && E && K && P.indexOf(Z) < 0 && !(te(y) && Array.isArray(E))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const $ = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(m, E, {
          ...i,
          ns: u
        }) : `key '${s} (${this.language})' returned an object instead of string.`;
        return a ? (f.res = $, f.usedParams = this.getUsedParamsDetails(i), f) : $;
      }
      if (o) {
        const $ = Array.isArray(E), G = $ ? [] : {}, D = $ ? x : m;
        for (const J in E)
          if (Object.prototype.hasOwnProperty.call(E, J)) {
            const Y = `${D}${o}${J}`;
            j && !h ? G[J] = this.translate(Y, {
              ...i,
              defaultValue: la(T) ? T[J] : void 0,
              joinArrays: !1,
              ns: u
            }) : G[J] = this.translate(Y, {
              ...i,
              joinArrays: !1,
              ns: u
            }), G[J] === Y && (G[J] = E[J]);
          }
        h = G;
      }
    } else if (S && te(y) && Array.isArray(h))
      h = h.join(y), h && (h = this.extendTranslation(h, t, i, r));
    else {
      let $ = !1, G = !1;
      !this.isValidLookup(h) && j && ($ = !0, h = T), this.isValidLookup(h) || (G = !0, h = s);
      const J = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && G ? void 0 : h, Y = j && T !== h && this.options.updateMissing;
      if (G || $ || Y) {
        if (this.logger.log(Y ? "updateKey" : "missingKey", d, c, s, Y ? T : h), o) {
          const A = this.resolve(s, {
            ...i,
            keySeparator: !1
          });
          A && A.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let W = [];
        const w = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && w && w[0])
          for (let A = 0; A < w.length; A++)
            W.push(w[A]);
        else this.options.saveMissingTo === "all" ? W = this.languageUtils.toResolveHierarchy(i.lng || this.language) : W.push(i.lng || this.language);
        const v = (A, k, M) => {
          var L;
          const N = j && M !== h ? M : J;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(A, c, k, N, Y, i) : (L = this.backendConnector) != null && L.saveMissing && this.backendConnector.saveMissing(A, c, k, N, Y, i), this.emit("missingKey", A, c, k, h);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && _ ? W.forEach((A) => {
          const k = this.pluralResolver.getSuffixes(A, i);
          C && i[`defaultValue${this.options.pluralSeparator}zero`] && k.indexOf(`${this.options.pluralSeparator}zero`) < 0 && k.push(`${this.options.pluralSeparator}zero`), k.forEach((M) => {
            v([A], s + M, i[`defaultValue${M}`] || T);
          });
        }) : v(W, s, T));
      }
      h = this.extendTranslation(h, t, i, f, r), G && h === s && this.options.appendNamespaceToMissingKey && (h = `${c}${p}${s}`), (G || $) && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${c}${p}${s}` : s, $ ? h : void 0, i));
    }
    return a ? (f.res = h, f.usedParams = this.getUsedParamsDetails(i), f) : h;
  }
  extendTranslation(t, n, r, i, a) {
    var u, c;
    if ((u = this.i18nFormat) != null && u.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...r
      }, r.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
        resolved: i
      });
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({
        ...r,
        interpolation: {
          ...this.options.interpolation,
          ...r.interpolation
        }
      });
      const p = te(t) && (((c = r == null ? void 0 : r.interpolation) == null ? void 0 : c.skipOnVariables) !== void 0 ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let d;
      if (p) {
        const f = t.match(this.interpolator.nestingRegexp);
        d = f && f.length;
      }
      let g = r.replace && !te(r.replace) ? r.replace : r;
      if (this.options.interpolation.defaultVariables && (g = {
        ...this.options.interpolation.defaultVariables,
        ...g
      }), t = this.interpolator.interpolate(t, g, r.lng || this.language || i.usedLng, r), p) {
        const f = t.match(this.interpolator.nestingRegexp), h = f && f.length;
        d < h && (r.nest = !1);
      }
      !r.lng && i && i.res && (r.lng = this.language || i.usedLng), r.nest !== !1 && (t = this.interpolator.nest(t, (...f) => (a == null ? void 0 : a[0]) === f[0] && !r.context ? (this.logger.warn(`It seems you are nesting recursively key: ${f[0]} in key: ${n[0]}`), null) : this.translate(...f, n), r)), r.interpolation && this.interpolator.reset();
    }
    const o = r.postProcess || this.options.postProcess, s = te(o) ? [o] : o;
    return t != null && (s != null && s.length) && r.applyPostProcessor !== !1 && (t = Eo.handle(s, t, n, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...i,
        usedParams: this.getUsedParamsDetails(r)
      },
      ...r
    } : r, this)), t;
  }
  resolve(t, n = {}) {
    let r, i, a, o, s;
    return te(t) && (t = [t]), t.forEach((u) => {
      if (this.isValidLookup(r)) return;
      const c = this.extractFromKey(u, n), p = c.key;
      i = p;
      let d = c.namespaces;
      this.options.fallbackNS && (d = d.concat(this.options.fallbackNS));
      const g = n.count !== void 0 && !te(n.count), f = g && !n.ordinal && n.count === 0, h = n.context !== void 0 && (te(n.context) || typeof n.context == "number") && n.context !== "", m = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
      d.forEach((x) => {
        var P, y;
        this.isValidLookup(r) || (s = x, !sa[`${m[0]}-${x}`] && ((P = this.utils) != null && P.hasLoadedNamespace) && !((y = this.utils) != null && y.hasLoadedNamespace(s)) && (sa[`${m[0]}-${x}`] = !0, this.logger.warn(`key "${i}" for languages "${m.join(", ")}" won't get resolved as namespace "${s}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach((S) => {
          var I;
          if (this.isValidLookup(r)) return;
          o = S;
          const _ = [p];
          if ((I = this.i18nFormat) != null && I.addLookupKeys)
            this.i18nFormat.addLookupKeys(_, p, S, x, n);
          else {
            let z;
            g && (z = this.pluralResolver.getSuffix(S, n.count, n));
            const C = `${this.options.pluralSeparator}zero`, T = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (n.ordinal && z.indexOf(T) === 0 && _.push(p + z.replace(T, this.options.pluralSeparator)), _.push(p + z), f && _.push(p + C)), h) {
              const E = `${p}${this.options.contextSeparator || "_"}${n.context}`;
              _.push(E), g && (n.ordinal && z.indexOf(T) === 0 && _.push(E + z.replace(T, this.options.pluralSeparator)), _.push(E + z), f && _.push(E + C));
            }
          }
          let j;
          for (; j = _.pop(); )
            this.isValidLookup(r) || (a = j, r = this.getResource(S, x, j, n));
        }));
      });
    }), {
      res: r,
      usedKey: i,
      exactUsedKey: a,
      usedLng: o,
      usedNS: s
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, n, r, i = {}) {
    var a;
    return (a = this.i18nFormat) != null && a.getResource ? this.i18nFormat.getResource(t, n, r, i) : this.resourceStore.getResource(t, n, r, i);
  }
  getUsedParamsDetails(t = {}) {
    const n = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], r = t.replace && !te(t.replace);
    let i = r ? t.replace : t;
    if (r && typeof t.count < "u" && (i.count = t.count), this.options.interpolation.defaultVariables && (i = {
      ...this.options.interpolation.defaultVariables,
      ...i
    }), !r) {
      i = {
        ...i
      };
      for (const a of n)
        delete i[a];
    }
    return i;
  }
  static hasDefaultValue(t) {
    const n = "defaultValue";
    for (const r in t)
      if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0)
        return !0;
    return !1;
  }
}
class ca {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Ee.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = Xt(t), !t || t.indexOf("-") < 0) return null;
    const n = t.split("-");
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(n.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = Xt(t), !t || t.indexOf("-") < 0) return t;
    const n = t.split("-");
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (te(t) && t.indexOf("-") > -1) {
      let n;
      try {
        n = Intl.getCanonicalLocales(t)[0];
      } catch {
      }
      return n && this.options.lowerCaseLng && (n = n.toLowerCase()), n || (this.options.lowerCaseLng ? t.toLowerCase() : t);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return t.forEach((r) => {
      if (n) return;
      const i = this.formatLanguageCode(r);
      (!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i);
    }), !n && this.options.supportedLngs && t.forEach((r) => {
      if (n) return;
      const i = this.getScriptPartFromCode(r);
      if (this.isSupportedCode(i)) return n = i;
      const a = this.getLanguagePartFromCode(r);
      if (this.isSupportedCode(a)) return n = a;
      n = this.options.supportedLngs.find((o) => {
        if (o === a) return o;
        if (!(o.indexOf("-") < 0 && a.indexOf("-") < 0) && (o.indexOf("-") > 0 && a.indexOf("-") < 0 && o.substring(0, o.indexOf("-")) === a || o.indexOf(a) === 0 && a.length > 1))
          return o;
      });
    }), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n;
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(n)), te(t) && (t = [t]), Array.isArray(t)) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return r || (r = t[this.getScriptPartFromCode(n)]), r || (r = t[this.formatLanguageCode(n)]), r || (r = t[this.getLanguagePartFromCode(n)]), r || (r = t.default), r || [];
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes((n === !1 ? [] : n) || this.options.fallbackLng || [], t), i = [], a = (o) => {
      o && (this.isSupportedCode(o) ? i.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
    };
    return te(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && a(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && a(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && a(this.getLanguagePartFromCode(t))) : te(t) && a(this.formatLanguageCode(t)), r.forEach((o) => {
      i.indexOf(o) < 0 && a(this.formatLanguageCode(o));
    }), i;
  }
}
const ua = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, da = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Lc {
  constructor(t, n = {}) {
    this.languageUtils = t, this.options = n, this.logger = Ee.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t, n = {}) {
    const r = Xt(t === "dev" ? "en" : t), i = n.ordinal ? "ordinal" : "cardinal", a = JSON.stringify({
      cleanedCode: r,
      type: i
    });
    if (a in this.pluralRulesCache)
      return this.pluralRulesCache[a];
    let o;
    try {
      o = new Intl.PluralRules(r, {
        type: i
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), da;
      if (!t.match(/-|_/)) return da;
      const u = this.languageUtils.getLanguagePartFromCode(t);
      o = this.getRule(u, n);
    }
    return this.pluralRulesCache[a] = o, o;
  }
  needsPlural(t, n = {}) {
    let r = this.getRule(t, n);
    return r || (r = this.getRule("dev", n)), (r == null ? void 0 : r.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(t, n, r = {}) {
    return this.getSuffixes(t, r).map((i) => `${n}${i}`);
  }
  getSuffixes(t, n = {}) {
    let r = this.getRule(t, n);
    return r || (r = this.getRule("dev", n)), r ? r.resolvedOptions().pluralCategories.sort((i, a) => ua[i] - ua[a]).map((i) => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i}`) : [];
  }
  getSuffix(t, n, r = {}) {
    const i = this.getRule(t, r);
    return i ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(n)}` : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix("dev", n, r));
  }
}
const pa = (e, t, n, r = ".", i = !0) => {
  let a = zc(e, t, n);
  return !a && i && te(n) && (a = Mr(e, n, r), a === void 0 && (a = Mr(t, n, r))), a;
}, rr = (e) => e.replace(/\$/g, "$$$$");
class Rc {
  constructor(t = {}) {
    var n;
    this.logger = Ee.create("interpolator"), this.options = t, this.format = ((n = t == null ? void 0 : t.interpolation) == null ? void 0 : n.format) || ((r) => r), this.init(t);
  }
  init(t = {}) {
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: a,
      prefixEscaped: o,
      suffix: s,
      suffixEscaped: u,
      formatSeparator: c,
      unescapeSuffix: p,
      unescapePrefix: d,
      nestingPrefix: g,
      nestingPrefixEscaped: f,
      nestingSuffix: h,
      nestingSuffixEscaped: m,
      nestingOptionsSeparator: x,
      maxReplaces: P,
      alwaysFormat: y
    } = t.interpolation;
    this.escape = n !== void 0 ? n : Mc, this.escapeValue = r !== void 0 ? r : !0, this.useRawValueToEscape = i !== void 0 ? i : !1, this.prefix = a ? gt(a) : o || "{{", this.suffix = s ? gt(s) : u || "}}", this.formatSeparator = c || ",", this.unescapePrefix = p ? "" : d || "-", this.unescapeSuffix = this.unescapePrefix ? "" : p || "", this.nestingPrefix = g ? gt(g) : f || gt("$t("), this.nestingSuffix = h ? gt(h) : m || gt(")"), this.nestingOptionsSeparator = x || ",", this.maxReplaces = P || 1e3, this.alwaysFormat = y !== void 0 ? y : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => (n == null ? void 0 : n.source) === r ? (n.lastIndex = 0, n) : new RegExp(r, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`);
  }
  interpolate(t, n, r, i) {
    var f;
    let a, o, s;
    const u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, c = (h) => {
      if (h.indexOf(this.formatSeparator) < 0) {
        const y = pa(n, u, h, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(y, void 0, r, {
          ...i,
          ...n,
          interpolationkey: h
        }) : y;
      }
      const m = h.split(this.formatSeparator), x = m.shift().trim(), P = m.join(this.formatSeparator).trim();
      return this.format(pa(n, u, x, this.options.keySeparator, this.options.ignoreJSONStructure), P, r, {
        ...i,
        ...n,
        interpolationkey: x
      });
    };
    this.resetRegExp();
    const p = (i == null ? void 0 : i.missingInterpolationHandler) || this.options.missingInterpolationHandler, d = ((f = i == null ? void 0 : i.interpolation) == null ? void 0 : f.skipOnVariables) !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (h) => rr(h)
    }, {
      regex: this.regexp,
      safeValue: (h) => this.escapeValue ? rr(this.escape(h)) : rr(h)
    }].forEach((h) => {
      for (s = 0; a = h.regex.exec(t); ) {
        const m = a[1].trim();
        if (o = c(m), o === void 0)
          if (typeof p == "function") {
            const P = p(t, a, i);
            o = te(P) ? P : "";
          } else if (i && Object.prototype.hasOwnProperty.call(i, m))
            o = "";
          else if (d) {
            o = a[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${m} for interpolating ${t}`), o = "";
        else !te(o) && !this.useRawValueToEscape && (o = na(o));
        const x = h.safeValue(o);
        if (t = t.replace(a[0], x), d ? (h.regex.lastIndex += o.length, h.regex.lastIndex -= a[0].length) : h.regex.lastIndex = 0, s++, s >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, n, r = {}) {
    let i, a, o;
    const s = (u, c) => {
      const p = this.nestingOptionsSeparator;
      if (u.indexOf(p) < 0) return u;
      const d = u.split(new RegExp(`${p}[ ]*{`));
      let g = `{${d[1]}`;
      u = d[0], g = this.interpolate(g, o);
      const f = g.match(/'/g), h = g.match(/"/g);
      (((f == null ? void 0 : f.length) ?? 0) % 2 === 0 && !h || h.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
      try {
        o = JSON.parse(g), c && (o = {
          ...c,
          ...o
        });
      } catch (m) {
        return this.logger.warn(`failed parsing options string in nesting for key ${u}`, m), `${u}${p}${g}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, u;
    };
    for (; i = this.nestingRegexp.exec(t); ) {
      let u = [];
      o = {
        ...r
      }, o = o.replace && !te(o.replace) ? o.replace : o, o.applyPostProcessor = !1, delete o.defaultValue;
      const c = /{.*}/.test(i[1]) ? i[1].lastIndexOf("}") + 1 : i[1].indexOf(this.formatSeparator);
      if (c !== -1 && (u = i[1].slice(c).split(this.formatSeparator).map((p) => p.trim()).filter(Boolean), i[1] = i[1].slice(0, c)), a = n(s.call(this, i[1].trim(), o), o), a && i[0] === t && !te(a)) return a;
      te(a) || (a = na(a)), a || (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`), a = ""), u.length && (a = u.reduce((p, d) => this.format(p, d, r.lng, {
        ...r,
        interpolationkey: i[1].trim()
      }), a.trim())), t = t.replace(i[0], a), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const Dc = (e) => {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf("(") > -1) {
    const r = e.split("(");
    t = r[0].toLowerCase().trim();
    const i = r[1].substring(0, r[1].length - 1);
    t === "currency" && i.indexOf(":") < 0 ? n.currency || (n.currency = i.trim()) : t === "relativetime" && i.indexOf(":") < 0 ? n.range || (n.range = i.trim()) : i.split(";").forEach((o) => {
      if (o) {
        const [s, ...u] = o.split(":"), c = u.join(":").trim().replace(/^'+|'+$/g, ""), p = s.trim();
        n[p] || (n[p] = c), c === "false" && (n[p] = !1), c === "true" && (n[p] = !0), isNaN(c) || (n[p] = parseInt(c, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: n
  };
}, fa = (e) => {
  const t = {};
  return (n, r, i) => {
    let a = i;
    i && i.interpolationkey && i.formatParams && i.formatParams[i.interpolationkey] && i[i.interpolationkey] && (a = {
      ...a,
      [i.interpolationkey]: void 0
    });
    const o = r + JSON.stringify(a);
    let s = t[o];
    return s || (s = e(Xt(r), i), t[o] = s), s(n);
  };
}, Bc = (e) => (t, n, r) => e(Xt(n), r)(t);
class Fc {
  constructor(t = {}) {
    this.logger = Ee.create("formatter"), this.options = t, this.init(t);
  }
  init(t, n = {
    interpolation: {}
  }) {
    this.formatSeparator = n.interpolation.formatSeparator || ",";
    const r = n.cacheInBuiltFormats ? fa : Bc;
    this.formats = {
      number: r((i, a) => {
        const o = new Intl.NumberFormat(i, {
          ...a
        });
        return (s) => o.format(s);
      }),
      currency: r((i, a) => {
        const o = new Intl.NumberFormat(i, {
          ...a,
          style: "currency"
        });
        return (s) => o.format(s);
      }),
      datetime: r((i, a) => {
        const o = new Intl.DateTimeFormat(i, {
          ...a
        });
        return (s) => o.format(s);
      }),
      relativetime: r((i, a) => {
        const o = new Intl.RelativeTimeFormat(i, {
          ...a
        });
        return (s) => o.format(s, a.range || "day");
      }),
      list: r((i, a) => {
        const o = new Intl.ListFormat(i, {
          ...a
        });
        return (s) => o.format(s);
      })
    };
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = fa(n);
  }
  format(t, n, r, i = {}) {
    const a = n.split(this.formatSeparator);
    if (a.length > 1 && a[0].indexOf("(") > 1 && a[0].indexOf(")") < 0 && a.find((s) => s.indexOf(")") > -1)) {
      const s = a.findIndex((u) => u.indexOf(")") > -1);
      a[0] = [a[0], ...a.splice(1, s)].join(this.formatSeparator);
    }
    return a.reduce((s, u) => {
      var d;
      const {
        formatName: c,
        formatOptions: p
      } = Dc(u);
      if (this.formats[c]) {
        let g = s;
        try {
          const f = ((d = i == null ? void 0 : i.formatParams) == null ? void 0 : d[i.interpolationkey]) || {}, h = f.locale || f.lng || i.locale || i.lng || r;
          g = this.formats[c](s, h, {
            ...p,
            ...i,
            ...f
          });
        } catch (f) {
          this.logger.warn(f);
        }
        return g;
      } else
        this.logger.warn(`there was no format function for ${c}`);
      return s;
    }, t);
  }
}
const Gc = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class Wc extends Wn {
  constructor(t, n, r, i = {}) {
    var a, o;
    super(), this.backend = t, this.store = n, this.services = r, this.languageUtils = r.languageUtils, this.options = i, this.logger = Ee.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], (o = (a = this.backend) == null ? void 0 : a.init) == null || o.call(a, r, i.backend, i);
  }
  queueLoad(t, n, r, i) {
    const a = {}, o = {}, s = {}, u = {};
    return t.forEach((c) => {
      let p = !0;
      n.forEach((d) => {
        const g = `${c}|${d}`;
        !r.reload && this.store.hasResourceBundle(c, d) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? o[g] === void 0 && (o[g] = !0) : (this.state[g] = 1, p = !1, o[g] === void 0 && (o[g] = !0), a[g] === void 0 && (a[g] = !0), u[d] === void 0 && (u[d] = !0)));
      }), p || (s[c] = !0);
    }), (Object.keys(a).length || Object.keys(o).length) && this.queue.push({
      pending: o,
      pendingCount: Object.keys(o).length,
      loaded: {},
      errors: [],
      callback: i
    }), {
      toLoad: Object.keys(a),
      pending: Object.keys(o),
      toLoadLanguages: Object.keys(s),
      toLoadNamespaces: Object.keys(u)
    };
  }
  loaded(t, n, r) {
    const i = t.split("|"), a = i[0], o = i[1];
    n && this.emit("failedLoading", a, o, n), !n && r && this.store.addResourceBundle(a, o, r, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = n ? -1 : 2, n && r && (this.state[t] = 0);
    const s = {};
    this.queue.forEach((u) => {
      Cc(u.loaded, [a], o), Gc(u, t), n && u.errors.push(n), u.pendingCount === 0 && !u.done && (Object.keys(u.loaded).forEach((c) => {
        s[c] || (s[c] = {});
        const p = u.loaded[c];
        p.length && p.forEach((d) => {
          s[c][d] === void 0 && (s[c][d] = !0);
        });
      }), u.done = !0, u.errors.length ? u.callback(u.errors) : u.callback());
    }), this.emit("loaded", s), this.queue = this.queue.filter((u) => !u.done);
  }
  read(t, n, r, i = 0, a = this.retryTimeout, o) {
    if (!t.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: a,
        callback: o
      });
      return;
    }
    this.readingCalls++;
    const s = (c, p) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const d = this.waitingReads.shift();
        this.read(d.lng, d.ns, d.fcName, d.tried, d.wait, d.callback);
      }
      if (c && p && i < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, n, r, i + 1, a * 2, o);
        }, a);
        return;
      }
      o(c, p);
    }, u = this.backend[r].bind(this.backend);
    if (u.length === 2) {
      try {
        const c = u(t, n);
        c && typeof c.then == "function" ? c.then((p) => s(null, p)).catch(s) : s(null, c);
      } catch (c) {
        s(c);
      }
      return;
    }
    return u(t, n, s);
  }
  prepareLoading(t, n, r = {}, i) {
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
    te(t) && (t = this.languageUtils.toResolveHierarchy(t)), te(n) && (n = [n]);
    const a = this.queueLoad(t, n, r, i);
    if (!a.toLoad.length)
      return a.pending.length || i(), null;
    a.toLoad.forEach((o) => {
      this.loadOne(o);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, {
      reload: !0
    }, r);
  }
  loadOne(t, n = "") {
    const r = t.split("|"), i = r[0], a = r[1];
    this.read(i, a, "read", void 0, void 0, (o, s) => {
      o && this.logger.warn(`${n}loading namespace ${a} for language ${i} failed`, o), !o && s && this.logger.log(`${n}loaded namespace ${a} for language ${i}`, s), this.loaded(t, o, s);
    });
  }
  saveMissing(t, n, r, i, a, o = {}, s = () => {
  }) {
    var u, c, p, d, g;
    if ((c = (u = this.services) == null ? void 0 : u.utils) != null && c.hasLoadedNamespace && !((d = (p = this.services) == null ? void 0 : p.utils) != null && d.hasLoadedNamespace(n))) {
      this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(r == null || r === "")) {
      if ((g = this.backend) != null && g.create) {
        const f = {
          ...o,
          isUpdate: a
        }, h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let m;
            h.length === 5 ? m = h(t, n, r, i, f) : m = h(t, n, r, i), m && typeof m.then == "function" ? m.then((x) => s(null, x)).catch(s) : s(null, m);
          } catch (m) {
            s(m);
          }
        else
          h(t, n, r, i, s, f);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i);
    }
  }
}
const ha = () => ({
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
    if (typeof e[1] == "object" && (t = e[1]), te(e[1]) && (t.defaultValue = e[1]), te(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const n = e[3] || e[2];
      Object.keys(n).forEach((r) => {
        t[r] = n[r];
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
}), ga = (e) => {
  var t, n;
  return te(e.ns) && (e.ns = [e.ns]), te(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), te(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), ((n = (t = e.supportedLngs) == null ? void 0 : t.indexOf) == null ? void 0 : n.call(t, "cimode")) < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e;
}, dn = () => {
}, Hc = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
    typeof e[n] == "function" && (e[n] = e[n].bind(e));
  });
};
class Qt extends Wn {
  constructor(t = {}, n) {
    if (super(), this.options = ga(t), this.services = {}, this.logger = Ee, this.modules = {
      external: []
    }, Hc(this), n && !this.isInitialized && !t.isClone) {
      if (!this.options.initAsync)
        return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init(t = {}, n) {
    this.isInitializing = !0, typeof t == "function" && (n = t, t = {}), t.defaultNS == null && t.ns && (te(t.ns) ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
    const r = ha();
    this.options = {
      ...r,
      ...this.options,
      ...ga(t)
    }, this.options.interpolation = {
      ...r.interpolation,
      ...this.options.interpolation
    }, t.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = t.keySeparator), t.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = t.nsSeparator);
    const i = (c) => c ? typeof c == "function" ? new c() : c : null;
    if (!this.options.isClone) {
      this.modules.logger ? Ee.init(i(this.modules.logger), this.options) : Ee.init(null, this.options);
      let c;
      this.modules.formatter ? c = this.modules.formatter : c = Fc;
      const p = new ca(this.options);
      this.store = new oa(this.options.resources, this.options);
      const d = this.services;
      d.logger = Ee, d.resourceStore = this.store, d.languageUtils = p, d.pluralResolver = new Lc(p, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format && this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"), c && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (d.formatter = i(c), d.formatter.init && d.formatter.init(d, this.options), this.options.interpolation.format = d.formatter.format.bind(d.formatter)), d.interpolator = new Rc(this.options), d.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, d.backendConnector = new Wc(i(this.modules.backend), d.resourceStore, d, this.options), d.backendConnector.on("*", (f, ...h) => {
        this.emit(f, ...h);
      }), this.modules.languageDetector && (d.languageDetector = i(this.modules.languageDetector), d.languageDetector.init && d.languageDetector.init(d, this.options.detection, this.options)), this.modules.i18nFormat && (d.i18nFormat = i(this.modules.i18nFormat), d.i18nFormat.init && d.i18nFormat.init(this)), this.translator = new Nn(this.services, this.options), this.translator.on("*", (f, ...h) => {
        this.emit(f, ...h);
      }), this.modules.external.forEach((f) => {
        f.init && f.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, n || (n = dn), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      c.length > 0 && c[0] !== "dev" && (this.options.lng = c[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((c) => {
      this[c] = (...p) => this.store[c](...p);
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((c) => {
      this[c] = (...p) => (this.store[c](...p), this);
    });
    const s = Ht(), u = () => {
      const c = (p, d) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), s.resolve(d), n(p, d);
      };
      if (this.languages && !this.isInitialized) return c(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, c);
    };
    return this.options.resources || !this.options.initAsync ? u() : setTimeout(u, 0), s;
  }
  loadResources(t, n = dn) {
    var a, o;
    let r = n;
    const i = te(t) ? t : this.language;
    if (typeof t == "function" && (r = t), !this.options.resources || this.options.partialBundledLanguages) {
      if ((i == null ? void 0 : i.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return r();
      const s = [], u = (c) => {
        if (!c || c === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(c).forEach((d) => {
          d !== "cimode" && s.indexOf(d) < 0 && s.push(d);
        });
      };
      i ? u(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((p) => u(p)), (o = (a = this.options.preload) == null ? void 0 : a.forEach) == null || o.call(a, (c) => u(c)), this.services.backendConnector.load(s, this.options.ns, (c) => {
        !c && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(c);
      });
    } else
      r(null);
  }
  reloadResources(t, n, r) {
    const i = Ht();
    return typeof t == "function" && (r = t, t = void 0), typeof n == "function" && (r = n, n = void 0), t || (t = this.languages), n || (n = this.options.ns), r || (r = dn), this.services.backendConnector.reload(t, n, (a) => {
      i.resolve(), r(a);
    }), i;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Eo.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1)) {
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(["cimode", "dev"].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
      !this.resolvedLanguage && this.languages.indexOf(t) < 0 && this.store.hasLanguageSomeTranslations(t) && (this.resolvedLanguage = t, this.languages.unshift(t));
    }
  }
  changeLanguage(t, n) {
    this.isLanguageChangingTo = t;
    const r = Ht();
    this.emit("languageChanging", t);
    const i = (s) => {
      this.language = s, this.languages = this.services.languageUtils.toResolveHierarchy(s), this.resolvedLanguage = void 0, this.setResolvedLanguage(s);
    }, a = (s, u) => {
      u ? this.isLanguageChangingTo === t && (i(u), this.translator.changeLanguage(u), this.isLanguageChangingTo = void 0, this.emit("languageChanged", u), this.logger.log("languageChanged", u)) : this.isLanguageChangingTo = void 0, r.resolve((...c) => this.t(...c)), n && n(s, (...c) => this.t(...c));
    }, o = (s) => {
      var p, d;
      !t && !s && this.services.languageDetector && (s = []);
      const u = te(s) ? s : s && s[0], c = this.store.hasLanguageSomeTranslations(u) ? u : this.services.languageUtils.getBestMatchFromCodes(te(s) ? [s] : s);
      c && (this.language || i(c), this.translator.language || this.translator.changeLanguage(c), (d = (p = this.services.languageDetector) == null ? void 0 : p.cacheUserLanguage) == null || d.call(p, c)), this.loadResources(c, (g) => {
        a(g, c);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? o(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(o) : this.services.languageDetector.detect(o) : o(t), r;
  }
  getFixedT(t, n, r) {
    const i = (a, o, ...s) => {
      let u;
      typeof o != "object" ? u = this.options.overloadTranslationOptionHandler([a, o].concat(s)) : u = {
        ...o
      }, u.lng = u.lng || i.lng, u.lngs = u.lngs || i.lngs, u.ns = u.ns || i.ns, u.keyPrefix !== "" && (u.keyPrefix = u.keyPrefix || r || i.keyPrefix);
      const c = this.options.keySeparator || ".";
      let p;
      return u.keyPrefix && Array.isArray(a) ? p = a.map((d) => (typeof d == "function" && (d = Er(d, {
        ...this.options,
        ...o
      })), `${u.keyPrefix}${c}${d}`)) : (typeof a == "function" && (a = Er(a, {
        ...this.options,
        ...o
      })), p = u.keyPrefix ? `${u.keyPrefix}${c}${a}` : a), this.t(p, u);
    };
    return te(t) ? i.lng = t : i.lngs = t, i.ns = n, i.keyPrefix = r, i;
  }
  t(...t) {
    var n;
    return (n = this.translator) == null ? void 0 : n.translate(...t);
  }
  exists(...t) {
    var n;
    return (n = this.translator) == null ? void 0 : n.exists(...t);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t, n = {}) {
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0], i = this.options ? this.options.fallbackLng : !1, a = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === "cimode") return !0;
    const o = (s, u) => {
      const c = this.services.backendConnector.state[`${s}|${u}`];
      return c === -1 || c === 0 || c === 2;
    };
    if (n.precheck) {
      const s = n.precheck(this, o);
      if (s !== void 0) return s;
    }
    return !!(this.hasResourceBundle(r, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(r, t) && (!i || o(a, t)));
  }
  loadNamespaces(t, n) {
    const r = Ht();
    return this.options.ns ? (te(t) && (t = [t]), t.forEach((i) => {
      this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
    }), this.loadResources((i) => {
      r.resolve(), n && n(i);
    }), r) : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Ht();
    te(t) && (t = [t]);
    const i = this.options.preload || [], a = t.filter((o) => i.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return a.length ? (this.options.preload = i.concat(a), this.loadResources((o) => {
      r.resolve(), n && n(o);
    }), r) : (n && n(), Promise.resolve());
  }
  dir(t) {
    var i, a;
    if (t || (t = this.resolvedLanguage || (((i = this.languages) == null ? void 0 : i.length) > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    try {
      const o = new Intl.Locale(t);
      if (o && o.getTextInfo) {
        const s = o.getTextInfo();
        if (s && s.direction) return s.direction;
      }
    } catch {
    }
    const n = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], r = ((a = this.services) == null ? void 0 : a.languageUtils) || new ca(ha());
    return t.toLowerCase().indexOf("-latn") > 1 ? "ltr" : n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance(t = {}, n) {
    return new Qt(t, n);
  }
  cloneInstance(t = {}, n = dn) {
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const i = {
      ...this.options,
      ...t,
      isClone: !0
    }, a = new Qt(i);
    if ((t.debug !== void 0 || t.prefix !== void 0) && (a.logger = a.logger.clone(t)), ["store", "services", "language"].forEach((s) => {
      a[s] = this[s];
    }), a.services = {
      ...this.services
    }, a.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, r) {
      const s = Object.keys(this.store.data).reduce((u, c) => (u[c] = {
        ...this.store.data[c]
      }, u[c] = Object.keys(u[c]).reduce((p, d) => (p[d] = {
        ...u[c][d]
      }, p), u[c]), u), {});
      a.store = new oa(s, i), a.services.resourceStore = a.store;
    }
    return a.translator = new Nn(a.services, i), a.translator.on("*", (s, ...u) => {
      a.emit(s, ...u);
    }), a.init(i, n), a.translator.options = i, a.translator.backendConnector.services.utils = {
      hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
    }, a;
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
const me = Qt.createInstance();
me.createInstance = Qt.createInstance;
me.createInstance;
me.dir;
me.init;
me.loadResources;
me.reloadResources;
me.use;
me.changeLanguage;
me.getFixedT;
me.t;
me.exists;
me.setDefaultNamespace;
me.hasLoadedNamespace;
me.loadNamespaces;
me.loadLanguages;
var Vr = {
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
}, Vc = Vr.footer, Kc = Vr.nav;
const Uc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vr,
  footer: Vc,
  nav: Kc
}, Symbol.toStringTag, { value: "Module" }));
var Kr = {
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
}, qc = Kr.footer, Yc = Kr.nav;
const Zc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kr,
  footer: qc,
  nav: Yc
}, Symbol.toStringTag, { value: "Module" }));
var Ur = {
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
}, Jc = Ur.footer, Xc = Ur.nav;
const Qc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ur,
  footer: Jc,
  nav: Xc
}, Symbol.toStringTag, { value: "Module" }));
var qr = {
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
}, eu = qr.footer, tu = qr.nav;
const nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qr,
  footer: eu,
  nav: tu
}, Symbol.toStringTag, { value: "Module" }));
var Hn = {
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
}, ru = Hn.footer, iu = Hn.nav, au = Hn.search;
const ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hn,
  footer: ru,
  nav: iu,
  search: au
}, Symbol.toStringTag, { value: "Module" }));
var Yr = {
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
}, su = Yr.footer, lu = Yr.nav;
const cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yr,
  footer: su,
  nav: lu
}, Symbol.toStringTag, { value: "Module" }));
var Zr = {
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
}, uu = Zr.footer, du = Zr.nav;
const pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zr,
  footer: uu,
  nav: du
}, Symbol.toStringTag, { value: "Module" }));
var Jr = {
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
}, fu = Jr.footer, hu = Jr.nav;
const gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jr,
  footer: fu,
  nav: hu
}, Symbol.toStringTag, { value: "Module" }));
var Xr = {
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
}, mu = Xr.footer, vu = Xr.nav;
const yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xr,
  footer: mu,
  nav: vu
}, Symbol.toStringTag, { value: "Module" }));
var Qr = {
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
}, bu = Qr.footer, ku = Qr.nav;
const xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qr,
  footer: bu,
  nav: ku
}, Symbol.toStringTag, { value: "Module" }));
var ei = {
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
}, _u = ei.footer, wu = ei.nav;
const ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ei,
  footer: _u,
  nav: wu
}, Symbol.toStringTag, { value: "Module" }));
var ti = {
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
}, Su = ti.footer, Pu = ti.nav;
const Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ti,
  footer: Su,
  nav: Pu
}, Symbol.toStringTag, { value: "Module" }));
var ni = {
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
}, zu = ni.footer, Au = ni.nav;
const Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ni,
  footer: zu,
  nav: Au
}, Symbol.toStringTag, { value: "Module" }));
var ri = {
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
}, Eu = ri.footer, Ou = ri.nav;
const Iu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ri,
  footer: Eu,
  nav: Ou
}, Symbol.toStringTag, { value: "Module" }));
var ii = {
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
}, Nu = ii.footer, Tu = ii.nav;
const $u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ii,
  footer: Nu,
  nav: Tu
}, Symbol.toStringTag, { value: "Module" }));
var ai = {
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
}, Lu = ai.footer, Ru = ai.nav;
const Du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ai,
  footer: Lu,
  nav: Ru
}, Symbol.toStringTag, { value: "Module" }));
var oi = {
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
}, Bu = oi.footer, Fu = oi.nav;
const Gu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: oi,
  footer: Bu,
  nav: Fu
}, Symbol.toStringTag, { value: "Module" }));
var si = {
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
}, Wu = si.footer, Hu = si.nav;
const Vu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: si,
  footer: Wu,
  nav: Hu
}, Symbol.toStringTag, { value: "Module" }));
var li = {
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
}, Ku = li.footer, Uu = li.nav;
const qu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: li,
  footer: Ku,
  nav: Uu
}, Symbol.toStringTag, { value: "Module" }));
function Or(e, t = "") {
  let n = {};
  if (e && typeof e == "object") {
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        const i = r === "default" && !t ? "" : t ? `${t}.${r}` : r, a = e[r];
        Array.isArray(a) ? (n[i] = a, a.forEach((o, s) => {
          typeof o == "object" && o !== null ? n = {
            ...n,
            ...Or(o, `${i}.${s}`)
          } : n[`${i}.${s}`] = o;
        })) : typeof a == "object" && a !== null ? n = { ...n, ...Or(a, i) } : n[i] = a;
      }
  }
  return n;
}
const Xe = {}, ma = /* @__PURE__ */ Object.assign({ "./ar/translation.yaml": Uc, "./cs/translation.yaml": Zc, "./da/translation.yaml": Qc, "./de/translation.yaml": nu, "./en/translation.yaml": ou, "./es/translation.yaml": cu, "./fi/translation.yaml": pu, "./fr/translation.yaml": gu, "./he/translation.yaml": yu, "./id/translation.yaml": xu, "./it/translation.yaml": ju, "./ja/translation.yaml": Cu, "./nl/translation.yaml": Mu, "./no/translation.yaml": Iu, "./pl/translation.yaml": $u, "./pt/translation.yaml": Du, "./sv/translation.yaml": Gu, "./tr/translation.yaml": Vu, "./zh/translation.yaml": qu });
for (const e in ma) {
  const t = ma[e], r = e.replace(/^\.\/|\/$/g, "").split("/")[0];
  if (Xe[r] || (Xe[r] = {}), typeof t != "object" || t === null) {
    console.warn(`File ${e} is not a valid object, skipping.`);
    continue;
  }
  Xe[r].translation || (Xe[r].translation = {}), Object.assign(Xe[r].translation, Or(t));
}
const Yu = Object.keys(Xe);
me.use(kc).init({
  lng: "en",
  supportedLngs: Yu,
  resources: Xe,
  fallbackLng: "en",
  react: { useSuspense: !1 }
});
const Io = "https://www.plexicus.ai", No = "https://blog.plexicus.ai", pn = "https://app.plexicus.ai";
function Zu(e) {
  const [t, n] = ye(!1);
  return xe(() => {
    const r = window.matchMedia(e), i = () => n(r.matches);
    return i(), r.addEventListener("change", i), () => r.removeEventListener("change", i);
  }, [e]), t;
}
function Ju({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ l.jsx(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: fe(
        "file:text-foreground placeholder:text-white/70 selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        e
      ),
      ...n
    }
  );
}
function To(e) {
  const { currentLang: t = "en", debounceMs: n = 1e3, minQueryLength: r = 2, blogUrl: i, webUrl: a } = e, [o, s] = ye(""), [u, c] = ye([]), [p, d] = ye(!1), [g, f] = ye(!1), h = Et(null);
  xe(() => {
    if (h.current && clearTimeout(h.current), o.trim().length < r) {
      c([]), f(!1);
      return;
    }
    return h.current = setTimeout(async () => {
      await m(o.trim());
    }, n), () => {
      h.current && clearTimeout(h.current);
    };
  }, [o, t, n, r]);
  const m = async (S) => {
    d(!0);
    const _ = t === "en" ? "" : "/";
    try {
      const j = [], [I, z] = await Promise.allSettled([
        fetch(`${a}/api/${t}/pages.json?t=${Date.now()}`).then((T) => T.json()),
        fetch(`${i}/api/${t}/pages.json?t=${Date.now()}`).then((T) => T.json())
      ]);
      if (I.status === "fulfilled") {
        const T = x(I.value.pages || [], S);
        j.push(...T.map((E) => ({ ...E, lang: t, path: E.path === "/" && t === "en" ? a : `${a}${_}${E.path}`, type: "page" })));
      }
      if (z.status === "fulfilled") {
        const T = x(z.value.pages || [], S);
        j.push(...T.map((E) => ({ ...E, lang: t, path: `${i}/${E.path}`, type: "blog" })));
      }
      if (j.length < 3 && t !== "en") {
        const [T, E] = await Promise.allSettled([
          fetch(`${a}/api/en/pages.json?t=${Date.now()}`).then((K) => K.json()),
          fetch(`${i}/api/en/pages.json?t=${Date.now()}`).then((K) => K.json())
        ]);
        if (T.status === "fulfilled") {
          const K = x(T.value.pages || [], S);
          j.push(...K.map((Z) => ({ ...Z, lang: "en", path: Z.path === "/" ? a : `${a}${_}${Z.path}`, type: "page" })));
        }
        if (E.status === "fulfilled") {
          const K = x(E.value.pages || [], S);
          j.push(...K.map((Z) => ({ ...Z, lang: "en", path: `${i}/${Z.path}`, type: "blog" })));
        }
      }
      const C = j.filter((T, E, K) => E === K.findIndex((Z) => Z.path === T.path)).slice(0, 8);
      c(C), f(C.length > 0);
    } catch (j) {
      console.error("Search error:", j), c([]), f(!1);
    } finally {
      d(!1);
    }
  }, x = (S, _) => {
    const j = _.toLowerCase();
    return S.filter((I) => {
      var E;
      const z = I.title.toLowerCase().includes(j), C = I.description.toLowerCase().includes(j), T = (E = I.keywords) == null ? void 0 : E.some((K) => K.toLowerCase().includes(j));
      return z || C || T;
    });
  }, P = () => {
    s(""), c([]), f(!1);
  }, y = (S) => {
    window.location.href = `${S.path}`, f(!1);
  };
  return xe(() => {
    m("platform");
  }, []), {
    query: o,
    setQuery: s,
    results: u,
    isLoading: p,
    isOpen: g,
    setIsOpen: f,
    clearSearch: P,
    handleResultClick: y
  };
}
function Xu({ currentLang: e = "en", onClose: t, blogUrl: n, webUrl: r }) {
  const i = Et(null), { query: a, setQuery: o, results: s, isLoading: u, clearSearch: c, handleResultClick: p } = To({ currentLang: e, blogUrl: n, webUrl: r }), { t: d } = Gn(), g = () => {
    c(), t();
  };
  return /* @__PURE__ */ l.jsx("div", { className: "z-50 bg-background/80 backdrop-blur-sm", children: /* @__PURE__ */ l.jsxs("div", { className: " z-50 h-full bg-background ", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex items-center gap-4 p-4 border-b", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ l.jsx(ho, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ l.jsx(
          Ju,
          {
            ref: i,
            type: "text",
            placeholder: d("search.placeholder"),
            value: a,
            onChange: (f) => o(f.target.value),
            className: "pl-10 border-2 focus:border-[#8220ff] focus:ring-[#8220ff]/20 transition-all duration-200"
          }
        )
      ] }),
      s.length > 0 && /* @__PURE__ */ l.jsx(Je, { variant: "ghost", size: "icon", onClick: g, children: /* @__PURE__ */ l.jsx(yl, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "p-4 max-h-[calc(100vh-80px)] overflow-y-auto", children: u ? /* @__PURE__ */ l.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: d("search.searching") }) : s.length > 0 ? /* @__PURE__ */ l.jsx("div", { className: "space-y-2", children: /* @__PURE__ */ l.jsx(Qu, { results: s, onClick: p }) }) : a.trim().length >= 2 ? /* @__PURE__ */ l.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: d("search.not_found") }) : /* @__PURE__ */ l.jsx("div", { className: "text-center text-sm text-muted-foreground py-8", children: d("search.start_typing") }) })
  ] }) });
}
function Qu({ results: e, onClick: t }) {
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: e.map((n, r) => /* @__PURE__ */ l.jsx(
    "button",
    {
      onClick: () => t(n),
      className: "w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group",
      children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
        /* @__PURE__ */ l.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ l.jsx("h4", { className: "font-medium text-sm line-clamp-1 group-hover:text-[#8220ff]", children: n.title }),
          /* @__PURE__ */ l.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: n.description }),
          n.keywords && n.keywords.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: n.keywords.slice(0, 3).map((i, a) => /* @__PURE__ */ l.jsx(
            "span",
            {
              className: "inline-block px-2 py-1 text-xs bg-[#8220ff]/60 text-white rounded-full",
              children: i
            },
            a
          )) })
        ] }),
        /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col p-2 items-center justify-start gap-2", children: [
          n.lang && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-muted-foreground uppercase font-mono", children: n.lang }),
          n.type && /* @__PURE__ */ l.jsx("span", { className: fe("text-xs rounded-sm p-1 uppercase font-mono", n.type === "page" ? "bg-[#8220ff]/60 text-white " : "text-[#8220ff]/80 bg-gray-200"), children: n.type })
        ] })
      ] })
    },
    `${n.path}-${r}`
  )) });
}
var va = 1, ed = 0.9, td = 0.8, nd = 0.17, ir = 0.1, ar = 0.999, rd = 0.9999, id = 0.99, ad = /[\\\/_+.#"@\[\(\{&]/, od = /[\\\/_+.#"@\[\(\{&]/g, sd = /[\s-]/, $o = /[\s-]/g;
function Ir(e, t, n, r, i, a, o) {
  if (a === t.length) return i === e.length ? va : id;
  var s = `${i},${a}`;
  if (o[s] !== void 0) return o[s];
  for (var u = r.charAt(a), c = n.indexOf(u, i), p = 0, d, g, f, h; c >= 0; ) d = Ir(e, t, n, r, c + 1, a + 1, o), d > p && (c === i ? d *= va : ad.test(e.charAt(c - 1)) ? (d *= td, f = e.slice(i, c - 1).match(od), f && i > 0 && (d *= Math.pow(ar, f.length))) : sd.test(e.charAt(c - 1)) ? (d *= ed, h = e.slice(i, c - 1).match($o), h && i > 0 && (d *= Math.pow(ar, h.length))) : (d *= nd, i > 0 && (d *= Math.pow(ar, c - i))), e.charAt(c) !== t.charAt(a) && (d *= rd)), (d < ir && n.charAt(c - 1) === r.charAt(a + 1) || r.charAt(a + 1) === r.charAt(a) && n.charAt(c - 1) !== r.charAt(a)) && (g = Ir(e, t, n, r, c + 1, a + 2, o), g * ir > d && (d = g * ir)), d > p && (p = d), c = n.indexOf(u, c + 1);
  return o[s] = p, p;
}
function ya(e) {
  return e.toLowerCase().replace($o, " ");
}
function ld(e, t, n) {
  return e = n && n.length > 0 ? `${e + " " + n.join(" ")}` : e, Ir(e, t, ya(e), ya(t), 0, 0, {});
}
function Ke(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), n === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function ba(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function at(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((i) => {
      const a = ba(i, t);
      return !n && typeof a == "function" && (n = !0), a;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const a = r[i];
          typeof a == "function" ? a() : ba(e[i], null);
        }
      };
  };
}
function dt(...e) {
  return b.useCallback(at(...e), e);
}
function cd(e, t) {
  const n = b.createContext(t), r = (a) => {
    const { children: o, ...s } = a, u = b.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ l.jsx(n.Provider, { value: u, children: o });
  };
  r.displayName = e + "Provider";
  function i(a) {
    const o = b.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${a}\` must be used within \`${e}\``);
  }
  return [r, i];
}
function ud(e, t = []) {
  let n = [];
  function r(a, o) {
    const s = b.createContext(o), u = n.length;
    n = [...n, o];
    const c = (d) => {
      var P;
      const { scope: g, children: f, ...h } = d, m = ((P = g == null ? void 0 : g[e]) == null ? void 0 : P[u]) || s, x = b.useMemo(() => h, Object.values(h));
      return /* @__PURE__ */ l.jsx(m.Provider, { value: x, children: f });
    };
    c.displayName = a + "Provider";
    function p(d, g) {
      var m;
      const f = ((m = g == null ? void 0 : g[e]) == null ? void 0 : m[u]) || s, h = b.useContext(f);
      if (h) return h;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${a}\``);
    }
    return [c, p];
  }
  const i = () => {
    const a = n.map((o) => b.createContext(o));
    return function(s) {
      const u = (s == null ? void 0 : s[e]) || a;
      return b.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: u } }),
        [s, u]
      );
    };
  };
  return i.scopeName = e, [r, dd(i, ...t)];
}
function dd(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(a) {
      const o = r.reduce((s, { useScope: u, scopeName: c }) => {
        const d = u(a)[`__scope${c}`];
        return { ...s, ...d };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var en = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
}, pd = b[" useId ".trim().toString()] || (() => {
}), fd = 0;
function Le(e) {
  const [t, n] = b.useState(pd());
  return en(() => {
    n((r) => r ?? String(fd++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var hd = b[" useInsertionEffect ".trim().toString()] || en;
function gd({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [i, a, o] = md({
    defaultProp: t,
    onChange: n
  }), s = e !== void 0, u = s ? e : i;
  {
    const p = b.useRef(e !== void 0);
    b.useEffect(() => {
      const d = p.current;
      d !== s && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${s ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), p.current = s;
    }, [s, r]);
  }
  const c = b.useCallback(
    (p) => {
      var d;
      if (s) {
        const g = vd(p) ? p(e) : p;
        g !== e && ((d = o.current) == null || d.call(o, g));
      } else
        a(p);
    },
    [s, e, a, o]
  );
  return [u, c];
}
function md({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = b.useState(e), i = b.useRef(n), a = b.useRef(t);
  return hd(() => {
    a.current = t;
  }, [t]), b.useEffect(() => {
    var o;
    i.current !== n && ((o = a.current) == null || o.call(a, n), i.current = n);
  }, [n, i]), [n, r, a];
}
function vd(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function Lo(e) {
  const t = /* @__PURE__ */ yd(e), n = b.forwardRef((r, i) => {
    const { children: a, ...o } = r, s = b.Children.toArray(a), u = s.find(kd);
    if (u) {
      const c = u.props.children, p = s.map((d) => d === u ? b.Children.count(c) > 1 ? b.Children.only(null) : b.isValidElement(c) ? c.props.children : null : d);
      return /* @__PURE__ */ l.jsx(t, { ...o, ref: i, children: b.isValidElement(c) ? b.cloneElement(c, void 0, p) : null });
    }
    return /* @__PURE__ */ l.jsx(t, { ...o, ref: i, children: a });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function yd(e) {
  const t = b.forwardRef((n, r) => {
    const { children: i, ...a } = n;
    if (b.isValidElement(i)) {
      const o = _d(i), s = xd(a, i.props);
      return i.type !== b.Fragment && (s.ref = r ? at(r, o) : o), b.cloneElement(i, s);
    }
    return b.Children.count(i) > 1 ? b.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var bd = Symbol("radix.slottable");
function kd(e) {
  return b.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === bd;
}
function xd(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r], a = t[r];
    /^on[A-Z]/.test(r) ? i && a ? n[r] = (...s) => {
      const u = a(...s);
      return i(...s), u;
    } : i && (n[r] = i) : r === "style" ? n[r] = { ...i, ...a } : r === "className" && (n[r] = [i, a].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function _d(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var wd = [
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
], he = wd.reduce((e, t) => {
  const n = /* @__PURE__ */ Lo(`Primitive.${t}`), r = b.forwardRef((i, a) => {
    const { asChild: o, ...s } = i, u = o ? n : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ l.jsx(u, { ...s, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function jd(e, t) {
  e && _l.flushSync(() => e.dispatchEvent(t));
}
function tn(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Sd(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tn(e);
  b.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var Pd = "DismissableLayer", Nr = "dismissableLayer.update", Cd = "dismissableLayer.pointerDownOutside", zd = "dismissableLayer.focusOutside", ka, Ro = b.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Do = b.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: i,
      onFocusOutside: a,
      onInteractOutside: o,
      onDismiss: s,
      ...u
    } = e, c = b.useContext(Ro), [p, d] = b.useState(null), g = (p == null ? void 0 : p.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, f] = b.useState({}), h = dt(t, (z) => d(z)), m = Array.from(c.layers), [x] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), P = m.indexOf(x), y = p ? m.indexOf(p) : -1, S = c.layersWithOutsidePointerEventsDisabled.size > 0, _ = y >= P, j = Ed((z) => {
      const C = z.target, T = [...c.branches].some((E) => E.contains(C));
      !_ || T || (i == null || i(z), o == null || o(z), z.defaultPrevented || s == null || s());
    }, g), I = Od((z) => {
      const C = z.target;
      [...c.branches].some((E) => E.contains(C)) || (a == null || a(z), o == null || o(z), z.defaultPrevented || s == null || s());
    }, g);
    return Sd((z) => {
      y === c.layers.size - 1 && (r == null || r(z), !z.defaultPrevented && s && (z.preventDefault(), s()));
    }, g), b.useEffect(() => {
      if (p)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (ka = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(p)), c.layers.add(p), xa(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = ka);
        };
    }, [p, g, n, c]), b.useEffect(() => () => {
      p && (c.layers.delete(p), c.layersWithOutsidePointerEventsDisabled.delete(p), xa());
    }, [p, c]), b.useEffect(() => {
      const z = () => f({});
      return document.addEventListener(Nr, z), () => document.removeEventListener(Nr, z);
    }, []), /* @__PURE__ */ l.jsx(
      he.div,
      {
        ...u,
        ref: h,
        style: {
          pointerEvents: S ? _ ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Ke(e.onFocusCapture, I.onFocusCapture),
        onBlurCapture: Ke(e.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: Ke(
          e.onPointerDownCapture,
          j.onPointerDownCapture
        )
      }
    );
  }
);
Do.displayName = Pd;
var Ad = "DismissableLayerBranch", Md = b.forwardRef((e, t) => {
  const n = b.useContext(Ro), r = b.useRef(null), i = dt(t, r);
  return b.useEffect(() => {
    const a = r.current;
    if (a)
      return n.branches.add(a), () => {
        n.branches.delete(a);
      };
  }, [n.branches]), /* @__PURE__ */ l.jsx(he.div, { ...e, ref: i });
});
Md.displayName = Ad;
function Ed(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tn(e), r = b.useRef(!1), i = b.useRef(() => {
  });
  return b.useEffect(() => {
    const a = (s) => {
      if (s.target && !r.current) {
        let u = function() {
          Bo(
            Cd,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = u, t.addEventListener("click", i.current, { once: !0 })) : u();
      } else
        t.removeEventListener("click", i.current);
      r.current = !1;
    }, o = window.setTimeout(() => {
      t.addEventListener("pointerdown", a);
    }, 0);
    return () => {
      window.clearTimeout(o), t.removeEventListener("pointerdown", a), t.removeEventListener("click", i.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function Od(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = tn(e), r = b.useRef(!1);
  return b.useEffect(() => {
    const i = (a) => {
      a.target && !r.current && Bo(zd, n, { originalEvent: a }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function xa() {
  const e = new CustomEvent(Nr);
  document.dispatchEvent(e);
}
function Bo(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target, a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? jd(i, a) : i.dispatchEvent(a);
}
var or = "focusScope.autoFocusOnMount", sr = "focusScope.autoFocusOnUnmount", _a = { bubbles: !1, cancelable: !0 }, Id = "FocusScope", Fo = b.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: a,
    ...o
  } = e, [s, u] = b.useState(null), c = tn(i), p = tn(a), d = b.useRef(null), g = dt(t, (m) => u(m)), f = b.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  b.useEffect(() => {
    if (r) {
      let m = function(S) {
        if (f.paused || !s) return;
        const _ = S.target;
        s.contains(_) ? d.current = _ : Ge(d.current, { select: !0 });
      }, x = function(S) {
        if (f.paused || !s) return;
        const _ = S.relatedTarget;
        _ !== null && (s.contains(_) || Ge(d.current, { select: !0 }));
      }, P = function(S) {
        if (document.activeElement === document.body)
          for (const j of S)
            j.removedNodes.length > 0 && Ge(s);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", x);
      const y = new MutationObserver(P);
      return s && y.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", x), y.disconnect();
      };
    }
  }, [r, s, f.paused]), b.useEffect(() => {
    if (s) {
      ja.add(f);
      const m = document.activeElement;
      if (!s.contains(m)) {
        const P = new CustomEvent(or, _a);
        s.addEventListener(or, c), s.dispatchEvent(P), P.defaultPrevented || (Nd(Dd(Go(s)), { select: !0 }), document.activeElement === m && Ge(s));
      }
      return () => {
        s.removeEventListener(or, c), setTimeout(() => {
          const P = new CustomEvent(sr, _a);
          s.addEventListener(sr, p), s.dispatchEvent(P), P.defaultPrevented || Ge(m ?? document.body, { select: !0 }), s.removeEventListener(sr, p), ja.remove(f);
        }, 0);
      };
    }
  }, [s, c, p, f]);
  const h = b.useCallback(
    (m) => {
      if (!n && !r || f.paused) return;
      const x = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, P = document.activeElement;
      if (x && P) {
        const y = m.currentTarget, [S, _] = Td(y);
        S && _ ? !m.shiftKey && P === _ ? (m.preventDefault(), n && Ge(S, { select: !0 })) : m.shiftKey && P === S && (m.preventDefault(), n && Ge(_, { select: !0 })) : P === y && m.preventDefault();
      }
    },
    [n, r, f.paused]
  );
  return /* @__PURE__ */ l.jsx(he.div, { tabIndex: -1, ...o, ref: g, onKeyDown: h });
});
Fo.displayName = Id;
function Nd(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ge(r, { select: t }), document.activeElement !== n) return;
}
function Td(e) {
  const t = Go(e), n = wa(t, e), r = wa(t.reverse(), e);
  return [n, r];
}
function Go(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function wa(e, t) {
  for (const n of e)
    if (!$d(n, { upTo: t })) return n;
}
function $d(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Ld(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ge(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Ld(e) && t && e.select();
  }
}
var ja = Rd();
function Rd() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Sa(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Sa(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Sa(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Dd(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Bd = "Portal", Wo = b.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [i, a] = b.useState(!1);
  en(() => a(!0), []);
  const o = n || i && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return o ? wl.createPortal(/* @__PURE__ */ l.jsx(he.div, { ...r, ref: t }), o) : null;
});
Wo.displayName = Bd;
function Fd(e, t) {
  return b.useReducer((n, r) => t[n][r] ?? n, e);
}
var Vn = (e) => {
  const { present: t, children: n } = e, r = Gd(t), i = typeof n == "function" ? n({ present: r.isPresent }) : b.Children.only(n), a = dt(r.ref, Wd(i));
  return typeof n == "function" || r.isPresent ? b.cloneElement(i, { ref: a }) : null;
};
Vn.displayName = "Presence";
function Gd(e) {
  const [t, n] = b.useState(), r = b.useRef(null), i = b.useRef(e), a = b.useRef("none"), o = e ? "mounted" : "unmounted", [s, u] = Fd(o, {
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
  return b.useEffect(() => {
    const c = fn(r.current);
    a.current = s === "mounted" ? c : "none";
  }, [s]), en(() => {
    const c = r.current, p = i.current;
    if (p !== e) {
      const g = a.current, f = fn(c);
      e ? u("MOUNT") : f === "none" || (c == null ? void 0 : c.display) === "none" ? u("UNMOUNT") : u(p && g !== f ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, u]), en(() => {
    if (t) {
      let c;
      const p = t.ownerDocument.defaultView ?? window, d = (f) => {
        const m = fn(r.current).includes(CSS.escape(f.animationName));
        if (f.target === t && m && (u("ANIMATION_END"), !i.current)) {
          const x = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = p.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
          });
        }
      }, g = (f) => {
        f.target === t && (a.current = fn(r.current));
      };
      return t.addEventListener("animationstart", g), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        p.clearTimeout(c), t.removeEventListener("animationstart", g), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      u("ANIMATION_END");
  }, [t, u]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: b.useCallback((c) => {
      r.current = c ? getComputedStyle(c) : null, n(c);
    }, [])
  };
}
function fn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Wd(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var lr = 0;
function Hd() {
  b.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Pa()), document.body.insertAdjacentElement("beforeend", e[1] ?? Pa()), lr++, () => {
      lr === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), lr--;
    };
  }, []);
}
function Pa() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Me = function() {
  return Me = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Me.apply(this, arguments);
};
function Ho(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Vd(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
var Pn = "right-scroll-bar-position", Cn = "width-before-scroll-bar", Kd = "with-scroll-bars-hidden", Ud = "--removed-body-scroll-bar-size";
function cr(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function qd(e, t) {
  var n = ye(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var i = n.value;
          i !== r && (n.value = r, n.callback(r, i));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Yd = typeof window < "u" ? b.useLayoutEffect : b.useEffect, Ca = /* @__PURE__ */ new WeakMap();
function Zd(e, t) {
  var n = qd(null, function(r) {
    return e.forEach(function(i) {
      return cr(i, r);
    });
  });
  return Yd(function() {
    var r = Ca.get(n);
    if (r) {
      var i = new Set(r), a = new Set(e), o = n.current;
      i.forEach(function(s) {
        a.has(s) || cr(s, null);
      }), a.forEach(function(s) {
        i.has(s) || cr(s, o);
      });
    }
    Ca.set(n, e);
  }, [e]), n;
}
function Jd(e) {
  return e;
}
function Xd(e, t) {
  t === void 0 && (t = Jd);
  var n = [], r = !1, i = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var o = t(a, r);
      return n.push(o), function() {
        n = n.filter(function(s) {
          return s !== o;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var o = n;
        n = [], o.forEach(a);
      }
      n = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var o = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(a), o = n;
      }
      var u = function() {
        var p = o;
        o = [], p.forEach(a);
      }, c = function() {
        return Promise.resolve().then(u);
      };
      c(), n = {
        push: function(p) {
          o.push(p), c();
        },
        filter: function(p) {
          return o = o.filter(p), n;
        }
      };
    }
  };
  return i;
}
function Qd(e) {
  e === void 0 && (e = {});
  var t = Xd(null);
  return t.options = Me({ async: !0, ssr: !1 }, e), t;
}
var Vo = function(e) {
  var t = e.sideCar, n = Ho(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return b.createElement(r, Me({}, n));
};
Vo.isSideCarExport = !0;
function ep(e, t) {
  return e.useMedium(t), Vo;
}
var Ko = Qd(), ur = function() {
}, Kn = b.forwardRef(function(e, t) {
  var n = b.useRef(null), r = b.useState({
    onScrollCapture: ur,
    onWheelCapture: ur,
    onTouchMoveCapture: ur
  }), i = r[0], a = r[1], o = e.forwardProps, s = e.children, u = e.className, c = e.removeScrollBar, p = e.enabled, d = e.shards, g = e.sideCar, f = e.noRelative, h = e.noIsolation, m = e.inert, x = e.allowPinchZoom, P = e.as, y = P === void 0 ? "div" : P, S = e.gapMode, _ = Ho(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), j = g, I = Zd([n, t]), z = Me(Me({}, _), i);
  return b.createElement(
    b.Fragment,
    null,
    p && b.createElement(j, { sideCar: Ko, removeScrollBar: c, shards: d, noRelative: f, noIsolation: h, inert: m, setCallbacks: a, allowPinchZoom: !!x, lockRef: n, gapMode: S }),
    o ? b.cloneElement(b.Children.only(s), Me(Me({}, z), { ref: I })) : b.createElement(y, Me({}, z, { className: u, ref: I }), s)
  );
});
Kn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Kn.classNames = {
  fullWidth: Cn,
  zeroRight: Pn
};
var tp = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function np() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = tp();
  return t && e.setAttribute("nonce", t), e;
}
function rp(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function ip(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var ap = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = np()) && (rp(t, n), ip(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, op = function() {
  var e = ap();
  return function(t, n) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Uo = function() {
  var e = op(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, sp = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, dr = function(e) {
  return parseInt(e || "", 10) || 0;
}, lp = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [dr(n), dr(r), dr(i)];
}, cp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return sp;
  var t = lp(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, up = Uo(), St = "data-scroll-locked", dp = function(e, t, n, r) {
  var i = e.left, a = e.top, o = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(Kd, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(St, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Pn, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Cn, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Pn, " .").concat(Pn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Cn, " .").concat(Cn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(St, `] {
    `).concat(Ud, ": ").concat(s, `px;
  }
`);
}, za = function() {
  var e = parseInt(document.body.getAttribute(St) || "0", 10);
  return isFinite(e) ? e : 0;
}, pp = function() {
  b.useEffect(function() {
    return document.body.setAttribute(St, (za() + 1).toString()), function() {
      var e = za() - 1;
      e <= 0 ? document.body.removeAttribute(St) : document.body.setAttribute(St, e.toString());
    };
  }, []);
}, fp = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  pp();
  var a = b.useMemo(function() {
    return cp(i);
  }, [i]);
  return b.createElement(up, { styles: dp(a, !t, i, n ? "" : "!important") });
}, Tr = !1;
if (typeof window < "u")
  try {
    var hn = Object.defineProperty({}, "passive", {
      get: function() {
        return Tr = !0, !0;
      }
    });
    window.addEventListener("test", hn, hn), window.removeEventListener("test", hn, hn);
  } catch {
    Tr = !1;
  }
var mt = Tr ? { passive: !1 } : !1, hp = function(e) {
  return e.tagName === "TEXTAREA";
}, qo = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !hp(e) && n[t] === "visible")
  );
}, gp = function(e) {
  return qo(e, "overflowY");
}, mp = function(e) {
  return qo(e, "overflowX");
}, Aa = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = Yo(e, r);
    if (i) {
      var a = Zo(e, r), o = a[1], s = a[2];
      if (o > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, vp = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, yp = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Yo = function(e, t) {
  return e === "v" ? gp(t) : mp(t);
}, Zo = function(e, t) {
  return e === "v" ? vp(t) : yp(t);
}, bp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, kp = function(e, t, n, r, i) {
  var a = bp(e, window.getComputedStyle(t).direction), o = a * r, s = n.target, u = t.contains(s), c = !1, p = o > 0, d = 0, g = 0;
  do {
    if (!s)
      break;
    var f = Zo(e, s), h = f[0], m = f[1], x = f[2], P = m - x - a * h;
    (h || P) && Yo(e, s) && (d += P, g += h);
    var y = s.parentNode;
    s = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !u && s !== document.body || // self content
    u && (t.contains(s) || t === s)
  );
  return (p && Math.abs(d) < 1 || !p && Math.abs(g) < 1) && (c = !0), c;
}, gn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Ma = function(e) {
  return [e.deltaX, e.deltaY];
}, Ea = function(e) {
  return e && "current" in e ? e.current : e;
}, xp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, _p = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, wp = 0, vt = [];
function jp(e) {
  var t = b.useRef([]), n = b.useRef([0, 0]), r = b.useRef(), i = b.useState(wp++)[0], a = b.useState(Uo)[0], o = b.useRef(e);
  b.useEffect(function() {
    o.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var m = Vd([e.lockRef.current], (e.shards || []).map(Ea), !0).filter(Boolean);
      return m.forEach(function(x) {
        return x.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), m.forEach(function(x) {
          return x.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = b.useCallback(function(m, x) {
    if ("touches" in m && m.touches.length === 2 || m.type === "wheel" && m.ctrlKey)
      return !o.current.allowPinchZoom;
    var P = gn(m), y = n.current, S = "deltaX" in m ? m.deltaX : y[0] - P[0], _ = "deltaY" in m ? m.deltaY : y[1] - P[1], j, I = m.target, z = Math.abs(S) > Math.abs(_) ? "h" : "v";
    if ("touches" in m && z === "h" && I.type === "range")
      return !1;
    var C = Aa(z, I);
    if (!C)
      return !0;
    if (C ? j = z : (j = z === "v" ? "h" : "v", C = Aa(z, I)), !C)
      return !1;
    if (!r.current && "changedTouches" in m && (S || _) && (r.current = j), !j)
      return !0;
    var T = r.current || j;
    return kp(T, x, m, T === "h" ? S : _);
  }, []), u = b.useCallback(function(m) {
    var x = m;
    if (!(!vt.length || vt[vt.length - 1] !== a)) {
      var P = "deltaY" in x ? Ma(x) : gn(x), y = t.current.filter(function(j) {
        return j.name === x.type && (j.target === x.target || x.target === j.shadowParent) && xp(j.delta, P);
      })[0];
      if (y && y.should) {
        x.cancelable && x.preventDefault();
        return;
      }
      if (!y) {
        var S = (o.current.shards || []).map(Ea).filter(Boolean).filter(function(j) {
          return j.contains(x.target);
        }), _ = S.length > 0 ? s(x, S[0]) : !o.current.noIsolation;
        _ && x.cancelable && x.preventDefault();
      }
    }
  }, []), c = b.useCallback(function(m, x, P, y) {
    var S = { name: m, delta: x, target: P, should: y, shadowParent: Sp(P) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== S;
      });
    }, 1);
  }, []), p = b.useCallback(function(m) {
    n.current = gn(m), r.current = void 0;
  }, []), d = b.useCallback(function(m) {
    c(m.type, Ma(m), m.target, s(m, e.lockRef.current));
  }, []), g = b.useCallback(function(m) {
    c(m.type, gn(m), m.target, s(m, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return vt.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: g
    }), document.addEventListener("wheel", u, mt), document.addEventListener("touchmove", u, mt), document.addEventListener("touchstart", p, mt), function() {
      vt = vt.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", u, mt), document.removeEventListener("touchmove", u, mt), document.removeEventListener("touchstart", p, mt);
    };
  }, []);
  var f = e.removeScrollBar, h = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    h ? b.createElement(a, { styles: _p(i) }) : null,
    f ? b.createElement(fp, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function Sp(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const Pp = ep(Ko, jp);
var Jo = b.forwardRef(function(e, t) {
  return b.createElement(Kn, Me({}, e, { ref: t, sideCar: Pp }));
});
Jo.classNames = Kn.classNames;
var Cp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, yt = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), vn = {}, pr = 0, Xo = function(e) {
  return e && (e.host || Xo(e.parentNode));
}, zp = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Xo(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Ap = function(e, t, n, r) {
  var i = zp(t, Array.isArray(e) ? e : [e]);
  vn[n] || (vn[n] = /* @__PURE__ */ new WeakMap());
  var a = vn[n], o = [], s = /* @__PURE__ */ new Set(), u = new Set(i), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  i.forEach(c);
  var p = function(d) {
    !d || u.has(d) || Array.prototype.forEach.call(d.children, function(g) {
      if (s.has(g))
        p(g);
      else
        try {
          var f = g.getAttribute(r), h = f !== null && f !== "false", m = (yt.get(g) || 0) + 1, x = (a.get(g) || 0) + 1;
          yt.set(g, m), a.set(g, x), o.push(g), m === 1 && h && mn.set(g, !0), x === 1 && g.setAttribute(n, "true"), h || g.setAttribute(r, "true");
        } catch (P) {
          console.error("aria-hidden: cannot operate on ", g, P);
        }
    });
  };
  return p(t), s.clear(), pr++, function() {
    o.forEach(function(d) {
      var g = yt.get(d) - 1, f = a.get(d) - 1;
      yt.set(d, g), a.set(d, f), g || (mn.has(d) || d.removeAttribute(r), mn.delete(d)), f || d.removeAttribute(n);
    }), pr--, pr || (yt = /* @__PURE__ */ new WeakMap(), yt = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), vn = {});
  };
}, Mp = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), i = Cp(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live], script"))), Ap(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, Un = "Dialog", [Qo, zm] = ud(Un), [Ep, Ce] = Qo(Un), es = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: i,
    onOpenChange: a,
    modal: o = !0
  } = e, s = b.useRef(null), u = b.useRef(null), [c, p] = gd({
    prop: r,
    defaultProp: i ?? !1,
    onChange: a,
    caller: Un
  });
  return /* @__PURE__ */ l.jsx(
    Ep,
    {
      scope: t,
      triggerRef: s,
      contentRef: u,
      contentId: Le(),
      titleId: Le(),
      descriptionId: Le(),
      open: c,
      onOpenChange: p,
      onOpenToggle: b.useCallback(() => p((d) => !d), [p]),
      modal: o,
      children: n
    }
  );
};
es.displayName = Un;
var ts = "DialogTrigger", Op = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = Ce(ts, n), a = dt(t, i.triggerRef);
    return /* @__PURE__ */ l.jsx(
      he.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": di(i.open),
        ...r,
        ref: a,
        onClick: Ke(e.onClick, i.onOpenToggle)
      }
    );
  }
);
Op.displayName = ts;
var ci = "DialogPortal", [Ip, ns] = Qo(ci, {
  forceMount: void 0
}), rs = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: i } = e, a = Ce(ci, t);
  return /* @__PURE__ */ l.jsx(Ip, { scope: t, forceMount: n, children: b.Children.map(r, (o) => /* @__PURE__ */ l.jsx(Vn, { present: n || a.open, children: /* @__PURE__ */ l.jsx(Wo, { asChild: !0, container: i, children: o }) })) });
};
rs.displayName = ci;
var Tn = "DialogOverlay", is = b.forwardRef(
  (e, t) => {
    const n = ns(Tn, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = Ce(Tn, e.__scopeDialog);
    return a.modal ? /* @__PURE__ */ l.jsx(Vn, { present: r || a.open, children: /* @__PURE__ */ l.jsx(Tp, { ...i, ref: t }) }) : null;
  }
);
is.displayName = Tn;
var Np = /* @__PURE__ */ Lo("DialogOverlay.RemoveScroll"), Tp = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = Ce(Tn, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ l.jsx(Jo, { as: Np, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ l.jsx(
        he.div,
        {
          "data-state": di(i.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), ot = "DialogContent", as = b.forwardRef(
  (e, t) => {
    const n = ns(ot, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, a = Ce(ot, e.__scopeDialog);
    return /* @__PURE__ */ l.jsx(Vn, { present: r || a.open, children: a.modal ? /* @__PURE__ */ l.jsx($p, { ...i, ref: t }) : /* @__PURE__ */ l.jsx(Lp, { ...i, ref: t }) });
  }
);
as.displayName = ot;
var $p = b.forwardRef(
  (e, t) => {
    const n = Ce(ot, e.__scopeDialog), r = b.useRef(null), i = dt(t, n.contentRef, r);
    return b.useEffect(() => {
      const a = r.current;
      if (a) return Mp(a);
    }, []), /* @__PURE__ */ l.jsx(
      os,
      {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Ke(e.onCloseAutoFocus, (a) => {
          var o;
          a.preventDefault(), (o = n.triggerRef.current) == null || o.focus();
        }),
        onPointerDownOutside: Ke(e.onPointerDownOutside, (a) => {
          const o = a.detail.originalEvent, s = o.button === 0 && o.ctrlKey === !0;
          (o.button === 2 || s) && a.preventDefault();
        }),
        onFocusOutside: Ke(
          e.onFocusOutside,
          (a) => a.preventDefault()
        )
      }
    );
  }
), Lp = b.forwardRef(
  (e, t) => {
    const n = Ce(ot, e.__scopeDialog), r = b.useRef(!1), i = b.useRef(!1);
    return /* @__PURE__ */ l.jsx(
      os,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (a) => {
          var o, s;
          (o = e.onCloseAutoFocus) == null || o.call(e, a), a.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), a.preventDefault()), r.current = !1, i.current = !1;
        },
        onInteractOutside: (a) => {
          var u, c;
          (u = e.onInteractOutside) == null || u.call(e, a), a.defaultPrevented || (r.current = !0, a.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const o = a.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(o)) && a.preventDefault(), a.detail.originalEvent.type === "focusin" && i.current && a.preventDefault();
        }
      }
    );
  }
), os = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: a, ...o } = e, s = Ce(ot, n), u = b.useRef(null), c = dt(t, u);
    return Hd(), /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
      /* @__PURE__ */ l.jsx(
        Fo,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: i,
          onUnmountAutoFocus: a,
          children: /* @__PURE__ */ l.jsx(
            Do,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": di(s.open),
              ...o,
              ref: c,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
        /* @__PURE__ */ l.jsx(Rp, { titleId: s.titleId }),
        /* @__PURE__ */ l.jsx(Bp, { contentRef: u, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), ui = "DialogTitle", ss = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = Ce(ui, n);
    return /* @__PURE__ */ l.jsx(he.h2, { id: i.titleId, ...r, ref: t });
  }
);
ss.displayName = ui;
var ls = "DialogDescription", cs = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = Ce(ls, n);
    return /* @__PURE__ */ l.jsx(he.p, { id: i.descriptionId, ...r, ref: t });
  }
);
cs.displayName = ls;
var us = "DialogClose", ds = b.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = Ce(us, n);
    return /* @__PURE__ */ l.jsx(
      he.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Ke(e.onClick, () => i.onOpenChange(!1))
      }
    );
  }
);
ds.displayName = us;
function di(e) {
  return e ? "open" : "closed";
}
var ps = "DialogTitleWarning", [Am, fs] = cd(ps, {
  contentName: ot,
  titleName: ui,
  docsSlug: "dialog"
}), Rp = ({ titleId: e }) => {
  const t = fs(ps), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return b.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Dp = "DialogDescriptionWarning", Bp = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${fs(Dp).contentName}}.`;
  return b.useEffect(() => {
    var a;
    const i = (a = e.current) == null ? void 0 : a.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, hs = es, gs = rs, ms = is, vs = as, Fp = ss, Gp = cs, Wp = ds, Vt = '[cmdk-group=""]', fr = '[cmdk-group-items=""]', Hp = '[cmdk-group-heading=""]', ys = '[cmdk-item=""]', Oa = `${ys}:not([aria-disabled="true"])`, $r = "cmdk-item-select", bt = "data-value", Vp = (e, t, n) => ld(e, t, n), bs = b.createContext(void 0), on = () => b.useContext(bs), ks = b.createContext(void 0), pi = () => b.useContext(ks), xs = b.createContext(void 0), _s = b.forwardRef((e, t) => {
  let n = kt(() => {
    var k, M;
    return { search: "", value: (M = (k = e.value) != null ? k : e.defaultValue) != null ? M : "", selectedItemId: void 0, filtered: { count: 0, items: /* @__PURE__ */ new Map(), groups: /* @__PURE__ */ new Set() } };
  }), r = kt(() => /* @__PURE__ */ new Set()), i = kt(() => /* @__PURE__ */ new Map()), a = kt(() => /* @__PURE__ */ new Map()), o = kt(() => /* @__PURE__ */ new Set()), s = ws(e), { label: u, children: c, value: p, onValueChange: d, filter: g, shouldFilter: f, loop: h, disablePointerSelection: m = !1, vimBindings: x = !0, ...P } = e, y = Le(), S = Le(), _ = Le(), j = b.useRef(null), I = nf();
  st(() => {
    if (p !== void 0) {
      let k = p.trim();
      n.current.value = k, z.emit();
    }
  }, [p]), st(() => {
    I(6, $);
  }, []);
  let z = b.useMemo(() => ({ subscribe: (k) => (o.current.add(k), () => o.current.delete(k)), snapshot: () => n.current, setState: (k, M, N) => {
    var L, B, F, R;
    if (!Object.is(n.current[k], M)) {
      if (n.current[k] = M, k === "search") Z(), E(), I(1, K);
      else if (k === "value") {
        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
          let X = document.getElementById(_);
          X ? X.focus() : (L = document.getElementById(y)) == null || L.focus();
        }
        if (I(7, () => {
          var X;
          n.current.selectedItemId = (X = G()) == null ? void 0 : X.id, z.emit();
        }), N || I(5, $), ((B = s.current) == null ? void 0 : B.value) !== void 0) {
          let X = M ?? "";
          (R = (F = s.current).onValueChange) == null || R.call(F, X);
          return;
        }
      }
      z.emit();
    }
  }, emit: () => {
    o.current.forEach((k) => k());
  } }), []), C = b.useMemo(() => ({ value: (k, M, N) => {
    var L;
    M !== ((L = a.current.get(k)) == null ? void 0 : L.value) && (a.current.set(k, { value: M, keywords: N }), n.current.filtered.items.set(k, T(M, N)), I(2, () => {
      E(), z.emit();
    }));
  }, item: (k, M) => (r.current.add(k), M && (i.current.has(M) ? i.current.get(M).add(k) : i.current.set(M, /* @__PURE__ */ new Set([k]))), I(3, () => {
    Z(), E(), n.current.value || K(), z.emit();
  }), () => {
    a.current.delete(k), r.current.delete(k), n.current.filtered.items.delete(k);
    let N = G();
    I(4, () => {
      Z(), (N == null ? void 0 : N.getAttribute("id")) === k && K(), z.emit();
    });
  }), group: (k) => (i.current.has(k) || i.current.set(k, /* @__PURE__ */ new Set()), () => {
    a.current.delete(k), i.current.delete(k);
  }), filter: () => s.current.shouldFilter, label: u || e["aria-label"], getDisablePointerSelection: () => s.current.disablePointerSelection, listId: y, inputId: _, labelId: S, listInnerRef: j }), []);
  function T(k, M) {
    var N, L;
    let B = (L = (N = s.current) == null ? void 0 : N.filter) != null ? L : Vp;
    return k ? B(k, n.current.search, M) : 0;
  }
  function E() {
    if (!n.current.search || s.current.shouldFilter === !1) return;
    let k = n.current.filtered.items, M = [];
    n.current.filtered.groups.forEach((L) => {
      let B = i.current.get(L), F = 0;
      B.forEach((R) => {
        let X = k.get(R);
        F = Math.max(X, F);
      }), M.push([L, F]);
    });
    let N = j.current;
    D().sort((L, B) => {
      var F, R;
      let X = L.getAttribute("id"), le = B.getAttribute("id");
      return ((F = k.get(le)) != null ? F : 0) - ((R = k.get(X)) != null ? R : 0);
    }).forEach((L) => {
      let B = L.closest(fr);
      B ? B.appendChild(L.parentElement === B ? L : L.closest(`${fr} > *`)) : N.appendChild(L.parentElement === N ? L : L.closest(`${fr} > *`));
    }), M.sort((L, B) => B[1] - L[1]).forEach((L) => {
      var B;
      let F = (B = j.current) == null ? void 0 : B.querySelector(`${Vt}[${bt}="${encodeURIComponent(L[0])}"]`);
      F == null || F.parentElement.appendChild(F);
    });
  }
  function K() {
    let k = D().find((N) => N.getAttribute("aria-disabled") !== "true"), M = k == null ? void 0 : k.getAttribute(bt);
    z.setState("value", M || void 0);
  }
  function Z() {
    var k, M, N, L;
    if (!n.current.search || s.current.shouldFilter === !1) {
      n.current.filtered.count = r.current.size;
      return;
    }
    n.current.filtered.groups = /* @__PURE__ */ new Set();
    let B = 0;
    for (let F of r.current) {
      let R = (M = (k = a.current.get(F)) == null ? void 0 : k.value) != null ? M : "", X = (L = (N = a.current.get(F)) == null ? void 0 : N.keywords) != null ? L : [], le = T(R, X);
      n.current.filtered.items.set(F, le), le > 0 && B++;
    }
    for (let [F, R] of i.current) for (let X of R) if (n.current.filtered.items.get(X) > 0) {
      n.current.filtered.groups.add(F);
      break;
    }
    n.current.filtered.count = B;
  }
  function $() {
    var k, M, N;
    let L = G();
    L && (((k = L.parentElement) == null ? void 0 : k.firstChild) === L && ((N = (M = L.closest(Vt)) == null ? void 0 : M.querySelector(Hp)) == null || N.scrollIntoView({ block: "nearest" })), L.scrollIntoView({ block: "nearest" }));
  }
  function G() {
    var k;
    return (k = j.current) == null ? void 0 : k.querySelector(`${ys}[aria-selected="true"]`);
  }
  function D() {
    var k;
    return Array.from(((k = j.current) == null ? void 0 : k.querySelectorAll(Oa)) || []);
  }
  function J(k) {
    let M = D()[k];
    M && z.setState("value", M.getAttribute(bt));
  }
  function Y(k) {
    var M;
    let N = G(), L = D(), B = L.findIndex((R) => R === N), F = L[B + k];
    (M = s.current) != null && M.loop && (F = B + k < 0 ? L[L.length - 1] : B + k === L.length ? L[0] : L[B + k]), F && z.setState("value", F.getAttribute(bt));
  }
  function W(k) {
    let M = G(), N = M == null ? void 0 : M.closest(Vt), L;
    for (; N && !L; ) N = k > 0 ? ef(N, Vt) : tf(N, Vt), L = N == null ? void 0 : N.querySelector(Oa);
    L ? z.setState("value", L.getAttribute(bt)) : Y(k);
  }
  let w = () => J(D().length - 1), v = (k) => {
    k.preventDefault(), k.metaKey ? w() : k.altKey ? W(1) : Y(1);
  }, A = (k) => {
    k.preventDefault(), k.metaKey ? J(0) : k.altKey ? W(-1) : Y(-1);
  };
  return b.createElement(he.div, { ref: t, tabIndex: -1, ...P, "cmdk-root": "", onKeyDown: (k) => {
    var M;
    (M = P.onKeyDown) == null || M.call(P, k);
    let N = k.nativeEvent.isComposing || k.keyCode === 229;
    if (!(k.defaultPrevented || N)) switch (k.key) {
      case "n":
      case "j": {
        x && k.ctrlKey && v(k);
        break;
      }
      case "ArrowDown": {
        v(k);
        break;
      }
      case "p":
      case "k": {
        x && k.ctrlKey && A(k);
        break;
      }
      case "ArrowUp": {
        A(k);
        break;
      }
      case "Home": {
        k.preventDefault(), J(0);
        break;
      }
      case "End": {
        k.preventDefault(), w();
        break;
      }
      case "Enter": {
        k.preventDefault();
        let L = G();
        if (L) {
          let B = new Event($r);
          L.dispatchEvent(B);
        }
      }
    }
  } }, b.createElement("label", { "cmdk-label": "", htmlFor: C.inputId, id: C.labelId, style: af }, u), qn(e, (k) => b.createElement(ks.Provider, { value: z }, b.createElement(bs.Provider, { value: C }, k))));
}), Kp = b.forwardRef((e, t) => {
  var n, r;
  let i = Le(), a = b.useRef(null), o = b.useContext(xs), s = on(), u = ws(e), c = (r = (n = u.current) == null ? void 0 : n.forceMount) != null ? r : o == null ? void 0 : o.forceMount;
  st(() => {
    if (!c) return s.item(i, o == null ? void 0 : o.id);
  }, [c]);
  let p = js(i, a, [e.value, e.children, a], e.keywords), d = pi(), g = Ye((I) => I.value && I.value === p.current), f = Ye((I) => c || s.filter() === !1 ? !0 : I.search ? I.filtered.items.get(i) > 0 : !0);
  b.useEffect(() => {
    let I = a.current;
    if (!(!I || e.disabled)) return I.addEventListener($r, h), () => I.removeEventListener($r, h);
  }, [f, e.onSelect, e.disabled]);
  function h() {
    var I, z;
    m(), (z = (I = u.current).onSelect) == null || z.call(I, p.current);
  }
  function m() {
    d.setState("value", p.current, !0);
  }
  if (!f) return null;
  let { disabled: x, value: P, onSelect: y, forceMount: S, keywords: _, ...j } = e;
  return b.createElement(he.div, { ref: at(a, t), ...j, id: i, "cmdk-item": "", role: "option", "aria-disabled": !!x, "aria-selected": !!g, "data-disabled": !!x, "data-selected": !!g, onPointerMove: x || s.getDisablePointerSelection() ? void 0 : m, onClick: x ? void 0 : h }, e.children);
}), Up = b.forwardRef((e, t) => {
  let { heading: n, children: r, forceMount: i, ...a } = e, o = Le(), s = b.useRef(null), u = b.useRef(null), c = Le(), p = on(), d = Ye((f) => i || p.filter() === !1 ? !0 : f.search ? f.filtered.groups.has(o) : !0);
  st(() => p.group(o), []), js(o, s, [e.value, e.heading, u]);
  let g = b.useMemo(() => ({ id: o, forceMount: i }), [i]);
  return b.createElement(he.div, { ref: at(s, t), ...a, "cmdk-group": "", role: "presentation", hidden: d ? void 0 : !0 }, n && b.createElement("div", { ref: u, "cmdk-group-heading": "", "aria-hidden": !0, id: c }, n), qn(e, (f) => b.createElement("div", { "cmdk-group-items": "", role: "group", "aria-labelledby": n ? c : void 0 }, b.createElement(xs.Provider, { value: g }, f))));
}), qp = b.forwardRef((e, t) => {
  let { alwaysRender: n, ...r } = e, i = b.useRef(null), a = Ye((o) => !o.search);
  return !n && !a ? null : b.createElement(he.div, { ref: at(i, t), ...r, "cmdk-separator": "", role: "separator" });
}), Yp = b.forwardRef((e, t) => {
  let { onValueChange: n, ...r } = e, i = e.value != null, a = pi(), o = Ye((c) => c.search), s = Ye((c) => c.selectedItemId), u = on();
  return b.useEffect(() => {
    e.value != null && a.setState("search", e.value);
  }, [e.value]), b.createElement(he.input, { ref: t, ...r, "cmdk-input": "", autoComplete: "off", autoCorrect: "off", spellCheck: !1, "aria-autocomplete": "list", role: "combobox", "aria-expanded": !0, "aria-controls": u.listId, "aria-labelledby": u.labelId, "aria-activedescendant": s, id: u.inputId, type: "text", value: i ? e.value : o, onChange: (c) => {
    i || a.setState("search", c.target.value), n == null || n(c.target.value);
  } });
}), Zp = b.forwardRef((e, t) => {
  let { children: n, label: r = "Suggestions", ...i } = e, a = b.useRef(null), o = b.useRef(null), s = Ye((c) => c.selectedItemId), u = on();
  return b.useEffect(() => {
    if (o.current && a.current) {
      let c = o.current, p = a.current, d, g = new ResizeObserver(() => {
        d = requestAnimationFrame(() => {
          let f = c.offsetHeight;
          p.style.setProperty("--cmdk-list-height", f.toFixed(1) + "px");
        });
      });
      return g.observe(c), () => {
        cancelAnimationFrame(d), g.unobserve(c);
      };
    }
  }, []), b.createElement(he.div, { ref: at(a, t), ...i, "cmdk-list": "", role: "listbox", tabIndex: -1, "aria-activedescendant": s, "aria-label": r, id: u.listId }, qn(e, (c) => b.createElement("div", { ref: at(o, u.listInnerRef), "cmdk-list-sizer": "" }, c)));
}), Jp = b.forwardRef((e, t) => {
  let { open: n, onOpenChange: r, overlayClassName: i, contentClassName: a, container: o, ...s } = e;
  return b.createElement(hs, { open: n, onOpenChange: r }, b.createElement(gs, { container: o }, b.createElement(ms, { "cmdk-overlay": "", className: i }), b.createElement(vs, { "aria-label": e.label, "cmdk-dialog": "", className: a }, b.createElement(_s, { ref: t, ...s }))));
}), Xp = b.forwardRef((e, t) => Ye((n) => n.filtered.count === 0) ? b.createElement(he.div, { ref: t, ...e, "cmdk-empty": "", role: "presentation" }) : null), Qp = b.forwardRef((e, t) => {
  let { progress: n, children: r, label: i = "Loading...", ...a } = e;
  return b.createElement(he.div, { ref: t, ...a, "cmdk-loading": "", role: "progressbar", "aria-valuenow": n, "aria-valuemin": 0, "aria-valuemax": 100, "aria-label": i }, qn(e, (o) => b.createElement("div", { "aria-hidden": !0 }, o)));
}), pt = Object.assign(_s, { List: Zp, Item: Kp, Input: Yp, Group: Up, Separator: qp, Dialog: Jp, Empty: Xp, Loading: Qp });
function ef(e, t) {
  let n = e.nextElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.nextElementSibling;
  }
}
function tf(e, t) {
  let n = e.previousElementSibling;
  for (; n; ) {
    if (n.matches(t)) return n;
    n = n.previousElementSibling;
  }
}
function ws(e) {
  let t = b.useRef(e);
  return st(() => {
    t.current = e;
  }), t;
}
var st = typeof window > "u" ? b.useEffect : b.useLayoutEffect;
function kt(e) {
  let t = b.useRef();
  return t.current === void 0 && (t.current = e()), t;
}
function Ye(e) {
  let t = pi(), n = () => e(t.snapshot());
  return b.useSyncExternalStore(t.subscribe, n, n);
}
function js(e, t, n, r = []) {
  let i = b.useRef(), a = on();
  return st(() => {
    var o;
    let s = (() => {
      var c;
      for (let p of n) {
        if (typeof p == "string") return p.trim();
        if (typeof p == "object" && "current" in p) return p.current ? (c = p.current.textContent) == null ? void 0 : c.trim() : i.current;
      }
    })(), u = r.map((c) => c.trim());
    a.value(e, s, u), (o = t.current) == null || o.setAttribute(bt, s), i.current = s;
  }), i;
}
var nf = () => {
  let [e, t] = b.useState(), n = kt(() => /* @__PURE__ */ new Map());
  return st(() => {
    n.current.forEach((r) => r()), n.current = /* @__PURE__ */ new Map();
  }, [e]), (r, i) => {
    n.current.set(r, i), t({});
  };
};
function rf(e) {
  let t = e.type;
  return typeof t == "function" ? t(e.props) : "render" in t ? t.render(e.props) : e;
}
function qn({ asChild: e, children: t }, n) {
  return e && b.isValidElement(t) ? b.cloneElement(rf(t), { ref: t.ref }, n(t.props.children)) : n(t);
}
var af = { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0" };
function of({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(hs, { "data-slot": "dialog", ...e });
}
function sf({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(gs, { "data-slot": "dialog-portal", ...e });
}
function Ss({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ l.jsx(
    ms,
    {
      "data-slot": "dialog-overlay",
      className: fe(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        e
      ),
      ...t
    }
  ) });
}
function lf({
  className: e,
  children: t,
  showCloseButton: n = !0,
  ...r
}) {
  return /* @__PURE__ */ l.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ l.jsxs(sf, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ l.jsx(Ss, {}),
    /* @__PURE__ */ l.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ l.jsxs(
      vs,
      {
        "data-slot": "dialog-content",
        className: fe(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg md:max-w-xl lg:max-w-4xl",
          e
        ),
        ...r,
        children: [
          t,
          n && /* @__PURE__ */ l.jsxs(
            Wp,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ l.jsx(bl, {}),
                /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    ) })
  ] }) });
}
function cf({ className: e, ...t }) {
  return /* @__PURE__ */ l.jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: fe("flex flex-col gap-2 text-center sm:text-left", e),
      ...t
    }
  );
}
function uf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Fp,
    {
      "data-slot": "dialog-title",
      className: fe("text-lg leading-none font-semibold", e),
      ...t
    }
  );
}
function df({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    Gp,
    {
      "data-slot": "dialog-description",
      className: fe("text-muted-foreground text-sm", e),
      ...t
    }
  );
}
function pf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    pt,
    {
      "data-slot": "command",
      className: fe(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        e
      ),
      ...t
    }
  );
}
function ff({
  title: e = "Command Palette",
  description: t = "Search for a command to run...",
  children: n,
  className: r,
  showCloseButton: i = !0,
  ...a
}) {
  return /* @__PURE__ */ l.jsx("div", { className: "ui-lib", children: /* @__PURE__ */ l.jsxs(of, { ...a, children: [
    /* @__PURE__ */ l.jsx(Ss, { className: "backdrop-blur-xs" }),
    /* @__PURE__ */ l.jsxs(cf, { className: "sr-only ui-lib", children: [
      /* @__PURE__ */ l.jsx(uf, { children: e }),
      /* @__PURE__ */ l.jsx(df, { children: t })
    ] }),
    /* @__PURE__ */ l.jsx(
      lf,
      {
        className: fe("overflow-hidden p-0", r),
        showCloseButton: i,
        children: /* @__PURE__ */ l.jsx(pf, { shouldFilter: !1, className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5", children: n })
      }
    )
  ] }) });
}
function hf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ l.jsx(kl, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ l.jsx(
          pt.Input,
          {
            "data-slot": "command-input",
            className: fe(
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
function gf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    pt.List,
    {
      "data-slot": "command-list",
      className: fe(
        "max-h-[calc(100vh-600px)] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        e
      ),
      ...t
    }
  );
}
function mf({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(
    pt.Loading,
    {
      "data-slot": "command-loading",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function vf({
  ...e
}) {
  return /* @__PURE__ */ l.jsx(
    pt.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...e
    }
  );
}
function yf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    pt.Group,
    {
      "data-slot": "command-group",
      className: fe(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        e
      ),
      ...t
    }
  );
}
function bf({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ l.jsx(
    pt.Item,
    {
      "data-slot": "command-item",
      className: fe(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        e
      ),
      ...t
    }
  );
}
function Mm({ currentLang: e = "en", className: t, blogUrl: n, webUrl: r }) {
  const [i, a] = b.useState(!1);
  b.useEffect(() => {
    const f = (h) => {
      h.key === "k" && (h.metaKey || h.ctrlKey) && (h.preventDefault(), a((m) => !m));
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f);
  }, []);
  const { t: o } = Gn(), {
    query: s,
    setQuery: u,
    results: c,
    isLoading: p,
    handleResultClick: d
  } = To({ currentLang: e, blogUrl: n, webUrl: r }), g = ({ data: f }) => /* @__PURE__ */ l.jsx(yf, { children: f.map((h) => /* @__PURE__ */ l.jsx(pe, { href: h.path, children: /* @__PURE__ */ l.jsx(bf, { onSelect: () => d(h), className: "w-full text-left p-3 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors group", children: /* @__PURE__ */ l.jsxs("div", { className: "flex items-start justify-between gap-2 w-full", children: [
    /* @__PURE__ */ l.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ l.jsx("h4", { className: "font-medium text-sm line-clamp-1 group-hover:text-[#8220ff]", children: h.title }),
      /* @__PURE__ */ l.jsx("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-2", children: h.description }),
      h.keywords && h.keywords.length > 0 && /* @__PURE__ */ l.jsx("div", { className: "flex flex-wrap gap-1 mt-2", children: h.keywords.slice(0, 3).map((m, x) => /* @__PURE__ */ l.jsx(
        "span",
        {
          className: "inline-block px-2 py-1 text-xs bg-[#8220ff]/60 text-white rounded-full",
          children: m
        },
        x
      )) })
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col p-2 items-center justify-start gap-2", children: [
      h.lang && /* @__PURE__ */ l.jsx("span", { className: "text-xs text-muted-foreground uppercase font-mono", children: h.lang }),
      h.type && /* @__PURE__ */ l.jsx("span", { className: fe("text-xs rounded-sm p-1 uppercase font-mono", h.type === "page" ? "bg-[#8220ff]/60 text-white " : "text-[#8220ff]/80 bg-gray-200"), children: h.type })
    ] })
  ] }) }, h.title) })) });
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsx("div", { className: fe("ui-lib", t), children: /* @__PURE__ */ l.jsxs(ff, { open: i, onOpenChange: a, className: "top-[50%] sm:top-80 lg:top-100 dark", children: [
    /* @__PURE__ */ l.jsx(hf, { placeholder: o("search.placeholder"), value: s, onValueChange: (f) => u(f) }),
    /* @__PURE__ */ l.jsx(gf, { children: p ? /* @__PURE__ */ l.jsx(mf, { children: "Hang on…" }) : c.length ? /* @__PURE__ */ l.jsx(g, { data: c }) : /* @__PURE__ */ l.jsx(vf, { children: o("search.not_found") }) })
  ] }) }) });
}
const kf = () => {
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
  return /* @__PURE__ */ l.jsxs(
    "button",
    {
      onClick: e,
      className: "flex items-center space-x-2 px-4 py-1 bg-transparent text-gray-200 rounded-xl border border-white/50 hover:bg-violet-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
      children: [
        /* @__PURE__ */ l.jsx(ho, { className: "w-4 h-4" }),
        /* @__PURE__ */ l.jsxs("kbd", { className: "inline-flex h-5 items-center gap-1 rounded border border-gray-600 bg-violet-800 px-1.5 font-mono text-[10px] font-medium opacity-100", children: [
          /* @__PURE__ */ l.jsx("span", { className: "text-xs", children: "⌘" }),
          "K"
        ] })
      ]
    }
  );
}, Em = ({
  lang: e,
  fullSiteUrl: t = "http://localhost:8000",
  fullBlogUrl: n = "http://localhost:9000"
}) => {
  const [r, i] = ye("/"), [a, o] = ye(!1), [s, u] = ye(null), [c, p] = ye([]), d = Et(null), g = ($) => {
    p((G) => G.includes($) ? G.filter((D) => D !== $) : [$]);
  }, [f, h] = ye(!1), [m, x] = ye(!1), P = Zu("(max-width: 1279px)"), { t: y, i18n: S } = Gn();
  xe(() => {
    h(!0);
  }, []), xe(() => {
    S.changeLanguage(e), i(e !== "en" ? `/${e}/` : "/");
  }, []);
  const [_, j] = ye(!1);
  xe(() => {
    const $ = () => {
      const G = window.scrollY;
      j(G > 50);
    };
    return window.addEventListener("scroll", $), $(), () => {
      window.removeEventListener("scroll", $);
    };
  }, []);
  const I = Sn(($) => {
    d.current && (clearTimeout(d.current), d.current = null), u($);
  }, []), z = Et([]), C = Sn(() => {
    const $ = setTimeout(() => {
      u(null);
    }, 150);
    d.current = $, z.current.push($);
  }, []);
  xe(() => () => {
    d.current && clearTimeout(d.current), z.current.forEach(clearTimeout), z.current = [];
  }, []);
  const T = Sn(
    ($) => {
      u(s === $ ? null : $);
    },
    [s]
  ), E = En(t, Io), K = En(n, No), Z = {
    products: {
      title: y("nav.product.title"),
      shortTitle: y("footer.sections.products.title"),
      image: "product-diagram",
      items: [
        {
          title: y("nav.product.platform_overview"),
          description: y("nav.product.platform_overview_desc"),
          href: `${E}${r}products/cnapp-platform`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                /* @__PURE__ */ l.jsx("path", { d: "M12 16v-4" }),
                /* @__PURE__ */ l.jsx("path", { d: "M12 8h.01" })
              ]
            }
          )
        },
        {
          title: y("nav.product.benefits"),
          description: y("nav.product.benefits_desc"),
          href: `${E}${r}products/benefits`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "m9 12 2 2 4-4" }),
                /* @__PURE__ */ l.jsx("path", { d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" }),
                /* @__PURE__ */ l.jsx("path", { d: "M22 19H2" })
              ]
            }
          )
        },
        {
          title: y("nav.product.use_cases"),
          description: y("nav.product.use_cases_desc"),
          href: `${E}${r}products/use-cases`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("rect", { width: "18", height: "18", x: "3", y: "3", rx: "2" }),
                /* @__PURE__ */ l.jsx("path", { d: "M8 12h8" }),
                /* @__PURE__ */ l.jsx("path", { d: "M12 8v8" })
              ]
            }
          )
        },
        {
          title: y("nav.product.aspm"),
          description: y("nav.product.aspm_desc"),
          href: `${E}${r}products/aspm`,
          icon: /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
            }
          )
        },
        {
          title: y("nav.product.cspm"),
          description: y("nav.product.cspm_desc"),
          href: `${E}${r}products/cspm`,
          icon: /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx("path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" })
            }
          )
        },
        {
          title: y("nav.product.container_security"),
          description: y("nav.product.container_security_desc"),
          href: `${E}${r}products/container`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }),
                /* @__PURE__ */ l.jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }),
                /* @__PURE__ */ l.jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })
              ]
            }
          )
        },
        {
          title: y("nav.product.cwpp"),
          description: y("nav.product.cwpp_desc"),
          href: `${E}${r}products/cwpp`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2", ry: "2" }),
                /* @__PURE__ */ l.jsx("circle", { cx: "12", cy: "16", r: "1" }),
                /* @__PURE__ */ l.jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })
              ]
            }
          )
        },
        {
          title: y("nav.product.ciem"),
          description: y("nav.product.ciem_desc"),
          href: `${E}${r}products/ciem`,
          icon: /* @__PURE__ */ l.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-cloud-cog-icon lucide-cloud-cog", children: [
            /* @__PURE__ */ l.jsx("path", { d: "m10.852 19.772-.383.924" }),
            /* @__PURE__ */ l.jsx("path", { d: "m13.148 14.228.383-.923" }),
            /* @__PURE__ */ l.jsx("path", { d: "M13.148 19.772a3 3 0 1 0-2.296-5.544l-.383-.923" }),
            /* @__PURE__ */ l.jsx("path", { d: "m13.53 20.696-.382-.924a3 3 0 1 1-2.296-5.544" }),
            /* @__PURE__ */ l.jsx("path", { d: "m14.772 15.852.923-.383" }),
            /* @__PURE__ */ l.jsx("path", { d: "m14.772 18.148.923.383" }),
            /* @__PURE__ */ l.jsx("path", { d: "M4.2 15.1a7 7 0 1 1 9.93-9.858A7 7 0 0 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2" }),
            /* @__PURE__ */ l.jsx("path", { d: "m9.228 15.852-.923-.383" }),
            /* @__PURE__ */ l.jsx("path", { d: "m9.228 18.148-.923.383" })
          ] })
        }
      ]
    },
    solutions: {
      title: y("nav.solutions.title"),
      link: "/solutions",
      shortTitle: "Solutions",
      image: "solutions-diagram",
      items: [
        {
          title: y("nav.solutions.fintech"),
          description: y("nav.solutions.fintech_desc"),
          href: `${E}${r}solutions/fintech`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("rect", { width: "20", height: "14", x: "2", y: "5", rx: "2" }),
                /* @__PURE__ */ l.jsx("line", { x1: "2", x2: "22", y1: "10", y2: "10" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.healthtech"),
          description: y("nav.solutions.healthtech_desc"),
          href: `${E}${r}solutions/healthtech`,
          icon: /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx("path", { d: "M22 12h-4l-3 9L9 3l-3 9H2" })
            }
          )
        },
        {
          title: y("nav.solutions.hrtech"),
          description: y("nav.solutions.hrtech_desc"),
          href: `${E}${r}solutions/hrtech`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
                /* @__PURE__ */ l.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                /* @__PURE__ */ l.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
                /* @__PURE__ */ l.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.group_companies"),
          description: y("nav.solutions.group_companies_desc"),
          href: `${E}${r}solutions/group-companies`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
                /* @__PURE__ */ l.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.agencies"),
          description: y("nav.solutions.agencies_desc"),
          href: `${E}${r}solutions/agencies`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }),
                /* @__PURE__ */ l.jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.startups"),
          description: y("nav.solutions.startups_desc"),
          href: `${E}${r}solutions/startups`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" }),
                /* @__PURE__ */ l.jsx("path", { d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" }),
                /* @__PURE__ */ l.jsx("path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" }),
                /* @__PURE__ */ l.jsx("path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.enterprise"),
          description: y("nav.solutions.enterprise_desc"),
          href: `${E}${r}solutions/enterprise`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ l.jsx("path", { d: "M5 20V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v14" }),
                /* @__PURE__ */ l.jsx("path", { d: "M12 3v4" }),
                /* @__PURE__ */ l.jsx("path", { d: "M5 8h14" }),
                /* @__PURE__ */ l.jsx("path", { d: "M7 14h2" }),
                /* @__PURE__ */ l.jsx("path", { d: "M15 14h2" }),
                /* @__PURE__ */ l.jsx("path", { d: "M7 10h2" }),
                /* @__PURE__ */ l.jsx("path", { d: "M15 10h2" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.mobile_apps"),
          description: y("nav.solutions.mobile_apps_desc"),
          href: `${E}${r}solutions/mobile-apps`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
                /* @__PURE__ */ l.jsx("line", { x1: "12", y1: "18", x2: "12.01", y2: "18" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.manufacturing"),
          description: y("nav.solutions.manufacturing_desc"),
          href: `${E}${r}solutions/manufacturing`,
          icon: /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx("path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" })
            }
          )
        },
        {
          title: y("nav.solutions.government"),
          description: y("nav.solutions.government_desc"),
          href: `${E}${r}solutions/government`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M2 20h20" }),
                /* @__PURE__ */ l.jsx("path", { d: "M12 4v6" }),
                /* @__PURE__ */ l.jsx("path", { d: "M4 20V10l8-6 8 6v10" }),
                /* @__PURE__ */ l.jsx("path", { d: "M15 12v8" }),
                /* @__PURE__ */ l.jsx("path", { d: "M9 12v8" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.retailtech"),
          description: y("nav.solutions.retailtech_desc"),
          href: `${E}${r}solutions/retailtech`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("circle", { cx: "9", cy: "21", r: "1" }),
                /* @__PURE__ */ l.jsx("circle", { cx: "20", cy: "21", r: "1" }),
                /* @__PURE__ */ l.jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
              ]
            }
          )
        },
        {
          title: y("nav.solutions.legaltech"),
          description: y("nav.solutions.legal_desc"),
          href: `${E}${r}solutions/legaltech`,
          icon: /* @__PURE__ */ l.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", className: "lucide lucide-gavel-icon lucide-gavel", children: [
            /* @__PURE__ */ l.jsx("path", { d: "m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" }),
            /* @__PURE__ */ l.jsx("path", { d: "m16 16 6-6" }),
            /* @__PURE__ */ l.jsx("path", { d: "m21.5 10.5-8-8" }),
            /* @__PURE__ */ l.jsx("path", { d: "m8 8 6-6" }),
            /* @__PURE__ */ l.jsx("path", { d: "m8.5 7.5 8 8" })
          ] })
        }
      ]
    },
    developers: {
      title: y("nav.developers.title"),
      shortTitle: "Developers",
      image: "developers-diagram",
      items: [
        {
          title: y("nav.developers.documentation"),
          description: y("nav.developers.documentation_desc"),
          href: "https://docs.plexicus.com",
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ l.jsx("polyline", { points: "14 2 14 8 20 8" }),
                /* @__PURE__ */ l.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
                /* @__PURE__ */ l.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
                /* @__PURE__ */ l.jsx("polyline", { points: "10 9 9 9 8 9" })
              ]
            }
          )
        },
        {
          title: y("nav.developers.api_references"),
          description: y("nav.developers.api_references_desc"),
          href: "https://docs.plexicus.com/api",
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "m18 16 4-4-4-4" }),
                /* @__PURE__ */ l.jsx("path", { d: "m6 8-4 4 4 4" }),
                /* @__PURE__ */ l.jsx("path", { d: "m14.5 4-5 16" })
              ]
            }
          )
        },
        {
          title: y("nav.developers.github_apps"),
          description: y("nav.developers.github_apps_desc"),
          href: "https://github.com/apps/plexicus",
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" }),
                /* @__PURE__ */ l.jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })
              ]
            }
          )
        },
        {
          title: y("nav.developers.plexalyzer_action"),
          description: y("nav.developers.plexalyzer_action_desc"),
          href: "https://github.com/marketplace/actions/plexicus-runner-action",
          icon: /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx("path", { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" })
            }
          )
        }
      ]
    },
    resources: {
      title: y("nav.resources.title"),
      shortTitle: y("nav.resources.title"),
      image: "resources-diagram",
      items: [
        {
          title: y("nav.resources.blog"),
          description: y("nav.resources.blog_desc"),
          href: `${K}${r}`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
                /* @__PURE__ */ l.jsx("path", { d: "M14 3v5h5M16 13H8M16 17H8M10 9H8" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.youtube_channel"),
          description: y("nav.resources.youtube_channel_desc"),
          href: "https://youtube.com/@plexicus",
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" }),
                /* @__PURE__ */ l.jsx("path", { d: "m10 15 5-3-5-3z" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.branding_assets"),
          description: y("nav.resources.branding_assets_desc"),
          href: `${E}${r}branding-assets`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M12 19c.5 0 1-.1 1.4-.4.8-.4 1.4-1.1 1.6-2 .3-1.4-.5-2.8-1.9-3.2-.3-.1-.6-.1-.9-.1-.5 0-1 .1-1.4.4-.8.4-1.4 1.1-1.6 2-.3 1.4.5 2.8 1.9 3.2.3.1.6.1.9.1z" }),
                /* @__PURE__ */ l.jsx("path", { d: "m14.5 12.5 2.7-2.7c1.2-1.2 1.8-2.7 1.8-4.3 0-3.1-2.5-5.5-5.5-5.5-1.6 0-3.1.6-4.3 1.8L6.5 4.5" }),
                /* @__PURE__ */ l.jsx("path", { d: "m4.5 6.5 2.7-2.7c.3-.3.6-.4 1-.4.8 0 1.5.7 1.5 0 .4-.1.7-.4 1 0L6.5 8.5" }),
                /* @__PURE__ */ l.jsx("path", { d: "m3.5 13.5 5-5" }),
                /* @__PURE__ */ l.jsx("path", { d: "m5 19 5-5" }),
                /* @__PURE__ */ l.jsx("path", { d: "m17.5 6.5-5 5" }),
                /* @__PURE__ */ l.jsx("path", { d: "m16 17-5-5" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.changelogs"),
          description: y("nav.resources.changelogs_desc"),
          href: "https://plexicus.canny.io/changelog",
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" }),
                /* @__PURE__ */ l.jsx("path", { d: "m9 12 2 2 4-4" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.feature_requests"),
          description: y("nav.resources.feature_requests_desc"),
          href: "https://plexicus.canny.io/feature-requests",
          icon: /* @__PURE__ */ l.jsx(
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
              children: /* @__PURE__ */ l.jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
            }
          )
        },
        {
          title: y("nav.resources.integrations"),
          description: y("nav.resources.integrations_desc"),
          href: `${E}${r}integrations`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M9 12l2 2 4-4" }),
                /* @__PURE__ */ l.jsx("path", { d: "M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ l.jsx("path", { d: "M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ l.jsx("path", { d: "M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" }),
                /* @__PURE__ */ l.jsx("path", { d: "M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.comparison_overview"),
          description: y("nav.resources.comparison_overview_desc"),
          href: `${E}${r}comparison/overview`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
                /* @__PURE__ */ l.jsx("circle", { cx: "12", cy: "12", r: "3" })
              ]
            }
          )
        },
        {
          title: y("nav.resources.support"),
          description: y("nav.resources.support_desc"),
          href: `${E}${r}support`,
          icon: /* @__PURE__ */ l.jsxs(
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
                /* @__PURE__ */ l.jsx("path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" }),
                /* @__PURE__ */ l.jsx("path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" })
              ]
            }
          )
        }
      ]
    }
  };
  return /* @__PURE__ */ l.jsxs(
    "header",
    {
      className: "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-1",
      style: {
        background: _ ? "#8220ff" : "transparent",
        boxShadow: _ ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        transition: "all 0.3s ease-in-out",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ l.jsxs("div", { className: "container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl", children: [
          /* @__PURE__ */ l.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ l.jsx(
            pe,
            {
              href: `${E}${r}`,
              className: "flex items-center gap-2 overflow-visible",
              "aria-label": "Plexicus Home",
              children: /* @__PURE__ */ l.jsx("div", { className: "relative w-auto h-14 flex items-center", children: /* @__PURE__ */ l.jsx(
                "img",
                {
                  src: "/images/plexicus-logo-white.png",
                  alt: "Plexicus Logo",
                  className: fe("object-contain max-h-full max-w-none w-28", _ ? "md:w-40" : "md:w-42"),
                  style: {
                    // maxWidth: isScrolled ? "180px" : "220px",
                    transition: "max-width 0.3s ease-in-out"
                  }
                }
              ) })
            }
          ) }),
          /* @__PURE__ */ l.jsxs("nav", { className: "hidden xl:flex md:gap-4 lg:gap-6", "aria-label": "Main Navigation", children: [
            Object.entries(Z).filter(([$]) => $ === "products").map(([$, G]) => /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => I($),
                onMouseLeave: C,
                children: /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": s === $,
                    "aria-haspopup": "true",
                    onClick: () => T($),
                    children: [
                      /* @__PURE__ */ l.jsx("span", { className: "hidden xl:inline", children: G.title }),
                      /* @__PURE__ */ l.jsx("span", { className: "xl:hidden", children: G.shortTitle }),
                      /* @__PURE__ */ l.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${s === $ ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ l.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              $
            )),
            /* @__PURE__ */ l.jsx(
              pe,
              {
                href: `${E}${r}pricing`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: y("nav.pricing")
              }
            ),
            Object.entries(Z).filter(([$]) => $ === "solutions" || $ === "developers" || $ === "resources").map(([$, G]) => /* @__PURE__ */ l.jsx(
              "div",
              {
                className: "relative group",
                onMouseEnter: () => I($),
                onMouseLeave: C,
                children: /* @__PURE__ */ l.jsxs(
                  "button",
                  {
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 px-2 flex items-center whitespace-nowrap",
                    "aria-expanded": s === $,
                    "aria-haspopup": "true",
                    onClick: () => T($),
                    children: [
                      /* @__PURE__ */ l.jsx("span", { className: "hidden xl:inline", children: G.title }),
                      /* @__PURE__ */ l.jsx("span", { className: "xl:hidden", children: G.shortTitle }),
                      /* @__PURE__ */ l.jsx(
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
                          className: `ml-1 transition-transform duration-200 ${s === $ ? "transform rotate-180" : ""}`,
                          "aria-hidden": "true",
                          children: /* @__PURE__ */ l.jsx("path", { d: "m6 9 6 6 6-6" })
                        }
                      )
                    ]
                  }
                )
              },
              $
            )),
            /* @__PURE__ */ l.jsx(
              pe,
              {
                href: `${E}${r}contact`,
                className: "text-sm font-medium text-white hover:text-white/80 transition-colors py-2 whitespace-nowrap",
                children: y("nav.contact")
              }
            )
          ] }),
          /* @__PURE__ */ l.jsxs("div", { className: "flex flex-end items-center justify-center ml-4", children: [
            /* @__PURE__ */ l.jsxs("div", { className: "hidden xl:flex  items-center gap-4", children: [
              /* @__PURE__ */ l.jsx(kf, {}),
              /* @__PURE__ */ l.jsxs("div", { className: fe("flex items-center gap-4 transition-all transition-discrete delay-0"), children: [
                /* @__PURE__ */ l.jsx(
                  pe,
                  {
                    href: `${pn}/login`,
                    className: "text-sm font-medium text-white hover:text-white/80 transition-colors whitespace-nowrap",
                    children: y("nav.login")
                  }
                ),
                /* @__PURE__ */ l.jsx(pe, { href: `${pn}/register`, children: /* @__PURE__ */ l.jsx(Je, { className: "bg-white text-[#8220ff] font-medium px-4 lg:px-6 py-2 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: y("nav.get_started") }) })
              ] })
            ] }),
            /* @__PURE__ */ l.jsx(
              "button",
              {
                className: "flex xl:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white",
                onClick: () => o(!a),
                "aria-label": a ? "Close menu" : "Open menu",
                "aria-expanded": a,
                children: a ? /* @__PURE__ */ l.jsxs(
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
                      /* @__PURE__ */ l.jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
                      /* @__PURE__ */ l.jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
                    ]
                  }
                ) : /* @__PURE__ */ l.jsxs(
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
                      /* @__PURE__ */ l.jsx("line", { x1: "4", x2: "20", y1: "12", y2: "12" }),
                      /* @__PURE__ */ l.jsx("line", { x1: "4", x2: "20", y1: "6", y2: "6" }),
                      /* @__PURE__ */ l.jsx("line", { x1: "4", x2: "20", y1: "18", y2: "18" })
                    ]
                  }
                )
              }
            )
          ] })
        ] }),
        s && /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/20 z-30",
              onClick: () => u(null),
              "aria-hidden": "true",
              style: { top: "64px" }
            }
          ),
          /* @__PURE__ */ l.jsx(
            "div",
            {
              className: "absolute left-0 right-0 top-16 z-40 bg-white shadow-xl border-t border-gray-100 transition-all duration-300 transform",
              onMouseEnter: () => I(s),
              onMouseLeave: C,
              role: "menu",
              "aria-labelledby": `menu-button-${s}`,
              children: /* @__PURE__ */ l.jsx("div", { className: "container mx-auto py-8 px-4 md:px-6 max-w-7xl", children: /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col md:flex-row", children: [
                /* @__PURE__ */ l.jsxs("div", { className: "w-full md:w-1/3 pr-0 md:pr-8 mb-6 md:mb-0 flex flex-col", children: [
                  /* @__PURE__ */ l.jsx("div", { className: "relative h-36 md:h-40 w-full rounded-lg overflow-hidden bg-white border border-gray-100 mb-4", children: /* @__PURE__ */ l.jsxs("div", { className: "absolute inset-0 flex items-center justify-center", children: [
                    s === "products" && /* @__PURE__ */ l.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ l.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ l.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ l.jsx(
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
                          /* @__PURE__ */ l.jsx("rect", { x: "40", y: "30", width: "320", height: "40", rx: "12", fill: "#8220ff", fillOpacity: "0.9" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "65", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "90", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "115", cy: "50", r: "8", fill: "white", fillOpacity: "0.6" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "40", y: "70", width: "80", height: "200", fill: "#f5f5f7" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "55", y: "90", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.7" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "55", y: "110", width: "40", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "55", y: "130", width: "45", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "55", y: "150", width: "35", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "55", y: "170", width: "50", height: "8", rx: "4", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "140", y: "90", width: "200", height: "70", rx: "8", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "155", y: "105", width: "170", height: "40", rx: "4", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "175", cy: "125", r: "15", fill: "#8220ff", fillOpacity: "0.8" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "200", y: "115", width: "110", height: "8", rx: "4", fill: "white" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "200", y: "130", width: "80", height: "6", rx: "3", fill: "white", fillOpacity: "0.7" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "140", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ l.jsx(
                            "path",
                            {
                              d: "M150 240 L170 220 L190 230 L210 200",
                              stroke: "#8220ff",
                              strokeWidth: "3",
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ l.jsx("circle", { cx: "170", cy: "220", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "190", cy: "230", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "210", cy: "200", r: "4", fill: "#8220ff" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "245", y: "180", width: "95", height: "80", rx: "8", fill: "#f0f0f5" }),
                          /* @__PURE__ */ l.jsx(
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
                          /* @__PURE__ */ l.jsx("circle", { cx: "293", cy: "220", r: "30", fill: "transparent", stroke: "#e0e0e5", strokeWidth: "8" }),
                          /* @__PURE__ */ l.jsx("text", { x: "283", y: "225", fontFamily: "Arial", fontSize: "12", fill: "#8220ff", fontWeight: "bold", children: "75%" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "320", cy: "50", r: "12", fill: "white", fillOpacity: "0.2" }),
                          /* @__PURE__ */ l.jsx("path", { d: "M314 50 L320 56 L326 50", stroke: "white", strokeWidth: "2", strokeLinecap: "round" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "30", cy: "30", r: "5", fill: "#8220ff", fillOpacity: "0.5" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "350", cy: "280", r: "7", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "370", cy: "50", r: "4", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "20", cy: "250", r: "6", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ l.jsx(
                            "path",
                            {
                              d: "M15 100 C30 120, 20 150, 35 160",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ l.jsx(
                            "path",
                            {
                              d: "M370 120 C350 140, 360 170, 380 190",
                              stroke: "#8220ff",
                              strokeWidth: "1.5",
                              strokeDasharray: "4 4"
                            }
                          ),
                          /* @__PURE__ */ l.jsx("defs", { children: /* @__PURE__ */ l.jsxs(
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
                                /* @__PURE__ */ l.jsx("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                                /* @__PURE__ */ l.jsx(
                                  "feColorMatrix",
                                  {
                                    in: "SourceAlpha",
                                    type: "matrix",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  }
                                ),
                                /* @__PURE__ */ l.jsx("feOffset", { dy: "4" }),
                                /* @__PURE__ */ l.jsx("feGaussianBlur", { stdDeviation: "6" }),
                                /* @__PURE__ */ l.jsx(
                                  "feColorMatrix",
                                  {
                                    type: "matrix",
                                    values: "0 0 0 0 0.51 0 0 0 0 0.125 0 0 0 0 1 0 0 0 0.15 0"
                                  }
                                ),
                                /* @__PURE__ */ l.jsx("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow" }),
                                /* @__PURE__ */ l.jsx("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow", result: "shape" })
                              ]
                            }
                          ) })
                        ]
                      }
                    ) }),
                    s === "solutions" && /* @__PURE__ */ l.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ l.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ l.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ l.jsx(
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
                          /* @__PURE__ */ l.jsx("circle", { cx: "100", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "300", cy: "150", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "200", cy: "70", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "200", cy: "230", r: "25", fill: "white", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ l.jsx("path", { d: "M125 150 L160 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ l.jsx("path", { d: "M240 150 L275 150", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ l.jsx("path", { d: "M200 95 L200 130", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ l.jsx("path", { d: "M200 170 L200 205", stroke: "#8220ff", strokeWidth: "2" }),
                          /* @__PURE__ */ l.jsx("polygon", { points: "158,145 158,155 168,150", fill: "#8220ff" }),
                          /* @__PURE__ */ l.jsx("polygon", { points: "242,145 242,155 232,150", fill: "#8220ff" }),
                          /* @__PURE__ */ l.jsx("polygon", { points: "195,128 205,128 200,138", fill: "#8220ff" }),
                          /* @__PURE__ */ l.jsx("polygon", { points: "195,172 205,172 200,162", fill: "#8220ff" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "100", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "300", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "200", cy: "70", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "200", cy: "230", r: "10", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "200", cy: "150", r: "20", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "200", cy: "150", r: "10", fill: "#8220ff", fillOpacity: "0.4" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "150", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "250", cy: "100", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "150", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "250", cy: "200", r: "5", fill: "#8220ff", fillOpacity: "0.2" })
                        ]
                      }
                    ) }),
                    s === "resources" && /* @__PURE__ */ l.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ l.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ l.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ l.jsxs("g", { filter: "url(#resourcesShadow)", children: [
                            /* @__PURE__ */ l.jsx("rect", { x: "140", y: "80", width: "120", height: "140", rx: "4", fill: "url(#bookGradient)" }),
                            /* @__PURE__ */ l.jsx(
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
                            /* @__PURE__ */ l.jsx("path", { d: "M160 100 L240 100", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ l.jsx("path", { d: "M160 120 L240 120", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ l.jsx("path", { d: "M160 140 L240 140", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ l.jsx("path", { d: "M160 160 L240 160", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ l.jsx("path", { d: "M160 180 L240 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.3" }),
                            /* @__PURE__ */ l.jsx("path", { d: "M230 80 L230 110 L220 100 L210 110 L210 80", fill: "#8220ff", fillOpacity: "0.3" }),
                            /* @__PURE__ */ l.jsxs("g", { transform: "translate(-10, -10) rotate(-5)", children: [
                              /* @__PURE__ */ l.jsx(
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
                              /* @__PURE__ */ l.jsx("path", { d: "M90 135 L150 135", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ l.jsx("path", { d: "M90 150 L150 150", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ l.jsx("path", { d: "M90 165 L150 165", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" }),
                              /* @__PURE__ */ l.jsx("path", { d: "M90 180 L120 180", stroke: "#8220ff", strokeWidth: "1", strokeOpacity: "0.5" })
                            ] }),
                            /* @__PURE__ */ l.jsxs("g", { transform: "translate(10, -10) rotate(5)", children: [
                              /* @__PURE__ */ l.jsx(
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
                              /* @__PURE__ */ l.jsx("polygon", { points: "270,140 290,150 270,160", fill: "#8220ff" }),
                              /* @__PURE__ */ l.jsx(
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
                          /* @__PURE__ */ l.jsx("circle", { cx: "200", cy: "50", r: "15", fill: "#8220ff", fillOpacity: "0.1" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "200", cy: "50", r: "10", fill: "#8220ff", fillOpacity: "0.2" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "200", cy: "50", r: "5", fill: "#8220ff", fillOpacity: "0.3" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "150", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "250", cy: "60", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "120", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "280", cy: "150", r: "2", fill: "#8220ff", fillOpacity: "0.6" }),
                          /* @__PURE__ */ l.jsxs("defs", { children: [
                            /* @__PURE__ */ l.jsxs(
                              "linearGradient",
                              {
                                id: "bookGradient",
                                x1: "140",
                                y1: "80",
                                x2: "260",
                                y2: "220",
                                gradientUnits: "userSpaceOnUse",
                                children: [
                                  /* @__PURE__ */ l.jsx("stop", { offset: "0%", stopColor: "#f0f0f5" }),
                                  /* @__PURE__ */ l.jsx("stop", { offset: "100%", stopColor: "#ffffff" })
                                ]
                              }
                            ),
                            /* @__PURE__ */ l.jsx("filter", { id: "resourcesShadow", x: "-10%", y: "-10%", width: "120%", height: "120%", children: /* @__PURE__ */ l.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "4", floodColor: "#8220ff", floodOpacity: "0.2" }) })
                          ] })
                        ]
                      }
                    ) }),
                    s === "developers" && /* @__PURE__ */ l.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ l.jsxs(
                      "svg",
                      {
                        width: "100%",
                        height: "100%",
                        viewBox: "0 0 400 300",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          /* @__PURE__ */ l.jsx("rect", { width: "400", height: "300", fill: "white" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "20", y: "20", width: "280", height: "200", rx: "8", fill: "#1E1E1E" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "20", y: "20", width: "280", height: "30", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "40", cy: "35", r: "6", fill: "#FF5F56" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "60", cy: "35", r: "6", fill: "#FFBD2E" }),
                          /* @__PURE__ */ l.jsx("circle", { cx: "80", cy: "35", r: "6", fill: "#27C93F" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "40", y: "70", width: "120", height: "10", rx: "2", fill: "#9CDCFE", fillOpacity: "0.7" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "40", y: "90", width: "180", height: "10", rx: "2", fill: "#CE9178", fillOpacity: "0.7" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "60", y: "110", width: "200", height: "10", rx: "2", fill: "#6A9955", fillOpacity: "0.7" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "60", y: "130", width: "160", height: "10", rx: "2", fill: "#569CD6", fillOpacity: "0.7" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "40", y: "150", width: "140", height: "10", rx: "2", fill: "#DCDCAA", fillOpacity: "0.7" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "60", y: "170", width: "180", height: "10", rx: "2", fill: "#4EC9B0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "40", y: "190", width: "160", height: "10", rx: "2", fill: "#C586C0", fillOpacity: "0.7" }),
                          /* @__PURE__ */ l.jsx("text", { x: "30", y: "75", fontSize: "10", fill: "#858585", children: "1" }),
                          /* @__PURE__ */ l.jsx("text", { x: "30", y: "95", fontSize: "10", fill: "#858585", children: "2" }),
                          /* @__PURE__ */ l.jsx("text", { x: "30", y: "115", fontSize: "10", fill: "#858585", children: "3" }),
                          /* @__PURE__ */ l.jsx("text", { x: "30", y: "135", fontSize: "10", fill: "#858585", children: "4" }),
                          /* @__PURE__ */ l.jsx("text", { x: "30", y: "155", fontSize: "10", fill: "#858585", children: "5" }),
                          /* @__PURE__ */ l.jsx("text", { x: "30", y: "175", fontSize: "10", fill: "#858585", children: "6" }),
                          /* @__PURE__ */ l.jsx("text", { x: "30", y: "195", fontSize: "10", fill: "#858585", children: "7" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "80", y: "130", width: "310", height: "130", rx: "8", fill: "#1E1E1E", filter: "url(#shadow)" }),
                          /* @__PURE__ */ l.jsx("rect", { x: "80", y: "130", width: "310", height: "25", rx: "8", fill: "#333333" }),
                          /* @__PURE__ */ l.jsx("text", { x: "235", y: "147", fontSize: "12", fill: "#FFFFFF", textAnchor: "middle", children: "Terminal" }),
                          /* @__PURE__ */ l.jsx("text", { x: "90", y: "170", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ git clone https://github.com/plexicus/plexicus-sdk.git" }),
                          /* @__PURE__ */ l.jsx("text", { x: "90", y: "185", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "Cloning into 'plexicus-sdk'..." }),
                          /* @__PURE__ */ l.jsx("text", { x: "90", y: "200", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "remote: Counting objects: 100% (1234/1234)" }),
                          /* @__PURE__ */ l.jsx("text", { x: "90", y: "215", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ cd plexicus-sdk && npm install" }),
                          /* @__PURE__ */ l.jsx("text", { x: "90", y: "230", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "added 1024 packages in 4.2s" }),
                          /* @__PURE__ */ l.jsx("text", { x: "90", y: "245", fontSize: "9", fill: "#CCCCCC", fontFamily: "monospace", children: "$ npm run dev" }),
                          /* @__PURE__ */ l.jsxs("g", { transform: "translate(320, 240) scale(0.8)", children: [
                            /* @__PURE__ */ l.jsx("circle", { cx: "0", cy: "0", r: "25", fill: "white" }),
                            /* @__PURE__ */ l.jsx(
                              "path",
                              {
                                d: "M0 -20c-11.046 0-20 8.954-20 20 0 8.837 5.732 16.338 13.678 18.98 1 .184 1.365-.434 1.365-.964 0-.476-.018-1.733-.027-3.4-5.564 1.21-6.736-2.68-6.736-2.68-.91-2.31-2.22-2.924-2.22-2.924-1.815-1.24.137-1.215.137-1.215 2.006.14 3.06 2.06 3.06 2.06 1.783 3.057 4.675 2.174 5.815 1.663.18-1.29.697-2.174 1.268-2.674-4.442-.505-9.112-2.22-9.112-9.87 0-2.18.78-3.964 2.06-5.36-.207-.505-.893-2.54.195-5.29 0 0 1.68-.538 5.5 2.05 1.595-.443 3.305-.665 5.005-.673 1.7.008 3.41.23 5.005.673 3.82-2.588 5.495-2.05 5.495-2.05 1.09 2.75.405 4.785.198 5.29 1.28 1.396 2.055 3.18 2.055 5.36 0 7.67-4.677 9.36-9.13 9.855.718.62 1.358 1.842 1.358 3.712 0 2.68-.024 4.84-.024 5.5 0 .535.36 1.16 1.375.964C14.275 16.33 20 8.83 20 0 20-11.046 11.046-20 0-20z",
                                fill: "#1B1F23",
                                transform: "translate(0, 0)"
                              }
                            )
                          ] }),
                          /* @__PURE__ */ l.jsx("defs", { children: /* @__PURE__ */ l.jsx("filter", { id: "shadow", x: "0", y: "0", width: "400", height: "300", filterUnits: "userSpaceOnUse", children: /* @__PURE__ */ l.jsx("feDropShadow", { dx: "2", dy: "4", stdDeviation: "3", floodColor: "#000000", floodOpacity: "0.3" }) }) })
                        ]
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ l.jsxs("div", { className: "bg-gray-50 rounded-lg p-4", children: [
                    /* @__PURE__ */ l.jsx("h3", { className: "text-xl font-bold text-[#8220ff]", children: Z[s].title }),
                    /* @__PURE__ */ l.jsx("p", { className: "text-gray-700", children: y(s === "products" ? "nav.product.explore" : s === "solutions" ? "nav.solutions.explore" : "nav.resources.explore") })
                  ] })
                ] }),
                /* @__PURE__ */ l.jsx("div", { className: "w-full md:w-2/3", children: /* @__PURE__ */ l.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: Z[s].items.filter(($) => s !== "resources" || !$.title.startsWith("vs ")).map(($, G) => /* @__PURE__ */ l.jsxs(
                  pe,
                  {
                    href: $.href,
                    className: "flex items-start p-4 rounded-lg hover:bg-gray-50 transition-colors group",
                    onClick: () => u(null),
                    children: [
                      /* @__PURE__ */ l.jsx("div", { className: "w-12 h-12 bg-[#8220ff]/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#8220ff]/20 transition-colors", children: wr.cloneElement($.icon, { width: 16, height: 16 }) }),
                      /* @__PURE__ */ l.jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ l.jsx("h4", { className: "font-semibold text-gray-900 group-hover:text-[#8220ff] transition-colors", children: $.title }),
                        /* @__PURE__ */ l.jsx("p", { className: "text-sm text-gray-600 mt-1", children: $.description })
                      ] })
                    ]
                  },
                  G
                )) }) })
              ] }) })
            }
          )
        ] }),
        f && P && a && /* @__PURE__ */ l.jsx("div", { className: "fixed inset-0 bg-black/20 z-40 xl:hidden", onClick: () => o(!1) }),
        f && P && /* @__PURE__ */ l.jsx(
          "div",
          {
            className: `xl:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300  delay-500 ease-in-out ${a ? "translate-x-0" : "translate-x-full"}`,
            style: { top: "64px", height: "calc(100vh - 64px)", overflow: "auto" },
            children: /* @__PURE__ */ l.jsxs("div", { className: "overflow-y-auto h-full p-4 pb-20", children: [
              /* @__PURE__ */ l.jsx(
                Xu,
                {
                  currentLang: e,
                  webUrl: E,
                  blogUrl: K,
                  isOpen: m,
                  onClose: () => x(!1)
                }
              ),
              /* @__PURE__ */ l.jsxs("div", { className: "space-y-4", children: [
                Object.entries(Z).map(([$, G]) => {
                  const D = c.includes($);
                  return /* @__PURE__ */ l.jsxs("div", { className: "space-y-2 bg-[#8220ff]/10 px-2 rounded-md", children: [
                    /* @__PURE__ */ l.jsxs(
                      "button",
                      {
                        onClick: () => g($),
                        className: "flex items-center justify-between w-full py-2",
                        children: [
                          /* @__PURE__ */ l.jsx("h3", { className: "font-semibold", children: G.title }),
                          /* @__PURE__ */ l.jsx(
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
                              className: `transition-transform duration-200 ${D ? "transform rotate-180" : ""}`,
                              children: /* @__PURE__ */ l.jsx("path", { d: "m6 9 6 6 6-6" })
                            }
                          )
                        ]
                      }
                    ),
                    D && /* @__PURE__ */ l.jsx("div", { className: "grid grid-cols-1 gap-2 py-2", children: G.items.map((J, Y) => /* @__PURE__ */ l.jsxs(
                      pe,
                      {
                        href: J.href,
                        className: "flex items-center p-2 rounded-md bg-gray-50 hover:bg-gray-100",
                        onClick: () => o(!1),
                        children: [
                          /* @__PURE__ */ l.jsx("div", { className: "w-8 h-8 bg-primary/10 rounded-md mr-2 flex items-center justify-center", children: wr.cloneElement(J.icon, { width: 16, height: 16 }) }),
                          /* @__PURE__ */ l.jsx("span", { className: "text-sm", children: J.title })
                        ]
                      },
                      Y
                    )) })
                  ] }, $);
                }),
                /* @__PURE__ */ l.jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ l.jsx(pe, { href: `${pn}/register`, className: "flex items-center justify-center", children: /* @__PURE__ */ l.jsx(Je, { className: "text-white w-full bg-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: y("nav.get_started") }) }),
                  /* @__PURE__ */ l.jsx(
                    pe,
                    {
                      href: `${pn}/login`,
                      className: "text-sm font-medium transition-colors whitespace-nowrap flex items-center justify-center",
                      children: /* @__PURE__ */ l.jsx(Je, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: y("nav.login") })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    pe,
                    {
                      href: `${E}${r}pricing`,
                      className: " py-2 text-sm font-medium flex items-center justify-center",
                      onClick: () => o(!1),
                      children: /* @__PURE__ */ l.jsx(Je, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: y("nav.pricing") })
                    }
                  ),
                  /* @__PURE__ */ l.jsx(
                    pe,
                    {
                      href: `${E}${r}contact`,
                      className: " py-2 text-sm font-medium flex items-center justify-center",
                      onClick: () => o(!1),
                      children: /* @__PURE__ */ l.jsx(Je, { className: "bg-gray-100 w-full text-[#8220ff] font-medium px-4 rounded-md shadow-md hover:shadow-xl hover:bg-purple-200 hover:scale-105 transition-all duration-300 border border-white/30 whitespace-nowrap ", children: y("nav.contact") })
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
}, xf = "English", _f = "German", wf = "French", jf = "Japanese", Sf = "Italian", Pf = "Dutch", Cf = "Swedish", zf = "Spanish", Af = "Norwegian", Mf = "Danish", Ef = "Finnish", Of = "Portuguese", If = "Chinese (Simplified)", Nf = "Arabic", Tf = "Hebrew", $f = "Turkish", Lf = "Polish", Rf = "Czech", Df = "Indonesian", Bf = {
  en: xf,
  de: _f,
  fr: wf,
  ja: jf,
  it: Sf,
  nl: Pf,
  sv: Cf,
  es: zf,
  no: Af,
  da: Mf,
  fi: Ef,
  pt: Of,
  zh: If,
  ar: Nf,
  he: Tf,
  tr: $f,
  pl: Lf,
  cs: Rf,
  id: Df
};
function Ff() {
  var n;
  const e = (r) => {
    localStorage.setItem("scrollPosition", String(window == null ? void 0 : window.scrollY));
    const i = window.location.pathname;
    let o = i.match(/^\/([a-z]{2})\//) ? i.replace(/^\/[a-z]{2}\//, `/${r}/`) : `/${r}${i}`;
    o = o.startsWith("/en/") ? o.replace(/^\/en/, "") : o, window.location.href = o;
  };
  xe(() => {
    const r = localStorage.getItem("scrollPosition");
    r && (window.scrollTo(0, parseInt(r)), localStorage.removeItem("scrollPosition"));
  }, []);
  const t = ((n = window.location.pathname.match(/^\/([a-z]{2})\//)) == null ? void 0 : n[1]) || "en";
  return /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs("div", { className: "relative inline-flex items-center w-[150px]", children: [
    /* @__PURE__ */ l.jsx(xl, { className: "absolute  text-muted-foreground pointer-events-none", style: { left: 1, paddingLeft: 6, width: 22 } }),
    /* @__PURE__ */ l.jsx(
      "select",
      {
        defaultValue: t,
        className: "appearance-none w-full  pr-6 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring dark:bg-gray-900 dark:text-white dark:border-gray-700",
        style: { paddingLeft: 30 },
        onChange: (r) => e(r.target.value),
        children: Object.entries(Bf).map(([r, i]) => /* @__PURE__ */ l.jsx("option", { value: r, children: i }, r))
      }
    ),
    /* @__PURE__ */ l.jsx(
      "svg",
      {
        className: "pointer-events-none absolute  top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        style: { right: 3, marginRight: 4 },
        children: /* @__PURE__ */ l.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" })
      }
    )
  ] }) });
}
/*!
* CookieConsent 3.1.0
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
const Ps = "opt-in", Kt = "opt-out", Cs = "show--consent", zs = "show--preferences", Ia = "disable--interaction", $n = "data-category", ae = "div", we = "button", je = "aria-hidden", Yt = "btn-group", ge = "click", Pt = "data-role", fi = "consentModal", hi = "preferencesModal";
class Gf {
  constructor() {
    this.t = { mode: Ps, revision: 0, autoShow: !0, lazyHtmlGeneration: !0, autoClearCookies: !0, manageScriptTags: !0, hideFromBots: !0, cookie: { name: "cc_cookie", expiresAfterDays: 182, domain: "", path: "/", secure: !0, sameSite: "Lax" } }, this.o = { i: {}, l: "", _: {}, u: {}, p: {}, m: [], v: !1, h: null, C: null, S: null, M: "", D: !0, T: !1, k: !1, A: !1, N: !1, H: [], V: !1, I: !0, L: [], j: !1, F: "", P: !1, O: [], R: [], B: [], $: [], G: !1, J: !1, U: !1, q: [], K: [], W: [], X: {}, Y: {}, Z: {}, ee: {}, te: {}, oe: [] }, this.ne = { ae: {}, se: {} }, this.ce = {}, this.re = { ie: "cc:onFirstConsent", le: "cc:onConsent", de: "cc:onChange", fe: "cc:onModalShow", _e: "cc:onModalHide", ue: "cc:onModalReady" };
  }
}
const O = new Gf(), As = (e, t) => e.indexOf(t), oe = (e, t) => As(e, t) !== -1, Yn = (e) => Array.isArray(e), Lt = (e) => typeof e == "string", Lr = (e) => !!e && typeof e == "object" && !Yn(e), Ae = (e) => typeof e == "function", tt = (e) => Object.keys(e), Ms = (e) => Array.from(new Set(e)), Ln = () => document.activeElement, _t = (e) => e.preventDefault(), gi = (e, t) => e.querySelectorAll(t), V = (e) => {
  const t = document.createElement(e);
  return e === we && (t.type = e), t;
}, ne = (e, t, n) => e.setAttribute(t, n), hr = (e, t, n) => {
  e.removeAttribute(n ? "data-" + t : t);
}, zn = (e, t, n) => e.getAttribute(n ? "data-" + t : t), H = (e, t) => e.appendChild(t), se = (e, t) => e.classList.add(t), ve = (e, t) => se(e, "cm__" + t), ie = (e, t) => se(e, "pm__" + t), Ue = (e, t) => e.classList.remove(t), Ve = (e) => {
  if (typeof e != "object") return e;
  if (e instanceof Date) return new Date(e.getTime());
  let t = Array.isArray(e) ? [] : {};
  for (let n in e) {
    let r = e[n];
    t[n] = Ve(r);
  }
  return t;
}, Na = (e, t) => dispatchEvent(new CustomEvent(e, { detail: t })), ce = (e, t, n, r) => {
  e.addEventListener(t, n), r && O.o.m.push({ pe: e, ge: t, me: n });
}, Wf = () => {
  const e = O.t.cookie.expiresAfterDays;
  return Ae(e) ? e(O.o.F) : e;
}, gr = (e, t) => {
  const n = e || [], r = t || [];
  return n.filter(((i) => !oe(r, i))).concat(r.filter(((i) => !oe(n, i))));
}, Es = (e) => {
  O.o.R = Ms(e), O.o.F = (() => {
    let t = "custom";
    const { R: n, O: r, B: i } = O.o, a = n.length;
    return a === r.length ? t = "all" : a === i.length && (t = "necessary"), t;
  })();
}, Os = (e, t, n, r) => {
  const i = "accept-", { show: a, showPreferences: o, hide: s, hidePreferences: u, acceptCategory: c } = t, p = e || document, d = (S) => gi(p, `[data-cc="${S}"]`), g = (S, _) => {
    _t(S), c(_), u(), s();
  }, f = d("show-preferencesModal"), h = d("show-consentModal"), m = d(i + "all"), x = d(i + "necessary"), P = d(i + "custom"), y = O.t.lazyHtmlGeneration;
  for (const S of f) ne(S, "aria-haspopup", "dialog"), ce(S, ge, ((_) => {
    _t(_), o();
  })), y && (ce(S, "mouseenter", ((_) => {
    _t(_), O.o.N || n(t, r);
  }), !0), ce(S, "focus", (() => {
    O.o.N || n(t, r);
  })));
  for (let S of h) ne(S, "aria-haspopup", "dialog"), ce(S, ge, ((_) => {
    _t(_), a(!0);
  }), !0);
  for (let S of m) ce(S, ge, ((_) => {
    g(_, "all");
  }), !0);
  for (let S of P) ce(S, ge, ((_) => {
    g(_);
  }), !0);
  for (let S of x) ce(S, ge, ((_) => {
    g(_, []);
  }), !0);
}, Ie = (e, t) => {
  e && (t && (e.tabIndex = -1), e.focus(), t && e.removeAttribute("tabindex"));
}, Is = (e, t) => {
  const n = (r) => {
    r.target.removeEventListener("transitionend", n), r.propertyName === "opacity" && getComputedStyle(e).opacity === "1" && Ie(((i) => i === 1 ? O.ne.be : O.ne.ve)(t));
  };
  ce(e, "transitionend", n);
};
let Ta;
const Ns = (e) => {
  clearTimeout(Ta), e ? se(O.ne.ye, Ia) : Ta = setTimeout((() => {
    Ue(O.ne.ye, Ia);
  }), 500);
}, Hf = ["M 19.5 4.5 L 4.5 19.5 M 4.5 4.501 L 19.5 19.5", "M 3.572 13.406 L 8.281 18.115 L 20.428 5.885", "M 21.999 6.94 L 11.639 17.18 L 2.001 6.82 "], nn = (e = 0, t = 1.5) => `<svg viewBox="0 0 24 24" stroke-width="${t}"><path d="${Hf[e]}"/></svg>`, Ts = (e) => {
  const t = O.ne, n = O.o;
  ((r) => {
    const i = r === t.he, a = n.i.disablePageInteraction ? t.ye : i ? t.Ce : t.ye;
    ce(a, "keydown", ((o) => {
      if (o.key !== "Tab" || !(i ? n.k && !n.A : n.A)) return;
      const s = Ln(), u = i ? n.q : n.K;
      u.length !== 0 && (o.shiftKey ? s !== u[0] && r.contains(s) || (_t(o), Ie(u[1])) : s !== u[1] && r.contains(s) || (_t(o), Ie(u[0])));
    }), !0);
  })(e);
}, Vf = ["[href]", we, "input", "details", "[tabindex]"].map(((e) => e + ':not([tabindex="-1"])')).join(","), $s = (e) => {
  const { o: t, ne: n } = O, r = (i, a) => {
    const o = gi(i, Vf);
    a[0] = o[0], a[1] = o[o.length - 1];
  };
  e === 1 && t.T && r(n.he, t.q), e === 2 && t.N && r(n.we, t.K);
}, Ne = (e, t, n) => {
  const { de: r, le: i, ie: a, _e: o, ue: s, fe: u } = O.ce, c = O.re;
  if (t) {
    const d = { modalName: t };
    return e === c.fe ? Ae(u) && u(d) : e === c._e ? Ae(o) && o(d) : (d.modal = n, Ae(s) && s(d)), Na(e, d);
  }
  const p = { cookie: O.o.p };
  e === c.ie ? Ae(a) && a(Ve(p)) : e === c.le ? Ae(i) && i(Ve(p)) : (p.changedCategories = O.o.L, p.changedServices = O.o.ee, Ae(r) && r(Ve(p))), Na(e, Ve(p));
}, Rn = (e, t) => {
  try {
    return e();
  } catch (n) {
    return !t && console.warn("CookieConsent:", n), !1;
  }
}, Rr = (e) => {
  const { Y: t, ee: n, O: r, X: i, oe: a, p: o, L: s } = O.o;
  for (const d of r) {
    const g = n[d] || t[d] || [];
    for (const f of g) {
      const h = i[d][f];
      if (!h) continue;
      const { onAccept: m, onReject: x } = h;
      !h.Se && oe(t[d], f) ? (h.Se = !0, Ae(m) && m()) : h.Se && !oe(t[d], f) && (h.Se = !1, Ae(x) && x());
    }
  }
  if (!O.t.manageScriptTags) return;
  const u = a, c = e || o.categories || [], p = (d, g) => {
    if (g >= d.length) return;
    const f = a[g];
    if (f.xe) return p(d, g + 1);
    const h = f.Me, m = f.De, x = f.Te, P = oe(c, m), y = !!x && oe(t[m], x);
    if (!x && !f.ke && P || !x && f.ke && !P && oe(s, m) || x && !f.ke && y || x && f.ke && !y && oe(n[m] || [], x)) {
      f.xe = !0;
      const S = zn(h, "type", !0);
      hr(h, "type", !!S), hr(h, $n);
      let _ = zn(h, "src", !0);
      _ && hr(h, "src", !0);
      const j = V("script");
      j.textContent = h.innerHTML;
      for (const { nodeName: z } of h.attributes) ne(j, z, h[z] || zn(h, z));
      S && (j.type = S), _ ? j.src = _ : _ = h.src;
      const I = !!_ && (!S || ["text/javascript", "module"].includes(S));
      if (I && (j.onload = j.onerror = () => {
        p(d, ++g);
      }), h.replaceWith(j), I) return;
    }
    p(d, ++g);
  };
  p(u, 0);
}, An = "bottom", Dr = "left", Ls = "center", mi = "right", mr = "inline", Rs = "wide", Ds = "pm--", vr = ["middle", "top", An], $a = [Dr, Ls, mi], Kf = { box: { Ee: [Rs, mr], Ae: vr, Ne: $a, He: An, Ve: mi }, cloud: { Ee: [mr], Ae: vr, Ne: $a, He: An, Ve: Ls }, bar: { Ee: [mr], Ae: vr.slice(1), Ne: [], He: An, Ve: "" } }, Uf = { box: { Ee: [], Ae: [], Ne: [], He: "", Ve: "" }, bar: { Ee: [Rs], Ae: [], Ne: [Dr, mi], He: "", Ve: Dr } }, Bs = (e) => {
  const t = O.o.i.guiOptions, n = t && t.consentModal, r = t && t.preferencesModal;
  e === 0 && La(O.ne.he, Kf, n, "cm--", "box", "cm"), e === 1 && La(O.ne.we, Uf, r, Ds, "box", "pm");
}, La = (e, t, n, r, i, a) => {
  e.className = a;
  const o = n && n.layout, s = n && n.position, u = n && n.flipButtons, c = !n || n.equalWeightButtons !== !1, p = o && o.split(" ") || [], d = p[0], g = p[1], f = d in t ? d : i, h = t[f], m = oe(h.Ee, g) && g, x = s && s.split(" ") || [], P = x[0], y = r === Ds ? x[0] : x[1], S = oe(h.Ae, P) ? P : h.He, _ = oe(h.Ne, y) ? y : h.Ve, j = (z) => {
    z && se(e, r + z);
  };
  j(f), j(m), j(S), j(_), u && j("flip");
  const I = a + "__btn--secondary";
  if (a === "cm") {
    const { Ie: z, Le: C } = O.ne;
    z && (c ? Ue(z, I) : se(z, I)), C && (c ? Ue(C, I) : se(C, I));
  } else {
    const { je: z } = O.ne;
    z && (c ? Ue(z, I) : se(z, I));
  }
}, rn = (e, t) => {
  const n = O.o, r = O.ne, { hide: i, hidePreferences: a, acceptCategory: o } = e, s = (_) => {
    o(_), a(), i();
  }, u = n.u && n.u.preferencesModal;
  if (!u) return;
  const c = u.title, p = u.closeIconLabel, d = u.acceptAllBtn, g = u.acceptNecessaryBtn, f = u.savePreferencesBtn, h = u.sections || [], m = d || g || f;
  if (r.Fe) r.Pe = V(ae), ie(r.Pe, "body");
  else {
    r.Fe = V(ae), se(r.Fe, "pm-wrapper");
    const _ = V("div");
    se(_, "pm-overlay"), H(r.Fe, _), ce(_, ge, a), r.we = V(ae), se(r.we, "pm"), ne(r.we, "role", "dialog"), ne(r.we, je, !0), ne(r.we, "aria-modal", !0), ne(r.we, "aria-labelledby", "pm__title"), ce(r.ye, "keydown", ((j) => {
      j.keyCode === 27 && a();
    }), !0), r.Oe = V(ae), ie(r.Oe, "header"), r.Re = V("h2"), ie(r.Re, "title"), r.Re.id = "pm__title", r.Be = V(we), ie(r.Be, "close-btn"), ne(r.Be, "aria-label", u.closeIconLabel || ""), ce(r.Be, ge, a), r.$e = V("span"), r.$e.innerHTML = nn(), H(r.Be, r.$e), r.Ge = V(ae), ie(r.Ge, "body"), r.Je = V(ae), ie(r.Je, "footer");
    var x = V(ae);
    se(x, "btns");
    var P = V(ae), y = V(ae);
    ie(P, Yt), ie(y, Yt), H(r.Je, P), H(r.Je, y), H(r.Oe, r.Re), H(r.Oe, r.Be), r.ve = V(ae), ne(r.ve, "tabIndex", -1), H(r.we, r.ve), H(r.we, r.Oe), H(r.we, r.Ge), m && H(r.we, r.Je), H(r.Fe, r.we);
  }
  let S;
  c && (r.Re.innerHTML = c, p && ne(r.Be, "aria-label", p)), h.forEach(((_, j) => {
    const I = _.title, z = _.description, C = _.linkedCategory, T = C && n.P[C], E = _.cookieTable, K = E && E.body, Z = E && E.caption, $ = K && K.length > 0, G = !!T, D = G && n.X[C], J = Lr(D) && tt(D) || [], Y = G && (!!z || !!$ || tt(D).length > 0);
    var W = V(ae);
    if (ie(W, "section"), Y || z) {
      var w = V(ae);
      ie(w, "section-desc-wrapper");
    }
    let v = J.length;
    if (Y && v > 0) {
      const B = V(ae);
      ie(B, "section-services");
      for (const F of J) {
        const R = D[F], X = R && R.label || F, le = V(ae), de = V(ae), ke = V(ae), ze = V(ae);
        ie(le, "service"), ie(ze, "service-title"), ie(de, "service-header"), ie(ke, "service-icon");
        const _e = Ra(X, F, T, !0, C);
        ze.innerHTML = X, H(de, ke), H(de, ze), H(le, de), H(le, _e), H(B, le);
      }
      H(w, B);
    }
    if (I) {
      var A = V(ae), k = V(G ? we : ae);
      if (ie(A, "section-title-wrapper"), ie(k, "section-title"), k.innerHTML = I, H(A, k), G) {
        const B = V("span");
        B.innerHTML = nn(2, 3.5), ie(B, "section-arrow"), H(A, B), W.className += "--toggle";
        const F = Ra(I, C, T);
        let R = u.serviceCounterLabel;
        if (v > 0 && Lt(R)) {
          let X = V("span");
          ie(X, "badge"), ie(X, "service-counter"), ne(X, je, !0), ne(X, "data-servicecounter", v), R && (R = R.split("|"), R = R.length > 1 && v > 1 ? R[1] : R[0], ne(X, "data-counterlabel", R)), X.innerHTML = v + (R ? " " + R : ""), H(k, X);
        }
        if (Y) {
          ie(W, "section--expandable");
          var M = C + "-desc";
          ne(k, "aria-expanded", !1), ne(k, "aria-controls", M);
        }
        H(A, F);
      } else ne(k, "role", "heading"), ne(k, "aria-level", "3");
      H(W, A);
    }
    if (z) {
      var N = V("p");
      ie(N, "section-desc"), N.innerHTML = z, H(w, N);
    }
    if (Y && (ne(w, je, "true"), w.id = M, ((B, F, R) => {
      ce(k, ge, (() => {
        F.classList.contains("is-expanded") ? (Ue(F, "is-expanded"), ne(R, "aria-expanded", "false"), ne(B, je, "true")) : (se(F, "is-expanded"), ne(R, "aria-expanded", "true"), ne(B, je, "false"));
      }));
    })(w, W, k), $)) {
      const B = V("table"), F = V("thead"), R = V("tbody");
      if (Z) {
        const _e = V("caption");
        ie(_e, "table-caption"), _e.innerHTML = Z, B.appendChild(_e);
      }
      ie(B, "section-table"), ie(F, "table-head"), ie(R, "table-body");
      const X = E.headers, le = tt(X), de = r.Ue.createDocumentFragment(), ke = V("tr");
      for (const _e of le) {
        const ft = X[_e], Be = V("th");
        Be.id = "cc__row-" + ft + j, ne(Be, "scope", "col"), ie(Be, "table-th"), Be.innerHTML = ft, H(de, Be);
      }
      H(ke, de), H(F, ke);
      const ze = r.Ue.createDocumentFragment();
      for (const _e of K) {
        const ft = V("tr");
        ie(ft, "table-tr");
        for (const Be of le) {
          const Wi = X[Be], gl = _e[Be], Bt = V("td"), Hi = V(ae);
          ie(Bt, "table-td"), ne(Bt, "data-column", Wi), ne(Bt, "headers", "cc__row-" + Wi + j), Hi.insertAdjacentHTML("beforeend", gl), H(Bt, Hi), H(ft, Bt);
        }
        H(ze, ft);
      }
      H(R, ze), H(B, F), H(B, R), H(w, B);
    }
    (Y || z) && H(W, w);
    const L = r.Pe || r.Ge;
    G ? (S || (S = V(ae), ie(S, "section-toggles")), S.appendChild(W)) : S = null, H(L, S || W);
  })), d && (r.ze || (r.ze = V(we), ie(r.ze, "btn"), ne(r.ze, Pt, "all"), H(P, r.ze), ce(r.ze, ge, (() => s("all")))), r.ze.innerHTML = d), g && (r.je || (r.je = V(we), ie(r.je, "btn"), ne(r.je, Pt, "necessary"), H(P, r.je), ce(r.je, ge, (() => s([])))), r.je.innerHTML = g), f && (r.qe || (r.qe = V(we), ie(r.qe, "btn"), ie(r.qe, "btn--secondary"), ne(r.qe, Pt, "save"), H(y, r.qe), ce(r.qe, ge, (() => s()))), r.qe.innerHTML = f), r.Pe && (r.we.replaceChild(r.Pe, r.Ge), r.Ge = r.Pe), Bs(1), n.N || (n.N = !0, Ne(O.re.ue, hi, r.we), t(e), H(r.Ce, r.Fe), Ts(r.we), setTimeout((() => se(r.Fe, "cc--anim")), 100)), $s(2);
};
function Ra(e, t, n, r, i) {
  const a = O.o, o = O.ne, s = V("label"), u = V("input"), c = V("span"), p = V("span"), d = V("span"), g = V("span"), f = V("span");
  if (g.innerHTML = nn(1, 3), f.innerHTML = nn(0, 3), u.type = "checkbox", se(s, "section__toggle-wrapper"), se(u, "section__toggle"), se(g, "toggle__icon-on"), se(f, "toggle__icon-off"), se(c, "toggle__icon"), se(p, "toggle__icon-circle"), se(d, "toggle__label"), ne(c, je, "true"), r ? (se(s, "toggle-service"), ne(u, $n, i), o.se[i][t] = u) : o.ae[t] = u, r ? ((h) => {
    ce(u, "change", (() => {
      const m = o.se[h], x = o.ae[h];
      a.Z[h] = [];
      for (let P in m) {
        const y = m[P];
        y.checked && a.Z[h].push(y.value);
      }
      x.checked = a.Z[h].length > 0;
    }));
  })(i) : ((h) => {
    ce(u, ge, (() => {
      const m = o.se[h], x = u.checked;
      a.Z[h] = [];
      for (let P in m) m[P].checked = x, x && a.Z[h].push(P);
    }));
  })(t), u.value = t, d.textContent = e.replace(/<.*>.*<\/.*>/gm, ""), H(p, f), H(p, g), H(c, p), a.D) (n.readOnly || n.enabled) && (u.checked = !0);
  else if (r) {
    const h = a.Y[i];
    u.checked = n.readOnly || oe(h, t);
  } else oe(a.R, t) && (u.checked = !0);
  return n.readOnly && (u.disabled = !0), H(s, u), H(s, c), H(s, d), s;
}
const yr = () => {
  const e = V("span");
  return O.ne.Ke || (O.ne.Ke = e), e;
}, Fs = (e, t) => {
  const n = O.o, r = O.ne, { hide: i, showPreferences: a, acceptCategory: o } = e, s = n.u && n.u.consentModal;
  if (!s) return;
  const u = s.acceptAllBtn, c = s.acceptNecessaryBtn, p = s.showPreferencesBtn, d = s.closeIconLabel, g = s.footer, f = s.label, h = s.title, m = (P) => {
    i(), o(P);
  };
  if (!r.Qe) {
    r.Qe = V(ae), r.he = V(ae), r.We = V(ae), r.Xe = V(ae), r.Ye = V(ae), se(r.Qe, "cm-wrapper"), se(r.he, "cm"), ve(r.We, "body"), ve(r.Xe, "texts"), ve(r.Ye, "btns"), ne(r.he, "role", "dialog"), ne(r.he, "aria-modal", "true"), ne(r.he, je, "false"), ne(r.he, "aria-describedby", "cm__desc"), f ? ne(r.he, "aria-label", f) : h && ne(r.he, "aria-labelledby", "cm__title");
    const P = "box", y = n.i.guiOptions, S = y && y.consentModal, _ = (S && S.layout || P).split(" ")[0] === P;
    h && d && _ && (r.Le || (r.Le = V(we), r.Le.innerHTML = nn(), ve(r.Le, "btn"), ve(r.Le, "btn--close"), ce(r.Le, ge, (() => {
      m([]);
    })), H(r.We, r.Le)), ne(r.Le, "aria-label", d)), H(r.We, r.Xe), (u || c || p) && H(r.We, r.Ye), r.be = V(ae), ne(r.be, "tabIndex", -1), H(r.he, r.be), H(r.he, r.We), H(r.Qe, r.he);
  }
  h && (r.Ze || (r.Ze = V("h2"), r.Ze.className = r.Ze.id = "cm__title", H(r.Xe, r.Ze)), r.Ze.innerHTML = h);
  let x = s.description;
  if (x && (n.V && (x = x.replace("{{revisionMessage}}", n.I ? "" : s.revisionMessage || "")), r.et || (r.et = V("p"), r.et.className = r.et.id = "cm__desc", H(r.Xe, r.et)), r.et.innerHTML = x), u && (r.tt || (r.tt = V(we), H(r.tt, yr()), ve(r.tt, "btn"), ne(r.tt, Pt, "all"), ce(r.tt, ge, (() => {
    m("all");
  }))), r.tt.firstElementChild.innerHTML = u), c && (r.Ie || (r.Ie = V(we), H(r.Ie, yr()), ve(r.Ie, "btn"), ne(r.Ie, Pt, "necessary"), ce(r.Ie, ge, (() => {
    m([]);
  }))), r.Ie.firstElementChild.innerHTML = c), p && (r.ot || (r.ot = V(we), H(r.ot, yr()), ve(r.ot, "btn"), ve(r.ot, "btn--secondary"), ne(r.ot, Pt, "show"), ce(r.ot, "mouseenter", (() => {
    n.N || rn(e, t);
  })), ce(r.ot, ge, a)), r.ot.firstElementChild.innerHTML = p), r.nt || (r.nt = V(ae), ve(r.nt, Yt), u && H(r.nt, r.tt), c && H(r.nt, r.Ie), (u || c) && H(r.We, r.nt), H(r.Ye, r.nt)), r.ot && !r.st && (r.st = V(ae), r.Ie && r.tt ? (ve(r.st, Yt), H(r.st, r.ot), H(r.Ye, r.st)) : (H(r.nt, r.ot), ve(r.nt, Yt + "--uneven"))), g) {
    if (!r.ct) {
      let P = V(ae), y = V(ae);
      r.ct = V(ae), ve(P, "footer"), ve(y, "links"), ve(r.ct, "link-group"), H(y, r.ct), H(P, y), H(r.he, P);
    }
    r.ct.innerHTML = g;
  }
  Bs(0), n.T || (n.T = !0, Ne(O.re.ue, fi, r.he), t(e), H(r.Ce, r.Qe), Ts(r.he), setTimeout((() => se(r.Qe, "cc--anim")), 100)), $s(1), Os(r.We, e, rn, t);
}, Gs = (e) => {
  if (!Lt(e)) return null;
  if (e in O.o._) return e;
  let t = e.slice(0, 2);
  return t in O.o._ ? t : null;
}, Ws = () => O.o.l || O.o.i.language.default, Hs = (e) => {
  e && (O.o.l = e);
}, qf = async (e) => {
  const t = O.o;
  let n = Gs(e) ? e : Ws(), r = t._[n];
  if (Lt(r) ? r = await (async (i) => {
    try {
      return await (await fetch(i)).json();
    } catch (a) {
      return console.error(a), !1;
    }
  })(r) : Ae(r) && (r = await r()), !r) throw `Could not load translation for the '${n}' language`;
  return t.u = r, Hs(n), !0;
}, Yf = () => {
  let e = O.o.i.language.rtl, t = O.ne.Ce;
  e && t && (Yn(e) || (e = [e]), oe(e, O.o.l) ? se(t, "cc--rtl") : Ue(t, "cc--rtl"));
}, Zt = () => {
  const e = O.ne;
  if (e.Ce) return;
  e.Ce = V(ae), e.Ce.id = "cc-main", e.Ce.setAttribute("data-nosnippet", ""), Yf();
  let t = O.o.i.root;
  t && Lt(t) && (t = document.querySelector(t)), (t || e.Ue.body).appendChild(e.Ce);
}, Zf = (e) => Rn((() => localStorage.removeItem(e))), Da = (e, t) => {
  if (t instanceof RegExp) return e.filter(((n) => t.test(n)));
  {
    const n = As(e, t);
    return n > -1 ? [e[n]] : [];
  }
}, Jf = (e) => {
  const { hostname: t, protocol: n } = location, { name: r, path: i, domain: a, sameSite: o, useLocalStorage: s, secure: u } = O.t.cookie, c = 864e5 * Wf(), p = /* @__PURE__ */ new Date();
  p.setTime(p.getTime() + c), O.o.p.expirationTime = p.getTime();
  const d = JSON.stringify(O.o.p);
  let g = r + "=" + encodeURIComponent(d) + (c !== 0 ? "; expires=" + p.toUTCString() : "") + "; Path=" + i + "; SameSite=" + o;
  oe(t, ".") && (g += "; Domain=" + a), u && n === "https:" && (g += "; Secure"), s ? ((f, h) => {
    Rn((() => localStorage.setItem(f, h)));
  })(r, d) : document.cookie = g, O.o.p;
}, Ba = (e, t, n) => {
  if (e.length === 0) return;
  const r = n || O.t.cookie.domain, i = t || O.t.cookie.path, a = r.slice(0, 4) === "www.", o = a && r.substring(4), s = (u, c) => {
    c && c.slice(0, 1) !== "." && (c = "." + c), document.cookie = u + "=; path=" + i + (c ? "; domain=" + c : "") + "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };
  for (const u of e) s(u, n), n || s(u, r), a && s(u, o);
}, Xf = (e) => {
  const t = O.t.cookie.name, n = O.t.cookie.useLocalStorage;
  return ((i, a) => {
    let o;
    return o = Rn((() => JSON.parse(a ? i : decodeURIComponent(i))), !0) || {}, o;
  })(n ? (r = t, Rn((() => localStorage.getItem(r))) || "") : Qf(t), n);
  var r;
}, Qf = (e, t) => {
  const n = document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]+)");
  return n ? n.pop() : "";
}, eh = (e) => {
  const t = document.cookie.split(/;\s*/), n = [];
  for (const r of t) {
    let i = r.split("=")[0];
    n.push(i);
  }
  return n;
}, th = (e, t = []) => {
  ((n, r) => {
    const { O: i, R: a, B: o, N: s, Z: u, $: c, X: p } = O.o;
    let d = [];
    if (n) {
      Yn(n) ? d.push(...n) : Lt(n) && (d = n === "all" ? i : [n]);
      for (const g of i) u[g] = oe(d, g) ? tt(p[g]) : [];
    } else d = [...a, ...c], s && (d = (() => {
      const g = O.ne.ae;
      if (!g) return [];
      let f = [];
      for (let h in g) g[h].checked && f.push(h);
      return f;
    })());
    d = d.filter(((g) => !oe(i, g) || !oe(r, g))), d.push(...o), Es(d);
  })(e, t), (() => {
    const n = O.o, { Z: r, B: i, Y: a, X: o, O: s } = n, u = s;
    n.te = Ve(a);
    for (const c of u) {
      const p = o[c], d = tt(p), g = r[c] && r[c].length > 0, f = oe(i, c);
      if (d.length !== 0) {
        if (a[c] = [], f) a[c].push(...d);
        else if (g) {
          const h = r[c];
          a[c].push(...h);
        } else a[c] = n.Z[c];
        a[c] = Ms(a[c]);
      }
    }
  })(), (() => {
    const n = O.o;
    n.L = O.t.mode === Kt && n.D ? gr(n.$, n.R) : gr(n.R, n.p.categories);
    let r = n.L.length > 0, i = !1;
    for (const u of n.O) n.ee[u] = gr(n.Y[u], n.te[u]), n.ee[u].length > 0 && (i = !0);
    const a = O.ne.ae;
    for (const u in a) a[u].checked = oe(n.R, u);
    for (const u of n.O) {
      const c = O.ne.se[u], p = n.Y[u];
      for (const d in c) c[d].checked = oe(p, d);
    }
    n.C || (n.C = /* @__PURE__ */ new Date()), n.M || (n.M = ("10000000-1000-4000-8000" + -1e11).replace(/[018]/g, ((u) => (u ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> u / 4).toString(16)))), n.p = { categories: Ve(n.R), revision: O.t.revision, data: n.h, consentTimestamp: n.C.toISOString(), consentId: n.M, services: Ve(n.Y), languageCode: O.o.l }, n.S && (n.p.lastConsentTimestamp = n.S.toISOString());
    let o = !1;
    const s = r || i;
    (n.D || s) && (n.D && (n.D = !1, o = !0), n.S = n.S ? /* @__PURE__ */ new Date() : n.C, n.p.lastConsentTimestamp = n.S.toISOString(), Jf(), O.t.autoClearCookies && (o || s) && ((u) => {
      const c = O.o, p = eh(), d = ((g) => {
        const f = O.o;
        return (g ? f.O : f.L).filter(((h) => {
          const m = f.P[h];
          return !!m && !m.readOnly && !!m.autoClear;
        }));
      })(u);
      for (const g in c.ee) for (const f of c.ee[g]) {
        const h = c.X[g][f].cookies;
        if (!oe(c.Y[g], f) && h) for (const m of h) {
          const x = Da(p, m.name);
          Ba(x, m.path, m.domain);
        }
      }
      for (const g of d) {
        const f = c.P[g].autoClear, h = f && f.cookies || [], m = oe(c.L, g), x = !oe(c.R, g), P = m && x;
        if (u ? x : P) {
          f.reloadPage && P && (c.j = !0);
          for (const y of h) {
            const S = Da(p, y.name);
            Ba(S, y.path, y.domain);
          }
        }
      }
    })(o), Rr()), o && (Ne(O.re.ie), Ne(O.re.le), O.t.mode === Ps) || (s && Ne(O.re.de), n.j && (n.j = !1, location.reload()));
  })();
}, nh = (e) => {
  const t = O.o.D ? [] : O.o.R;
  return oe(t, e);
}, rh = (e, t) => {
  const n = O.o.D ? [] : O.o.Y[t] || [];
  return oe(n, e);
}, Vs = (e) => {
  const { ne: t, o: n } = O;
  if (!n.k) {
    if (!n.T) {
      if (!e) return;
      Fs(vi, Zt);
    }
    n.k = !0, n.J = Ln(), n.v && Ns(!0), Is(t.he, 1), se(t.ye, Cs), ne(t.he, je, "false"), setTimeout((() => {
      Ie(O.ne.be);
    }), 100), Ne(O.re.fe, fi);
  }
}, ih = () => {
  const { ne: e, o: t, re: n } = O;
  t.k && (t.k = !1, t.v && Ns(), Ie(e.Ke, !0), Ue(e.ye, Cs), ne(e.he, je, "true"), Ie(t.J), t.J = null, Ne(n._e, fi));
}, Ks = () => {
  const e = O.o;
  e.A || (e.N || rn(vi, Zt), e.A = !0, e.k ? e.U = Ln() : e.J = Ln(), Is(O.ne.we, 2), se(O.ne.ye, zs), ne(O.ne.we, je, "false"), setTimeout((() => {
    Ie(O.ne.ve);
  }), 100), Ne(O.re.fe, hi));
}, ah = () => {
  const e = O.o;
  e.A && (e.A = !1, (() => {
    const t = Us(), n = O.o.P, r = O.ne.ae, i = O.ne.se, a = (o) => oe(O.o.$, o);
    for (const o in r) {
      const s = !!n[o].readOnly;
      r[o].checked = s || (t ? nh(o) : a(o));
      for (const u in i[o]) i[o][u].checked = s || (t ? rh(u, o) : a(o));
    }
  })(), Ie(O.ne.$e, !0), Ue(O.ne.ye, zs), ne(O.ne.we, je, "true"), e.k ? (Ie(e.U), e.U = null) : (Ie(e.J), e.J = null), Ne(O.re._e, hi));
};
var vi = { show: Vs, hide: ih, showPreferences: Ks, hidePreferences: ah, acceptCategory: th };
const Us = () => !O.o.D, oh = async (e) => {
  const { o: t, t: n, re: r } = O, i = window;
  if (!i._ccRun) {
    if (i._ccRun = !0, ((s) => {
      const { ne: u, t: c, o: p } = O, d = c, g = p, { cookie: f } = d, h = O.ce, m = s.cookie, x = s.categories, P = tt(x) || [], y = navigator, S = document;
      u.Ue = S, u.ye = S.documentElement, f.domain = location.hostname, g.i = s, g.P = x, g.O = P, g._ = s.language.translations, g.v = !!s.disablePageInteraction, h.ie = s.onFirstConsent, h.le = s.onConsent, h.de = s.onChange, h._e = s.onModalHide, h.fe = s.onModalShow, h.ue = s.onModalReady;
      const { mode: _, autoShow: j, lazyHtmlGeneration: I, autoClearCookies: z, revision: C, manageScriptTags: T, hideFromBots: E } = s;
      _ === Kt && (d.mode = _), typeof z == "boolean" && (d.autoClearCookies = z), typeof T == "boolean" && (d.manageScriptTags = T), typeof C == "number" && C >= 0 && (d.revision = C, g.V = !0), typeof j == "boolean" && (d.autoShow = j), typeof I == "boolean" && (d.lazyHtmlGeneration = I), E === !1 && (d.hideFromBots = !1), d.hideFromBots === !0 && y && (g.G = y.userAgent && /bot|crawl|spider|slurp|teoma/i.test(y.userAgent) || y.webdriver), Lr(m) && (d.cookie = { ...f, ...m }), d.autoClearCookies, g.V, d.manageScriptTags, ((K) => {
        const { P: Z, X: $, Y: G, Z: D, B: J } = O.o;
        for (let Y of K) {
          const W = Z[Y], w = W.services || {}, v = Lr(w) && tt(w) || [];
          $[Y] = {}, G[Y] = [], D[Y] = [], W.readOnly && (J.push(Y), G[Y] = v), O.ne.se[Y] = {};
          for (let A of v) {
            const k = w[A];
            k.Se = !1, $[Y][A] = k;
          }
        }
      })(P), (() => {
        if (!O.t.manageScriptTags) return;
        const K = O.o, Z = gi(document, "script[" + $n + "]");
        for (const $ of Z) {
          let G = zn($, $n), D = $.dataset.service || "", J = !1;
          if (G && G.charAt(0) === "!" && (G = G.slice(1), J = !0), D.charAt(0) === "!" && (D = D.slice(1), J = !0), oe(K.O, G) && (K.oe.push({ Me: $, xe: !1, ke: J, De: G, Te: D }), D)) {
            const Y = K.X[G];
            Y[D] || (Y[D] = { Se: !1 });
          }
        }
      })(), Hs((() => {
        const K = O.o.i.language.autoDetect;
        if (K) {
          const Z = { browser: navigator.language, document: document.documentElement.lang }, $ = Gs(Z[K]);
          if ($) return $;
        }
        return Ws();
      })());
    })(e), t.G) return;
    (() => {
      const s = O.o, u = O.t, c = Xf(), { categories: p, services: d, consentId: g, consentTimestamp: f, lastConsentTimestamp: h, data: m, revision: x } = c, P = Yn(p);
      s.p = c, s.M = g;
      const y = !!g && Lt(g);
      s.C = f, s.C && (s.C = new Date(f)), s.S = h, s.S && (s.S = new Date(h)), s.h = m !== void 0 ? m : null, s.V && y && x !== u.revision && (s.I = !1), s.D = !(y && s.I && s.C && s.S && P), u.cookie.useLocalStorage && !s.D && (s.D = (/* @__PURE__ */ new Date()).getTime() > (c.expirationTime || 0), s.D && Zf(u.cookie.name)), s.D, (() => {
        const S = O.o;
        for (const _ of S.O) {
          const j = S.P[_];
          if (j.readOnly || j.enabled) {
            S.$.push(_);
            const I = S.X[_] || {};
            for (let z in I) S.Z[_].push(z), S.i.mode === Kt && S.Y[_].push(z);
          }
        }
      })(), s.D ? u.mode === Kt && (s.R = [...s.$]) : (s.Y = { ...s.Y, ...d }, s.Z = { ...s.Y }, Es([...s.B, ...p]));
    })();
    const o = Us();
    if (!await qf()) return !1;
    if (Os(null, a = vi, rn, Zt), O.o.D && Fs(a, Zt), O.t.lazyHtmlGeneration || rn(a, Zt), n.autoShow && !o && Vs(!0), o) return Rr(), Ne(r.le);
    n.mode === Kt && Rr(t.$);
  }
  var a;
};
function Fa(e, t, n, r, i) {
  for (t = t.split ? t.split(".") : t, r = 0; r < t.length; r++) e = e ? e[t[r]] : i;
  return e === i ? n : e;
}
var sh = "function", lh = "string", Se = "undefined", ch = "boolean", Dn = "object", uh = "array", dh = "number", ph = "symbol", fh = "null", qs = "any", Ys = "*", lt = "__", hh = "form", gh = "input", mh = "button", vh = "select", Bn = typeof process !== Se ? process : {};
Bn.env && Bn.env.NODE_ENV;
var Pe = typeof document !== Se;
Bn.versions != null && Bn.versions.node != null;
typeof Deno !== Se && Deno.core;
Pe && window.name === "nodejs" || typeof navigator !== Se && typeof navigator.userAgent !== Se && (navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom"));
function Zs(e, t) {
  return t.charAt(0)[e]() + t.slice(1);
}
var yh = Zs.bind(null, "toUpperCase"), bh = Zs.bind(null, "toLowerCase");
function kh(e) {
  return Js(e) ? yh(fh) : typeof e === Dn ? Sh(e) : Object.prototype.toString.call(e).slice(8, -1);
}
function Fn(e, t) {
  t === void 0 && (t = !0);
  var n = kh(e);
  return t ? bh(n) : n;
}
function sn(e, t) {
  return typeof t === e;
}
var Oe = sn.bind(null, sh), Ct = sn.bind(null, lh), wt = sn.bind(null, Se), xh = sn.bind(null, ch);
sn.bind(null, ph);
function Js(e) {
  return e === null;
}
function _h(e) {
  return Fn(e) === dh && !isNaN(e);
}
function wh(e) {
  return Fn(e) === uh;
}
function be(e) {
  if (!jh(e)) return !1;
  for (var t = e; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t;
}
function jh(e) {
  return e && (typeof e === Dn || e !== null);
}
function Sh(e) {
  return Oe(e.constructor) ? e.constructor.name : null;
}
function Ph(e) {
  return e instanceof Error || Ct(e.message) && e.constructor && _h(e.constructor.stackTraceLimit);
}
function Xs(e, t) {
  if (typeof t != "object" || Js(t)) return !1;
  if (t instanceof e) return !0;
  var n = Fn(new e(""));
  if (Ph(t)) for (; t; ) {
    if (Fn(t) === n) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
Xs.bind(null, TypeError);
Xs.bind(null, SyntaxError);
function Zn(e, t) {
  var n = e instanceof Element || e instanceof HTMLDocument;
  return n && t ? Ch(e, t) : n;
}
function Ch(e, t) {
  return t === void 0 && (t = ""), e && e.nodeName === t.toUpperCase();
}
function Jn(e) {
  var t = [].slice.call(arguments, 1);
  return function() {
    return e.apply(void 0, [].slice.call(arguments).concat(t));
  };
}
Jn(Zn, hh);
Jn(Zn, mh);
Jn(Zn, gh);
Jn(Zn, vh);
function Ga(e) {
  try {
    return decodeURIComponent(e.replace(/\+/g, " "));
  } catch {
    return null;
  }
}
function zh() {
  if (Pe) {
    var e = navigator, t = e.languages;
    return e.userLanguage || (t && t.length ? t[0] : e.language);
  }
}
function Ah() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
  }
}
function Mh(e) {
  return (function(t) {
    for (var n, r = /* @__PURE__ */ Object.create(null), i = /([^&=]+)=?([^&]*)/g; n = i.exec(t); ) {
      var a = Ga(n[1]), o = Ga(n[2]);
      if (a) if (a.substring(a.length - 2) === "[]") {
        var s = r[a = a.substring(0, a.length - 2)] || (r[a] = []);
        r[a] = Array.isArray(s) ? s : [], r[a].push(o);
      } else r[a] = o === "" || o;
    }
    for (var u in r) {
      var c = u.split("[");
      c.length > 1 && (Eh(r, c.map(function(p) {
        return p.replace(/[?[\]\\ ]/g, "");
      }), r[u]), delete r[u]);
    }
    return r;
  })((function(t) {
    return Pe && window.location.search.substring(1);
  })());
}
function Eh(e, t, n) {
  for (var r = t.length - 1, i = 0; i < r; ++i) {
    var a = t[i];
    if (a === "__proto__" || a === "constructor") break;
    a in e || (e[a] = {}), e = e[a];
  }
  e[t[r]] = n;
}
function Xn() {
  for (var e = "", t = 0, n = 4294967295 * Math.random() | 0; t++ < 36; ) {
    var r = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[t - 1], i = 15 & n;
    e += r == "-" || r == "4" ? r : (r == "x" ? i : 3 & i | 8).toString(16), n = t % 8 == 0 ? 4294967295 * Math.random() | 0 : n >> 4;
  }
  return e;
}
var nt = "global", Ot = lt + nt + lt, It = typeof self === Dn && self.self === self && self || typeof global === Dn && global[nt] === global && global || void 0;
function ct(e) {
  return It[Ot][e];
}
function ut(e, t) {
  return It[Ot][e] = t;
}
function Rt(e) {
  delete It[Ot][e];
}
function Dt(e, t, n) {
  var r;
  try {
    if (yi(e)) {
      var i = window[e];
      r = i[t].bind(i);
    }
  } catch {
  }
  return r || n;
}
It[Ot] || (It[Ot] = {});
var yn = {};
function yi(e) {
  if (typeof yn[e] !== Se) return yn[e];
  try {
    var t = window[e];
    t.setItem(Se, Se), t.removeItem(Se);
  } catch {
    return yn[e] = !1;
  }
  return yn[e] = !0;
}
function ee() {
  return ee = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ee.apply(null, arguments);
}
var He = "function", $e = "undefined", Jt = "reducer", Qs = "@@redux/", Br = Qs + "INIT", Oh = Qs + Math.random().toString(36), Wa = /* @__PURE__ */ (function() {
  return typeof Symbol === He && Symbol.observable || "@@observable";
})(), bn = " != " + He;
function el(e, t, n) {
  var r;
  if (typeof t === He && typeof n === $e && (n = t, t = void 0), typeof n !== $e) {
    if (typeof n !== He) throw new Error("enhancer" + bn);
    return n(el)(e, t);
  }
  if (typeof e !== He) throw new Error(Jt + bn);
  var i = e, a = t, o = [], s = o, u = !1;
  function c() {
    s === o && (s = o.slice());
  }
  function p() {
    return a;
  }
  function d(f) {
    if (typeof f !== He) throw new Error("Listener" + bn);
    var h = !0;
    return c(), s.push(f), function() {
      if (h) {
        h = !1, c();
        var m = s.indexOf(f);
        s.splice(m, 1);
      }
    };
  }
  function g(f) {
    if (!be(f)) throw new Error("Act != obj");
    if (typeof f.type === $e) throw new Error("ActType " + $e);
    if (u) throw new Error("Dispatch in " + Jt);
    try {
      u = !0, a = i(a, f);
    } finally {
      u = !1;
    }
    for (var h = o = s, m = 0; m < h.length; m++) (0, h[m])();
    return f;
  }
  return g({ type: Br }), (r = { dispatch: g, subscribe: d, getState: p, replaceReducer: function(f) {
    if (typeof f !== He) throw new Error("next " + Jt + bn);
    i = f, g({ type: Br });
  } })[Wa] = function() {
    var f, h = d;
    return (f = { subscribe: function(m) {
      if (typeof m != "object") throw new TypeError("Observer != obj");
      function x() {
        m.next && m.next(p());
      }
      return x(), { unsubscribe: h(x) };
    } })[Wa] = function() {
      return this;
    }, f;
  }, r;
}
function Ih(e, t) {
  var n = t && t.type;
  return "action " + (n && n.toString() || "?") + Jt + " " + e + " returns " + $e;
}
function Nt() {
  var e = [].slice.call(arguments);
  return e.length === 0 ? function(t) {
    return t;
  } : e.length === 1 ? e[0] : e.reduce(function(t, n) {
    return function() {
      return t(n.apply(void 0, [].slice.call(arguments)));
    };
  });
}
function Nh() {
  var e = arguments;
  return function(t) {
    return function(n, r, i) {
      var a, o = t(n, r, i), s = o.dispatch, u = { getState: o.getState, dispatch: function(c) {
        return s(c);
      } };
      return a = [].slice.call(e).map(function(c) {
        return c(u);
      }), ee({}, o, { dispatch: s = Nt.apply(void 0, a)(o.dispatch) });
    };
  };
}
var qe = lt + "anon_id", rt = lt + "user_id", zt = lt + "user_traits", Fr = "analytics", We = "userId", jt = "anonymousId", Mn = ["bootstrap", "params", "campaign", "initializeStart", "initialize", "initializeEnd", "ready", "resetStart", "reset", "resetEnd", "pageStart", "page", "pageEnd", "pageAborted", "trackStart", "track", "trackEnd", "trackAborted", "identifyStart", "identify", "identifyEnd", "identifyAborted", "userIdChanged", "registerPlugins", "enablePlugin", "disablePlugin", "online", "offline", "setItemStart", "setItem", "setItemEnd", "setItemAborted", "removeItemStart", "removeItem", "removeItemEnd", "removeItemAborted"], Gr = ["name", "EVENTS", "config", "loaded"], Q = Mn.reduce(function(e, t) {
  return e[t] = t, e;
}, { registerPluginType: function(e) {
  return "registerPlugin:" + e;
}, pluginReadyType: function(e) {
  return "ready:" + e;
} }), Ha = /^utm_/, Va = /^an_prop_/, Ka = /^an_trait_/;
function Th(e) {
  var t = e.storage.setItem;
  return function(n) {
    return function(r) {
      return function(i) {
        if (i.type === Q.bootstrap) {
          var a = i.params, o = i.user, s = i.persistedUser, u = i.initialUser, c = s.userId === o.userId;
          s.anonymousId !== o.anonymousId && t(qe, o.anonymousId), c || t(rt, o.userId), u.traits && t(zt, ee({}, c && s.traits ? s.traits : {}, u.traits));
          var p = Object.keys(i.params);
          if (p.length) {
            var d = a.an_uid, g = a.an_event, f = p.reduce(function(h, m) {
              if (m.match(Ha) || m.match(/^(d|g)clid/)) {
                var x = m.replace(Ha, "");
                h.campaign[x === "campaign" ? "name" : x] = a[m];
              }
              return m.match(Va) && (h.props[m.replace(Va, "")] = a[m]), m.match(Ka) && (h.traits[m.replace(Ka, "")] = a[m]), h;
            }, { campaign: {}, props: {}, traits: {} });
            n.dispatch(ee({ type: Q.params, raw: a }, f, d ? { userId: d } : {})), d && setTimeout(function() {
              return e.identify(d, f.traits);
            }, 0), g && setTimeout(function() {
              return e.track(g, f.props);
            }, 0), Object.keys(f.campaign).length && n.dispatch({ type: Q.campaign, campaign: f.campaign });
          }
        }
        return r(i);
      };
    };
  };
}
function $h(e) {
  return function(t, n) {
    if (t === void 0 && (t = {}), n === void 0 && (n = {}), n.type === Q.setItemEnd) {
      if (n.key === qe) return ee({}, t, { anonymousId: n.value });
      if (n.key === rt) return ee({}, t, { userId: n.value });
    }
    switch (n.type) {
      case Q.identify:
        return Object.assign({}, t, { userId: n.userId, traits: ee({}, t.traits, n.traits) });
      case Q.reset:
        return [rt, qe, zt].forEach(function(r) {
          e.removeItem(r);
        }), Object.assign({}, t, { userId: null, anonymousId: null, traits: {} });
      default:
        return t;
    }
  };
}
function Ua(e) {
  return { userId: e.getItem(rt), anonymousId: e.getItem(qe), traits: e.getItem(zt) };
}
var Wr = function(e) {
  return lt + "TEMP" + lt + e;
};
function Lh(e) {
  var t = e.storage, n = t.setItem, r = t.removeItem, i = t.getItem;
  return function(a) {
    return function(o) {
      return function(s) {
        var u = s.userId, c = s.traits, p = s.options;
        if (s.type === Q.reset && ([rt, zt, qe].forEach(function(f) {
          r(f);
        }), [We, jt, "traits"].forEach(function(f) {
          Rt(Wr(f));
        })), s.type === Q.identify) {
          i(qe) || n(qe, Xn());
          var d = i(rt), g = i(zt) || {};
          d && d !== u && a.dispatch({ type: Q.userIdChanged, old: { userId: d, traits: g }, new: { userId: u, traits: c }, options: p }), u && n(rt, u), c && n(zt, ee({}, g, c));
        }
        return o(s);
      };
    };
  };
}
var Ut = {};
function qa(e, t) {
  Ut[e] && Oe(Ut[e]) && (Ut[e](t), delete Ut[e]);
}
function tl(e, t, n) {
  return new Promise(function(r, i) {
    return t() ? r(e) : n < 1 ? i(ee({}, e, { queue: !0 })) : new Promise(function(a) {
      return setTimeout(a, 10);
    }).then(function(a) {
      return tl(e, t, n - 10).then(r, i);
    });
  });
}
function Rh(e) {
  return { abort: e };
}
function nl(e, t, n) {
  var r = {}, i = t(), a = e.getState(), o = a.plugins, s = a.queue, u = a.user;
  if (!a.context.offline && s && s.actions && s.actions.length) {
    var c = s.actions.reduce(function(d, g, f) {
      return o[g.plugin].loaded ? (d.process.push(g), d.processIndex.push(f)) : (d.requeue.push(g), d.requeueIndex.push(f)), d;
    }, { processIndex: [], process: [], requeue: [], requeueIndex: [] });
    if (c.processIndex && c.processIndex.length) {
      c.processIndex.forEach(function(d) {
        var g = s.actions[d], f = g.plugin, h = g.payload.type, m = i[f][h];
        if (m && Oe(m)) {
          var x, P = (function(_, j) {
            return _ === void 0 && (_ = {}), j === void 0 && (j = {}), [We, jt].reduce(function(I, z) {
              return _.hasOwnProperty(z) && j[z] && j[z] !== _[z] && (I[z] = j[z]), I;
            }, _);
          })(g.payload, u), y = r[P.meta.rid];
          if (!y && (x = m({ payload: P, config: o[f].config, instance: n, abort: Rh })) && be(x) && x.abort) return void (r[P.meta.rid] = !0);
          if (!y) {
            var S = h + ":" + f;
            e.dispatch(ee({}, P, { type: S, _: { called: S, from: "queueDrain" } }));
          }
        }
      });
      var p = s.actions.filter(function(d, g) {
        return !~c.processIndex.indexOf(g);
      });
      s.actions = p;
    }
  }
}
var br = function(e) {
  var t = e.data, n = e.action, r = e.instance, i = e.state, a = e.allPlugins, o = e.allMatches, s = e.store, u = e.EVENTS;
  try {
    var c = i.plugins, p = i.context, d = n.type, g = d.match(At), f = t.exact.map(function(x) {
      return x.pluginName;
    });
    g && (f = o.during.map(function(x) {
      return x.pluginName;
    }));
    var h = /* @__PURE__ */ (function(x, P) {
      return function(y, S, _) {
        var j = S.config, I = S.name, z = I + "." + y.type;
        _ && (z = _.event);
        var C = y.type.match(At) ? /* @__PURE__ */ (function(T, E, K, Z, $) {
          return function(G, D) {
            var J = Z ? Z.name : T, Y = D && an(D) ? D : K;
            if (Z && (!(Y = D && an(D) ? D : [T]).includes(T) || Y.length !== 1)) throw new Error("Method " + E + " can only abort " + T + " plugin. " + JSON.stringify(Y) + " input valid");
            return ee({}, $, { abort: { reason: G, plugins: Y, caller: E, _: J } });
          };
        })(I, z, P, _, y) : /* @__PURE__ */ (function(T, E) {
          return function() {
            throw new Error(T.type + " action not cancellable. Remove abort in " + E);
          };
        })(y, z);
        return { payload: Dh(y), instance: x, config: j || {}, abort: C };
      };
    })(r, f), m = t.exact.reduce(function(x, P) {
      var y = P.pluginName, S = P.methodName, _ = !1;
      return S.match(/^initialize/) || S.match(/^reset/) || (_ = !c[y].loaded), p.offline && S.match(/^(page|track|identify)/) && (_ = !0), x["" + y] = _, x;
    }, {});
    return Promise.resolve(t.exact.reduce(function(x, P, y) {
      var S = P.pluginName;
      return Promise.resolve(x).then(function(_) {
        function j() {
          return Promise.resolve(_);
        }
        var I = (function() {
          if (t.namespaced && t.namespaced[S]) return Promise.resolve(t.namespaced[S].reduce(function(z, C, T) {
            return Promise.resolve(z).then(function(E) {
              return C.method && Oe(C.method) ? ((function(G, D) {
                var J = to(G);
                if (J && J.name === D) {
                  var Y = to(J.method);
                  throw new Error([D + " plugin is calling method " + G, "Plugins cant call self", "Use " + J.method + " " + (Y ? "or " + Y.method : "") + " in " + D + " plugin insteadof " + G].join(`
`));
                }
              })(C.methodName, C.pluginName), Promise.resolve(C.method({ payload: E, instance: r, abort: (K = E, Z = S, $ = C.pluginName, function(G, D) {
                return ee({}, K, { abort: { reason: G, plugins: D || [Z], caller: d, from: $ || Z } });
              }), config: Ja(C.pluginName, c, a), plugins: c })).then(function(G) {
                var D = be(G) ? G : {};
                return Promise.resolve(ee({}, E, D));
              })) : E;
              var K, Z, $;
            });
          }, Promise.resolve(n))).then(function(z) {
            _[S] = z;
          });
          _[S] = n;
        })();
        return I && I.then ? I.then(j) : j();
      });
    }, Promise.resolve({}))).then(function(x) {
      return Promise.resolve(t.exact.reduce(function(P, y, S) {
        try {
          var _ = t.exact.length === S + 1, j = y.pluginName, I = a[j];
          return Promise.resolve(P).then(function(z) {
            var C = x[j] ? x[j] : {};
            if (g && (C = z), xr(C, j)) return kr({ data: C, method: d, instance: r, pluginName: j, store: s }), Promise.resolve(z);
            if (xr(z, j)) return _ && kr({ data: z, method: d, instance: r, store: s }), Promise.resolve(z);
            if (m.hasOwnProperty(j) && m[j] === !0) return s.dispatch({ type: "queue", plugin: j, payload: C, _: { called: "queue", from: "queueMechanism" } }), Promise.resolve(z);
            var T = h(x[j], a[j]);
            return Promise.resolve(I[d]({ abort: T.abort, payload: C, instance: r, config: Ja(j, c, a), plugins: c })).then(function(E) {
              var K = be(E) ? E : {}, Z = ee({}, z, K), $ = x[j];
              if (xr($, j)) kr({ data: $, method: d, instance: r, pluginName: j, store: s });
              else {
                var G = d + ":" + j;
                (G.match(/:/g) || []).length < 2 && !d.match(Ya) && !d.match(Za) && r.dispatch(ee({}, g ? Z : C, { type: G, _: { called: G, from: "submethod" } }));
              }
              return Promise.resolve(Z);
            });
          });
        } catch (z) {
          return Promise.reject(z);
        }
      }, Promise.resolve(n))).then(function(P) {
        if (!(d.match(At) || d.match(/^registerPlugin/) || d.match(Za) || d.match(Ya) || d.match(/^params/) || d.match(/^userIdChanged/))) {
          if (u.plugins.includes(d), P._ && P._.originalAction === d) return P;
          var y = ee({}, P, { _: { originalAction: P.type, called: P.type, from: "engineEnd" } });
          rl(P, t.exact.length) && !d.match(/End$/) && (y = ee({}, y, { type: P.type + "Aborted" })), s.dispatch(y);
        }
        return P;
      });
    });
  } catch (x) {
    return Promise.reject(x);
  }
}, At = /Start$/, Ya = /^bootstrap/, Za = /^ready/;
function kr(e) {
  var t = e.pluginName, n = e.method + "Aborted" + (t ? ":" + t : "");
  e.store.dispatch(ee({}, e.data, { type: n, _: { called: n, from: "abort" } }));
}
function Ja(e, t, n) {
  var r = t[e] || n[e];
  return r && r.config ? r.config : {};
}
function Xa(e, t) {
  return t.reduce(function(n, r) {
    return r[e] ? n.concat({ methodName: e, pluginName: r.name, method: r[e] }) : n;
  }, []);
}
function Qa(e, t) {
  var n = e.replace(At, ""), r = t ? ":" + t : "";
  return ["" + e + r, "" + n + r, n + "End" + r];
}
function xr(e, t) {
  var n = e.abort;
  return !!n && (n === !0 || eo(n, t) || n && eo(n.plugins, t));
}
function rl(e, t) {
  var n = e.abort;
  if (!n) return !1;
  if (n === !0 || Ct(n)) return !0;
  var r = n.plugins;
  return an(n) && n.length === t || an(r) && r.length === t;
}
function an(e) {
  return Array.isArray(e);
}
function eo(e, t) {
  return !(!e || !an(e)) && e.includes(t);
}
function to(e) {
  var t = e.match(/(.*):(.*)/);
  return !!t && { method: t[1], name: t[2] };
}
function Dh(e) {
  return Object.keys(e).reduce(function(t, n) {
    return n === "type" || (t[n] = be(e[n]) ? Object.assign({}, e[n]) : e[n]), t;
  }, {});
}
function Bh(e, t, n) {
  var r = {};
  return function(i) {
    return function(a) {
      return function(o) {
        try {
          var s, u = function(_) {
            return s ? _ : a(d);
          }, c = o.type, p = o.plugins, d = o;
          if (o.abort) return Promise.resolve(a(o));
          if (c === Q.enablePlugin && i.dispatch({ type: Q.initializeStart, plugins: p, disabled: [], fromEnable: !0, meta: o.meta }), c === Q.disablePlugin && setTimeout(function() {
            return qa(o.meta.rid, { payload: o });
          }, 0), c === Q.initializeEnd) {
            var g = t(), f = Object.keys(g), h = f.filter(function(_) {
              return p.includes(_);
            }).map(function(_) {
              return g[_];
            }), m = [], x = [], P = o.disabled, y = h.map(function(_) {
              var j = _.loaded, I = _.name, z = _.config;
              return tl(_, function() {
                return j({ config: z });
              }, 1e4).then(function(C) {
                return r[I] || (i.dispatch({ type: Q.pluginReadyType(I), name: I, events: Object.keys(_).filter(function(T) {
                  return !Gr.includes(T);
                }) }), r[I] = !0), m = m.concat(I), _;
              }).catch(function(C) {
                if (C instanceof Error) throw new Error(C);
                return x = x.concat(C.name), C;
              });
            });
            Promise.all(y).then(function(_) {
              var j = { plugins: m, failed: x, disabled: P };
              setTimeout(function() {
                f.length === y.length + P.length && i.dispatch(ee({}, { type: Q.ready }, j));
              }, 0);
            });
          }
          var S = (function() {
            if (c !== Q.bootstrap) return /^ready:([^:]*)$/.test(c) && setTimeout(function() {
              return nl(i, t, e);
            }, 0), Promise.resolve((function(_, j, I, z, C) {
              try {
                var T = Oe(j) ? j() : j, E = _.type, K = E.replace(At, "");
                if (_._ && _._.called) return Promise.resolve(_);
                var Z = I.getState(), $ = (J = T, (Y = Z.plugins) === void 0 && (Y = {}), (W = _.options) === void 0 && (W = {}), Object.keys(J).filter(function(w) {
                  var v = W.plugins || {};
                  return xh(v[w]) ? v[w] : v.all !== !1 && (!Y[w] || Y[w].enabled !== !1);
                }).map(function(w) {
                  return J[w];
                }));
                E === Q.initializeStart && _.fromEnable && ($ = Object.keys(Z.plugins).filter(function(w) {
                  var v = Z.plugins[w];
                  return _.plugins.includes(w) && !v.initialized;
                }).map(function(w) {
                  return T[w];
                }));
                var G = $.map(function(w) {
                  return w.name;
                }), D = (function(w, v) {
                  var A = Qa(w).map(function(k) {
                    return Xa(k, v);
                  });
                  return v.reduce(function(k, M) {
                    var N = M.name, L = Qa(w, N).map(function(X) {
                      return Xa(X, v);
                    }), B = L[0], F = L[1], R = L[2];
                    return B.length && (k.beforeNS[N] = B), F.length && (k.duringNS[N] = F), R.length && (k.afterNS[N] = R), k;
                  }, { before: A[0], beforeNS: {}, during: A[1], duringNS: {}, after: A[2], afterNS: {} });
                })(E, $);
                return Promise.resolve(br({ action: _, data: { exact: D.before, namespaced: D.beforeNS }, state: Z, allPlugins: T, allMatches: D, instance: I, store: z, EVENTS: C })).then(function(w) {
                  function v() {
                    var M = (function() {
                      if (E.match(At)) return Promise.resolve(br({ action: ee({}, A, { type: K + "End" }), data: { exact: D.after, namespaced: D.afterNS }, state: Z, allPlugins: T, allMatches: D, instance: I, store: z, EVENTS: C })).then(function(N) {
                        N.meta && N.meta.hasCallback && qa(N.meta.rid, { payload: N });
                      });
                    })();
                    return M && M.then ? M.then(function() {
                      return w;
                    }) : w;
                  }
                  if (rl(w, G.length)) return w;
                  var A, k = (function() {
                    if (E !== K) return Promise.resolve(br({ action: ee({}, w, { type: K }), data: { exact: D.during, namespaced: D.duringNS }, state: Z, allPlugins: T, allMatches: D, instance: I, store: z, EVENTS: C })).then(function(M) {
                      A = M;
                    });
                    A = w;
                  })();
                  return k && k.then ? k.then(v) : v();
                });
              } catch (w) {
                return Promise.reject(w);
              }
              var J, Y, W;
            })(o, t, e, i, n)).then(function(_) {
              var j = a(_);
              return s = 1, j;
            });
          })();
          return Promise.resolve(S && S.then ? S.then(u) : u(S));
        } catch (_) {
          return Promise.reject(_);
        }
      };
    };
  };
}
function Fh(e) {
  return function(t) {
    return function(n) {
      return function(r) {
        var i = r.type, a = r.key, o = r.value, s = r.options;
        if (i === Q.setItem || i === Q.removeItem) {
          if (r.abort) return n(r);
          i === Q.setItem ? e.setItem(a, o, s) : e.removeItem(a, s);
        }
        return n(r);
      };
    };
  };
}
var Gh = function() {
  var e = this;
  this.before = [], this.after = [], this.addMiddleware = function(t, n) {
    e[n] = e[n].concat(t);
  }, this.removeMiddleware = function(t, n) {
    var r = e[n].findIndex(function(i) {
      return i === t;
    });
    r !== -1 && (e[n] = [].concat(e[n].slice(0, r), e[n].slice(r + 1)));
  }, this.dynamicMiddlewares = function(t) {
    return function(n) {
      return function(r) {
        return function(i) {
          var a = { getState: n.getState, dispatch: function(s) {
            return n.dispatch(s);
          } }, o = e[t].map(function(s) {
            return s(a);
          });
          return Nt.apply(void 0, o)(r)(i);
        };
      };
    };
  };
};
function Wh(e) {
  return function(t, n) {
    t === void 0 && (t = {});
    var r = {};
    if (n.type === "initialize:aborted") return t;
    if (/^registerPlugin:([^:]*)$/.test(n.type)) {
      var i = no(n.type, "registerPlugin"), a = e()[i];
      if (!a || !i) return t;
      var o = n.enabled, s = a.config;
      return r[i] = { enabled: o, initialized: !!o && !a.initialize, loaded: !!o && !!a.loaded({ config: s }), config: s }, ee({}, t, r);
    }
    if (/^initialize:([^:]*)$/.test(n.type)) {
      var u = no(n.type, Q.initialize), c = e()[u];
      return c && u ? (r[u] = ee({}, t[u], { initialized: !0, loaded: !!c.loaded({ config: c.config }) }), ee({}, t, r)) : t;
    }
    if (/^ready:([^:]*)$/.test(n.type)) return r[n.name] = ee({}, t[n.name], { loaded: !0 }), ee({}, t, r);
    switch (n.type) {
      case Q.disablePlugin:
        return ee({}, t, ro(n.plugins, !1, t));
      case Q.enablePlugin:
        return ee({}, t, ro(n.plugins, !0, t));
      default:
        return t;
    }
  };
}
function no(e, t) {
  return e.substring(t.length + 1, e.length);
}
function ro(e, t, n) {
  return e.reduce(function(r, i) {
    return r[i] = ee({}, n[i], { enabled: t }), r;
  }, n);
}
function il(e) {
  try {
    return JSON.parse(JSON.stringify(e));
  } catch {
  }
  return e;
}
var Hh = { last: {}, history: [] };
function Vh(e, t) {
  e === void 0 && (e = Hh);
  var n = t.options, r = t.meta;
  if (t.type === Q.track) {
    var i = il(ee({ event: t.event, properties: t.properties }, Object.keys(n).length && { options: n }, { meta: r }));
    return ee({}, e, { last: i, history: e.history.concat(i) });
  }
  return e;
}
var Kh = { actions: [] };
function Uh(e, t) {
  e === void 0 && (e = Kh);
  var n = t.payload;
  switch (t.type) {
    case "queue":
      var r;
      return r = n && n.type && n.type === Q.identify ? [t].concat(e.actions) : e.actions.concat(t), ee({}, e, { actions: r });
    case "dequeue":
      return [];
    default:
      return e;
  }
}
var al = /#.*$/;
function qh(e) {
  var t = /(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e);
  return "/" + (t && t[3] ? t[3].split("?")[0].replace(al, "") : "");
}
var ol, sl, ll, cl, Yh = function(e) {
  if (e === void 0 && (e = {}), !Pe) return e;
  var t = document, n = t.title, r = t.referrer, i = window, a = i.location, o = i.innerWidth, s = i.innerHeight, u = a.hash, c = a.search, p = (function(g) {
    var f = (function() {
      if (Pe) {
        for (var h, m = document.getElementsByTagName("link"), x = 0; h = m[x]; x++) if (h.getAttribute("rel") === "canonical") return h.getAttribute("href");
      }
    })();
    return f ? f.match(/\?/) ? f : f + g : window.location.href.replace(al, "");
  })(c), d = { title: n, url: p, path: qh(p), hash: u, search: c, width: o, height: s };
  return r && r !== "" && (d.referrer = r), ee({}, d, e);
}, Zh = { last: {}, history: [] };
function Jh(e, t) {
  e === void 0 && (e = Zh);
  var n = t.options;
  if (t.type === Q.page) {
    var r = il(ee({ properties: t.properties, meta: t.meta }, Object.keys(n).length && { options: n }));
    return ee({}, e, { last: r, history: e.history.concat(r) });
  }
  return e;
}
ol = (function() {
  if (!Pe) return !1;
  var e = navigator.appVersion;
  return ~e.indexOf("Win") ? "Windows" : ~e.indexOf("Mac") ? "MacOS" : ~e.indexOf("X11") ? "UNIX" : ~e.indexOf("Linux") ? "Linux" : "Unknown OS";
})(), sl = Pe ? document.referrer : null, ll = zh(), cl = Ah();
var io = { initialized: !1, sessionId: Xn(), app: null, version: null, debug: !1, offline: !!Pe && !navigator.onLine, os: { name: ol }, userAgent: Pe ? navigator.userAgent : "node", library: { name: Fr, version: "0.13.1" }, timezone: cl, locale: ll, campaign: {}, referrer: sl };
function Xh(e, t) {
  e === void 0 && (e = io);
  var n = e.initialized, r = t.campaign;
  switch (t.type) {
    case Q.campaign:
      return ee({}, e, { campaign: r });
    case Q.offline:
      return ee({}, e, { offline: !0 });
    case Q.online:
      return ee({}, e, { offline: !1 });
    default:
      return n ? e : ee({}, io, e, { initialized: !0 });
  }
}
var Qh = ["plugins", "reducers", "storage"];
function eg(e, t, n) {
  if (Pe) {
    var r = window[(n ? "add" : "remove") + "EventListener"];
    e.split(" ").forEach(function(i) {
      r(i, t);
    });
  }
}
function tg(e) {
  var t = eg.bind(null, "online offline", function(n) {
    return Promise.resolve(!navigator.onLine).then(e);
  });
  return t(!0), function(n) {
    return t(!1);
  };
}
function ul() {
  return ut(Fr, []), function(e) {
    return function(t, n, r) {
      var i = e(t, n, r), a = i.dispatch;
      return Object.assign(i, { dispatch: function(o) {
        return It[Ot][Fr].push(o.action || o), a(o);
      } });
    };
  };
}
function ao(e) {
  return function() {
    return Nt(Nt.apply(null, arguments), ul());
  };
}
function _r(e) {
  return e ? wh(e) ? e : [e] : [];
}
function oo(e, t, n) {
  e === void 0 && (e = {});
  var r, i, a = Xn();
  return t && (Ut[a] = (r = t, i = (function(o) {
    for (var s, u = o || Array.prototype.slice.call(arguments), c = 0; c < u.length; c++) if (Oe(u[c])) {
      s = u[c];
      break;
    }
    return s;
  })(n), function(o) {
    i && i(o), r(o);
  })), ee({}, e, { rid: a, ts: (/* @__PURE__ */ new Date()).getTime() }, t ? { hasCallback: !0 } : {});
}
function ng(e) {
  e === void 0 && (e = {});
  var t = e.reducers || {}, n = e.initialUser || {}, r = (e.plugins || []).reduce(function(w, v) {
    if (Oe(v)) return w.middlewares = w.middlewares.concat(v), w;
    if (v.NAMESPACE && (v.name = v.NAMESPACE), !v.name) throw new Error("https://lytics.dev/errors/1");
    v.config || (v.config = {});
    var A = v.EVENTS ? Object.keys(v.EVENTS).map(function(N) {
      return v.EVENTS[N];
    }) : [];
    w.pluginEnabled[v.name] = !(v.enabled === !1 || v.config.enabled === !1), delete v.enabled, v.methods && (w.methods[v.name] = Object.keys(v.methods).reduce(function(N, L) {
      var B;
      return N[L] = (B = v.methods[L], function() {
        for (var F = Array.prototype.slice.call(arguments), R = new Array(B.length), X = 0; X < F.length; X++) R[X] = F[X];
        return R[R.length] = j, B.apply({ instance: j }, R);
      }), N;
    }, {}), delete v.methods);
    var k = Object.keys(v).concat(A), M = new Set(w.events.concat(k));
    if (w.events = Array.from(M), w.pluginsArray = w.pluginsArray.concat(v), w.plugins[v.name]) throw new Error(v.name + "AlreadyLoaded");
    return w.plugins[v.name] = v, w.plugins[v.name].loaded || (w.plugins[v.name].loaded = function() {
      return !0;
    }), w;
  }, { plugins: {}, pluginEnabled: {}, methods: {}, pluginsArray: [], middlewares: [], events: [] }), i = e.storage ? e.storage : { getItem: ct, setItem: ut, removeItem: Rt }, a = /* @__PURE__ */ (function(w) {
    return function(v, A, k) {
      return A.getState("user")[v] || (k && be(k) && k[v] ? k[v] : Ua(w)[v] || ct(Wr(v)) || null);
    };
  })(i), o = r.plugins, s = r.events.filter(function(w) {
    return !Gr.includes(w);
  }).sort(), u = new Set(s.concat(Mn).filter(function(w) {
    return !Gr.includes(w);
  })), c = Array.from(u).sort(), p = function() {
    return o;
  }, d = new Gh(), g = d.addMiddleware, f = d.removeMiddleware, h = d.dynamicMiddlewares, m = function() {
    throw new Error("Abort disabled inListener");
  }, x = Mh(), P = Ua(i), y = ee({}, P, n, x.an_uid ? { userId: x.an_uid } : {}, x.an_aid ? { anonymousId: x.an_aid } : {});
  y.anonymousId || (y.anonymousId = Xn());
  var S = ee({ enable: function(w, v) {
    return new Promise(function(A) {
      D.dispatch({ type: Q.enablePlugin, plugins: _r(w), _: { originalAction: Q.enablePlugin } }, A, [v]);
    });
  }, disable: function(w, v) {
    return new Promise(function(A) {
      D.dispatch({ type: Q.disablePlugin, plugins: _r(w), _: { originalAction: Q.disablePlugin } }, A, [v]);
    });
  } }, r.methods), _ = !1, j = { identify: function(w, v, A, k) {
    try {
      var M = Ct(w) ? w : null, N = be(w) ? w : v, L = A || {}, B = j.user();
      ut(Wr(We), M);
      var F = M || N.userId || a(We, j, N);
      return Promise.resolve(new Promise(function(R) {
        D.dispatch(ee({ type: Q.identifyStart, userId: F, traits: N || {}, options: L, anonymousId: B.anonymousId }, B.id && B.id !== M && { previousId: B.id }), R, [v, A, k]);
      }));
    } catch (R) {
      return Promise.reject(R);
    }
  }, track: function(w, v, A, k) {
    try {
      var M = be(w) ? w.event : w;
      if (!M || !Ct(M)) throw new Error("EventMissing");
      var N = be(w) ? w : v || {}, L = be(A) ? A : {};
      return Promise.resolve(new Promise(function(B) {
        D.dispatch({ type: Q.trackStart, event: M, properties: N, options: L, userId: a(We, j, v), anonymousId: a(jt, j, v) }, B, [v, A, k]);
      }));
    } catch (B) {
      return Promise.reject(B);
    }
  }, page: function(w, v, A) {
    try {
      var k = be(w) ? w : {}, M = be(v) ? v : {};
      return Promise.resolve(new Promise(function(N) {
        D.dispatch({ type: Q.pageStart, properties: Yh(k), options: M, userId: a(We, j, k), anonymousId: a(jt, j, k) }, N, [w, v, A]);
      }));
    } catch (N) {
      return Promise.reject(N);
    }
  }, user: function(w) {
    if (w === We || w === "id") return a(We, j);
    if (w === jt || w === "anonId") return a(jt, j);
    var v = j.getState("user");
    return w ? Fa(v, w) : v;
  }, reset: function(w) {
    return new Promise(function(v) {
      D.dispatch({ type: Q.resetStart }, v, w);
    });
  }, ready: function(w) {
    return _ && w({ plugins: S, instance: j }), j.on(Q.ready, function(v) {
      w && w(v), _ = !0;
    });
  }, on: function(w, v) {
    if (!w || !Oe(v)) return !1;
    if (w === Q.bootstrap) throw new Error(".on disabled for " + w);
    var A = /Start$|Start:/;
    if (w === "*") {
      var k = function(B) {
        return function(F) {
          return function(R) {
            return R.type.match(A) && v({ payload: R, instance: j, plugins: o }), F(R);
          };
        };
      }, M = function(B) {
        return function(F) {
          return function(R) {
            return R.type.match(A) || v({ payload: R, instance: j, plugins: o }), F(R);
          };
        };
      };
      return g(k, kn), g(M, xn), function() {
        f(k, kn), f(M, xn);
      };
    }
    var N = w.match(A) ? kn : xn, L = function(B) {
      return function(F) {
        return function(R) {
          return R.type === w && v({ payload: R, instance: j, plugins: o, abort: m }), F(R);
        };
      };
    };
    return g(L, N), function() {
      return f(L, N);
    };
  }, once: function(w, v) {
    if (!w || !Oe(v)) return !1;
    if (w === Q.bootstrap) throw new Error(".once disabled for " + w);
    var A = j.on(w, function(k) {
      v({ payload: k.payload, instance: j, plugins: o, abort: m }), A();
    });
    return A;
  }, getState: function(w) {
    var v = D.getState();
    return w ? Fa(v, w) : Object.assign({}, v);
  }, dispatch: function(w) {
    var v = Ct(w) ? { type: w } : w;
    if (Mn.includes(v.type)) throw new Error("reserved action " + v.type);
    var A = ee({}, v, { _: ee({ originalAction: v.type }, w._ || {}) });
    D.dispatch(A);
  }, enablePlugin: S.enable, disablePlugin: S.disable, plugins: S, storage: { getItem: i.getItem, setItem: function(w, v, A) {
    D.dispatch({ type: Q.setItemStart, key: w, value: v, options: A });
  }, removeItem: function(w, v) {
    D.dispatch({ type: Q.removeItemStart, key: w, options: v });
  } }, setAnonymousId: function(w, v) {
    j.storage.setItem(qe, w, v);
  }, events: { core: Mn, plugins: s } }, I = r.middlewares.concat([function(w) {
    return function(v) {
      return function(A) {
        return A.meta || (A.meta = oo()), v(A);
      };
    };
  }, h(kn), Bh(j, p, { all: c, plugins: s }), Fh(i), Th(j), Lh(j), h(xn)]), z = { context: Xh, user: $h(i), page: Jh, track: Vh, plugins: Wh(p), queue: Uh }, C = Nt, T = Nt;
  if (Pe && e.debug) {
    var E = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    E && (C = E({ trace: !0, traceLimit: 25 })), T = function() {
      return arguments.length === 0 ? ul() : be(typeof arguments[0]) ? ao() : ao().apply(null, arguments);
    };
  }
  var K, Z = (function(w) {
    return Object.keys(w).reduce(function(v, A) {
      return Qh.includes(A) || (v[A] = w[A]), v;
    }, {});
  })(e), $ = r.pluginsArray.reduce(function(w, v) {
    var A = v.name, k = v.config, M = v.loaded, N = r.pluginEnabled[A];
    return w[A] = { enabled: N, initialized: !!N && !v.initialize, loaded: !!M({ config: k }), config: k }, w;
  }, {}), G = { context: Z, user: y, plugins: $ }, D = el((function(w) {
    for (var v = Object.keys(w), A = {}, k = 0; k < v.length; k++) {
      var M = v[k];
      typeof w[M] === He && (A[M] = w[M]);
    }
    var N, L = Object.keys(A);
    try {
      (function(B) {
        Object.keys(B).forEach(function(F) {
          var R = B[F];
          if (typeof R(void 0, { type: Br }) === $e || typeof R(void 0, { type: Oh }) === $e) throw new Error(Jt + " " + F + " " + $e);
        });
      })(A);
    } catch (B) {
      N = B;
    }
    return function(B, F) {
      if (B === void 0 && (B = {}), N) throw N;
      for (var R = !1, X = {}, le = 0; le < L.length; le++) {
        var de = L[le], ke = B[de], ze = (0, A[de])(ke, F);
        if (typeof ze === $e) {
          var _e = Ih(de, F);
          throw new Error(_e);
        }
        X[de] = ze, R = R || ze !== ke;
      }
      return R ? X : B;
    };
  })(ee({}, z, t)), G, T(C(Nh.apply(void 0, I))));
  D.dispatch = (K = D.dispatch, function(w, v, A) {
    var k = ee({}, w, { meta: oo(w.meta, v, _r(A)) });
    return K.apply(null, [k]);
  });
  var J = Object.keys(o);
  D.dispatch({ type: Q.bootstrap, plugins: J, config: Z, params: x, user: y, initialUser: n, persistedUser: P });
  var Y = J.filter(function(w) {
    return r.pluginEnabled[w];
  }), W = J.filter(function(w) {
    return !r.pluginEnabled[w];
  });
  return D.dispatch({ type: Q.registerPlugins, plugins: J, enabled: r.pluginEnabled }), r.pluginsArray.map(function(w, v) {
    var A = w.bootstrap, k = w.config, M = w.name;
    A && Oe(A) && A({ instance: j, config: k, payload: w }), D.dispatch({ type: Q.registerPluginType(M), name: M, enabled: r.pluginEnabled[M], plugin: w }), r.pluginsArray.length === v + 1 && D.dispatch({ type: Q.initializeStart, plugins: Y, disabled: W });
  }), tg(function(w) {
    D.dispatch({ type: w ? Q.offline : Q.online });
  }), (function(w, v, A) {
    setInterval(function() {
      return nl(w, v, A);
    }, 3e3);
  })(D, p, j), j;
}
var kn = "before", xn = "after", it = "cookie", Qe = fl(), dl = Qn, rg = Qn;
function pl(e) {
  return Qe ? Qn(e, "", -1) : Rt(e);
}
function fl() {
  if (Qe !== void 0) return Qe;
  var e = it + it;
  try {
    Qn(e, e), Qe = document.cookie.indexOf(e) !== -1, pl(e);
  } catch {
    Qe = !1;
  }
  return Qe;
}
function Qn(e, t, n, r, i, a) {
  if (typeof window < "u") {
    var o = arguments.length > 1;
    return Qe === !1 && (o ? ut(e, t) : ct(e)), o ? document.cookie = e + "=" + encodeURIComponent(t) + (n ? "; expires=" + new Date(+/* @__PURE__ */ new Date() + 1e3 * n).toUTCString() + (r ? "; path=" + r : "") + (i ? "; domain=" + i : "") + (a ? "; secure" : "") : "") : decodeURIComponent((("; " + document.cookie).split("; " + e + "=")[1] || "").split(";")[0]);
  }
}
var Re = "localStorage", ig = yi.bind(null, Re);
Dt(Re, "getItem", ct);
Dt(Re, "setItem", ut);
Dt(Re, "removeItem", Rt);
var De = "sessionStorage", ag = yi.bind(null, De);
Dt(De, "getItem", ct);
Dt(De, "setItem", ut);
Dt(De, "removeItem", Rt);
function Mt(e) {
  var t = e;
  try {
    if ((t = JSON.parse(e)) === "true") return !0;
    if (t === "false") return !1;
    if (be(t)) return t;
    parseFloat(t) === t && (t = parseFloat(t));
  } catch {
  }
  if (t !== null && t !== "") return t;
}
var og = ig(), sg = ag(), lg = fl();
function hl(e, t) {
  if (e) {
    var n = bi(t), r = !wi(n), i = ki(n) ? Mt(localStorage.getItem(e)) : void 0;
    if (r && !wt(i)) return i;
    var a = xi(n) ? Mt(dl(e)) : void 0;
    if (r && a) return a;
    var o = _i(n) ? Mt(sessionStorage.getItem(e)) : void 0;
    if (r && o) return o;
    var s = ct(e);
    return r ? s : { localStorage: i, sessionStorage: o, cookie: a, global: s };
  }
}
function cg(e, t, n) {
  if (e && !wt(t)) {
    var r = {}, i = bi(n), a = JSON.stringify(t), o = !wi(i);
    return ki(i) && (r[Re] = _n(Re, t, Mt(localStorage.getItem(e))), localStorage.setItem(e, a), o) ? r[Re] : xi(i) && (r[it] = _n(it, t, Mt(dl(e))), rg(e, a), o) ? r[it] : _i(i) && (r[De] = _n(De, t, Mt(sessionStorage.getItem(e))), sessionStorage.setItem(e, a), o) ? r[De] : (r[nt] = _n(nt, t, ct(e)), ut(e, t), o ? r[nt] : r);
  }
}
function ug(e, t) {
  if (e) {
    var n = bi(t), r = hl(e, Ys), i = {};
    return !wt(r.localStorage) && ki(n) && (localStorage.removeItem(e), i[Re] = r.localStorage), !wt(r.cookie) && xi(n) && (pl(e), i[it] = r.cookie), !wt(r.sessionStorage) && _i(n) && (sessionStorage.removeItem(e), i[De] = r.sessionStorage), !wt(r.global) && er(n, nt) && (Rt(e), i[nt] = r.global), i;
  }
}
function bi(e) {
  return e ? Ct(e) ? e : e.storage : qs;
}
function ki(e) {
  return og && er(e, Re);
}
function xi(e) {
  return lg && er(e, it);
}
function _i(e) {
  return sg && er(e, De);
}
function wi(e) {
  return e === Ys || e === "all";
}
function er(e, t) {
  return e === qs || e === t || wi(e);
}
function _n(e, t, n) {
  return { location: e, current: t, previous: n };
}
var dg = { setItem: cg, getItem: hl, removeItem: ug };
function pg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function so(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? so(Object(n), !0).forEach(function(r) {
      pg(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : so(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function fg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = {
    storage: dg
  };
  return ng(lo(lo({}, t), e));
}
function co(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? co(Object(n), !0).forEach(function(r) {
      hg(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : co(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function hg(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gg = {
  debug: !1,
  containerId: null,
  dataLayerName: "dataLayer",
  dataLayer: void 0,
  preview: void 0,
  auth: void 0,
  execution: "async"
  // assumesPageview: true,
}, jn;
function mg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = "https://www.googletagmanager.com/gtm.js";
  return {
    name: "google-tag-manager",
    config: wn(wn({}, gg), e),
    initialize: function(r) {
      var i = r.config, a = i.containerId, o = i.dataLayerName, s = i.customScriptSrc, u = i.preview, c = i.auth, p = i.execution, d = i.nonce;
      if (!a)
        throw new Error("No google tag manager containerId defined");
      if (u && !c)
        throw new Error("When enabling preview mode, both preview and auth parameters must be defined");
      var g = s || t;
      po(a, g) || ((function(f, h, m, x, P) {
        f[x] = f[x] || [], f[x].push({
          "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
          event: "gtm.js"
        });
        var y = h.getElementsByTagName(m)[0], S = h.createElement(m), _ = x != "dataLayer" ? "&l=" + x : "", j = u ? "&gtm_preview=" + u + "&gtm_auth=" + c + "&gtm_cookies_win=x" : "";
        p && (S[p] = !0), S.src = "".concat(g, "?id=") + P + _ + j, d && S.setAttribute("nonce", d), y.parentNode.insertBefore(S, y);
      })(window, document, "script", o, a), jn = o, i.dataLayer = window[o]);
    },
    page: function(r) {
      var i = r.payload;
      r.options, r.instance;
      var a = r.config;
      typeof a.dataLayer < "u" && a.dataLayer.push(i.properties);
    },
    track: function(r) {
      var i = r.payload;
      r.options;
      var a = r.config;
      if (typeof a.dataLayer < "u") {
        var o = i.anonymousId, s = i.userId, u = i.properties, c = u;
        s && (c.userId = s), o && (c.anonymousId = o), u.category || (c.category = "All"), a.debug && console.log("dataLayer push", wn({
          event: i.event
        }, c)), a.dataLayer.push(wn({
          event: i.event
        }, c));
      }
    },
    loaded: function() {
      var r = !!jn && !!(window[jn] && Array.prototype.push !== window[jn].push);
      return po(e.containerId, e.customScriptSrc || t) && r;
    }
  };
}
var uo = {};
function po(e, t) {
  var n = uo[e];
  if (!n) {
    var r = t.replace(/^https?:\/\//, "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    n = new RegExp(r + ".*[?&]id=" + e), uo[e] = n;
  }
  var i = document.querySelectorAll("script[src]");
  return !!Object.keys(i).filter(function(a) {
    return (i[a].src || "").match(n);
  }).length;
}
var vg = mg;
const yg = "GTM-KTZG4PZS", bg = ({ containerId: e = yg }) => (console.log({ containerId: e }), fg({
  app: "awesome-app",
  plugins: [
    vg({
      containerId: e
    })
  ]
}));
var ji = {
  consentModal: {
    acceptAllBtn: "قبول الكل",
    acceptNecessaryBtn: "رفض الكل",
    description: 'يستخدم هذا الموقع تقنيات التتبع، مثل ملفات تعريف الارتباط، لتحليل سلوك المستخدم وتحسين تجربتك. سيتم تفعيل التتبع فقط إذا قبلت صراحة. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">إدارة التفضيلات</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">سياسة الخصوصية</a>',
    showPreferencesBtn: "إدارة التفضيلات",
    title: "نحن نقدر خصوصيتك"
  },
  preferencesModal: {
    acceptAllBtn: "قبول الكل",
    acceptNecessaryBtn: "رفض الكل",
    closeIconLabel: "إغلاق",
    savePreferencesBtn: "حفظ التفضيلات",
    sections: [
      {
        description: 'نحن نستخدم ملفات تعريف الارتباط لضمان الوظائف الأساسية للموقع وتعزيز تجربتك عبر الإنترنت. لديك الخيار للاشتراك أو الانسحاب من كل فئة في أي وقت. لمزيد من التفاصيل حول ملفات تعريف الارتباط والبيانات الحساسة الأخرى، يرجى مراجعة <a href="https://www.plexicus.ai/privacy">سياسة الخصوصية</a> الكاملة لدينا.',
        title: "استخدام ملفات تعريف الارتباط"
      },
      {
        description: "هذه الملفات ضرورية لعمل الموقع بشكل صحيح ولا يمكن تعطيلها. لا تخزن أي معلومات شخصية.",
        linkedCategory: "ضروري",
        title: "ملفات تعريف الارتباط الضرورية بشكل صارم"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'يتم تعيين هذه الكوكي بواسطة <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "تنتهي بعد 12 يومًا",
              name: "_ga"
            },
            {
              description: 'يتم تعيين هذه الكوكي بواسطة <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "جلسة",
              name: "_gid"
            }
          ],
          headers: {
            description: "الوصف",
            domain: "الخدمة",
            expiration: "انتهاء الصلاحية",
            name: "الاسم"
          }
        },
        description: "تتيح لنا هذه الملفات حساب الزيارات ومصادر الحركة حتى نتمكن من قياس وتحسين أداء موقعنا. تساعدنا على معرفة الصفحات الأكثر والأقل شعبية وكيفية تنقل الزوار في الموقع. جميع المعلومات التي تجمعها هذه الملفات مجمعة وبالتالي مجهولة. إذا لم تسمح بهذه الملفات، فلن نعرف متى زرت موقعنا، ولن نتمكن من مراقبة أدائه.",
        linkedCategory: "التحليلات",
        title: "ملفات تعريف الارتباط الخاصة بالأداء والتحليلات"
      },
      {
        description: 'لأي أسئلة بخصوص سياسة ملفات تعريف الارتباط أو اختياراتك، يرجى <a class="cc__link" href="https://www.plexicus.ai/contact">الاتصال بنا</a>.',
        title: "مزيد من المعلومات"
      }
    ],
    title: "تفضيلات ملفات تعريف الارتباط"
  }
}, kg = ji.consentModal, xg = ji.preferencesModal;
const _g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: kg,
  default: ji,
  preferencesModal: xg
}, Symbol.toStringTag, { value: "Module" }));
var Si = {
  consentModal: {
    acceptAllBtn: "Přijmout vše",
    acceptNecessaryBtn: "Odmítnout vše",
    description: 'Tato webová stránka používá sledovací technologie, jako jsou cookies, k analýze chování uživatelů a zlepšení vašeho zážitku. Sledování bude povoleno pouze tehdy, pokud to výslovně přijmete. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Spravovat preference</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Zásady ochrany osobních údajů</a>',
    showPreferencesBtn: "Spravovat preference",
    title: "Ceníme si vašeho soukromí"
  },
  preferencesModal: {
    acceptAllBtn: "Přijmout vše",
    acceptNecessaryBtn: "Odmítnout vše",
    closeIconLabel: "Zavřít",
    savePreferencesBtn: "Uložit preference",
    sections: [
      {
        description: 'Používáme cookies k zajištění základní funkčnosti webu a ke zlepšení vašeho online zážitku. Máte možnost kdykoli se rozhodnout pro nebo proti každé kategorii. Pro více informací o cookies a dalších citlivých datech si prosím přečtěte naše úplné <a href="https://www.plexicus.ai/privacy">zásady ochrany osobních údajů</a>.',
        title: "Použití cookies"
      },
      {
        description: "Tyto cookies jsou nezbytné pro správné fungování webu a nelze je zakázat. Neuchovávají žádné osobně identifikovatelné informace.",
        linkedCategory: "nezbytné",
        title: "Nezbytné cookies"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Tento cookie je nastaven <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Vyprší po 12 dnech",
              name: "_ga"
            },
            {
              description: 'Tento cookie je nastaven <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Relace",
              name: "_gid"
            }
          ],
          headers: {
            description: "Popis",
            domain: "Služba",
            expiration: "Platnost",
            name: "Název"
          }
        },
        description: "Tyto cookies nám umožňují počítat návštěvy a zdroje provozu, abychom mohli měřit a zlepšovat výkon našeho webu. Pomáhají nám zjistit, které stránky jsou nejvíce a nejméně populární a jak se návštěvníci pohybují po webu. Veškeré informace, které tyto cookies shromažďují, jsou agregované a tedy anonymní. Pokud tyto cookies nepovolíte, nebudeme vědět, kdy jste navštívili náš web, a nebudeme moci sledovat jeho výkon.",
        linkedCategory: "analytika",
        title: "Výkonnostní a analytické cookies"
      },
      {
        description: 'Pro jakékoli dotazy týkající se naší politiky cookies nebo vašich voleb nás prosím <a class="cc__link" href="https://www.plexicus.ai/contact">kontaktujte</a>.',
        title: "Více informací"
      }
    ],
    title: "Preference cookies"
  }
}, wg = Si.consentModal, jg = Si.preferencesModal;
const Sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: wg,
  default: Si,
  preferencesModal: jg
}, Symbol.toStringTag, { value: "Module" }));
var Pi = {
  consentModal: {
    acceptAllBtn: "Accepter alle",
    acceptNecessaryBtn: "Afvis alle",
    description: 'Denne hjemmeside bruger sporingsteknologier, såsom cookies, til at analysere brugeradfærd og forbedre din oplevelse. Sporing vil kun blive aktiveret, hvis du eksplicit accepterer. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Administrer præferencer</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Privatlivspolitik</a>',
    showPreferencesBtn: "Administrer præferencer",
    title: "Vi værdsætter dit privatliv"
  },
  preferencesModal: {
    acceptAllBtn: "Accepter alle",
    acceptNecessaryBtn: "Afvis alle",
    closeIconLabel: "Luk",
    savePreferencesBtn: "Gem præferencer",
    sections: [
      {
        description: 'Vi bruger cookies for at sikre den grundlæggende funktionalitet af hjemmesiden og for at forbedre din online oplevelse. Du har mulighed for at til- eller fravælge hver kategori til enhver tid. For flere detaljer om cookies og andre følsomme data, bedes du gennemgå vores fulde <a href="https://www.plexicus.ai/privacy">privatlivspolitik</a>.',
        title: "Cookiebrug"
      },
      {
        description: "Disse cookies er essentielle for, at hjemmesiden fungerer korrekt og kan ikke deaktiveres. De gemmer ikke nogen personligt identificerbare oplysninger.",
        linkedCategory: "nødvendig",
        title: "Strengt nødvendige cookies"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Denne cookie er sat af <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Udløber efter 12 dage",
              name: "_ga"
            },
            {
              description: 'Denne cookie er sat af <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Session",
              name: "_gid"
            }
          ],
          headers: {
            description: "Beskrivelse",
            domain: "Tjeneste",
            expiration: "Udløb",
            name: "Navn"
          }
        },
        description: "Disse cookies giver os mulighed for at tælle besøg og trafikkilder, så vi kan måle og forbedre ydelsen af vores hjemmeside. De hjælper os med at vide, hvilke sider der er mest og mindst populære og se, hvordan besøgende bevæger sig rundt på siden. Al information, som disse cookies indsamler, er aggregeret og derfor anonym. Hvis du ikke tillader disse cookies, vil vi ikke vide, hvornår du har besøgt vores hjemmeside, og vil ikke kunne overvåge dens ydelse.",
        linkedCategory: "analyse",
        title: "Ydelses- og analysecookies"
      },
      {
        description: 'For spørgsmål vedrørende vores cookiepolitik eller dine valg, bedes du <a class="cc__link" href="https://www.plexicus.ai/contact">kontakte os</a>.',
        title: "Mere information"
      }
    ],
    title: "Cookiepræferencer"
  }
}, Pg = Pi.consentModal, Cg = Pi.preferencesModal;
const zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: Pg,
  default: Pi,
  preferencesModal: Cg
}, Symbol.toStringTag, { value: "Module" }));
var Ci = {
  consentModal: {
    acceptAllBtn: "Alle akzeptieren",
    acceptNecessaryBtn: "Alle ablehnen",
    description: 'Diese Website verwendet Tracking-Technologien, wie Cookies, um das Nutzerverhalten zu analysieren und Ihre Erfahrung zu verbessern. Das Tracking wird nur aktiviert, wenn Sie ausdrücklich zustimmen. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Präferenzen verwalten</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Datenschutzrichtlinie</a>',
    showPreferencesBtn: "Präferenzen verwalten",
    title: "Wir schätzen Ihre Privatsphäre"
  },
  preferencesModal: {
    acceptAllBtn: "Alle akzeptieren",
    acceptNecessaryBtn: "Alle ablehnen",
    closeIconLabel: "Schließen",
    savePreferencesBtn: "Präferenzen speichern",
    sections: [
      {
        description: 'Wir verwenden Cookies, um die grundlegende Funktionalität der Website sicherzustellen und Ihre Online-Erfahrung zu verbessern. Sie haben die Möglichkeit, jederzeit jede Kategorie ein- oder auszuschalten. Für weitere Details zu Cookies und anderen sensiblen Daten, lesen Sie bitte unsere vollständige <a href="https://www.plexicus.ai/privacy">Datenschutzrichtlinie</a>.',
        title: "Cookie-Nutzung"
      },
      {
        description: "Diese Cookies sind essentiell für die ordnungsgemäße Funktion der Website und können nicht deaktiviert werden. Sie speichern keine persönlich identifizierbaren Informationen.",
        linkedCategory: "notwendig",
        title: "Unbedingt notwendige Cookies"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Dieses Cookie wird von <a href="#">Google Analytics</a> gesetzt.',
              domain: "Google Analytics",
              expiration: "Läuft nach 12 Tagen ab",
              name: "_ga"
            },
            {
              description: 'Dieses Cookie wird von <a href="#">Google Analytics</a> gesetzt.',
              domain: "Google Analytics",
              expiration: "Sitzung",
              name: "_gid"
            }
          ],
          headers: {
            description: "Beschreibung",
            domain: "Dienst",
            expiration: "Ablauf",
            name: "Name"
          }
        },
        description: "Diese Cookies ermöglichen es uns, Besuche und Traffic-Quellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns zu wissen, welche Seiten am beliebtesten und am wenigsten beliebt sind und wie sich Besucher auf der Website bewegen. Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym. Wenn Sie diese Cookies nicht zulassen, wissen wir nicht, wann Sie unsere Website besucht haben, und können ihre Leistung nicht überwachen.",
        linkedCategory: "Analytik",
        title: "Leistungs- und Analyse-Cookies"
      },
      {
        description: 'Bei Fragen zu unserer Cookie-Richtlinie oder Ihren Entscheidungen, bitte <a class="cc__link" href="https://www.plexicus.ai/contact">kontaktieren Sie uns</a>.',
        title: "Weitere Informationen"
      }
    ],
    title: "Cookie-Präferenzen"
  }
}, Ag = Ci.consentModal, Mg = Ci.preferencesModal;
const Eg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: Ag,
  default: Ci,
  preferencesModal: Mg
}, Symbol.toStringTag, { value: "Module" }));
var zi = {
  consentModal: {
    acceptAllBtn: "Accept All",
    acceptNecessaryBtn: "Reject All",
    description: 'This website uses tracking technologies, such as cookies, to analyze user behavior and improve your experience. Tracking will only be enabled if you explicitly accept. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Manage preferences</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Privacy Policy</a>',
    showPreferencesBtn: "Manage Preferences",
    title: "We Value Your Privacy"
  },
  preferencesModal: {
    acceptAllBtn: "Accept All",
    acceptNecessaryBtn: "Reject All",
    closeIconLabel: "Close",
    savePreferencesBtn: "Save Preferences",
    sections: [
      {
        description: 'We use cookies to ensure the basic functionality of the website and to enhance your online experience. You have the option to opt in or out of each category at any time. For more details on cookies and other sensitive data, please review our full <a href="https://www.plexicus.ai/privacy">privacy policy</a>.',
        title: "Cookie Usage"
      },
      {
        description: "These cookies are essential for the website to function properly and cannot be disabled. They do not store any personally identifiable information.",
        linkedCategory: "necessary",
        title: "Strictly Necessary Cookies"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'This cookie is set by <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Expires after 12 days",
              name: "_ga"
            },
            {
              description: 'This cookie is set by <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Session",
              name: "_gid"
            }
          ],
          headers: {
            description: "Description",
            domain: "Service",
            expiration: "Expiration",
            name: "Name"
          }
        },
        description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
        linkedCategory: "analytics",
        title: "Performance and Analytics Cookies"
      },
      {
        description: 'For any questions regarding our cookie policy or your choices, please <a class="cc__link" href="https://www.plexicus.ai/contact">contact us</a>.',
        title: "More Information"
      }
    ],
    title: "Cookie Preferences"
  }
}, Og = zi.consentModal, Ig = zi.preferencesModal;
const Ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: Og,
  default: zi,
  preferencesModal: Ig
}, Symbol.toStringTag, { value: "Module" }));
var Ai = {
  consentModal: {
    acceptAllBtn: "Aceptar todo",
    acceptNecessaryBtn: "Rechazar todo",
    description: 'Este sitio web utiliza tecnologías de seguimiento, como cookies, para analizar el comportamiento del usuario y mejorar su experiencia. El seguimiento solo se habilitará si usted acepta explícitamente. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Gestionar preferencias</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Política de privacidad</a>',
    showPreferencesBtn: "Gestionar preferencias",
    title: "Valoramos su privacidad"
  },
  preferencesModal: {
    acceptAllBtn: "Aceptar todo",
    acceptNecessaryBtn: "Rechazar todo",
    closeIconLabel: "Cerrar",
    savePreferencesBtn: "Guardar preferencias",
    sections: [
      {
        description: 'Utilizamos cookies para garantizar la funcionalidad básica del sitio web y mejorar su experiencia en línea. Tiene la opción de aceptar o rechazar cada categoría en cualquier momento. Para más detalles sobre cookies y otros datos sensibles, por favor revise nuestra <a href="https://www.plexicus.ai/privacy">política de privacidad</a> completa.',
        title: "Uso de cookies"
      },
      {
        description: "Estas cookies son esenciales para el funcionamiento adecuado del sitio web y no se pueden desactivar. No almacenan ninguna información personal identificable.",
        linkedCategory: "necesario",
        title: "Cookies estrictamente necesarias"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Esta cookie es establecida por <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Expira después de 12 días",
              name: "_ga"
            },
            {
              description: 'Esta cookie es establecida por <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Sesión",
              name: "_gid"
            }
          ],
          headers: {
            description: "Descripción",
            domain: "Servicio",
            expiration: "Expiración",
            name: "Nombre"
          }
        },
        description: "Estas cookies nos permiten contar visitas y fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y ver cómo los visitantes se mueven por el sitio. Toda la información que recopilan estas cookies es agregada y, por lo tanto, anónima. Si no permite estas cookies, no sabremos cuándo ha visitado nuestro sitio y no podremos monitorear su rendimiento.",
        linkedCategory: "analíticas",
        title: "Cookies de rendimiento y analíticas"
      },
      {
        description: 'Para cualquier pregunta sobre nuestra política de cookies o sus opciones, por favor <a class="cc__link" href="https://www.plexicus.ai/contact">contáctenos</a>.',
        title: "Más información"
      }
    ],
    title: "Preferencias de cookies"
  }
}, Tg = Ai.consentModal, $g = Ai.preferencesModal;
const Lg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: Tg,
  default: Ai,
  preferencesModal: $g
}, Symbol.toStringTag, { value: "Module" }));
var Mi = {
  consentModal: {
    acceptAllBtn: "Hyväksy kaikki",
    acceptNecessaryBtn: "Hylkää kaikki",
    description: 'Tämä verkkosivusto käyttää seurantateknologioita, kuten evästeitä, käyttäjien käyttäytymisen analysoimiseksi ja kokemuksesi parantamiseksi. Seuranta aktivoidaan vain, jos hyväksyt sen nimenomaisesti. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Hallitse asetuksia</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Tietosuojakäytäntö</a>',
    showPreferencesBtn: "Hallitse asetuksia",
    title: "Arvostamme yksityisyyttäsi"
  },
  preferencesModal: {
    acceptAllBtn: "Hyväksy kaikki",
    acceptNecessaryBtn: "Hylkää kaikki",
    closeIconLabel: "Sulje",
    savePreferencesBtn: "Tallenna asetukset",
    sections: [
      {
        description: 'Käytämme evästeitä varmistaaksemme verkkosivuston perustoiminnallisuuden ja parantaaksemme verkkokokemustasi. Voit valita kunkin kategorian hyväksymisen tai hylkäämisen milloin tahansa. Lisätietoja evästeistä ja muista arkaluontoisista tiedoista löydät täydestä <a href="https://www.plexicus.ai/privacy">tietosuojakäytännöstämme</a>.',
        title: "Evästeiden käyttö"
      },
      {
        description: "Nämä evästeet ovat välttämättömiä verkkosivuston asianmukaiselle toiminnalle, eikä niitä voi poistaa käytöstä. Ne eivät tallenna mitään henkilökohtaisesti tunnistettavia tietoja.",
        linkedCategory: "necessary",
        title: "Välttämättömät evästeet"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Tämä eväste asetetaan <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Vanhenee 12 päivän kuluttua",
              name: "_ga"
            },
            {
              description: 'Tämä eväste asetetaan <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Istunto",
              name: "_gid"
            }
          ],
          headers: {
            description: "Kuvaus",
            domain: "Palvelu",
            expiration: "Vanhentuminen",
            name: "Nimi"
          }
        },
        description: "Nämä evästeet mahdollistavat käyntien ja liikenteen lähteiden laskemisen, jotta voimme mitata ja parantaa sivustomme suorituskykyä. Ne auttavat meitä tietämään, mitkä sivut ovat suosituimpia ja vähiten suosittuja sekä näkemään, miten kävijät liikkuvat sivustolla. Kaikki näiden evästeiden keräämä tieto on koottua ja siten anonyymiä. Jos et salli näitä evästeitä, emme tiedä, milloin olet käynyt sivustollamme, emmekä pysty seuraamaan sen suorituskykyä.",
        linkedCategory: "analytics",
        title: "Suorituskyky- ja analytiikkaevästeet"
      },
      {
        description: 'Jos sinulla on kysyttävää evästekäytännöstämme tai valinnoistasi, ole hyvä ja <a class="cc__link" href="https://www.plexicus.ai/contact">ota yhteyttä</a>.',
        title: "Lisätietoja"
      }
    ],
    title: "Evästeasetukset"
  }
}, Rg = Mi.consentModal, Dg = Mi.preferencesModal;
const Bg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: Rg,
  default: Mi,
  preferencesModal: Dg
}, Symbol.toStringTag, { value: "Module" }));
var Ei = {
  consentModal: {
    acceptAllBtn: "Accepter tout",
    acceptNecessaryBtn: "Refuser tout",
    description: 'Ce site utilise des technologies de suivi, telles que les cookies, pour analyser le comportement des utilisateurs et améliorer votre expérience. Le suivi ne sera activé que si vous acceptez explicitement. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Gérer les préférences</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Politique de confidentialité</a>',
    showPreferencesBtn: "Gérer les préférences",
    title: "Nous valorisons votre vie privée"
  },
  preferencesModal: {
    acceptAllBtn: "Accepter tout",
    acceptNecessaryBtn: "Refuser tout",
    closeIconLabel: "Fermer",
    savePreferencesBtn: "Enregistrer les préférences",
    sections: [
      {
        description: `Nous utilisons des cookies pour garantir la fonctionnalité de base du site et améliorer votre expérience en ligne. Vous avez la possibilité de choisir d'accepter ou de refuser chaque catégorie à tout moment. Pour plus de détails sur les cookies et autres données sensibles, veuillez consulter notre <a href="https://www.plexicus.ai/privacy">politique de confidentialité complète</a>.`,
        title: "Utilisation des cookies"
      },
      {
        description: "Ces cookies sont essentiels au bon fonctionnement du site et ne peuvent pas être désactivés. Ils ne stockent aucune information personnellement identifiable.",
        linkedCategory: "nécessaire",
        title: "Cookies strictement nécessaires"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Ce cookie est défini par <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Expire après 12 jours",
              name: "_ga"
            },
            {
              description: 'Ce cookie est défini par <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Session",
              name: "_gid"
            }
          ],
          headers: {
            description: "Description",
            domain: "Service",
            expiration: "Expiration",
            name: "Nom"
          }
        },
        description: "Ces cookies nous permettent de compter les visites et les sources de trafic afin que nous puissions mesurer et améliorer la performance de notre site. Ils nous aident à savoir quelles pages sont les plus et les moins populaires et à voir comment les visiteurs se déplacent sur le site. Toutes les informations collectées par ces cookies sont agrégées et donc anonymes. Si vous n'autorisez pas ces cookies, nous ne saurons pas quand vous avez visité notre site et ne pourrons pas en surveiller la performance.",
        linkedCategory: "analytique",
        title: "Cookies de performance et d'analyse"
      },
      {
        description: 'Pour toute question concernant notre politique de cookies ou vos choix, veuillez <a class="cc__link" href="https://www.plexicus.ai/contact">nous contacter</a>.',
        title: "Plus d'informations"
      }
    ],
    title: "Préférences de cookies"
  }
}, Fg = Ei.consentModal, Gg = Ei.preferencesModal;
const Wg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: Fg,
  default: Ei,
  preferencesModal: Gg
}, Symbol.toStringTag, { value: "Module" }));
var Oi = {
  consentModal: {
    acceptAllBtn: "קבל הכל",
    acceptNecessaryBtn: "דחה הכל",
    description: 'אתר זה משתמש בטכנולוגיות מעקב, כגון עוגיות, כדי לנתח את התנהגות המשתמשים ולשפר את חווייתך. המעקב יופעל רק אם תסכים לכך במפורש. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">נהל העדפות</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">מדיניות פרטיות</a>',
    showPreferencesBtn: "נהל העדפות",
    title: "אנו מעריכים את פרטיותך"
  },
  preferencesModal: {
    acceptAllBtn: "קבל הכל",
    acceptNecessaryBtn: "דחה הכל",
    closeIconLabel: "סגור",
    savePreferencesBtn: "שמור העדפות",
    sections: [
      {
        description: 'אנו משתמשים בעוגיות כדי להבטיח את הפונקציונליות הבסיסית של האתר ולשפר את חווייתך המקוונת. יש לך אפשרות לבחור או לבטל כל קטגוריה בכל עת. לפרטים נוספים על עוגיות ונתונים רגישים אחרים, אנא עיין ב-<a href="https://www.plexicus.ai/privacy">מדיניות הפרטיות המלאה שלנו</a>.',
        title: "שימוש בעוגיות"
      },
      {
        description: "עוגיות אלו חיוניות לפעולה התקינה של האתר ולא ניתן להשביתן. הן אינן מאחסנות מידע אישי מזהה.",
        linkedCategory: "הכרחי",
        title: "עוגיות הכרחיות בהחלט"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'עוגיה זו מוגדרת על ידי <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "פג תוקף לאחר 12 ימים",
              name: "_ga"
            },
            {
              description: 'עוגיה זו מוגדרת על ידי <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "מושב",
              name: "_gid"
            }
          ],
          headers: {
            description: "תיאור",
            domain: "שירות",
            expiration: "תפוגה",
            name: "שם"
          }
        },
        description: "עוגיות אלו מאפשרות לנו לספור ביקורים ומקורות תנועה כדי שנוכל למדוד ולשפר את ביצועי האתר שלנו. הן עוזרות לנו לדעת אילו דפים הם הפופולריים ביותר והפחות פופולריים ולראות כיצד מבקרים נעים באתר. כל המידע שנאסף על ידי עוגיות אלו הוא מצטבר ולכן אנונימי. אם לא תאפשר עוגיות אלו, לא נדע מתי ביקרת באתר שלנו ולא נוכל לעקוב אחר ביצועיו.",
        linkedCategory: "אנליטיקה",
        title: "עוגיות ביצועים ואנליטיקה"
      },
      {
        description: 'לכל שאלה בנוגע למדיניות העוגיות שלנו או לבחירותיך, אנא <a class="cc__link" href="https://www.plexicus.ai/contact">צור קשר</a>.',
        title: "מידע נוסף"
      }
    ],
    title: "העדפות עוגיות"
  }
}, Hg = Oi.consentModal, Vg = Oi.preferencesModal;
const Kg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: Hg,
  default: Oi,
  preferencesModal: Vg
}, Symbol.toStringTag, { value: "Module" }));
var Ii = {
  consentModal: {
    acceptAllBtn: "Terima Semua",
    acceptNecessaryBtn: "Tolak Semua",
    description: 'Situs web ini menggunakan teknologi pelacakan, seperti cookie, untuk menganalisis perilaku pengguna dan meningkatkan pengalaman Anda. Pelacakan hanya akan diaktifkan jika Anda secara eksplisit menerima. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Kelola preferensi</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Kebijakan Privasi</a>',
    showPreferencesBtn: "Kelola Preferensi",
    title: "Kami Menghargai Privasi Anda"
  },
  preferencesModal: {
    acceptAllBtn: "Terima Semua",
    acceptNecessaryBtn: "Tolak Semua",
    closeIconLabel: "Tutup",
    savePreferencesBtn: "Simpan Preferensi",
    sections: [
      {
        description: 'Kami menggunakan cookie untuk memastikan fungsionalitas dasar situs web dan untuk meningkatkan pengalaman online Anda. Anda memiliki opsi untuk memilih masuk atau keluar dari setiap kategori kapan saja. Untuk lebih jelasnya tentang cookie dan data sensitif lainnya, silakan tinjau <a href="https://www.plexicus.ai/privacy">kebijakan privasi</a> kami secara lengkap.',
        title: "Penggunaan Cookie"
      },
      {
        description: "Cookie ini penting agar situs web berfungsi dengan baik dan tidak dapat dinonaktifkan. Mereka tidak menyimpan informasi pribadi yang dapat diidentifikasi.",
        linkedCategory: "necessary",
        title: "Cookie yang Sangat Diperlukan"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Cookie ini diatur oleh <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Kedaluwarsa setelah 12 hari",
              name: "_ga"
            },
            {
              description: 'Cookie ini diatur oleh <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Sesi",
              name: "_gid"
            }
          ],
          headers: {
            description: "Deskripsi",
            domain: "Layanan",
            expiration: "Kedaluwarsa",
            name: "Nama"
          }
        },
        description: "Cookie ini memungkinkan kami untuk menghitung kunjungan dan sumber lalu lintas sehingga kami dapat mengukur dan meningkatkan kinerja situs kami. Mereka membantu kami mengetahui halaman mana yang paling dan paling tidak populer dan melihat bagaimana pengunjung bergerak di sekitar situs. Semua informasi yang dikumpulkan cookie ini bersifat agregat dan karenanya anonim. Jika Anda tidak mengizinkan cookie ini, kami tidak akan tahu kapan Anda mengunjungi situs kami, dan tidak akan dapat memantau kinerjanya.",
        linkedCategory: "analytics",
        title: "Cookie Kinerja dan Analitik"
      },
      {
        description: 'Untuk pertanyaan apa pun mengenai kebijakan cookie kami atau pilihan Anda, silakan <a class="cc__link" href="https://www.plexicus.ai/contact">hubungi kami</a>.',
        title: "Informasi Lebih Lanjut"
      }
    ],
    title: "Preferensi Cookie"
  }
}, Ug = Ii.consentModal, qg = Ii.preferencesModal;
const Yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: Ug,
  default: Ii,
  preferencesModal: qg
}, Symbol.toStringTag, { value: "Module" }));
var Ni = {
  consentModal: {
    acceptAllBtn: "Accetta tutto",
    acceptNecessaryBtn: "Rifiuta tutto",
    description: 'Questo sito web utilizza tecnologie di tracciamento, come i cookie, per analizzare il comportamento degli utenti e migliorare la tua esperienza. Il tracciamento sarà abilitato solo se accetti esplicitamente. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Gestisci preferenze</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Politica sulla privacy</a>',
    showPreferencesBtn: "Gestisci preferenze",
    title: "Apprezziamo la tua privacy"
  },
  preferencesModal: {
    acceptAllBtn: "Accetta tutto",
    acceptNecessaryBtn: "Rifiuta tutto",
    closeIconLabel: "Chiudi",
    savePreferencesBtn: "Salva preferenze",
    sections: [
      {
        description: 'Utilizziamo i cookie per garantire la funzionalità di base del sito web e per migliorare la tua esperienza online. Hai la possibilità di scegliere se accettare o rifiutare ogni categoria in qualsiasi momento. Per maggiori dettagli sui cookie e altri dati sensibili, consulta la nostra <a href="https://www.plexicus.ai/privacy">politica sulla privacy</a> completa.',
        title: "Utilizzo dei cookie"
      },
      {
        description: "Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere disabilitati. Non memorizzano alcuna informazione personale identificabile.",
        linkedCategory: "necessario",
        title: "Cookie strettamente necessari"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Questo cookie è impostato da <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Scade dopo 12 giorni",
              name: "_ga"
            },
            {
              description: 'Questo cookie è impostato da <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Sessione",
              name: "_gid"
            }
          ],
          headers: {
            description: "Descrizione",
            domain: "Servizio",
            expiration: "Scadenza",
            name: "Nome"
          }
        },
        description: "Questi cookie ci permettono di contare le visite e le fonti di traffico per misurare e migliorare le prestazioni del nostro sito. Ci aiutano a sapere quali pagine sono le più e le meno popolari e a vedere come i visitatori si muovono nel sito. Tutte le informazioni raccolte da questi cookie sono aggregate e quindi anonime. Se non consenti questi cookie, non sapremo quando hai visitato il nostro sito e non saremo in grado di monitorarne le prestazioni.",
        linkedCategory: "analisi",
        title: "Cookie di prestazione e analisi"
      },
      {
        description: 'Per qualsiasi domanda riguardante la nostra politica sui cookie o le tue scelte, ti preghiamo di <a class="cc__link" href="https://www.plexicus.ai/contact">contattarci</a>.',
        title: "Maggiori informazioni"
      }
    ],
    title: "Preferenze sui cookie"
  }
}, Zg = Ni.consentModal, Jg = Ni.preferencesModal;
const Xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: Zg,
  default: Ni,
  preferencesModal: Jg
}, Symbol.toStringTag, { value: "Module" }));
var Ti = {
  consentModal: {
    acceptAllBtn: "全てを許可",
    acceptNecessaryBtn: "全てを拒否",
    description: 'このウェブサイトは、クッキーなどの追跡技術を使用してユーザーの行動を分析し、体験を向上させます。追跡は、明示的に許可した場合のみ有効になります。<a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">設定を管理</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">プライバシーポリシー</a>',
    showPreferencesBtn: "設定を管理",
    title: "プライバシーを重視します"
  },
  preferencesModal: {
    acceptAllBtn: "全てを許可",
    acceptNecessaryBtn: "全てを拒否",
    closeIconLabel: "閉じる",
    savePreferencesBtn: "設定を保存",
    sections: [
      {
        description: 'ウェブサイトの基本機能を確保し、オンライン体験を向上させるためにクッキーを使用しています。各カテゴリをいつでも選択することができます。クッキーやその他の機密データの詳細については、完全な<a href="https://www.plexicus.ai/privacy">プライバシーポリシー</a>をご覧ください。',
        title: "クッキーの使用"
      },
      {
        description: "これらのクッキーは、ウェブサイトが正常に機能するために不可欠であり、無効にすることはできません。これらは個人を特定できる情報を保存しません。",
        linkedCategory: "必要",
        title: "厳密に必要なクッキー"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'このクッキーは<a href="#">Google Analytics</a>によって設定されます。',
              domain: "Google Analytics",
              expiration: "12日後に期限切れ",
              name: "_ga"
            },
            {
              description: 'このクッキーは<a href="#">Google Analytics</a>によって設定されます。',
              domain: "Google Analytics",
              expiration: "セッション",
              name: "_gid"
            }
          ],
          headers: {
            description: "説明",
            domain: "サービス",
            expiration: "有効期限",
            name: "名前"
          }
        },
        description: "これらのクッキーは、訪問数とトラフィックソースをカウントすることで、サイトのパフォーマンスを測定し改善することを可能にします。どのページが最も人気があるか、または人気がないかを知り、訪問者がサイト内をどのように移動するかを確認するのに役立ちます。これらのクッキーが収集する情報はすべて集約されており、匿名です。これらのクッキーを許可しない場合、サイトを訪問したことがわからず、パフォーマンスを監視することができません。",
        linkedCategory: "分析",
        title: "パフォーマンスと分析クッキー"
      },
      {
        description: 'クッキーポリシーや選択に関する質問がある場合は、<a class="cc__link" href="https://www.plexicus.ai/contact">お問い合わせください</a>。',
        title: "詳細情報"
      }
    ],
    title: "クッキー設定"
  }
}, Qg = Ti.consentModal, em = Ti.preferencesModal;
const tm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: Qg,
  default: Ti,
  preferencesModal: em
}, Symbol.toStringTag, { value: "Module" }));
var $i = {
  consentModal: {
    acceptAllBtn: "Accepteer Alles",
    acceptNecessaryBtn: "Weiger Alles",
    description: 'Deze website gebruikt trackingtechnologieën, zoals cookies, om gebruikersgedrag te analyseren en uw ervaring te verbeteren. Tracking wordt alleen ingeschakeld als u expliciet accepteert. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Beheer voorkeuren</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Privacybeleid</a>',
    showPreferencesBtn: "Beheer Voorkeuren",
    title: "Wij Waarderen Uw Privacy"
  },
  preferencesModal: {
    acceptAllBtn: "Accepteer Alles",
    acceptNecessaryBtn: "Weiger Alles",
    closeIconLabel: "Sluiten",
    savePreferencesBtn: "Voorkeuren Opslaan",
    sections: [
      {
        description: 'We gebruiken cookies om de basisfunctionaliteit van de website te garanderen en uw online ervaring te verbeteren. U heeft de mogelijkheid om op elk moment in of uit te schakelen voor elke categorie. Voor meer details over cookies en andere gevoelige gegevens, bekijk ons volledige <a href="https://www.plexicus.ai/privacy">privacybeleid</a>.',
        title: "Cookiegebruik"
      },
      {
        description: "Deze cookies zijn essentieel voor de goede werking van de website en kunnen niet worden uitgeschakeld. Ze slaan geen persoonlijk identificeerbare informatie op.",
        linkedCategory: "noodzakelijk",
        title: "Strikt Noodzakelijke Cookies"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Deze cookie wordt ingesteld door <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Verloopt na 12 dagen",
              name: "_ga"
            },
            {
              description: 'Deze cookie wordt ingesteld door <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Sessie",
              name: "_gid"
            }
          ],
          headers: {
            description: "Beschrijving",
            domain: "Dienst",
            expiration: "Verloop",
            name: "Naam"
          }
        },
        description: "Deze cookies stellen ons in staat om bezoeken en verkeersbronnen te tellen zodat we de prestaties van onze site kunnen meten en verbeteren. Ze helpen ons te weten welke pagina's het meest en minst populair zijn en hoe bezoekers zich over de site bewegen. Alle informatie die deze cookies verzamelen is geaggregeerd en dus anoniem. Als u deze cookies niet toestaat, weten we niet wanneer u onze site heeft bezocht en kunnen we de prestaties niet monitoren.",
        linkedCategory: "analytisch",
        title: "Prestatie- en Analysecookies"
      },
      {
        description: 'Voor vragen over ons cookiebeleid of uw keuzes, neem dan <a class="cc__link" href="https://www.plexicus.ai/contact">contact met ons op</a>.',
        title: "Meer Informatie"
      }
    ],
    title: "Cookievoorkeuren"
  }
}, nm = $i.consentModal, rm = $i.preferencesModal;
const im = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: nm,
  default: $i,
  preferencesModal: rm
}, Symbol.toStringTag, { value: "Module" }));
var Li = {
  consentModal: {
    acceptAllBtn: "Aksepter alle",
    acceptNecessaryBtn: "Avvis alle",
    description: 'Denne nettsiden bruker sporingsteknologier, som informasjonskapsler, for å analysere brukeradferd og forbedre din opplevelse. Sporing vil kun bli aktivert hvis du eksplisitt aksepterer. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Administrer preferanser</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Personvernpolicy</a>',
    showPreferencesBtn: "Administrer preferanser",
    title: "Vi verdsetter ditt personvern"
  },
  preferencesModal: {
    acceptAllBtn: "Aksepter alle",
    acceptNecessaryBtn: "Avvis alle",
    closeIconLabel: "Lukk",
    savePreferencesBtn: "Lagre preferanser",
    sections: [
      {
        description: 'Vi bruker informasjonskapsler for å sikre grunnleggende funksjonalitet på nettsiden og for å forbedre din online opplevelse. Du har muligheten til å velge inn eller ut av hver kategori når som helst. For mer informasjon om informasjonskapsler og andre sensitive data, vennligst se vår fullstendige <a href="https://www.plexicus.ai/privacy">personvernpolicy</a>.',
        title: "Bruk av informasjonskapsler"
      },
      {
        description: "Disse informasjonskapslene er essensielle for at nettsiden skal fungere riktig og kan ikke deaktiveres. De lagrer ingen personlig identifiserbar informasjon.",
        linkedCategory: "nødvendig",
        title: "Strengt nødvendige informasjonskapsler"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Denne informasjonskapselen settes av <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Utløper etter 12 dager",
              name: "_ga"
            },
            {
              description: 'Denne informasjonskapselen settes av <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Økt",
              name: "_gid"
            }
          ],
          headers: {
            description: "Beskrivelse",
            domain: "Tjeneste",
            expiration: "Utløp",
            name: "Navn"
          }
        },
        description: "Disse informasjonskapslene lar oss telle besøk og trafikkilder slik at vi kan måle og forbedre ytelsen til nettstedet vårt. De hjelper oss å vite hvilke sider som er mest og minst populære og se hvordan besøkende beveger seg rundt på nettstedet. All informasjon disse informasjonskapslene samler inn er aggregert og derfor anonym. Hvis du ikke tillater disse informasjonskapslene, vil vi ikke vite når du har besøkt vårt nettsted, og vil ikke kunne overvåke ytelsen.",
        linkedCategory: "analyse",
        title: "Ytelse og analyse informasjonskapsler"
      },
      {
        description: 'For spørsmål angående vår informasjonskapselpolicy eller dine valg, vennligst <a class="cc__link" href="https://www.plexicus.ai/contact">kontakt oss</a>.',
        title: "Mer informasjon"
      }
    ],
    title: "Informasjonskapselpreferanser"
  }
}, am = Li.consentModal, om = Li.preferencesModal;
const sm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: am,
  default: Li,
  preferencesModal: om
}, Symbol.toStringTag, { value: "Module" }));
var Ri = {
  consentModal: {
    acceptAllBtn: "Akceptuj wszystkie",
    acceptNecessaryBtn: "Odrzuć wszystkie",
    description: 'Ta strona używa technologii śledzenia, takich jak pliki cookie, do analizy zachowań użytkowników i poprawy Twojego doświadczenia. Śledzenie będzie włączone tylko wtedy, gdy wyraźnie zaakceptujesz. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Zarządzaj preferencjami</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Polityka prywatności</a>',
    showPreferencesBtn: "Zarządzaj preferencjami",
    title: "Cenimy Twoją prywatność"
  },
  preferencesModal: {
    acceptAllBtn: "Akceptuj wszystkie",
    acceptNecessaryBtn: "Odrzuć wszystkie",
    closeIconLabel: "Zamknij",
    savePreferencesBtn: "Zapisz preferencje",
    sections: [
      {
        description: 'Używamy plików cookie, aby zapewnić podstawową funkcjonalność strony i poprawić Twoje doświadczenie online. Masz możliwość włączenia lub wyłączenia każdej kategorii w dowolnym momencie. Aby uzyskać więcej informacji na temat plików cookie i innych wrażliwych danych, zapoznaj się z naszą pełną <a href="https://www.plexicus.ai/privacy">polityką prywatności</a>.',
        title: "Użycie plików cookie"
      },
      {
        description: "Te pliki cookie są niezbędne do prawidłowego funkcjonowania strony i nie mogą być wyłączone. Nie przechowują żadnych danych osobowych.",
        linkedCategory: "konieczne",
        title: "Ściśle niezbędne pliki cookie"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Ten plik cookie jest ustawiany przez <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Wygasa po 12 dniach",
              name: "_ga"
            },
            {
              description: 'Ten plik cookie jest ustawiany przez <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Sesja",
              name: "_gid"
            }
          ],
          headers: {
            description: "Opis",
            domain: "Usługa",
            expiration: "Wygaśnięcie",
            name: "Nazwa"
          }
        },
        description: "Te pliki cookie pozwalają nam liczyć wizyty i źródła ruchu, abyśmy mogli mierzyć i poprawiać wydajność naszej strony. Pomagają nam wiedzieć, które strony są najbardziej i najmniej popularne oraz jak odwiedzający poruszają się po stronie. Wszystkie informacje zbierane przez te pliki cookie są agregowane i anonimowe. Jeśli nie pozwolisz na te pliki cookie, nie będziemy wiedzieć, kiedy odwiedziłeś naszą stronę i nie będziemy mogli monitorować jej wydajności.",
        linkedCategory: "analityka",
        title: "Pliki cookie wydajności i analityki"
      },
      {
        description: 'W przypadku jakichkolwiek pytań dotyczących naszej polityki plików cookie lub Twoich wyborów, prosimy <a class="cc__link" href="https://www.plexicus.ai/contact">skontaktuj się z nami</a>.',
        title: "Więcej informacji"
      }
    ],
    title: "Preferencje dotyczące plików cookie"
  }
}, lm = Ri.consentModal, cm = Ri.preferencesModal;
const um = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: lm,
  default: Ri,
  preferencesModal: cm
}, Symbol.toStringTag, { value: "Module" }));
var Di = {
  consentModal: {
    acceptAllBtn: "Aceitar Tudo",
    acceptNecessaryBtn: "Rejeitar Tudo",
    description: 'Este site usa tecnologias de rastreamento, como cookies, para analisar o comportamento do usuário e melhorar sua experiência. O rastreamento só será ativado se você aceitar explicitamente. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Gerenciar preferências</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Política de Privacidade</a>',
    showPreferencesBtn: "Gerenciar Preferências",
    title: "Valorizamos Sua Privacidade"
  },
  preferencesModal: {
    acceptAllBtn: "Aceitar Tudo",
    acceptNecessaryBtn: "Rejeitar Tudo",
    closeIconLabel: "Fechar",
    savePreferencesBtn: "Salvar Preferências",
    sections: [
      {
        description: 'Usamos cookies para garantir a funcionalidade básica do site e para melhorar sua experiência online. Você tem a opção de optar por cada categoria a qualquer momento. Para mais detalhes sobre cookies e outros dados sensíveis, por favor, reveja nossa <a href="https://www.plexicus.ai/privacy">política de privacidade</a> completa.',
        title: "Uso de Cookies"
      },
      {
        description: "Esses cookies são essenciais para o funcionamento adequado do site e não podem ser desativados. Eles não armazenam nenhuma informação pessoal identificável.",
        linkedCategory: "necessário",
        title: "Cookies Estritamente Necessários"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Este cookie é definido pelo <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Expira após 12 dias",
              name: "_ga"
            },
            {
              description: 'Este cookie é definido pelo <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Sessão",
              name: "_gid"
            }
          ],
          headers: {
            description: "Descrição",
            domain: "Serviço",
            expiration: "Expiração",
            name: "Nome"
          }
        },
        description: "Esses cookies nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho do nosso site. Eles nos ajudam a saber quais páginas são as mais e menos populares e ver como os visitantes se movimentam pelo site. Todas as informações que esses cookies coletam são agregadas e, portanto, anônimas. Se você não permitir esses cookies, não saberemos quando você visitou nosso site e não poderemos monitorar seu desempenho.",
        linkedCategory: "analítica",
        title: "Cookies de Desempenho e Análise"
      },
      {
        description: 'Para quaisquer perguntas sobre nossa política de cookies ou suas escolhas, por favor <a class="cc__link" href="https://www.plexicus.ai/contact">entre em contato conosco</a>.',
        title: "Mais Informações"
      }
    ],
    title: "Preferências de Cookies"
  }
}, dm = Di.consentModal, pm = Di.preferencesModal;
const fm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: dm,
  default: Di,
  preferencesModal: pm
}, Symbol.toStringTag, { value: "Module" }));
var Bi = {
  consentModal: {
    acceptAllBtn: "Acceptera alla",
    acceptNecessaryBtn: "Avvisa alla",
    description: 'Denna webbplats använder spårningstekniker, såsom cookies, för att analysera användarbeteende och förbättra din upplevelse. Spårning kommer endast att aktiveras om du uttryckligen accepterar. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Hantera inställningar</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Integritetspolicy</a>',
    showPreferencesBtn: "Hantera inställningar",
    title: "Vi värdesätter din integritet"
  },
  preferencesModal: {
    acceptAllBtn: "Acceptera alla",
    acceptNecessaryBtn: "Avvisa alla",
    closeIconLabel: "Stäng",
    savePreferencesBtn: "Spara inställningar",
    sections: [
      {
        description: 'Vi använder cookies för att säkerställa grundläggande funktionalitet på webbplatsen och för att förbättra din onlineupplevelse. Du har möjlighet att välja in eller ut ur varje kategori när som helst. För mer information om cookies och annan känslig data, vänligen granska vår fullständiga <a href="https://www.plexicus.ai/privacy">integritetspolicy</a>.',
        title: "Cookie-användning"
      },
      {
        description: "Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt och kan inte inaktiveras. De lagrar ingen personligt identifierbar information.",
        linkedCategory: "nödvändiga",
        title: "Strikt nödvändiga cookies"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Denna cookie sätts av <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Utgår efter 12 dagar",
              name: "_ga"
            },
            {
              description: 'Denna cookie sätts av <a href="#">Google Analytics</a>.',
              domain: "Google Analytics",
              expiration: "Session",
              name: "_gid"
            }
          ],
          headers: {
            description: "Beskrivning",
            domain: "Tjänst",
            expiration: "Utgång",
            name: "Namn"
          }
        },
        description: "Dessa cookies gör det möjligt för oss att räkna besök och trafik källor så att vi kan mäta och förbättra webbplatsens prestanda. De hjälper oss att veta vilka sidor som är mest och minst populära och se hur besökare rör sig runt på webbplatsen. All information som dessa cookies samlar in är aggregerad och därför anonym. Om du inte tillåter dessa cookies kommer vi inte att veta när du har besökt vår webbplats, och kommer inte att kunna övervaka dess prestanda.",
        linkedCategory: "analys",
        title: "Prestanda- och analyscookies"
      },
      {
        description: 'För frågor angående vår cookiepolicy eller dina val, vänligen <a class="cc__link" href="https://www.plexicus.ai/contact">kontakta oss</a>.',
        title: "Mer information"
      }
    ],
    title: "Cookie-inställningar"
  }
}, hm = Bi.consentModal, gm = Bi.preferencesModal;
const mm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: hm,
  default: Bi,
  preferencesModal: gm
}, Symbol.toStringTag, { value: "Module" }));
var Fi = {
  consentModal: {
    acceptAllBtn: "Hepsini Kabul Et",
    acceptNecessaryBtn: "Hepsini Reddet",
    description: 'Bu web sitesi, kullanıcı davranışını analiz etmek ve deneyiminizi iyileştirmek için çerezler gibi izleme teknolojileri kullanır. İzleme, yalnızca açıkça kabul ederseniz etkinleştirilecektir. <a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">Tercihleri yönet</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">Gizlilik Politikası</a>',
    showPreferencesBtn: "Tercihleri Yönet",
    title: "Gizliliğinize Değer Veriyoruz"
  },
  preferencesModal: {
    acceptAllBtn: "Hepsini Kabul Et",
    acceptNecessaryBtn: "Hepsini Reddet",
    closeIconLabel: "Kapat",
    savePreferencesBtn: "Tercihleri Kaydet",
    sections: [
      {
        description: 'Web sitesinin temel işlevselliğini sağlamak ve çevrimiçi deneyiminizi geliştirmek için çerezler kullanıyoruz. Her kategoriye istediğiniz zaman katılma veya çıkma seçeneğiniz vardır. Çerezler ve diğer hassas veriler hakkında daha fazla bilgi için lütfen tam <a href="https://www.plexicus.ai/privacy">gizlilik politikamızı</a> inceleyin.',
        title: "Çerez Kullanımı"
      },
      {
        description: "Bu çerezler, web sitesinin düzgün çalışması için gereklidir ve devre dışı bırakılamaz. Kişisel olarak tanımlanabilir herhangi bir bilgi saklamazlar.",
        linkedCategory: "gerekli",
        title: "Kesinlikle Gerekli Çerezler"
      },
      {
        cookieTable: {
          body: [
            {
              description: 'Bu çerez <a href="#">Google Analytics</a> tarafından ayarlanır.',
              domain: "Google Analytics",
              expiration: "12 gün sonra sona erer",
              name: "_ga"
            },
            {
              description: 'Bu çerez <a href="#">Google Analytics</a> tarafından ayarlanır.',
              domain: "Google Analytics",
              expiration: "Oturum",
              name: "_gid"
            }
          ],
          headers: {
            description: "Açıklama",
            domain: "Servis",
            expiration: "Son Kullanma",
            name: "İsim"
          }
        },
        description: "Bu çerezler, ziyaretleri ve trafik kaynaklarını saymamıza olanak tanır, böylece sitemizin performansını ölçebilir ve iyileştirebiliriz. Hangi sayfaların en popüler ve en az popüler olduğunu bilmemize ve ziyaretçilerin site etrafında nasıl hareket ettiğini görmemize yardımcı olurlar. Bu çerezlerin topladığı tüm bilgiler toplu ve bu nedenle anonimdir. Bu çerezlere izin vermezseniz, sitemizi ne zaman ziyaret ettiğinizi bilemeyeceğiz ve performansını izleyemeyeceğiz.",
        linkedCategory: "analiz",
        title: "Performans ve Analiz Çerezleri"
      },
      {
        description: 'Çerez politikamız veya seçimlerinizle ilgili herhangi bir sorunuz için lütfen <a class="cc__link" href="https://www.plexicus.ai/contact">bize ulaşın</a>.',
        title: "Daha Fazla Bilgi"
      }
    ],
    title: "Çerez Tercihleri"
  }
}, vm = Fi.consentModal, ym = Fi.preferencesModal;
const bm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: vm,
  default: Fi,
  preferencesModal: ym
}, Symbol.toStringTag, { value: "Module" }));
var Gi = {
  consentModal: {
    acceptAllBtn: "接受全部",
    acceptNecessaryBtn: "拒绝全部",
    description: '本网站使用跟踪技术，例如 cookies，以分析用户行为并改善您的体验。只有在您明确接受的情况下，才会启用跟踪。<a href="https://www.plexicus.ai/privacy" data-cc="show-preferencesModal" class="cc__link">管理偏好</a>',
    footer: '<a href="https://www.plexicus.ai/privacy">隐私政策</a>',
    showPreferencesBtn: "管理偏好",
    title: "我们重视您的隐私"
  },
  preferencesModal: {
    acceptAllBtn: "接受全部",
    acceptNecessaryBtn: "拒绝全部",
    closeIconLabel: "关闭",
    savePreferencesBtn: "保存偏好",
    sections: [
      {
        description: '我们使用 cookies 来确保网站的基本功能并增强您的在线体验。您可以随时选择加入或退出每个类别。有关 cookies 和其他敏感数据的更多详细信息，请查看我们的完整<a href="https://www.plexicus.ai/privacy">隐私政策</a>。',
        title: "Cookie 使用"
      },
      {
        description: "这些 cookies 对网站正常运行至关重要，无法禁用。它们不会存储任何个人身份信息。",
        linkedCategory: "必要",
        title: "严格必要的 Cookies"
      },
      {
        cookieTable: {
          body: [
            {
              description: '此 cookie 由<a href="#">Google Analytics</a>设置。',
              domain: "Google Analytics",
              expiration: "12天后过期",
              name: "_ga"
            },
            {
              description: '此 cookie 由<a href="#">Google Analytics</a>设置。',
              domain: "Google Analytics",
              expiration: "会话",
              name: "_gid"
            }
          ],
          headers: {
            description: "描述",
            domain: "服务",
            expiration: "过期时间",
            name: "名称"
          }
        },
        description: "这些 cookies 使我们能够计算访问次数和流量来源，以便我们衡量和改善网站的性能。它们帮助我们了解哪些页面最受欢迎，哪些页面最不受欢迎，以及访客如何在网站上移动。这些 cookies 收集的所有信息都是汇总的，因此是匿名的。如果您不允许这些 cookies，我们将无法知道您何时访问了我们的网站，也无法监控其性能。",
        linkedCategory: "分析",
        title: "性能和分析 Cookies"
      },
      {
        description: '如果您对我们的 cookie 政策或您的选择有任何疑问，请<a class="cc__link" href="https://www.plexicus.ai/contact">联系我们</a>。',
        title: "更多信息"
      }
    ],
    title: "Cookie 偏好"
  }
}, km = Gi.consentModal, xm = Gi.preferencesModal;
const _m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  consentModal: km,
  default: Gi,
  preferencesModal: xm
}, Symbol.toStringTag, { value: "Module" })), xt = {}, fo = /* @__PURE__ */ Object.assign({ "./ar/cookie.yaml": _g, "./cs/cookie.yaml": Sg, "./da/cookie.yaml": zg, "./de/cookie.yaml": Eg, "./en/cookie.yaml": Ng, "./es/cookie.yaml": Lg, "./fi/cookie.yaml": Bg, "./fr/cookie.yaml": Wg, "./he/cookie.yaml": Kg, "./id/cookie.yaml": Yg, "./it/cookie.yaml": Xg, "./ja/cookie.yaml": tm, "./nl/cookie.yaml": im, "./no/cookie.yaml": sm, "./pl/cookie.yaml": um, "./pt/cookie.yaml": fm, "./sv/cookie.yaml": mm, "./tr/cookie.yaml": bm, "./zh/cookie.yaml": _m });
for (const e in fo) {
  const t = fo[e], r = e.replace(/^\.\/|\/$/g, "").split("/")[0];
  if (xt[r] || (xt[r] = {}), typeof t != "object" || t === null) {
    console.warn(`File ${e} is not a valid object, skipping.`);
    continue;
  }
  xt[r].cookie || (xt[r].cookie = {}), Object.assign(xt[r], t);
}
const wm = () => ({
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom right",
      equalWeightButtons: !0,
      flipButtons: !1
    },
    preferencesModal: {
      layout: "box",
      position: "left",
      equalWeightButtons: !0,
      flipButtons: !1
    }
  },
  onFirstConsent: function() {
  },
  onConsent: function(e) {
    e.cookie.categories.includes("analytics") && bg({}).page();
  },
  categories: {
    necessary: {
      readOnly: !0,
      enabled: !0
    },
    analytics: {
      autoClear: {
        cookies: [
          {
            name: /^(_ga|_gid)/
          }
        ]
      }
    }
  },
  language: {
    default: "en",
    translations: xt,
    autoDetect: "document"
  }
}), jm = ({ webUrl: e, lang: t }) => (xe(() => {
  oh(wm());
}, []), /* @__PURE__ */ l.jsx("a", { className: "underline hover:text-gray-700 cursor-pointer", onClick: Ks, children: "Show Cookie Preferences" }));
function Om({ lang: e, fullSiteUrl: t = "http://localhost:8000", fullBlogUrl: n = "http://localhost:9000", showLanguageSelector: r = !0 }) {
  const [i, a] = ye("/"), { t: o, i18n: s } = Gn();
  xe(() => {
    s.changeLanguage(e), a(e !== "en" ? `/${e}/` : "/");
  }, []);
  const u = En(t, Io), c = En(n, No), p = [
    {
      alt: o("footer.social_media.twitter"),
      link: "https://x.com/plexicus_ai/",
      icon: /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 24 24", children: /* @__PURE__ */ l.jsxs("g", { fill: "none", "fill-rule": "evenodd", children: [
        /* @__PURE__ */ l.jsx("path", { d: "m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" }),
        /* @__PURE__ */ l.jsx("path", { fill: "currentColor", d: "M19.753 4.659a1 1 0 0 0-1.506-1.317l-5.11 5.84L8.8 3.4A1 1 0 0 0 8 3H4a1 1 0 0 0-.8 1.6l6.437 8.582l-5.39 6.16a1 1 0 0 0 1.506 1.317l5.11-5.841L15.2 20.6a1 1 0 0 0 .8.4h4a1 1 0 0 0 .8-1.6l-6.437-8.582l5.39-6.16ZM16.5 19L6 5h1.5L18 19z" })
      ] }) })
    },
    {
      alt: o("footer.social_media.linkedin"),
      link: "https://www.linkedin.com/company/plexicus/",
      icon: /* @__PURE__ */ l.jsx("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ l.jsx(
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
      icon: /* @__PURE__ */ l.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: /* @__PURE__ */ l.jsx("path", { fill: "currentColor", d: "M32 1.8c-17 0-31 13.8-31 31C1 46.4 9.9 58 22.3 62.2c1.6.3 2.1-.7 2.1-1.4s0-2.7-.1-5.4c-8.6 2-10.4-4.2-10.4-4.2c-1.4-3.5-3.5-4.5-3.5-4.5c-2.8-2 .1-2 .1-2c3.1.1 4.8 3.2 4.8 3.2c2.7 4.8 7.3 3.4 9 2.5c.3-2 1.1-3.4 2-4.2c-6.8-.7-14.1-3.4-14.1-15.2c0-3.4 1.3-6.1 3.2-8.2c-.3-.7-1.4-3.9.3-8.2c0 0 2.7-.8 8.6 3.2c2.5-.7 5.1-1.1 7.8-1.1s5.4.3 7.8 1.1c5.9-3.9 8.5-3.2 8.5-3.2c1.7 4.2.7 7.5.3 8.2c2 2.1 3.2 4.9 3.2 8.2c0 11.8-7.3 14.5-14.1 15.2c1.1 1 2.1 3 2.1 5.8c0 4.2-.1 7.5-.1 8.5c0 .8.6 1.7 2.1 1.4C54.1 57.8 63 46.3 63 32.6c-.1-17-14-30.8-31-30.8" }) })
    },
    {
      alt: o("footer.social_media.instagram"),
      link: "https://www.instagram.com/plexicus_ai/",
      icon: /* @__PURE__ */ l.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "32", height: "32", viewBox: "0 0 64 64", children: [
        /* @__PURE__ */ l.jsx("path", { fill: "currentColor", d: "M62.9 19.2c-.1-3.2-.7-5.5-1.4-7.6S59.7 7.8 58 6.1s-3.4-2.7-5.4-3.5s-4.2-1.3-7.6-1.4C41.5 1 40.5 1 32 1s-9.4 0-12.8.1s-5.5.7-7.6 1.4s-3.8 1.9-5.5 3.6s-2.8 3.4-3.5 5.5c-.8 2-1.3 4.2-1.4 7.6S1 23.5 1 32s0 9.4.1 12.8s.7 5.5 1.4 7.6s1.8 3.8 3.5 5.5s3.5 2.8 5.5 3.5s4.2 1.3 7.6 1.4c3.4.2 4.3.2 12.8.2s9.4 0 12.8-.1s5.5-.7 7.6-1.4s3.8-1.8 5.5-3.5s2.8-3.5 3.5-5.5s1.3-4.2 1.4-7.6c.1-3.2.1-4.2.1-12.7s.2-9.6.1-13m-5.6 25.3c-.1 3-.7 4.6-1.1 5.8c-.6 1.4-1.3 2.5-2.4 3.5c-1.1 1.1-2.1 1.7-3.5 2.4c-1.1.4-2.7 1-5.8 1.1H32.1c-8.2 0-9.3 0-12.5-.1c-3-.1-4.6-.7-5.8-1.1c-1.4-.6-2.5-1.3-3.5-2.4c-1.1-1.1-1.7-2.1-2.4-3.5c-.4-1.1-1-2.7-1.1-5.8V32c0-8.3 0-9.3.1-12.5c.1-3 .7-4.6 1.1-5.8c.6-1.4 1.3-2.5 2.3-3.5c1.1-1.1 2.1-1.7 3.5-2.3c1.1-.4 2.7-1 5.8-1.1c3.2-.1 4.2-.1 12.5-.1s9.3 0 12.5.1c3 .1 4.6.7 5.8 1.1c1.4.6 2.5 1.3 3.5 2.3c1.1 1.1 1.7 2.1 2.4 3.5c.4 1.1 1 2.7 1.1 5.8c.1 3.2.1 4.2.1 12.5s-.1 9.3-.2 12.5" }),
        /* @__PURE__ */ l.jsx("path", { fill: "currentColor", d: "M32 16.1c-8.9 0-15.9 7.2-15.9 15.9c0 8.9 7.2 15.9 15.9 15.9s16-7 16-15.9s-7.1-15.9-16-15.9m0 26.3c-5.8 0-10.4-4.7-10.4-10.4S26.3 21.6 32 21.6c5.8 0 10.4 4.6 10.4 10.4S37.8 42.4 32 42.4" }),
        /* @__PURE__ */ l.jsx("circle", { cx: "48.7", cy: "15.4", r: "3.7", fill: "currentColor" })
      ] })
    }
  ], d = [
    {
      title: o("footer.sections.products.title"),
      items: [
        {
          link: `${u}${i}products/cnapp-platform`,
          text: o("footer.sections.products.links.platform_overview")
        },
        {
          link: `${u}${i}products/benefits`,
          text: o("footer.sections.products.links.benefits")
        },
        {
          link: `${u}${i}products/use-cases`,
          text: o("footer.sections.products.links.use_cases")
        },
        {
          link: `${u}${i}products/aspm`,
          text: o("footer.sections.products.links.aspm")
        },
        {
          link: `${u}${i}products/cspm`,
          text: o("footer.sections.products.links.cspm")
        },
        {
          link: `${u}${i}products/container`,
          text: o("footer.sections.products.links.container_security")
        },
        {
          link: `${u}${i}products/cwpp`,
          text: o("footer.sections.products.links.cwpp")
        },
        {
          link: `${u}${i}products/ciem`,
          text: o("footer.sections.products.links.ciem")
        }
      ]
    },
    {
      title: o("footer.sections.resources.title"),
      items: [
        {
          link: `${c}${i}`,
          text: o("footer.sections.resources.links.blog")
        },
        {
          link: "https://docs.plexicus.com/",
          text: o("footer.sections.resources.links.documentation")
        },
        {
          text: o("nav.resources.branding_assets"),
          link: `${u}${i}branding-assets`
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
          link: `${u}${i}integrations`
        },
        {
          text: o("nav.resources.comparison_overview"),
          link: `${u}${i}comparison/overview`
        }
      ]
    },
    {
      title: o("footer.sections.company.title"),
      items: [
        {
          link: `${u}${i}contact`,
          text: o("footer.sections.company.links.contact")
        },
        {
          link: `${u}${i}privacy`,
          text: o("footer.sections.company.links.privacy_policy")
        },
        {
          link: `${u}${i}pricing`,
          text: o("footer.sections.products.links.pricing")
        },
        {
          link: `${u}${i}support`,
          text: o("nav.resources.support")
        }
      ]
    }
  ];
  return /* @__PURE__ */ l.jsx("footer", { className: "bg-gray-50 border-t border-gray-200", children: /* @__PURE__ */ l.jsxs("div", { className: "container mx-auto px-4 md:px-6 pt-12 pb-6", children: [
    /* @__PURE__ */ l.jsxs("div", { id: "footer-grid", className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5", children: [
      /* @__PURE__ */ l.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ l.jsx(pe, { href: `${u}${i}`, className: "flex items-center gap-2 mb-4", children: /* @__PURE__ */ l.jsx("img", { src: "/images/plexicus-logo-color.png", alt: "Plexicus S.L.", className: "h-10 w-auto" }) }),
        /* @__PURE__ */ l.jsx("p", { className: "text-gray-600 mb-4 max-w-sm", children: o("footer.tagline") }),
        /* @__PURE__ */ l.jsx("div", { id: "social_links", className: "flex justify-start items-center gap-4", children: p.map(({ link: g, icon: f, alt: h }) => /* @__PURE__ */ l.jsxs(pe, { target: "_blank", href: g, className: "text-gray-400 hover:text-gray-500", children: [
          /* @__PURE__ */ l.jsx("span", { className: "sr-only", children: h }),
          f
        ] }, g)) }),
        r && /* @__PURE__ */ l.jsx("div", { className: "mt-6", children: /* @__PURE__ */ l.jsx(Ff, {}) })
      ] }),
      d.map(({ title: g, items: f }) => /* @__PURE__ */ l.jsxs("div", { children: [
        /* @__PURE__ */ l.jsx("h3", { className: "text-sm font-semibold text-purple-700 tracking-wider uppercase mb-4", children: g }),
        /* @__PURE__ */ l.jsx("ul", { className: "space-y-2", children: f.map(({ link: h, text: m }) => /* @__PURE__ */ l.jsx("li", { children: /* @__PURE__ */ l.jsx(pe, { href: h, className: "text-gray-600 hover:text-purple-700", children: m }) }, m)) })
      ] }, g))
    ] }),
    /* @__PURE__ */ l.jsx("div", { className: "mt-8 pt-6 border-t border-gray-200", children: /* @__PURE__ */ l.jsxs("div", { className: "flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-4", children: [
      /* @__PURE__ */ l.jsxs("p", { className: "text-gray-500 text-sm flex flex-col md:flex-row gap-3 ", children: [
        /* @__PURE__ */ l.jsx("div", { children: "© 2025 PLEXICUS, S.L" }),
        /* @__PURE__ */ l.jsxs("div", { children: [
          /* @__PURE__ */ l.jsx(pe, { href: `${u}${i}privacy`, className: "underline hover:text-gray-700 ml-0 ", children: o("footer.policies.privacy_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ l.jsx(pe, { href: `${u}${i}management`, className: "underline hover:text-gray-700", children: o("footer.policies.management_policy") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ l.jsx(pe, { href: `${u}${i}legal`, className: "underline hover:text-gray-700", children: o("footer.policies.legal_notice") }),
          " ",
          "·",
          " ",
          /* @__PURE__ */ l.jsx(jm, { webUrl: u, lang: i })
        ] })
      ] }),
      /* @__PURE__ */ l.jsx("div", { children: /* @__PURE__ */ l.jsxs("div", { className: "inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full border border-green-200", children: [
        /* @__PURE__ */ l.jsx("svg", { className: "w-4 h-4 mr-1", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ l.jsx(
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
export {
  Mm as CommandDialogSearch,
  Om as FooterPlexicus,
  Em as NavbarPlexicus,
  Ff as SelectLanguage,
  bg as analytics
};
